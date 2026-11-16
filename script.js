(() => {
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const header = $('#site-header');
  const bagDrawer = $('#bag-drawer');
  const inquiryDrawer = $('#inquiry-drawer');
  const scrim = $('.drawer-scrim');
  const bagTrigger = $('.bag-trigger');
  const menuToggle = $('.mobile-menu-toggle');
  const mobileNav = $('#mobile-navigation');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
 
  // WhatsApp integration
const WHATSAPP_NUMBER = '+918445868554';

function openWhatsApp(message) {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank', 'noopener,noreferrer');
}

  // Header finish changes from transparent to warm, frosted alabaster.
  const updateHeader = () => header.classList.toggle('is-scrolled', window.scrollY > 36);
  window.addEventListener('scroll', updateHeader, { passive: true });
  updateHeader();

  // Accessible drawers share one scrim and return focus to their trigger.
  let lastTrigger = null;
  function openDrawer(drawer, trigger) {
    closeMobileNav();
    lastTrigger = trigger || document.activeElement;
    [bagDrawer, inquiryDrawer].forEach(d => { d.classList.remove('is-open'); d.setAttribute('aria-hidden', 'true'); });
    drawer.classList.add('is-open');
    drawer.setAttribute('aria-hidden', 'false');
    scrim.hidden = false;
    requestAnimationFrame(() => scrim.classList.add('is-visible'));
    document.body.classList.add('drawer-open');
    if (trigger) trigger.setAttribute('aria-expanded', 'true');
    const close = $('[data-close-drawer]', drawer);
    if (close) close.focus();
  }
  function closeDrawers() {
    [bagDrawer, inquiryDrawer].forEach(d => { d.classList.remove('is-open'); d.setAttribute('aria-hidden', 'true'); });
    scrim.classList.remove('is-visible');
    document.body.classList.remove('drawer-open');
    bagTrigger.setAttribute('aria-expanded', 'false');
    $$('.inquiry-open').forEach(b => b.setAttribute('aria-expanded', 'false'));
    setTimeout(() => { scrim.hidden = true; }, 450);
    if (lastTrigger && typeof lastTrigger.focus === 'function') lastTrigger.focus();
  }
  bagTrigger.addEventListener('click', () => openDrawer(bagDrawer, bagTrigger));
  $$('.inquiry-open').forEach(btn => btn.addEventListener('click', () => {
    btn.setAttribute('aria-expanded', 'true');
    openDrawer(inquiryDrawer, btn);
  }));
  $$('[data-close-drawer]').forEach(btn => btn.addEventListener('click', closeDrawers));
  scrim.addEventListener('click', closeDrawers);
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') { closeDrawers(); closeMobileNav(); }
    const activeDrawer = $('.side-drawer.is-open');
    if (e.key === 'Tab' && activeDrawer) {
      const focusables = $$('button:not([disabled]),a[href],input,textarea', activeDrawer).filter(el => el.offsetParent !== null);
      if (!focusables.length) return;
      const first = focusables[0], last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });

  // Mobile navigation.
  function openMobileNav() {
    mobileNav.classList.add('is-open');
    mobileNav.setAttribute('aria-hidden', 'false');
    menuToggle.setAttribute('aria-expanded', 'true');
    menuToggle.setAttribute('aria-label', 'Close navigation');
    document.body.classList.add('drawer-open');
    $('.mobile-nav-close').focus();
  }
  function closeMobileNav() {
    if (!mobileNav.classList.contains('is-open')) return;
    mobileNav.classList.remove('is-open');
    mobileNav.setAttribute('aria-hidden', 'true');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Open navigation');
    if (!bagDrawer.classList.contains('is-open') && !inquiryDrawer.classList.contains('is-open')) document.body.classList.remove('drawer-open');
  }
  menuToggle.addEventListener('click', () => mobileNav.classList.contains('is-open') ? closeMobileNav() : openMobileNav());
  $('.mobile-nav-close').addEventListener('click', closeMobileNav);
  $$('#mobile-navigation a').forEach(a => a.addEventListener('click', closeMobileNav));

  // Curated menu filtering.
  const filters = $$('.filter-button');
  const menuItems = $$('.menu-item');
  filters.forEach(button => button.addEventListener('click', () => {
    filters.forEach(f => { const active = f === button; f.classList.toggle('is-active', active); f.setAttribute('aria-pressed', String(active)); });
    const category = button.dataset.filter;
    menuItems.forEach(item => {
      const show = category === 'all' || item.dataset.category === category;
      item.classList.toggle('is-hidden', !show);
      if (!show) { item.classList.remove('is-expanded'); $('.menu-item-main', item).setAttribute('aria-expanded', 'false'); }
    });
  }));

  // Desktop hover preview; mobile tap opens a compact image accordion.
  
  const fixedPreview = $('#menu-preview-image');
  const fixedCaption = $('#menu-preview-caption');
  const isMobile = () => window.matchMedia('(max-width: 767px)').matches;
  menuItems.forEach(item => {
    const row = $('.menu-item-main', item);
    row.addEventListener('click', () => {
      if (isMobile()) {
        const willOpen = !item.classList.contains('is-expanded');
        menuItems.forEach(other => { other.classList.remove('is-expanded'); $('.menu-item-main', other).setAttribute('aria-expanded', 'false'); });
        item.classList.toggle('is-expanded', willOpen);
        row.setAttribute('aria-expanded', String(willOpen));
      }
    });
    row.addEventListener('mouseenter', () => {
  if (!isMobile()) {
    fixedPreview.src = item.dataset.image;
    fixedCaption.textContent =
      item.querySelector('.item-number').textContent +
      ' — ' + item.dataset.name;
  }
});
  });

  // Simple live bag state, quantity-aware and accessible.
  const bag = new Map();
  const money = amount => '₹' + amount.toLocaleString('en-IN');
  function renderBag() {
    const count = [...bag.values()].reduce((sum, item) => sum + item.qty, 0);
    const total = [...bag.values()].reduce((sum, item) => sum + item.qty * item.price, 0);
    $('.bag-count').textContent = count;
    $('.bag-drawer-count').textContent = ` (${count})`;
    $('.bag-total strong').textContent = money(total);
    const container = $('.bag-items');
    container.innerHTML = '';
    if (!bag.size) {
      const empty = document.createElement('p'); empty.className = 'empty-bag'; empty.innerHTML = 'A little something for later?<br>Your bag is waiting.'; container.append(empty);
    } else {
      bag.forEach((item, key) => {
        const line = document.createElement('div'); line.className = 'bag-line';
        const info = document.createElement('div');
        const title = document.createElement('span'); title.textContent = item.name;
        const meta = document.createElement('small'); meta.textContent = `${item.qty} × ${money(item.price)}`;
        info.append(title, meta);
        const actions = document.createElement('div');
        const remove = document.createElement('button'); remove.type = 'button'; remove.textContent = 'Remove'; remove.setAttribute('aria-label', `Remove ${item.name} from bag`);
        remove.addEventListener('click', () => { bag.delete(key); renderBag(); });
        actions.append(remove); line.append(info, actions); container.append(line);
      });
    }
  }
  $$('.item-add').forEach(button => button.addEventListener('click', e => {
    e.stopPropagation();
    const item = button.closest('.menu-item');
    const key = item.dataset.name;
    if (bag.has(key)) bag.get(key).qty += 1;
    else bag.set(key, { name: key, price: Number(item.dataset.price), qty: 1 });
    renderBag();
    button.textContent = 'Added ✓';
    setTimeout(() => button.textContent = '+ Add', 1100);
  }));
  $('.checkout-button').addEventListener('click', () => {
  if (!bag.size) {
    $('.empty-bag').textContent = 'Your bag is still empty. Choose a bake from the menu to begin.';
    return;
  }

  const order = [...bag.values()]
    .map(item => `${item.qty} × ${item.name} (${money(item.price * item.qty)})`)
    .join('\n');

  const total = [...bag.values()]
    .reduce((sum, item) => sum + item.qty * item.price, 0);

  const message = `Hello sidewalk!

I'd like to place an order:

${order}

Total: ${money(total)}

Please confirm availability and collection details.

Thank you!`;

  openWhatsApp(message);
});
  renderBag();

  // Newsletter validation is local-demo only; connect to an email platform for production.
  $('#newsletter-form').addEventListener('submit', e => {
    e.preventDefault();
    const input = $('#newsletter-email');
    const message = $('.form-message', e.currentTarget);
    if (!input.validity.valid || !input.value.trim()) { message.textContent = 'Please enter a valid email address.'; input.focus(); return; }
    message.textContent = 'Thank you — you’re on the list (demo).';
    e.currentTarget.reset();
  });
  $('#inquiry-form').addEventListener('submit', e => {
  e.preventDefault();

  const form = e.currentTarget;

  if (!form.reportValidity()) return;

  const data = new FormData(form);

  const message = `Hello sidewalk!

I'd like to enquire about a bespoke cake.

Name: ${data.get('name')}
Email: ${data.get('email')}
Occasion: ${data.get('occasion')}
Details: ${data.get('details')}

Please contact me with more details.

Thank you!`;

  openWhatsApp(message);

  $('.form-message', form).textContent =
    'WhatsApp is opening with your enquiry ready to send.';
});

  // Lenis + GSAP progressive enhancement. Native scrolling remains the fallback.
  if (!reducedMotion && window.Lenis && window.gsap) {
    const lenis = new Lenis({ duration: 1.15, smoothWheel: true, wheelMultiplier: .9 });
    window.gsap.registerPlugin(window.ScrollTrigger);
    lenis.on('scroll', window.ScrollTrigger.update);
    window.gsap.ticker.add(time => lenis.raf(time * 1000));
    window.gsap.ticker.lagSmoothing(0);
    window.ScrollTrigger.scrollerProxy(document.body, {
      scrollTop(value) { return arguments.length ? lenis.scrollTo(value, { immediate: true }) : window.scrollY; },
      getBoundingClientRect() { return { top: 0, left: 0, width: innerWidth, height: innerHeight }; }
    });
    window.ScrollTrigger.addEventListener('refresh', () => lenis.resize());
    window.gsap.fromTo('.hero-image', { scale: 1.1 }, { scale: 1, duration: 2.1, ease: 'power3.out' });
    window.gsap.utils.toArray('.line-mask h2').forEach(el => {
      window.gsap.fromTo(el, { yPercent: 105 }, { yPercent: 0, duration: 1.15, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 82%' } });
    });
    window.gsap.utils.toArray('.craft-photo img,.celebration-image img,.interlude img').forEach(img => {
      window.gsap.fromTo(img, { scale: 1.08 }, { scale: 1, ease: 'none', scrollTrigger: { trigger: img, start: 'top bottom', end: 'bottom top', scrub: true } });
    });
    window.ScrollTrigger.refresh();
  }
})();

/* ==========================================================================
   LUXURY PAGE TRANSITION CURTAIN (index.html <-> menu.html)
   ========================================================================== */
(function initLuxuryPageTransition() {
  // 1. Create & inject the transition veil
  const veil = document.createElement("div");
  veil.id = "luxury-page-veil";
  veil.innerHTML = `
    <div style="text-align:center;">
      <div style="font-family:'Cormorant Garamond',serif;font-size:1.8rem;letter-spacing:0.28em;color:#241914;font-weight:600;">SIDEWALK</div>
      <div style="width:48px;height:1px;background:#C5A059;margin:8px auto 0;"></div>
    </div>
  `;

  Object.assign(veil.style, {
    position: "fixed",
    inset: "0",
    backgroundColor: "#FAF7F2",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: "99999",
    opacity: "1",
    pointerEvents: "all",
    transition: "opacity 0.55s cubic-bezier(0.22, 1, 0.36, 1)"
  });

  document.body.appendChild(veil);

  // 2. Fade veil out smoothly when page finishes loading
  window.addEventListener("pageshow", () => {
    requestAnimationFrame(() => {
      veil.style.opacity = "0";
      veil.style.pointerEvents = "none";
    });
  });

  // 3. Intercept internal navigation links to menu.html or index.html
  document.addEventListener("click", (e) => {
    const link = e.target.closest("a");
    if (!link) return;

    const href = link.getAttribute("href");
    if (!href || href.startsWith("#") || href.startsWith("mailto:") || link.target === "_blank") {
      return;
    }

    if (href.endsWith(".html") || href.includes(".html#"))  {
      e.preventDefault();
      veil.style.pointerEvents = "all";
      veil.style.opacity = "1";

      setTimeout(() => {
        window.location.href = href;
      }, 480);
    }
  });
})();

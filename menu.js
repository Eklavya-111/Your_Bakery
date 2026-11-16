/**
 * SIDEWALK LUXURY INTERACTIVE MENU BOOK (menu.js)
 * Powered by StPageFlip — Contains 58+ items from the Sidewalk Menu PDF
 */

document.addEventListener("DOMContentLoaded", () => {
  const flipbookEl = document.getElementById("flipbook");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const pageCounter = document.getElementById("pageCounter");
  const tabButtons = document.querySelectorAll(".tab-btn");

  // =========================================================================
  // 1. COMPLETE MENU DATA (58 ITEMS FROM SIDEWALK PDF + ARTISAN BREADS)
  // =========================================================================
  const menuPagesData = [
    // PAGE 1 (Index 1): Chapter I — Artisan Breads & Viennoiserie
    {
      pageNumber: "01",
      kicker: "CHAPTER I • MORNING BAKERY",
      title: "Artisan Breads & Viennoiserie",
      subtitle: "Freshly laminated pastries & slow-fermented loaves baked at dawn",
      heroImage: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=900&q=80",
      heroCaption: "French Butter Viennoiserie • 335 INR",
      items: [
        {
          name: "Plain French Butter Croissant",
          price: "₹335",
          meta: "176 kcal / 80g",
          desc: "Classic 27-layer flaky golden viennoiserie crafted with cultured butter.",
          type: "veg"
        },
        {
          name: "Artisanal Chocolate Croissant",
          price: "₹335",
          meta: "335 kcal / 90g",
          desc: "Crisp puff pastry folded around twin batons of dark couverture chocolate.",
          type: "non-veg"
        },
        {
          name: "Roasted Multigrain Croissant",
          price: "₹335",
          meta: "315 kcal / 90g",
          desc: "Wholesome laminated dough studded with toasted flax, sunflower, and oats.",
          type: "veg"
        },
        {
          name: "Almond Frangipane Bostock",
          price: "₹335",
          meta: "As per item",
          desc: "Morning Bakery selection brushed with orange blossom syrup & sliced almonds.",
          type: "veg"
        },
        {
          name: "Caramelized Cinnamon Kouign-Amann",
          price: "₹335",
          meta: "As per item",
          desc: "Breton laminated morning cake with a crisp caramelized sugar crust.",
          type: "veg"
        },
        {
          name: "Classic Pain au Raisin",
          price: "₹335",
          meta: "As per item",
          desc: "Swirled pastry cream danish studded with plump rum-soaked golden raisins.",
          type: "veg"
        },
        {
          name: "Rustic Country Sourdough Boule",
          price: "₹335",
          meta: "As per item",
          desc: "36-hour naturally leavened artisanal loaf with a blistered espresso crust.",
          type: "veg"
        }
      ]
    },

    // PAGE 2 (Index 2): Chapter I Cont. — Artisanal Loaves & Morning Selection
    {
      pageNumber: "02",
      kicker: "CHAPTER I • BOULANGERIE",
      title: "Hearth Loaves & Danish",
      subtitle: "Selection of Morning Bakery crafted daily by our master bakers",
      items: [
        {
          name: "French Tradition Baguette",
          price: "₹335",
          meta: "As per item",
          desc: "Crisp golden crust with an open, honeycombed cream crumb.",
          type: "veg"
        },
        {
          name: "Rosemary & Sea Salt Focaccia",
          price: "₹335",
          meta: "As per item",
          desc: "High-hydration extra virgin olive oil flatbread dimpled with fresh herbs.",
          type: "veg"
        },
        {
          name: "Brioche Nanterre",
          price: "₹335",
          meta: "As per item",
          desc: "Pillow-soft enriched French loaf with a delicate golden egg glaze.",
          type: "non-veg"
        },
        {
          name: "Roasted Garlic & Olive Ciabatta",
          price: "₹335",
          meta: "As per item",
          desc: "Italian slipper bread folded with Kalamata olives and slow-roasted garlic.",
          type: "veg"
        },
        {
          name: "Madagascar Vanilla Custard Danish",
          price: "₹335",
          meta: "As per item",
          desc: "Crisp pastry crown filled with silky bourbon-vanilla bean crème pâtissière.",
          type: "veg"
        },
        {
          name: "Belgian Hazelnut Twist",
          price: "₹335",
          meta: "As per item",
          desc: "Braided morning brioche layered with roasted Piedmont hazelnut praline.",
          type: "veg"
        },
        {
          name: "Cardamom & Pistachio Knot",
          price: "₹335",
          meta: "As per item",
          desc: "Scandinavian-style spiced morning bun finished with pearl sugar.",
          type: "veg"
        }
      ]
    },

    // PAGE 3 (Index 3): Chapter II — Signature Cakes & Petite Tarts
    {
      pageNumber: "03",
      kicker: "CHAPTER II • PÂTISSERIE",
      title: "Signature Cakes & Pastries",
      subtitle: "Decadent chocolate creations, seasonal fruits & glazing artistry",
      heroImage: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=80",
      heroCaption: "Signature Pastry Slices • 693 INR",
      items: [
        {
          name: "Belgian Chocolate Truffle Slice",
          price: "₹693",
          meta: "333 kcal / 180g",
          desc: "Layered dark chocolate sponge with satin ganache and chocolate curls.",
          type: "veg"
        },
        {
          name: "Seasonal Fresh Fruit Gateau Slice",
          price: "₹693",
          meta: "497 kcal / 180g",
          desc: "Light vanilla génoise layered with chantilly cream and glazed orchard fruits.",
          type: "non-veg"
        },
        {
          name: "Chef's Pastry of the Day",
          price: "₹693",
          meta: "As per item",
          desc: "Bespoke daily creation from our vitrine featuring seasonal single-origin notes.",
          type: "veg"
        },
        {
          name: "Mango & Passionfruit Entremet",
          price: "₹693",
          meta: "As per item",
          desc: "Alphonso mango mousse bar finished with edible violas and mirror glaze.",
          type: "veg"
        },
        {
          name: "Gourmet Citrus & Berry Éclair",
          price: "₹693",
          meta: "As per item",
          desc: "Crisp choux pastry piped with diplomat cream, berry compote, and blueberry.",
          type: "non-veg"
        },
        {
          name: "Dark Chocolate Cup & Chantilly",
          price: "₹693",
          meta: "As per item",
          desc: "Artisanal tempered chocolate cup crowned with whipped cream and white chocolate.",
          type: "veg"
        },
        {
          name: "Classic French Opera Slice",
          price: "₹693",
          meta: "As per item",
          desc: "Almond joconde soaked in espresso syrup with coffee buttercream & ganache.",
          type: "non-veg"
        }
      ]
    },

    // PAGE 4 (Index 4): Chapter III — Savory Bakery & Puff Pastries
    {
      pageNumber: "04",
      kicker: "CHAPTER III • SAVORY BAKERY",
      title: "Artisanal Puffs & Combos",
      subtitle: "Golden flaky puff pastries and curated bakery pairing menus",
      items: [
        {
          name: "Chargrilled Chicken Tikka Puff",
          price: "₹470",
          meta: "474 kcal / 150g",
          desc: "Spiced clay-oven chicken tikka folded inside crisp butter puff pastry.",
          type: "non-veg"
        },
        {
          name: "Wild Mushroom & Goat Cheese Puff",
          price: "₹392",
          meta: "406 kcal / 150g",
          desc: "Sautéed forest mushrooms and creamy artisanal chèvre in flaky pastry.",
          type: "veg"
        },
        {
          name: "Jumbo Spiced Vegetable Samosa",
          price: "₹392",
          meta: "438 kcal / 400g",
          desc: "Crisp hand-folded pastry filled with royal cumin potatoes and green peas.",
          type: "veg"
        },
        {
          name: "Spiced Cottage Cheese Paneer Puff",
          price: "₹392",
          meta: "391 kcal / 150g",
          desc: "Soft malai paneer tossed with bell peppers and roasted masala in puff crust.",
          type: "veg"
        },
        {
          name: "Garden Herb Vegetable Puff",
          price: "₹392",
          meta: "294 kcal / 150g",
          desc: "Seasonal root vegetables and aromatic herbs baked in golden flaky layers.",
          type: "veg"
        },
        {
          name: "Sidewalk Combo Meal I",
          price: "₹1,334",
          meta: "Curated Pairing",
          desc: "Warm Soup of the Day • Choice of Tea or Coffee • Choice of Slice of Cake.",
          type: "veg"
        },
        {
          name: "Sidewalk Combo Meal II",
          price: "₹1,490",
          meta: "Curated Pairing",
          desc: "Warm Soup of the Day • Choice of Tea or Coffee • Choice of Artisanal Sandwich.",
          type: "veg"
        },
        {
          name: "Sidewalk Grand Combo Meal III",
          price: "₹1,645",
          meta: "Three-Course Pairing",
          desc: "Soup of the Day • Tea or Coffee • Artisanal Sandwich • Choice of Slice of Cake.",
          type: "veg"
        }
      ]
    },

    // PAGE 5 (Index 5): Chapter IV — Salads & Grilled Paninis
    {
      pageNumber: "05",
      kicker: "CHAPTER IV • GOURMET KITCHEN",
      title: "Harvest Salads & Paninis",
      subtitle: "Crisp farm greens and hearth-pressed artisanal sandwiches",
      heroImage: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=900&q=80",
      heroCaption: "Pressed Artisanal Paninis • Served with Fries or Wedges",
      items: [
        {
          name: "Mediterranean Greek Salad",
          price: "₹1,355",
          meta: "192 kcal / 200g",
          desc: "Mixed green leaves, tomato, Kalamata olive, cucumber, onion, bell pepper, feta, lemon oregano dressing.",
          type: "veg"
        },
        {
          name: "Warm Goat Cheese & Sorghum Salad",
          price: "₹1,390",
          meta: "662 kcal / 240g",
          desc: "Mix greens, slow-cooked sorghum, roasted walnut, goat cheese, croutons, lemon & olive oil.",
          type: "veg"
        },
        {
          name: "Cajun Chicken Cobb Salad",
          price: "₹1,546",
          meta: "525 kcal / 300g",
          desc: "Cajun rubbed grilled chicken, avocado, boiled eggs, goat cheese, mix leaves, tomato, cucumber.",
          type: "non-veg"
        },
        {
          name: "Grilled Caprese Panini Sandwich",
          price: "₹1,607",
          meta: "184 kcal / 330g",
          desc: "Fresh buffalo mozzarella, vine-ripened tomato, basil pesto. Served with fries or potato wedges.",
          type: "veg"
        },
        {
          name: "Grilled Ham & Cheddar Panini",
          price: "₹1,628",
          meta: "182 kcal / 300g",
          desc: "Artisanal cooked ham, aged cheddar cheese, Dijon mustard. Served with fries or potato wedges.",
          type: "non-veg"
        }
      ]
    },

    // PAGE 6 (Index 6): Chapter IV Cont. — Deli Sandwiches & Brioche Burgers
    {
      pageNumber: "06",
      kicker: "CHAPTER IV • SANDWICHES & BURGERS",
      title: "Club Sandwiches & Burgers",
      subtitle: "Accompanied by crisp French fries or seasoned potato wedges",
      items: [
        {
          name: "Artisanal Vegetarian Deli Sandwich",
          price: "₹705",
          meta: "As per item",
          desc: "Selection of freshly baked bakery bread layered with grilled vegetables & herb spread.",
          type: "veg"
        },
        {
          name: "Chef's Non-Vegetarian Deli Sandwich",
          price: "₹877",
          meta: "As per item",
          desc: "Selection of roast chicken or cold cuts layered in fresh artisanal bread.",
          type: "non-veg"
        },
        {
          name: "Gourmet Garden Vegetarian Burger",
          price: "₹1,968",
          meta: "642 kcal / 200g",
          desc: "Toasted brioche bun, lettuce, tomato, onion, gherkin, choice of Cheddar, Emmental, or Gruyère.",
          type: "veg"
        },
        {
          name: "Chargrilled Chicken Brioche Burger",
          price: "₹2,364",
          meta: "396 kcal / 200g",
          desc: "Juicy grilled chicken breast, lettuce, tomato, onion, gherkin, choice of Swiss/Cheddar & bacon.",
          type: "non-veg"
        },
        {
          name: "Artisanal Spiced Lamb Burger",
          price: "₹2,752",
          meta: "410 kcal / 200g",
          desc: "Seared prime lamb patty, lettuce, tomato, onion, gherkin, Gruyère/Emmental & crispy bacon.",
          type: "non-veg"
        }
      ]
    },

    // PAGE 7 (Index 7): Chapter V — Fine Hot Teas & Artisanal Hot Brews
    {
      pageNumber: "07",
      kicker: "CHAPTER V • SPECIALTY BEVERAGES",
      title: "Fine Teas & Espresso Bar",
      subtitle: "Single-estate loose leaf infusions and freshly roasted coffee brews",
      heroImage: "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=900&q=80",
      heroCaption: "Artisanal Hot Brews & Single-Estate Teas",
      items: [
        {
          name: "Classic Black Tea Selection",
          price: "₹681",
          meta: "Pot / Cup",
          desc: "Choice of robust English Breakfast, full-bodied Assam, or First-Flush Darjeeling.",
          type: "veg"
        },
        {
          name: "Soothing Herbal Infusions",
          price: "₹681",
          meta: "Caffeine-Free / Green",
          desc: "Choice of Organic Green Tea, Fragrant Jasmine, Golden Chamomile, or Peppermint.",
          type: "veg"
        },
        {
          name: "Indiano Royal Chai",
          price: "₹681",
          meta: "Simmered with Milk",
          desc: "Choice of Homemade Masala Chai or Aromatic Green Cardamom Tea.",
          type: "veg"
        },
        {
          name: "International Tea Sommelier",
          price: "₹681",
          meta: "Specialty Leaf",
          desc: "Choice of Bergamot Earl Grey, Ceremonial Matcha, Oolong, Hibiscus, or Sacred Tulsi.",
          type: "veg"
        },
        {
          name: "Regular Black Hot Brews",
          price: "₹750",
          meta: "100% Arabica",
          desc: "Choice of Classic Americano, Freshly Brewed Black Coffee, Single or Double Espresso.",
          type: "veg"
        },
        {
          name: "Velvet Milk Coffees",
          price: "₹750",
          meta: "Barista Crafted",
          desc: "Choice of Cappuccino, Café Latte, Café Mocha, Espresso Macchiato, or Flat White.",
          type: "veg"
        },
        {
          name: "Traditional South Indian Filter Coffee",
          price: "₹750",
          meta: "Indiano Signature",
          desc: "Slow-dripped chicory-kissed peaberry decoction frothed with hot farm milk.",
          type: "veg"
        },
        {
          name: "Gourmet Flavored Hot Brews",
          price: "₹848",
          meta: "Infused Latte/Cappuccino",
          desc: "Custom crafted with Roasted Hazelnut, Rich Caramel, Butterscotch, or Warm Cinnamon.",
          type: "veg"
        }
      ]
    },

    // PAGE 8 (Index 8): Chapter V Cont. — Cold Brews, Shakes, Smoothies & Refreshers
    {
      pageNumber: "08",
      kicker: "CHAPTER V • CHILLED ELIXIRS",
      title: "Cold Brews, Shakes & Smoothies",
      subtitle: "Hand-spun decadent shakes, nutrient-rich smoothies & iced infusions",
      items: [
        {
          name: "Homemade Luxury Hot Chocolate",
          price: "₹750",
          meta: "Dark or White",
          desc: "Melted Belgian couverture whisked to velvet perfection in choice of Dark or White chocolate.",
          type: "veg"
        },
        {
          name: "Artisanal Iced Tea & Spiced Iced Chai",
          price: "₹681",
          meta: "Chilled Infusion",
          desc: "Choice of Lemon, Peach, Green Apple, Strawberry Iced Tea, or Chilled Masala Chai.",
          type: "veg"
        },
        {
          name: "Classic & Flavored Cold Brews",
          price: "₹750 / ₹848",
          meta: "18-Hr Steeped",
          desc: "Classic over ice (₹750) or Flavored: Vietnamese Condensed Milk, Vanilla Latte, Caramel Macchiato (₹848).",
          type: "veg"
        },
        {
          name: "Classic Hand-Spun Milkshakes",
          price: "₹652",
          meta: "109–114 kcal / 100ml",
          desc: "Choice of Madagascar Vanilla (109 kcal), Belgian Chocolate (114 kcal), or Fresh Strawberry (109 kcal).",
          type: "veg"
        },
        {
          name: "Sidewalk Signature Indulgent Shakes",
          price: "₹790",
          meta: "183–382 kcal / 100ml",
          desc: "Choice of Crunchy Oreo (183 kcal), Banana Caramel (216 kcal), or Fudge Brownie & Walnut (382 kcal).",
          type: "veg"
        },
        {
          name: "Classic Fruit & Honey Smoothies",
          price: "₹652",
          meta: "120–305 kcal / 100ml",
          desc: "Choice of Banana & Kiwi (148 kcal), Papaya Cardamom (120 kcal), or Fig, Dates & Honey (305 kcal).",
          type: "veg"
        },
        {
          name: "Signature Superfood Smoothies",
          price: "₹790",
          meta: "150–239 kcal / 100ml",
          desc: "Choice of Mixed Berry, Chia & Mint (239 kcal), Tender Coconut (200 kcal), or Apple Cinnamon (150 kcal).",
          type: "veg"
        },
        {
          name: "Sparkling Refreshers & Perrier",
          price: "₹335 – ₹650",
          meta: "Chilled",
          desc: "Fresh Lime Soda/Water • Aerated Beverages • Artisanal Mineral Water • Perrier Sparkling 330ml.",
          type: "veg"
        }
      ]
    }
  ];

  // =========================================================================
  // 2. BUILD BOOK HTML (FRONT COVER + 8 INTERIOR PAGES + BACK COVER)
  // =========================================================================
  function buildBookDOM() {
    let html = "";

    // --- FRONT COVER (Index 0) ---
    html += `
      <div class="menu-page cover-page" data-density="hard">
        <div class="page-border">
          <div class="corner-ornament tl"></div>
          <div class="corner-ornament tr"></div>
          <div class="corner-ornament bl"></div>
          <div class="corner-ornament br"></div>

          <div>
            <div class="cover-badge">EST. NEW DELHI • ARTISANAL PATISSERIE</div>
            <h1 class="cover-title">SIDEWALK</h1>
            <p class="cover-subtitle">Boulangerie, Pâtisserie &amp; Salon de Thé</p>
            <div class="cover-divider"></div>
          </div>

          <div class="cover-hero-frame">
            <img src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=80" alt="Sidewalk Artisanal Pastries" />
          </div>

          <div>
            <div class="cover-divider"></div>
            <p class="cover-footer-note">FOOD &amp; BEVERAGE COLLECTION</p>
            <p class="cover-edition">Click or drag corner to open menu →</p>
          </div>
        </div>
      </div>
    `;

    // --- 8 INTERIOR PAGES (Indices 1 to 8) ---
    menuPagesData.forEach((page) => {
      const heroBlock = page.heroImage
        ? `
          <div class="spread-hero">
            <img src="${page.heroImage}" alt="${page.title}" loading="lazy" />
            <span class="spread-hero-caption">${page.heroCaption}</span>
          </div>
        `
        : "";

      const itemsHTML = page.items
        .map(
          (item) => `
          <div class="menu-item">
            <div class="item-top-row">
              <span class="item-name">
                ${item.name}
                <span class="dietary-dot ${item.type}" title="${
            item.type === "veg" ? "Vegetarian" : "Contains Egg / Non-Veg"
          }">●</span>
              </span>
              <span class="item-leader"></span>
              <span class="item-price">${item.price}</span>
            </div>
            <div class="item-bottom-row">
              <span class="item-desc">${item.desc}</span>
              <span class="item-meta">${item.meta}</span>
            </div>
          </div>
        `
        )
        .join("");

      html += `
        <div class="menu-page" data-density="soft">
          <div class="page-border">
            <div class="corner-ornament tl"></div>
            <div class="corner-ornament tr"></div>
            <div class="corner-ornament bl"></div>
            <div class="corner-ornament br"></div>

            <div class="page-header">
              <span class="chapter-kicker">${page.kicker}</span>
              <h2 class="chapter-title">${page.title}</h2>
              <p class="chapter-subtitle">${page.subtitle}</p>
            </div>

            ${heroBlock}

            <div class="menu-items-list">
              ${itemsHTML}
            </div>

            <div class="page-footer">
              <span>All prices in INR • 10% Service Charge &amp; Govt. Taxes Applicable</span>
              <span class="page-number-badge">— ${page.pageNumber} —</span>
            </div>
          </div>
        </div>
      `;
    });

    // --- BACK COVER (Index 9) ---
    html += `
      <div class="menu-page cover-page" data-density="hard">
        <div class="page-border">
          <div class="corner-ornament tl"></div>
          <div class="corner-ornament tr"></div>
          <div class="corner-ornament bl"></div>
          <div class="corner-ornament br"></div>

          <div style="margin-top: auto; margin-bottom: auto;">
            <div class="cover-badge">MERCI BEAUCOUP</div>
            <h2 class="cover-title" style="font-size: 2.3rem;">SIDEWALK</h2>
            <p class="cover-subtitle">Crafted with Passion &amp; Finest Ingredients</p>
            <div class="cover-divider"></div>
            <p style="font-size: 0.78rem; line-height: 1.7; color: rgba(250,247,242,0.82); max-width: 320px; margin: 1.2rem auto;">
              An average active adult requires 2,000 kcal energy per day.
              If you have any dietary restrictions, allergies, or food intolerances,
              please let our servers know in advance.
            </p>
            <div class="cover-divider"></div>
            <p class="cover-footer-note" style="margin-top: 1.5rem;">● VEGETARIAN &nbsp;|&nbsp; ● CONTAINS EGG / MEAT</p>
          </div>
        </div>
      </div>
    `;

    flipbookEl.innerHTML = html;
  }

  buildBookDOM();

  // =========================================================================
  // 3. INITIALIZE StPageFlip ENGINE (2-PAGE SPREAD DESKTOP / 1-PAGE MOBILE)
  // =========================================================================
  const isMobile = window.innerWidth < 850;
  const mobileWidth = Math.min(window.innerWidth - 24, 420); // Fits 320px–430px phones cleanly
  const mobileHeight = Math.min(window.innerHeight - 170, 660);

  const pageFlip = new St.PageFlip(flipbookEl, {
    width: isMobile ? mobileWidth : 520,
    height: isMobile ? mobileHeight : 750,
    size: "fixed",
    maxShadowOpacity: 0.45,
    showCover: true,
    mobileScrollSupport: true,     // Enables natural touch drag & swipe on mobile
    usePortrait: isMobile,         // Single-page view on mobile, 2-page spread on desktop
    flippingTime: 750
  });

  pageFlip.loadFromHTML(document.querySelectorAll(".menu-page"));

  // =========================================================================
  // 4. SMART NAVIGATION, LIVE COUNTER & CHAPTER TAB SYNCHRONIZATION
  // =========================================================================
  const totalPages = pageFlip.getPageCount();

  function updateUI(currentPageIndex) {
    // Update Page Counter Label
    if (currentPageIndex === 0) {
      pageCounter.textContent = `Front Cover — Page 1 of ${totalPages}`;
    } else if (currentPageIndex === totalPages - 1) {
      pageCounter.textContent = `Back Cover — Page ${totalPages} of ${totalPages}`;
    } else {
      const orientation = pageFlip.getOrientation();
      if (orientation === "landscape" && currentPageIndex % 2 === 1 && currentPageIndex + 1 < totalPages) {
        pageCounter.textContent = `Viewing Spread — Pages ${currentPageIndex + 1}–${currentPageIndex + 2} of ${totalPages}`;
      } else {
        pageCounter.textContent = `Page ${currentPageIndex + 1} of ${totalPages}`;
      }
    }

    // Enable/Disable Prev & Next buttons
    prevBtn.disabled = currentPageIndex === 0;
    nextBtn.disabled = currentPageIndex >= totalPages - 1;

    // Highlight active Chapter Tab
    tabButtons.forEach((btn) => btn.classList.remove("active"));
    let activeTab = tabButtons[0];

    if (currentPageIndex === 0) {
      activeTab = document.querySelector('.tab-btn[data-page="0"]');
    } else if (currentPageIndex <= 2) {
      activeTab = document.querySelector('.tab-btn[data-page="1"]');
    } else if (currentPageIndex <= 4) {
      activeTab = document.querySelector('.tab-btn[data-page="3"]');
    } else if (currentPageIndex <= 6) {
      activeTab = document.querySelector('.tab-btn[data-page="5"]');
    } else if (currentPageIndex === 7) {
      activeTab = document.querySelector('.tab-btn[data-page="7"]');
    } else {
      activeTab = document.querySelector('.tab-btn[data-page="8"]');
    }

    if (activeTab) activeTab.classList.add("active");
  }

  // Listen to StPageFlip turn events
  pageFlip.on("flip", (e) => {
    updateUI(e.data);
  });

  // Button Controls
  prevBtn.addEventListener("click", () => {
    pageFlip.flipPrev();
  });

  nextBtn.addEventListener("click", () => {
    pageFlip.flipNext();
  });

  // Quick-Jump Chapter Tabs
  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const targetPageIndex = parseInt(button.getAttribute("data-page"), 10);
      pageFlip.flip(targetPageIndex);
    });
  });

  // Keyboard Arrow Navigation Support
  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") pageFlip.flipNext();
    if (e.key === "ArrowLeft") pageFlip.flipPrev();
  });

  // Initial state sync
  updateUI(0);
  let lastIsMobile = isMobile;
  window.addEventListener("resize", () => {
    const nowMobile = window.innerWidth < 850;
    if (nowMobile !== lastIsMobile) {
      window.location.reload();
    }
  });
});

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

    if (href.includes("menu.html") || href.includes("index.html")) {
      e.preventDefault();
      veil.style.pointerEvents = "all";
      veil.style.opacity = "1";

      setTimeout(() => {
        window.location.href = href;
      }, 480);
    }
  });
})();
const menuItems = [
    // --- Porotta Rolls ---
    { id: 1, name: "Chicken Parotta Roll", price: 47, category: "rolls", type: "non-veg", sub: "Porotta Rolls" },
    { id: 2, name: "Porotta Lays Chicken Mix", price: 54, category: "rolls", type: "non-veg", sub: "Porotta Rolls" },
    { id: 3, name: "Lahori Porotta Roll", price: 75, category: "rolls", type: "non-veg", sub: "Porotta Rolls" },
    { id: 4, name: "Porotta Lays Omelette Roll", price: 49, category: "rolls", type: "non-veg", sub: "Porotta Rolls" }, // Egg is usually non-veg in binary toggles
    { id: 5, name: "Mughlai Porotta Roll", price: 79, category: "rolls", type: "non-veg", sub: "Porotta Rolls" },
    { id: 6, name: "Steak Porotta Roll", price: 79, category: "rolls", type: "non-veg", sub: "Porotta Rolls" },
    { id: 7, name: "Bombay Porotta Roll", price: 94, category: "rolls", type: "non-veg", sub: "Porotta Rolls" },
    { id: 8, name: "Desi Sheekh Roll", price: 89, category: "rolls", type: "non-veg", sub: "Porotta Rolls" },
    { id: 9, name: "Jumbo King Roll", price: 125, category: "rolls", type: "non-veg", sub: "Porotta Rolls" },

    // --- Taco Grilled Porottas ---
    { id: 10, name: "Classic Grilled Porotta", price: 56, category: "rolls", type: "non-veg", sub: "Taco Grilled Porottas" },
    { id: 11, name: "Grilled Porotta Lays Mix", price: 69, category: "rolls", type: "non-veg", sub: "Taco Grilled Porottas" },
    { id: 12, name: "Lucknow Grilled Porotta", price: 94, category: "rolls", type: "non-veg", sub: "Taco Grilled Porottas" },
    { id: 13, name: "Sikandar Grilled Porotta", price: 94, category: "rolls", type: "non-veg", sub: "Taco Grilled Porottas" },

    // --- Club Sandwiches ---
    { id: 14, name: "Mughlai Club", price: 149, category: "sandwiches", type: "non-veg", sub: "Club Sandwiches" },
    { id: 15, name: "Steak Club", price: 149, category: "sandwiches", type: "non-veg", sub: "Club Sandwiches" },
    { id: 16, name: "Mixed Club", price: 159, category: "sandwiches", type: "non-veg", sub: "Club Sandwiches" },
    { id: 17, name: "Old Madras Club", price: 149, category: "sandwiches", type: "non-veg", sub: "Club Sandwiches" },

    // --- Desi Loaded Porottas ---
    { id: 18, name: "Egg Thoofan", price: 75, category: "rolls", type: "non-veg", sub: "Desi Loaded Porottas" },
    { id: 19, name: "Classic Cheeripanath", price: 75, category: "rolls", type: "non-veg", sub: "Desi Loaded Porottas" },
    { id: 20, name: "Chicky Boom", price: 99, category: "rolls", type: "non-veg", sub: "Desi Loaded Porottas" },
    { id: 21, name: "Yolk N Chick", price: 79, category: "rolls", type: "non-veg", sub: "Desi Loaded Porottas" },

    // --- Refreshing Mocktails ---
    { id: 22, name: "Blood Orange", price: 99, category: "mocktails", type: "veg", sub: "Refreshing Mocktails" },
    { id: 23, name: "Mint Mojito", price: 99, category: "mocktails", type: "veg", sub: "Refreshing Mocktails" },
    { id: 24, name: "Cool Blue", price: 99, category: "mocktails", type: "veg", sub: "Refreshing Mocktails" },
    { id: 25, name: "Passion Fruit", price: 99, category: "mocktails", type: "veg", sub: "Refreshing Mocktails" },
    { id: 26, name: "Peach Blue", price: 99, category: "mocktails", type: "veg", sub: "Refreshing Mocktails" },

    // --- Classic Indian Ice Creams ---
    { id: 27, name: "Sulthan Gudbud", price: 149, category: "icecream", type: "veg", sub: "Classic Indian Ice Creams" },
    { id: 28, name: "Bombay Falooda", price: 149, category: "icecream", type: "veg", sub: "Classic Indian Ice Creams" },
    { id: 29, name: "Kulfi Gudbud", price: 159, category: "icecream", type: "veg", sub: "Classic Indian Ice Creams" },
    { id: 30, name: "Dry Fruit Salad", price: 119, category: "icecream", type: "veg", sub: "Classic Indian Ice Creams" },
    { id: 31, name: "Nostalgic Fruit Salad", price: 99, category: "icecream", type: "veg", sub: "Classic Indian Ice Creams" },

    // --- Pocket Money Milkshakes ---
    { id: 32, name: "Chikku Go Wild", price: 69, category: "drinks", type: "veg", sub: "Pocket Money Milkshakes" },
    { id: 33, name: "Oreo ", price: 69, category: "drinks", type: "veg", sub: "Pocket Money Milkshakes" },
    { id: 34, name: "Oreo Mango ", price: 89, category: "drinks", type: "veg", sub: "Pocket Money Milkshakes" },
    { id: 35, name: "Papaya Shake", price: 79, category: "drinks", type: "veg", sub: "Pocket Money Milkshakes" },
    { id: 36, name: "Horlicks Melt", price: 89, category: "drinks", type: "veg", sub: "Pocket Money Milkshakes" },
    { id: 37, name: "Choco Banana", price: 89, category: "drinks", type: "veg", sub: "Pocket Money Milkshakes" },
    { id: 38, name: "Apple Shake", price: 89, category: "drinks", type: "veg", sub: "Pocket Money Milkshakes" },
    { id: 39, name: "Anar Shake", price: 89, category: "drinks", type: "veg", sub: "Pocket Money Milkshakes" },
    { id: 40, name: "Mango Shake", price: 0, category: "drinks", type: "veg", sub: "Pocket Money Milkshakes" }, // Price not listed, assuming seasonal/market
    { id: 41, name: "Strawberry Chill", price: 79, category: "drinks", type: "veg", sub: "Pocket Money Milkshakes" },
    { id: 42, name: "Butterscotch", price: 89, category: "drinks", type: "veg", sub: "Pocket Money Milkshakes" },
    { id: 43, name: "Cucumber Body Cooler", price: 79, category: "drinks", type: "veg", sub: "Pocket Money Milkshakes" },
    { id: 44, name: "Badam Shake", price: 69, category: "drinks", type: "veg", sub: "Pocket Money Milkshakes" },
    { id: 45, name: "Cold Coffee Blast", price: 89, category: "drinks", type: "veg", sub: "Pocket Money Milkshakes" },
    { id: 46, name: "KitKat Shake", price: 79, category: "drinks", type: "veg", sub: "Pocket Money Milkshakes" },

    // --- Desi Burgers ---
    { id: 47, name: "Mughlai Burger", price: 99, category: "burgers", type: "non-veg", sub: "Desi Burgers" },
    { id: 48, name: "Steak Burger", price: 99, category: "burgers", type: "non-veg", sub: "Desi Burgers" },
    { id: 49, name: "OMG Burger", price: 149, category: "burgers", type: "non-veg", sub: "Desi Burgers" },
    { id: 50, name: "Fatty Uncle Burger", price: 149, category: "burgers", type: "non-veg", sub: "Desi Burgers" },
    { id: 51, name: "Cab’s Own Burger", price: 149, category: "burgers", type: "non-veg", sub: "Desi Burgers" },
    { id: 52, name: "Desi King Burger", price: 149, category: "burgers", type: "non-veg", sub: "Desi Burgers" },
    { id: 53, name: "Omelette Lays Bun", price: 79, category: "burgers", type: "non-veg", sub: "Desi Burgers" },

    // --- Grilled Sandwiches ---
    { id: 54, name: "Mughlai Sandwich", price: 95, category: "sandwiches", type: "non-veg", sub: "Grilled Sandwiches" },
    { id: 55, name: "Masala Sandwich", price: 89, category: "sandwiches", type: "non-veg", sub: "Grilled Sandwiches" },
    { id: 56, name: "Steak Sandwich", price: 95, category: "sandwiches", type: "non-veg", sub: "Grilled Sandwiches" },
    { id: 57, name: "Old Madras Sandwich", price: 95, category: "sandwiches", type: "non-veg", sub: "Grilled Sandwiches" }
];

// Configuration
let currentCategory = 'all';
let currentFilter = 'all'; // all, veg, non-veg
let cart = {}; // { itemId: quantity }

// DOM Elements
const menuGrid = document.getElementById('menuGrid');
const navItems = document.querySelectorAll('.nav-item');
const toggleOptions = document.querySelectorAll('.toggle-option');
const toggleBg = document.querySelector('.toggle-bg');
const vegToggle = document.getElementById('vegToggle');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderMenu();
});

// Event Listeners for Category Nav
navItems.forEach(item => {
    item.addEventListener('click', () => {
        // Active visual state
        navItems.forEach(nav => nav.classList.remove('active'));
        item.classList.add('active');

        // Logic
        currentCategory = item.dataset.category;
        renderMenu();
        updatePillPosition(item);

        // Mobile: Scroll to top of content
        document.getElementById('menuContent').scrollTop = 0;
    });
});

// Initial Pill Position
window.addEventListener('load', () => {
    const activeNav = document.querySelector('.nav-item.active');
    if (activeNav) updatePillPosition(activeNav);
});

function updatePillPosition(element) {
    const pill = document.querySelector('.nav-active-pill');
    if (!pill || !element) return;

    const nav = document.querySelector('.bottom-nav');
    if (!nav) return;

    // Get relative position within the scrollable nav
    const navRect = nav.getBoundingClientRect();

    // Target the WHOLE ELEMENT as requested ("words and icon combined")
    // const icon = element.querySelector('.nav-icon-img') || element.querySelector('.nav-icon-fa');
    const targetEl = element;
    const targetRect = targetEl.getBoundingClientRect();

    // Calculate relative left (account for scroll)
    const relativeLeft = targetRect.left - navRect.left + nav.scrollLeft;

    // Size pill
    const pillSize = 70;
    pill.style.width = `${pillSize}px`;
    pill.style.height = `${pillSize}px`;

    // Center logic
    const centerOffset = (targetRect.width - pillSize) / 2;
    const topOffset = (navRect.height - pillSize) / 2;

    // Shift MORE to the left as requested (-11px)
    pill.style.transform = `translateX(${relativeLeft + centerOffset - 11}px)`;
    pill.style.top = `${topOffset}px`;
}

// Scroll Indicator Logic 
const bottomNav = document.querySelector('.bottom-nav');
const scrollIndicator = document.querySelector('.scroll-indicator');

if (bottomNav && scrollIndicator) {
    scrollIndicator.style.opacity = '1';

    const hideScroll = () => {
        if (bottomNav.scrollLeft > 10) {
            scrollIndicator.style.transition = 'opacity 0.5s ease';
            scrollIndicator.style.opacity = '0';
            setTimeout(() => {
                if (scrollIndicator.parentNode) scrollIndicator.remove();
            }, 500);
            bottomNav.removeEventListener('scroll', hideScroll);
        }
    };

    bottomNav.addEventListener('scroll', hideScroll);
}


// Scroll Animation Observer
const observerOptions = {
    threshold: 0, // Trigger immediately on intersect
    rootMargin: "50px 0px 0px 0px" // Pre-load slightly before
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        } else {
            // Optional: fade out when scrolling up/away? User asked for "fade in and out respectively"
            // Usually fade out on exit is distracting, but let's try strict viewport.
            entry.target.classList.remove('visible');
        }
    });
}, observerOptions);

// Event Listeners for Veg/Non-Veg Toggle
toggleOptions.forEach((option, index) => {
    option.addEventListener('click', () => {
        // Visual state in parent
        toggleOptions.forEach(opt => opt.classList.remove('active'));
        option.classList.add('active');

        // Move background
        if (index === 0) toggleBg.style.transform = 'translateX(0%)'; // ALL (Left)
        if (index === 1) toggleBg.style.transform = 'translateX(100%)'; // VEG (Center)
        if (index === 2) toggleBg.style.transform = 'translateX(200%)'; // NON (Right)

        // Logic
        currentFilter = option.dataset.type;

        // Dynamic Color for Parent Toggle
        vegToggle.classList.remove('veg-mode', 'non-veg-mode');
        if (currentFilter === 'veg') {
            vegToggle.classList.add('veg-mode');
        } else if (currentFilter === 'non-veg') {
            vegToggle.classList.add('non-veg-mode');
        }

        renderMenu();
    });
});

// Custom Display Order
const displayOrder = [
    "Porotta Rolls",
    "Taco Grilled Porottas",
    "Desi Loaded Porottas",
    "Club Sandwiches",
    "Grilled Sandwiches",
    "Desi Burgers",
    "Refreshing Mocktails",
    "Pocket Money Milkshakes",
    "Classic Indian Ice Creams"
];

// Cart Interaction
const cartFloat = document.getElementById('cartFloat');
const cartOverlay = document.getElementById('cartOverlay');
const dimLayer = document.getElementById('dimLayer');
const appContainer = document.querySelector('.app-container');
const closeCartBtn = document.querySelector('.close-cart');

if (cartFloat) {
    cartFloat.addEventListener('click', () => {
        // Open Cart
        cartOverlay.classList.add('active');
        appContainer.classList.add('dimmed');
        // Stop hovering animation when open?
        cartFloat.style.animation = 'none';
    });
}

if (closeCartBtn) {
    closeCartBtn.addEventListener('click', () => {
        cartOverlay.classList.remove('active');
        appContainer.classList.remove('dimmed');
        // Restore hover
        cartFloat.style.animation = 'hoverFloat 3s ease-in-out infinite';
    });
}

// Close on dim layer click
if (dimLayer) {
    dimLayer.addEventListener('click', () => {
        cartOverlay.classList.remove('active');
        appContainer.classList.remove('dimmed');
        cartFloat.style.animation = 'hoverFloat 3s ease-in-out infinite';
    });
}

function renderMenu() {
    menuGrid.innerHTML = '';

    // Filter Items
    let filteredItems = menuItems.filter(item => {
        const catMatch = currentCategory === 'all' || item.category === currentCategory;

        // Smart Filter: Drinks, Mocktails, Ice Cream show in BOTH Veg and Non-Veg modes
        const isNeutralCategory = ['drinks', 'mocktails', 'icecream'].includes(item.category);

        let typeMatch = currentFilter === 'all' || item.type === currentFilter;
        if (currentFilter !== 'all' && isNeutralCategory) {
            typeMatch = true; // Always show neutral categories
        }

        return catMatch && typeMatch;
    });

    if (filteredItems.length === 0) {
        menuGrid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; color: var(--text-secondary); padding: 50px;">No items found.</div>`;
        return;
    }

    // Group items by sub-category
    const groups = {};
    filteredItems.forEach(item => {
        if (!groups[item.sub]) groups[item.sub] = [];
        groups[item.sub].push(item);
    });

    // Determine correct sort order
    let sortedKeys;
    if (currentCategory === 'all') {
        // Use custom order
        sortedKeys = displayOrder.filter(key => groups[key]); // Only include keys that exist in filtered set
        // Add any remaining keys not in custom order at the end
        Object.keys(groups).forEach(key => {
            if (!sortedKeys.includes(key)) sortedKeys.push(key);
        });
    } else {
        // Maintain default order found in raw data (which is roughly preservation of array order)
        // Or simply keys order
        sortedKeys = Object.keys(groups);
    }

    sortedKeys.forEach(sub => {
        const groupItems = groups[sub];
        // 1. Create Section Title
        const sectionTitle = document.createElement('div');
        sectionTitle.className = 'section-title';
        sectionTitle.innerHTML = `<i class="fa-solid fa-angle-right"></i> ${sub}`;

        menuGrid.appendChild(sectionTitle);
        observer.observe(sectionTitle);

        // 2. Special Image for Desi Loaded Porottas
        if (sub === "Desi Loaded Porottas") {
            const banner = document.createElement('img');
            banner.src = "assets/desi loaded parottas.png";
            banner.className = "section-banner";
            banner.alt = "Desi Loaded Special";
            banner.onerror = function () { this.style.display = 'none'; }; // Hide if not found
            menuGrid.appendChild(banner);
            observer.observe(banner);
        }

        // 3. Render Items
        groupItems.forEach((item, index) => {
            const el = createItemElement(item, index);
            menuGrid.appendChild(el);
            observer.observe(el); // Observe new items
        });

        if (sectionTitle) observer.observe(sectionTitle);
    });
}

function createItemElement(item, index) {
    const div = document.createElement('div');
    // Ensure 'selected' class is added if item is in cart
    div.className = `menu-item ${cart[item.id] ? 'selected' : ''}`;
    div.dataset.id = item.id;
    div.style.animationDelay = `${index * 0.05}s`; // Stagger animation

    const count = cart[item.id] || 0;

    // Controls HTML - 3D Interface
    let controlsHtml = '';
    if (count === 0) {
        controlsHtml = `
            <button class="add-btn" onclick="updateCartState(${item.id}, 1)">
                <i class="fa-solid fa-plus"></i>
            </button>
        `;
    } else {
        controlsHtml = `
            <div class="item-controls-3d">
                <button class="control-btn minus" onclick="updateCartState(${item.id}, -1)">
                    <i class="fa-solid fa-minus"></i>
                </button>
                <div class="digital-display">
                    <span class="digital-num glow">${count}</span>
                </div>
                <button class="control-btn plus" onclick="updateCartState(${item.id}, 1)">
                    <i class="fa-solid fa-plus"></i>
                </button>
            </div>
        `;
    }

    div.innerHTML = `
        <div class="item-details">
            <div class="item-header">
                <div>
                    <div class="item-name">${item.name}</div>
                </div>
                <span class="veg-mark ${item.type}"></span>
            </div>
            <div style="display: flex; justify-content: space-between; align-items: flex-end; margin-top: 10px;">
                <span class="item-price">₹${item.price > 0 ? item.price : 'Seasonal'}</span>
                <div class="controls-wrapper">
                    ${controlsHtml}
                </div>
            </div>
        </div>
    `;
    return div;
}

// Global Cart Functions
window.updateCartState = function (id, change) {
    if (!cart[id]) cart[id] = 0;
    cart[id] += change;

    if (cart[id] <= 0) {
        delete cart[id];
    }

    // Update UI In-Place (No flicker)
    const card = document.querySelector(`.menu-item[data-id="${id}"]`);
    if (card) {
        updateCardControls(card, id);

        // Update selection glow
        if (cart[id]) {
            card.classList.add('selected');
        } else {
            card.classList.remove('selected');
        }
    }

    // Update Floating Button
    updateCartFloatingButton();

    // Update Cart Overlay if open
    if (document.getElementById('cartOverlay').classList.contains('active')) {
        renderCartItems();
    }
};

function updateCardControls(card, id) {
    const count = cart[id] || 0;
    const priceEl = card.querySelector('.price-controls-container'); // We need a container or target the right div
    // Since structure is fixed, let's target the div containing controls.
    // Structure: .item-details > flex-row > .item-price + controls

    const controlsContainer = card.querySelector('.controls-wrapper');

    // Create controls HTML
    let controlsHtml = '';
    if (count === 0) {
        controlsHtml = `
            <button class="add-btn" onclick="updateCartState(${id}, 1)">
                <i class="fa-solid fa-plus"></i>
            </button>
        `;
        if (controlsContainer) controlsContainer.innerHTML = controlsHtml;
    } else {
        // If already showing controls, just update number with fade
        const display = card.querySelector('.digital-num');
        if (display && controlsContainer.querySelector('.item-controls-3d')) {
            // Already in control mode, update number
            animateNumberChange(display, count);
        } else {
            // Switch to controls mode
            controlsHtml = `
                <div class="item-controls-3d">
                    <button class="control-btn minus" onclick="updateCartState(${id}, -1)">
                        <i class="fa-solid fa-minus"></i>
                    </button>
                    <div class="digital-display">
                        <span class="digital-num glow">${count}</span>
                    </div>
                    <button class="control-btn plus" onclick="updateCartState(${id}, 1)">
                        <i class="fa-solid fa-plus"></i>
                    </button>
                </div>
            `;
            if (controlsContainer) controlsContainer.innerHTML = controlsHtml;
        }
    }
}

function animateNumberChange(element, newNumber) {
    element.classList.remove('fade-in');
    element.classList.add('fade-out');
    setTimeout(() => {
        element.textContent = newNumber;
        element.classList.remove('fade-out');
        element.classList.add('fade-in');
    }, 150);
}

function updateCartFloatingButton() {
    const floatBtn = document.getElementById('cartFloat');
    if (!floatBtn) return;

    const totalItems = Object.values(cart).reduce((a, b) => a + b, 0);
    const totalCountEl = floatBtn.querySelector('.cart-count');

    if (totalCountEl) totalCountEl.textContent = totalItems;

    if (totalItems > 0) {
        floatBtn.classList.remove('hidden');
    } else {
        floatBtn.classList.add('hidden');
    }
}

// Render Cart Inside Overlay
function renderCartItems() {
    const container = document.querySelector('.cart-items-container');
    const totalAmount = document.querySelector('.total-amount');

    if (!container) return;

    container.innerHTML = '';
    let total = 0;

    // header
    if (Object.keys(cart).length === 0) {
        container.innerHTML = '<div style="text-align:center; color:#666; padding:20px;">Cart is empty</div>';
        if (totalAmount) totalAmount.textContent = '₹0';
        return;
    }

    Object.keys(cart).forEach(id => {
        const item = menuItems.find(i => i.id == id);
        if (!item) return;
        const qty = cart[id];
        const itemTotal = item.price * qty;
        total += itemTotal;

        const row = document.createElement('div');
        row.className = 'cart-item-row';
        row.innerHTML = `
            <div class="cart-item-name">${item.name}</div>
            <div class="cart-dots"></div>
            <div class="cart-controls-mini">
                <button class="cart-btn-mini minus" onclick="updateCartState(${item.id}, -1)">
                    <i class="fa-solid fa-minus"></i>
                </button>
                <div class="cart-qty-display digital-num glow">${qty}</div>
                <button class="cart-btn-mini plus" onclick="updateCartState(${item.id}, 1)">
                    <i class="fa-solid fa-plus"></i>
                </button>
            </div>
        `;
        container.appendChild(row);
    });

    // Update Total Value Text
    if (totalAmount) {
        totalAmount.textContent = `₹${total}`;
    }
}

// Bind Total Trigger Event
function initTotalTrigger() {
    const totalTrigger = document.getElementById('totalTrigger');
    const totalReveal = document.getElementById('totalReveal');

    if (totalTrigger && totalReveal) {
        // Clone to clean listeners
        const newTrigger = totalTrigger.cloneNode(true);
        totalTrigger.parentNode.replaceChild(newTrigger, totalTrigger);

        newTrigger.addEventListener('click', () => {
            const isActive = totalReveal.classList.toggle('active');
            const icon = newTrigger.querySelector('i');

            if (isActive) {
                if (icon) icon.className = "fa-solid fa-caret-up";
            } else {
                if (icon) icon.className = "fa-solid fa-caret-down";
            }
        });
    }
}

document.addEventListener('DOMContentLoaded', initTotalTrigger);

if (cartFloat) {
    cartFloat.addEventListener('click', () => {
        renderCartItems();
        // Give DOM a chance to render cart if needed, then init trigger
        setTimeout(initTotalTrigger, 50);
    });
}

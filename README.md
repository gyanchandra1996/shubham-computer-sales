# Shubham Computer Sales – E-commerce Product Showcase Website

A modern, responsive, and high-performance static e-commerce website designed for **Shubham Computer Sales**, featuring electronics, computers, laptops, printers, accessories, shopping cart with localStorage persistence, and seamless **WhatsApp Click-to-Chat ordering integration**.

---

## 🌟 Key Features

1. **Electronics Store Theme**:
   - Clean white background paired with deep dark navy blue (`#0b132b`, `#1c2541`) and electric blue (`#0066ff`, `#2563eb`) accents.
   - Elegant typography with *Plus Jakarta Sans* and *Inter*.
   - Responsive layouts optimized for mobile, tablet, and desktop viewports.
   - Smooth hover micro-interactions, elevation shadows, and animated badge indicators.

2. **16 Electronics & Computer Categories**:
   - Computers, Laptops, Printers, Printer Accessories, Printer Ink & Toner, Computer Accessories, Processors, Speakers, Chargers & Adapters, Cables & Connectors, Keyboard & Mouse, Storage Devices (SSD, HDD, Pen Drive), RAM & Motherboards, Networking Devices, UPS & Power Backup, and CCTV & Accessories.

3. **Complete WhatsApp Ordering System (No Backend Required)**:
   - **Single Product Order**: Generates an encoded pre-filled WhatsApp message with product name, price, quantity, and request for stock confirmation.
   - **Shopping Cart Checkout**: Combines all items in the customer's cart, unit prices, quantities, and calculated total amount into a single formatted order message sent directly to WhatsApp.
   - **General WhatsApp Support**: Floating WhatsApp button and header button for immediate live store assistance.

4. **Product Search & Filtering**:
   - Live search with instant dropdown suggestions.
   - Filter by all 16 categories.
   - Filter by brand (HP, Dell, Lenovo, Acer, Asus, Canon, Epson, Brother, Intel, AMD, Logitech, Zebronics, etc.).
   - Sort by Price (Low to High / High to Low), Customer Rating, and Alphabetical.
   - Synchronized with browser URL parameters (`?category=...&brand=...&search=...`).

5. **Frontend Shopping Cart**:
   - Add to Cart, Remove Item, and adjust quantities (+ / -).
   - Persisted across page refreshes via `localStorage`.
   - Real-time cart drawer with subtotal and estimated total calculation.

6. **Product Detail View**:
   - Detailed product view with zoom preview, specifications table, key highlights, stock status, quantity picker, and related products.

7. **Toast Notifications**:
   - Non-intrusive floating toast notifications for user interactions (adding items, updating quantities, removing items, link copying).

---

## 📁 Project Structure

```
c:/subhamcomputersales/
├── public/
│   └── favicon.svg              # Tech computer & chip favicon
├── src/
│   ├── components/
│   │   ├── Navbar.jsx           # Responsive header with search, cart badge, WhatsApp CTA
│   │   ├── Footer.jsx           # Store info, categories, quick links, copyright
│   │   ├── Hero.jsx             # Hero banner with statistics and visual showcase
│   │   ├── ProductCard.jsx      # Product card with price, stock, cart & WhatsApp buttons
│   │   ├── CategoryCard.jsx     # Category card with icon, image, and count
│   │   ├── WhatsAppButton.jsx   # WhatsApp Click-to-Chat button generator
│   │   ├── Cart.jsx             # Sliding cart drawer with checkout via WhatsApp
│   │   └── ToastContainer.jsx   # Floating toast notifications
│   ├── pages/
│   │   ├── Home.jsx             # Homepage (Hero, 16 Categories, Featured, Why Us, Brands, Visit)
│   │   ├── Products.jsx         # Catalog page with search, category/brand filters & sorting
│   │   ├── ProductDetails.jsx   # Product page with specifications, gallery & related items
│   │   └── Contact.jsx          # Contact info, map, business hours, FAQ, WhatsApp form
│   ├── data/
│   │   ├── config.js            # Store contact information and WhatsApp URL generators
│   │   ├── categories.js        # Category definitions and popular brand lists
│   │   └── products.js          # Product catalog data with prices, specs, and stock
│   ├── context/
│   │   └── CartContext.jsx      # Global cart state management with localStorage
│   ├── App.jsx                  # Main application router with scroll restoration
│   ├── index.css                # Tailwind CSS layers and custom styles
│   └── main.jsx                 # React root entry point
├── index.html                   # HTML entry with Google Fonts & SEO meta tags
├── tailwind.config.js           # Custom colors (navy, electric, whatsapp) and fonts
├── postcss.config.js
└── package.json
```

---

## 🚀 How to Run Locally

### 1. Install Dependencies
```bash
npm install
```

### 2. Start the Development Server
```bash
npm run dev
```

The application will start at `http://localhost:5173`.

### 3. Build for Production
```bash
npm run build
```
The optimized static production files will be output to the `dist/` directory, ready to be hosted on Netlify, Vercel, GitHub Pages, or any static hosting service.

---

## ⚙️ WhatsApp & Store Configuration

To update the shop phone number, address, or WhatsApp number, simply edit `src/data/config.js`:

```javascript
export const SHOP_CONFIG = {
  name: "Shubham Computer Sales",
  whatsappNumber: "919876543210", // International format without + or spaces
  displayWhatsApp: "+91 98765 43210",
  displayPhone: "+91 98765 43210",
  email: "sales@shubhamcomputersales.com",
  address: "Shop No. 12, Commercial IT Hub, Station Road, Mumbai, Maharashtra 400001",
  // ...
};
```

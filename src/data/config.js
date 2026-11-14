export const SHOP_CONFIG = {
  name: "Shubham Computer Sales",
  tagline: "Your One-Stop Destination for Computer & Printer Solutions",
  subheading: "Explore Quality Computers, Printers, Laptops, Accessories and More at the Best Prices in Azamgarh (UP).",
  whatsappNumber: "918858352762", // International format without + or spaces
  displayWhatsApp: "+91 88583 52762",
  displayPhone: "+91 88583 52762",
  alternatePhone: "+91 88583 52762",
  email: "sales@shubhamcomputersales.com",
  address: "Gorath, Azamgarh, Uttar Pradesh (UP), India - 276001",
  landmark: "Gorath Market, Azamgarh, UP",
  mapUrl: "https://maps.google.com/?q=Gorath+Azamgarh+Uttar+Pradesh",
  businessHours: {
    weekdays: "Monday – Saturday: 10:00 AM – 8:30 PM",
    sunday: "Sunday: 11:00 AM – 5:00 PM",
    support: "24/7 WhatsApp Chat Support: 8858352762"
  }
};

/**
 * Generate WhatsApp Click-to-Chat URL for a single product order
 */
export function getProductWhatsAppUrl(product, quantity = 1) {
  const formattedPrice = product.price ? `₹${product.price.toLocaleString('en-IN')}` : 'Contact for Price';
  
  const message = `Hello Shubham Computer Sales,

I am interested in ordering the following product:

Product Name: ${product.name}
Product Price: ${formattedPrice}
Quantity: ${quantity}

Please share availability and final price for delivery in Azamgarh / Gorath UP.

Thank you.`;

  return `https://wa.me/${SHOP_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

/**
 * Generate WhatsApp Click-to-Chat URL for the entire shopping cart checkout
 */
export function getCartWhatsAppUrl(cartItems, totalAmount) {
  if (!cartItems || cartItems.length === 0) return `https://wa.me/${SHOP_CONFIG.whatsappNumber}`;

  let itemsText = cartItems.map((item, idx) => {
    const itemPrice = item.price ? `₹${item.price.toLocaleString('en-IN')}` : 'N/A';
    const subtotal = item.price ? `₹${(item.price * item.quantity).toLocaleString('en-IN')}` : 'Contact';
    return `${idx + 1}. ${item.name} (${item.brand})\n   Qty: ${item.quantity} | Unit: ${itemPrice} | Subtotal: ${subtotal}`;
  }).join('\n\n');

  const totalFormatted = `₹${totalAmount.toLocaleString('en-IN')}`;
  const totalCount = cartItems.reduce((acc, curr) => acc + curr.quantity, 0);

  const message = `Hello Shubham Computer Sales (Gorath, Azamgarh),

I would like to place an order for the following items from my cart:

${itemsText}

----------------------------------------
Total Items Count: ${totalCount}
Estimated Total Amount: ${totalFormatted}
----------------------------------------

Please confirm product availability, shipping/pickup details at Gorath Azamgarh, and final invoice.

Thank you!`;

  return `https://wa.me/${SHOP_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

/**
 * Quick general inquiry URL
 */
export function getGeneralWhatsAppUrl(customNote = "") {
  const message = `Hello Shubham Computer Sales (Gorath, Azamgarh),
  
I have an inquiry regarding your computer, printer & electronics products/services.
${customNote ? `Note: ${customNote}\n` : ''}
Please assist me. Thank you!`;

  return `https://wa.me/${SHOP_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

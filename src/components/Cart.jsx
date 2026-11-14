import React from 'react';
import { useCart } from '../context/CartContext';
import { getCartWhatsAppUrl } from '../data/config';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Cart() {
  const {
    cart,
    isCartOpen,
    closeCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    totalItemsCount,
    totalAmount
  } = useCart();

  if (!isCartOpen) return null;

  const checkoutUrl = getCartWhatsAppUrl(cart, totalAmount);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={closeCart}
        className="absolute inset-0 bg-navy-950/70 backdrop-blur-sm transition-opacity duration-300"
        aria-hidden="true"
      />

      {/* Cart Drawer */}
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col">
          {/* Header */}
          <div className="p-5 border-b border-slate-100 bg-slate-50 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-blue-100 text-electric-600 rounded-xl">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-navy-900 leading-tight">Your Shopping Cart</h2>
                <p className="text-xs text-slate-500 font-medium">
                  {totalItemsCount} {totalItemsCount === 1 ? 'item' : 'items'} selected
                </p>
              </div>
            </div>

            <button
              onClick={closeCart}
              className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-200/60 rounded-lg transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12 px-4">
                <div className="w-20 h-20 bg-blue-50 text-electric-500 rounded-full flex items-center justify-center mb-4">
                  <ShoppingBag className="w-10 h-10 stroke-[1.5]" />
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-1">Your cart is empty</h3>
                <p className="text-sm text-slate-500 max-w-xs mb-6">
                  Explore our premium collection of computers, laptops, printers, and accessories.
                </p>
                <button
                  onClick={closeCart}
                  className="inline-flex items-center gap-2 bg-electric hover:bg-electric-600 text-white font-semibold text-sm px-6 py-2.5 rounded-lg shadow-sm transition-all"
                >
                  <span>Browse Products</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <div className="divide-y divide-slate-100">
                {cart.map((item) => (
                  <div key={item.id} className="py-4 first:pt-0 last:pb-0 flex gap-4">
                    {/* Thumbnail */}
                    <div className="w-20 h-20 rounded-lg bg-slate-100 overflow-hidden shrink-0 border border-slate-200/80">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                        onError={(e) => {
                          e.target.src = 'https://images.unsplash.com/photo-1587831990711-23ca6441447b?auto=format&fit=crop&w=300&q=80';
                        }}
                      />
                    </div>

                    {/* Details */}
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start gap-2">
                          <span className="text-xs font-semibold uppercase tracking-wider text-electric-600">
                            {item.brand}
                          </span>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-slate-400 hover:text-rose-500 transition-colors p-1"
                            title="Remove item"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                        <h4 className="text-sm font-semibold text-navy-900 line-clamp-2 leading-snug">
                          {item.name}
                        </h4>
                      </div>

                      {/* Quantity & Price */}
                      <div className="flex items-center justify-between mt-3 pt-2">
                        <div className="flex items-center border border-slate-200 rounded-lg bg-white overflow-hidden shadow-sm">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1.5 hover:bg-slate-100 text-slate-600 transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="w-8 text-center text-xs font-bold text-slate-800">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1.5 hover:bg-slate-100 text-slate-600 transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        <div className="text-right">
                          <span className="text-sm font-bold text-navy-900">
                            ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                          </span>
                          {item.quantity > 1 && (
                            <div className="text-[11px] text-slate-400">
                              ₹{item.price.toLocaleString('en-IN')} each
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Cart Footer */}
          {cart.length > 0 && (
            <div className="p-5 border-t border-slate-100 bg-slate-50 space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-xs text-slate-500 font-medium">
                  <span>Subtotal ({totalItemsCount} items)</span>
                  <span>₹{totalAmount.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between text-xs text-slate-500 font-medium">
                  <span>GST & Taxes</span>
                  <span className="text-emerald-600 font-semibold">Included / Transparent</span>
                </div>
                <div className="border-t border-slate-200 pt-2 flex justify-between items-baseline">
                  <span className="text-base font-bold text-navy-900">Estimated Total</span>
                  <span className="text-xl font-extrabold text-navy-950">
                    ₹{totalAmount.toLocaleString('en-IN')}
                  </span>
                </div>
              </div>

              {/* Checkout on WhatsApp button */}
              <a
                href={checkoutUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2.5 bg-whatsapp hover:bg-whatsapp-dark text-white font-bold py-3.5 px-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 active:scale-[0.99] text-sm"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12.031 2C6.5 2 2 6.5 2 12.031c0 1.969.563 3.813 1.531 5.406L2 22l4.75-1.5c1.531.875 3.313 1.344 5.281 1.344 5.531 0 10.031-4.5 10.031-10.031S17.562 2 12.031 2zm0 18.25c-1.75 0-3.375-.469-4.781-1.313l-.344-.219-2.813.906.938-2.75-.219-.375c-.938-1.469-1.438-3.188-1.438-4.969 0-4.625 3.781-8.406 8.406-8.406 4.625 0 8.406 3.781 8.406 8.406 0 4.625-3.781 8.406-8.406 8.406zm4.625-6.281c-.25-.125-1.469-.719-1.688-.813-.219-.094-.375-.125-.531.125-.156.25-.625.813-.781.969-.156.188-.313.188-.563.063-.25-.125-1.063-.391-2.031-1.25-.75-.688-1.25-1.5-1.406-1.781-.156-.25 0-.406.125-.531.094-.094.25-.281.375-.406.125-.125.188-.25.281-.406.094-.156.031-.313-.031-.438-.063-.125-.531-1.281-.719-1.75-.188-.469-.375-.406-.531-.406h-.438c-.156 0-.438.063-.656.313-.219.25-.875.844-.875 2.063s.906 2.406 1.031 2.563c.125.188 1.781 2.719 4.313 3.813.594.25 1.063.406 1.438.531.625.188 1.188.156 1.625.094.5-.063 1.469-.594 1.688-1.188.219-.594.219-1.094.156-1.188-.063-.094-.219-.156-.469-.281z"/>
                </svg>
                <span>Checkout via WhatsApp</span>
              </a>

              <div className="flex items-center justify-between pt-1">
                <button
                  onClick={clearCart}
                  className="text-xs text-slate-400 hover:text-rose-600 transition-colors"
                >
                  Empty entire cart
                </button>
                <div className="flex items-center gap-1 text-[11px] text-slate-500">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>No payment required now</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

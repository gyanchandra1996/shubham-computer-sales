import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Star, Eye, Check } from 'lucide-react';
import WhatsAppButton from './WhatsAppButton';
import { useCart } from '../context/CartContext';

export default function ProductCard({ product }) {
  const { addToCart, cart } = useCart();
  const isInCart = cart.some((item) => item.id === product.id);

  const discountPercent = product.originalPrice && product.price
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : null;

  return (
    <div className="group bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-card-hover transition-all duration-300 flex flex-col overflow-hidden relative">
      {/* Top badges */}
      <div className="absolute top-3 left-3 right-3 z-10 flex items-center justify-between pointer-events-none">
        {product.badge ? (
          <span className="bg-navy-900/90 backdrop-blur-sm text-white text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
            {product.badge}
          </span>
        ) : <span />}

        {discountPercent && (
          <span className="bg-rose-500 text-white text-[11px] font-bold px-2 py-0.5 rounded-full shadow-sm">
            -{discountPercent}%
          </span>
        )}
      </div>

      {/* Product Image Area */}
      <Link
        to={`/product/${product.id}`}
        className="relative block w-full pt-[75%] bg-slate-100 overflow-hidden"
      >
        <img
          src={product.image}
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          loading="lazy"
          onError={(e) => {
            e.target.src = 'https://images.unsplash.com/photo-1587831990711-23ca6441447b?auto=format&fit=crop&w=600&q=80';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-3">
          <span className="bg-white/95 text-navy-900 text-xs font-semibold px-3 py-1.5 rounded-full shadow-md inline-flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
            <Eye className="w-3.5 h-3.5" /> Quick View
          </span>
        </div>
      </Link>

      {/* Product Content */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Brand & Rating */}
          <div className="flex items-center justify-between gap-2 mb-1.5">
            <span className="text-xs font-bold text-electric-600 uppercase tracking-wider">
              {product.brand}
            </span>
            {product.rating && (
              <div className="flex items-center gap-1 text-xs text-amber-500 font-semibold">
                <Star className="w-3.5 h-3.5 fill-current" />
                <span>{product.rating}</span>
                <span className="text-slate-400 font-normal">({product.reviewsCount})</span>
              </div>
            )}
          </div>

          {/* Title */}
          <Link
            to={`/product/${product.id}`}
            className="block font-bold text-navy-900 text-base leading-snug line-clamp-2 hover:text-electric transition-colors mb-2"
            title={product.name}
          >
            {product.name}
          </Link>

          {/* Short Description */}
          <p className="text-xs text-slate-500 line-clamp-2 mb-3 leading-relaxed">
            {product.shortDescription}
          </p>
        </div>

        <div>
          {/* Availability */}
          <div className="flex items-center gap-1.5 mb-3 text-[11px] font-semibold text-emerald-600">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>{product.availability || 'In Stock'}</span>
          </div>

          {/* Price Box */}
          <div className="flex items-baseline gap-2 mb-4">
            <span className="text-xl font-extrabold text-navy-950">
              ₹{product.price.toLocaleString('en-IN')}
            </span>
            {product.originalPrice && (
              <span className="text-xs text-slate-400 line-through">
                ₹{product.originalPrice.toLocaleString('en-IN')}
              </span>
            )}
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-2 pt-1 border-t border-slate-100">
            <button
              onClick={() => addToCart(product, 1)}
              className={`flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg text-xs font-bold transition-all ${
                isInCart
                  ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                  : 'bg-navy-900 text-white hover:bg-navy-800'
              }`}
            >
              {isInCart ? (
                <>
                  <Check className="w-3.5 h-3.5" /> In Cart
                </>
              ) : (
                <>
                  <ShoppingCart className="w-3.5 h-3.5" /> Add to Cart
                </>
              )}
            </button>

            <WhatsAppButton
              variant="order"
              product={product}
              quantity={1}
              label="WhatsApp"
              className="py-2.5 px-2 text-xs font-bold"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

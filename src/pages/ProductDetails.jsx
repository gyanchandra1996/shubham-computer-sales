import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  Star,
  ShieldCheck,
  Truck,
  RotateCcw,
  CheckCircle2,
  Plus,
  Minus,
  ShoppingCart,
  ArrowLeft,
  Share2,
  Package,
  Layers,
  Sparkles
} from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import WhatsAppButton from '../components/WhatsAppButton';
import ProductCard from '../components/ProductCard';

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart, showToast } = useCart();
  const [quantity, setQuantity] = useState(1);

  // Find product
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
        <div className="bg-white p-8 rounded-2xl border border-slate-200 text-center max-w-md w-full shadow-sm">
          <div className="w-16 h-16 bg-rose-50 text-rose-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Package className="w-8 h-8" />
          </div>
          <h2 className="text-xl font-bold text-navy-950 mb-2">Product Not Found</h2>
          <p className="text-sm text-slate-500 mb-6">
            The computer or electronics item you are looking for is either discontinued or moved.
          </p>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 bg-electric text-white font-bold text-sm px-6 py-2.5 rounded-xl hover:bg-electric-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Return to Catalog
          </Link>
        </div>
      </div>
    );
  }

  // Related products in same category
  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const discountPercent = product.originalPrice && product.price
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : null;

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: product.name,
        text: `Check out ${product.name} at Shubham Computer Sales`,
        url: window.location.href
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      showToast('Product link copied to clipboard!', 'info');
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 py-8 lg:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <div className="flex items-center justify-between gap-4 mb-6 text-xs text-slate-500">
          <div className="flex items-center gap-2 flex-wrap">
            <Link to="/" className="hover:text-electric">Home</Link>
            <span>/</span>
            <Link to="/products" className="hover:text-electric">Products</Link>
            <span>/</span>
            <Link
              to={`/products?category=${product.category}`}
              className="hover:text-electric"
            >
              {product.categoryName}
            </Link>
            <span>/</span>
            <span className="text-navy-950 font-semibold truncate max-w-xs">{product.name}</span>
          </div>

          <button
            onClick={handleShare}
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-navy-900 bg-white border border-slate-200 px-3 py-1.5 rounded-lg shadow-sm transition-colors"
          >
            <Share2 className="w-3.5 h-3.5" /> Share
          </button>
        </div>

        {/* Main Product Showcase Card */}
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm p-6 sm:p-8 lg:p-10 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Left Column: Product Image Preview */}
            <div className="lg:col-span-5 space-y-4">
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-slate-100 border border-slate-200/80 shadow-inner group">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1587831990711-23ca6441447b?auto=format&fit=crop&w=800&q=80';
                  }}
                />

                {/* Overlaid Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  {product.badge && (
                    <span className="bg-navy-900/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow">
                      {product.badge}
                    </span>
                  )}
                  {discountPercent && (
                    <span className="bg-rose-500 text-white text-xs font-bold px-2.5 py-0.5 rounded-full shadow">
                      Save {discountPercent}%
                    </span>
                  )}
                </div>
              </div>

              {/* Guarantees Box */}
              <div className="grid grid-cols-3 gap-2 p-3 bg-slate-50 rounded-2xl border border-slate-100 text-center">
                <div className="p-2">
                  <ShieldCheck className="w-5 h-5 text-electric mx-auto mb-1" />
                  <p className="text-[11px] font-bold text-navy-950">100% Genuine</p>
                  <p className="text-[10px] text-slate-400">Brand Sealed</p>
                </div>
                <div className="p-2 border-x border-slate-200">
                  <Truck className="w-5 h-5 text-electric mx-auto mb-1" />
                  <p className="text-[11px] font-bold text-navy-950">Fast Dispatch</p>
                  <p className="text-[10px] text-slate-400">Local Delivery</p>
                </div>
                <div className="p-2">
                  <RotateCcw className="w-5 h-5 text-electric mx-auto mb-1" />
                  <p className="text-[11px] font-bold text-navy-950">Shop Warranty</p>
                  <p className="text-[10px] text-slate-400">Onsite Support</p>
                </div>
              </div>
            </div>

            {/* Right Column: Information & Order Action Controls */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                {/* Brand & Reviews */}
                <div className="flex items-center justify-between gap-4 mb-3">
                  <span className="text-xs font-extrabold uppercase tracking-widest text-electric px-2.5 py-1 rounded-md bg-blue-50">
                    {product.brand}
                  </span>

                  {product.rating && (
                    <div className="flex items-center gap-1.5 text-xs text-amber-500 font-bold">
                      <Star className="w-4 h-4 fill-current" />
                      <span>{product.rating}</span>
                      <span className="text-slate-400 font-normal">
                        ({product.reviewsCount} customer reviews)
                      </span>
                    </div>
                  )}
                </div>

                {/* Product Name */}
                <h1 className="text-2xl sm:text-3xl font-extrabold text-navy-950 leading-tight mb-4">
                  {product.name}
                </h1>

                {/* Pricing Box */}
                <div className="flex items-baseline gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-200/80 mb-6">
                  <span className="text-3xl sm:text-4xl font-black text-navy-950">
                    ₹{product.price.toLocaleString('en-IN')}
                  </span>
                  {product.originalPrice && (
                    <span className="text-base text-slate-400 line-through">
                      ₹{product.originalPrice.toLocaleString('en-IN')}
                    </span>
                  )}
                  <span className="ml-auto text-xs font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                    {product.availability || 'In Stock'}
                  </span>
                </div>

                {/* Description */}
                <div className="space-y-3 mb-6">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Product Overview
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* Key Features Bullets */}
                {product.features && (
                  <div className="mb-6 space-y-2">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Key Highlights
                    </h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Quantity Selector & Action Buttons */}
              <div className="pt-6 border-t border-slate-200 space-y-4">
                <div className="flex items-center gap-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Quantity:
                  </span>
                  <div className="flex items-center border border-slate-300 rounded-xl bg-white overflow-hidden shadow-sm">
                    <button
                      onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                      className="p-2.5 hover:bg-slate-100 text-slate-700 transition-colors"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-12 text-center text-sm font-bold text-navy-950">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity((q) => q + 1)}
                      className="p-2.5 hover:bg-slate-100 text-slate-700 transition-colors"
                      aria-label="Increase quantity"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>

                  <span className="text-xs text-slate-400">
                    Total: <strong className="text-navy-900 font-bold">₹{(product.price * quantity).toLocaleString('en-IN')}</strong>
                  </span>
                </div>

                {/* Primary CTA Buttons */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    onClick={() => addToCart(product, quantity)}
                    className="flex items-center justify-center gap-2 bg-navy-950 hover:bg-navy-900 text-white font-bold py-3.5 px-6 rounded-xl shadow-md transition-all active:scale-[0.99] text-sm"
                  >
                    <ShoppingCart className="w-4 h-4" />
                    <span>Add to Shopping Cart</span>
                  </button>

                  <WhatsAppButton
                    variant="order"
                    product={product}
                    quantity={quantity}
                    label="Order on WhatsApp"
                    className="py-3.5 px-6 text-sm font-bold shadow-md"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Specifications Table */}
        {product.specs && (
          <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 lg:p-10 mb-12 shadow-sm">
            <div className="flex items-center gap-2 font-extrabold text-navy-950 text-xl mb-6">
              <Layers className="w-5 h-5 text-electric" />
              <h2>Technical Specifications</h2>
            </div>

            <div className="border border-slate-200 rounded-2xl overflow-hidden divide-y divide-slate-200">
              {Object.entries(product.specs).map(([key, value], idx) => (
                <div
                  key={key}
                  className={`grid grid-cols-1 sm:grid-cols-3 p-4 text-xs sm:text-sm ${
                    idx % 2 === 0 ? 'bg-slate-50/70' : 'bg-white'
                  }`}
                >
                  <span className="font-bold text-navy-900 sm:col-span-1">{key}</span>
                  <span className="text-slate-600 sm:col-span-2 mt-1 sm:mt-0">{value}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Related Products Section */}
        {relatedProducts.length > 0 && (
          <div className="mt-14">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-navy-950">
                  Related {product.categoryName}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500">
                  Customers looking at this product also considered these options.
                </p>
              </div>

              <Link
                to={`/products?category=${product.category}`}
                className="text-xs font-bold text-electric hover:underline"
              >
                View Category →
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

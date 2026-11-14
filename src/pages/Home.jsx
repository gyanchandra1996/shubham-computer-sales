import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ShieldCheck,
  BadgePercent,
  Award,
  Headphones,
  Boxes,
  MessageSquare,
  Sparkles,
  MapPin,
  Clock,
  Phone,
  CheckCircle2,
  ChevronRight
} from 'lucide-react';
import Hero from '../components/Hero';
import CategoryCard from '../components/CategoryCard';
import ProductCard from '../components/ProductCard';
import WhatsAppButton from '../components/WhatsAppButton';
import { categories, popularBrands } from '../data/categories';
import { products, storeBenefits } from '../data/products';
import { SHOP_CONFIG } from '../data/config';

const benefitIcons = {
  ShieldCheck,
  BadgePercent,
  Award,
  Headphones,
  Boxes,
  MessageSquare
};

export default function Home() {
  const [activeTab, setActiveTab] = useState('all');

  // Featured products filtered by quick tab
  const featuredProducts = products.filter((p) => p.featured);
  
  const displayProducts = activeTab === 'all'
    ? featuredProducts
    : activeTab === 'printers'
    ? products.filter(p => p.category === 'printers' || p.category === 'printer-ink-toner')
    : activeTab === 'laptops'
    ? products.filter(p => p.category === 'laptops' || p.category === 'computers')
    : products.filter(p => p.category === 'storage-devices' || p.category === 'keyboard-mouse' || p.category === 'processors');

  return (
    <div className="min-h-screen bg-slate-50">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Product Categories Section */}
      <section className="py-16 lg:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-electric font-bold text-xs uppercase tracking-wider mb-2">
              <Sparkles className="w-4 h-4" />
              <span>Catalog Exploration</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-navy-950">
              Browse by Product Category
            </h2>
            <p className="text-sm text-slate-500 mt-1 max-w-xl">
              From business printers and gaming laptops to precision processors and replacement toner cartridges.
            </p>
          </div>

          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-sm font-bold text-electric hover:text-electric-700 transition-colors shrink-0 group"
          >
            <span>View All Categories</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 16 Categories Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {categories.map((cat) => (
            <CategoryCard key={cat.id} category={cat} />
          ))}
        </div>
      </section>

      {/* 3. Featured Products Section */}
      <section className="py-16 lg:py-20 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 text-electric font-bold text-xs uppercase tracking-wider mb-2">
                <Sparkles className="w-4 h-4" />
                <span>Handpicked Hardware</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-navy-950">
                Featured Electronics & Solutions
              </h2>
              <p className="text-sm text-slate-500 mt-1">
                Explore our best-selling printers, computers, components and everyday computer essentials.
              </p>
            </div>

            {/* Quick Filter Tabs */}
            <div className="flex flex-wrap items-center gap-2 bg-slate-100 p-1.5 rounded-xl border border-slate-200/80">
              <button
                onClick={() => setActiveTab('all')}
                className={`text-xs font-bold px-3.5 py-1.5 rounded-lg transition-all ${
                  activeTab === 'all'
                    ? 'bg-navy-900 text-white shadow-sm'
                    : 'text-slate-600 hover:text-navy-900'
                }`}
              >
                Top Featured
              </button>
              <button
                onClick={() => setActiveTab('printers')}
                className={`text-xs font-bold px-3.5 py-1.5 rounded-lg transition-all ${
                  activeTab === 'printers'
                    ? 'bg-navy-900 text-white shadow-sm'
                    : 'text-slate-600 hover:text-navy-900'
                }`}
              >
                Printers & Ink
              </button>
              <button
                onClick={() => setActiveTab('laptops')}
                className={`text-xs font-bold px-3.5 py-1.5 rounded-lg transition-all ${
                  activeTab === 'laptops'
                    ? 'bg-navy-900 text-white shadow-sm'
                    : 'text-slate-600 hover:text-navy-900'
                }`}
              >
                Laptops & PCs
              </button>
              <button
                onClick={() => setActiveTab('accessories')}
                className={`text-xs font-bold px-3.5 py-1.5 rounded-lg transition-all ${
                  activeTab === 'accessories'
                    ? 'bg-navy-900 text-white shadow-sm'
                    : 'text-slate-600 hover:text-navy-900'
                }`}
              >
                Components & Storage
              </button>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {displayProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/products"
              className="inline-flex items-center gap-2.5 bg-navy-950 hover:bg-navy-900 text-white font-bold px-8 py-3.5 rounded-xl shadow-md transition-all group"
            >
              <span>Explore All Products & Accessories</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Why Choose Us Section */}
      <section className="py-16 lg:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-electric font-bold text-xs uppercase tracking-wider mb-2">
            <ShieldCheck className="w-4 h-4" />
            <span>Store Promise</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-navy-950">
            Why Choose Shubham Computer Sales?
          </h2>
          <p className="text-sm text-slate-500 mt-2">
            We take pride in providing authentic computer hardware, transparent pricing, and instant personalized WhatsApp ordering for all our valued customers.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {storeBenefits.map((benefit, index) => {
            const Icon = benefitIcons[benefit.icon] || ShieldCheck;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-sm hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${benefit.color} text-white flex items-center justify-center mb-5 shadow-md`}>
                    <Icon className="w-6 h-6 stroke-[2]" />
                  </div>
                  <h3 className="text-lg font-bold text-navy-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. Brands Section */}
      <section className="py-14 bg-gradient-to-b from-slate-100 to-slate-200/70 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-xs font-bold uppercase tracking-widest text-slate-500">
              Trusted Hardware & Printer Brands We Carry
            </p>
            <h3 className="text-xl sm:text-2xl font-extrabold text-navy-950 mt-1">
              Authorized Sales & Genuine Warranty Partners
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {popularBrands.map((brand, idx) => (
              <Link
                key={idx}
                to={`/products?brand=${encodeURIComponent(brand.name)}`}
                className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm hover:shadow-md hover:border-electric transition-all text-center flex flex-col items-center justify-center group"
              >
                <div className="font-black text-xl tracking-tighter text-navy-900 group-hover:text-electric transition-colors">
                  {brand.name}
                </div>
                <div className="text-[11px] text-slate-400 font-medium mt-0.5">
                  {brand.desc}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Quick Store Contact & Visit Banner */}
      <section className="py-16 bg-navy-950 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-electric/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-400">
                Visit Our Physical Retail Store
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold leading-tight">
                Experience Hardware Hands-On or Order from Your Phone
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed max-w-xl">
                Have specific printer toner codes or require custom workstation quotation? Our staff is available in store and on WhatsApp to provide live recommendations and immediate dispatch.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3 text-xs text-slate-300">
                <div className="flex items-start gap-3 bg-navy-900/80 p-3.5 rounded-xl border border-navy-800">
                  <MapPin className="w-4 h-4 text-electric-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white text-xs mb-0.5">Shop Address</strong>
                    <span>{SHOP_CONFIG.address}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-navy-900/80 p-3.5 rounded-xl border border-navy-800">
                  <Clock className="w-4 h-4 text-electric-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white text-xs mb-0.5">Working Hours</strong>
                    <span>{SHOP_CONFIG.businessHours.weekdays}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-4">
              <WhatsAppButton
                variant="contact"
                customText="Hello Shubham Computer Sales, I want to inquire about computers and printers."
                label="Direct WhatsApp Chat"
                className="py-4 text-base font-bold shadow-lg w-full justify-center"
              />

              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-navy-800 hover:bg-navy-700 text-white font-bold py-4 px-6 rounded-xl border border-slate-700 transition-colors text-sm w-full text-center"
              >
                <span>View Full Store Details & Map</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

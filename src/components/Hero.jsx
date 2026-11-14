import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ShieldCheck,
  Zap,
  Truck,
  CheckCircle2,
  Monitor,
  Printer,
  Cpu,
  MapPin,
  Sparkles,
  PhoneCall,
  Search
} from 'lucide-react';
import WhatsAppButton from './WhatsAppButton';
import { heroStats } from '../data/products';
import { SHOP_CONFIG } from '../data/config';

export default function Hero() {
  const [quickItem, setQuickItem] = useState('');

  const handleQuickWhatsApp = (e) => {
    e.preventDefault();
    const query = quickItem.trim() || 'computer or printer requirement';
    const message = `Hello Shubham Computer Sales (Gorath, Azamgarh),\n\nI am looking for availability and price for: ${query}.\n\nPlease let me know if it is available in stock. Thank you!`;
    const url = `https://wa.me/${SHOP_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 text-white pt-8 pb-16 lg:py-20">
      {/* Decorative ambient glow orbs */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-electric/25 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-sky-500/15 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Location Chip */}
        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-800/90 border border-blue-500/30 text-blue-300 text-xs font-semibold backdrop-blur-sm">
            <MapPin className="w-3.5 h-3.5 text-emerald-400" />
            <span>Gorath, Azamgarh (UP) • Authorized IT & Printer Store</span>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-bold">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span>Call/WhatsApp: 8858352762</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading, Subheading & Instant WhatsApp Quick Bar */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] text-white">
              Your One-Stop Destination for{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-electric-glow">
                Computer & Printer
              </span>{' '}
              Solutions
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Explore Quality Computers, Printers, Laptops, Accessories and More at the Best Prices in Gorath, Azamgarh.
              Genuine brand warranties, same-day local delivery, and instant WhatsApp ordering.
            </p>

            {/* Quick Quote on WhatsApp Form Bar */}
            <div className="p-2 sm:p-2.5 bg-navy-900/90 border border-blue-500/30 rounded-2xl shadow-xl backdrop-blur-md max-w-xl mx-auto lg:mx-0">
              <form onSubmit={handleQuickWhatsApp} className="flex flex-col sm:flex-row items-center gap-2">
                <div className="relative w-full flex-1">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={quickItem}
                    onChange={(e) => setQuickItem(e.target.value)}
                    placeholder="Ask price: e.g. HP 88A toner, 16GB RAM, Dell charger..."
                    className="w-full pl-10 pr-3 py-3 bg-navy-950/80 border border-slate-700 rounded-xl text-xs sm:text-sm text-white placeholder-slate-400 focus:outline-none focus:border-electric"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full sm:w-auto shrink-0 flex items-center justify-center gap-2 bg-whatsapp hover:bg-whatsapp-dark text-white font-bold py-3 px-5 rounded-xl text-xs sm:text-sm shadow-md transition-all active:scale-95"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Ask on WhatsApp</span>
                </button>
              </form>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-1">
              <Link
                to="/products"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-electric hover:bg-electric-600 text-white font-bold px-7 py-3.5 rounded-xl shadow-lg shadow-electric/30 hover:shadow-electric/50 transition-all duration-300 group text-sm sm:text-base"
              >
                <span>Explore All Products</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <WhatsAppButton
                variant="contact"
                customText="Hello Shubham Computer Sales (Gorath, Azamgarh), I want to know about computers and printers."
                label="Direct WhatsApp: 8858352762"
                className="w-full sm:w-auto text-sm sm:text-base py-3.5 px-6 rounded-xl font-bold shadow-lg"
              />
            </div>

            {/* Quick trust points */}
            <div className="pt-2 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>100% Genuine Brands</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Gorath Ready Stock</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Local Support & Billing</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Product Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Visual Card */}
              <div className="relative rounded-3xl overflow-hidden border border-slate-700/60 bg-gradient-to-b from-navy-800 to-navy-950 p-3 shadow-2xl">
                <div className="relative h-80 sm:h-96 rounded-2xl overflow-hidden bg-slate-900">
                  <img
                    src="https://images.unsplash.com/photo-1587831990711-23ca6441447b?auto=format&fit=crop&w=1000&q=80"
                    alt="High performance desktop computer and printer setup"
                    className="w-full h-full object-cover opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/25 to-transparent"></div>

                  {/* Overlaid Banner info */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-navy-900/90 backdrop-blur-md border border-white/10">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs uppercase tracking-wider text-blue-400 font-bold">Gorath Azamgarh Hub</p>
                        <h4 className="text-sm font-bold text-white">Printers, Laptops & Assembled PCs</h4>
                      </div>
                      <span className="text-xs bg-emerald-500/20 text-emerald-300 font-bold px-2.5 py-1 rounded-full border border-emerald-500/30">
                        In Stock
                      </span>
                    </div>
                  </div>
                </div>

                {/* Floating Micro Card 1: Printers & Toner */}
                <div className="absolute -top-4 -left-4 bg-white text-navy-900 p-3 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3">
                  <div className="p-2.5 bg-blue-50 text-electric-600 rounded-xl">
                    <Printer className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold leading-tight">Original Toners & Inks</p>
                    <p className="text-[11px] text-slate-500">HP 88A • Epson 003 • Canon</p>
                  </div>
                </div>

                {/* Floating Micro Card 2: WhatsApp Ready */}
                <div className="absolute -bottom-4 -right-4 bg-navy-900/95 text-white p-3.5 rounded-2xl shadow-xl border border-blue-500/30 flex items-center gap-3 backdrop-blur-md">
                  <div className="p-2 bg-emerald-500 text-white rounded-xl">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold leading-tight text-white">Call/Chat</p>
                    <p className="text-[11px] text-emerald-400 font-bold">8858352762</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Strip */}
        <div className="mt-14 pt-8 border-t border-slate-800 grid grid-cols-2 sm:grid-cols-4 gap-6">
          {heroStats.map((stat, idx) => (
            <div key={idx} className="text-center sm:text-left bg-navy-900/40 p-3.5 rounded-2xl border border-slate-800/80">
              <div className="text-2xl sm:text-3xl font-extrabold text-white">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-sky-400">
                  {stat.value}
                </span>
              </div>
              <div className="text-xs sm:text-sm font-medium text-slate-400 mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

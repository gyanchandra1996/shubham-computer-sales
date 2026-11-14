import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Zap, Truck, CheckCircle2, Monitor, Printer, Cpu } from 'lucide-react';
import WhatsAppButton from './WhatsAppButton';
import { heroStats } from '../data/products';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 text-white pt-12 pb-16 lg:py-24">
      {/* Background glowing decorations */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-electric/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-blue-600/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Store Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-800/80 border border-blue-500/30 text-blue-300 text-xs font-semibold backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Authorized IT Hardware & Printer Hub</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white">
              Your One-Stop Destination for{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-electric-glow">
                Computer & Printer
              </span>{' '}
              Solutions
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Explore Quality Computers, Printers, Laptops, Accessories and More at the Best Prices.
              Fast local delivery, verified genuine warranties, and instant WhatsApp ordering.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Link
                to="/products"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-electric hover:bg-electric-600 text-white font-bold px-7 py-3.5 rounded-xl shadow-lg shadow-electric/30 hover:shadow-electric/50 transition-all duration-300 group text-base"
              >
                <span>Explore Products</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <WhatsAppButton
                variant="contact"
                customText="Hello Shubham Computer Sales, I would like to explore computers and printers available at your store."
                label="Order on WhatsApp"
                className="w-full sm:w-auto text-base py-3.5 px-7 rounded-xl font-bold shadow-lg"
              />
            </div>

            {/* Quick trust points */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>100% Original Brands</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Ready Stock Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Official Warranty</span>
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
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/20 to-transparent"></div>

                  {/* Overlaid Banner info */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-navy-900/90 backdrop-blur-md border border-white/10">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs uppercase tracking-wider text-blue-400 font-bold">Featured Setup</p>
                        <h4 className="text-sm font-bold text-white">Custom Gaming & Workstation PCs</h4>
                      </div>
                      <span className="text-xs bg-emerald-500/20 text-emerald-300 font-bold px-2.5 py-1 rounded-full border border-emerald-500/30">
                        In Stock
                      </span>
                    </div>
                  </div>
                </div>

                {/* Floating Micro Card 1: Printers */}
                <div className="absolute -top-4 -left-4 bg-white text-navy-900 p-3 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3 animate-bounce-subtle">
                  <div className="p-2.5 bg-blue-50 text-electric-600 rounded-xl">
                    <Printer className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold leading-tight">EcoTank & Laser</p>
                    <p className="text-[11px] text-slate-500">HP • Canon • Epson</p>
                  </div>
                </div>

                {/* Floating Micro Card 2: WhatsApp Ready */}
                <div className="absolute -bottom-4 -right-4 bg-navy-900/95 text-white p-3.5 rounded-2xl shadow-xl border border-blue-500/30 flex items-center gap-3 backdrop-blur-md">
                  <div className="p-2 bg-emerald-500 text-white rounded-xl">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold leading-tight text-white">Quick Quote</p>
                    <p className="text-[11px] text-emerald-400">1-Minute Response</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Strip */}
        <div className="mt-16 pt-8 border-t border-slate-800 grid grid-cols-2 sm:grid-cols-4 gap-6">
          {heroStats.map((stat, idx) => (
            <div key={idx} className="text-center sm:text-left">
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

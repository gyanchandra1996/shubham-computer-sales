import React from 'react';
import { Link } from 'react-router-dom';
import {
  Monitor,
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  ShieldCheck,
  Heart
} from 'lucide-react';
import { SHOP_CONFIG } from '../data/config';
import { categories } from '../data/categories';
import WhatsAppButton from './WhatsAppButton';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-slate-300 border-t border-navy-800">
      {/* Top Value Banner */}
      <div className="border-b border-navy-800/80 bg-navy-900/60 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
              <h3 className="text-xl font-bold text-white">
                Looking for a custom computer build or printer toner quote in Azamgarh?
              </h3>
              <p className="text-sm text-slate-400 mt-1">
                Chat directly with our hardware specialists on WhatsApp for instant stock check & pricing.
              </p>
            </div>
            <WhatsAppButton
              variant="contact"
              label="WhatsApp: 8858352762"
              className="text-sm font-bold px-6 py-3 shrink-0"
            />
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Col 1 & 2: About Store */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-electric flex items-center justify-center text-white shadow-md">
                <Monitor className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="block font-black text-xl tracking-tight text-white leading-none">
                  SHUBHAM
                </span>
                <span className="block text-[10px] font-bold text-blue-400 tracking-widest uppercase mt-0.5">
                  Computer Sales • Gorath Azamgarh
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed pr-4">
              Shubham Computer Sales is your premier destination for genuine desktop computers, high-performance laptops, laser & ink tank printers, original toners, hardware upgrades, and premium IT accessories at honest prices in Gorath, Azamgarh (UP).
            </p>

            <div className="flex items-center gap-2 pt-2 text-xs text-emerald-400">
              <ShieldCheck className="w-4 h-4" />
              <span>100% Genuine Authorized Retailer with Brand Warranties</span>
            </div>
          </div>

          {/* Col 3: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-sm tracking-wider uppercase">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="hover:text-blue-400 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-slate-500" /> Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-blue-400 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-slate-500" /> All Products
                </Link>
              </li>
              <li>
                <Link to="/products?category=laptops" className="hover:text-blue-400 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-slate-500" /> Computers & Laptops
                </Link>
              </li>
              <li>
                <Link to="/products?category=printers" className="hover:text-blue-400 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-slate-500" /> Printers & Scanners
                </Link>
              </li>
              <li>
                <Link to="/products?category=computer-accessories" className="hover:text-blue-400 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-slate-500" /> Accessories
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-blue-400 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-slate-500" /> Contact Store
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Top Categories */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-sm tracking-wider uppercase">
              Categories
            </h4>
            <ul className="space-y-2 text-sm">
              {categories.slice(0, 6).map((cat) => (
                <li key={cat.id}>
                  <Link
                    to={`/products?category=${cat.slug}`}
                    className="hover:text-blue-400 transition-colors block text-slate-400 hover:translate-x-0.5 duration-200"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/products"
                  className="text-xs font-bold text-blue-400 hover:text-blue-300 pt-1 inline-block"
                >
                  View All 16 Categories →
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Contact Details */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-sm tracking-wider uppercase">
              Gorath Store Contact
            </h4>
            <ul className="space-y-3 text-xs text-slate-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-electric-400 shrink-0 mt-0.5" />
                <span>{SHOP_CONFIG.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-electric-400 shrink-0" />
                <a href={`tel:${SHOP_CONFIG.whatsappNumber}`} className="hover:text-white font-bold text-emerald-400">
                  {SHOP_CONFIG.displayPhone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-electric-400 shrink-0" />
                <a href={`mailto:${SHOP_CONFIG.email}`} className="hover:text-white">
                  {SHOP_CONFIG.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-electric-400 shrink-0 mt-0.5" />
                <div>
                  <p>{SHOP_CONFIG.businessHours.weekdays}</p>
                  <p>{SHOP_CONFIG.businessHours.sunday}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright */}
        <div className="mt-12 pt-8 border-t border-navy-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {currentYear} <span className="text-slate-300 font-semibold">{SHOP_CONFIG.name}</span>. Gorath, Azamgarh (UP). All rights reserved.
          </p>
          <p className="flex items-center gap-1 text-slate-400">
            WhatsApp Orders & Inquiries: <strong className="text-emerald-400">8858352762</strong>
          </p>
        </div>
      </div>
    </footer>
  );
}

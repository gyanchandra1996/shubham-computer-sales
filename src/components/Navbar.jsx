import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import {
  Search,
  ShoppingCart,
  Menu,
  X,
  Phone,
  Clock,
  Laptop,
  ChevronDown,
  Monitor,
  Printer,
  Sparkles,
  MapPin
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import WhatsAppButton from './WhatsAppButton';
import { SHOP_CONFIG } from '../data/config';
import { products } from '../data/products';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const searchRef = useRef(null);
  const navigate = useNavigate();

  const { totalItemsCount, openCart } = useCart();

  // Handle live search results
  useEffect(() => {
    if (!searchQuery.trim()) {
      setSearchResults([]);
      return;
    }
    const q = searchQuery.toLowerCase();
    const filtered = products
      .filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.brand.toLowerCase().includes(q) ||
          p.categoryName.toLowerCase().includes(q) ||
          p.shortDescription.toLowerCase().includes(q)
      )
      .slice(0, 5);
    setSearchResults(filtered);
  }, [searchQuery]);

  // Handle clicking outside search dropdown
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setIsSearchFocused(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setIsSearchFocused(false);
      navigate(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'All Products', path: '/products' },
    { name: 'Computers & Laptops', path: '/products?category=laptops' },
    { name: 'Printers & Toners', path: '/products?category=printers' },
    { name: 'Accessories', path: '/products?category=computer-accessories' },
    { name: 'Contact Us', path: '/contact' }
  ];

  return (
    <header className="sticky top-0 z-40 bg-white shadow-sm border-b border-slate-200">
      {/* Top Bar for contact, hours & announcements */}
      <div className="bg-navy-950 text-slate-300 text-xs py-2 px-4 border-b border-navy-800 hidden sm:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <a
              href={`tel:${SHOP_CONFIG.whatsappNumber}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors font-medium"
            >
              <Phone className="w-3.5 h-3.5 text-electric-400" />
              <span>Call: {SHOP_CONFIG.displayPhone}</span>
            </a>
            <div className="flex items-center gap-1.5 text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-electric-400" />
              <span>Gorath, Azamgarh (UP)</span>
            </div>
            <div className="flex items-center gap-1.5 text-slate-400 hidden lg:flex">
              <Clock className="w-3.5 h-3.5 text-electric-400" />
              <span>Mon-Sat: 10:00 AM - 8:30 PM</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>WhatsApp Order Active: 8858352762</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 shrink-0 group">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-navy-900 via-navy-800 to-electric-600 flex items-center justify-center text-white shadow-md shadow-electric-500/20 group-hover:scale-105 transition-transform duration-300">
              <Monitor className="w-6 h-6 text-electric-glow" />
            </div>
            <div>
              <span className="block font-black text-xl sm:text-2xl tracking-tight text-navy-950 leading-none">
                SHUBHAM
              </span>
              <div className="flex items-center gap-1.5 mt-0.5">
                <span className="block text-[11px] font-bold text-electric tracking-widest uppercase">
                  Computer Sales
                </span>
                <span className="text-[10px] font-semibold text-slate-400 hidden sm:inline">
                  • Gorath, Azamgarh
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Search Bar */}
          <div ref={searchRef} className="hidden md:flex flex-1 max-w-md mx-4 relative">
            <form onSubmit={handleSearchSubmit} className="w-full relative">
              <input
                type="text"
                placeholder="Search HP toner 88A, printers, laptops, RAM..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                className="w-full pl-10 pr-10 py-2.5 bg-slate-100 border border-slate-200 rounded-full text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-electric focus:bg-white focus:ring-2 focus:ring-electric/20 transition-all"
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="p-1 text-slate-400 hover:text-slate-600 absolute right-3 top-1/2 -translate-y-1/2"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </form>

            {/* Live Search Autocomplete Dropdown */}
            {isSearchFocused && searchResults.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden z-50">
                <div className="p-2 border-b border-slate-100 bg-slate-50 text-[11px] font-bold uppercase tracking-wider text-slate-500">
                  Search Suggestions
                </div>
                <div className="divide-y divide-slate-100">
                  {searchResults.map((item) => (
                    <Link
                      key={item.id}
                      to={`/product/${item.id}`}
                      onClick={() => setIsSearchFocused(false)}
                      className="p-3 hover:bg-blue-50 flex items-center gap-3 transition-colors"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-10 h-10 rounded-lg object-cover bg-slate-100 shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-bold text-navy-900 truncate">
                          {item.name}
                        </p>
                        <p className="text-[11px] text-electric-600 font-semibold">
                          ₹{item.price.toLocaleString('en-IN')} • {item.brand}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
                <Link
                  to={`/products?search=${encodeURIComponent(searchQuery)}`}
                  onClick={() => setIsSearchFocused(false)}
                  className="block text-center text-xs font-bold text-electric py-2.5 bg-slate-50 hover:bg-slate-100 transition-colors border-t border-slate-100"
                >
                  View all results for "{searchQuery}"
                </Link>
              </div>
            )}
          </div>

          {/* Right Header Controls (Cart, WhatsApp button, Mobile Menu toggle) */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Header WhatsApp Button */}
            <div className="hidden lg:block">
              <WhatsAppButton variant="header" label="WhatsApp: 8858352762" />
            </div>

            {/* Shopping Cart Button */}
            <button
              onClick={openCart}
              className="relative p-2.5 text-navy-900 hover:text-electric hover:bg-blue-50 rounded-xl transition-colors flex items-center"
              aria-label="Open Cart"
            >
              <ShoppingCart className="w-6 h-6" />
              {totalItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-rose-500 text-white font-bold text-xs w-5 h-5 rounded-full flex items-center justify-center shadow-md animate-pulse">
                  {totalItemsCount}
                </span>
              )}
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2.5 md:hidden text-navy-900 hover:bg-slate-100 rounded-xl transition-colors"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 py-2.5 border-t border-slate-100">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              end={link.path === '/'}
              className={({ isActive }) =>
                `px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? 'text-electric bg-blue-50/80 shadow-sm'
                    : 'text-slate-600 hover:text-navy-950 hover:bg-slate-100/70'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-4">
          {/* Mobile Search */}
          <form onSubmit={handleSearchSubmit} className="relative">
            <input
              type="text"
              placeholder="Search printers, toner, laptops..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-slate-100 border border-slate-200 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-electric"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          </form>

          {/* Mobile Nav Links */}
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `px-3 py-2.5 rounded-lg text-sm font-bold transition-colors ${
                    isActive ? 'bg-blue-50 text-electric' : 'text-navy-900 hover:bg-slate-50'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Mobile WhatsApp Button */}
          <div className="pt-2">
            <WhatsAppButton variant="header" label="Order on WhatsApp (8858352762)" className="w-full justify-center py-3" />
          </div>

          <div className="pt-2 text-xs text-slate-600 border-t border-slate-100 flex flex-col gap-1.5">
            <p className="font-bold text-navy-900">📞 Phone: {SHOP_CONFIG.displayPhone}</p>
            <p className="text-slate-500">📍 {SHOP_CONFIG.address}</p>
          </div>
        </div>
      )}
    </header>
  );
}

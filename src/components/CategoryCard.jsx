import React from 'react';
import { Link } from 'react-router-dom';
import {
  Monitor,
  Laptop,
  Printer,
  Layers,
  Droplets,
  Cpu,
  Speaker,
  Zap,
  Cable,
  Keyboard,
  HardDrive,
  CircuitBoard,
  Wifi,
  ShieldCheck,
  Video,
  ChevronRight
} from 'lucide-react';

const iconMap = {
  Monitor,
  Laptop,
  Printer,
  Layers,
  Droplets,
  Cpu,
  Speaker,
  Zap,
  Cable,
  Keyboard,
  HardDrive,
  CircuitBoard,
  Wifi,
  ShieldCheck,
  Video
};

export default function CategoryCard({ category }) {
  const IconComponent = iconMap[category.iconName] || Cpu;

  return (
    <Link
      to={`/products?category=${category.slug}`}
      className="group relative bg-white rounded-2xl border border-slate-200/80 p-4 sm:p-5 shadow-sm hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between overflow-hidden"
    >
      {/* Background Subtle Accent on hover */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-bl-full pointer-events-none group-hover:scale-125 transition-transform duration-500"></div>

      <div>
        {/* Top Header with Icon and Count */}
        <div className="flex items-center justify-between mb-4">
          <div className="w-12 h-12 rounded-xl bg-blue-50 text-electric-600 flex items-center justify-center group-hover:bg-electric group-hover:text-white transition-colors duration-300 shadow-sm">
            <IconComponent className="w-6 h-6 stroke-[1.8]" />
          </div>

          <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">
            {category.itemCount}
          </span>
        </div>

        {/* Category Image Preview */}
        <div className="w-full h-28 rounded-xl overflow-hidden mb-3 bg-slate-100 relative">
          <img
            src={category.image}
            alt={category.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            loading="lazy"
            onError={(e) => {
              e.target.src = 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400&q=80';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/40 via-transparent to-transparent"></div>
        </div>

        {/* Title & Description */}
        <h3 className="font-bold text-navy-900 text-base group-hover:text-electric transition-colors leading-snug">
          {category.name}
        </h3>
        <p className="text-xs text-slate-500 line-clamp-2 mt-1 leading-relaxed">
          {category.description}
        </p>
      </div>

      {/* Explore link */}
      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-electric group-hover:translate-x-1 transition-transform">
        <span>Explore Collection</span>
        <ChevronRight className="w-4 h-4" />
      </div>
    </Link>
  );
}

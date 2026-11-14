import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import {
  Search,
  Filter,
  SlidersHorizontal,
  X,
  RotateCcw,
  Package,
  Layers,
  ArrowUpDown,
  Check
} from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import { categories } from '../data/categories';

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();

  // Read URL parameters
  const initialCategory = searchParams.get('category') || 'all';
  const initialBrand = searchParams.get('brand') || 'all';
  const initialSearch = searchParams.get('search') || '';

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedBrand, setSelectedBrand] = useState(initialBrand);
  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [sortBy, setSortBy] = useState('featured');
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  // Sync state when URL searchParams change
  useEffect(() => {
    setSelectedCategory(searchParams.get('category') || 'all');
    setSelectedBrand(searchParams.get('brand') || 'all');
    setSearchQuery(searchParams.get('search') || '');
  }, [searchParams]);

  // Extract all unique brands from products
  const uniqueBrands = useMemo(() => {
    const brandsSet = new Set(products.map((p) => p.brand));
    return ['all', ...Array.from(brandsSet).sort()];
  }, []);

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    return products
      .filter((product) => {
        // Category filter
        if (selectedCategory !== 'all' && product.category !== selectedCategory) {
          return false;
        }
        // Brand filter
        if (selectedBrand !== 'all' && product.brand.toLowerCase() !== selectedBrand.toLowerCase()) {
          return false;
        }
        // Search query
        if (searchQuery.trim()) {
          const q = searchQuery.toLowerCase().trim();
          const matchesName = product.name.toLowerCase().includes(q);
          const matchesBrand = product.brand.toLowerCase().includes(q);
          const matchesCategory = product.categoryName.toLowerCase().includes(q);
          const matchesDesc = product.shortDescription.toLowerCase().includes(q);
          if (!matchesName && !matchesBrand && !matchesCategory && !matchesDesc) {
            return false;
          }
        }
        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'price-low') {
          return a.price - b.price;
        }
        if (sortBy === 'price-high') {
          return b.price - a.price;
        }
        if (sortBy === 'rating') {
          return (b.rating || 0) - (a.rating || 0);
        }
        if (sortBy === 'name-asc') {
          return a.name.localeCompare(b.name);
        }
        // 'featured'
        return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
      });
  }, [selectedCategory, selectedBrand, searchQuery, sortBy]);

  // Update URL params
  const updateFilters = (newCat, newBrand, newSearch) => {
    const params = new URLSearchParams();
    if (newCat && newCat !== 'all') params.set('category', newCat);
    if (newBrand && newBrand !== 'all') params.set('brand', newBrand);
    if (newSearch && newSearch.trim()) params.set('search', newSearch.trim());
    setSearchParams(params);
  };

  const handleCategoryChange = (slug) => {
    setSelectedCategory(slug);
    updateFilters(slug, selectedBrand, searchQuery);
  };

  const handleBrandChange = (brand) => {
    setSelectedBrand(brand);
    updateFilters(selectedCategory, brand, searchQuery);
  };

  const handleSearchChange = (val) => {
    setSearchQuery(val);
    updateFilters(selectedCategory, selectedBrand, val);
  };

  const resetFilters = () => {
    setSelectedCategory('all');
    setSelectedBrand('all');
    setSearchQuery('');
    setSortBy('featured');
    setSearchParams({});
  };

  const hasActiveFilters =
    selectedCategory !== 'all' || selectedBrand !== 'all' || searchQuery.trim() !== '';

  return (
    <div className="min-h-screen bg-slate-50 py-8 lg:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Breadcrumb & Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
            <Link to="/" className="hover:text-electric">Home</Link>
            <span>/</span>
            <span className="text-slate-800 font-semibold">All Products</span>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-navy-950">
            Computers, Printers & Electronics Catalog
          </h1>
          <p className="text-sm text-slate-500 mt-1 max-w-2xl">
            Browse our full lineup of authentic computing hardware, office printers, original toner cartridges and computer accessories.
          </p>
        </div>

        {/* Top Controls Strip: Search & Mobile Filter Toggle */}
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm mb-6 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Search Field */}
          <div className="relative w-full md:max-w-md">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by product name, model or keyword..."
              value={searchQuery}
              onChange={(e) => handleSearchChange(e.target.value)}
              className="w-full pl-10 pr-10 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-electric focus:bg-white focus:ring-2 focus:ring-electric/20"
            />
            {searchQuery && (
              <button
                onClick={() => handleSearchChange('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-end">
            {/* Mobile Filter Button */}
            <button
              onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
              className="lg:hidden flex items-center gap-2 px-4 py-2.5 bg-slate-100 hover:bg-slate-200 rounded-xl text-xs font-bold text-navy-900 transition-colors"
            >
              <SlidersHorizontal className="w-4 h-4" />
              <span>Filters {hasActiveFilters && '• Active'}</span>
            </button>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-600">
              <span className="hidden sm:inline">Sort By:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-slate-50 border border-slate-200 text-navy-900 rounded-xl px-3 py-2 text-xs font-bold focus:outline-none focus:border-electric"
              >
                <option value="featured">Featured / Best Sellers</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Customer Rating</option>
                <option value="name-asc">Alphabetical (A - Z)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Category Pills Strip */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 no-scrollbar">
          <button
            onClick={() => handleCategoryChange('all')}
            className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
              selectedCategory === 'all'
                ? 'bg-electric text-white shadow-sm'
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
            }`}
          >
            All Categories ({products.length})
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleCategoryChange(cat.slug)}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                selectedCategory === cat.slug
                  ? 'bg-electric text-white shadow-sm'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Main Content Layout (Sidebar Filters + Products Grid) */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Desktop Filters Sidebar */}
          <aside className={`lg:block ${isMobileFilterOpen ? 'block' : 'hidden'} lg:col-span-1`}>
            <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm space-y-6 sticky top-28">
              {/* Header */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2 font-bold text-navy-900 text-sm">
                  <Filter className="w-4 h-4 text-electric" />
                  <span>Filter Products</span>
                </div>
                {hasActiveFilters && (
                  <button
                    onClick={resetFilters}
                    className="text-xs text-rose-500 hover:text-rose-600 flex items-center gap-1 font-semibold"
                  >
                    <RotateCcw className="w-3 h-3" /> Reset
                  </button>
                )}
              </div>

              {/* Categories Filter List */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Categories
                </h4>
                <div className="space-y-1 max-h-56 overflow-y-auto pr-1">
                  <button
                    onClick={() => handleCategoryChange('all')}
                    className={`w-full text-left px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center justify-between ${
                      selectedCategory === 'all'
                        ? 'bg-blue-50 text-electric font-bold'
                        : 'text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <span>All Products</span>
                    <span>{products.length}</span>
                  </button>
                  {categories.map((cat) => {
                    const count = products.filter((p) => p.category === cat.slug).length;
                    return (
                      <button
                        key={cat.id}
                        onClick={() => handleCategoryChange(cat.slug)}
                        className={`w-full text-left px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center justify-between transition-colors ${
                          selectedCategory === cat.slug
                            ? 'bg-blue-50 text-electric font-bold'
                            : 'text-slate-600 hover:bg-slate-50'
                        }`}
                      >
                        <span className="truncate pr-2">{cat.name}</span>
                        <span className="text-[11px] text-slate-400">{count}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Brands Filter List */}
              <div className="pt-4 border-t border-slate-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Filter by Brand
                </h4>
                <div className="space-y-1 max-h-48 overflow-y-auto pr-1">
                  {uniqueBrands.map((brand) => (
                    <button
                      key={brand}
                      onClick={() => handleBrandChange(brand)}
                      className={`w-full text-left px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center justify-between transition-colors ${
                        selectedBrand.toLowerCase() === brand.toLowerCase()
                          ? 'bg-blue-50 text-electric font-bold'
                          : 'text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      <span>{brand === 'all' ? 'All Brands' : brand}</span>
                      {selectedBrand.toLowerCase() === brand.toLowerCase() && (
                        <Check className="w-3.5 h-3.5 text-electric" />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range Filter Note */}
              <div className="pt-4 border-t border-slate-100 bg-blue-50/50 p-3.5 rounded-xl text-xs text-slate-600">
                <p className="font-bold text-navy-900 mb-1">Looking for a specific model?</p>
                <p className="text-[11px] leading-relaxed text-slate-500 mb-2">
                  We can source any PC part or printer model not listed here within 24 hours.
                </p>
                <Link to="/contact" className="text-xs font-bold text-electric hover:underline">
                  Inquire with Shop Specialist →
                </Link>
              </div>
            </div>
          </aside>

          {/* Products Grid Column */}
          <main className="lg:col-span-3">
            {/* Active Filters Indicators */}
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs text-slate-500 font-medium">
                Showing <strong className="text-navy-950 font-bold">{filteredProducts.length}</strong> products
              </span>

              {hasActiveFilters && (
                <div className="flex flex-wrap items-center gap-1.5">
                  {selectedCategory !== 'all' && (
                    <span className="inline-flex items-center gap-1 text-[11px] bg-blue-50 text-electric px-2.5 py-1 rounded-md font-semibold">
                      Category: {selectedCategory}
                      <button onClick={() => handleCategoryChange('all')}>
                        <X className="w-3 h-3" />
                      </button>
                    </span>
                  )}
                  {selectedBrand !== 'all' && (
                    <span className="inline-flex items-center gap-1 text-[11px] bg-blue-50 text-electric px-2.5 py-1 rounded-md font-semibold">
                      Brand: {selectedBrand}
                      <button onClick={() => handleBrandChange('all')}>
                        <X className="w-3 h-3" />
                      </button>
                    </span>
                  )}
                  {searchQuery && (
                    <span className="inline-flex items-center gap-1 text-[11px] bg-blue-50 text-electric px-2.5 py-1 rounded-md font-semibold">
                      Search: "{searchQuery}"
                      <button onClick={() => handleSearchChange('')}>
                        <X className="w-3 h-3" />
                      </button>
                    </span>
                  )}
                </div>
              )}
            </div>

            {/* Empty State */}
            {filteredProducts.length === 0 ? (
              <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center my-6">
                <div className="w-16 h-16 bg-blue-50 text-electric rounded-2xl mx-auto flex items-center justify-center mb-4">
                  <Package className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-navy-950 mb-1">
                  No products found
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 max-w-sm mx-auto mb-6">
                  We couldn't find any products matching your current filters. Try resetting the filters or searching for another keyword.
                </p>
                <button
                  onClick={resetFilters}
                  className="inline-flex items-center gap-2 bg-navy-900 text-white font-bold text-xs px-5 py-2.5 rounded-xl hover:bg-navy-800 transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset All Filters</span>
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}

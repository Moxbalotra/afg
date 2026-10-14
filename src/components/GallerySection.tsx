import React, { useState } from 'react';
import { Product } from '../types';
import { PRODUCTS } from '../data/stoneArtData';
import { StoneImage } from './StoneImage';
import { Sparkles, ArrowUpRight, Search, Clock, Compass } from 'lucide-react';

interface GallerySectionProps {
  onSelectProduct: (product: Product) => void;
  onOpenConsultation: () => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({
  onSelectProduct,
  onOpenConsultation
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', label: 'All Masterpieces' },
    { id: 'temples', label: 'Luxury Temples' },
    { id: 'idols', label: 'Sacred Deities' },
    { id: 'fountains', label: 'Water Fountains' },
    { id: 'jali', label: 'Stone Jali & Screens' },
    { id: 'inlay', label: 'Pietra Dura Inlay' }
  ];

  const filteredProducts = PRODUCTS.filter((item) => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.material.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="gallery" className="py-20 md:py-28 bg-[#FAF8F5] text-stone-900 border-t border-[#EAE3D6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-[#996515] tracking-widest uppercase mb-2 font-cinzel">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Rajasthan Atelier Collection</span>
            </div>
            <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-950">
              Curated Stone Masterpieces
            </h2>
          </div>

          <p className="text-sm text-stone-600 max-w-md leading-relaxed">
            Each artifact is individually hand-chiseled from certified Makrana, Vietnamese, and Italian stone blocks. Available for direct international shipment.
          </p>
        </div>

        {/* Filter Controls & Search Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10 pb-6 border-b border-[#E8E1D5]">
          {/* Segmented Control Filter Tabs (Light Theme) */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                  selectedCategory === cat.id
                    ? 'bg-[#b8860b] text-white shadow-sm'
                    : 'bg-white text-stone-700 hover:text-stone-950 hover:bg-stone-50 border border-stone-300'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search deity, stone..."
              className="w-full pl-9 pr-3 py-2 text-xs text-stone-900 bg-white border border-stone-300 rounded-lg placeholder-stone-400 focus:outline-none focus:border-[#b8860b] shadow-xs"
            />
          </div>
        </div>

        {/* 3-Column Responsive Masterpiece Grid (Light Theme Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              onClick={() => onSelectProduct(product)}
              className="group bg-white hover:bg-white border border-[#E8E1D5] hover:border-stone-400 rounded-2xl overflow-hidden transition-all duration-300 flex flex-col justify-between cursor-pointer hover:-translate-y-1 shadow-xs hover:shadow-xl"
            >
              {/* Product Visual */}
              <div className="relative aspect-[4/3] overflow-hidden bg-stone-100">
                <StoneImage
                  src={product.image}
                  alt={product.name}
                  aspectRatioClass="aspect-[4/3]"
                  className="group-hover:scale-105 transition-transform duration-500"
                  fallbackTitle={product.name}
                  fallbackSubtitle={product.material}
                />
                
                {/* Visual Gradient Scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />

                {/* Status Kicker */}
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md border border-stone-200 px-2.5 py-1 rounded text-[11px] text-stone-800 font-semibold shadow-xs">
                  {product.material.split('&')[0]}
                </div>

                {/* Inspect Overlay Prompt on Hover */}
                <div className="absolute inset-0 bg-black/35 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                  <span className="px-4 py-2 bg-white text-stone-900 text-xs font-semibold rounded-lg shadow-xl flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <span>Inspect Craftsmanship</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#b8860b]" />
                  </span>
                </div>
              </div>

              {/* Product Content Details */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  {/* Unboxed Metadata (Zero Pill Rule) */}
                  <div className="flex items-center gap-2 text-[11px] text-stone-500 mb-2">
                    <span className="text-[#996515] font-semibold uppercase font-cinzel">
                      {product.categoryLabel}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span>{product.quarryOrigin}</span>
                  </div>

                  <h3 className="font-cinzel text-base sm:text-lg font-bold text-stone-900 group-hover:text-[#b8860b] transition-colors mb-2 line-clamp-1">
                    {product.name}
                  </h3>

                  <p className="text-xs text-stone-600 line-clamp-2 mb-4 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* Card Footer Strip */}
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#b8860b]" />
                    <span className="tabular-nums font-medium text-stone-700">{product.artisanHours} hrs chiseling</span>
                  </span>

                  {product.vastuCompliant && (
                    <span className="flex items-center gap-1 text-emerald-700 text-[11px] font-medium">
                      <Compass className="w-3 h-3" />
                      <span>Vastu Aligned</span>
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty Search State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16 border border-dashed border-stone-300 rounded-2xl bg-white">
            <p className="text-base text-stone-700 mb-2">No sculptures matched your search.</p>
            <p className="text-xs text-stone-500 mb-6">Our Makrana sculptors craft entirely bespoke designs for any deity or dimensions.</p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="px-4 py-2 text-xs font-semibold text-white bg-[#b8860b] rounded-lg shadow-sm"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Bottom Bespoke Callout (Light Theme) */}
        <div className="mt-16 text-center bg-gradient-to-r from-[#F4EFE6] via-white to-[#F4EFE6] border border-[#E8E1D5] rounded-2xl p-8 sm:p-10 shadow-sm">
          <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-stone-900 mb-2">
            Have a Specific Deity, Arch, or Temple Dimension in Mind?
          </h3>
          <p className="text-sm text-stone-600 max-w-xl mx-auto mb-6 leading-relaxed">
            We sculpt customized sacred idols from 1.5 ft to 15 ft, and palatial home temples fitted precisely into your room alcove or dedicated sanctuary hall.
          </p>
          <button
            onClick={onOpenConsultation}
            className="px-6 py-3 text-xs sm:text-sm font-semibold text-white bg-[#b8860b] hover:bg-[#a67c38] rounded-lg shadow-sm transition-all cursor-pointer inline-flex items-center gap-2"
          >
            <span>Commission a Custom Masterpiece</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

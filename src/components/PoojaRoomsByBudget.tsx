import React from 'react';
import { POOJA_ROOM_BUDGETS } from '../data/stoneArtData';
import { StoneImage } from './StoneImage';
import { PoojaRoomBudget } from '../types';

interface PoojaRoomsByBudgetProps {
  onSelectBudget: (item: PoojaRoomBudget) => void;
  onUnderstandPricing: () => void;
}

export const PoojaRoomsByBudget: React.FC<PoojaRoomsByBudgetProps> = ({
  onSelectBudget,
  onUnderstandPricing
}) => {
  return (
    <section id="budgets" className="bg-white text-stone-900 py-20 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header (Matches Screenshot 4) */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="font-cinzel text-2xl sm:text-3xl lg:text-4xl font-bold tracking-wider text-stone-900 uppercase mb-3">
            POOJA ROOM FOR EVERY BUDGET
          </h2>
          <p className="text-sm text-stone-600 leading-relaxed">
            Discover the perfect pooja room for your home with our curated categories, offering timeless designs at prices that fit every budget.
          </p>
        </div>

        {/* 4 Cards Grid (Exact match to Screenshot 4) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {POOJA_ROOM_BUDGETS.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectBudget(item)}
              className="group relative rounded-xl overflow-hidden shadow-lg border border-stone-200 cursor-pointer bg-stone-950 aspect-[3/4] flex flex-col justify-end"
            >
              {/* Image */}
              <div className="absolute inset-0">
                <StoneImage
                  src={item.image}
                  alt={item.title}
                  aspectRatioClass="h-full w-full"
                  className="group-hover:scale-105 transition-transform duration-700"
                  fallbackTitle={item.title}
                  fallbackSubtitle={item.priceTag}
                />
                {/* Scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
              </div>

              {/* Price Tag (Top Left Badge in Screenshot 4) */}
              <div className="absolute top-4 left-4 z-10 bg-[#a67c38]/90 text-white font-medium text-xs px-3 py-1.5 rounded-sm shadow-md uppercase tracking-wider">
                {item.priceTag}
              </div>

              {/* Bottom Title (Screenshot 4) */}
              <div className="relative z-10 p-4 sm:p-5 text-white">
                <h3 className="font-sans font-medium text-sm sm:text-base text-white group-hover:text-[#f3df99] transition-colors">
                  {item.title}
                </h3>
                <p className="text-[11px] text-stone-300 line-clamp-1 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  {item.features.join(' · ')}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* "Understand Pricing" Button (Screenshot 4) */}
        <div className="text-center">
          <button
            onClick={onUnderstandPricing}
            className="px-8 py-3 bg-[#a67c38] hover:bg-[#8f682d] text-white font-medium text-sm rounded shadow-md transition-all cursor-pointer hover:shadow-lg hover:-translate-y-0.5 tracking-wide"
          >
            Understand Pricing
          </button>
        </div>
      </div>
    </section>
  );
};

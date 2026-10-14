import React from 'react';
import { DREAM_TEMPLE_BUDGETS } from '../data/stoneArtData';
import { StoneImage } from './StoneImage';
import { DreamTempleBudget } from '../types';

interface DreamTemplesByBudgetProps {
  onSelectTemple: (item: DreamTempleBudget) => void;
  onUnderstandPricing: () => void;
}

export const DreamTemplesByBudget: React.FC<DreamTemplesByBudgetProps> = ({
  onSelectTemple,
  onUnderstandPricing
}) => {
  return (
    <section className="bg-white text-stone-900 py-20 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header (Matches Screenshot 6) */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="font-cinzel text-2xl sm:text-3xl lg:text-4xl font-bold tracking-wider text-stone-900 uppercase mb-3">
            DREAM TEMPLE FOR EVERY BUDGET
          </h2>
          <p className="text-sm text-stone-600 leading-relaxed">
            Transform your space with our exquisite Dream Temples, thoughtfully designed to suit every style and budget.
          </p>
        </div>

        {/* 4 Cards Grid (Exact match to Screenshot 6) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {DREAM_TEMPLE_BUDGETS.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectTemple(item)}
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
                  fallbackSubtitle={item.startingPrice}
                />
                {/* Scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
              </div>

              {/* Price Tag (Top Left Badge in Screenshot 6) */}
              <div className="absolute top-4 left-4 z-10 bg-[#a67c38]/90 text-white font-medium text-xs px-3 py-1.5 rounded-sm shadow-md tracking-wider">
                {item.startingPrice}
              </div>

              {/* Bottom Title (Screenshot 6) */}
              <div className="relative z-10 p-4 sm:p-5 text-white">
                <h3 className="font-sans font-medium text-sm sm:text-base text-white group-hover:text-[#f3df99] transition-colors">
                  {item.title}
                </h3>
                <p className="text-[11px] text-stone-300 line-clamp-1 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* "Understand Pricing" Button (Screenshot 6) */}
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

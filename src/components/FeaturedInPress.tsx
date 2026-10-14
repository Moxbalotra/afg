import React from 'react';
import { PRESS_LOGOS } from '../data/stoneArtData';

export const FeaturedInPress: React.FC = () => {
  const pressQuotes = [
    {
      source: 'GoodHomes India',
      quote: 'A Spiritual Oasis in the Heart of Rajasthan | A Stone Clad Heaven that celebrates the mix of maximalism and modernity'
    },
    {
      source: 'ELLE DECOR',
      quote: '9 lifestyle and design stores in India that are a vibrant portal to a world of novelty and heritage'
    },
    {
      source: 'Trend Magazine',
      quote: 'Around 500 meters from the iconic heritage and opposite legendary cinema lies an exquisite retail store spanning approximately 8,000sqft'
    },
    {
      source: 'The Architect\'s Diary',
      quote: 'Step into the world of India\'s Top 30 Best Retail Interiors 2024 celebrating sacred marble craftsmanship'
    }
  ];

  return (
    <section className="bg-white text-stone-900 py-16 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header (Matches Screenshot 16) */}
        <h2 className="font-cinzel text-xl sm:text-2xl font-bold tracking-widest text-center text-stone-900 uppercase mb-10">
          FEATURED IN
        </h2>

        {/* Press Logos Bar (Screenshot 16) */}
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 mb-14 text-stone-700 opacity-90">
          {PRESS_LOGOS.map((press) => (
            <span
              key={press}
              className="font-serif text-base sm:text-xl font-bold tracking-wider text-stone-800 hover:text-[#b8860b] transition-colors"
            >
              {press}
            </span>
          ))}
        </div>

        {/* Press Quotes Grid (Screenshot 16) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pressQuotes.map((item, idx) => (
            <div
              key={idx}
              className="bg-stone-50 rounded-xl p-6 border border-stone-200/70 shadow-xs flex flex-col justify-between"
            >
              <h4 className="font-serif font-bold text-sm text-stone-900 mb-2 uppercase tracking-wider">
                {item.source}
              </h4>
              <p className="text-xs text-stone-600 leading-relaxed italic">
                "{item.quote}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

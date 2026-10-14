import React from 'react';
import { GOOGLE_REVIEWS } from '../data/stoneArtData';
import { Star, CheckCircle } from 'lucide-react';

export const GoogleReviewsSection: React.FC = () => {
  return (
    <section className="bg-white text-stone-900 py-20 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header (Matches Screenshot 15) */}
        <h2 className="font-cinzel text-2xl sm:text-3xl lg:text-4xl font-bold tracking-widest text-center text-stone-900 mb-14">
          What Clients Say about us on Google
        </h2>

        {/* 8 Google Review Cards Grid (Screenshot 15) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {GOOGLE_REVIEWS.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-2xl p-6 border border-stone-200/80 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                {/* Reviewer Header with Avatar & Verified Mark */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-500 to-[#b8860b] text-white flex items-center justify-center font-bold text-sm shadow-xs">
                    {review.initial}
                  </div>
                  <div>
                    <div className="flex items-center gap-1 font-semibold text-xs text-stone-900">
                      <span>{review.name}</span>
                      <CheckCircle className="w-3.5 h-3.5 text-amber-500 fill-current" />
                    </div>
                    <span className="text-[11px] text-stone-400">
                      {review.timeAgo}
                    </span>
                  </div>
                </div>

                {/* 5 Stars */}
                <div className="flex gap-0.5 text-amber-500 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-xs text-stone-600 leading-relaxed mb-3 line-clamp-4">
                  "{review.review}"
                </p>
              </div>

              {/* Bottom Google Verified Badge (Screenshot 15) */}
              <div className="pt-3 border-t border-stone-100 flex items-center gap-2">
                <span className="w-4 h-4 rounded-full bg-red-500 text-white flex items-center justify-center font-bold text-[9px]">
                  G
                </span>
                <span className="text-[11px] text-stone-400">
                  Posted on <strong className="text-stone-600 font-medium">Google</strong>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

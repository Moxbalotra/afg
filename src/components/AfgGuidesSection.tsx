import React, { useState } from 'react';
import { ARTICLE_GUIDES } from '../data/stoneArtData';
import { StoneImage } from './StoneImage';
import { ArticleGuide } from '../types';
import { X, BookOpen, Clock } from 'lucide-react';

export const AfgGuidesSection: React.FC = () => {
  const [activeArticle, setActiveArticle] = useState<ArticleGuide | null>(null);

  return (
    <section id="guides" className="bg-[#FAF8F5] text-stone-900 py-20 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header (Matches Screenshot 12) */}
        <h2 className="font-cinzel text-2xl sm:text-3xl lg:text-4xl font-bold tracking-widest text-center text-stone-900 uppercase mb-12">
          AFG GUIDES
        </h2>

        {/* 3 Editorial Cards Grid (Screenshot 12) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {ARTICLE_GUIDES.map((guide) => (
            <div
              key={guide.id}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-stone-200 flex flex-col justify-between"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-stone-950">
                <StoneImage
                  src={guide.image}
                  alt={guide.title}
                  aspectRatioClass="h-full w-full"
                  fallbackTitle={guide.category}
                  fallbackSubtitle={guide.readTime}
                />
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-[11px] text-stone-500 mb-2">
                    <span className="text-[#b8860b] font-semibold">{guide.category}</span>
                    <span>·</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {guide.readTime}
                    </span>
                  </div>

                  <h3 className="font-sans font-medium text-base text-stone-900 mb-2 leading-snug">
                    {guide.title}
                  </h3>

                  <p className="text-xs text-stone-600 line-clamp-2 mb-4">
                    {guide.snippet}
                  </p>
                </div>

                {/* "Read More" Link (Screenshot 12) */}
                <div className="pt-2">
                  <button
                    onClick={() => setActiveArticle(guide)}
                    className="text-xs font-semibold text-[#b8860b] hover:text-[#8a6508] underline cursor-pointer"
                  >
                    Read More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* "View More" Black Button (Screenshot 12) */}
        <div className="text-center">
          <button
            onClick={() => setActiveArticle(ARTICLE_GUIDES[0])}
            className="px-8 py-3 bg-black hover:bg-stone-800 text-white font-medium text-xs sm:text-sm rounded transition-all cursor-pointer shadow-md"
          >
            View More
          </button>
        </div>
      </div>

      {/* Article Reader Modal */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in">
          <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl p-6 sm:p-8 max-h-[85vh] overflow-y-auto">
            <button
              onClick={() => setActiveArticle(null)}
              className="absolute top-4 right-4 p-2 text-stone-500 hover:text-stone-900 rounded-full"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-xs text-[#b8860b] font-semibold mb-2">
              <BookOpen className="w-4 h-4" />
              <span>{activeArticle.category} · {activeArticle.readTime}</span>
            </div>

            <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-stone-900 mb-4">
              {activeArticle.title}
            </h3>

            <div className="aspect-[16/9] rounded-xl overflow-hidden mb-6">
              <StoneImage
                src={activeArticle.image}
                alt={activeArticle.title}
                aspectRatioClass="h-full w-full"
              />
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-stone-700 leading-relaxed">
              <p>{activeArticle.snippet}</p>
              <p>
                At A.F.G Marble and Arts, we combine centuries-old Shilpa Shastra stone architectural conventions with modern ergonomics. Whether crafting an intimate apartment pooja alcove or a monumental 150 sqft private villa sanctum, our master sculptors consider sightlines, sacred sunlight diffusion, and zero-stain natural Makrana marble water-honing.
              </p>
              <p>
                Each temple is equipped with hidden wiring conduits, brass acoustic bell attachments, and dedicated storage for sacred pooja samagri.
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

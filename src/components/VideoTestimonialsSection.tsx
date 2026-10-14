import React, { useState } from 'react';
import { VIDEO_TESTIMONIALS } from '../data/stoneArtData';
import { StoneImage } from './StoneImage';
import { Play, X, Star } from 'lucide-react';
import { VideoTestimonial } from '../types';

export const VideoTestimonialsSection: React.FC = () => {
  const [activeVideo, setActiveVideo] = useState<VideoTestimonial | null>(null);

  return (
    <section id="testimonials" className="bg-[#FAF8F5] text-stone-900 py-20 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header (Matches Screenshot 8 & 9) */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="font-cinzel text-2xl sm:text-3xl lg:text-4xl font-bold tracking-widest text-stone-900 uppercase mb-3">
            1000 + HAPPY FAMILIES
          </h2>
          <p className="text-xs sm:text-sm text-stone-600">
            Real stories and emotional blessings from families who welcomed an AFG mandir into their homes.
          </p>
        </div>

        {/* Video Testimonials Grid (Screenshot 8 & 9) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {VIDEO_TESTIMONIALS.map((vt) => (
            <div
              key={vt.id}
              onClick={() => setActiveVideo(vt)}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-stone-200 cursor-pointer flex flex-col justify-between group"
            >
              {/* Video Thumbnail with Play Button */}
              <div className="relative aspect-[4/3] overflow-hidden bg-stone-950">
                <StoneImage
                  src={vt.image}
                  alt={vt.clientName}
                  aspectRatioClass="h-full w-full"
                  className="group-hover:scale-105 transition-transform duration-500"
                  fallbackTitle={vt.clientName}
                  fallbackSubtitle={vt.city}
                />
                
                {/* Center Play Button (Screenshot 9) */}
                <div className="absolute inset-0 bg-black/25 group-hover:bg-black/15 transition-colors flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/90 group-hover:bg-white text-stone-900 flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
                    <Play className="w-5 h-5 fill-current ml-0.5 text-stone-900" />
                  </div>
                </div>

                <div className="absolute bottom-2 right-2 bg-black/70 text-white text-[10px] px-1.5 py-0.5 rounded font-mono">
                  {vt.videoDuration}
                </div>
              </div>

              {/* Text Card Body (Screenshot 9) */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <p className="text-xs text-stone-700 leading-relaxed italic mb-4">
                  "{vt.highlightText}"
                </p>

                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="font-semibold text-xs text-stone-900 block uppercase">
                      {vt.clientName}
                    </span>
                    <span className="text-[11px] text-stone-500 uppercase tracking-wider block">
                      {vt.city}
                    </span>
                  </div>
                  <div className="flex gap-0.5 text-[#b8860b]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal Preview */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in">
          <div className="relative w-full max-w-2xl bg-stone-900 rounded-2xl overflow-hidden shadow-2xl border border-stone-700">
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-4 right-4 z-20 p-2 text-white bg-black/70 hover:bg-black rounded-full"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="aspect-video relative bg-black flex items-center justify-center">
              <StoneImage
                src={activeVideo.image}
                alt={activeVideo.clientName}
                aspectRatioClass="h-full w-full opacity-60"
                fallbackTitle={activeVideo.clientName}
                fallbackSubtitle={activeVideo.city}
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 bg-gradient-to-t from-black/90 to-transparent">
                <div className="w-16 h-16 rounded-full bg-[#d4af37] text-stone-950 flex items-center justify-center mb-4 shadow-xl animate-pulse">
                  <Play className="w-8 h-8 fill-current ml-1" />
                </div>
                <h3 className="font-cinzel text-xl font-bold text-white mb-2">
                  {activeVideo.clientName} · {activeVideo.city}
                </h3>
                <p className="text-sm text-stone-300 max-w-md">
                  "{activeVideo.highlightText}"
                </p>
                <div className="mt-4 text-xs text-[#e5c365]">
                  Streaming Customer Story Experience
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

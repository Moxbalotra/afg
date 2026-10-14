import React from 'react';
import { REELS_FEED } from '../data/stoneArtData';
import { StoneImage } from './StoneImage';
import { Play, CheckCircle2 } from 'lucide-react';

export const InstagramReelsSection: React.FC = () => {
  return (
    <section className="bg-white text-stone-900 py-16 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Instagram Profile Header (Matches Screenshot 11) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 mb-12">
          {/* Circular Profile Avatar */}
          <div className="w-16 h-16 rounded-full border-2 border-[#d4af37] p-0.5 shadow-md flex items-center justify-center bg-stone-950 text-[#d4af37]">
            <span className="font-cinzel text-lg font-bold">AFG</span>
          </div>

          <div className="text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
              <span className="font-bold text-base text-stone-900">
                afgmarbleandarts
              </span>
              <CheckCircle2 className="w-4 h-4 text-blue-500 fill-current" />
            </div>
            <p className="text-xs text-stone-500 mb-2">
              A.F.G Marble And Arts India
            </p>

            <div className="flex items-center justify-center sm:justify-start gap-4 text-xs text-stone-700">
              <span><strong>321</strong> posts</span>
              <span><strong>291.9K</strong> followers</span>
              <span><strong>127</strong> following</span>
            </div>
          </div>

          {/* Follow Button (Screenshot 11) */}
          <div>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-[#b8860b] hover:bg-[#a67c38] text-white text-xs font-semibold rounded shadow-sm transition-colors cursor-pointer inline-block"
            >
              Follow
            </a>
          </div>
        </div>

        {/* 4 Vertical Reel Cards (Screenshot 11) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-10">
          {REELS_FEED.map((reel) => (
            <div
              key={reel.id}
              className="relative aspect-[9/16] rounded-2xl overflow-hidden shadow-md border border-stone-200 bg-stone-950 group cursor-pointer"
            >
              <StoneImage
                src={reel.image}
                alt={reel.title}
                aspectRatioClass="h-full w-full"
                className="group-hover:scale-105 transition-transform duration-700"
                fallbackTitle={reel.title}
                fallbackSubtitle={reel.location}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />

              {/* Instagram Reel Play Indicator Top Right */}
              <div className="absolute top-3 right-3 text-white">
                <Play className="w-4 h-4 fill-current drop-shadow" />
              </div>

              {/* Reel Title & Handle Overlay Bottom (Matches Screenshot 11) */}
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[10px] text-[#f3df99] uppercase tracking-wider block font-mono mb-1">
                  @afgmarbleandarts
                </span>
                <p className="text-xs font-semibold text-white line-clamp-2 mb-1">
                  {reel.title}
                </p>
                <span className="text-[10px] text-stone-300">
                  {reel.location} · {reel.views}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* "See More Posts" Button (Blue button from Screenshot 11) */}
        <div className="text-center">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 bg-[#2b87e3] hover:bg-[#1f73c9] text-white text-xs font-medium rounded transition-colors shadow-sm inline-block"
          >
            See More Posts
          </a>
        </div>
      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { StoneImage } from './StoneImage';
import { MoveHorizontal } from 'lucide-react';

export const CarvingComparison: React.FC = () => {
  const [sliderPos, setSliderPos] = useState<number>(50);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    const percent = Math.round((x / rect.width) * 100);
    setSliderPos(percent);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const touch = e.touches[0];
    const x = Math.max(0, Math.min(touch.clientX - rect.left, rect.width));
    const percent = Math.round((x / rect.width) * 100);
    setSliderPos(percent);
  };

  return (
    <section className="py-20 md:py-28 bg-white border-t border-stone-200 text-stone-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="font-cinzel text-2xl sm:text-3xl lg:text-4xl font-bold tracking-widest text-stone-900 uppercase mb-4">
            BEFORE AND AFTER
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed max-w-2xl mx-auto">
            Witness the transformation from a blank canvas to a serene sanctuary with A.F.G Marble and Arts India. Our skilled artisans turn raw spaces into exquisite pooja rooms, reflecting spirituality and elegance. See the remarkable difference quality and craftsmanship can make.
          </p>
        </div>

        {/* Interactive Comparison Slider Container (Matches Screenshot 10) */}
        <div className="max-w-4xl mx-auto">
          <div
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            className="relative h-[360px] sm:h-[480px] rounded-2xl overflow-hidden border border-stone-300 shadow-2xl select-none cursor-ew-resize group bg-stone-950"
          >
            {/* Background Layer: Fully Finished Sanctum */}
            <div className="absolute inset-0">
              <StoneImage
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
                alt="Polished White Marble Temple"
                aspectRatioClass="h-full w-full"
                fallbackTitle="Finished Sanctum"
                fallbackSubtitle="Water-Honed Makrana Marble with 24K Leafing"
              />
              <div className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-stone-300 text-xs font-semibold text-stone-900 shadow-sm">
                Finished Sanctum (720 Hours)
              </div>
            </div>

            {/* Foreground Layer: Clipped Rough Carving Stage */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${sliderPos}%` }}
            >
              <div className="absolute inset-0 w-[896px] max-w-none">
                <StoneImage
                  src="https://images.unsplash.com/photo-1590725140246-20acdee442be?auto=format&fit=crop&w=1200&q=80"
                  alt="Raw Chiseled Marble Block"
                  aspectRatioClass="h-full w-full"
                  className="filter grayscale contrast-125"
                  fallbackTitle="Raw Quarry Stone"
                  fallbackSubtitle="Rough Chiseled Monolithic Calcite Block"
                />
              </div>
              <div className="absolute top-4 left-4 z-10 bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-stone-700 text-xs font-semibold text-white shadow-sm">
                Raw Chiseled Block (Stage 01)
              </div>
            </div>

            {/* Divider Handle Bar */}
            <div
              className="absolute top-0 bottom-0 w-0.5 bg-[#b8860b] shadow-[0_0_12px_#b8860b] z-20 pointer-events-none"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-white border-2 border-[#b8860b] flex items-center justify-center text-[#b8860b] shadow-xl">
                <MoveHorizontal className="w-4 h-4" />
              </div>
            </div>

            {/* Bottom Slider Prompt */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full border border-stone-300 text-[11px] text-stone-800 font-medium pointer-events-none shadow-sm flex items-center gap-1.5">
              <span>Drag or hover across to compare stages</span>
            </div>
          </div>

          {/* Qualitative Comparison Footnotes in Light Theme */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
            <div className="p-5 rounded-xl border border-stone-200 bg-[#FAF8F5] shadow-xs">
              <h4 className="text-sm font-semibold text-stone-900 mb-1">
                The Raw Monolith: Calcite Crystal Purity
              </h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                Extracted with precision diamond wire from deep Makrana subterranean quarry veins. Each block is checked for acoustic resonance to ensure zero concealed fissures before carving begins.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-[#E8E1D5] bg-[#FAF8F5] shadow-xs">
              <h4 className="text-sm font-semibold text-[#996515] mb-1">
                The Consecrated Sanctum: 7-Stage Water Honing
              </h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                Polished entirely with natural river stones, silicon carbide emery, and clean water. Zero toxic chemical coatings or artificial resins, ensuring the sacred stone breathes for centuries.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

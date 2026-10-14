import React from 'react';
import { StoneImage } from './StoneImage';
import { Compass, Sparkles } from 'lucide-react';

interface VirtualTourSectionProps {
  onOpenVirtualTour: () => void;
}

export const VirtualTourSection: React.FC<VirtualTourSectionProps> = ({
  onOpenVirtualTour
}) => {
  return (
    <section className="bg-[#FAF8F5] text-stone-900 py-16 sm:py-20 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Text & Features (Matches Screenshot 5) */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="font-cinzel text-xl sm:text-2xl font-bold tracking-widest text-stone-900 uppercase block mb-4">
                EXPERIENCE THE FUTURE WITH AFG
              </span>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                At A.F.G Marble and Arts (AFG), we blend technology, spirituality, and aesthetics, forming the core of our values. For the first time in the industry, we offer an immersive virtual tour of our Pooja Rooms, allowing you to explore our bespoke designs and craftsmanship from the comfort of your home.
              </p>
            </div>

            {/* Bullet points */}
            <ul className="space-y-3 text-xs sm:text-sm text-stone-700">
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-stone-900 mt-2 shrink-0" />
                <span>View custom designs and layouts.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-stone-900 mt-2 shrink-0" />
                <span>Experience our quality craftsmanship and materials.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-stone-900 mt-2 shrink-0" />
                <span>Visualize how AFG can elevate your space.</span>
              </li>
            </ul>

            {/* Start The Virtual Tour Button (Black button from Screenshot 5) */}
            <div className="pt-2">
              <button
                onClick={onOpenVirtualTour}
                className="px-6 py-3 bg-black hover:bg-stone-800 text-white font-medium text-xs sm:text-sm rounded transition-all cursor-pointer shadow-md hover:shadow-lg flex items-center gap-2"
              >
                <Compass className="w-4 h-4 text-[#e5c365]" />
                <span>Start The Virtual Tour</span>
              </button>
            </div>
          </div>

          {/* Right Column: High Quality Room Rendering Visual */}
          <div className="lg:col-span-7">
            <div
              onClick={onOpenVirtualTour}
              className="relative rounded-2xl overflow-hidden shadow-2xl border border-stone-200 cursor-pointer group aspect-[16/10]"
            >
              <StoneImage
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80"
                alt="AFG Virtual 3D Pooja Room Sanctuary"
                aspectRatioClass="h-full w-full"
                className="group-hover:scale-105 transition-transform duration-700"
                fallbackTitle="3D Architectural Sanctuary"
                fallbackSubtitle="Click to launch 360 Virtual Tour"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                <div className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-xs font-semibold text-stone-900 shadow-xl flex items-center gap-2 group-hover:scale-105 transition-transform">
                  <Sparkles className="w-4 h-4 text-[#b8860b]" />
                  <span>Click to Explore 360° View</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

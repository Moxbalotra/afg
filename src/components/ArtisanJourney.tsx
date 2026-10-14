import React, { useState } from 'react';
import { ARTISAN_STEPS } from '../data/stoneArtData';
import { Gem, Compass, Hammer, Sparkles, Truck, ChevronRight } from 'lucide-react';

interface ArtisanJourneyProps {
  onOpenConsultation: () => void;
}

const STEP_ICONS = [Gem, Compass, Hammer, Sparkles, Truck];

export const ArtisanJourney: React.FC<ArtisanJourneyProps> = ({ onOpenConsultation }) => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  return (
    <section id="artisan" className="py-20 md:py-28 bg-[#0a0c0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#e5c365] tracking-widest uppercase mb-2">
            <Hammer className="w-3.5 h-3.5" />
            <span>Living Shilpkar Heritage</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold text-[#faf8f5] mb-4">
            The 5 Stages of Sacred Creation
          </h2>
          <p className="text-sm sm:text-base text-stone-300">
            Unlike mass-produced synthetic composites, a genuine Tilak Stone Arts mandir is chiseled by hand in Jaipur over several months. Learn how raw earth transforms into a living sanctuary.
          </p>
        </div>

        {/* Step Selector Horizontal Timeline */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-10">
          {ARTISAN_STEPS.map((step, idx) => {
            const Icon = STEP_ICONS[idx];
            return (
              <button
                key={step.step}
                onClick={() => setActiveStepIndex(idx)}
                className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                  activeStepIndex === idx
                    ? 'border-[#d4af37] bg-[#d4af37]/15 text-white shadow-lg'
                    : 'border-stone-850 hover:border-stone-700 bg-stone-900/40 text-stone-400'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-xs text-[#d4af37] font-semibold">{step.step}</span>
                  <Icon className="w-4 h-4 text-[#d4af37]" />
                </div>
                <div className="text-xs font-bold text-stone-200 line-clamp-1">{step.title}</div>
                <div className="text-[11px] text-stone-500 line-clamp-1">{step.subtitle}</div>
              </button>
            );
          })}
        </div>

        {/* Active Stage Detailed Spotlight */}
        <div className="border border-stone-800 bg-stone-900/60 rounded-2xl p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 text-xs text-[#d4af37] font-mono mb-2">
                <span>STAGE {ARTISAN_STEPS[activeStepIndex].step} OF 05</span>
                <span aria-hidden="true">·</span>
                <span>JAIPUR ATELIER PROTOCOL</span>
              </div>

              <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-white mb-2">
                {ARTISAN_STEPS[activeStepIndex].title}
              </h3>
              <p className="text-xs text-[#e5c365] font-semibold uppercase tracking-wider mb-4">
                {ARTISAN_STEPS[activeStepIndex].subtitle}
              </p>

              <p className="text-sm sm:text-base text-stone-300 leading-relaxed mb-6">
                {ARTISAN_STEPS[activeStepIndex].description}
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={() => setActiveStepIndex((activeStepIndex + 1) % ARTISAN_STEPS.length)}
                  className="px-4 py-2.5 text-xs font-semibold text-stone-200 hover:text-white bg-stone-800 hover:bg-stone-700 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Next Craft Stage</span>
                  <ChevronRight className="w-4 h-4" />
                </button>

                <button
                  onClick={onOpenConsultation}
                  className="px-4 py-2.5 text-xs font-semibold text-[#0a0c0f] bg-[#d4af37] hover:bg-[#e5c365] rounded-lg transition-colors cursor-pointer"
                >
                  Schedule Studio Consultation
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 bg-stone-950/80 border border-stone-850 rounded-xl p-6 text-xs text-stone-300 space-y-4">
              <h4 className="font-cinzel text-sm font-bold text-[#faf8f5]">
                Why Hereditary Hand Craftsmanship Matters
              </h4>
              <p className="text-stone-400 leading-relaxed">
                "Machines can duplicate geometry, but only a human Shilpkar’s breathing touch can instill emotional devotion into stone. When our artisans chisel deity eyes, it is a spiritual ceremony performed under auspicious constellations."
              </p>
              <div className="pt-3 border-t border-stone-850 text-[11px] text-[#e5c365] font-medium">
                — Tilak Stone Arts Shilpkar Guild, Jaipur
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

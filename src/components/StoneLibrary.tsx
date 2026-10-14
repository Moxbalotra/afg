import React, { useState } from 'react';
import { STONE_MATERIALS } from '../data/stoneArtData';
import { Gem, MapPin, Sparkles, ShieldCheck } from 'lucide-react';

export const StoneLibrary: React.FC = () => {
  const [selectedStoneId, setSelectedStoneId] = useState(STONE_MATERIALS[0].id);
  const currentStone = STONE_MATERIALS.find((s) => s.id === selectedStoneId) || STONE_MATERIALS[0];

  return (
    <section id="materials" className="py-20 md:py-28 bg-[#FAF8F5] border-t border-[#EAE3D6] text-stone-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-[#996515] tracking-widest uppercase mb-2 font-cinzel">
            <Gem className="w-3.5 h-3.5" />
            <span>Sacred Provenance</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-950 mb-4">
            Master Stone Materials Guide
          </h2>
          <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
            Every block of stone carries distinct geological crystallization, thermal resilience, and spiritual resonance. Explore the natural stones sculpted in our atelier.
          </p>
        </div>

        {/* Stone Selector Tabs (Light Theme) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-10">
          {STONE_MATERIALS.map((stone) => (
            <button
              key={stone.id}
              onClick={() => setSelectedStoneId(stone.id)}
              className={`p-4 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between shadow-xs ${
                selectedStoneId === stone.id
                  ? 'border-[#b8860b] bg-[#FAF3E5] ring-1 ring-[#b8860b]'
                  : 'border-[#E8E1D5] bg-white text-stone-700 hover:border-stone-400'
              }`}
            >
              <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${stone.textureSample} border border-stone-300 mb-3 shadow-inner`} />
              <div>
                <span className="block text-xs font-bold text-stone-900 line-clamp-1">{stone.name}</span>
                <span className="block text-[11px] text-stone-500 line-clamp-1">{stone.origin.split(',')[0]}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Selected Stone Deep Exploration Card (Light Theme) */}
        <div className="border border-[#E8E1D5] bg-white rounded-2xl p-6 sm:p-10 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Visual Texture Specimen */}
            <div className="lg:col-span-5">
              <div className={`aspect-square rounded-2xl bg-gradient-to-br ${currentStone.textureSample} border border-stone-300 p-6 flex flex-col justify-between shadow-md relative overflow-hidden`}>
                <div className="flex items-center justify-between text-xs text-stone-900 font-semibold bg-white/85 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white shadow-xs">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#b8860b]" />
                    {currentStone.origin}
                  </span>
                  <span className="font-mono text-[10px] text-[#996515]">VERIFIED QUARRY</span>
                </div>

                <div className="bg-white/95 backdrop-blur-md p-4 rounded-xl border border-stone-200 text-stone-900 shadow-md">
                  <span className="text-[11px] text-[#996515] font-semibold uppercase tracking-wider block mb-0.5">
                    Recommended For
                  </span>
                  <span className="text-xs font-medium">{currentStone.idealFor}</span>
                </div>
              </div>
            </div>

            {/* Geological & Architectural Traits */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="flex items-center gap-2 text-xs text-[#996515] font-mono mb-1 font-semibold">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>AUTHENTIC QUARRY CERTIFICATION</span>
                </div>
                <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-stone-900 mb-2">
                  {currentStone.name}
                </h3>
                <p className="text-sm text-stone-600 leading-relaxed">
                  {currentStone.description}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-stone-200 text-xs">
                <div className="p-3.5 rounded-xl bg-[#FAF8F5] border border-[#E8E1D5]">
                  <span className="block text-stone-500 text-[11px] mb-1">Purity & Tone</span>
                  <span className="font-semibold text-stone-900">{currentStone.colorGrade}</span>
                </div>

                <div className="p-3.5 rounded-xl bg-[#FAF8F5] border border-[#E8E1D5]">
                  <span className="block text-stone-500 text-[11px] mb-1">Light Translucency</span>
                  <span className="font-semibold text-[#996515]">{currentStone.translucency}</span>
                </div>

                <div className="p-3.5 rounded-xl bg-[#FAF8F5] border border-[#E8E1D5]">
                  <span className="block text-stone-500 text-[11px] mb-1">Heritage Longevity</span>
                  <span className="font-semibold text-stone-900">{currentStone.durability}</span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs text-stone-600">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>100% natural quarried stone directly from Makrana mines, zero artificial composite powder</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

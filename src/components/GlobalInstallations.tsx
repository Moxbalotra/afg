import React, { useState } from 'react';
import { INSTALLATIONS, TESTIMONIALS } from '../data/stoneArtData';
import { StoneImage } from './StoneImage';
import { Globe, MapPin, Building, Star, Quote } from 'lucide-react';

export const GlobalInstallations: React.FC = () => {
  const [activeInstId, setActiveInstId] = useState(INSTALLATIONS[0].id);
  const currentInst = INSTALLATIONS.find((i) => i.id === activeInstId) || INSTALLATIONS[0];

  return (
    <section id="installations" className="py-20 md:py-28 bg-[#0a0c0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#e5c365] tracking-widest uppercase mb-2">
            <Globe className="w-3.5 h-3.5" />
            <span>International White-Glove Reach</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold text-[#faf8f5] mb-4">
            Global Temple Installations
          </h2>
          <p className="text-sm sm:text-base text-stone-300">
            From Beverly Hills estates to Dubai royal penthouses and heritage London townhomes, 
            our specialized team handles marine freight clearance, surgical crating, and on-site stone assembly worldwide.
          </p>
        </div>

        {/* Global Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 items-stretch">
          {/* Left Column: Project Selector List */}
          <div className="lg:col-span-5 space-y-3">
            {INSTALLATIONS.map((inst) => (
              <button
                key={inst.id}
                onClick={() => setActiveInstId(inst.id)}
                className={`w-full p-4 rounded-xl border text-left transition-all cursor-pointer ${
                  activeInstId === inst.id
                    ? 'border-[#d4af37] bg-[#d4af37]/15 text-white shadow-lg'
                    : 'border-stone-850 hover:border-stone-700 bg-stone-900/40 text-stone-400'
                }`}
              >
                <div className="flex items-center justify-between text-xs mb-1">
                  <span className="font-semibold text-stone-200 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#d4af37]" />
                    {inst.location}
                  </span>
                  <span className="font-mono text-stone-500 tabular-nums">{inst.year}</span>
                </div>
                <h4 className="font-cinzel text-sm font-bold text-white mb-1">
                  {inst.title}
                </h4>
                <div className="text-[11px] text-stone-400">
                  {inst.dimensions} · {inst.material.split('&')[0]}
                </div>
              </button>
            ))}
          </div>

          {/* Right Column: Active Installation Showcase Card */}
          <div className="lg:col-span-7 bg-stone-900/70 border border-stone-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col justify-between">
            <div className="relative aspect-[16/9] overflow-hidden">
              <StoneImage
                src={currentInst.image}
                alt={currentInst.title}
                aspectRatioClass="h-full w-full"
                fallbackTitle={currentInst.title}
                fallbackSubtitle={currentInst.location}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-transparent to-transparent opacity-80" />
              <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-stone-700 text-xs font-semibold text-[#e5c365]">
                {currentInst.country}
              </div>
            </div>

            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-white mb-2">
                  {currentInst.title}
                </h3>
                <p className="text-xs sm:text-sm text-stone-300 leading-relaxed mb-6">
                  {currentInst.story}
                </p>
              </div>

              <div className="pt-4 border-t border-stone-800 flex flex-wrap items-center justify-between gap-3 text-xs text-stone-400">
                <span className="flex items-center gap-1.5">
                  <Building className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span>Architecture: {currentInst.architect}</span>
                </span>
                <span className="text-stone-300 font-mono">
                  {currentInst.dimensions}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Claim-to-Proof Adjacency: Attributable Client Testimonials */}
        <div className="border-t border-stone-850 pt-16">
          <div className="text-center max-w-xl mx-auto mb-10">
            <h3 className="font-cinzel text-2xl font-bold text-white mb-2">
              Patrons & Global Families
            </h3>
            <p className="text-xs text-stone-400">
              Verified experiences from clients across the United States, United Kingdom, and India.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                className="bg-stone-900/40 border border-stone-850 rounded-xl p-6 flex flex-col justify-between shadow-md"
              >
                <div>
                  <div className="flex items-center gap-1 text-[#d4af37] mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-stone-700 mb-2" />
                  <p className="text-xs text-stone-300 leading-relaxed italic mb-6">
                    "{t.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-850 text-xs">
                  <div className="font-semibold text-white">{t.clientName}</div>
                  <div className="text-stone-400 text-[11px]">{t.residence}</div>
                  <div className="text-[#e5c365] text-[10px] mt-1 font-mono">{t.projectType}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

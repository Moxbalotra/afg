import React, { useState } from 'react';
import { StoneImage } from './StoneImage';
import { Play, Pause, Volume2, VolumeX, ArrowRight, Compass, ShieldCheck, MapPin } from 'lucide-react';

interface HeroProps {
  onOpenConsultation: () => void;
  onExploreGallery: () => void;
  onOpenStudio: () => void;
  onOpenVirtualTour: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenConsultation,
  onExploreGallery,
  onOpenStudio,
  onOpenVirtualTour
}) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const [isVideoMuted, setIsVideoMuted] = useState(true);

  return (
    <section className="relative overflow-hidden bg-[#FAF8F5] text-stone-900 border-b border-[#EAE3D6]">
      {/* Cinematic Main Atelier Showcase Frame */}
      <div className="relative min-h-[520px] sm:min-h-[620px] lg:min-h-[700px] flex items-center justify-center">
        {/* Background Showcase Visual */}
        <div className="absolute inset-0">
          <StoneImage
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85"
            alt="A.F.G Marble and Arts Showroom Atelier"
            aspectRatioClass="h-full w-full"
            fallbackTitle="A.F.G Marble and Arts"
            fallbackSubtitle="Makrana & Jaipur Experience Center"
          />
          {/* Light Theme Warm Ivory Scrim Gradient for Pristine Readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#FAF8F5] via-[#FAF8F5]/85 to-[#FAF8F5]/70" />
        </div>

        {/* Center Video Control Badges (Matches Screenshot 3) */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="flex items-center gap-4 pointer-events-auto">
            <button
              onClick={() => setIsVideoPlaying(!isVideoPlaying)}
              className="w-14 h-14 rounded-full bg-white/90 hover:bg-white backdrop-blur-md border border-stone-300 flex items-center justify-center text-stone-900 transition-transform hover:scale-110 cursor-pointer shadow-xl"
              aria-label={isVideoPlaying ? 'Pause video tour' : 'Play video tour'}
            >
              {isVideoPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
            </button>
            <button
              onClick={() => setIsVideoMuted(!isVideoMuted)}
              className="w-14 h-14 rounded-full bg-white/90 hover:bg-white backdrop-blur-md border border-stone-300 flex items-center justify-center text-stone-900 transition-transform hover:scale-110 cursor-pointer shadow-xl"
              aria-label={isVideoMuted ? 'Unmute video audio' : 'Mute video audio'}
            >
              {isVideoMuted ? <VolumeX className="w-5 h-5 text-stone-500" /> : <Volume2 className="w-5 h-5 text-[#b8860b]" />}
            </button>
          </div>
        </div>

        {/* Hero Copy Overlay (Matches Screenshot 1 & 3 in Light Theme) */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-16">
          <span className="text-xs sm:text-sm font-semibold tracking-widest text-[#996515] uppercase block mb-3 font-cinzel">
            Your Ultimate Pooja Room Destination
          </span>

          <h1 className="font-cinzel text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-stone-950 tracking-wide leading-tight mb-3 text-balance">
            YOUR SPIRITUAL CONNECTION, MADE SIMPLE
          </h1>

          <p className="font-cinzel text-base sm:text-xl text-[#996515] tracking-widest uppercase mb-6 font-semibold">
            — A.F.G MARBLE AND ARTS —
          </p>

          <p className="text-sm sm:text-base text-stone-700 max-w-2xl mx-auto mb-10 leading-relaxed">
            Monolithic pure Makrana marble temples, bespoke backlit pooja rooms, and sacred consecrated idols chiseled by hereditary master artisans in Makrana & Jaipur.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onOpenStudio}
              className="px-6 py-3.5 text-xs sm:text-sm font-semibold text-white bg-[#b8860b] hover:bg-[#a67c38] rounded-lg shadow-md transition-all cursor-pointer flex items-center gap-2"
            >
              <Compass className="w-4 h-4 text-white" />
              <span>Configure Custom Mandir</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onOpenVirtualTour}
              className="px-6 py-3.5 text-xs sm:text-sm font-medium text-stone-900 hover:text-[#b8860b] bg-white hover:bg-stone-50 border border-stone-300 rounded-lg shadow-sm transition-all cursor-pointer flex items-center gap-2"
            >
              <span>Start 360 Virtual Tour</span>
            </button>

            <button
              onClick={onExploreGallery}
              className="px-6 py-3.5 text-xs sm:text-sm font-medium text-stone-700 hover:text-stone-950 bg-[#F4EFE6] hover:bg-[#EDE5D8] border border-[#E5DDD0] rounded-lg transition-all cursor-pointer"
            >
              <span>Explore Creations</span>
            </button>
          </div>

          {/* Heritage Provenance Marker */}
          <div className="mt-12 inline-flex items-center gap-2 text-xs text-stone-700 bg-white/95 backdrop-blur-md px-4 py-2 rounded-full border border-[#E8E1D5] shadow-xs">
            <MapPin className="w-3.5 h-3.5 text-[#b8860b]" />
            <span>Direct from AFG Marble Mines, Makrana & Experience Center, Jaipur</span>
            <span aria-hidden="true" className="text-stone-300">·</span>
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span className="font-medium text-stone-900">100% Original Makrana Marble</span>
          </div>
        </div>
      </div>
    </section>
  );
};

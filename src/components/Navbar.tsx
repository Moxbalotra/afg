import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Menu, X, ArrowUpRight, ShoppingBag, MessageSquare } from 'lucide-react';
import { sanctumAudio } from '../utils/audioAmbiance';

interface NavbarProps {
  onOpenConsultation: () => void;
  onNavigateToSection: (sectionId: string) => void;
  onOpenShop: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenConsultation,
  onNavigateToSection,
  onOpenShop
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAudioToggle = () => {
    const playing = sanctumAudio.toggle();
    setIsAudioPlaying(playing);
  };

  const navLinksLeft = [
    { label: 'HOUSE OF AFG', id: 'about' },
    { label: 'PROJECTS', id: 'projects' },
    { label: 'OUR CREATIONS', id: 'gallery' },
    { label: 'OUR SERVICES', id: 'services' }
  ];

  const navLinksRight = [
    { label: 'HOW IT WORKS', id: 'experience' },
    { label: 'BUDGETS', id: 'budgets' },
    { label: 'GUIDES', id: 'guides' },
    { label: 'TESTIMONIALS', id: 'testimonials' }
  ];

  const handleNavClick = (id: string) => {
    setIsMobileMenuOpen(false);
    onNavigateToSection(id);
  };

  return (
    <>
      {/* Top Announcement Ticker Bar (Exact style from screenshot 1) */}
      <div className="bg-[#b8860b] text-white py-1.5 px-4 text-[11px] sm:text-xs font-semibold tracking-wider uppercase text-center overflow-hidden border-b border-[#996515] relative z-50 shadow-xs">
        <div className="flex items-center justify-center gap-4 sm:gap-8 whitespace-nowrap overflow-x-auto scrollbar-none">
          <span>100% CUSTOM MADE FOR YOUR DREAM HOME</span>
          <span aria-hidden="true" className="opacity-70">•</span>
          <span>SHIPPING INTERNATIONALLY</span>
          <span aria-hidden="true" className="opacity-70">•</span>
          <span>CHOSEN BY INDIA'S TOP 1%</span>
          <span aria-hidden="true" className="opacity-70">•</span>
          <span>ONLY LIMITED PROJECTS ANNUALLY</span>
        </div>
      </div>

      {/* Main Luxury Navigation Bar (Light Theme) */}
      <header
        className={`sticky top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF8F5]/98 backdrop-blur-md border-b border-[#E8E1D5] py-3 shadow-md'
            : 'bg-[#FAF8F5]/90 backdrop-blur-sm border-b border-[#EAE3D6] py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* Left Nav Links (Desktop) */}
            <nav className="hidden xl:flex items-center gap-6 text-xs font-semibold tracking-widest text-stone-700">
              {navLinksLeft.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="hover:text-[#b8860b] transition-colors cursor-pointer uppercase py-1 relative group whitespace-nowrap"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#b8860b] transition-all duration-300 group-hover:w-full" />
                </button>
              ))}
            </nav>

            {/* Center Brand Emblem & Logo */}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center gap-2.5 text-center group cursor-pointer"
            >
              <div className="w-9 h-9 rounded-full border border-[#b8860b] bg-gradient-to-br from-[#d4af37] via-[#b8860b] to-[#8a6508] p-0.5 flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform shrink-0">
                <div className="w-full h-full rounded-full bg-[#FAF8F5] flex items-center justify-center text-[#b8860b]">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2L15 9H22L16.5 13.5L18.5 20.5L12 16L5.5 20.5L7.5 13.5L2 9H9L12 2Z" />
                  </svg>
                </div>
              </div>
              <div className="text-left">
                <span className="font-cinzel text-base sm:text-lg font-bold tracking-widest text-stone-900 block group-hover:text-[#b8860b] transition-colors whitespace-nowrap">
                  A.F.G MARBLE AND ARTS
                </span>
                <span className="text-[9px] font-mono tracking-widest text-[#996515] uppercase block -mt-0.5 font-semibold">
                  MAKRANA & JAIPUR ATELIER
                </span>
              </div>
            </a>

            {/* Right Nav Links (Desktop) */}
            <nav className="hidden xl:flex items-center gap-6 text-xs font-semibold tracking-widest text-stone-700">
              {navLinksRight.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="hover:text-[#b8860b] transition-colors cursor-pointer uppercase py-1 relative group whitespace-nowrap"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#b8860b] transition-all duration-300 group-hover:w-full" />
                </button>
              ))}
              <div className="flex items-center gap-1.5">
                <span className="text-stone-700 hover:text-[#b8860b] cursor-pointer">CAREERS</span>
                <span className="bg-[#8b261e] text-white text-[9px] px-1 py-0.5 rounded font-normal lowercase">hiring</span>
              </div>
            </nav>

            {/* Action Buttons & Mobile Hamburger */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Sacred Ambiance Sound Toggle */}
              <button
                onClick={handleAudioToggle}
                title={isAudioPlaying ? 'Mute sacred sanctum ambiance' : 'Play sacred temple bell ambiance'}
                className={`p-2 rounded-lg border transition-all cursor-pointer flex items-center gap-1 text-xs ${
                  isAudioPlaying
                    ? 'border-[#b8860b] text-[#996515] bg-[#b8860b]/15'
                    : 'border-stone-300 text-stone-600 hover:text-stone-900 bg-white hover:border-stone-400'
                }`}
              >
                {isAudioPlaying ? (
                  <Volume2 className="w-4 h-4 animate-pulse text-[#b8860b]" />
                ) : (
                  <VolumeX className="w-4 h-4" />
                )}
                <span className="hidden md:inline text-[10px] font-medium">Sanctum</span>
              </button>

              {/* Consultation CTA */}
              <button
                onClick={onOpenConsultation}
                className="px-3.5 sm:px-4 py-2 text-xs font-semibold text-white bg-[#b8860b] hover:bg-[#a67c38] rounded-lg shadow-sm transition-all cursor-pointer whitespace-nowrap flex items-center gap-1"
              >
                <span>Design Mandir</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="xl:hidden p-2 text-stone-700 hover:text-stone-900 rounded-lg border border-stone-300 bg-white cursor-pointer"
                aria-label="Toggle navigation menu"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="xl:hidden bg-[#FAF8F5] border-b border-[#E8E1D5] px-6 py-6 space-y-4 shadow-xl animate-in slide-in-from-top duration-200">
            <nav className="flex flex-col space-y-2.5">
              {[...navLinksLeft, ...navLinksRight].map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="text-left text-xs font-semibold tracking-widest text-stone-800 hover:text-[#b8860b] py-2 border-b border-[#EFE8DD] uppercase"
                >
                  {item.label}
                </button>
              ))}
            </nav>
            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenShop();
                }}
                className="w-full py-2.5 text-xs font-semibold text-stone-800 border border-stone-300 bg-white rounded-lg shadow-xs"
              >
                View Collection Catalog
              </button>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full py-3 text-xs font-semibold text-white bg-[#b8860b] hover:bg-[#a67c38] rounded-lg shadow-xs"
              >
                Request Custom Mandir Consultation
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Floating Vertical Side Buttons (Matches Screenshot 1 & 4) */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-2 pointer-events-auto">
        {/* SHOP Button */}
        <button
          onClick={onOpenShop}
          className="bg-white text-stone-900 hover:bg-stone-50 font-bold text-[10px] sm:text-xs tracking-widest py-3 px-1.5 rounded-l-md shadow-xl border-l-2 border-y border-stone-300 [writing-mode:vertical-lr] rotate-180 cursor-pointer transition-transform hover:-translate-x-1 flex items-center justify-center gap-1.5"
          title="Browse Mandir Shop"
        >
          <ShoppingBag className="w-3.5 h-3.5 rotate-90 text-[#b8860b]" />
          <span>SHOP</span>
        </button>

        {/* CONTACT US Button */}
        <button
          onClick={onOpenConsultation}
          className="bg-[#b8860b] hover:bg-[#a67c38] text-white font-bold text-[10px] sm:text-xs tracking-widest py-4 px-1.5 rounded-l-md shadow-xl border-l-2 border-y border-[#996515] [writing-mode:vertical-lr] rotate-180 cursor-pointer transition-transform hover:-translate-x-1 flex items-center justify-center gap-1.5"
          title="Contact Atelier Team"
        >
          <MessageSquare className="w-3.5 h-3.5 rotate-90" />
          <span>CONTACT US</span>
        </button>
      </div>
    </>
  );
};

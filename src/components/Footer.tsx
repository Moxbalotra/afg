import React from 'react';
import { Phone, Mail, ArrowUp } from 'lucide-react';

interface FooterProps {
  onOpenConsultation: () => void;
  onNavigateToSection: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenConsultation,
  onNavigateToSection
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const citiesIndia = [
    'Marble Temple in Mumbai',
    'Marble Temple in Delhi',
    'Marble Temple in Bengaluru',
    'Marble Temple in Hyderabad',
    'Marble Temple in Ahmedabad',
    'Marble Temple in Surat',
    'Marble Temple in Kolkata',
    'Marble Temple in Jaipur',
    'Marble Temple in Pune'
  ];

  const countriesGlobe = [
    'Marble Temple in Dubai',
    'Marble Temple in USA',
    'Marble Temple in Australia',
    'Marble Temple in Tanzania',
    'Marble Temple in UK'
  ];

  return (
    <footer className="bg-black text-white text-xs border-t border-stone-850">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-14">
          {/* Brand Emblem & Atelier Address (Matches Screenshot 16) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full border border-[#d4af37] bg-gradient-to-br from-[#d4af37] to-[#8a6508] p-0.5 flex items-center justify-center shadow-lg">
                <div className="w-full h-full rounded-full bg-black flex items-center justify-center text-[#d4af37]">
                  <span className="font-cinzel text-xs font-bold">AFG</span>
                </div>
              </div>
              <div>
                <span className="font-cinzel text-base font-bold tracking-widest text-[#faf8f5] block">
                  A.F.G MARBLE AND ARTS
                </span>
                <span className="text-[10px] text-[#d4af37] tracking-wider uppercase block">
                  Makrana Mines & Atelier Rajasthan
                </span>
              </div>
            </div>

            <div className="space-y-2 text-stone-300 text-xs pr-4">
              <p>
                <strong>Address:</strong> First & Second Floor, AFG India, Makrana & Jaipur Experience Center, Mirza Ismail Road, Rajasthan 302001, India.
              </p>
              <div className="flex items-center gap-2 pt-1">
                <Phone className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>Call : +91 93193 74633 / +91 98290 00000</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>Email : sales@afgmarblearts.com</span>
              </div>
            </div>
          </div>

          {/* HOUSE OF AFG (Screenshot 16) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-cinzel text-xs font-bold text-white tracking-widest uppercase">
              HOUSE OF AFG
            </h4>
            <ul className="space-y-2 text-stone-400">
              <li><button onClick={() => onNavigateToSection('experience')} className="hover:text-white cursor-pointer">About Us</button></li>
              <li><button onClick={() => onNavigateToSection('about')} className="hover:text-white cursor-pointer">Experience Centre</button></li>
              <li><span className="hover:text-white cursor-pointer">The Team</span></li>
              <li><span className="hover:text-white cursor-pointer">Collaborations</span></li>
              <li><button onClick={() => onNavigateToSection('projects')} className="hover:text-white cursor-pointer">Our Clients</button></li>
              <li><span className="hover:text-white cursor-pointer">Careers</span></li>
              <li><button onClick={() => onNavigateToSection('gallery')} className="hover:text-white cursor-pointer">Shop</button></li>
            </ul>
          </div>

          {/* QUICK LINKS (Screenshot 16) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-cinzel text-xs font-bold text-white tracking-widest uppercase">
              QUICK LINKS
            </h4>
            <ul className="space-y-2 text-stone-400">
              <li><button onClick={() => onNavigateToSection('experience')} className="hover:text-white cursor-pointer">How it Works</button></li>
              <li><button onClick={() => onNavigateToSection('budgets')} className="hover:text-white cursor-pointer">Pooja Room</button></li>
              <li><button onClick={() => onNavigateToSection('budgets')} className="hover:text-white cursor-pointer">Dream Temples</button></li>
              <li><button onClick={() => onNavigateToSection('projects')} className="hover:text-white cursor-pointer">Communal Temples</button></li>
              <li><span className="hover:text-white cursor-pointer">AFG International</span></li>
              <li><span className="hover:text-white cursor-pointer">International Delivery</span></li>
            </ul>
          </div>

          {/* LEGAL (Screenshot 16) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-cinzel text-xs font-bold text-white tracking-widest uppercase">
              LEGAL
            </h4>
            <ul className="space-y-2 text-stone-400">
              <li><span className="hover:text-white cursor-pointer">Corporate Info</span></li>
              <li><span className="hover:text-white cursor-pointer">Terms & Conditions</span></li>
              <li><span className="hover:text-white cursor-pointer">Privacy Policy</span></li>
              <li><span className="hover:text-white cursor-pointer">Cookies Policy</span></li>
              <li><span className="hover:text-white cursor-pointer">Disclaimer</span></li>
            </ul>
          </div>

          {/* NEED HELP (Screenshot 16) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-cinzel text-xs font-bold text-white tracking-widest uppercase">
              NEED HELP
            </h4>
            <ul className="space-y-2 text-stone-400">
              <li><span className="hover:text-white cursor-pointer">FAQs</span></li>
              <li><span className="hover:text-white cursor-pointer">Stores</span></li>
              <li><span className="hover:text-white cursor-pointer">Call Us</span></li>
              <li><button onClick={onOpenConsultation} className="hover:text-[#d4af37] cursor-pointer text-left font-medium">Contact Us</button></li>
              <li><span className="hover:text-white cursor-pointer">Email</span></li>
            </ul>
          </div>
        </div>

        {/* LOCATIONS SECTION (Exact replication from Screenshot 16) */}
        <div className="border-t border-stone-850 pt-8 pb-4 space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-white uppercase">
            <span className="text-[#d4af37]">📍</span>
            <span>LOCATIONS</span>
          </div>

          {/* Marble Temple Across India */}
          <div>
            <h5 className="font-bold text-xs text-white mb-2">
              Marble Temple Across India:
            </h5>
            <div className="flex flex-wrap gap-x-3 gap-y-1 text-[11px] text-stone-400">
              {citiesIndia.map((city, idx) => (
                <span key={city} className="flex items-center gap-3">
                  <span className="hover:text-stone-200 cursor-pointer">{city}</span>
                  {idx < citiesIndia.length - 1 && <span className="text-stone-700">|</span>}
                </span>
              ))}
            </div>
          </div>

          {/* Marble Temple Across The Globe */}
          <div>
            <h5 className="font-bold text-xs text-white mb-2">
              Marble Temple Across The Globe:
            </h5>
            <div className="flex flex-wrap gap-x-3 gap-y-1 text-[11px] text-stone-400">
              {countriesGlobe.map((globe, idx) => (
                <span key={globe} className="flex items-center gap-3">
                  <span className="hover:text-stone-200 cursor-pointer">{globe}</span>
                  {idx < countriesGlobe.length - 1 && <span className="text-stone-700">|</span>}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Strip */}
      <div className="bg-[#050608] border-t border-stone-850 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-stone-500">
          <p>
            © {new Date().getFullYear()} A.F.G Marble and Arts India. All rights reserved. Registered Partnership Firm, Makrana.
          </p>
          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg border border-stone-800 bg-stone-900 text-stone-300 hover:text-white transition-colors cursor-pointer flex items-center gap-1.5"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

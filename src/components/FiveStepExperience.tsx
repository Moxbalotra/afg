import React from 'react';
import { StoneImage } from './StoneImage';
import { Play } from 'lucide-react';

interface FiveStepExperienceProps {
  onOpenVirtualTour: () => void;
  onOpenConsultation: () => void;
}

const STEPS = [
  {
    number: '01',
    title: 'Discover',
    description: 'Share your space, your faith and your vision with a design expert.'
  },
  {
    number: '02',
    title: 'Design',
    description: 'Receive a bespoke design and 3D visual of your temple.'
  },
  {
    number: '03',
    title: 'Handcraft',
    description: 'Master artisans carve your temple in natural marble.'
  },
  {
    number: '04',
    title: 'Assemble',
    description: 'Every piece is fitted and finished to perfection in our atelier.'
  },
  {
    number: '05',
    title: 'Install & Bless',
    description: 'We deliver and install — ready for its first prayer.'
  }
];

export const FiveStepExperience: React.FC<FiveStepExperienceProps> = ({
  onOpenVirtualTour,
  onOpenConsultation
}) => {
  return (
    <section id="experience" className="bg-[#FAF8F5] text-stone-900 pt-20 pb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        {/* Section Header (Matches Screenshot 2) */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-semibold tracking-widest text-[#996515] uppercase block mb-2">
            THE AFG EXPERIENCE
          </span>
          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 mb-2">
            Your Dream Temple in Five Steps
          </h2>
        </div>

        {/* 5 White Step Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
          {STEPS.map((s) => (
            <div
              key={s.number}
              onClick={onOpenConsultation}
              className="bg-white rounded-2xl p-6 sm:p-7 shadow-sm hover:shadow-md transition-shadow border border-stone-200/60 flex flex-col justify-start cursor-pointer hover:-translate-y-1 transition-transform"
            >
              <span className="font-serif text-3xl sm:text-4xl text-[#c59b27] font-normal mb-3 block">
                {s.number}
              </span>
              <h3 className="font-semibold text-base sm:text-lg text-[#800000] mb-2">
                {s.title}
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* "WELCOME TO THE WORLD OF AFG" Section (Matches Screenshot 2 & 3) */}
      <div className="border-t border-stone-200 bg-white pt-12 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-center tracking-widest text-stone-900 uppercase mb-8">
            WELCOME TO THE WORLD OF AFG
          </h3>

          <div
            onClick={onOpenVirtualTour}
            className="relative rounded-2xl overflow-hidden shadow-xl aspect-[16/8] sm:aspect-[21/9] cursor-pointer group border border-stone-200"
          >
            <StoneImage
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80"
              alt="Welcome to the World of AFG Showroom"
              aspectRatioClass="h-full w-full"
              fallbackTitle="World of AFG"
              fallbackSubtitle="Explore our Kishangarh & Jaipur Showroom"
            />
            {/* Play Button Overlay */}
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-white/90 group-hover:bg-white text-stone-900 flex items-center justify-center shadow-2xl transition-transform group-hover:scale-110">
                <Play className="w-7 h-7 fill-current ml-1 text-[#b8860b]" />
              </div>
            </div>

            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white bg-black/60 backdrop-blur-md px-4 py-2 rounded-lg">
              <span>Rajasthan Experience Center & Makrana Mines Showcase</span>
              <span className="font-medium text-[#f3df99] underline">Click to take 360 Virtual Tour</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { PROJECTS_SHOWCASE, CLIENT_LOGOS } from '../data/stoneArtData';
import { StoneImage } from './StoneImage';
import { ProjectItem } from '../types';

interface ProjectsAndClientsProps {
  onSelectProject: (proj: ProjectItem) => void;
  onOpenConsultation: () => void;
}

export const ProjectsAndClients: React.FC<ProjectsAndClientsProps> = ({
  onSelectProject,
  onOpenConsultation
}) => {
  const [activeCategory, setActiveCategory] = useState<'communal' | 'residential' | 'international'>('residential');

  const filteredProjects = PROJECTS_SHOWCASE.filter(
    (p) => p.category === activeCategory
  );

  return (
    <section id="projects" className="bg-white text-stone-900 py-20 border-t border-stone-200">
      {/* 1. Completed Custom Projects Hero Banner (Matches Screenshot 7) */}
      <div className="relative overflow-hidden bg-stone-950 text-white py-20 mb-20">
        <div className="absolute inset-0 opacity-25">
          <StoneImage
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80"
            alt="Completed Mandir Projects"
            aspectRatioClass="h-full w-full"
            fallbackTitle="Completed Projects"
            fallbackSubtitle="Makrana & Jaipur"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/85" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-cinzel text-2xl sm:text-3xl lg:text-4xl font-bold tracking-widest text-white uppercase mb-12">
            COMPLETED CUSTOM PROJECTS
          </h2>

          <div className="grid grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="flex flex-col items-center">
              <span className="font-serif text-3xl sm:text-5xl font-light text-[#f3df99] mb-1">
                950+
              </span>
              <span className="text-xs sm:text-sm text-stone-300 tracking-wider">
                Projects
              </span>
            </div>

            <div className="flex flex-col items-center">
              <span className="font-serif text-3xl sm:text-5xl font-light text-[#f3df99] mb-1">
                350+
              </span>
              <span className="text-xs sm:text-sm text-stone-300 tracking-wider">
                Cities
              </span>
            </div>

            <div className="flex flex-col items-center">
              <span className="font-serif text-3xl sm:text-5xl font-light text-[#f3df99] mb-1">
                25+
              </span>
              <span className="text-xs sm:text-sm text-stone-300 tracking-wider">
                Years Experience
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 2. OUR CLIENTS Strip (Matches Screenshot 7) */}
        <div className="mb-24">
          <h3 className="font-cinzel text-lg sm:text-xl font-bold tracking-widest text-center text-stone-900 uppercase mb-10">
            OUR CLIENTS
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 items-center justify-center">
            {CLIENT_LOGOS.map((client) => (
              <div
                key={client.name}
                className="h-16 rounded-lg border border-stone-200 bg-stone-50 hover:bg-white transition-colors flex items-center justify-center p-3 text-center shadow-xs"
                title={client.name}
              >
                <span className="font-bold text-xs sm:text-xs text-stone-700 tracking-wider">
                  {client.code}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* 3. EXPLORE OUR PROJECTS (Matches Screenshot 7 & 8) */}
        <div>
          <h3 className="font-cinzel text-2xl sm:text-3xl font-bold tracking-widest text-center text-stone-900 uppercase mb-8">
            EXPLORE OUR PROJECTS
          </h3>

          {/* Filter Tabs: [Communal] [Residential] [International] (Screenshot 7 & 8) */}
          <div className="flex items-center justify-center gap-3 mb-12">
            {(['communal', 'residential', 'international'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 text-xs font-semibold uppercase tracking-wider rounded border transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-black text-white border-black shadow-md'
                    : 'bg-white text-stone-700 border-stone-300 hover:border-black'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Project Cards (Screenshot 8) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12">
            {filteredProjects.map((p) => (
              <div
                key={p.id}
                onClick={() => onSelectProject(p)}
                className="bg-white rounded-xl overflow-hidden border border-stone-200 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer group flex flex-col justify-between"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-stone-950">
                  <StoneImage
                    src={p.image}
                    alt={p.title}
                    aspectRatioClass="h-full w-full"
                    className="group-hover:scale-105 transition-transform duration-500"
                    fallbackTitle={p.title}
                    fallbackSubtitle={p.location}
                  />
                  <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-sm text-white text-[11px] px-2.5 py-1 rounded">
                    {p.location}
                  </div>
                </div>

                <div className="p-5">
                  <h4 className="font-medium text-sm sm:text-base text-stone-900 group-hover:text-[#b8860b] transition-colors mb-1.5">
                    {p.title}
                  </h4>
                  <p className="text-xs text-stone-600 line-clamp-2">
                    {p.details}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* "Explore all Projects" Button (Screenshot 8) */}
          <div className="text-center">
            <button
              onClick={onOpenConsultation}
              className="px-8 py-3 bg-[#a67c38] hover:bg-[#8f682d] text-white font-medium text-sm rounded shadow-md transition-all cursor-pointer hover:shadow-lg tracking-wide"
            >
              Explore all Projects
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

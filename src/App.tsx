import { useState } from 'react';
import { Product, ConfiguratorState, PoojaRoomBudget, DreamTempleBudget, ProjectItem } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FiveStepExperience } from './components/FiveStepExperience';
import { PoojaRoomsByBudget } from './components/PoojaRoomsByBudget';
import { VirtualTourSection } from './components/VirtualTourSection';
import { DreamTemplesByBudget } from './components/DreamTemplesByBudget';
import { CustomMandirStudio } from './components/CustomMandirStudio';
import { ProjectsAndClients } from './components/ProjectsAndClients';
import { GallerySection } from './components/GallerySection';
import { VideoTestimonialsSection } from './components/VideoTestimonialsSection';
import { CarvingComparison } from './components/CarvingComparison';
import { InstagramReelsSection } from './components/InstagramReelsSection';
import { AfgGuidesSection } from './components/AfgGuidesSection';
import { ExpertConsultationSection } from './components/ExpertConsultationSection';
import { GoogleReviewsSection } from './components/GoogleReviewsSection';
import { FeaturedInPress } from './components/FeaturedInPress';
import { StoneLibrary } from './components/StoneLibrary';
import { Footer } from './components/Footer';
import { MasterpieceModal } from './components/MasterpieceModal';
import { ConsultationModal } from './components/ConsultationModal';
import { VirtualTourModal } from './components/VirtualTourModal';
import { MessageCircle } from 'lucide-react';

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isConsultationOpen, setIsConsultationOpen] = useState<boolean>(false);
  const [isVirtualTourOpen, setIsVirtualTourOpen] = useState<boolean>(false);
  const [activeConfigForConsultation, setActiveConfigForConsultation] = useState<ConfiguratorState | null>(null);
  const [activeProductForConsultation, setActiveProductForConsultation] = useState<Product | null>(null);

  const handleOpenConsultation = () => {
    setActiveConfigForConsultation(null);
    setActiveProductForConsultation(null);
    setIsConsultationOpen(true);
  };

  const handleOpenConsultationWithConfig = (config: ConfiguratorState) => {
    setActiveConfigForConsultation(config);
    setActiveProductForConsultation(null);
    setIsConsultationOpen(true);
  };

  const handleInquireFromProduct = (product: Product) => {
    setActiveProductForConsultation(product);
    setActiveConfigForConsultation(null);
    setIsConsultationOpen(true);
  };

  const handleSelectPoojaRoomBudget = (item: PoojaRoomBudget) => {
    setActiveProductForConsultation({
      id: item.id,
      name: item.title,
      category: 'temples',
      categoryLabel: 'Pooja Room Budget',
      material: 'Pure Makrana White Marble',
      quarryOrigin: 'AFG Marble Mines, Makrana',
      dimensions: item.sizeSqft,
      weightApprox: 'Custom',
      artisanHours: 450,
      vastuCompliant: true,
      description: item.description,
      features: item.features,
      image: item.image,
      fallbackGradient: 'from-stone-900 to-black',
      priceGuidance: item.priceTag,
      inStockStatus: 'Custom Made to Order',
      highlights: ['Custom Budget', 'Vastu Aligned', 'Makrana Marble']
    });
    setIsConsultationOpen(true);
  };

  const handleSelectDreamTemple = (item: DreamTempleBudget) => {
    setActiveProductForConsultation({
      id: item.id,
      name: item.title,
      category: 'temples',
      categoryLabel: 'Dream Temple',
      material: 'Pure Makrana Albeta Marble',
      quarryOrigin: 'AFG Marble Mines, Makrana',
      dimensions: item.width,
      weightApprox: 'Custom',
      artisanHours: 350,
      vastuCompliant: true,
      description: item.description,
      features: ['Monolithic Pillar Bases', 'Backlit Amber Onyx Option', 'Soft-close Drawers'],
      image: item.image,
      fallbackGradient: 'from-stone-900 to-black',
      priceGuidance: item.startingPrice,
      inStockStatus: 'Custom Made to Order',
      highlights: ['Temple Width Category', 'Hand-Chiseled']
    });
    setIsConsultationOpen(true);
  };

  const handleSelectProject = (proj: ProjectItem) => {
    handleNavigateToSection('services');
  };

  const handleNavigateToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#22201D] flex flex-col font-sans selection:bg-[#b8860b] selection:text-white">
      {/* Top Ticker & Main Header with side sticky buttons */}
      <Navbar
        onOpenConsultation={handleOpenConsultation}
        onNavigateToSection={handleNavigateToSection}
        onOpenShop={() => handleNavigateToSection('gallery')}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Showcase Atelier Video Banner (Screenshot 1 & 3) */}
        <Hero
          onOpenConsultation={handleOpenConsultation}
          onExploreGallery={() => handleNavigateToSection('gallery')}
          onOpenStudio={() => handleNavigateToSection('studio')}
          onOpenVirtualTour={() => setIsVirtualTourOpen(true)}
        />

        {/* 2. "THE AFG EXPERIENCE" - "Your Dream Temple in Five Steps" (Screenshot 2) */}
        <FiveStepExperience
          onOpenVirtualTour={() => setIsVirtualTourOpen(true)}
          onOpenConsultation={handleOpenConsultation}
        />

        {/* 3. "POOJA ROOM FOR EVERY BUDGET" (Screenshot 4) */}
        <PoojaRoomsByBudget
          onSelectBudget={handleSelectPoojaRoomBudget}
          onUnderstandPricing={() => handleNavigateToSection('services')}
        />

        {/* 4. "EXPERIENCE THE FUTURE WITH AFG" 3D Virtual Tour Section (Screenshot 5) */}
        <VirtualTourSection
          onOpenVirtualTour={() => setIsVirtualTourOpen(true)}
        />

        {/* 5. "DREAM TEMPLE FOR EVERY BUDGET" by Width (Screenshot 6) */}
        <DreamTemplesByBudget
          onSelectTemple={handleSelectDreamTemple}
          onUnderstandPricing={() => handleNavigateToSection('services')}
        />

        {/* 6. Interactive 3D / CAD Mandir Studio Configurator */}
        <CustomMandirStudio
          onOpenConsultationWithConfig={handleOpenConsultationWithConfig}
        />

        {/* 7. "COMPLETED CUSTOM PROJECTS" + "OUR CLIENTS" + "EXPLORE OUR PROJECTS" (Screenshot 7 & 8) */}
        <ProjectsAndClients
          onSelectProject={handleSelectProject}
          onOpenConsultation={handleOpenConsultation}
        />

        {/* 8. "1000 + HAPPY FAMILIES" Video Testimonials (Screenshot 8 & 9) */}
        <VideoTestimonialsSection />

        {/* 9. "BEFORE AND AFTER" Interactive Comparison Slider (Screenshot 10) */}
        <CarvingComparison />

        {/* 10. Our Masterpiece Catalog (Pooja Rooms, Idols, Fountains, Jaali, Inlay) */}
        <GallerySection
          onSelectProduct={(product) => setSelectedProduct(product)}
          onOpenConsultation={handleOpenConsultation}
        />

        {/* 11. Instagram Reels Showcase Feed (Screenshot 11) */}
        <InstagramReelsSection />

        {/* 12. "AFG GUIDES" Design Knowledge & Articles (Screenshot 12) */}
        <AfgGuidesSection />

        {/* 13. "Talk to Our Expert" 2-Step Form with Domestic/International Toggle (Screenshot 13 & 14) */}
        <ExpertConsultationSection />

        {/* 14. "What Clients Say about us on Google" 8 Reviews (Screenshot 15) */}
        <GoogleReviewsSection />

        {/* 15. "FEATURED IN" & Press Quotes (Screenshot 16) */}
        <FeaturedInPress />

        {/* 16. Natural Stone & Makrana Quarry Library */}
        <StoneLibrary />
      </main>

      {/* 17. Luxury Footer with Locations Across India & Globe (Screenshot 16) */}
      <Footer
        onOpenConsultation={handleOpenConsultation}
        onNavigateToSection={handleNavigateToSection}
      />

      {/* Interactive 360 Virtual Tour Modal */}
      <VirtualTourModal
        isOpen={isVirtualTourOpen}
        onClose={() => setIsVirtualTourOpen(false)}
        onBookConsultation={handleOpenConsultation}
      />

      {/* Product Detail Lightbox Modal */}
      <MasterpieceModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onInquire={handleInquireFromProduct}
      />

      {/* Bespoke Consultation Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        initialConfig={activeConfigForConsultation}
        initialProduct={activeProductForConsultation}
      />

      {/* Floating WhatsApp Quick Connect Button */}
      <a
        href="https://wa.me/919829000000?text=Namaste%20A.F.G%20Marble%20and%20Arts%2C%20I%20would%20like%20to%20inquire%20about%20a%20custom%20Makrana%20marble%20mandir."
        target="_blank"
        rel="noopener noreferrer"
        title="Chat with A.F.G Marble and Arts on WhatsApp"
        className="fixed bottom-6 left-6 z-40 bg-emerald-600 hover:bg-emerald-500 text-white p-3.5 rounded-full shadow-2xl transition-all hover:scale-105 flex items-center gap-2 group cursor-pointer border border-emerald-400/40"
      >
        <MessageCircle className="w-5 h-5 fill-current" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 text-xs font-semibold px-0 group-hover:px-1">
          WhatsApp Expert
        </span>
      </a>
    </div>
  );
}

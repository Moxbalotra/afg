import React, { useState } from 'react';
import { StoneImage } from './StoneImage';
import { X, RotateCw, Sparkles, Compass, Eye, Info } from 'lucide-react';

interface VirtualTourModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBookConsultation: () => void;
}

const TOUR_ROOMS = [
  {
    id: 'room-1',
    name: 'Imperial Makrana Royal Sanctum (8.5 ft)',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80',
    hotspots: [
      { top: '30%', left: '50%', label: 'Backlit Persian Honey Onyx Aura' },
      { top: '65%', left: '35%', label: 'Monolithic Carved Elephant Pedestal' },
      { top: '20%', left: '48%', label: 'Hand-chiseled Kalash Spire' }
    ]
  },
  {
    id: 'room-2',
    name: 'Minimalist Contemporary Floating Pooja Room',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80',
    hotspots: [
      { top: '40%', left: '45%', label: 'Mor-Pankh Lapis Lazuli Inlay' },
      { top: '75%', left: '50%', label: 'Cantilevered Floating Altar Step' },
      { top: '35%', left: '70%', label: 'Concealed LED Warm Halo' }
    ]
  },
  {
    id: 'room-3',
    name: 'Grand Villa 150sqft Palatial Sanctuary',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=80',
    hotspots: [
      { top: '35%', left: '40%', label: '24K Gold Leaf Floral Archway' },
      { top: '80%', left: '55%', label: 'Pietra Dura Inlay Marble Flooring' }
    ]
  }
];

export const VirtualTourModal: React.FC<VirtualTourModalProps> = ({
  isOpen,
  onClose,
  onBookConsultation
}) => {
  const [selectedRoomIndex, setSelectedRoomIndex] = useState(0);
  const [rotationAngle, setRotationAngle] = useState(0);
  const [activeHotspot, setActiveHotspot] = useState<string | null>(null);

  if (!isOpen) return null;

  const currentRoom = TOUR_ROOMS[selectedRoomIndex];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/90 backdrop-blur-lg animate-in fade-in">
      <div className="relative w-full max-w-5xl bg-stone-950 border border-stone-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[95vh]">
        {/* Header Bar */}
        <div className="p-4 sm:px-6 bg-[#FAF8F5] border-b border-[#E8E1D5] flex items-center justify-between text-stone-900">
          <div className="flex items-center gap-2">
            <Compass className="w-5 h-5 text-[#b8860b]" />
            <div>
              <h3 className="font-cinzel text-sm sm:text-base font-bold text-stone-900">
                A.F.G 360° Virtual Pooja Room Explorer
              </h3>
              <p className="text-[11px] text-stone-500">
                Interactive Showroom Experience
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-stone-500 hover:text-stone-900 rounded-full bg-stone-100 hover:bg-stone-200 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 360 Viewport Stage */}
        <div className="relative flex-1 min-h-[380px] sm:min-h-[480px] overflow-hidden bg-black flex items-center justify-center">
          <div
            className="absolute inset-0 transition-transform duration-500 ease-out"
            style={{ transform: `scale(1.05) rotate(${rotationAngle}deg)` }}
          >
            <StoneImage
              src={currentRoom.image}
              alt={currentRoom.name}
              aspectRatioClass="h-full w-full"
              fallbackTitle={currentRoom.name}
              fallbackSubtitle="360° Architectural Tour"
            />
          </div>

          {/* Hotspot Markers */}
          {currentRoom.hotspots.map((spot, idx) => (
            <button
              key={idx}
              onClick={() => setActiveHotspot(activeHotspot === spot.label ? null : spot.label)}
              style={{ top: spot.top, left: spot.left }}
              className="absolute z-20 w-8 h-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d4af37] text-stone-950 flex items-center justify-center shadow-2xl border-2 border-white hover:scale-125 transition-transform animate-pulse cursor-pointer"
              title={spot.label}
            >
              <Info className="w-4 h-4 font-bold" />
            </button>
          ))}

          {/* Active Hotspot Info Card */}
          {activeHotspot && (
            <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-30 bg-black/90 backdrop-blur-md border border-[#d4af37] text-white px-5 py-2.5 rounded-xl shadow-2xl text-xs flex items-center gap-2 animate-in slide-in-from-bottom">
              <Sparkles className="w-4 h-4 text-[#d4af37]" />
              <span><strong>Architectural Detail:</strong> {activeHotspot}</span>
              <button
                onClick={() => setActiveHotspot(null)}
                className="ml-2 text-stone-400 hover:text-white"
              >
                ✕
              </button>
            </div>
          )}

          {/* Rotation Controls on Viewport */}
          <div className="absolute bottom-4 right-4 z-20 flex gap-2">
            <button
              onClick={() => setRotationAngle((prev) => prev - 15)}
              className="p-2.5 bg-black/70 hover:bg-black text-white rounded-lg border border-stone-700 text-xs flex items-center gap-1 shadow-lg"
              title="Pan Left"
            >
              <RotateCw className="w-4 h-4 -scale-x-100" />
            </button>
            <button
              onClick={() => setRotationAngle((prev) => prev + 15)}
              className="p-2.5 bg-black/70 hover:bg-black text-white rounded-lg border border-stone-700 text-xs flex items-center gap-1 shadow-lg"
              title="Pan Right"
            >
              <RotateCw className="w-4 h-4" />
            </button>
          </div>

          {/* View Mode Prompt */}
          <div className="absolute top-4 left-4 z-20 bg-black/75 backdrop-blur-md px-3 py-1.5 rounded-lg border border-stone-700 text-xs text-stone-200 flex items-center gap-2">
            <Eye className="w-3.5 h-3.5 text-[#e5c365]" />
            <span>{currentRoom.name}</span>
          </div>
        </div>

        {/* Footer Room Selector & Consultation Action */}
        <div className="p-4 sm:px-6 bg-[#FAF8F5] border-t border-[#E8E1D5] flex flex-col sm:flex-row items-center justify-between gap-4 text-stone-900">
          <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto">
            {TOUR_ROOMS.map((r, idx) => (
              <button
                key={r.id}
                onClick={() => {
                  setSelectedRoomIndex(idx);
                  setRotationAngle(0);
                  setActiveHotspot(null);
                }}
                className={`px-3 py-2 text-xs rounded-lg border transition-all whitespace-nowrap cursor-pointer ${
                  selectedRoomIndex === idx
                    ? 'border-[#b8860b] bg-[#FAF3E5] text-[#996515] font-semibold'
                    : 'border-stone-300 bg-white text-stone-700 hover:text-stone-950'
                }`}
              >
                Room 0{idx + 1}
              </button>
            ))}
          </div>

          <button
            onClick={() => {
              onClose();
              onBookConsultation();
            }}
            className="w-full sm:w-auto px-6 py-2.5 bg-[#b8860b] hover:bg-[#a67c38] text-white font-semibold text-xs rounded-lg transition-colors shadow-md"
          >
            Request This Design For Your Home
          </button>
        </div>
      </div>
    </div>
  );
};

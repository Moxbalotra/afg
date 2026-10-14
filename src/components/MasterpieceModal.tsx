import React, { useState } from 'react';
import { Product } from '../types';
import { StoneImage } from './StoneImage';
import { X, Check, Shield, Clock, Ruler, Scale, Compass, MessageCircle, Mail } from 'lucide-react';

interface MasterpieceModalProps {
  product: Product | null;
  onClose: () => void;
  onInquire: (product: Product) => void;
}

export const MasterpieceModal: React.FC<MasterpieceModalProps> = ({
  product,
  onClose,
  onInquire
}) => {
  const [isZoomed, setIsZoomed] = useState(false);

  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/70 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-white border border-stone-200 rounded-2xl shadow-2xl overflow-hidden my-8 text-stone-900">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 text-stone-600 hover:text-stone-900 bg-white/90 hover:bg-white rounded-full border border-stone-300 transition-colors cursor-pointer shadow-md"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 max-h-[85vh] overflow-y-auto">
          {/* Left Column: Image with Zoom Inspection */}
          <div className="md:col-span-6 bg-[#FAF7F2] flex flex-col justify-between border-b md:border-b-0 md:border-r border-stone-200">
            <div className="relative overflow-hidden cursor-zoom-in" onClick={() => setIsZoomed(!isZoomed)}>
              <StoneImage
                src={product.image}
                alt={product.name}
                aspectRatioClass="aspect-[4/3] md:aspect-[3/4]"
                className={isZoomed ? 'scale-125 transition-transform duration-300' : 'transition-transform duration-300'}
                fallbackTitle={product.name}
                fallbackSubtitle={product.material}
              />
              <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded text-[11px] text-stone-800 border border-stone-300 shadow-xs">
                {isZoomed ? 'Click to reset zoom' : 'Click to inspect fine chisel work'}
              </div>
            </div>

            {/* Artisan Verification Note */}
            <div className="p-4 bg-white border-t border-stone-200 text-xs text-stone-600 flex items-center gap-2">
              <Shield className="w-4 h-4 text-[#b8860b] shrink-0" />
              <span>Certified Single-Block Monolithic Carving with Zero Synthetic Resins</span>
            </div>
          </div>

          {/* Right Column: Deep Specifications & Inquiry */}
          <div className="md:col-span-6 p-6 sm:p-8 flex flex-col justify-between bg-white">
            <div>
              {/* Unboxed Metadata */}
              <div className="flex items-center gap-2 text-xs text-stone-500 mb-2">
                <span className="text-[#996515] font-semibold tracking-wider uppercase font-cinzel">
                  {product.categoryLabel}
                </span>
                <span aria-hidden="true">·</span>
                <span>{product.quarryOrigin}</span>
                <span aria-hidden="true">·</span>
                <span>{product.inStockStatus}</span>
              </div>

              <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-stone-900 mb-3">
                {product.name}
              </h3>

              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-6">
                {product.description}
              </p>

              {/* Technical Specifications Table */}
              <div className="space-y-2.5 mb-6 text-xs border-y border-stone-200 py-4">
                <div className="flex items-center justify-between">
                  <span className="text-stone-500 flex items-center gap-1.5">
                    <Ruler className="w-3.5 h-3.5 text-[#b8860b]" />
                    Architectural Dimensions:
                  </span>
                  <span className="text-stone-900 font-medium font-mono">{product.dimensions}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-stone-500 flex items-center gap-1.5">
                    <Scale className="w-3.5 h-3.5 text-[#b8860b]" />
                    Estimated Weight:
                  </span>
                  <span className="text-stone-900 font-medium font-mono tabular-nums">{product.weightApprox}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-stone-500 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#b8860b]" />
                    Artisan Chiseling Time:
                  </span>
                  <span className="text-stone-900 font-medium tabular-nums">{product.artisanHours} Dedicated Hours</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-stone-500 flex items-center gap-1.5">
                    <Compass className="w-3.5 h-3.5 text-[#b8860b]" />
                    Vastu Shastra Alignment:
                  </span>
                  <span className="text-[#996515] font-semibold">
                    {product.vastuCompliant ? 'Verified Auspicious Orientation' : 'Architectural Decorative'}
                  </span>
                </div>
              </div>

              {/* Masterpiece Features List */}
              <div className="mb-6">
                <h4 className="text-xs font-semibold text-stone-800 uppercase tracking-wider mb-2.5">
                  Artisanal Hallmarks:
                </h4>
                <ul className="space-y-1.5 text-xs text-stone-700">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-[#b8860b] shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Direct Inquiry Actions */}
            <div className="pt-4 border-t border-stone-200 space-y-2.5">
              <button
                onClick={() => {
                  onClose();
                  onInquire(product);
                }}
                className="w-full py-3 px-4 text-xs sm:text-sm font-semibold text-white bg-[#b8860b] hover:bg-[#a67c38] rounded-lg shadow-sm transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <Mail className="w-4 h-4" />
                <span>Request Custom Pricing & Installation Timeline</span>
              </button>

              <a
                href={`https://wa.me/919829000000?text=${encodeURIComponent(
                  `Namaste A.F.G Marble and Arts, I would like to inquire about "${product.name}" (${product.material}). Kindly share pricing and shipping details.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 text-xs font-medium text-emerald-800 hover:text-emerald-900 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 rounded-lg transition-all text-center flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                <span>Instant WhatsApp Inquiry with Makrana Atelier</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

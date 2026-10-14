import React, { useState } from 'react';
import { ConfiguratorState, Product } from '../types';
import { X, CheckCircle, Send, MessageCircle, FileText } from 'lucide-react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialConfig?: ConfiguratorState | null;
  initialProduct?: Product | null;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  initialConfig,
  initialProduct
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    cityCountry: '',
    projectType: initialProduct ? initialProduct.categoryLabel : initialConfig ? 'Bespoke Custom Mandir' : 'Custom Home Temple',
    preferredStone: initialProduct ? initialProduct.material : initialConfig ? initialConfig.material : 'Makrana Pure Royal Marble',
    roomDimensions: initialProduct ? initialProduct.dimensions : '6 ft (W) × 8 ft (H)',
    targetTimeline: '3 to 6 months',
    additionalVision: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [dossierRef, setDossierRef] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const refCode = `AFG-${Math.floor(1000 + Math.random() * 9000)}-${new Date().getFullYear()}`;
    setDossierRef(refCode);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/70 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white border border-stone-200 rounded-2xl shadow-2xl p-6 sm:p-8 my-8 text-stone-900">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-stone-500 hover:text-stone-900 rounded-full border border-stone-200 bg-stone-100/80 transition-colors cursor-pointer shadow-xs"
          aria-label="Close consultation modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            <div className="mb-6">
              <span className="font-cinzel text-xs font-semibold text-[#996515] tracking-widest uppercase block mb-1">
                Bespoke Atelier Commission
              </span>
              <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-stone-900 mb-2">
                Request Temple Architecture Consultation
              </h3>
              <p className="text-xs sm:text-sm text-stone-600">
                Discuss proportions with our master Shilpkars in Makrana and Jaipur. We prepare comprehensive 3D CAD elevations, structural weight estimates, and global white-glove logistics.
              </p>
            </div>

            {/* Context Badge if arriving from configurator or product */}
            {(initialProduct || initialConfig) && (
              <div className="mb-6 p-3 rounded-lg bg-[#FAF3E5] border border-[#E8C977] text-xs text-stone-900 flex items-center gap-2">
                <FileText className="w-4 h-4 text-[#b8860b] shrink-0" />
                <span>
                  Configured Project: <strong>{initialProduct?.name || 'Custom Mandir Studio Model'}</strong>
                </span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Rajesh Singhania"
                    className="w-full px-3.5 py-2.5 text-xs bg-white border border-stone-300 rounded-lg text-stone-900 placeholder-stone-400 focus:outline-none focus:border-[#b8860b]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@residence.com"
                    className="w-full px-3.5 py-2.5 text-xs bg-white border border-stone-300 rounded-lg text-stone-900 placeholder-stone-400 focus:outline-none focus:border-[#b8860b]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1">
                    WhatsApp / Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 / +1 (555) 000-0000"
                    className="w-full px-3.5 py-2.5 text-xs bg-white border border-stone-300 rounded-lg text-stone-900 placeholder-stone-400 focus:outline-none focus:border-[#b8860b]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1">
                    City & Country of Installation *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.cityCountry}
                    onChange={(e) => setFormData({ ...formData, cityCountry: e.target.value })}
                    placeholder="e.g. Dubai, UAE / Dallas, USA / Mumbai"
                    className="w-full px-3.5 py-2.5 text-xs bg-white border border-stone-300 rounded-lg text-stone-900 placeholder-stone-400 focus:outline-none focus:border-[#b8860b]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1">
                    Preferred Stone Material
                  </label>
                  <select
                    value={formData.preferredStone}
                    onChange={(e) => setFormData({ ...formData, preferredStone: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs bg-white border border-stone-300 rounded-lg text-stone-900 focus:outline-none focus:border-[#b8860b]"
                  >
                    <option value="Makrana Pure Royal Marble">Makrana Pure Royal Marble</option>
                    <option value="Vietnamese Super-White Marble">Vietnamese Super-White Marble</option>
                    <option value="Backlit Persian Honey Onyx">Backlit Persian Honey Onyx</option>
                    <option value="Italian Statuario Marble">Italian Statuario Marble</option>
                    <option value="Jaisalmer Yellow Teak Sandstone">Jaisalmer Yellow Teak Sandstone</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1">
                    Estimated Available Alcove / Room Size
                  </label>
                  <input
                    type="text"
                    value={formData.roomDimensions}
                    onChange={(e) => setFormData({ ...formData, roomDimensions: e.target.value })}
                    placeholder="e.g. 7 ft wide × 9 ft height"
                    className="w-full px-3.5 py-2.5 text-xs bg-white border border-stone-300 rounded-lg text-stone-900 placeholder-stone-400 focus:outline-none focus:border-[#b8860b]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-stone-700 mb-1">
                  Sacred Vision & Specific Deity Requirements (Optional)
                </label>
                <textarea
                  rows={3}
                  value={formData.additionalVision}
                  onChange={(e) => setFormData({ ...formData, additionalVision: e.target.value })}
                  placeholder="Share any special Vastu directions, deity orientations, brass bell preferences, or photo references..."
                  className="w-full px-3.5 py-2.5 text-xs bg-white border border-stone-300 rounded-lg text-stone-900 placeholder-stone-400 focus:outline-none focus:border-[#b8860b]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-4 text-xs sm:text-sm font-semibold text-white bg-[#b8860b] hover:bg-[#a67c38] rounded-lg shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Consultation Request to Makrana Atelier</span>
                </button>
              </div>

              <p className="text-[11px] text-stone-500 text-center">
                Strict Privacy: Your home details and drawings are kept strictly confidential under client privacy protocols.
              </p>
            </form>
          </div>
        ) : (
          /* Confirmation Success State */
          <div className="text-center py-6">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 border border-emerald-300 flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8" />
            </div>

            <span className="font-mono text-xs text-[#996515] uppercase tracking-wider block mb-1 font-semibold">
              Dossier Registered: {dossierRef}
            </span>

            <h3 className="font-cinzel text-2xl font-bold text-stone-900 mb-2">
              Namaste, {formData.fullName}
            </h3>

            <p className="text-sm text-stone-600 max-w-lg mx-auto mb-6 leading-relaxed">
              Your consultation dossier has been received by our master architectural design team at the A.F.G Marble and Arts atelier (Makrana & Jaipur Experience Center).
            </p>

            <div className="p-4 rounded-xl bg-[#FAF8F5] border border-stone-200 max-w-md mx-auto text-left text-xs mb-6 space-y-2">
              <div className="flex justify-between">
                <span className="text-stone-500">Preferred Material:</span>
                <span className="text-stone-900 font-semibold">{formData.preferredStone}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-500">Installation City:</span>
                <span className="text-stone-900 font-semibold">{formData.cityCountry}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-500">Dimensions:</span>
                <span className="text-stone-900 font-semibold">{formData.roomDimensions}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={`https://wa.me/919829000000?text=${encodeURIComponent(
                  `Namaste A.F.G Marble and Arts, my Consultation Dossier is ${dossierRef} (${formData.fullName}, ${formData.cityCountry}). Looking forward to discussing the 3D elevation.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-2.5 text-xs font-semibold text-emerald-800 bg-emerald-50 border border-emerald-300 rounded-lg flex items-center justify-center gap-2 hover:bg-emerald-100"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>Connect on WhatsApp</span>
              </a>

              <button
                onClick={handleReset}
                className="w-full sm:w-auto px-5 py-2.5 text-xs font-semibold text-stone-700 bg-stone-100 hover:bg-stone-200 rounded-lg"
              >
                Close & Return
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

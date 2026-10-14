import React, { useState } from 'react';
import { StoneImage } from './StoneImage';
import { CheckCircle2, MessageCircle, Send } from 'lucide-react';

export const ExpertConsultationSection: React.FC = () => {
  const [marketType, setMarketType] = useState<'domestic' | 'international'>('domestic');
  const [step, setStep] = useState<1 | 2>(1);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    pincode: '',
    userType: 'homeowner',
    budgetTier: 'INR 10L - 25L',
    sizePref: '5ft to 6ft Mandir',
    city: 'Jaipur'
  });
  const [isSuccess, setIsSuccess] = useState(false);
  const [dossierRef, setDossierRef] = useState('');

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone) return;
    setStep(2);
  };

  const handleFinalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const code = `AFG-${Math.floor(1000 + Math.random() * 9000)}-${new Date().getFullYear()}`;
    setDossierRef(code);
    setIsSuccess(true);
  };

  return (
    <section id="services" className="bg-[#FAF8F5] py-16 sm:py-24 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-stone-200 grid grid-cols-1 lg:grid-cols-12">
          {/* Left Column: Full-bleed Showroom Photo (Matches Screenshot 13 & 14) */}
          <div className="lg:col-span-6 relative min-h-[380px] lg:min-h-full">
            <StoneImage
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
              alt="A.F.G Marble and Arts Experience Center Showroom"
              aspectRatioClass="h-full w-full"
              fallbackTitle="A.F.G Experience Center"
              fallbackSubtitle="Rajasthan Atelier Studio"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6 text-white">
              <div>
                <span className="text-[11px] font-mono text-[#f3df99] uppercase tracking-wider block">
                  @Studio Atelier | A.F.G Marble and Arts
                </span>
                <p className="text-xs text-stone-200">
                  Over 950+ bespoke sanctuaries hand-sculpted in Makrana
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Exact Form from Screenshot 13 & 14 */}
          <div className="lg:col-span-6 p-6 sm:p-10 flex flex-col justify-center">
            {/* Top Market Selector: (•) DOMESTIC  ( ) INTERNATIONAL (Screenshot 13 & 14) */}
            <div className="flex items-center gap-6 mb-8 text-xs font-semibold tracking-wider text-stone-800">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="marketType"
                  checked={marketType === 'domestic'}
                  onChange={() => setMarketType('domestic')}
                  className="accent-[#b8860b]"
                />
                <span>DOMESTIC</span>
              </label>

              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="marketType"
                  checked={marketType === 'international'}
                  onChange={() => setMarketType('international')}
                  className="accent-[#b8860b]"
                />
                <span>INTERNATIONAL</span>
              </label>
            </div>

            {!isSuccess ? (
              <div>
                {/* Form Header with Step Circle (Screenshot 13 & 14) */}
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-stone-200">
                  <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-stone-900">
                    Talk to Our Expert
                  </h3>
                  <div className="w-8 h-8 rounded-full border border-red-600 text-red-600 flex items-center justify-center font-mono text-xs font-bold">
                    {step}/2
                  </div>
                </div>

                {step === 1 ? (
                  /* Step 1/2 Form (Screenshot 13 & 14) */
                  <form onSubmit={handleNext} className="space-y-4">
                    <div>
                      <label className="block text-xs text-stone-600 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="Enter your name"
                        className="w-full px-3.5 py-2.5 text-xs bg-white border border-stone-300 rounded focus:outline-none focus:border-stone-900 text-stone-900"
                      />
                    </div>

                    <div>
                      <label className="block text-xs text-stone-600 mb-1">
                        Phone number *
                      </label>
                      <div className="flex">
                        <span className="inline-flex items-center px-3 text-xs text-stone-600 bg-stone-100 border border-r-0 border-stone-300 rounded-l">
                          🇮🇳 +91
                        </span>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="Phone number"
                          className="flex-1 px-3.5 py-2.5 text-xs bg-white border border-stone-300 rounded-r focus:outline-none focus:border-stone-900 text-stone-900"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs text-stone-600 mb-1">
                        Pincode / Postal Code *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.pincode}
                        onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                        placeholder="Pincode"
                        className="w-full px-3.5 py-2.5 text-xs bg-white border border-stone-300 rounded focus:outline-none focus:border-stone-900 text-stone-900"
                      />
                    </div>

                    {/* Radio Options: Homeowner vs Designer (Screenshot 14) */}
                    <div className="pt-2">
                      <label className="block text-xs font-medium text-stone-800 mb-2">
                        Tell us about yourself *
                      </label>
                      <div className="space-y-2 text-xs text-stone-700">
                        <label className="flex items-center gap-2.5 cursor-pointer">
                          <input
                            type="radio"
                            name="userType"
                            checked={formData.userType === 'homeowner'}
                            onChange={() => setFormData({ ...formData, userType: 'homeowner' })}
                            className="accent-stone-900"
                          />
                          <span>I am a homeowner looking for a pooja unit or pooja room</span>
                        </label>
                        <label className="flex items-center gap-2.5 cursor-pointer">
                          <input
                            type="radio"
                            name="userType"
                            checked={formData.userType === 'designer'}
                            onChange={() => setFormData({ ...formData, userType: 'designer' })}
                            className="accent-stone-900"
                          />
                          <span>I am an interior designer/consultant seeking solutions for my client</span>
                        </label>
                      </div>
                    </div>

                    {/* NEXT Button (Screenshot 14) */}
                    <div className="pt-4">
                      <button
                        type="submit"
                        className="w-full py-3.5 bg-black hover:bg-stone-800 text-white font-semibold text-xs tracking-wider uppercase rounded transition-colors shadow-md cursor-pointer"
                      >
                        NEXT
                      </button>
                    </div>
                  </form>
                ) : (
                  /* Step 2/2 Form */
                  <form onSubmit={handleFinalSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs text-stone-600 mb-1">
                        Preferred Budget Tier
                      </label>
                      <select
                        value={formData.budgetTier}
                        onChange={(e) => setFormData({ ...formData, budgetTier: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs bg-white border border-stone-300 rounded text-stone-900"
                      >
                        <option value="INR 4.75L - 7L">INR 4.75L - 7L (Compact Temples)</option>
                        <option value="INR 7L - 15L">INR 7L - 15L (Medium Pooja Rooms)</option>
                        <option value="INR 15L - 25L">INR 15L - 25L (Grand Family Sanctums)</option>
                        <option value="INR 25L+">INR 25L+ (Palatial Monolithic Sanctuaries)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs text-stone-600 mb-1">
                        Preferred Width / Dimension
                      </label>
                      <select
                        value={formData.sizePref}
                        onChange={(e) => setFormData({ ...formData, sizePref: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs bg-white border border-stone-300 rounded text-stone-900"
                      >
                        <option value="3ft Wide Temple">3ft Wide Temple (Compact)</option>
                        <option value="4ft Wide Temple">4ft Wide Temple</option>
                        <option value="5ft Wide Temple">5ft Wide Temple</option>
                        <option value="6ft Wide & Beyond">6ft Wide & Beyond (Grand Room)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs text-stone-600 mb-1">
                        Installation City / State
                      </label>
                      <input
                        type="text"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        placeholder="e.g. Mumbai, Delhi, Dubai, California"
                        className="w-full px-3.5 py-2.5 text-xs bg-white border border-stone-300 rounded text-stone-900"
                      />
                    </div>

                    <div className="flex gap-3 pt-3">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="w-1/3 py-3 border border-stone-300 text-stone-700 text-xs font-semibold rounded hover:bg-stone-50"
                      >
                        BACK
                      </button>
                      <button
                        type="submit"
                        className="w-2/3 py-3 bg-[#b8860b] hover:bg-[#a67c38] text-white font-semibold text-xs tracking-wider uppercase rounded shadow-md flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <Send className="w-3.5 h-3.5" />
                        <span>SUBMIT DOSSIER</span>
                      </button>
                    </div>
                  </form>
                )}
              </div>
            ) : (
              /* Success State */
              <div className="text-center py-8">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <span className="text-[11px] font-mono text-[#b8860b] uppercase tracking-wider block mb-1">
                  Reference: {dossierRef}
                </span>
                <h4 className="font-cinzel text-xl font-bold text-stone-900 mb-2">
                  Thank You, {formData.fullName}
                </h4>
                <p className="text-xs text-stone-600 max-w-sm mx-auto mb-6">
                  Our chief design architect from the A.F.G Marble and Arts atelier will reach out to you within 2 business hours.
                </p>
                <div className="flex justify-center gap-3">
                  <a
                    href={`https://wa.me/919829000000?text=${encodeURIComponent(
                      `Namaste AFG Marble and Arts, my reference code is ${dossierRef}. I inquired about ${formData.sizePref} (${formData.budgetTier}).`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-medium rounded flex items-center gap-1.5"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Chat on WhatsApp</span>
                  </a>
                  <button
                    onClick={() => {
                      setIsSuccess(false);
                      setStep(1);
                    }}
                    className="px-4 py-2.5 border border-stone-300 text-stone-700 text-xs rounded hover:bg-stone-50"
                  >
                    New Request
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

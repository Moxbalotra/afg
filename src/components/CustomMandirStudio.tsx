import React, { useState } from 'react';
import { ConfiguratorState } from '../types';
import { Compass, CheckCircle2, Sparkles, Layers, Sliders, ArrowRight } from 'lucide-react';

interface CustomMandirStudioProps {
  onOpenConsultationWithConfig: (config: ConfiguratorState) => void;
}

const MATERIAL_OPTIONS = [
  { id: 'makrana-white', name: 'Makrana Pure Royal Marble', color: '#fcfbf8', badge: 'Taj Mahal Heritage', factor: 1.25 },
  { id: 'vietnam-white', name: 'Vietnamese Super-White', color: '#ffffff', badge: 'Ultra-Pure White', factor: 1.15 },
  { id: 'italian-statuario', name: 'Italian Statuario', color: '#f3f4f6', badge: 'Dramatic Veining', factor: 1.35 },
  { id: 'jaisalmer-gold', name: 'Jaisalmer Yellow Sandstone', color: '#fef08a', badge: 'Heritage Warmth', factor: 1.0 }
];

const STYLE_OPTIONS = [
  { id: 'classical-nagara', name: 'Classical Nagara Shikhara', description: 'Triple-tier soaring spire with hand-carved Kalash finial and traditional elephant pedestals.' },
  { id: 'contemporary-floating', name: 'Contemporary Floating Sanctum', description: 'Cantilevered marble platform with minimal hairline arches and warm floor under-glow.' },
  { id: 'rajasthani-jharokha', name: 'Rajasthani Jharokha & Chhatri', description: 'Intricate scalloped arches, hanging brass bells, and hand-pierced floral jali side screens.' }
];

const SIZE_OPTIONS = [
  { id: 'compact-4ft', label: '4.5 ft (W) × 6.5 ft (H)', description: 'Ideal for luxury apartments and dedicated prayer alcoves', weight: '650 kg', hours: 380 },
  { id: 'grand-6ft', label: '6.0 ft (W) × 8.0 ft (H)', description: 'Full architectural room sanctum for villas and townhomes', weight: '1,250 kg', hours: 590 },
  { id: 'palatial-8ft', label: '8.5 ft (W) × 9.5 ft (H)', description: 'Multi-generational imperial double-pillar temple estate', weight: '2,100 kg', hours: 880 }
];

const DEITY_OPTIONS = [
  { id: 'radha-krishna', name: 'Radha Krishna Yugal Murti' },
  { id: 'lord-ganesha', name: 'Siddhi Vinayak Ganesha' },
  { id: 'shiv-parvati', name: 'Shiva Parvati & Nandi' },
  { id: 'ram-darbar', name: 'Ram Darbar Consecration' },
  { id: 'tirupati-balaji', name: 'Lord Venkateswara Balaji' }
];

export const CustomMandirStudio: React.FC<CustomMandirStudioProps> = ({
  onOpenConsultationWithConfig
}) => {
  const [config, setConfig] = useState<ConfiguratorState>({
    material: 'makrana-white',
    style: 'classical-nagara',
    dimensions: 'grand-6ft',
    deity: 'radha-krishna',
    lighting: 'warm-backlit',
    carvingDepth: 'high-relief',
    hasDrawers: true,
    hasJaliDoors: true,
    hasBacklitOnyx: true,
    hasBrassBells: true
  });

  const selectedMaterial = MATERIAL_OPTIONS.find((m) => m.id === config.material) || MATERIAL_OPTIONS[0];
  const selectedStyle = STYLE_OPTIONS.find((s) => s.id === config.style) || STYLE_OPTIONS[0];
  const selectedSize = SIZE_OPTIONS.find((s) => s.id === config.dimensions) || SIZE_OPTIONS[1];
  const selectedDeity = DEITY_OPTIONS.find((d) => d.id === config.deity) || DEITY_OPTIONS[0];

  const handleLaunchInquiry = () => {
    onOpenConsultationWithConfig(config);
  };

  return (
    <section id="studio" className="py-20 md:py-28 bg-[#FAF8F5] border-t border-[#EAE3D6] relative overflow-hidden text-stone-900">
      {/* Background architectural grid */}
      <div className="absolute inset-0 opacity-15 bg-[linear-gradient(to_right,#b8860b_1px,transparent_1px),linear-gradient(to_bottom,#b8860b_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-[#996515] tracking-widest uppercase mb-3 font-cinzel">
            <Compass className="w-4 h-4" />
            <span>Interactive Bespoke Engineering</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-950 mb-4">
            Custom Mandir Architecture Studio
          </h2>
          <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
            Tailor every sacred element according to your home dimensions and Vastu Shastra principles. 
            Our 3D designers in Makrana and Jaipur turn your custom vision into precision CAD blueprints.
          </p>
        </div>

        {/* 2-Column Configurator Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Interactive Visualizer Stage (Light Theme) */}
          <div className="lg:col-span-6 bg-white border border-[#E5DDD0] rounded-2xl p-6 sm:p-8 sticky top-28 shadow-xl">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#EFE8DC] text-xs text-stone-500">
              <span className="flex items-center gap-1.5 text-stone-800 font-semibold">
                <Layers className="w-4 h-4 text-[#b8860b]" />
                Live Architectural Elevation
              </span>
              <span className="font-mono text-[#996515] font-semibold">VASTU COMPLIANT</span>
            </div>

            {/* Stylized Architectural Canvas with warm travertine frame */}
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-gradient-to-b from-[#FAF7F2] via-[#F4EFE6] to-[#EFE8DD] border border-[#E5DDD0] flex items-center justify-center p-6 shadow-inner">
              {/* Backlit Onyx Glow Effect if enabled */}
              {config.hasBacklitOnyx && (
                <div className="absolute inset-x-12 inset-y-16 bg-gradient-to-t from-amber-400/40 via-amber-300/30 to-amber-100/20 rounded-lg blur-2xl transition-all duration-700 animate-pulse pointer-events-none" />
              )}

              {/* Decorative Mandir Elevation Graphic */}
              <div className="relative z-10 w-full max-w-xs flex flex-col items-center">
                {/* Kalash Finial */}
                <div className="w-8 h-6 bg-[#b8860b] rounded-t-full shadow-md flex items-center justify-center text-[8px] text-white font-bold mb-1">
                  ▲
                </div>

                {/* Shikhara Spire (Style dependent) */}
                <div
                  className={`w-36 h-20 transition-all duration-500 border-t-2 border-x-2 border-[#b8860b]/70 flex flex-col items-center justify-center shadow-md relative ${
                    config.style === 'classical-nagara'
                      ? 'clip-path-polygon rounded-t-3xl bg-white'
                      : config.style === 'contemporary-floating'
                      ? 'rounded-t-lg bg-stone-50'
                      : 'rounded-t-2xl border-dashed bg-white'
                  }`}
                  style={{
                    backgroundColor: selectedMaterial.color,
                    boxShadow: config.hasBacklitOnyx ? '0 0 25px rgba(245, 158, 11, 0.35)' : 'none'
                  }}
                >
                  <span className="text-[10px] text-stone-800 font-bold tracking-wider font-cinzel">
                    {selectedStyle.name.split(' ')[0]}
                  </span>
                  {config.hasBrassBells && (
                    <div className="flex gap-4 mt-1 text-[10px] text-amber-700">
                      <span>🔔</span>
                      <span>🔔</span>
                      <span>🔔</span>
                    </div>
                  )}
                </div>

                {/* Main Sanctum Garbhagriha */}
                <div
                  className="w-60 h-36 border-2 border-stone-300 flex items-center justify-between px-3 relative shadow-sm transition-all duration-500 rounded-sm"
                  style={{ backgroundColor: selectedMaterial.color }}
                >
                  {/* Left Pillar */}
                  <div className="w-6 h-full bg-stone-200/90 border-r border-stone-300 flex flex-col justify-around py-2">
                    <div className="w-full h-1 bg-stone-300" />
                    <div className="w-full h-1 bg-stone-300" />
                    <div className="w-full h-1 bg-stone-300" />
                  </div>

                  {/* Inner Sanctum Center */}
                  <div className="flex-1 flex flex-col items-center justify-center text-center px-2">
                    {config.hasBacklitOnyx && (
                      <div className="absolute inset-8 bg-amber-200/40 rounded-sm filter blur-[2px]" />
                    )}
                    <div className="relative z-10">
                      <div className="w-12 h-12 rounded-full border border-amber-600/40 bg-amber-50 flex items-center justify-center mx-auto mb-1 text-amber-900 text-lg shadow-xs">
                        ✨
                      </div>
                      <p className="text-[11px] font-bold text-stone-900 font-cinzel">
                        {selectedDeity.name}
                      </p>
                      <p className="text-[9px] text-stone-600">
                        Consecrated Sanctum
                      </p>
                    </div>
                  </div>

                  {/* Right Pillar */}
                  <div className="w-6 h-full bg-stone-200/90 border-l border-stone-300 flex flex-col justify-around py-2">
                    <div className="w-full h-1 bg-stone-300" />
                    <div className="w-full h-1 bg-stone-300" />
                    <div className="w-full h-1 bg-stone-300" />
                  </div>
                </div>

                {/* Base Chowki & Pull-out Drawers */}
                <div
                  className="w-68 h-10 border-t border-stone-400 flex items-center justify-around px-4 rounded-b-md shadow-md text-[9px] text-stone-800 font-medium"
                  style={{ backgroundColor: selectedMaterial.color }}
                >
                  {config.hasDrawers ? (
                    <>
                      <div className="w-28 h-5 border border-stone-300 rounded-sm flex items-center justify-center bg-white shadow-xs">
                        Solid Brass Knobs
                      </div>
                      <div className="w-28 h-5 border border-stone-300 rounded-sm flex items-center justify-center bg-white shadow-xs">
                        Prasad Bhog Chowki
                      </div>
                    </>
                  ) : (
                    <span>Monolithic Solid Pedestal</span>
                  )}
                </div>
              </div>
            </div>

            {/* Live Specifications Summary Strip */}
            <div className="mt-6 pt-5 border-t border-[#EFE8DD] grid grid-cols-3 gap-3 text-center">
              <div className="p-2.5 rounded-lg bg-[#FAF8F5] border border-[#E5DDD0]">
                <span className="block text-[11px] text-stone-500">Dimensions</span>
                <span className="text-xs font-semibold text-stone-900">
                  {selectedSize.label.split('(')[0]}
                </span>
              </div>
              <div className="p-2.5 rounded-lg bg-[#FAF8F5] border border-[#E5DDD0]">
                <span className="block text-[11px] text-stone-500">Net Weight</span>
                <span className="text-xs font-semibold text-[#996515] tabular-nums">
                  ~{selectedSize.weight}
                </span>
              </div>
              <div className="p-2.5 rounded-lg bg-[#FAF8F5] border border-[#E5DDD0]">
                <span className="block text-[11px] text-stone-500">Artisan Time</span>
                <span className="text-xs font-semibold text-stone-900 tabular-nums">
                  {selectedSize.hours} Hours
                </span>
              </div>
            </div>

            {/* Action CTA */}
            <button
              onClick={handleLaunchInquiry}
              className="mt-6 w-full py-3.5 px-4 text-xs sm:text-sm font-semibold text-white bg-[#b8860b] hover:bg-[#a67c38] rounded-lg shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Request 3D CAD Blueprint & Quotation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Right Column: Customization Controls (Light Theme) */}
          <div className="lg:col-span-6 space-y-7">
            {/* Step 1: Sacred Material */}
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-stone-700 uppercase tracking-wider mb-3">
                <Sliders className="w-4 h-4 text-[#b8860b]" />
                <span>1. Select Sacred Stone Material</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {MATERIAL_OPTIONS.map((mat) => (
                  <button
                    key={mat.id}
                    onClick={() => setConfig({ ...config, material: mat.id })}
                    className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer flex items-start justify-between ${
                      config.material === mat.id
                        ? 'border-[#b8860b] bg-[#FAF3E5] shadow-xs ring-1 ring-[#b8860b]'
                        : 'border-[#E8E1D5] bg-white hover:border-stone-400 shadow-xs'
                    }`}
                  >
                    <div>
                      <div className="font-semibold text-xs sm:text-sm text-stone-900 mb-0.5">{mat.name}</div>
                      <div className="text-[11px] text-[#996515]">{mat.badge}</div>
                    </div>
                    {config.material === mat.id && (
                      <CheckCircle2 className="w-4 h-4 text-[#b8860b] shrink-0" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Temple Architectural Style */}
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-stone-700 uppercase tracking-wider mb-3">
                <Sliders className="w-4 h-4 text-[#b8860b]" />
                <span>2. Select Mandir Architectural Style</span>
              </div>
              <div className="space-y-2.5">
                {STYLE_OPTIONS.map((style) => (
                  <button
                    key={style.id}
                    onClick={() => setConfig({ ...config, style: style.id })}
                    className={`w-full p-4 rounded-xl border text-left transition-all cursor-pointer ${
                      config.style === style.id
                        ? 'border-[#b8860b] bg-[#FAF3E5] shadow-xs ring-1 ring-[#b8860b]'
                        : 'border-[#E8E1D5] bg-white hover:border-stone-400 shadow-xs'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-semibold text-xs sm:text-sm text-stone-900">{style.name}</span>
                      {config.style === style.id && (
                        <CheckCircle2 className="w-4 h-4 text-[#b8860b]" />
                      )}
                    </div>
                    <p className="text-xs text-stone-600 leading-relaxed">{style.description}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Sanctum Proportions & Size */}
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-stone-700 uppercase tracking-wider mb-3">
                <Sliders className="w-4 h-4 text-[#b8860b]" />
                <span>3. Sanctum Scale & Dimensions</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {SIZE_OPTIONS.map((sz) => (
                  <button
                    key={sz.id}
                    onClick={() => setConfig({ ...config, dimensions: sz.id })}
                    className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                      config.dimensions === sz.id
                        ? 'border-[#b8860b] bg-[#FAF3E5] shadow-xs ring-1 ring-[#b8860b]'
                        : 'border-[#E8E1D5] bg-white hover:border-stone-400 shadow-xs'
                    }`}
                  >
                    <div className="font-semibold text-xs text-stone-900 mb-1 line-clamp-1">{sz.label}</div>
                    <p className="text-[11px] text-stone-600 line-clamp-2">{sz.description}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 4: Primary Deity Idol */}
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-stone-700 uppercase tracking-wider mb-3">
                <Sliders className="w-4 h-4 text-[#b8860b]" />
                <span>4. Primary Deity Consecration</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {DEITY_OPTIONS.map((d) => (
                  <button
                    key={d.id}
                    onClick={() => setConfig({ ...config, deity: d.id })}
                    className={`p-2.5 rounded-lg border text-xs text-left transition-all cursor-pointer line-clamp-1 ${
                      config.deity === d.id
                        ? 'border-[#b8860b] bg-[#FAF3E5] text-stone-950 font-semibold ring-1 ring-[#b8860b]'
                        : 'border-[#E8E1D5] bg-white hover:border-stone-400 text-stone-700 shadow-xs'
                    }`}
                  >
                    {d.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 5: Artisan Accents & Finishes */}
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-stone-700 uppercase tracking-wider mb-3">
                <Sparkles className="w-4 h-4 text-[#b8860b]" />
                <span>5. Artisan Accents & Engineering</span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <label className="flex items-center gap-3 p-3 rounded-xl border border-[#E8E1D5] bg-white cursor-pointer hover:border-stone-400 shadow-xs">
                  <input
                    type="checkbox"
                    checked={config.hasBacklitOnyx}
                    onChange={(e) => setConfig({ ...config, hasBacklitOnyx: e.target.checked })}
                    className="rounded border-stone-300 text-[#b8860b] focus:ring-0"
                  />
                  <span className="text-xs text-stone-800 font-medium">Backlit Honey Onyx Panel</span>
                </label>

                <label className="flex items-center gap-3 p-3 rounded-xl border border-[#E8E1D5] bg-white cursor-pointer hover:border-stone-400 shadow-xs">
                  <input
                    type="checkbox"
                    checked={config.hasBrassBells}
                    onChange={(e) => setConfig({ ...config, hasBrassBells: e.target.checked })}
                    className="rounded border-stone-300 text-[#b8860b] focus:ring-0"
                  />
                  <span className="text-xs text-stone-800 font-medium">Pure Brass Ghanti Bells</span>
                </label>

                <label className="flex items-center gap-3 p-3 rounded-xl border border-[#E8E1D5] bg-white cursor-pointer hover:border-stone-400 shadow-xs">
                  <input
                    type="checkbox"
                    checked={config.hasDrawers}
                    onChange={(e) => setConfig({ ...config, hasDrawers: e.target.checked })}
                    className="rounded border-stone-300 text-[#b8860b] focus:ring-0"
                  />
                  <span className="text-xs text-stone-800 font-medium">Bhog Tray & Puja Drawers</span>
                </label>

                <label className="flex items-center gap-3 p-3 rounded-xl border border-[#E8E1D5] bg-white cursor-pointer hover:border-stone-400 shadow-xs">
                  <input
                    type="checkbox"
                    checked={config.hasJaliDoors}
                    onChange={(e) => setConfig({ ...config, hasJaliDoors: e.target.checked })}
                    className="rounded border-stone-300 text-[#b8860b] focus:ring-0"
                  />
                  <span className="text-xs text-stone-800 font-medium">Hand-Pierced Jali Doors</span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

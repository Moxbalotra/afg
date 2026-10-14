import React, { useState } from 'react';

interface StoneImageProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatioClass?: string;
  fallbackTitle?: string;
  fallbackSubtitle?: string;
}

export const StoneImage: React.FC<StoneImageProps> = ({
  src,
  alt,
  className = '',
  aspectRatioClass = 'aspect-[4/3]',
  fallbackTitle = 'Bespoke Marble Art',
  fallbackSubtitle = 'Handcrafted in Makrana'
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden bg-stone-100 ${aspectRatioClass} ${className}`}>
      {/* Light Theme Fallback & Loading background */}
      <div
        className={`absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-[#FAF7F2] via-[#F4EFE6] to-[#EFE8DD] transition-opacity duration-700 ${
          isLoaded && !hasError ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      >
        {/* Subtle stone pattern overlay */}
        <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(#b8860b_1px,transparent_1px)] [background-size:16px_16px]" />
        
        {/* Architectural Motif Icon */}
        <div className="w-14 h-14 rounded-full border border-[#b8860b]/40 flex items-center justify-center mb-3 bg-white/90 text-[#b8860b] shadow-xs">
          <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        
        <p className="font-cinzel text-xs sm:text-sm text-stone-900 font-bold tracking-wider uppercase mb-1">
          {fallbackTitle}
        </p>
        <p className="text-xs text-stone-600">
          {fallbackSubtitle}
        </p>
      </div>

      {!hasError && (
        <img
          src={src}
          alt={alt}
          referrerPolicy="no-referrer"
          loading="lazy"
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          className={`w-full h-full object-cover transition-all duration-700 ${
            isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
        />
      )}
    </div>
  );
};

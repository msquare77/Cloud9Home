import React, { useState } from 'react';

interface CruiseLineLogoProps {
  name: string;
  logoUrl?: string;
  brandColor?: string;
  size?: 'sm' | 'md' | 'lg' | 'hero';
  className?: string;
}

export const CruiseLineLogo: React.FC<CruiseLineLogoProps> = ({
  name,
  logoUrl,
  brandColor = '#0E1035',
  size = 'md',
  className = '',
}) => {
  const [imageError, setImageError] = useState(false);

  const sizeClasses = {
    sm: 'h-8 px-2.5 text-xs',
    md: 'h-12 px-3 text-sm',
    lg: 'h-16 px-4 text-base',
    hero: 'h-20 px-5 text-lg',
  };

  const imgHeightClasses = {
    sm: 'max-h-6 max-w-[100px]',
    md: 'max-h-9 max-w-[140px]',
    lg: 'max-h-12 max-w-[180px]',
    hero: 'max-h-16 max-w-[220px]',
  };

  // If we have a logoUrl and no error has occurred, render the image
  if (logoUrl && !imageError) {
    return (
      <div
        className={`bg-white rounded-full flex items-center justify-center p-2 border border-[#0E1035]/10 shadow-xs ${sizeClasses[size]} ${className}`}
      >
        <img
          src={logoUrl}
          alt={`${name} logo`}
          className={`${imgHeightClasses[size]} w-auto object-contain`}
          onError={() => setImageError(true)}
          referrerPolicy="no-referrer"
          loading="lazy"
        />
      </div>
    );
  }

  // Fallback: Crisp typography badge with initial or brand name
  return (
    <div
      className={`rounded-full flex items-center justify-center font-black tracking-wider uppercase border border-white/20 shadow-xs text-white ${sizeClasses[size]} ${className}`}
      style={{ backgroundColor: brandColor }}
    >
      <span className="truncate max-w-full">{name}</span>
    </div>
  );
};

import React from 'react';
import { CircularGallery, GalleryItem } from './CircularGallery';

interface VisualJourneysGalleryProps {
  onNavigateToSection: (sectionId: string, subpageKey?: string) => void;
}

const CATEGORY_ITEMS: (GalleryItem & { categoryId: string })[] = [
  {
    categoryId: 'all',
    text: 'All Portfolio',
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1200&q=80',
  },
  {
    categoryId: 'cruises',
    text: 'Cruises',
    image: 'https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&w=1200&q=80',
  },
  {
    categoryId: 'resorts',
    text: 'Resorts',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
  },
  {
    categoryId: 'tours',
    text: 'Tours',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=80',
  },
  {
    categoryId: 'destinations',
    text: 'Destinations',
    image: 'https://images.unsplash.com/photo-1461250281059-4f83443edbdc?auto=format&fit=crop&w=1200&q=80',
  },
  {
    categoryId: 'luxury',
    text: 'Luxury',
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80',
  },
];

export const VisualJourneysGallery: React.FC<VisualJourneysGalleryProps> = ({ onNavigateToSection }) => {
  return (
    <section className="bg-[#0E1035] py-20 sm:py-28">
      <div className="w-full max-w-[1640px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5 mb-12 sm:mb-16">
          <div>
            <span className="font-signature block text-3xl sm:text-4xl lg:text-5xl text-[#14ABFA] select-none">
              Gallery
            </span>
            <h2 className="editorial-title text-3xl sm:text-4xl lg:text-5xl text-white mt-1">
              Moments From Every Dream Vacation
            </h2>
          </div>
          <p className="text-sm sm:text-base text-white/60 font-medium max-w-sm lg:text-right">
            Drag or scroll to browse by category, then dive into the full Vacation Visual Library.
          </p>
        </div>
      </div>

      <div className="h-[420px] sm:h-[520px] lg:h-[600px] w-full">
        <CircularGallery
          items={CATEGORY_ITEMS}
          bend={2.5}
          borderRadius={0.06}
          scrollEase={0.04}
          fontClassName="text-white/85 text-2xl font-semibold"
          onItemClick={(index) => onNavigateToSection('gallery-section', CATEGORY_ITEMS[index].categoryId)}
        />
      </div>
    </section>
  );
};

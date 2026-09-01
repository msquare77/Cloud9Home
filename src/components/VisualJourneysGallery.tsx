import React from 'react';
import { CircularGallery, GalleryItem } from './CircularGallery';

const JOURNEY_ITEMS: GalleryItem[] = [
  {
    image: 'https://images.unsplash.com/photo-1461250281059-4f83443edbdc?auto=format&fit=crop&w=1200&q=80',
    text: 'Alaska Glaciers',
  },
  {
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    text: 'Turks & Caicos',
  },
  {
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1200&q=80',
    text: 'Santorini, Greece',
  },
  {
    image: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1200&q=80',
    text: 'All-Inclusive Resorts',
  },
  {
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80',
    text: 'Luxury Suites',
  },
  {
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
    text: 'Signature Dining',
  },
  {
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
    text: 'Ocean Balcony Suites',
  },
  {
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=80',
    text: 'African Safaris',
  },
];

export const VisualJourneysGallery: React.FC = () => {
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
            Drag or scroll to explore the cruises, resorts, and destinations your Cloud 9 travel advisor can bring to life.
          </p>
        </div>
      </div>

      <div className="h-[420px] sm:h-[520px] lg:h-[600px] w-full">
        <CircularGallery
          items={JOURNEY_ITEMS}
          bend={2.5}
          borderRadius={0.06}
          scrollEase={0.04}
          fontClassName="text-white/85 text-2xl font-semibold"
        />
      </div>
    </section>
  );
};

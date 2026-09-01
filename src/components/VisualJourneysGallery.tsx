import React from 'react';

interface JourneyCard {
  id: string;
  imageUrl: string;
  alt: string;
  rotation: string;
}

const JOURNEY_CARDS: JourneyCard[] = [
  {
    id: 'journey-alaska',
    imageUrl: 'https://images.unsplash.com/photo-1461250281059-4f83443edbdc?auto=format&fit=crop&w=800&q=80',
    alt: 'Alaska glacier fjord cruise navigation',
    rotation: '-rotate-6',
  },
  {
    id: 'journey-beach',
    imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
    alt: 'Grace Bay turquoise beach, Turks & Caicos',
    rotation: 'rotate-3',
  },
  {
    id: 'journey-santorini',
    imageUrl: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=800&q=80',
    alt: 'Santorini caldera cliffside excursion',
    rotation: '-rotate-2',
  },
  {
    id: 'journey-pooldeck',
    imageUrl: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=800&q=80',
    alt: 'Tropical all-inclusive resort pool deck',
    rotation: 'rotate-5',
  },
  {
    id: 'journey-suite',
    imageUrl: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80',
    alt: 'Luxury resort suite interior',
    rotation: '-rotate-4',
  },
  {
    id: 'journey-dining',
    imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
    alt: 'Signature onboard and resort fine dining',
    rotation: 'rotate-2',
  },
];

export const VisualJourneysGallery: React.FC = () => {
  return (
    <section className="bg-[#0E1035] py-20 sm:py-28 overflow-hidden">
      <div className="w-full max-w-[1640px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5 mb-16 sm:mb-20">
          <div>
            <span className="font-signature block text-3xl sm:text-4xl lg:text-5xl text-[#14ABFA] select-none">
              Gallery
            </span>
            <h2 className="editorial-title text-3xl sm:text-4xl lg:text-5xl text-white mt-1">
              Visual Journeys &amp; Expeditions
            </h2>
          </div>
          <p className="text-sm sm:text-base text-white/60 font-medium max-w-sm lg:text-right">
            A glimpse of the cruises, resorts, and destinations your Cloud 9 travel advisor can bring to life.
          </p>
        </div>

        <div className="flex items-center gap-4 sm:gap-6 overflow-x-auto lg:overflow-visible lg:justify-center pb-6 lg:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0 snap-x snap-mandatory lg:snap-none scrollbar-none">
          {JOURNEY_CARDS.map((card) => (
            <div
              key={card.id}
              className={`site-content-image-frame relative shrink-0 w-44 h-64 sm:w-56 sm:h-80 shadow-[0_20px_45px_rgba(0,0,0,0.45)] ${card.rotation} hover:rotate-0 hover:scale-105 hover:z-10 transition-transform duration-300 snap-center`}
            >
              <img
                src={card.imageUrl}
                alt={card.alt}
                className="site-content-image w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

import React from 'react';

interface CompetitiveMatrixProps {
  onOpenBookingModal: () => void;
}

const CLOUD9_BENEFITS = [
  {
    title: 'Personal Service',
    description: 'A dedicated advisor who listens, understands your priorities, and plans around you.',
    image: new URL('../../assets/Why Cloud 9/Badge _3.webp', import.meta.url).href,
  },
  {
    title: 'Exceptional Value',
    description: 'Thoughtful recommendations that balance the right experience with your vacation budget.',
    image: new URL('../../assets/Why Cloud 9/Badge .webp', import.meta.url).href,
  },
  {
    title: 'Exclusive Benefits',
    description: 'Access to special offers, added amenities, and valuable supplier promotions.',
    image: new URL('../../assets/Why Cloud 9/Badge _2.webp', import.meta.url).href,
  },
  {
    title: 'Expert Support',
    description: 'Professional guidance from the first conversation until you return home.',
    image: new URL('../../assets/Why Cloud 9/Badge _1.webp', import.meta.url).href,
  },
];

export const CompetitiveMatrix: React.FC<CompetitiveMatrixProps> = () => (
  <section id="why-us-section" className="py-20 sm:py-28 bg-[#F1F6FD]">
    <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
      <div className="max-w-4xl">
        <span className="font-signature text-3xl sm:text-4xl text-[#14ABFA] select-none block mb-1">
          The Concierge Advantage
        </span>
        <h2 className="editorial-title text-3xl sm:text-5xl lg:text-6xl text-[#0E1035] leading-tight">
          WHY CLOUD 9
        </h2>
      </div>

      <div className="mt-10 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-7">
        {CLOUD9_BENEFITS.map(benefit => (
          <article
            key={benefit.title}
            className="text-center flex flex-col items-center transition-transform duration-400 hover:-translate-y-1.5"
          >
            <img
              src={benefit.image}
              alt={`${benefit.title} badge`}
              className="h-auto w-full max-w-[270px] object-contain"
              loading="lazy"
            />

            <h3 className="sr-only">{benefit.title}</h3>
            <p className="mx-auto mt-5 max-w-64 px-3 text-xs sm:text-sm font-normal leading-relaxed text-[#0E1035]/66">
              {benefit.description}
            </p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

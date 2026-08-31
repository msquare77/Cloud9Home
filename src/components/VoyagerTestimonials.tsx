import React from 'react';
import { TESTIMONIALS } from '../data/cruiseData';

const STORY_IMAGES: Record<string, string> = {
  'test-1': new URL('../../assets/Testimonials/family-cruise-testimonial.webp', import.meta.url).href,
  'test-2': new URL('../../assets/Testimonials/anniversary-resort-testimonial.webp', import.meta.url).href,
  'test-3': new URL('../../assets/Testimonials/multigenerational-cruise-testimonial.webp', import.meta.url).href,
};

const travelerLocation = (location: string) => location.replace('North Carolina', 'NC').replace('Texas', 'TX');

export const VoyagerTestimonials: React.FC = () => {
  return (
    <section id="reviews-section" className="bg-[#F1F6FD] py-20 sm:py-28">
      <div className="mx-auto w-full max-w-[1640px] px-4 sm:px-6 lg:px-8 xl:px-10">
        <header className="mb-12 max-w-4xl text-center mx-auto sm:mb-16">
          <span className="font-signature mb-1 block select-none text-3xl text-[#14ABFA] sm:text-4xl">
            From Their Journeys
          </span>
          <h2 className="editorial-title text-3xl leading-tight text-[#0E1035] sm:text-5xl lg:text-6xl">
            VERIFIED TRAVELER EXPERIENCES
          </h2>
          <p className="mt-4 text-sm font-normal text-[#0E1035]/65 sm:text-base">
            Real feedback from travelers Cloud9Travels has helped plan and book.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map(story => (
            <article
              key={story.id}
              className="flex flex-col bg-white p-7 shadow-[0_10px_28px_rgba(14,16,53,0.08)] sm:p-8"
            >
              <div className="flex items-center justify-between gap-3">
                <div className="text-sm leading-none tracking-[0.06em] text-[#E8A73D]" aria-label={`${story.rating} out of 5 stars`}>
                  {'★'.repeat(story.rating)}
                  <span className="text-[#0E1035]/15">{'★'.repeat(5 - story.rating)}</span>
                </div>

                {story.verified && (
                  <span className="flex items-center gap-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-[#0D8F79]">
                    <span aria-hidden="true">✓</span>
                    Verified
                  </span>
                )}
              </div>

              <h3 className="mt-5 text-lg font-bold leading-snug text-[#0E1035]">
                {story.title}
              </h3>

              <blockquote className="mt-3 flex-1 text-sm font-normal leading-6 text-[#0E1035]/72">
                “{story.content}”
              </blockquote>

              <div className="mt-6 flex items-center gap-3.5 border-t border-[#0E1035]/8 pt-6">
                <img
                  src={story.avatarUrl}
                  alt={story.author}
                  className="h-11 w-11 shrink-0 rounded-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-[#0E1035]">{story.author}</p>
                  <p className="truncate text-xs font-normal text-[#0E1035]/55">
                    {travelerLocation(story.location)} · {story.travelType}
                  </p>
                </div>
              </div>

              <div className="mt-5 overflow-hidden">
                <img
                  src={STORY_IMAGES[story.id]}
                  alt={`${story.destination} traveler experience`}
                  className="site-content-image h-40 w-full object-cover"
                />
              </div>

              <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.1em] text-[#0E1035]/45">
                {story.shipName} · {story.date}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

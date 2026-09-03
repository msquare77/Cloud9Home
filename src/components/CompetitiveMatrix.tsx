import React from 'react';

interface CompetitiveMatrixProps {
  onOpenBookingModal: () => void;
}

const COUPLE_IMAGE = new URL('../../assets/Why Cloud 9/travel-advisors-couple.jpg', import.meta.url).href;
const NAUSHAD_IMAGE = new URL('../../assets/Why Cloud 9/travel-advisor-naushad.jpg', import.meta.url).href;
const NARMIN_IMAGE = new URL('../../assets/Why Cloud 9/travel-advisor-narmin.jpg', import.meta.url).href;

const ADVISOR_CARDS = [
  {
    image: COUPLE_IMAGE,
    name: 'Personalised Service, Every Journey',
    bio: null,
  },
  {
    image: NAUSHAD_IMAGE,
    name: 'Naushad Kermally',
    bio: "Naushad Kermally is a lifelong travel enthusiast and community leader who has called Sugar Land home for nearly 30 years. With deep roots in the local community and a passion for exploring the world, Naushad brings an authoritative, well-traveled perspective to every itinerary Cloud 9 Travel designs. Whether it's a family cruise, a milestone celebration, or a bucket-list adventure, Naushad's firsthand knowledge and attention to detail ensure every trip is planned with care.",
  },
  {
    image: NARMIN_IMAGE,
    name: 'Narmin Kermally',
    bio: "Narmin Kermally is the driving force behind Cloud 9 Travel, bringing years of hands-on experience across cruises, all-inclusive resorts, and custom vacation planning. As CEO, she's built Cloud 9 into a trusted name for travelers seeking a seamless, personalized experience — pairing industry expertise with a genuine passion for helping clients discover the world. From first-time cruisers to seasoned travelers, Narmin treats every journey as her own.",
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

      <div className="mt-10 sm:mt-14 grid grid-cols-1 lg:grid-cols-3 gap-7 lg:gap-8 items-stretch">
        {ADVISOR_CARDS.map((card) => (
          <article
            key={card.name}
            className="group flex flex-col overflow-hidden bg-white shadow-[0_18px_55px_rgba(14,16,53,0.08)] transition-transform duration-400 hover:-translate-y-1.5"
          >
            <div className="relative aspect-[1080/771] overflow-hidden bg-[#0E1035]/5">
              <img
                src={card.image}
                alt={card.name}
                className="absolute inset-0 h-full w-full object-contain transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                loading="lazy"
              />
            </div>

            <div className="flex flex-1 flex-col p-6 sm:p-7">
              {card.bio ? (
                <>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#0E1035]">{card.name}</h3>
                  <p className="mt-3 text-sm font-normal leading-relaxed text-[#0E1035]/70">
                    {card.bio}
                  </p>
                </>
              ) : (
                <h3 className="my-auto text-2xl sm:text-3xl font-extrabold leading-snug text-[#0E1035]">
                  {card.name}
                </h3>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

import React, { useState } from 'react';

interface DealsSectionProps {
  onOpenBookingModal: (dealTitle?: string) => void;
  initialSubpage?: string;
}

type DealGroupKey = 'cruise-deals' | 'resort-deals' | 'tour-deals' | 'military-deals';

interface DealStory {
  id: string;
  title: string;
  description: string;
  image: string;
  highlights: string[];
}

interface DealGroup {
  id: DealGroupKey;
  label: string;
  background: string;
  foreground: string;
  stories: DealStory[];
}

const ALL_CRUISE_DEALS = new URL('../../assets/Cruises/optimized/royal-caribbean.webp', import.meta.url).href;
const GROUP_CRUISES = new URL('../../assets/Cruises/optimized/celebrity-cruises.webp', import.meta.url).href;
const HONEYMOON_CRUISES = new URL('../../assets/Cruises/optimized/princess-cruises.webp', import.meta.url).href;
const HOLIDAY_CRUISES = new URL('../../assets/Cruises/optimized/disney-cruise-line.webp', import.meta.url).href;
const WEEKEND_CRUISES = new URL('../../assets/Cruises/optimized/carnival-cruise-line.webp', import.meta.url).href;
const BALCONY_CRUISES = new URL('../../assets/Cruises/optimized/holland-america-line.webp', import.meta.url).href;
const FAMILY_CRUISES = new URL('../../assets/Cruises/optimized/norwegian-cruise-line.webp', import.meta.url).href;
const NEW_CRUISE_SHIPS = new URL('../../assets/Cruises/optimized/msc-cruises.webp', import.meta.url).href;
const SOLO_CRUISES = new URL('../../assets/Cruises/optimized/virgin-voyages.webp', import.meta.url).href;
const RESORT_DEALS = new URL('../../assets/magnific/resort-2.jpg', import.meta.url).href;
const TOUR_DEALS = new URL('../../assets/magnific/tour-2.jpg', import.meta.url).href;
const MILITARY_DEALS = new URL('../../assets/magnific/hero-cruise.png', import.meta.url).href;

const DEAL_GROUPS: DealGroup[] = [
  {
    id: 'cruise-deals',
    label: 'Cruise Deals',
    background: '#14ABFA',
    foreground: '#0E1035',
    stories: [
      {
        id: 'all-cruise-deals',
        title: 'All Cruise Deals',
        description: 'Compare current cruise-line promotions across contemporary, premium, river, expedition, and luxury voyages in one place.',
        image: ALL_CRUISE_DEALS,
        highlights: ['Multiple cruise lines', 'Worldwide sailings', 'Live offer confirmation']
      },
      {
        id: 'groups',
        title: 'Groups',
        description: 'Bring family, friends, clubs, or organizations together with coordinated stateroom planning and available group benefits.',
        image: GROUP_CRUISES,
        highlights: ['Coordinated planning', 'Shared celebrations', 'Group options']
      },
      {
        id: 'honeymoon-cruises',
        title: 'Honeymoon Cruises',
        description: 'Discover romantic voyages with memorable dining, beautiful destinations, and stateroom options designed for two.',
        image: HONEYMOON_CRUISES,
        highlights: ['Romantic itineraries', 'Couples experiences', 'Special-occasion planning']
      },
      {
        id: 'holiday-cruises',
        title: 'Holiday Cruises',
        description: 'Explore festive sailings that make it easier to celebrate together without the usual holiday planning and preparation.',
        image: HOLIDAY_CRUISES,
        highlights: ['Seasonal sailings', 'Festive experiences', 'Family celebrations']
      },
      {
        id: 'weekend-cruises',
        title: 'Weekend Cruises',
        description: 'Make a short escape feel complete with convenient three- and four-night itineraries from popular departure ports.',
        image: WEEKEND_CRUISES,
        highlights: ['Short getaways', 'Convenient departures', 'Easy escapes']
      },
      {
        id: 'balcony-cabins-suites',
        title: 'Balcony Cabins/Suites',
        description: 'Compare balcony stateroom and suite opportunities for more space, private views, and elevated onboard experiences.',
        image: BALCONY_CRUISES,
        highlights: ['Private balconies', 'Suite options', 'Premium comfort']
      },
      {
        id: 'family-cruises',
        title: 'Family Cruises',
        description: 'Find family-friendly ships with activities for every generation and promotions suited to traveling together.',
        image: FAMILY_CRUISES,
        highlights: ['Multi-generational travel', 'Family-focused ships', 'Youth activities']
      },
      {
        id: 'new-cruise-ships',
        title: 'New Cruise Ships',
        description: 'See what is available aboard the newest ships, from next-generation entertainment to fresh dining and accommodation concepts.',
        image: NEW_CRUISE_SHIPS,
        highlights: ['Newest ships', 'Latest experiences', 'Modern staterooms']
      },
      {
        id: 'solo-cruises',
        title: 'Solo Cruises',
        description: 'Explore solo-friendly ships, dedicated studio accommodations, and sailings with reduced single supplements when available.',
        image: SOLO_CRUISES,
        highlights: ['Solo staterooms', 'Social spaces', 'Single-traveler options']
      }
    ]
  },
  {
    id: 'resort-deals',
    label: 'Resort Deals',
    background: '#2FE0C0',
    foreground: '#0E1035',
    stories: [
      {
        id: 'all-resort-deals',
        title: 'All Resort Deals',
        description: 'Explore current resort promotions for romantic escapes, family vacations, all-inclusive stays, and luxury getaways.',
        image: RESORT_DEALS,
        highlights: ['All-inclusive options', 'Couples and families', 'Worldwide resorts']
      }
    ]
  },
  {
    id: 'tour-deals',
    label: 'Tour Deals',
    background: '#E8A73D',
    foreground: '#0E1035',
    stories: [
      {
        id: 'all-tour-deals',
        title: 'All Tour Deals',
        description: 'Discover available savings across guided tours, custom trips, rail journeys, safaris, and immersive local experiences.',
        image: TOUR_DEALS,
        highlights: ['Guided journeys', 'Rail and safari options', 'Curated itineraries']
      }
    ]
  },
  {
    id: 'military-deals',
    label: 'Military Deals',
    background: '#4136EA',
    foreground: '#FFFFFF',
    stories: [
      {
        id: 'all-military-deals',
        title: 'All Military Deals',
        description: 'Review eligible military travel offers across cruises, resorts, and vacation packages, with current terms confirmed before booking.',
        image: MILITARY_DEALS,
        highlights: ['Eligibility guidance', 'Multiple vacation types', 'Current terms confirmed']
      }
    ]
  }
];

const resolveInitialSelection = (value?: string) => {
  const aliases: Record<string, { groupId: DealGroupKey; storyId: string }> = {
    all: { groupId: 'cruise-deals', storyId: 'all-cruise-deals' },
    cruise: { groupId: 'cruise-deals', storyId: 'all-cruise-deals' },
    resort: { groupId: 'resort-deals', storyId: 'all-resort-deals' },
    military: { groupId: 'military-deals', storyId: 'all-military-deals' },
    'all-cruise-deals': { groupId: 'cruise-deals', storyId: 'all-cruise-deals' },
    groups: { groupId: 'cruise-deals', storyId: 'groups' },
    'honeymoon-cruises': { groupId: 'cruise-deals', storyId: 'honeymoon-cruises' },
    'holiday-cruises': { groupId: 'cruise-deals', storyId: 'holiday-cruises' },
    'weekend-cruises': { groupId: 'cruise-deals', storyId: 'weekend-cruises' },
    'balcony-cabins-suites': { groupId: 'cruise-deals', storyId: 'balcony-cabins-suites' },
    'family-cruises': { groupId: 'cruise-deals', storyId: 'family-cruises' },
    'new-cruise-ships': { groupId: 'cruise-deals', storyId: 'new-cruise-ships' },
    'solo-cruises': { groupId: 'cruise-deals', storyId: 'solo-cruises' },
    'all-resort-deals': { groupId: 'resort-deals', storyId: 'all-resort-deals' },
    'all-tour-deals': { groupId: 'tour-deals', storyId: 'all-tour-deals' },
    'all-military-deals': { groupId: 'military-deals', storyId: 'all-military-deals' }
  };

  const selection = aliases[value || 'all'] || aliases.all;
  const group = DEAL_GROUPS.find((item) => item.id === selection.groupId) || DEAL_GROUPS[0];
  const storyIndex = Math.max(0, group.stories.findIndex((story) => story.id === selection.storyId));
  return { groupId: group.id, storyIndex };
};

export const DealsSection: React.FC<DealsSectionProps> = ({
  onOpenBookingModal,
  initialSubpage = 'all'
}) => {
  const initialSelection = resolveInitialSelection(initialSubpage);
  const [activeGroupId, setActiveGroupId] = useState<DealGroupKey>(initialSelection.groupId);
  const [activeStoryIndex, setActiveStoryIndex] = useState(initialSelection.storyIndex);

  const activeGroup = DEAL_GROUPS.find((group) => group.id === activeGroupId) || DEAL_GROUPS[0];
  const activeStory = activeGroup.stories[activeStoryIndex] || activeGroup.stories[0];

  const selectGroup = (groupId: DealGroupKey) => {
    setActiveGroupId(groupId);
    setActiveStoryIndex(0);
  };

  const selectStory = (storyIndex: number) => {
    setActiveStoryIndex(storyIndex);
  };

  const moveStory = (direction: -1 | 1) => {
    setActiveStoryIndex((current) =>
      (current + direction + activeGroup.stories.length) % activeGroup.stories.length
    );
  };

  return (
    <section id="deals-section" className="overflow-hidden bg-white py-20 sm:py-28">
      <div className="mx-auto w-full max-w-[1640px] px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="max-w-4xl">
          <span className="font-signature select-none text-3xl text-[#14ABFA] sm:text-4xl">
            A better way to find more value
          </span>
          <h2 className="editorial-title mt-1 text-3xl leading-tight text-[#0E1035] sm:text-5xl lg:text-6xl">
            VACATION DEALS, BEAUTIFULLY ORGANIZED
          </h2>
        </div>

        <div className="site-text-tab-row mt-10 flex overflow-x-auto pb-2 scrollbar-none" role="tablist" aria-label="Deal categories">
          {DEAL_GROUPS.map((group) => (
            <button
              key={group.id}
              type="button"
              role="tab"
              aria-selected={activeGroupId === group.id}
              onClick={() => selectGroup(group.id)}
              className={`site-text-tab site-text-tab--primary ${activeGroupId === group.id ? 'is-active' : ''}`}
            >
              {group.label}
            </button>
          ))}
        </div>

        <div className="site-text-tab-row site-text-tab-row--secondary flex overflow-x-auto pb-2 scrollbar-none" role="tablist" aria-label={`${activeGroup.label} types`}>
          {activeGroup.stories.map((story, index) => (
            <button
              key={story.id}
              type="button"
              role="tab"
              aria-selected={activeStoryIndex === index}
              onClick={() => selectStory(index)}
              className={`site-text-tab ${activeStoryIndex === index ? 'is-active' : ''}`}
            >
              {story.title}
            </button>
          ))}
        </div>

        <div className="relative mt-8 lg:min-h-[610px]">
          <div className="site-content-image-frame h-[390px] bg-[#0E1035] sm:h-[500px] lg:absolute lg:inset-y-0 lg:left-0 lg:h-[560px] lg:w-[68%]">
            <img
              key={activeStory.id}
              src={activeStory.image}
              alt={activeStory.title}
              className="h-full w-full animate-in object-cover fade-in zoom-in-[0.98] duration-500"
              referrerPolicy="no-referrer"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#0E1035]/10 via-transparent to-[#0E1035]/20" />
          </div>

          <div
            className="relative z-10 -mt-10 ml-4 min-h-[420px] p-7 sm:ml-8 sm:p-10 lg:absolute lg:right-0 lg:top-10 lg:mt-0 lg:flex lg:min-h-[480px] lg:w-[42%] lg:flex-col lg:justify-center lg:p-12 xl:p-14"
            style={{ backgroundColor: activeGroup.background, color: activeGroup.foreground }}
          >
            <span
              className="pointer-events-none absolute right-7 top-2 text-[82px] font-bold leading-none opacity-10 sm:text-[112px]"
              aria-hidden="true"
            >
              {String(activeStoryIndex + 1).padStart(2, '0')}
            </span>

            <p className="relative text-[10px] font-semibold uppercase tracking-[0.18em] opacity-75 sm:text-xs">
              {activeGroup.label} · {String(activeStoryIndex + 1).padStart(2, '0')} / {String(activeGroup.stories.length).padStart(2, '0')}
            </p>
            <h3 className="relative mt-5 text-3xl font-bold leading-[1.02] tracking-tight sm:text-4xl xl:text-5xl">
              {activeStory.title}
            </h3>
            <p className="relative mt-5 max-w-lg text-sm font-normal leading-relaxed opacity-85 sm:text-base">
              {activeStory.description}
            </p>

            <div className="relative mt-6 flex flex-wrap gap-2">
              {activeStory.highlights.map((highlight) => (
                <span
                  key={highlight}
                  className="rounded-full bg-white/80 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.08em] text-[#0E1035]"
                >
                  {highlight}
                </span>
              ))}
            </div>

            <button
              type="button"
              disabled
              aria-disabled="true"
              className="card-action-link relative mt-8 opacity-50 cursor-not-allowed pointer-events-none"
              style={{ color: activeGroup.foreground }}
            >
              Explore {activeStory.title}
            </button>

            {activeGroup.stories.length > 1 && (
              <div className="relative mt-9 flex items-center gap-3">
                <div className="mr-auto flex items-center gap-2" aria-hidden="true">
                  {activeGroup.stories.map((story, index) => (
                    <span
                      key={story.id}
                      className={`h-1.5 rounded-full transition-all duration-300 ${activeStoryIndex === index ? 'w-8 bg-current opacity-100' : 'w-2 bg-current opacity-25'}`}
                    />
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() => moveStory(-1)}
                  aria-label="Previous deal type"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-xl font-medium text-[#0E1035] transition-transform hover:-translate-x-1 cursor-pointer"
                >
                  ←
                </button>
                <button
                  type="button"
                  onClick={() => moveStory(1)}
                  aria-label="Next deal type"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-xl font-medium text-[#0E1035] transition-transform hover:translate-x-1 cursor-pointer"
                >
                  →
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

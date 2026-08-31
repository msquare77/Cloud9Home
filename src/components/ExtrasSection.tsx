import React, { useState } from 'react';

interface ExtrasSectionProps {
  onOpenBookingModal: (dealTitle?: string) => void;
  initialSubpage?: string;
}

type ExtraGroupKey = 'videos' | 'brochures' | 'romance-travel' | 'vacation-extras';

interface ExtraStory {
  id: string;
  title: string;
  description: string;
  image: string;
  action: string;
  highlights: string[];
}

interface ExtraGroup {
  id: ExtraGroupKey;
  label: string;
  background: string;
  foreground: string;
  stories: ExtraStory[];
}

const VIDEO_IMAGE = new URL('../../assets/magnific/hero-cruise.png', import.meta.url).href;
const BROCHURE_IMAGE = 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1600&q=84';
const WEDDING_IMAGE = 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1600&q=84';
const HONEYMOON_IMAGE = new URL('../../assets/magnific/resort-3.jpg', import.meta.url).href;
const EXCURSION_IMAGE = 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1600&q=84';
const INSURANCE_IMAGE = 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1600&q=84';
const FLIGHTS_CARS_IMAGE = 'https://images.unsplash.com/photo-1483450388369-9ed95738483c?auto=format&fit=crop&w=1600&q=84';

const EXTRA_GROUPS: ExtraGroup[] = [
  {
    id: 'videos',
    label: 'Videos',
    background: '#14ABFA',
    foreground: '#0E1035',
    stories: [
      {
        id: 'videos',
        title: 'Videos',
        description: 'Step inside ships, resorts, and destinations through a curated collection of vacation videos and visual travel inspiration.',
        image: VIDEO_IMAGE,
        action: 'Explore Videos',
        highlights: ['Ship walkthroughs', 'Resort inspiration', 'Destination previews']
      }
    ]
  },
  {
    id: 'brochures',
    label: 'Brochures',
    background: '#4136EA',
    foreground: '#FFFFFF',
    stories: [
      {
        id: 'brochures',
        title: 'Brochures',
        description: 'Browse digital vacation brochures, destination guides, ship information, and planning materials before choosing your journey.',
        image: BROCHURE_IMAGE,
        action: 'Browse Brochures',
        highlights: ['Destination guides', 'Ship information', 'Planning resources']
      }
    ]
  },
  {
    id: 'romance-travel',
    label: 'Romance Travel',
    background: '#E8A73D',
    foreground: '#0E1035',
    stories: [
      {
        id: 'destination-weddings',
        title: 'Destination Weddings',
        description: 'Bring your celebration somewhere unforgettable with coordinated travel, guest accommodations, and destination planning support.',
        image: WEDDING_IMAGE,
        action: 'Plan a Destination Wedding',
        highlights: ['Guest coordination', 'Resort and venue guidance', 'Celebration travel planning']
      },
      {
        id: 'honeymoon-registry',
        title: 'Honeymoon Registry',
        description: 'Create a honeymoon gift registry so friends and family can contribute toward meaningful experiences on your journey together.',
        image: HONEYMOON_IMAGE,
        action: 'Start a Honeymoon Registry',
        highlights: ['Gift contributions', 'Experience upgrades', 'Personalized planning']
      }
    ]
  },
  {
    id: 'vacation-extras',
    label: 'Vacation Extras',
    background: '#2FE0C0',
    foreground: '#0E1035',
    stories: [
      {
        id: 'shore-excursions',
        title: 'Shore Excursions',
        description: 'Add memorable experiences ashore, from cultural discoveries and scenic tours to active adventures and private day trips.',
        image: EXCURSION_IMAGE,
        action: 'Explore Shore Excursions',
        highlights: ['Local experiences', 'Private and group options', 'Port-day planning']
      },
      {
        id: 'travel-insurance',
        title: 'Travel Insurance',
        description: 'Ask about available travel protection options for cancellations, interruptions, medical needs, baggage, and unexpected delays.',
        image: INSURANCE_IMAGE,
        action: 'Ask About Travel Insurance',
        highlights: ['Trip protection options', 'Medical coverage guidance', 'Travel assistance']
      },
      {
        id: 'flights-car-rentals',
        title: 'Flights & Car Rentals',
        description: 'Coordinate the transportation around your vacation with flight and car-rental options that fit the rest of your itinerary.',
        image: FLIGHTS_CARS_IMAGE,
        action: 'Arrange Flights & Car Rentals',
        highlights: ['Flight coordination', 'Car-rental options', 'Itinerary alignment']
      }
    ]
  }
];

const resolveInitialSelection = (value?: string) => {
  const aliases: Record<string, { groupId: ExtraGroupKey; storyId: string }> = {
    all: { groupId: 'videos', storyId: 'videos' },
    videos: { groupId: 'videos', storyId: 'videos' },
    brochures: { groupId: 'brochures', storyId: 'brochures' },
    registry: { groupId: 'romance-travel', storyId: 'honeymoon-registry' },
    'destination-weddings': { groupId: 'romance-travel', storyId: 'destination-weddings' },
    'honeymoon-registry': { groupId: 'romance-travel', storyId: 'honeymoon-registry' },
    excursions: { groupId: 'vacation-extras', storyId: 'shore-excursions' },
    'shore-excursions': { groupId: 'vacation-extras', storyId: 'shore-excursions' },
    insurance: { groupId: 'vacation-extras', storyId: 'travel-insurance' },
    'travel-insurance': { groupId: 'vacation-extras', storyId: 'travel-insurance' },
    flights_hotels: { groupId: 'vacation-extras', storyId: 'flights-car-rentals' },
    'flights-car-rentals': { groupId: 'vacation-extras', storyId: 'flights-car-rentals' }
  };

  const selection = aliases[value || 'all'] || aliases.all;
  const group = EXTRA_GROUPS.find((item) => item.id === selection.groupId) || EXTRA_GROUPS[0];
  const storyIndex = Math.max(0, group.stories.findIndex((story) => story.id === selection.storyId));
  return { groupId: group.id, storyIndex };
};

export const ExtrasSection: React.FC<ExtrasSectionProps> = ({
  onOpenBookingModal,
  initialSubpage = 'all'
}) => {
  const initialSelection = resolveInitialSelection(initialSubpage);
  const [activeGroupId, setActiveGroupId] = useState<ExtraGroupKey>(initialSelection.groupId);
  const [activeStoryIndex, setActiveStoryIndex] = useState(initialSelection.storyIndex);

  const activeGroup = EXTRA_GROUPS.find((group) => group.id === activeGroupId) || EXTRA_GROUPS[0];
  const activeStory = activeGroup.stories[activeStoryIndex] || activeGroup.stories[0];

  const selectGroup = (groupId: ExtraGroupKey) => {
    setActiveGroupId(groupId);
    setActiveStoryIndex(0);
  };

  const moveStory = (direction: -1 | 1) => {
    setActiveStoryIndex((current) =>
      (current + direction + activeGroup.stories.length) % activeGroup.stories.length
    );
  };

  return (
    <section id="extras-section" className="overflow-hidden bg-white py-20 sm:py-28">
      <div className="mx-auto w-full max-w-[1640px] px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="max-w-4xl">
          <span className="font-signature block select-none text-3xl text-[#14ABFA] sm:text-4xl">
            Everything around the journey
          </span>
          <h2 className="editorial-title mt-1 text-3xl leading-tight text-[#0E1035] sm:text-5xl lg:text-6xl">
            YOUR TRAVEL TOOLKIT
          </h2>
          <p className="mt-4 max-w-2xl text-sm font-normal leading-relaxed text-[#0E1035]/70 sm:text-base">
            Find inspiration, plan a meaningful celebration, and organize the details that make the entire vacation feel seamless.
          </p>
        </div>

        <div className="site-text-tab-row mt-10 flex overflow-x-auto pb-2 scrollbar-none" role="tablist" aria-label="Travel extra categories">
          {EXTRA_GROUPS.map((group) => (
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

        <div className="site-text-tab-row site-text-tab-row--secondary flex overflow-x-auto pb-2 scrollbar-none" role="tablist" aria-label={`${activeGroup.label} services`}>
          {activeGroup.stories.map((story, index) => (
            <button
              key={story.id}
              type="button"
              role="tab"
              aria-selected={activeStoryIndex === index}
              onClick={() => setActiveStoryIndex(index)}
              className={`site-text-tab ${activeStoryIndex === index ? 'is-active' : ''}`}
            >
              {story.title}
            </button>
          ))}
        </div>

        <div
          className="relative mt-8 overflow-hidden px-6 py-9 transition-colors duration-500 sm:px-10 sm:py-12 lg:min-h-[560px] lg:px-14 lg:py-14"
          style={{ backgroundColor: activeGroup.background, color: activeGroup.foreground }}
        >
          <span
            className="pointer-events-none absolute -right-2 -top-9 text-[150px] font-bold leading-none opacity-[0.07] sm:text-[220px]"
            aria-hidden="true"
          >
            {String(activeStoryIndex + 1).padStart(2, '0')}
          </span>

          <div className="relative grid items-center gap-10 lg:grid-cols-[minmax(280px,0.8fr)_minmax(0,1.35fr)] lg:gap-14">
            <div className="max-w-xl">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] opacity-70 sm:text-xs">
                {activeGroup.label} · {String(activeStoryIndex + 1).padStart(2, '0')} / {String(activeGroup.stories.length).padStart(2, '0')}
              </p>
              <h3 className="mt-5 text-3xl font-bold leading-[1.02] tracking-tight sm:text-4xl xl:text-5xl" style={{ color: activeGroup.foreground }}>
                {activeStory.title}
              </h3>
              <p className="mt-5 text-sm font-normal leading-relaxed opacity-82 sm:text-base">
                {activeStory.description}
              </p>

              <div className="mt-7 space-y-2.5">
                {activeStory.highlights.map((highlight, index) => (
                  <div key={highlight} className="flex items-center gap-3 text-sm font-medium">
                    <span className="text-[10px] font-semibold opacity-55">0{index + 1}</span>
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>

              <button
                type="button"
                onClick={() => onOpenBookingModal(`Travel extra: ${activeStory.title}`)}
                className="card-action-link mt-8 cursor-pointer"
                style={{ color: activeGroup.foreground }}
              >
                {activeStory.action}
              </button>
            </div>

            <div>
              <div className="relative aspect-[16/9] overflow-hidden rounded-[999px] bg-[#0E1035]/10 sm:aspect-[2/1] lg:aspect-[1.6/1]">
                <img
                  key={activeStory.id}
                  src={activeStory.image}
                  alt={activeStory.title}
                  className="h-full w-full animate-in object-cover fade-in zoom-in-[0.98] duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#0E1035]/8 via-transparent to-white/8" />
              </div>

              {activeGroup.stories.length > 1 && (
                <div className="mt-6 flex items-center gap-3">
                  <div className="mr-auto flex items-center gap-2" aria-hidden="true">
                    {activeGroup.stories.map((story, index) => (
                      <span
                        key={story.id}
                        className={`h-1.5 rounded-full bg-current transition-all duration-300 ${activeStoryIndex === index ? 'w-8 opacity-100' : 'w-2 opacity-25'}`}
                      />
                    ))}
                  </div>
                  <button
                    type="button"
                    onClick={() => moveStory(-1)}
                    aria-label={`Previous ${activeGroup.label} service`}
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-xl font-normal text-[#0E1035] transition-transform hover:-translate-x-1 cursor-pointer"
                  >
                    ←
                  </button>
                  <button
                    type="button"
                    onClick={() => moveStory(1)}
                    aria-label={`Next ${activeGroup.label} service`}
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-xl font-normal text-[#0E1035] transition-transform hover:translate-x-1 cursor-pointer"
                  >
                    →
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import React, { useEffect, useMemo, useRef, useState } from 'react';
import { RESORTS_PACKAGES } from '../data/dreamVacationsData';

interface ResortsSectionProps {
  onOpenBookingModal: (dealTitle?: string) => void;
  initialSubpage?: string;
}

type ResortGroupKey = 'featured' | 'destinations' | 'theme-parks';

interface ResortStory {
  id: string;
  title: string;
  description: string;
  image: string;
}

interface ResortGroup {
  id: ResortGroupKey;
  label: string;
  background: string;
  foreground: string;
  stories: ResortStory[];
}

const resortImage = (id: string, fallback: string) =>
  RESORTS_PACKAGES.find(resort => resort.id === id)?.imageUrl || fallback;

const TROPICAL_COAST_IMAGE = new URL('../../assets/magnific/vacation-explorer.png', import.meta.url).href;
const SANDALS_IMAGE = resortImage('resort-sandals-royal-curacao', TROPICAL_COAST_IMAGE);
const ADULTS_ONLY_IMAGE = resortImage('resort-secrets-maroma-beach', TROPICAL_COAST_IMAGE);
const FAMILY_IMAGE = resortImage('resort-beaches-turks-caicos', TROPICAL_COAST_IMAGE);
const LUXURY_IMAGE = resortImage('resort-sandals-south-coast-overwater', TROPICAL_COAST_IMAGE);
const DISNEY_IMAGE = resortImage('resort-disney-grand-floridian', TROPICAL_COAST_IMAGE);
const UNIVERSAL_IMAGE = resortImage('resort-universal-helios-epic', TROPICAL_COAST_IMAGE);

const ALL_RESORTS = [
  'American Airlines Vacations',
  'Baglioni Hotels & Resorts',
  'Beaches Resorts',
  'Blue Sky Tours',
  'Breathless Resorts & Spas®',
  'Club Med',
  'Delta Vacations',
  'Disney Parks & Resorts',
  'Dreams® Resorts & Spas',
  'EVOKE Inspire',
  'Hard Rock Hotel & Casino',
  'Hyatt Vivid Hotels & Resorts',
  'Hyatt Ziva® & Zilara®',
  "Hyatt's Inclusive Collection",
  'Impression by Secrets',
  'Le Blanc Spa Resorts',
  'Moon Palace Resorts',
  'Palace Resorts',
  'Pleasant Holidays',
  'RIU Hotels & Resorts',
  'Sandals Resorts',
  'Secrets® Resorts & Spas',
  'Sunscape® Resorts & Spas',
  'Travel Impressions',
  'Universal Parks & Resorts Vacations',
  'Vacation Express',
  'Villas of Distinction',
  'Zoëtry® Wellness & Spa Resorts',
];

export const RESORT_GROUPS: ResortGroup[] = [
  {
    id: 'featured',
    label: 'Featured Resorts',
    background: '#2FE0C0',
    foreground: '#0E1035',
    stories: [
      {
        id: 'featured-all',
        title: 'All Resorts',
        description: 'Explore the complete collection of resort vacations available through Dream Vacations.',
        image: SANDALS_IMAGE,
      },
      {
        id: 'featured-adults',
        title: 'All Inclusive — Adults Only',
        description: 'Discover adults-only all-inclusive resorts created for relaxed and sophisticated getaways.',
        image: ADULTS_ONLY_IMAGE,
      },
      {
        id: 'featured-family',
        title: 'All Inclusive — Family Friendly',
        description: 'Explore family-friendly all-inclusive resorts with experiences for travelers of every age.',
        image: FAMILY_IMAGE,
      },
      {
        id: 'featured-luxury',
        title: 'Luxury Resorts',
        description: 'Discover luxury resort stays with refined accommodations, thoughtful service, and exceptional settings.',
        image: LUXURY_IMAGE,
      },
    ],
  },
  {
    id: 'destinations',
    label: 'Resort Destinations',
    background: '#14ABFA',
    foreground: '#0E1035',
    stories: [
      {
        id: 'dest-caribbean',
        title: 'Caribbean',
        description: 'Explore resort vacations across the Caribbean and its celebrated island destinations.',
        image: SANDALS_IMAGE,
      },
      {
        id: 'dest-hawaii',
        title: 'Hawaii',
        description: 'Discover Hawaiian resort vacations shaped by dramatic coastlines and tropical scenery.',
        image: TROPICAL_COAST_IMAGE,
      },
      {
        id: 'dest-mexico',
        title: 'Mexico',
        description: 'Explore resort vacations in Mexico, including Cancun, Riviera Maya, and other coastal favorites.',
        image: ADULTS_ONLY_IMAGE,
      },
    ],
  },
  {
    id: 'theme-parks',
    label: 'Theme Parks & Attractions',
    background: '#E8A73D',
    foreground: '#0E1035',
    stories: [
      {
        id: 'theme-disney',
        title: 'Disney Parks and Resorts',
        description: 'Discover Disney Parks and Resorts vacations with guidance from your Dream Vacations advisor.',
        image: DISNEY_IMAGE,
      },
      {
        id: 'theme-universal',
        title: 'Universal Studios Parks and Resorts',
        description: 'Explore Universal Studios Parks and Resorts vacations and stay close to the heart of the experience.',
        image: UNIVERSAL_IMAGE,
      },
    ],
  },
];

const resolveInitialSelection = (value?: string) => {
  const aliases: Record<string, string> = {
    all: 'featured-all',
    search: 'featured-all',
    'search-resorts': 'featured-all',
    mexico: 'dest-mexico',
    caribbean: 'dest-caribbean',
    adults_only: 'featured-adults',
    family_resorts: 'featured-family',
    theme_park_resorts: 'theme-disney',
    'dest-disney': 'theme-disney',
    'dest-universal': 'theme-universal',
    sandals_beaches: 'featured-all',
    overwater: 'featured-luxury',
  };
  const storyId = aliases[value || 'all'] || value || 'featured-all';

  for (const group of RESORT_GROUPS) {
    const storyIndex = group.stories.findIndex(story => story.id === storyId);
    if (storyIndex >= 0) return { groupId: group.id, storyIndex };
  }

  return { groupId: 'featured' as ResortGroupKey, storyIndex: 0 };
};

export const ResortsSection: React.FC<ResortsSectionProps> = ({
  onOpenBookingModal,
  initialSubpage,
}) => {
  const initialSelection = resolveInitialSelection(initialSubpage);
  const [activeGroupId, setActiveGroupId] = useState<ResortGroupKey>(initialSelection.groupId);
  const [activeStoryIndex, setActiveStoryIndex] = useState(initialSelection.storyIndex);
  const [resortQuery, setResortQuery] = useState('');
  const [searchOpen, setSearchOpen] = useState(false);
  const searchContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const closeSearchOnOutsideClick = (event: PointerEvent) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target as Node)) {
        setSearchOpen(false);
      }
    };

    document.addEventListener('pointerdown', closeSearchOnOutsideClick);
    return () => document.removeEventListener('pointerdown', closeSearchOnOutsideClick);
  }, []);

  const activeGroup = RESORT_GROUPS.find(group => group.id === activeGroupId) || RESORT_GROUPS[0];
  const activeStory = activeGroup.stories[activeStoryIndex] || activeGroup.stories[0];

  const filteredResorts = useMemo(() => {
    const query = resortQuery.trim().toLowerCase();
    return query ? ALL_RESORTS.filter(resort => resort.toLowerCase().includes(query)) : ALL_RESORTS;
  }, [resortQuery]);

  const selectGroup = (groupId: ResortGroupKey) => {
    setActiveGroupId(groupId);
    setActiveStoryIndex(0);
  };

  const moveStory = (direction: -1 | 1) => {
    setActiveStoryIndex(current =>
      (current + direction + activeGroup.stories.length) % activeGroup.stories.length
    );
  };

  const submitResortSearch = (event: React.FormEvent) => {
    event.preventDefault();
    if (!resortQuery.trim()) {
      setSearchOpen(true);
      return;
    }
    onOpenBookingModal(`Resort search: ${resortQuery.trim()}`);
    setSearchOpen(false);
  };

  return (
    <section id="resorts-section" className="py-20 sm:py-28 bg-[#F1F6FD] overflow-hidden">
      <div className="w-full max-w-[1640px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 lg:gap-10 items-end">
          <h2 className="editorial-title lg:col-span-7 text-3xl sm:text-5xl lg:text-6xl text-[#0E1035] leading-tight">
            ALL-INCLUSIVE RESORTS & GETAWAYS
          </h2>

          <div ref={searchContainerRef} className="lg:col-span-5 relative z-30">
            <form onSubmit={submitResortSearch}>
              <div className="relative flex-1">
                <label htmlFor="resort-search" className="sr-only">Search resorts</label>
                <input
                  id="resort-search"
                  value={resortQuery}
                  onFocus={() => setSearchOpen(true)}
                  onChange={event => { setResortQuery(event.target.value); setSearchOpen(true); }}
                  onKeyDown={event => {
                    if (event.key === 'Escape') {
                      setSearchOpen(false);
                      event.currentTarget.blur();
                    }
                  }}
                  placeholder="Search all resorts"
                  role="combobox"
                  aria-expanded={searchOpen}
                  aria-controls="resort-search-results"
                  className="site-search-field site-search-field--light"
                />
                <button
                  type="button"
                  onClick={() => setSearchOpen(open => !open)}
                  aria-label="Show all resorts"
                  aria-expanded={searchOpen}
                  className="absolute right-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full"
                >
                  <span className={`site-search-caret ${searchOpen ? 'is-open' : ''}`} aria-hidden="true">⌄</span>
                </button>
              </div>
            </form>

            {searchOpen && (
              <div id="resort-search-results" role="listbox" className="absolute inset-x-0 top-full mt-2 max-h-72 overflow-y-auto bg-white p-2">
                {filteredResorts.length > 0 ? filteredResorts.map(resort => (
                  <button
                    key={resort}
                    type="button"
                    role="option"
                    aria-selected={resortQuery === resort}
                    onMouseDown={event => event.preventDefault()}
                    onClick={() => { setResortQuery(resort); setSearchOpen(false); }}
                    className="w-full px-4 py-3 text-left text-sm font-medium text-[#0E1035] hover:bg-[#F1F6FD] hover:text-[#14ABFA] cursor-pointer transition-colors"
                  >
                    {resort}
                  </button>
                )) : (
                  <p className="px-4 py-5 text-sm text-[#0E1035]/60">No matching resorts found.</p>
                )}
              </div>
            )}
          </div>
        </div>

        <div className="site-text-tab-row mt-9 flex flex-wrap">
          {RESORT_GROUPS.map(group => {
            const isActive = activeGroupId === group.id;
            return (
              <button
                key={group.id}
                type="button"
                onClick={() => selectGroup(group.id)}
                  className={`site-text-tab site-text-tab--primary ${isActive ? 'is-active' : ''}`}
              >
                {group.label}
              </button>
            );
          })}
        </div>

        <div className="relative mt-7 lg:pb-[132px]">
          <div
            className="min-h-[410px] transition-colors duration-500"
            style={{ backgroundColor: activeGroup.background, color: activeGroup.foreground }}
          >
            <div className="lg:w-[42%] min-h-[410px] p-7 pb-20 sm:p-10 sm:pb-24 lg:p-12 xl:p-14 flex flex-col justify-center">
              <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.18em] opacity-75" style={{ color: activeGroup.foreground }}>
                {activeGroup.label} · {String(activeStoryIndex + 1).padStart(2, '0')} / {String(activeGroup.stories.length).padStart(2, '0')}
              </p>
              <h3 className="mt-5 text-3xl sm:text-4xl xl:text-5xl font-bold leading-[1.02] tracking-tight" style={{ color: activeGroup.foreground }}>
                {activeStory.title}
              </h3>
              <p className="mt-5 max-w-lg text-sm sm:text-base font-normal leading-relaxed opacity-85" style={{ color: activeGroup.foreground }}>
                {activeStory.description}
              </p>
              <button
                type="button"
                onClick={() => onOpenBookingModal(`Explore ${activeStory.title}`)}
                className="card-action-link resort-action-link mt-8 cursor-pointer"
                style={{ '--resort-action-color': activeGroup.foreground } as React.CSSProperties}
              >
                Explore {activeStory.title}
              </button>
            </div>
          </div>

          <div className="relative z-10 -mt-14 mx-4 sm:mx-7 lg:mx-0 lg:mt-0 lg:absolute lg:top-10 lg:right-[4%] lg:w-[55%]">
            <div className="site-content-image-frame relative h-[330px] sm:h-[430px] bg-[#0E1035]/10">
              <img
                key={activeStory.id}
                src={activeStory.image}
                alt={activeStory.title}
                className="w-full h-full object-cover animate-in fade-in zoom-in-[0.98] duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E1035]/18 via-transparent to-white/5 pointer-events-none" />
            </div>

            <div className="mt-5 flex items-center gap-3 px-1 text-[#0E1035]">
              <div className="mr-auto flex items-center gap-2" aria-hidden="true">
                {activeGroup.stories.map((story, index) => (
                  <span
                    key={story.id}
                    className={`h-1.5 rounded-full bg-[#0E1035] transition-all duration-300 ${index === activeStoryIndex ? 'w-8 opacity-100' : 'w-2 opacity-25'}`}
                  />
                ))}
              </div>
              <button
                type="button"
                onClick={() => moveStory(-1)}
                aria-label={`Previous ${activeGroup.label} subcategory`}
                className="w-12 h-12 rounded-full bg-white text-[#0E1035] flex items-center justify-center cursor-pointer transition-transform hover:-translate-x-1 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#14ABFA]/35"
              >
                <span className="text-2xl font-bold leading-none -mt-0.5" aria-hidden="true">←</span>
              </button>
              <button
                type="button"
                onClick={() => moveStory(1)}
                aria-label={`Next ${activeGroup.label} subcategory`}
                className="w-12 h-12 rounded-full bg-white text-[#0E1035] flex items-center justify-center cursor-pointer transition-transform hover:translate-x-1 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#14ABFA]/35"
              >
                <span className="text-2xl font-bold leading-none -mt-0.5" aria-hidden="true">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

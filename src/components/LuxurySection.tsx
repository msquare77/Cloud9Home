import React, { useEffect, useMemo, useRef, useState } from 'react';

interface LuxurySectionProps {
  onOpenBookingModal: (dealTitle?: string) => void;
  initialSubpage?: string;
}

type LuxuryGroupKey = 'cruises' | 'resorts-villas' | 'rail-safaris' | 'tours';

interface LuxuryStory {
  id: string;
  title: string;
  description: string;
  image: string;
}

interface LuxuryGroup {
  id: LuxuryGroupKey;
  label: string;
  background: string;
  foreground: string;
  stories: LuxuryStory[];
}

const LUXURY_ONE = new URL('../../assets/magnific/luxury-1.jpg', import.meta.url).href;
const LUXURY_THREE = new URL('../../assets/magnific/luxury-3.jpg', import.meta.url).href;
const LUXURY_RAIL = new URL('../../assets/magnific/tour-1.jpg', import.meta.url).href;
const LUXURY_SAFARI = 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1500&q=84';
const RIVER_CRUISE = new URL('../../assets/Cruises/optimized/ama-waterways.webp', import.meta.url).href;
const EXPEDITION_CRUISE = new URL('../../assets/Cruises/optimized/hx-expeditions.webp', import.meta.url).href;
const WORLD_CRUISE = new URL('../../assets/Cruises/optimized/viking-ocean-cruises.webp', import.meta.url).href;
const LUXURY_RESORT = new URL('../../assets/magnific/resort-1.jpg', import.meta.url).href;
const LUXURY_VILLA = new URL('../../assets/magnific/resort-3.jpg', import.meta.url).href;
const GUIDED_TOUR = new URL('../../assets/magnific/tour-2.jpg', import.meta.url).href;
const CUSTOM_TRIP = new URL('../../assets/magnific/tour-3.jpg', import.meta.url).href;

const LUXURY_CRUISE_PARTNERS = [
  'AMA Waterways',
  'American Cruise Line',
  'Atlas Ocean Voyages',
  'Avalon Waterways',
  'Azamara',
  'Celestyal Cruises',
  'Crystal Cruises',
  'Cunard Line',
  'Explora Journeys',
  'HX Expeditions',
  'Lindblad Expeditions',
  'Oceania Cruises',
  'Paul Gauguin Cruises',
  'Ponant',
  'Regent Seven Seas Cruises',
  'Ritz-Carlton Yacht Collection',
  'Riviera Travel',
  'Scenic Ocean Cruises',
  'Scenic River Cruises',
  'Seabourn Cruise Line',
  'SeaDream Yacht Club',
  'Silversea Cruises',
  'Star Clippers',
  'Uniworld Boutique River Cruises',
  'Victory Cruise Lines',
  'Viking Expedition Cruises',
  'Viking Ocean Cruises',
  'Viking River Cruises',
  'Windstar Cruises',
];

const LUXURY_RESORT_PARTNERS = [
  'American Airlines Vacations',
  'Baglioni Hotels & Resorts',
  'Breathless Resorts & Spas®',
  'Delta Vacations',
  'Dreams® Resorts & Spas',
  'EVOKE Inspire',
  "Hyatt's Inclusive Collection",
  'Impression by Secrets',
  'Le Blanc Spa Resorts',
  'Sandals Resorts',
  'Secrets® Resorts & Spas',
  'Travel Impressions',
  'Zoëtry® Wellness & Spa Resorts',
];

const LUXURY_TOUR_PARTNERS = [
  'Abercrombie and Kent',
  'Brendan Vacations',
  'Canyon Spirit',
  'CIE Tours',
  'Collette',
  'Cosmos',
  'Europe Express',
  'Exoticca',
  'Globus',
  'Goway',
  'Great Safaris',
  'Insight Vacations',
  'Kensington Tours',
  'Railbookers',
  'Rocky Mountaineer',
  'Tauck',
  'Trafalgar',
  'Viator Inc.',
  'Worldia',
];

const RAIL_SAFARI_PARTNERS = [
  'Canyon Spirit',
  'Goway',
  'Great Safaris',
  'Kensington Tours',
  'Railbookers',
  'Rocky Mountaineer',
];

const ALL_LUXURY_PARTNERS = Array.from(
  new Set([...LUXURY_CRUISE_PARTNERS, ...LUXURY_RESORT_PARTNERS, ...LUXURY_TOUR_PARTNERS]),
).sort((first, second) => first.localeCompare(second));

export const LUXURY_GROUPS: LuxuryGroup[] = [
  {
    id: 'cruises',
    label: 'Cruises',
    background: '#4136EA',
    foreground: '#FFFFFF',
    stories: [
      {
        id: 'all-luxury-cruises',
        title: 'All Luxury Cruises',
        description: 'Explore elegant ocean, river, expedition, and yacht-style voyages with exceptional dining, polished service, and valuable inclusions.',
        image: LUXURY_ONE,
      },
      {
        id: 'river-cruise-lines',
        title: 'River Cruise Lines',
        description: 'Sail through celebrated rivers and historic cities aboard intimate ships offering refined accommodations and immersive shore experiences.',
        image: RIVER_CRUISE,
      },
      {
        id: 'expedition-cruises',
        title: 'Expedition Cruises',
        description: 'Reach remote coastlines and remarkable wildlife with expert expedition teams, purpose-built ships, and elevated onboard comfort.',
        image: EXPEDITION_CRUISE,
      },
      {
        id: 'world-cruises',
        title: 'World Cruises',
        description: 'Experience an extended voyage across continents with thoughtfully connected destinations, enriching programs, and attentive service.',
        image: WORLD_CRUISE,
      },
    ],
  },
  {
    id: 'resorts-villas',
    label: 'Resorts & Villas',
    background: '#2FE0C0',
    foreground: '#0E1035',
    stories: [
      {
        id: 'all-luxury-resorts',
        title: 'All Luxury Resorts',
        description: 'Relax in five-star resort settings with gourmet cuisine, refined accommodations, personalized service, and carefully considered amenities.',
        image: LUXURY_RESORT,
      },
      {
        id: 'all-luxury-villas',
        title: 'All Luxury Villas',
        description: 'Discover private villa stays with elevated comforts, exceptional settings, and space designed entirely around your party.',
        image: LUXURY_VILLA,
      },
    ],
  },
  {
    id: 'rail-safaris',
    label: 'Rail & Safaris',
    background: '#E8A73D',
    foreground: '#0E1035',
    stories: [
      {
        id: 'all-rail',
        title: 'All Rail',
        description: 'See remarkable landscapes unfold from refined rail journeys pairing gracious service with iconic routes and destinations.',
        image: LUXURY_RAIL,
      },
      {
        id: 'all-safaris',
        title: 'All Safaris',
        description: 'Pair unforgettable wildlife encounters with expert guides, intimate lodges, and thoughtfully curated comfort in the wild.',
        image: LUXURY_SAFARI,
      },
    ],
  },
  {
    id: 'tours',
    label: 'Tours',
    background: '#14ABFA',
    foreground: '#0E1035',
    stories: [
      {
        id: 'all-tours',
        title: 'All Tours',
        description: 'Explore carefully planned journeys that connect remarkable destinations, cultural experiences, and expert local knowledge.',
        image: LUXURY_ONE,
      },
      {
        id: 'guided-tours',
        title: 'Guided Tours',
        description: 'Travel with an expert guide and a thoughtfully organized itinerary designed to make each destination easier to understand and enjoy.',
        image: GUIDED_TOUR,
      },
      {
        id: 'custom-trips',
        title: 'Custom Trips',
        description: 'Create a personalized itinerary tailored to your pace, interests, preferred accommodations, and most meaningful destinations.',
        image: CUSTOM_TRIP,
      },
      {
        id: 'day-tours',
        title: 'Day Tours',
        description: 'Add memorable local experiences, priority-access attractions, cultural discoveries, and flexible excursions to your vacation.',
        image: LUXURY_THREE,
      },
    ],
  },
];

const resolveInitialSelection = (value?: string) => {
  const aliases: Record<string, { groupId: LuxuryGroupKey; storyId: string }> = {
    all: { groupId: 'cruises', storyId: 'all-luxury-cruises' },
    'luxury-all': { groupId: 'cruises', storyId: 'all-luxury-cruises' },
    luxury_ocean: { groupId: 'cruises', storyId: 'all-luxury-cruises' },
    'all-luxury-cruises': { groupId: 'cruises', storyId: 'all-luxury-cruises' },
    luxury_river: { groupId: 'cruises', storyId: 'river-cruise-lines' },
    'river-cruise-lines': { groupId: 'cruises', storyId: 'river-cruise-lines' },
    'expedition-cruises': { groupId: 'cruises', storyId: 'expedition-cruises' },
    'world-cruises': { groupId: 'cruises', storyId: 'world-cruises' },
    luxury_villas: { groupId: 'resorts-villas', storyId: 'all-luxury-resorts' },
    'luxury-resorts': { groupId: 'resorts-villas', storyId: 'all-luxury-resorts' },
    'all-luxury-resorts': { groupId: 'resorts-villas', storyId: 'all-luxury-resorts' },
    yacht_charters: { groupId: 'resorts-villas', storyId: 'all-luxury-villas' },
    'luxury-villas': { groupId: 'resorts-villas', storyId: 'all-luxury-villas' },
    'all-luxury-villas': { groupId: 'resorts-villas', storyId: 'all-luxury-villas' },
    'luxury-rail': { groupId: 'rail-safaris', storyId: 'all-rail' },
    'all-rail': { groupId: 'rail-safaris', storyId: 'all-rail' },
    'luxury-safari': { groupId: 'rail-safaris', storyId: 'all-safaris' },
    'all-safaris': { groupId: 'rail-safaris', storyId: 'all-safaris' },
    'all-tours': { groupId: 'tours', storyId: 'all-tours' },
    'guided-tours': { groupId: 'tours', storyId: 'guided-tours' },
    bespoke: { groupId: 'tours', storyId: 'custom-trips' },
    'custom-trips': { groupId: 'tours', storyId: 'custom-trips' },
    'day-tours': { groupId: 'tours', storyId: 'day-tours' },
  };

  const selection = aliases[value || 'all'] || aliases.all;
  const group = LUXURY_GROUPS.find(item => item.id === selection.groupId) || LUXURY_GROUPS[0];
  const storyIndex = Math.max(0, group.stories.findIndex(story => story.id === selection.storyId));
  return { groupId: group.id, storyIndex };
};

export const LuxurySection: React.FC<LuxurySectionProps> = ({
  onOpenBookingModal,
  initialSubpage,
}) => {
  const initialSelection = resolveInitialSelection(initialSubpage);
  const [activeGroupId, setActiveGroupId] = useState<LuxuryGroupKey>(initialSelection.groupId);
  const [activeStoryIndex, setActiveStoryIndex] = useState(initialSelection.storyIndex);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchOpen, setSearchOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const closeSearch = (event: PointerEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setSearchOpen(false);
      }
    };
    document.addEventListener('pointerdown', closeSearch);
    return () => document.removeEventListener('pointerdown', closeSearch);
  }, []);

  const activeGroup = LUXURY_GROUPS.find(group => group.id === activeGroupId) || LUXURY_GROUPS[0];
  const activeStory = activeGroup.stories[activeStoryIndex] || activeGroup.stories[0];

  const searchOptions = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return query
      ? ALL_LUXURY_PARTNERS.filter(partner => partner.toLowerCase().includes(query))
      : ALL_LUXURY_PARTNERS;
  }, [searchQuery]);

  const selectGroup = (groupId: LuxuryGroupKey) => {
    setActiveGroupId(groupId);
    setActiveStoryIndex(0);
  };

  const moveStory = (direction: -1 | 1) => {
    setActiveStoryIndex(current =>
      (current + direction + activeGroup.stories.length) % activeGroup.stories.length,
    );
  };

  const selectPartner = (partner: string) => {
    setSearchQuery(partner);
    setSearchOpen(false);
    if (LUXURY_CRUISE_PARTNERS.includes(partner)) selectGroup('cruises');
    else if (LUXURY_RESORT_PARTNERS.includes(partner)) selectGroup('resorts-villas');
    else if (RAIL_SAFARI_PARTNERS.includes(partner)) selectGroup('rail-safaris');
    else if (LUXURY_TOUR_PARTNERS.includes(partner)) selectGroup('tours');
  };

  const submitSearch = (event: React.FormEvent) => {
    event.preventDefault();
    if (!searchQuery.trim()) {
      setSearchOpen(true);
      return;
    }
    onOpenBookingModal(`Luxury partner: ${searchQuery.trim()}`);
    setSearchOpen(false);
  };

  return (
    <section id="luxury-section" className="relative overflow-hidden bg-[#0E1035] py-20 text-white sm:py-28">
      <div className="pointer-events-none absolute right-1/4 top-0 h-[350px] w-[600px] rounded-full bg-[#14ABFA]/10 blur-[120px]" />

      <div className="relative z-10 mx-auto w-full max-w-[1640px] px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="max-w-5xl">
          <div>
            <span className="font-signature mb-1 block text-3xl text-[#14ABFA] sm:text-4xl">
              The Pinnacle of Sophistication
            </span>
            <h2 className="editorial-title text-3xl leading-tight text-white sm:text-5xl lg:text-6xl">
              ULTRA-LUXURY VACATIONS &amp; CHARTERS
            </h2>
          </div>

          <div ref={searchRef} className="hidden">
            <form onSubmit={submitSearch}>
              <div className="relative">
                <label htmlFor="luxury-partner-search" className="sr-only">Search luxury partners</label>
                <input
                  id="luxury-partner-search"
                  value={searchQuery}
                  onFocus={() => setSearchOpen(true)}
                  onChange={event => { setSearchQuery(event.target.value); setSearchOpen(true); }}
                  onKeyDown={event => {
                    if (event.key === 'Escape') {
                      setSearchOpen(false);
                      event.currentTarget.blur();
                    }
                  }}
                  placeholder="Search luxury partners"
                  role="combobox"
                  aria-expanded={searchOpen}
                  aria-controls="luxury-search-results"
                  className="site-search-field site-search-field--light"
                />
                <button
                  type="button"
                  onClick={() => setSearchOpen(open => !open)}
                  aria-label="Show all luxury partners"
                  aria-expanded={searchOpen}
                  className="absolute right-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full"
                >
                  <span className={`site-search-caret ${searchOpen ? 'is-open' : ''}`} aria-hidden="true">⌄</span>
                </button>
              </div>
            </form>

            {searchOpen && (
              <div id="luxury-search-results" role="listbox" className="absolute inset-x-0 top-full mt-2 max-h-72 overflow-y-auto bg-white p-2 text-[#0E1035]">
                {searchOptions.length > 0 ? searchOptions.map(partner => (
                  <button
                    key={partner}
                    type="button"
                    role="option"
                    aria-selected={searchQuery === partner}
                    onMouseDown={event => event.preventDefault()}
                    onClick={() => selectPartner(partner)}
                    className="w-full px-4 py-3 text-left text-sm font-medium transition-colors hover:bg-[#F1F6FD] hover:text-[#14ABFA]"
                  >
                    {partner}
                  </button>
                )) : (
                  <p className="px-4 py-5 text-sm text-[#0E1035]/60">No matching luxury partner found.</p>
                )}
              </div>
            )}
          </div>
        </div>

        <div className="site-text-tab-row mt-9 flex flex-wrap">
          {LUXURY_GROUPS.map(group => {
            const isActive = activeGroupId === group.id;
            return (
              <button
                key={group.id}
                type="button"
                onClick={() => selectGroup(group.id)}
                className={`site-text-tab site-text-tab--dark ${isActive ? 'is-active' : ''}`}
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
            <div className="flex min-h-[410px] flex-col justify-center p-7 pb-20 sm:p-10 sm:pb-24 lg:w-[42%] lg:p-12 xl:p-14">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] opacity-75 sm:text-xs" style={{ color: activeGroup.foreground }}>
                {activeGroup.label} · {String(activeStoryIndex + 1).padStart(2, '0')} / {String(activeGroup.stories.length).padStart(2, '0')}
              </p>
              <h3 className="mt-5 text-3xl font-bold leading-[1.02] tracking-tight sm:text-4xl xl:text-5xl" style={{ color: activeGroup.foreground }}>
                {activeStory.title}
              </h3>
              <p className="mt-5 max-w-lg text-sm font-normal leading-relaxed opacity-85 sm:text-base" style={{ color: activeGroup.foreground }}>
                {activeStory.description}
              </p>
              <button
                type="button"
                disabled
                aria-disabled="true"
                className="card-action-link mt-8 opacity-50 cursor-not-allowed pointer-events-none"
                style={{ color: activeGroup.foreground }}
              >
                Explore {activeStory.title}
              </button>
            </div>
          </div>

          <div className="relative z-10 -mt-14 mx-4 sm:mx-7 lg:absolute lg:right-[4%] lg:top-10 lg:mt-0 lg:w-[55%]">
            <div className="site-content-image-frame relative h-[330px] bg-[#0E1035]/10 sm:h-[430px]">
              <img
                key={activeStory.id}
                src={activeStory.image}
                alt={activeStory.title}
                className="h-full w-full animate-in object-cover fade-in zoom-in-[0.98] duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0E1035]/18 via-transparent to-white/5" />
            </div>

            <div className="mt-5 flex items-center gap-3 px-1 text-white">
              <div className="mr-auto flex items-center gap-2" aria-hidden="true">
                {activeGroup.stories.map((story, index) => (
                  <span
                    key={story.id}
                    className={`h-1.5 rounded-full bg-white transition-all duration-300 ${index === activeStoryIndex ? 'w-8 opacity-100' : 'w-2 opacity-30'}`}
                  />
                ))}
              </div>

              {activeGroup.stories.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={() => moveStory(-1)}
                    aria-label={`Previous ${activeGroup.label} subcategory`}
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#0E1035] transition-transform hover:-translate-x-1 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#14ABFA]/35"
                  >
                    <span className="-mt-0.5 text-2xl font-bold leading-none" aria-hidden="true">←</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => moveStory(1)}
                    aria-label={`Next ${activeGroup.label} subcategory`}
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#0E1035] transition-transform hover:translate-x-1 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#14ABFA]/35"
                  >
                    <span className="-mt-0.5 text-2xl font-bold leading-none" aria-hidden="true">→</span>
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

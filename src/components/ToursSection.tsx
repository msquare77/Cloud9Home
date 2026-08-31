import React, { useEffect, useMemo, useRef, useState } from 'react';

interface ToursSectionProps {
  onOpenBookingModal: (dealTitle?: string) => void;
  initialSubpage?: string;
}

type TourSubcategoryKey = 'all' | 'guided' | 'custom' | 'day' | 'rail' | 'safari';
type TourCategoryKey = 'tours' | 'rail' | 'safaris';

interface TourSubcategory {
  id: TourSubcategoryKey;
  label: string;
}

export const TOUR_IMAGES = [
  '/assets/magnific/tour-1.jpg',
  '/assets/magnific/tour-2.jpg',
  '/assets/magnific/tour-3.jpg',
  'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=82',
  'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1200&q=82',
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=82',
  'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=82'
];

export const PARTNERS_BY_SUBCATEGORY: Record<TourSubcategoryKey, string[]> = {
  all: [
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
    'Worldia'
  ],
  guided: [
    'Abercrombie and Kent',
    'Brendan Vacations',
    'Canyon Spirit',
    'CIE Tours',
    'Collette',
    'Cosmos',
    'Exoticca',
    'Globus',
    'Insight Vacations',
    'Rocky Mountaineer',
    'Tauck',
    'Trafalgar',
    'Viator Inc.',
    'Worldia'
  ],
  custom: [
    'Abercrombie and Kent',
    'Brendan Vacations',
    'CIE Tours',
    'Europe Express',
    'Exoticca',
    'Globus',
    'Goway',
    'Great Safaris',
    'Insight Vacations',
    'Kensington Tours',
    'Railbookers',
    'Trafalgar',
    'Worldia'
  ],
  day: [
    'TourSales.com',
    'Viator Inc.',
    'Worldia'
  ],
  rail: [
    'Abercrombie and Kent',
    'Canyon Spirit',
    'Goway',
    'Great Safaris',
    'Railbookers',
    'Rocky Mountaineer',
    'Tauck',
    'Trafalgar',
    'Worldia'
  ],
  safari: [
    'Abercrombie and Kent',
    'Collette',
    'Exoticca',
    'Goway',
    'Great Safaris',
    'Kensington Tours',
    'Tauck',
    'Trafalgar',
    'Worldia'
  ]
};

export const TOUR_CATEGORIES: { id: TourCategoryKey; label: string; subcategories: TourSubcategory[] }[] = [
  {
    id: 'tours',
    label: 'Tours',
    subcategories: [
      { id: 'all', label: 'All Tours' },
      { id: 'guided', label: 'Guided Tours' },
      { id: 'custom', label: 'Custom Trips' },
      { id: 'day', label: 'Day Tours' }
    ]
  },
  {
    id: 'rail',
    label: 'Rail',
    subcategories: [{ id: 'rail', label: 'All Rail' }]
  },
  {
    id: 'safaris',
    label: 'Safaris',
    subcategories: [{ id: 'safari', label: 'All Safaris' }]
  }
];

export const SUBCATEGORY_LABELS: Record<TourSubcategoryKey, string> = {
  all: 'All Tours',
  guided: 'Guided Tours',
  custom: 'Custom Trips',
  day: 'Day Tours',
  rail: 'All Rail',
  safari: 'All Safaris'
};

const ALL_PARTNERS = Array.from(new Set(Object.values(PARTNERS_BY_SUBCATEGORY).flat()))
  .sort((first, second) => first.localeCompare(second));

const normalizeInitialSubcategory = (value?: string): TourSubcategoryKey => {
  if (value === 'guided') return 'guided';
  if (value === 'custom') return 'custom';
  if (value === 'day' || value === 'day_tours') return 'day';
  if (value === 'rail' || value === 'all_rail') return 'rail';
  if (value === 'safari' || value === 'safaris' || value === 'all_safaris') return 'safari';
  return 'all';
};

const categoryForSubcategory = (subcategory: TourSubcategoryKey): TourCategoryKey => {
  if (subcategory === 'rail') return 'rail';
  if (subcategory === 'safari') return 'safaris';
  return 'tours';
};

export const ToursSection: React.FC<ToursSectionProps> = ({
  onOpenBookingModal,
  initialSubpage
}) => {
  const initialSubcategory = normalizeInitialSubcategory(initialSubpage);
  const [activeCategory, setActiveCategory] = useState<TourCategoryKey>(() => categoryForSubcategory(initialSubcategory));
  const [activeSubcategory, setActiveSubcategory] = useState<TourSubcategoryKey>(initialSubcategory);
  const [expanded, setExpanded] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPartner, setSelectedPartner] = useState<string | null>(null);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const closeSearch = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setSearchOpen(false);
      }
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSearchOpen(false);
    };
    document.addEventListener('mousedown', closeSearch);
    document.addEventListener('keydown', closeOnEscape);
    return () => {
      document.removeEventListener('mousedown', closeSearch);
      document.removeEventListener('keydown', closeOnEscape);
    };
  }, []);

  const searchOptions = useMemo(() => {
    const normalizedQuery = searchQuery.trim().toLowerCase();
    if (!normalizedQuery || selectedPartner === searchQuery) return ALL_PARTNERS;
    return ALL_PARTNERS.filter(partner => partner.toLowerCase().includes(normalizedQuery));
  }, [searchQuery, selectedPartner]);

  const currentPartners = PARTNERS_BY_SUBCATEGORY[activeSubcategory];
  const filteredPartners = selectedPartner
    ? currentPartners.filter(partner => partner === selectedPartner)
    : currentPartners;
  const visiblePartners = expanded ? filteredPartners : filteredPartners.slice(0, 3);

  const selectCategory = (category: TourCategoryKey) => {
    const nextSubcategory = TOUR_CATEGORIES.find(item => item.id === category)?.subcategories[0].id ?? 'all';
    setActiveCategory(category);
    setActiveSubcategory(nextSubcategory);
    setExpanded(false);
    setSelectedPartner(null);
    setSearchQuery('');
  };

  const selectSubcategory = (subcategory: TourSubcategoryKey) => {
    setActiveSubcategory(subcategory);
    setExpanded(false);
    setSelectedPartner(null);
    setSearchQuery('');
  };

  const selectPartner = (partner: string) => {
    let nextSubcategory = activeSubcategory;
    if (!PARTNERS_BY_SUBCATEGORY[nextSubcategory].includes(partner)) {
      nextSubcategory = (Object.keys(PARTNERS_BY_SUBCATEGORY) as TourSubcategoryKey[])
        .find(key => PARTNERS_BY_SUBCATEGORY[key].includes(partner)) ?? 'all';
    }
    setActiveSubcategory(nextSubcategory);
    setActiveCategory(categoryForSubcategory(nextSubcategory));
    setSelectedPartner(partner);
    setSearchQuery(partner);
    setExpanded(true);
    setSearchOpen(false);
  };

  return (
    <section id="tours-section" className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto w-full max-w-[1640px] px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="editorial-title max-w-5xl text-3xl leading-tight text-[#0E1035] sm:text-5xl lg:text-6xl">
            GUIDED WORLD TOURS &amp; SAFARIS
          </h2>

          <div ref={searchRef} className="relative w-full lg:w-[390px]">
            <div className="relative">
              <input
                id="tour-partner-search"
                type="text"
                value={searchQuery}
                placeholder="Search all tour partners"
                autoComplete="off"
                onFocus={() => setSearchOpen(true)}
                onChange={event => {
                  setSearchQuery(event.target.value);
                  setSelectedPartner(null);
                  setSearchOpen(true);
                }}
                className="site-search-field"
              />
              <button
                type="button"
                onClick={() => setSearchOpen(open => !open)}
                aria-label="Show all tour partners"
                aria-expanded={searchOpen}
                className="absolute right-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full text-lg text-[#0E1035]"
              >
                <span className={`site-search-caret ${searchOpen ? 'is-open' : ''}`} aria-hidden="true">⌄</span>
              </button>
            </div>

            {searchOpen && (
              <div className="absolute right-0 top-full z-30 mt-2 max-h-80 w-full overflow-y-auto rounded-2xl bg-white py-2 shadow-[0_18px_45px_rgba(14,16,53,0.14)]">
                {searchOptions.length > 0 ? searchOptions.map(partner => (
                  <button
                    key={partner}
                    type="button"
                    onClick={() => selectPartner(partner)}
                    className="block w-full px-5 py-2.5 text-left text-sm font-normal text-[#0E1035] transition-colors hover:bg-[#F1F6FD] hover:text-[#14ABFA]"
                  >
                    {partner}
                  </button>
                )) : (
                  <p className="px-5 py-4 text-sm font-normal text-[#0E1035]/60">No tour partner found.</p>
                )}
              </div>
            )}
          </div>
        </div>

        <div className="site-text-tab-row mt-10 flex overflow-x-auto pb-2 scrollbar-none" role="tablist" aria-label="Tour categories">
          {TOUR_CATEGORIES.map(category => {
            const isActive = activeCategory === category.id;
            return (
              <button
                key={category.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => selectCategory(category.id)}
                className={`site-text-tab site-text-tab--primary ${isActive ? 'is-active' : ''}`}
              >
                {category.label}
              </button>
            );
          })}
        </div>

        <div className="site-text-tab-row site-text-tab-row--secondary flex overflow-x-auto pb-2 scrollbar-none" role="tablist" aria-label={`${activeCategory} subcategories`}>
          {TOUR_CATEGORIES.find(category => category.id === activeCategory)?.subcategories.map(subcategory => {
            const isActive = activeSubcategory === subcategory.id;
            return (
              <button
                key={subcategory.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => selectSubcategory(subcategory.id)}
                className={`site-text-tab ${isActive ? 'is-active' : ''}`}
              >
                {subcategory.label}
              </button>
            );
          })}
        </div>

        <div className="mt-9 grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {visiblePartners.map((partner, index) => (
            <button
              key={`${activeSubcategory}-${partner}`}
              type="button"
              onClick={() => onOpenBookingModal(`${SUBCATEGORY_LABELS[activeSubcategory]}: ${partner}`)}
              className="group min-w-0 text-left focus:outline-none"
            >
              <div className="aspect-[4/3] overflow-hidden rounded-[18px] bg-[#F1F6FD]">
                <img
                  src={TOUR_IMAGES[(currentPartners.indexOf(partner) + index) % TOUR_IMAGES.length]}
                  alt={`${partner} ${SUBCATEGORY_LABELS[activeSubcategory]}`}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.035]"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="mt-4 text-lg font-bold leading-snug text-[#0E1035] transition-colors group-hover:text-[#14ABFA] sm:text-xl">
                {partner}
              </h3>
              <p className="mt-1.5 text-sm font-normal text-[#0E1035]/65">
                {SUBCATEGORY_LABELS[activeSubcategory]} <span className="mx-1.5 text-[#E8A73D]">·</span> Dream Vacations partner
              </p>
            </button>
          ))}
        </div>

        {filteredPartners.length > 3 && (
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={() => setExpanded(current => !current)}
              aria-expanded={expanded}
              aria-label={expanded ? `Show fewer ${SUBCATEGORY_LABELS[activeSubcategory]} partners` : `Show all ${SUBCATEGORY_LABELS[activeSubcategory]} partners`}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0E1035] text-2xl text-white transition-colors hover:bg-[#14ABFA] hover:text-[#0E1035]"
            >
              <span className={`transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`} aria-hidden="true">↓</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

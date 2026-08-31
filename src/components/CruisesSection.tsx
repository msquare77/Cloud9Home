import React, { useEffect, useMemo, useRef, useState } from 'react';
import { CruiseDeal } from '../types';
import { AllCruiseLinesDirectory, CruiseDirectoryFilter } from './AllCruiseLinesDirectory';
import { ALL_CRUISE_LINES } from '../data/allCruiseLinesData';

interface CruisesSectionProps {
  deals: CruiseDeal[];
  onOpenBookingModal: (dealTitle?: string) => void;
  onOpenItineraryModal: (deal: CruiseDeal) => void;
  initialSubpage?: string;
}

type CruiseGroupKey = 'cruises' | 'get-ready' | 'already-booked';
type CruiseSubcategoryKey =
  | CruiseDirectoryFilter
  | 'cruising-tips'
  | 'cruise-faqs'
  | 'before-you-go'
  | 'return-earn'
  | 'travel-insurance'
  | 'shore-excursions';

interface CruiseGroup {
  id: CruiseGroupKey;
  label: string;
  items: { id: CruiseSubcategoryKey; label: string }[];
}

const CRUISE_GROUPS: CruiseGroup[] = [
  {
    id: 'cruises',
    label: 'Cruises',
    items: [
      { id: 'all', label: 'All Cruise Lines' },
      { id: 'luxury', label: 'Luxury Cruises' },
      { id: 'river', label: 'River Cruises' },
      { id: 'expedition', label: 'Expedition Cruises' },
      { id: 'contemporary', label: 'Contemporary Cruises' },
      { id: 'group', label: 'Group Cruises' },
      { id: 'world', label: 'World Cruises' },
    ],
  },
  {
    id: 'get-ready',
    label: 'Get Ready',
    items: [
      { id: 'cruising-tips', label: 'Cruising Tips' },
      { id: 'cruise-faqs', label: 'Cruise FAQs' },
      { id: 'before-you-go', label: 'Before You Go' },
    ],
  },
  {
    id: 'already-booked',
    label: 'Already Booked',
    items: [
      { id: 'return-earn', label: 'Return & Earn' },
      { id: 'travel-insurance', label: 'Travel Insurance' },
      { id: 'shore-excursions', label: 'Shore Excursions' },
    ],
  },
];

const RESOURCE_COPY: Record<Exclude<CruiseSubcategoryKey, CruiseDirectoryFilter>, string> = {
  'cruising-tips': 'Practical guidance for a smoother cruise vacation.',
  'cruise-faqs': 'Answers to common questions about cruise vacations.',
  'before-you-go': 'Essential information for preparing before departure.',
  'return-earn': 'Plan your next vacation with Return & Earn benefits.',
  'travel-insurance': 'Review travel protection options for your vacation.',
  'shore-excursions': 'Explore memorable experiences available in every port.',
};

const normalizeInitialKey = (value?: string): CruiseSubcategoryKey => {
  const aliases: Record<string, CruiseSubcategoryKey> = {
    'all-lines': 'all',
    featured: 'all',
    ocean: 'contemporary',
    'expedition-glaciers': 'expedition',
    cruising_tips: 'cruising-tips',
    cruise_faqs: 'cruise-faqs',
    before_you_go: 'before-you-go',
    return_earn: 'return-earn',
    travel_insurance: 'travel-insurance',
    shore_excursions: 'shore-excursions',
  };
  const normalized = aliases[value || 'all'] || value || 'all';
  return CRUISE_GROUPS.some(group => group.items.some(item => item.id === normalized))
    ? normalized as CruiseSubcategoryKey
    : 'all';
};

const groupForSubcategory = (subcategory: CruiseSubcategoryKey): CruiseGroupKey =>
  CRUISE_GROUPS.find(group => group.items.some(item => item.id === subcategory))?.id || 'cruises';

export const CruisesSection: React.FC<CruisesSectionProps> = ({ initialSubpage }) => {
  const initialKey = normalizeInitialKey(initialSubpage);
  const [activeGroup, setActiveGroup] = useState<CruiseGroupKey>(groupForSubcategory(initialKey));
  const [activeSubcategory, setActiveSubcategory] = useState<CruiseSubcategoryKey>(initialKey);
  const [cruiseSearchQuery, setCruiseSearchQuery] = useState('');
  const [cruiseSearchOpen, setCruiseSearchOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const closeSearch = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setCruiseSearchOpen(false);
      }
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setCruiseSearchOpen(false);
    };
    document.addEventListener('mousedown', closeSearch);
    document.addEventListener('keydown', closeOnEscape);
    return () => {
      document.removeEventListener('mousedown', closeSearch);
      document.removeEventListener('keydown', closeOnEscape);
    };
  }, []);

  const cruiseLineOptions = useMemo(() => {
    const query = cruiseSearchQuery.trim().toLowerCase();
    return ALL_CRUISE_LINES
      .map(line => line.name)
      .filter(name => !query || name.toLowerCase().includes(query))
      .sort((first, second) => first.localeCompare(second));
  }, [cruiseSearchQuery]);

  const activeGroupData = CRUISE_GROUPS.find(group => group.id === activeGroup) || CRUISE_GROUPS[0];
  const activeLabel = activeGroupData.items.find(item => item.id === activeSubcategory)?.label || activeGroupData.items[0].label;
  const isCruiseDirectory = activeGroup === 'cruises';

  const selectGroup = (group: CruiseGroup) => {
    setActiveGroup(group.id);
    setActiveSubcategory(group.items[0].id);
    setCruiseSearchQuery('');
    setCruiseSearchOpen(false);
  };

  const selectCruiseSubcategory = (subcategory: CruiseSubcategoryKey) => {
    setActiveSubcategory(subcategory);
    setCruiseSearchQuery('');
    setCruiseSearchOpen(false);
  };

  const selectCruiseLine = (name: string) => {
    setActiveGroup('cruises');
    setActiveSubcategory('all');
    setCruiseSearchQuery(name);
    setCruiseSearchOpen(false);
  };

  return (
    <section id="cruises-section" className="py-20 sm:py-28 bg-[#F1F6FD]">
      <div className="w-full max-w-[1640px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-4xl">
            <span className="font-signature text-3xl sm:text-4xl text-[#14ABFA] select-none block mb-1">
              Ocean and River Voyaging Collections
            </span>
            <h2 className="editorial-title text-3xl sm:text-5xl lg:text-6xl text-[#0E1035] leading-tight">
              CRUISES AND EXPEDITIONS
            </h2>
          </div>

          <div ref={searchRef} className="relative z-30 w-full lg:w-[390px]">
            <div className="relative">
              <input
                type="text"
                value={cruiseSearchQuery}
                placeholder="Search all cruise lines"
                autoComplete="off"
                onFocus={() => setCruiseSearchOpen(true)}
                onChange={event => {
                  setCruiseSearchQuery(event.target.value);
                  setActiveGroup('cruises');
                  setActiveSubcategory('all');
                  setCruiseSearchOpen(true);
                }}
                className="site-search-field site-search-field--light"
              />
              <button
                type="button"
                onClick={() => setCruiseSearchOpen(open => !open)}
                aria-label="Show all cruise lines"
                aria-expanded={cruiseSearchOpen}
                className="absolute right-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full"
              >
                <span className={`site-search-caret ${cruiseSearchOpen ? 'is-open' : ''}`} aria-hidden="true">⌄</span>
              </button>
            </div>

            {cruiseSearchOpen && (
              <div className="absolute inset-x-0 top-full mt-2 max-h-80 overflow-y-auto rounded-2xl bg-white py-2 shadow-[0_12px_30px_rgba(14,16,53,0.1)]">
                {cruiseLineOptions.length > 0 ? cruiseLineOptions.map(name => (
                  <button
                    key={name}
                    type="button"
                    onClick={() => selectCruiseLine(name)}
                    className="block w-full px-5 py-2.5 text-left text-sm font-normal text-[#0E1035] transition-colors hover:bg-[#F1F6FD] hover:text-[#14ABFA]"
                  >
                    {name}
                  </button>
                )) : (
                  <p className="px-5 py-4 text-sm font-normal text-[#0E1035]/60">No cruise line found.</p>
                )}
              </div>
            )}
          </div>
        </div>

        <div className="site-text-tab-row mt-9 flex flex-wrap">
          {CRUISE_GROUPS.map(group => (
            <button
              key={group.id}
              type="button"
              onClick={() => selectGroup(group)}
              className={`site-text-tab site-text-tab--primary ${activeGroup === group.id ? 'is-active' : ''}`}
            >
              {group.label}
            </button>
          ))}
        </div>

        <div className="site-text-tab-row site-text-tab-row--secondary flex flex-wrap items-center">
          {activeGroupData.items.map(item => (
            <button
              key={item.id}
              type="button"
              onClick={() => selectCruiseSubcategory(item.id)}
              className={`site-text-tab ${activeSubcategory === item.id ? 'is-active' : ''}`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="mt-9">
          {isCruiseDirectory ? (
            <AllCruiseLinesDirectory
              filterKey={activeSubcategory as CruiseDirectoryFilter}
              searchQuery={cruiseSearchQuery}
            />
          ) : (
            <div className={`min-h-56 flex items-end p-8 sm:p-12 shadow-[0_20px_55px_rgba(14,16,53,0.12)] ${
              activeGroup === 'get-ready'
                ? 'bg-[linear-gradient(135deg,#2FE0C0,#14ABFA)] text-[#0E1035]'
                : 'bg-[linear-gradient(135deg,#E8A73D,#4136EA)] text-white'
            }`}>
              <div>
                <p className="text-[11px] font-medium uppercase tracking-[0.16em] opacity-70">{activeGroupData.label}</p>
                <h3 className="mt-2 text-3xl sm:text-5xl font-bold leading-tight">{activeLabel}</h3>
                <p className="mt-3 text-sm sm:text-base font-normal opacity-80">
                  {RESOURCE_COPY[activeSubcategory as keyof typeof RESOURCE_COPY]}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

import React, { useEffect, useMemo, useState } from 'react';
import { ALL_CRUISE_LINES } from '../data/allCruiseLinesData';

export type CruiseDirectoryFilter =
  | 'all'
  | 'luxury'
  | 'river'
  | 'expedition'
  | 'contemporary'
  | 'group'
  | 'world';

interface AllCruiseLinesDirectoryProps {
  filterKey?: CruiseDirectoryFilter;
  searchQuery?: string;
}

export const CRUISE_LINE_IMAGES: Record<string, string> = {
  'AmaWaterways': '/assets/Cruises/optimized/ama-waterways.webp',
  'American Cruise Lines': '/assets/Cruises/optimized/american-cruise-line.webp',
  'Atlas Ocean Voyages': '/assets/Cruises/optimized/atlas-ocean-voyages.webp',
  'Avalon Waterways': '/assets/Cruises/optimized/avalon-waterways.webp',
  'Azamara Cruises': '/assets/Cruises/optimized/azamara.webp',
  'Carnival Cruise Line': '/assets/Cruises/optimized/carnival-cruise-line.webp',
  'Celebrity Cruises': '/assets/Cruises/optimized/celebrity-cruises.webp',
  'Celestyal Cruises': '/assets/Cruises/optimized/celestyal-cruises.webp',
  'Costa Cruises': '/assets/Cruises/optimized/costa-cruises.webp',
  'CroisiEurope': '/assets/Cruises/optimized/croisi-europe.webp',
  'Crystal Cruises': '/assets/Cruises/optimized/crystal-cruises.webp',
  'Cunard Line': '/assets/Cruises/optimized/cunard-line.webp',
  'Disney Cruise Line': '/assets/Cruises/optimized/disney-cruise-line.webp',
  'Explora Journeys': '/assets/Cruises/optimized/explora-journeys.webp',
  'Holland America Line': '/assets/Cruises/optimized/holland-america-line.webp',
  'HX Hurtigruten Expeditions': '/assets/Cruises/optimized/hx-expeditions.webp',
  'Lindblad Expeditions': '/assets/Cruises/optimized/lindblad-expeditions.webp',
  'Margaritaville at Sea': '/assets/Cruises/optimized/margaritaville-at-sea.webp',
  'MSC Cruises': '/assets/Cruises/optimized/msc-cruises.webp',
  'Norwegian Cruise Line': '/assets/Cruises/optimized/norwegian-cruise-line.webp',
  'Oceania Cruises': '/assets/Cruises/optimized/oceania-cruises.webp',
  'Paul Gauguin Cruises': '/assets/Cruises/optimized/paul-gauguin-cruises.webp',
  'Ponant Cruises': '/assets/Cruises/optimized/ponant.webp',
  'Princess Cruises': '/assets/Cruises/optimized/princess-cruises.webp',
  'Regent Seven Seas Cruises': '/assets/Cruises/optimized/regent-seven-seas-cruises.webp',
  'The Ritz-Carlton Yacht Collection': '/assets/Cruises/optimized/ritz-carlton-yacht-collection.webp',
  'Riviera River Cruises': '/assets/Cruises/optimized/riviera-travel.webp',
  'Royal Caribbean': '/assets/Cruises/optimized/royal-caribbean.webp',
  'Scenic Ocean Cruises': '/assets/Cruises/optimized/scenic-ocean-cruises.webp',
  'Scenic River Cruises': '/assets/Cruises/optimized/scenic-ocean-cruises.webp',
  'Seabourn': '/assets/Cruises/optimized/seabourn-cruise-line.webp',
  'SeaDream Yacht Club': '/assets/Cruises/optimized/seadream-yacht-club.webp',
  'Silversea Cruises': '/assets/Cruises/optimized/silversea-cruises.webp',
  'Star Clippers Cruises': '/assets/Cruises/optimized/star-clippers.webp',
  'Uniworld Boutique River Cruises': '/assets/Cruises/optimized/uniworld-boutique-river-cruises.webp',
  'Victory Cruise Lines': '/assets/Cruises/optimized/victory-cruise-lines.webp',
  'Viking Expedition Cruises': '/assets/Cruises/optimized/viking-expedition-cruises.webp',
  'Viking Ocean Cruises': '/assets/Cruises/optimized/viking-ocean-cruises.webp',
  'Viking River Cruises': '/assets/Cruises/optimized/viking-river-cruises.webp',
  'Virgin Voyages': '/assets/Cruises/optimized/virgin-voyages.webp',
  'Windstar Cruises': '/assets/Cruises/optimized/windstar-cruises.webp',
};

const OPTIMIZED_CRUISE_IMAGE_MODULES = import.meta.glob(
  '../../assets/Cruises/optimized/*.webp',
  { eager: true, query: '?url', import: 'default' }
) as Record<string, string>;

export const resolveCruiseLineImage = (assetPath: string): string => {
  const filename = assetPath.split('/').pop() || 'royal-caribbean.webp';
  return OPTIMIZED_CRUISE_IMAGE_MODULES[`../../assets/Cruises/optimized/${filename}`]
    || OPTIMIZED_CRUISE_IMAGE_MODULES['../../assets/Cruises/optimized/royal-caribbean.webp'];
};

const hasTextMatch = (values: string[], query: string) =>
  values.some(value => value.toLowerCase().includes(query));

export const cruiseLineMatchesFilter = (
  line: (typeof ALL_CRUISE_LINES)[number],
  filterKey: CruiseDirectoryFilter,
): boolean => {
  const searchableText = [line.name, line.categoryLabel, line.tagline, line.description];
  if (filterKey === 'all') return true;
  if (['luxury', 'river', 'expedition', 'contemporary'].includes(filterKey)) return line.category === filterKey;
  if (filterKey === 'group') return hasTextMatch(searchableText, 'group');
  return (
    hasTextMatch(searchableText, 'world') ||
    line.popularDestinations.some(destination => destination.toLowerCase().includes('world')) ||
    line.offers.some(offer => offer.region === 'World')
  );
};

export const AllCruiseLinesDirectory: React.FC<AllCruiseLinesDirectoryProps> = ({
  filterKey = 'all' as CruiseDirectoryFilter,
  searchQuery = '',
}) => {
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    setShowAll(false);
  }, [filterKey, searchQuery]);

  const filteredLines = useMemo(() => {
    return ALL_CRUISE_LINES.filter(line => {
      const matchesCategory = cruiseLineMatchesFilter(line, filterKey);
      const searchableText = [line.name, line.categoryLabel, line.tagline, line.description];
      const normalizedSearch = searchQuery.trim().toLowerCase();
      return matchesCategory && (!normalizedSearch || hasTextMatch(searchableText, normalizedSearch));
    });
  }, [filterKey, searchQuery]);

  const displayedLines = showAll ? filteredLines : filteredLines.slice(0, 3);

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {displayedLines.map(line => {
          const imageUrl = resolveCruiseLineImage(
            CRUISE_LINE_IMAGES[line.name] || '/assets/Cruises/optimized/royal-caribbean.webp'
          );
          const isPonant = line.name === 'Ponant Cruises';

          return (
            <article
              key={line.id}
              className="outer-surface site-image-card group overflow-hidden bg-white shadow-[0_10px_28px_rgba(14,16,53,0.09)] transition-transform duration-500 hover:-translate-y-1"
            >
              <div className="site-content-image-frame relative h-60 sm:h-64 bg-[#F1F6FD]">
                <img
                  src={imageUrl}
                  alt={`${line.name} cruise ship`}
                  className={`h-full w-full object-cover transition-transform duration-500 ${
                    isPonant
                      ? 'scale-[2.75] object-[center_48%] group-hover:scale-[2.85]'
                      : 'group-hover:scale-105'
                  }`}
                  loading="lazy"
                />
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/65 to-transparent" />
                <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-4 text-white [text-shadow:0_1px_8px_rgba(0,0,0,0.65)]">
                  <span className="max-w-[62%] text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.1em] leading-tight">
                    {line.categoryLabel}
                  </span>
                  <span className="shrink-0 text-right text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.06em] leading-tight">
                    {line.fleetCount} Ships in Fleet
                  </span>
                </div>
              </div>

              <div className="min-h-44 p-6 sm:p-7 flex flex-col bg-white text-[#0E1035]">
                <h3 className="text-xl sm:text-2xl font-bold leading-tight">
                  {line.name}
                </h3>

                <div className="mt-auto pt-7">
                  <button
                    type="button"
                    disabled
                    aria-disabled="true"
                    className="card-action-link cursor-default opacity-100"
                  >
                    View Offers &amp; Tours
                  </button>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {filteredLines.length > 3 && (
        <div className="pt-3 flex justify-center">
          <button
            type="button"
            onClick={() => setShowAll(current => !current)}
            aria-expanded={showAll}
            aria-label={showAll ? 'Show fewer cruise lines' : 'Show all cruise lines'}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0E1035] text-2xl text-white transition-colors hover:bg-[#14ABFA] hover:text-[#0E1035] cursor-pointer focus:outline-none"
          >
            <span className={`transition-transform duration-300 ${showAll ? 'rotate-180' : ''}`} aria-hidden="true">↓</span>
          </button>
        </div>
      )}

      {filteredLines.length === 0 && (
        <div className="bg-white/55 backdrop-blur-xl p-10 text-center shadow-sm">
          <h3 className="text-lg font-semibold text-[#0E1035]">
            {searchQuery.trim() ? 'No cruise lines match your search.' : `More ${filterKey} cruise partners are coming soon.`}
          </h3>
        </div>
      )}
    </div>
  );
};

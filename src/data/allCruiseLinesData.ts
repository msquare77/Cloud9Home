import { ALL_CRUISE_LINES_DIRECTORY, CruiseLineDetail, CruiseLineOffer, getCruiseLineById, getAllCruiseOffers } from './cruiseLines';

export type { CruiseLineDetail, CruiseLineOffer };
export { ALL_CRUISE_LINES_DIRECTORY, getCruiseLineById, getAllCruiseOffers };

// Normalize the legacy directory to the current Dream Vacations cruise-line roster.
export const ALL_CRUISE_LINES: CruiseLineDetail[] = ALL_CRUISE_LINES_DIRECTORY.map(line => {
  if (line.id !== 'emerald-cruises') return line;
  return {
    ...line,
    id: 'viking-expedition-cruises',
    name: 'Viking Expedition Cruises',
    category: 'expedition',
    categoryLabel: 'Polar and Great Lakes Expeditions',
    tagline: 'Purpose-built expedition voyages to the world’s most remote regions',
    description: 'Viking expedition ships explore Antarctica, the Arctic, the Great Lakes, and other remote destinations with inclusive enrichment and scientific discovery experiences.',
    fleetCount: 2,
    popularDestinations: ['Antarctica', 'The Arctic', 'The Great Lakes', 'Canada', 'South America'],
    departurePorts: ['Ushuaia, Argentina', 'Toronto, Ontario', 'Milwaukee, Wisconsin', 'Longyearbyen, Svalbard'],
    offers: [],
  };
});

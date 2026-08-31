import { CONTEMPORARY_CRUISE_LINES } from './contemporary';
import { LUXURY_CRUISE_LINES } from './luxury';
import { RIVER_CRUISE_LINES } from './river';
import { EXPEDITION_CRUISE_LINES } from './expedition';
import { CruiseLineDetail, CruiseLineOffer } from './types';

export * from './types';
export { CONTEMPORARY_CRUISE_LINES } from './contemporary';
export { LUXURY_CRUISE_LINES } from './luxury';
export { RIVER_CRUISE_LINES } from './river';
export { EXPEDITION_CRUISE_LINES } from './expedition';

// Complete combined directory of all 41 cruise lines
export const ALL_CRUISE_LINES_DIRECTORY: CruiseLineDetail[] = [
  ...CONTEMPORARY_CRUISE_LINES,
  ...LUXURY_CRUISE_LINES,
  ...RIVER_CRUISE_LINES,
  ...EXPEDITION_CRUISE_LINES,
];

// Helper to look up a cruise line by ID
export function getCruiseLineById(id: string): CruiseLineDetail | undefined {
  return ALL_CRUISE_LINES_DIRECTORY.find((line) => line.id === id);
}

// Helper to search across all offers in all cruise lines
export function getAllCruiseOffers(): { cruiseLine: CruiseLineDetail; offer: CruiseLineOffer }[] {
  const result: { cruiseLine: CruiseLineDetail; offer: CruiseLineOffer }[] = [];
  for (const line of ALL_CRUISE_LINES_DIRECTORY) {
    for (const offer of line.offers) {
      result.push({ cruiseLine: line, offer });
    }
  }
  return result;
}

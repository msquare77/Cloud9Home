export interface CruiseLineDetail {
  id: string;
  name: string;
  category: 'contemporary' | 'luxury' | 'river' | 'expedition';
  categoryLabel: string;
  tagline: string;
  description: string;
  logoUrl?: string;
  brandColor?: string;
  imageUrl: string;
  fleetCount: number;
  startingPrice: number;
  exclusivePerksSummary: string;
  popularDestinations: string[];
  departurePorts: string[];
  keyHighlights: string[];
  offers: CruiseLineOffer[];
}

export interface CruiseLineOffer {
  id: string;
  title: string;
  shipName: string;
  destination: string;
  region: 'Caribbean' | 'Alaska' | 'Mediterranean' | 'Bahamas' | 'Europe' | 'Bermuda' | 'Hawaii' | 'Mexico' | 'Asia' | 'South Pacific' | 'World' | 'North America Rivers';
  durationNights: number;
  departurePort: string;
  departureDates: string[];
  originalPrice: number;
  discountedPrice: number;
  onboardCredit: number;
  badge?: string;
  perks: string[];
  itinerarySummary: string;
  itineraryDays: {
    day: number;
    port: string;
    activity: string;
    arriveTime?: string;
    departTime?: string;
  }[];
  includedDining: string[];
  shipHighlights: string[];
}

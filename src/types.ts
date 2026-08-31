export type VacationCategory = 
  | 'ocean_cruise' 
  | 'river_cruise' 
  | 'all_inclusive_resort' 
  | 'guided_tour' 
  | 'theme_park' 
  | 'luxury_villa';

export interface CruiseDeal {
  id: string;
  category?: VacationCategory;
  categoryLabel?: string;
  title: string;
  cruiseLine: string; // Royal Caribbean, Celebrity, Disney, Sandals, AmaWaterways, Globus, etc.
  shipName: string; // Ship name, resort name, or tour name
  destination: string;
  region: 'Caribbean' | 'Alaska' | 'Mediterranean' | 'Bahamas' | 'Europe' | 'Bermuda' | 'Hawaii' | 'Mexico' | 'Africa & Safari' | 'Theme Parks' | 'World';
  durationNights: number;
  departurePort: string;
  departureDates: string[];
  portsOfCall: string[];
  originalPrice: number;
  discountedPrice: number;
  onboardCredit: number; // e.g. 250, 500 (or resort spending credit)
  exclusivePerks: string[];
  rating: number;
  reviewCount: number;
  imageUrl: string;
  badge?: string;
  familyFriendlyScore: number;
  luxuryScore: number;
  shipHighlights: string[];
  includedDining: string[];
  itineraryDays: {
    day: number;
    port: string;
    activity: string;
    arriveTime?: string;
    departTime?: string;
  }[];
}

export interface CruiseFilterState {
  category?: string;
  destination: string;
  cruiseLine: string;
  departurePort: string;
  month: string;
  duration: string;
  travelerType: string;
}

export interface Testimonial {
  id: string;
  author: string;
  location: string;
  avatarUrl: string;
  rating: number;
  cruiseLine: string;
  shipName: string;
  destination: string;
  cabinType: string;
  title: string;
  content: string;
  perksReceived: string;
  verified: boolean;
  date: string;
  travelType: 'Family with Kids' | 'Couple' | 'Multi-Gen Group' | 'Solo Explorer' | 'Destination Wedding';
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'all' | 'suites' | 'dining' | 'activities' | 'destinations' | 'family';
  imageUrl: string;
  images?: string[];
  caption: string;
  shipOrPlace: string;
}

export interface FaqItem {
  id: string;
  category: 'booking' | 'pricing' | 'family' | 'perks';
  question: string;
  answer: string;
}

export interface TravelTip {
  id: string;
  title: string;
  category: 'Family Guide' | 'Cabin Selection' | 'Money Saving' | 'Port Hacks' | 'Resort & Tour Guide';
  readTime: string;
  snippet: string;
  bullets: string[];
  iconName: string;
  imageUrl?: string;
  fullArticle?: {
    introduction: string;
    sections: {
      heading: string;
      content: string;
      takeaways?: string[];
    }[];
    proTip: string;
    recommendedShips: string[];
    checklist: string[];
  };
}

export interface SocialPost {
  id: string;
  username: string;
  handle: string;
  avatarUrl: string;
  imageUrl: string;
  likes: number;
  comments: number;
  caption: string;
  shipName: string;
  location: string;
  platform: 'Instagram' | 'TikTok' | 'Facebook';
}

export interface ComparisonFeature {
  feature: string;
  cloud9: {
    available: boolean;
    text: string;
    highlight?: boolean;
  };
  directBooking: {
    available: boolean;
    text: string;
  };
  genericAgencies: {
    available: boolean;
    text: string;
  };
}

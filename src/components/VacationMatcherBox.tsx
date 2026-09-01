import React, { useMemo, useState } from 'react';
import { CruiseDeal } from '../types';
import { CRUISE_DEALS } from '../data/cruiseData';
import { LuxuryPackage, ResortPackage, TourPackage, LUXURY_PACKAGES, RESORTS_PACKAGES, TOURS_PACKAGES } from '../data/dreamVacationsData';

interface VacationMatcherBoxProps {
  onNavigateToMatch: (sectionId: string, subpageKey?: string) => void;
}

// ---------------------------------------------------------------------------
// Candidate pool — every cruise, resort, tour and luxury package normalized
// into one comparable shape so the engine can score and rank across all of them.
// ---------------------------------------------------------------------------
type CandidateKind = 'cruise' | 'resort' | 'tour' | 'luxury';

interface GenieCandidate {
  id: string;
  kind: CandidateKind;
  category: string;
  title: string;
  subtitle: string;
  destination: string;
  region: string;
  duration: number;
  price: number;
  rating: number;
  imageUrl: string;
  badge?: string;
  sectionId: string;
  subpageKey: string;
  familyFriendlyScore?: number;
  luxuryScore?: number;
  activityLevel?: string;
}

const resortSubpageFor = (region: string): string => {
  const value = region.toLowerCase();
  if (value.includes('mexico')) return 'mexico';
  if (value.includes('caribbean') || value.includes('turks') || value.includes('curaç') || value.includes('curac')) return 'caribbean';
  return 'all';
};

const kindFromCruiseDeal = (deal: CruiseDeal): CandidateKind => {
  switch (deal.category) {
    case 'all_inclusive_resort': return 'resort';
    case 'guided_tour': return 'tour';
    case 'luxury_villa': return 'luxury';
    default: return 'cruise';
  }
};

const CRUISE_CANDIDATES: GenieCandidate[] = CRUISE_DEALS.map(deal => ({
  id: deal.id,
  kind: kindFromCruiseDeal(deal),
  category: deal.category || 'ocean_cruise',
  title: deal.shipName,
  subtitle: deal.cruiseLine,
  destination: deal.destination,
  region: deal.region,
  duration: deal.durationNights,
  price: deal.discountedPrice,
  rating: deal.rating,
  imageUrl: deal.imageUrl,
  badge: deal.badge,
  sectionId: deal.category === 'guided_tour' ? 'tours-section' : deal.category === 'all_inclusive_resort' ? 'resorts-section' : deal.category === 'luxury_villa' ? 'luxury-section' : 'cruises-section',
  subpageKey: deal.category === 'all_inclusive_resort' ? resortSubpageFor(deal.region) : 'featured',
  familyFriendlyScore: deal.familyFriendlyScore,
  luxuryScore: deal.luxuryScore,
}));

const RESORT_CANDIDATES: GenieCandidate[] = RESORTS_PACKAGES.map((resort: ResortPackage) => ({
  id: resort.id,
  kind: 'resort',
  category: resort.category,
  title: resort.resortName,
  subtitle: resort.brand,
  destination: resort.location,
  region: resort.region,
  duration: resort.durationNights,
  price: resort.discountedPrice,
  rating: resort.rating,
  imageUrl: resort.imageUrl,
  badge: resort.badge,
  sectionId: 'resorts-section',
  subpageKey: resortSubpageFor(resort.region),
}));

const TOUR_CANDIDATES: GenieCandidate[] = TOURS_PACKAGES.map((tour: TourPackage) => ({
  id: tour.id,
  kind: 'tour',
  category: tour.category,
  title: tour.tourName,
  subtitle: tour.operator,
  destination: tour.destination,
  region: tour.region,
  duration: tour.durationDays,
  price: tour.discountedPrice,
  rating: tour.rating,
  imageUrl: tour.imageUrl,
  badge: tour.badge,
  sectionId: 'tours-section',
  subpageKey: tour.category === 'custom' ? 'custom' : 'guided',
  activityLevel: tour.activityLevel,
}));

const LUXURY_CANDIDATES: GenieCandidate[] = LUXURY_PACKAGES.map((luxury: LuxuryPackage) => ({
  id: luxury.id,
  kind: 'luxury',
  category: luxury.category,
  title: luxury.propertyName,
  subtitle: luxury.supplier,
  destination: luxury.destination,
  region: luxury.destination,
  duration: parseInt(luxury.duration, 10) || 7,
  price: luxury.discountedPrice,
  rating: luxury.rating,
  imageUrl: luxury.imageUrl,
  badge: luxury.badge,
  sectionId: 'luxury-section',
  subpageKey: luxury.category === 'luxury_villas' ? 'luxury_villas' : 'luxury_ocean',
}));

const ALL_CANDIDATES: GenieCandidate[] = [...CRUISE_CANDIDATES, ...RESORT_CANDIDATES, ...TOUR_CANDIDATES, ...LUXURY_CANDIDATES];

// ---------------------------------------------------------------------------
// Decision tree — question flow. Each step's visibility can depend on prior
// answers, so the visitor sees roughly 7-10 questions, never all of them.
// ---------------------------------------------------------------------------
type StepId =
  | 'party' | 'youngChildren' | 'nights' | 'path'
  | 'cruiseStyle' | 'resortStyle' | 'tourStyle' | 'adventureStyle' | 'themeParkChoice'
  | 'priorities' | 'destinationVibe' | 'budget' | 'perks' | 'accessibility';

interface Answers {
  party?: string;
  youngChildren?: string;
  nights?: string;
  path?: string;
  cruiseStyle?: string;
  resortStyle?: string;
  tourStyle?: string;
  adventureStyle?: string;
  themeParkChoice?: string;
  priorities: string[];
  destinationVibe?: string;
  budget?: string;
  perks: string[];
  accessibility?: string;
}

const EMPTY_ANSWERS: Answers = { priorities: [], perks: [] };

interface StepOption { value: string; label: string; }
interface StepDef {
  question: string;
  hint?: string;
  type: 'single' | 'multi';
  maxSelect?: number;
  options: StepOption[];
}

const STEP_ORDER: StepId[] = [
  'party', 'youngChildren', 'nights', 'path',
  'cruiseStyle', 'resortStyle', 'tourStyle', 'adventureStyle', 'themeParkChoice',
  'priorities', 'destinationVibe', 'budget', 'perks', 'accessibility',
];

const isStepActive = (id: StepId, a: Answers): boolean => {
  if (id === 'youngChildren') return a.party === 'family';
  if (id === 'cruiseStyle') return a.path === 'cruise';
  if (id === 'resortStyle') return a.path === 'resort';
  if (id === 'tourStyle') return a.path === 'tour';
  if (id === 'adventureStyle') return a.path === 'adventure';
  if (id === 'themeParkChoice') return a.path === 'theme_park';
  return true;
};

const STEP_DEFS: Record<StepId, StepDef> = {
  party: {
    question: "Who's traveling?",
    type: 'single',
    options: [
      { value: 'solo', label: '🧍 Just Me' },
      { value: 'couple', label: '❤️ My Partner' },
      { value: 'family', label: '👨‍👩‍👧 My Family' },
      { value: 'friends', label: '👥 Friends' },
      { value: 'group', label: '👨‍👩‍👧‍👦 Multiple Families / Large Group' },
      { value: 'unsure', label: "🤷 I'm Not Sure Yet" },
    ],
  },
  youngChildren: {
    question: 'Will young children (under age 3) be traveling with you?',
    hint: "Some cruise itineraries have minimum infant ages, so we'll flag this for your advisor.",
    type: 'single',
    options: [
      { value: 'yes', label: 'Yes' },
      { value: 'no', label: 'No' },
      { value: 'unsure', label: 'Not Sure Yet' },
    ],
  },
  nights: {
    question: 'How long would you like to get away?',
    type: 'single',
    options: [
      { value: '3-5', label: '3–5 Nights · A Quick Escape' },
      { value: '6-8', label: '6–8 Nights · About a Week' },
      { value: '9-14', label: '9–14 Nights · A Longer Vacation' },
      { value: '15-30', label: '15–30 Nights · A Big Adventure' },
      { value: '30+', label: '1 Month+ · Bucket-List Trip' },
      { value: 'flexible', label: "I'm Flexible" },
    ],
  },
  path: {
    question: 'Which vacation sounds most like you?',
    type: 'single',
    options: [
      { value: 'cruise', label: '🚢 Unpack Once, Wake Up Somewhere New' },
      { value: 'resort', label: '🏝 Stay Somewhere Beautiful & Relax' },
      { value: 'tour', label: '🗺 Explore Cities & Places Along the Way' },
      { value: 'adventure', label: '🏔 Give Me Something Unforgettable' },
      { value: 'theme_park', label: '🎢 Theme Parks & Family Fun' },
      { value: 'unsure', label: '🤷 I Genuinely Have No Idea' },
    ],
  },
  cruiseStyle: {
    question: 'What sounds best about cruising?',
    type: 'single',
    options: [
      { value: 'onboard', label: '🎉 Lots to Do Onboard' },
      { value: 'family', label: '👨‍👩‍👧 Family Fun' },
      { value: 'beach', label: '🏖 Beaches & Relaxation' },
      { value: 'culture', label: '🏛 Exploring Destinations' },
      { value: 'nature', label: '🐋 Nature & Scenery' },
      { value: 'romance', label: '❤️ Romantic Getaway' },
      { value: 'luxury', label: '✨ Premium & Luxury' },
      { value: 'adventure', label: '🧭 Adventure / Remote Places' },
      { value: 'unsure', label: "🤷 I Don't Know" },
    ],
  },
  resortStyle: {
    question: 'What kind of resort experience sounds best?',
    type: 'single',
    options: [
      { value: 'adults_only', label: '❤️ Adults-Only Getaway' },
      { value: 'family', label: '👨‍👩‍👧 Family Resort' },
      { value: 'all_inclusive', label: '🍹 All-Inclusive' },
      { value: 'luxury', label: '✨ Luxury Resort' },
      { value: 'beach', label: '🏖 Beach-Focused' },
      { value: 'relaxing', label: '🧖 Quiet & Relaxing' },
      { value: 'theme_park', label: '🎢 Theme Park Resort' },
      { value: 'unsure', label: '🤷 Recommend One for Me' },
    ],
  },
  tourStyle: {
    question: 'How much planning would you like us to handle?',
    type: 'single',
    options: [
      { value: 'guided', label: '🚌 Plan Everything for Me' },
      { value: 'custom', label: '🧭 Build the Trip Around Me' },
      { value: 'rail', label: '🚂 The Journey Itself Should Be Special' },
      { value: 'safari', label: "🐘 Wildlife Is the Main Reason I'm Going" },
      { value: 'day', label: '🏙 I Only Need Activities for a Day' },
    ],
  },
  adventureStyle: {
    question: 'Which sounds amazing to you?',
    type: 'single',
    options: [
      { value: 'safari', label: '🐘 African Safari' },
      { value: 'polar', label: '🧊 Antarctica / Polar Adventure' },
      { value: 'alaska', label: '🐋 Alaska' },
      { value: 'rail', label: '🚂 Scenic Train Journey' },
      { value: 'expedition', label: '🛳 Expedition Cruise' },
      { value: 'south_pacific', label: '🌴 South Pacific' },
      { value: 'surprise', label: '❓ Surprise Me' },
    ],
  },
  themeParkChoice: {
    question: 'Which sounds more exciting?',
    type: 'single',
    options: [
      { value: 'disney', label: '🏰 Disney' },
      { value: 'universal', label: '🎬 Universal' },
      { value: 'both', label: '🤷 Both — Compare Them' },
    ],
  },
  priorities: {
    question: 'What matters most to you?',
    hint: 'Choose up to 3.',
    type: 'multi',
    maxSelect: 3,
    options: [
      { value: 'beaches', label: '🏖 Beaches' },
      { value: 'relaxation', label: '😌 Relaxation' },
      { value: 'value', label: '💰 Great Value' },
      { value: 'food', label: '🍽 Food & Dining' },
      { value: 'family', label: '👨‍👩‍👧 Family Activities' },
      { value: 'romance', label: '❤️ Romance' },
      { value: 'culture', label: '🏛 Culture & History' },
      { value: 'wildlife', label: '🐋 Wildlife & Nature' },
      { value: 'adventure', label: '🧗 Adventure' },
      { value: 'luxury', label: '✨ Luxury' },
      { value: 'scenic', label: '🚂 Scenic Journeys' },
      { value: 'seeing_lots', label: '🌎 Seeing Lots of Places' },
    ],
  },
  destinationVibe: {
    question: 'What kind of place sounds exciting?',
    type: 'single',
    options: [
      { value: 'beaches_islands', label: '☀️ Warm Beaches & Islands' },
      { value: 'mountains_nature', label: '🏔 Mountains, Glaciers & Nature' },
      { value: 'europe_culture', label: '🏛 Europe & Historic Cities' },
      { value: 'africa_wildlife', label: '🦁 Wildlife & Africa' },
      { value: 'hawaii_pacific', label: '🌴 Hawaii / South Pacific' },
      { value: 'international_general', label: '🌍 Somewhere International' },
      { value: 'domestic_us', label: '🇺🇸 Stay Within the U.S.' },
      { value: 'theme_parks', label: '🎢 Theme Parks' },
      { value: 'surprise', label: '🌐 Surprise Me' },
    ],
  },
  budget: {
    question: 'What would you feel comfortable spending?',
    hint: 'Total vacation budget for everyone.',
    type: 'single',
    options: [
      { value: 'lt1500', label: 'Under $1,500' },
      { value: '1500-3000', label: '$1,500 – $3,000' },
      { value: '3000-5000', label: '$3,000 – $5,000' },
      { value: '5000-10000', label: '$5,000 – $10,000' },
      { value: '10000+', label: '$10,000+' },
      { value: 'unsure', label: "I Don't Know Yet" },
    ],
  },
  perks: {
    question: 'You may qualify for additional savings.',
    hint: 'Select any that apply.',
    type: 'multi',
    options: [
      { value: 'military', label: '🪖 Military / Veteran' },
      { value: 'senior', label: '🎂 Traveler Age 55+' },
      { value: 'loyalty', label: "⭐ I've Cruised Before / Loyalty Member" },
      { value: 'none', label: 'None of These' },
    ],
  },
  accessibility: {
    question: 'Does anyone in your group need accessibility support?',
    type: 'single',
    options: [
      { value: 'none', label: 'No Accessibility Needs' },
      { value: 'wheelchair_scooter', label: '♿ Wheelchair / Scooter' },
      { value: 'limited_walking', label: '🚶 Limited Walking' },
      { value: 'other', label: '❓ Other / Not Sure' },
    ],
  },
};

// ---------------------------------------------------------------------------
// Scoring engine — hard filter (path) + weighted ranking across every factor.
// Eligibility flags (accessibility) never enter the score; they're honest
// disclaimers surfaced alongside results instead of fabricated compatibility data.
// ---------------------------------------------------------------------------
const fullText = (c: GenieCandidate) =>
  `${c.destination} ${c.region} ${c.category} ${c.subtitle} ${c.title} ${c.badge ?? ''} ${c.activityLevel ?? ''}`.toLowerCase();

const PATH_WEIGHT = 25;
const pathFitScore = (c: GenieCandidate, path?: string): number => {
  if (!path || path === 'unsure') return PATH_WEIGHT * 0.6;
  switch (path) {
    case 'cruise': return c.kind === 'cruise' ? PATH_WEIGHT : 0;
    case 'resort': return c.kind === 'resort' ? PATH_WEIGHT : 0;
    case 'tour': return c.kind === 'tour' ? PATH_WEIGHT : 0;
    case 'adventure':
      return (c.kind === 'tour' && ['safaris', 'national_parks'].includes(c.category))
        || (c.kind === 'cruise' && (c.luxuryScore ?? 0) >= 85)
        || (c.kind === 'luxury' && ['bespoke', 'yacht_charters'].includes(c.category))
        ? PATH_WEIGHT : PATH_WEIGHT * 0.15;
    case 'theme_park':
      return c.category === 'theme_park' || c.category === 'theme_park_resorts' ? PATH_WEIGHT : 0;
    default: return PATH_WEIGHT * 0.5;
  }
};

const STYLE_WEIGHT = 10;
const styleFitScore = (c: GenieCandidate, style?: string): number => {
  if (!style || style === 'unsure') return STYLE_WEIGHT * 0.5;
  const text = fullText(c);
  const family = c.familyFriendlyScore ?? -1;
  const luxury = c.luxuryScore ?? -1;
  const rules: Record<string, () => boolean> = {
    onboard: () => c.kind === 'cruise' && family < 85,
    family: () => family >= 70 || /family/i.test(text),
    beach: () => /caribbean|bahamas|mexico|bermuda|beach|turks|riviera|curaç|curac|island/i.test(text),
    culture: () => c.category === 'river_cruise' || /europe|mediterranean|river|italy|danube|rhine|history|culture/i.test(text),
    nature: () => /alaska|glacier|wildlife|nature|iceland/i.test(text),
    romance: () => /adults|romant|honeymoon|couples/i.test(text) || (luxury >= 70 && family < 20),
    luxury: () => c.kind === 'luxury' || luxury >= 80,
    adventure: () => /safari|expedition|adventure|wildlife|antarctic|remote/i.test(text) || c.category === 'safaris',
    relaxing: () => c.activityLevel === 'Relaxed' || /relax|spa|quiet|wellness/i.test(text),
    all_inclusive: () => c.category === 'all_inclusive' || c.category === 'all_inclusive_resort' || /all-inclusive/i.test(text),
    adults_only: () => c.category === 'adults_only' || /adults-only|adults only/i.test(text),
    theme_park: () => c.category === 'theme_park_resorts' || c.category === 'theme_park' || /disney|universal|theme park/i.test(text),
    guided: () => c.category === 'guided',
    custom: () => c.category === 'custom' || c.category === 'bespoke',
    rail: () => c.category === 'european_rail' || /rail|train/i.test(text),
    safari: () => c.category === 'safaris' || /safari/i.test(text),
    day: () => c.category === 'small_group' || /day tour|day trip/i.test(text),
    polar: () => /antarctic|polar|iceland/i.test(text),
    alaska: () => /alaska/i.test(text),
    expedition: () => /expedition/i.test(text) || c.category === 'national_parks',
    south_pacific: () => /hawaii|south pacific|tahiti/i.test(text),
    disney: () => /disney/i.test(text),
    universal: () => /universal/i.test(text),
    both: () => /disney/i.test(text) || /universal/i.test(text),
    surprise: () => true,
  };
  const rule = rules[style];
  if (!rule) return STYLE_WEIGHT * 0.5;
  return rule() ? STYLE_WEIGHT : STYLE_WEIGHT * 0.15;
};

const branchFitScore = (c: GenieCandidate, a: Answers): number => {
  switch (a.path) {
    case 'cruise': return styleFitScore(c, a.cruiseStyle);
    case 'resort': return styleFitScore(c, a.resortStyle);
    case 'tour': return styleFitScore(c, a.tourStyle);
    case 'adventure': return styleFitScore(c, a.adventureStyle);
    case 'theme_park': return styleFitScore(c, a.themeParkChoice);
    default: return STYLE_WEIGHT * 0.5;
  }
};

const PRIORITY_RULES: Record<string, (c: GenieCandidate) => boolean> = {
  beaches: c => /caribbean|bahamas|mexico|beach|bermuda|island|turks/i.test(fullText(c)),
  relaxation: c => c.activityLevel === 'Relaxed' || /relax|spa|quiet/i.test(fullText(c)),
  value: c => c.price <= 2200,
  food: c => /dining|gourmet|food|cuisine|culinary/i.test(fullText(c)),
  family: c => (c.familyFriendlyScore ?? 0) >= 70 || /family/i.test(fullText(c)),
  romance: c => /adults|romant|honeymoon|couples/i.test(fullText(c)),
  culture: c => /europe|mediterranean|history|culture|river/i.test(fullText(c)),
  wildlife: c => /safari|wildlife|nature|alaska/i.test(fullText(c)),
  adventure: c => /adventure|expedition|safari|remote|antarctic/i.test(fullText(c)),
  luxury: c => (c.luxuryScore ?? 0) >= 80 || c.kind === 'luxury',
  scenic: c => /scenic|rail|train|glacier|fjord/i.test(fullText(c)),
  seeing_lots: c => c.kind === 'cruise' || c.kind === 'tour',
};

const PRIORITY_LABELS: Record<string, string> = {
  beaches: 'Beautiful beaches', relaxation: 'Room to relax', value: 'Strong value',
  food: 'Great food & dining', family: 'Family-friendly activities', romance: 'A romantic setting',
  culture: 'Culture & history', wildlife: 'Wildlife & nature', adventure: 'A real sense of adventure',
  luxury: 'Elevated, luxury touches', scenic: 'Scenic journeys', seeing_lots: 'Seeing lots of places',
};

const DESTINATION_KEYWORDS: Record<string, string[]> = {
  beaches_islands: ['caribbean', 'bahamas', 'mexico', 'bermuda', 'turks', 'riviera maya', 'cancun', 'curaç', 'curac', 'island'],
  mountains_nature: ['alaska', 'glacier', 'rocky', 'iceland'],
  europe_culture: ['europe', 'mediterranean', 'italy', 'danube', 'rhine', 'river'],
  africa_wildlife: ['africa', 'safari', 'kenya', 'tanzania', 'serengeti'],
  hawaii_pacific: ['hawaii', 'south pacific', 'tahiti'],
  theme_parks: ['disney', 'universal', 'orlando', 'theme park'],
};

const DESTINATION_WEIGHT = 20;
const destinationFitScore = (c: GenieCandidate, vibe?: string): number => {
  if (!vibe || vibe === 'surprise' || vibe === 'international_general') return DESTINATION_WEIGHT * 0.8;
  const text = fullText(c);
  if (vibe === 'domestic_us') {
    return /europe|mediterranean|africa|antarctic|danube|rhine|italy|kenya|tanzania/i.test(text) ? DESTINATION_WEIGHT * 0.2 : DESTINATION_WEIGHT;
  }
  const keywords = DESTINATION_KEYWORDS[vibe] || [];
  if (keywords.length === 0) return DESTINATION_WEIGHT * 0.6;
  return keywords.some(k => text.includes(k)) ? DESTINATION_WEIGHT : DESTINATION_WEIGHT * 0.15;
};

const PARTY_WEIGHT = 10;
const partyFitScore = (c: GenieCandidate, party?: string, youngChildren?: string): number => {
  if (!party || party === 'unsure') return PARTY_WEIGHT * 0.7;
  const text = fullText(c);
  const family = c.familyFriendlyScore ?? -1;
  if (party === 'family') {
    let score = family >= 0 ? (family / 100) * PARTY_WEIGHT : (/family/i.test(text) ? PARTY_WEIGHT : PARTY_WEIGHT * 0.4);
    if (youngChildren === 'yes' && /adults-only|adults only/i.test(text)) score = 0;
    return score;
  }
  if (party === 'couple') return /adults-only|adults only|romant|honeymoon|couples/i.test(text) ? PARTY_WEIGHT : PARTY_WEIGHT * 0.5;
  if (party === 'solo') return family < 30 || c.kind === 'tour' ? PARTY_WEIGHT * 0.85 : PARTY_WEIGHT * 0.5;
  if (party === 'friends' || party === 'group') return family >= 40 && family <= 90 ? PARTY_WEIGHT * 0.85 : PARTY_WEIGHT * 0.55;
  return PARTY_WEIGHT * 0.5;
};

const BUDGET_RANGES: Record<string, [number, number]> = {
  lt1500: [0, 1500], '1500-3000': [1500, 3000], '3000-5000': [3000, 5000],
  '5000-10000': [5000, 10000], '10000+': [10000, Infinity],
};
const BUDGET_WEIGHT = 10;
const budgetFitScore = (price: number, budget?: string): number => {
  if (!budget || budget === 'unsure') return BUDGET_WEIGHT * 0.7;
  const range = BUDGET_RANGES[budget];
  if (!range) return BUDGET_WEIGHT * 0.7;
  const [lo, hi] = range;
  if (price >= lo && price <= hi) return BUDGET_WEIGHT;
  const mid = hi === Infinity ? lo * 1.5 : (lo + hi) / 2;
  const distanceRatio = Math.abs(price - mid) / (mid || 1);
  return Math.max(0, BUDGET_WEIGHT * (1 - Math.min(distanceRatio, 1)));
};

const NIGHTS_RANGES: Record<string, [number, number]> = {
  '3-5': [3, 5], '6-8': [6, 8], '9-14': [9, 14], '15-30': [15, 30], '30+': [30, 999],
};
const DURATION_WEIGHT = 5;
const durationFitScore = (duration: number, nights?: string): number => {
  if (!nights || nights === 'flexible') return DURATION_WEIGHT * 0.8;
  const range = NIGHTS_RANGES[nights];
  if (!range) return DURATION_WEIGHT * 0.8;
  const [lo, hi] = range;
  if (duration >= lo && duration <= hi) return DURATION_WEIGHT;
  const distance = duration < lo ? lo - duration : duration - hi;
  return Math.max(0, DURATION_WEIGHT - distance * 0.5);
};

interface ScoredCandidate extends GenieCandidate {
  score: number;
  reasons: string[];
}

const BUDGET_LABELS: Record<string, string> = {
  lt1500: 'under $1,500', '1500-3000': '$1,500–$3,000', '3000-5000': '$3,000–$5,000',
  '5000-10000': '$5,000–$10,000', '10000+': '$10,000+',
};
const NIGHTS_LABELS: Record<string, string> = {
  '3-5': '3–5 night', '6-8': '6–8 night', '9-14': '9–14 night', '15-30': '15–30 night', '30+': '1 month+',
};
const PARTY_LABELS: Record<string, string> = {
  solo: 'solo travelers', couple: 'couples', family: 'families', friends: 'friend groups', group: 'larger groups',
};
const PATH_LABELS: Record<string, string> = {
  cruise: "You're drawn to cruising", resort: "You'd rather stay in one beautiful place",
  tour: 'You want to explore cities and destinations', adventure: 'You want something truly unforgettable',
  theme_park: 'Theme park magic is calling',
};

const scoreCandidate = (c: GenieCandidate, a: Answers): ScoredCandidate => {
  const factors: { label: string; ratio: number }[] = [];

  const pathScore = pathFitScore(c, a.path);
  if (a.path && a.path !== 'unsure' && pathScore >= PATH_WEIGHT * 0.9 && PATH_LABELS[a.path]) {
    factors.push({ label: PATH_LABELS[a.path], ratio: 1 });
  }

  const branchScore = branchFitScore(c, a);

  let prioritiesScore = 20 * 0.6;
  if (a.priorities.length) {
    prioritiesScore = 0;
    const share = 20 / a.priorities.length;
    a.priorities.forEach(p => {
      const hit = PRIORITY_RULES[p]?.(c) ?? false;
      prioritiesScore += (hit ? 1 : 0.15) * share;
      if (hit) factors.push({ label: PRIORITY_LABELS[p] ?? p, ratio: 0.95 });
    });
  }

  const destScore = destinationFitScore(c, a.destinationVibe);
  const partyScore = partyFitScore(c, a.party, a.youngChildren);
  if (a.party && PARTY_LABELS[a.party] && partyScore >= PARTY_WEIGHT * 0.75) {
    factors.push({ label: `A strong fit for ${PARTY_LABELS[a.party]}`, ratio: 0.8 });
  }

  const budgetScore = budgetFitScore(c.price, a.budget);
  if (a.budget && a.budget !== 'unsure' && BUDGET_LABELS[a.budget] && budgetScore >= BUDGET_WEIGHT * 0.85) {
    factors.push({ label: `Fits your ${BUDGET_LABELS[a.budget]} budget`, ratio: 0.75 });
  }

  const durationScore = durationFitScore(c.duration, a.nights);
  if (a.nights && a.nights !== 'flexible' && NIGHTS_LABELS[a.nights] && durationScore >= DURATION_WEIGHT * 0.9) {
    factors.push({ label: `A great length for your ${NIGHTS_LABELS[a.nights]} getaway`, ratio: 0.7 });
  }

  const total = pathScore + branchScore + prioritiesScore + destScore + partyScore + budgetScore + durationScore;
  const reasons = factors.sort((x, y) => y.ratio - x.ratio).slice(0, 5).map(f => f.label);

  return { ...c, score: total, reasons };
};

const formatPrice = (price: number) => `$${price.toLocaleString('en-US')}`;

export const VacationMatcherBox: React.FC<VacationMatcherBoxProps> = ({ onNavigateToMatch }) => {
  const [answers, setAnswers] = useState<Answers>(EMPTY_ANSWERS);
  const [historyStack, setHistoryStack] = useState<(StepId | 'results')[]>(['party']);
  const [showMore, setShowMore] = useState(false);

  const currentStepId = historyStack[historyStack.length - 1];
  const showResults = currentStepId === 'results';

  const activeSteps = useMemo(() => STEP_ORDER.filter(id => isStepActive(id, answers)), [answers]);
  const currentPosition = currentStepId && currentStepId !== 'results' ? activeSteps.indexOf(currentStepId) + 1 : activeSteps.length;

  const pushNext = (updated: Answers) => {
    const idx = STEP_ORDER.indexOf(currentStepId as StepId);
    let nextIdx = idx + 1;
    while (nextIdx < STEP_ORDER.length && !isStepActive(STEP_ORDER[nextIdx], updated)) nextIdx++;
    const nextId: StepId | 'results' = nextIdx < STEP_ORDER.length ? STEP_ORDER[nextIdx] : 'results';
    setHistoryStack(h => [...h, nextId]);
  };

  const selectAndAdvance = (field: StepId, value: string) => {
    const updated: Answers = { ...answers, [field]: value };
    setAnswers(updated);
    pushNext(updated);
  };

  const toggleMulti = (field: 'priorities' | 'perks', value: string, maxSelect?: number) => {
    setAnswers(prev => {
      const current = prev[field];
      let next: string[];
      if (field === 'perks' && value === 'none') {
        next = current.includes('none') ? [] : ['none'];
      } else {
        const withoutNone = current.filter(v => v !== 'none');
        if (withoutNone.includes(value)) next = withoutNone.filter(v => v !== value);
        else if (maxSelect && withoutNone.length >= maxSelect) next = withoutNone;
        else next = [...withoutNone, value];
      }
      return { ...prev, [field]: next };
    });
  };

  const continueMulti = () => {
    pushNext(answers);
  };

  const goBack = () => setHistoryStack(h => (h.length <= 1 ? h : h.slice(0, -1)));
  const restart = () => {
    setAnswers(EMPTY_ANSWERS);
    setHistoryStack(['party']);
    setShowMore(false);
  };

  const results = useMemo(() => {
    if (!showResults) return null;
    const sorted = ALL_CANDIDATES.map(c => scoreCandidate(c, answers)).sort((a, b) => b.score - a.score);
    const bestMatch = sorted[0];
    const remaining = sorted.filter(c => c.id !== bestMatch.id);
    const bestValue = [...remaining].sort((a, b) => (b.score / Math.max(b.price, 1)) - (a.score / Math.max(a.price, 1)))[0];
    const remaining2 = remaining.filter(c => c.id !== bestValue?.id);
    const upgrade = remaining2.find(c => c.price > bestMatch.price) || remaining2[0];
    const more = remaining2.filter(c => c.id !== upgrade?.id).slice(0, 2);
    return { bestMatch, bestValue, upgrade, more };
  }, [showResults, answers]);

  const currentDef = currentStepId && currentStepId !== 'results' ? STEP_DEFS[currentStepId] : null;

  return (
    <div className="bg-white shadow-xs p-6 sm:p-9 mb-14">
      <div className="mb-7 flex items-start justify-between gap-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-[#0E1035] tracking-tight leading-tight">
            Cloud9 Genie
          </h2>
          <p className="text-xs text-[#0E1035]/65 font-normal mt-1">
            {showResults ? 'Your personalized vacation shortlist' : 'Answer a few quick questions — we\'ll find your best-fit vacation.'}
          </p>
        </div>
        <button
          type="button"
          onClick={restart}
          className="shrink-0 text-[10px] font-black uppercase tracking-wider text-[#0E1035]/50 hover:text-[#14ABFA] cursor-pointer"
        >
          Start Over
        </button>
      </div>

      {!showResults && currentDef && (
        <div>
          <div className="flex items-center justify-between mb-5">
            <span className="text-[10px] font-black uppercase tracking-widest text-[#14ABFA]">
              Question {currentPosition} of {activeSteps.length}
            </span>
            {historyStack.length > 1 && (
              <button
                type="button"
                onClick={goBack}
                className="text-[10px] font-black uppercase tracking-wider text-[#0E1035]/50 hover:text-[#14ABFA] cursor-pointer"
              >
                ← Back
              </button>
            )}
          </div>

          <fieldset>
            <legend className="text-sm font-bold text-[#0E1035] mb-1">{currentDef.question}</legend>
            {currentDef.hint && <p className="text-xs text-[#0E1035]/55 font-medium mb-3">{currentDef.hint}</p>}
            <div className={`grid grid-cols-1 sm:grid-cols-2 ${currentDef.type === 'multi' ? 'lg:grid-cols-3' : 'lg:grid-cols-4'} gap-2.5 mt-3`}>
              {currentDef.options.map(option => {
                const isMulti = currentDef.type === 'multi';
                const field = currentStepId as StepId;
                const selected = isMulti
                  ? (answers[field as 'priorities' | 'perks'] as string[]).includes(option.value)
                  : answers[field as keyof Answers] === option.value;
                return (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => isMulti
                      ? toggleMulti(field as 'priorities' | 'perks', option.value, currentDef.maxSelect)
                      : selectAndAdvance(field, option.value)}
                    className={`flex items-center gap-3 px-4 py-3 text-left text-xs font-semibold transition-colors cursor-pointer ${
                      selected ? 'bg-[#0E1035] text-white' : 'bg-[#F1F6FD] text-[#0E1035] hover:bg-[#14ABFA]/15'
                    }`}
                    aria-pressed={selected}
                  >
                    <span className={`w-4 h-4 shrink-0 flex items-center justify-center ${isMulti ? '' : 'rounded-full'} ${selected ? 'bg-[#14ABFA]' : 'bg-white shadow-inner'}`}>
                      {selected && <span className="text-[10px] leading-none font-black text-[#0E1035]">✓</span>}
                    </span>
                    <span>{option.label}</span>
                  </button>
                );
              })}
            </div>
          </fieldset>

          {currentDef.type === 'multi' && (
            <div className="mt-6 flex justify-end">
              <button
                type="button"
                onClick={continueMulti}
                disabled={(answers[currentStepId as 'priorities' | 'perks'] as string[]).length === 0}
                className="px-6 py-3 bg-[#14ABFA] disabled:bg-[#0E1035]/15 disabled:cursor-not-allowed text-[#0E1035] disabled:text-[#0E1035]/40 text-xs font-black uppercase tracking-wider cursor-pointer"
              >
                Continue
              </button>
            </div>
          )}
        </div>
      )}

      {showResults && results && (
        <div className="space-y-4">
          {[
            { tier: '🥇 Best Match', item: results.bestMatch },
            { tier: '🥈 Best Value', item: results.bestValue },
            { tier: '🥉 Worth the Upgrade', item: results.upgrade },
          ].filter(row => row.item).map(({ tier, item }) => (
            <div key={item.id} className="bg-[#F1F6FD] p-5 sm:p-6">
              <span className="text-[10px] uppercase tracking-widest font-black text-[#14ABFA]">{tier}</span>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5 mt-2">
                <div className="flex items-center gap-4 min-w-0">
                  <img src={item.imageUrl} alt={item.title} className="site-content-image w-24 h-20 object-cover shrink-0" referrerPolicy="no-referrer" />
                  <div className="min-w-0">
                    <h3 className="text-base sm:text-lg font-extrabold text-[#0E1035]">{item.title}</h3>
                    <p className="text-xs text-[#0E1035]/70 mt-0.5">{item.destination} • {item.duration} nights • {formatPrice(item.price)}</p>
                    <p className="text-[10px] text-[#0E1035]/50 font-bold uppercase tracking-wider mt-1">{item.subtitle}</p>
                    {item.reasons.length > 0 && (
                      <ul className="mt-2 space-y-0.5">
                        {item.reasons.slice(0, 3).map(reason => (
                          <li key={reason} className="text-[11px] text-[#0E1035]/70 font-medium">✓ {reason}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => onNavigateToMatch(item.sectionId, item.subpageKey)}
                  className="shrink-0 px-6 py-3 bg-[#0E1035] hover:bg-[#14ABFA] text-white hover:text-[#0E1035] text-xs font-black uppercase tracking-wider transition-colors cursor-pointer"
                >
                  View Vacation
                </button>
              </div>
            </div>
          ))}

          {results.more.length > 0 && (
            <div>
              <button
                type="button"
                onClick={() => setShowMore(v => !v)}
                className="text-[11px] font-black uppercase tracking-wider text-[#14ABFA] cursor-pointer"
              >
                {showMore ? 'Hide' : 'See More Options'} {showMore ? '▴' : '▾'}
              </button>
              {showMore && (
                <div className="mt-3 space-y-2">
                  {results.more.map(item => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => onNavigateToMatch(item.sectionId, item.subpageKey)}
                      className="w-full flex items-center gap-3 px-4 py-2.5 bg-[#F1F6FD] hover:bg-[#14ABFA]/15 text-left transition-colors cursor-pointer"
                    >
                      <img src={item.imageUrl} alt={item.title} className="site-content-image w-12 h-10 object-cover shrink-0" referrerPolicy="no-referrer" />
                      <span className="text-xs font-semibold text-[#0E1035] min-w-0 truncate">{item.title}</span>
                      <span className="text-[10px] text-[#0E1035]/50 shrink-0 ml-auto">{formatPrice(item.price)}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          {answers.accessibility && answers.accessibility !== 'none' && (
            <p className="text-[11px] text-[#0E1035]/55 font-medium pt-1">
              We haven't verified accessibility details for these picks yet — your Cloud 9 travel advisor will confirm wheelchair, mobility and step-free options before you book.
            </p>
          )}
          {answers.perks.length > 0 && !answers.perks.includes('none') && (
            <p className="text-[11px] text-[#0E1035]/55 font-medium">
              Ask your advisor about military, senior or loyalty savings that may apply to these picks.
            </p>
          )}
        </div>
      )}
    </div>
  );
};

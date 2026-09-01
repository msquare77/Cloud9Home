import { CruiseDeal } from '../types';

export interface ResortPackage {
  id: string;
  category: 'all_inclusive' | 'adults_only' | 'family_resorts' | 'sandals_beaches' | 'overwater' | 'theme_park_resorts';
  categoryLabel: string;
  title: string;
  resortName: string;
  brand: string;
  location: string;
  region: string;
  durationNights: number;
  originalPrice: number;
  discountedPrice: number;
  resortCredit: number;
  exclusivePerks: string[];
  rating: number;
  reviewCount: number;
  imageUrl: string;
  badge?: string;
  highlights: string[];
  inclusions: string[];
  diningCount: number;
  poolCount: number;
}

export interface TourPackage {
  id: string;
  category: 'guided' | 'safaris' | 'european_rail' | 'small_group' | 'national_parks' | 'custom';
  categoryLabel: string;
  title: string;
  operator: string;
  tourName: string;
  destination: string;
  region: string;
  durationDays: number;
  originalPrice: number;
  discountedPrice: number;
  tourCredit: number;
  exclusivePerks: string[];
  rating: number;
  reviewCount: number;
  imageUrl: string;
  badge?: string;
  highlights: string[];
  inclusions: string[];
  maxGroupSize?: number;
  activityLevel: 'Relaxed' | 'Moderate' | 'Active';
}

export interface LuxuryPackage {
  id: string;
  category: 'luxury_ocean' | 'luxury_river' | 'luxury_villas' | 'yacht_charters' | 'bespoke';
  categoryLabel: string;
  title: string;
  supplier: string;
  propertyName: string;
  destination: string;
  duration: string;
  originalPrice: number;
  discountedPrice: number;
  luxuryCredit: number;
  exclusivePerks: string[];
  rating: number;
  reviewCount: number;
  imageUrl: string;
  badge?: string;
  suiteType: string;
  luxuryInclusions: string[];
}

export interface DestinationGuide {
  id: string;
  category: 'caribbean' | 'alaska' | 'europe' | 'mexico' | 'hawaii' | 'africa' | 'theme_parks';
  name: string;
  tagline: string;
  bestMonths: string;
  averageTemp: string;
  topAttractions: string[];
  recommendedLines: string[];
  imageUrl: string;
  summary: string;
  startingPrice: number;
  bonusCredit: number;
}

export interface SpecialDeal {
  id: string;
  category: 'all_deals' | 'bonus_credits' | 'flash_sales' | 'military' | 'kids_free' | 'loyalty' | 'last_minute';
  categoryLabel: string;
  title: string;
  supplier: string;
  vesselOrResort: string;
  destination: string;
  dates: string;
  originalPrice: number;
  discountedPrice: number;
  bonusCreditAmount: number;
  badgeText: string;
  perks: string[];
  expiryNotice: string;
  imageUrl: string;
}

export interface ExtraService {
  id: string;
  category: 'excursions' | 'insurance' | 'flights_hotels' | 'transfers' | 'registry' | 'price_drop' | 'brochures';
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  benefits: string[];
  partner: string;
  actionText: string;
  imageUrl: string;
}

// ----------------------------------------------------
// 1. RESORTS DATA
// ----------------------------------------------------
export const RESORTS_PACKAGES: ResortPackage[] = [
  {
    id: 'resort-sandals-royal-curacao',
    category: 'sandals_beaches',
    categoryLabel: 'Sandals Luxury Included®',
    title: 'Sandals Royal Curaçao • Sunset Island Pool & Seaside Bungalow',
    resortName: 'Sandals Royal Curaçao',
    brand: 'Sandals Resorts (Certified Specialist)',
    location: 'Santa Barbara Estate, Curaçao',
    region: 'Southern Caribbean',
    durationNights: 5,
    originalPrice: 2850,
    discountedPrice: 1980,
    resortCredit: 500,
    exclusivePerks: [
      '$500 Cloud 9 Exclusive Resort Credit (Red Lane Spa & Private Candlelight Dinner)',
      'Complimentary Island Exploration with Convertible MINI Cooper (Butler Suites)',
      'Unlimited Scuba Diving, Watersports & Top-Shelf Liquors',
      'Free Roundtrip Airport Luxury Transfers'
    ],
    rating: 4.97,
    reviewCount: 318,
    imageUrl: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
    badge: 'Certified Sandals Top Pick',
    highlights: ['Two-Level Dos Awa Infinity Pool', '8 World-Class Global Gourmet Dining Concepts', '3 Beachside Gourmet Food Trucks', '18-Hole Pete Dye Championship Golf Access'],
    inclusions: ['All meals, snacks & 24/7 in-room dining', 'Unlimited Robert Mondavi Twin Oaks® wines & premium liquors', 'PADI-certified scuba diving equipment', 'Personalized Butler Elite service available'],
    diningCount: 11,
    poolCount: 4
  },
  {
    id: 'resort-secrets-maroma-beach',
    category: 'adults_only',
    categoryLabel: 'Adults-Only 5-Diamond',
    title: 'Secrets Maroma Beach Riviera Cancun • Unlimited-Luxury®',
    resortName: 'Secrets Maroma Beach Riviera Cancun',
    brand: 'Hyatt Inclusive Collection / Secrets',
    location: 'Riviera Maya, Mexico',
    region: 'Mexico & Caribbean',
    durationNights: 5,
    originalPrice: 2450,
    discountedPrice: 1720,
    resortCredit: 400,
    exclusivePerks: [
      '$400 Resort Spa & Wine Credits with Cloud 9 Promo Code',
      'Preferred Club Ocean Front Junior Suite Upgrade (Subject to availability)',
      'Private Beachside Sunset Cabana with Moët Champagne',
      'Guaranteed 100% Best Price Match'
    ],
    rating: 4.96,
    reviewCount: 412,
    imageUrl: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1200&q=80',
    badge: 'AAA 5-Diamond Resort',
    highlights: ['Located on one of Travel Channel’s Top 10 World Beaches', 'Swim-Up Suites with Direct Pool Access', '13,000 sq. ft. Secrets Spa by Pevonia', 'No wristbands or dining reservations required'],
    inclusions: ['Unlimited à la carte gourmet dining', 'Unlimited top-shelf spirits and natural fruit juices', '24-hour room and concierge services', 'Daily daytime activities and live nightly entertainment'],
    diningCount: 9,
    poolCount: 2
  },
  {
    id: 'resort-beaches-turks-caicos',
    category: 'family_resorts',
    categoryLabel: 'Family Ultra-Luxury',
    title: 'Beaches Turks & Caicos • Pirates Island Waterpark & Grace Bay',
    resortName: 'Beaches Turks & Caicos Resort Villages & Spa',
    brand: 'Beaches Resorts (By Sandals)',
    location: 'Providenciales, Turks and Caicos',
    region: 'Turks & Caicos Islands',
    durationNights: 6,
    originalPrice: 3890,
    discountedPrice: 2890,
    resortCredit: 600,
    exclusivePerks: [
      '$600 Resort Credit + Free Catamaran Snorkel Cruise for Family of 4',
      'Certified Nanny Care & Sesame Street® VIP Character Breakfast Included',
      'Unlimited Scuba Diving for Certified Divers & All Watersports',
      'Exclusive Dream Vacations Consortium Gift Basket on Arrival'
    ],
    rating: 4.98,
    reviewCount: 520,
    imageUrl: 'https://images.unsplash.com/photo-1761744434194-215434982be2?auto=format&fit=crop&w=1200&q=80',
    badge: 'World’s #1 Family Resort',
    highlights: ['45,000 sq ft Pirates Island Waterpark with Surf Simulator', '21 International Gourmet Restaurants', 'Located on 12 miles of world-renowned Grace Bay Beach', '5 Spectacular European-Themed Cultural Villages'],
    inclusions: ['All meals, gourmet dining & snacks', 'Kids Camps with INA-certified nannies', 'Teens Trench town arcade and Liquid nightclub', 'Free airport transfers & all gratuities included'],
    diningCount: 21,
    poolCount: 10
  },
  {
    id: 'resort-sandals-south-coast-overwater',
    category: 'overwater',
    categoryLabel: 'Overwater Luxury Bungalows',
    title: 'Sandals South Coast Jamaica • Over-the-Water Butler Bungalow',
    resortName: 'Sandals South Coast',
    brand: 'Sandals Resorts',
    location: 'Whitehouse, Jamaica',
    region: 'Jamaica',
    durationNights: 5,
    originalPrice: 4200,
    discountedPrice: 3150,
    resortCredit: 650,
    exclusivePerks: [
      '$650 Stateroom & Spa Credit + VIP Fast-Track Club Mobay Airport Passes',
      'Private Luxury BMW Airport Transfers',
      'Personal Butler Trained by the Guild of Professional English Butlers',
      'Glass-Floor Viewing Windows & Overwater Hammock'
    ],
    rating: 4.99,
    reviewCount: 210,
    imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    badge: 'Overwater Villa Haven',
    highlights: ['Heart-Shaped Overwater Bungalow Village', 'Over-The-Water Serenity Wedding Chapel & Latitudes Bar', 'Set on a 500-Acre Pristine Nature Reserve', '9 Global Gourmet Restaurants'],
    inclusions: ['24-hour in-bungalow dining & private chef options', 'Tranquility Soaking Tub™ for two on private deck', 'Full access to all land and watersports', 'Unlimited premium liquors and Robert Mondavi wines'],
    diningCount: 9,
    poolCount: 3
  },
  {
    id: 'resort-disney-grand-floridian',
    category: 'theme_park_resorts',
    categoryLabel: 'Disney Deluxe Luxury',
    title: 'Disney’s Grand Floridian Resort & Spa • Magic Kingdom Monorail',
    resortName: 'Disney’s Grand Floridian Resort & Spa',
    brand: 'Walt Disney World Deluxe Resort',
    location: 'Lake Buena Vista (Orlando), FL',
    region: 'Orlando Theme Parks',
    durationNights: 5,
    originalPrice: 3600,
    discountedPrice: 2850,
    resortCredit: 300,
    exclusivePerks: [
      '$300 Disney Dining / Park Gift Card from Cloud 9 Travels',
      'Complimentary Disney Genie+ / Lightning Lane Concierge Strategy',
      'Early Theme Park Entry (30 Min) & Extended Evening Hours (Deluxe Guests)',
      'Direct Monorail & Water Taxi to Magic Kingdom Park'
    ],
    rating: 4.94,
    reviewCount: 460,
    imageUrl: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=1200&q=80',
    badge: 'Disney Deluxe Flagship',
    highlights: ['Victorian elegance on the shores of Seven Seas Lagoon', 'Watch Magic Kingdom Fireworks with synced music from beach', 'Victoria & Albert’s AAA 5-Diamond dining', 'Full-service Grand Floridian Spa'],
    inclusions: ['Direct Monorail transportation to Magic Kingdom and EPCOT', 'Character dining at 1900 Park Fare', 'Complimentary Resort baggage delivery', 'Resort-wide Disney transportation'],
    diningCount: 7,
    poolCount: 2
  },
  {
    id: 'resort-universal-helios-epic',
    category: 'theme_park_resorts',
    categoryLabel: 'Universal Epic Universe',
    title: 'Universal Helios Grand Hotel • Dedicated In-Park Entrance to Epic Universe',
    resortName: 'Universal Helios Grand Hotel (Loews)',
    brand: 'Universal Orlando Resort',
    location: 'Universal Epic Universe, Orlando, FL',
    region: 'Orlando Theme Parks',
    durationNights: 4,
    originalPrice: 2400,
    discountedPrice: 1890,
    resortCredit: 250,
    exclusivePerks: [
      '$250 Universal Park Spending Card + Free Express Pass Upgrades',
      'Dedicated Private Entrance directly into Universal Epic Universe',
      'Early Park Admission to Epic Universe & The Wizarding World of Harry Potter™',
      'Complimentary Resort-Wide Water Taxi and Shuttles'
    ],
    rating: 4.96,
    reviewCount: 180,
    imageUrl: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=1200&q=80',
    badge: 'Epic Universe 2025/2026',
    highlights: ['Majestic Mediterranean-inspired palace overlooking Celestial Park', 'Rooftop Bar with panoramic views of Epic Universe night shows', 'Resort-style pool with underwater audio and zero-entry beach', 'Seamless room-key charging throughout Universal theme parks'],
    inclusions: ['Early park admission up to 1 hour before general public', 'Complimentary delivery of merchandise to your hotel room', 'Priority seating at select theme park restaurants', 'Complimentary standard Wi-Fi and fitness center access'],
    diningCount: 5,
    poolCount: 1
  }
];

// ----------------------------------------------------
// 2. TOURS DATA
// ----------------------------------------------------
export const TOURS_PACKAGES: TourPackage[] = [
  {
    id: 'tour-kenya-tanzania-safari',
    category: 'safaris',
    categoryLabel: 'African Wildlife Safari',
    title: '10-Day Kenya & Tanzania Classic Big Five Safari with Serengeti Fly-In',
    operator: 'Micato & Collette African Journeys',
    tourName: 'Classic Kenya & Serengeti Great Migration',
    destination: 'Kenya & Tanzania (Masai Mara & Serengeti)',
    region: 'Africa & Safaris',
    durationDays: 10,
    originalPrice: 5900,
    discountedPrice: 4650,
    tourCredit: 500,
    exclusivePerks: [
      '$500 Cloud 9 Tour Credit (Optional Serengeti Hot Air Balloon Safari Included)',
      'Guaranteed Window Seat in Custom 4x4 Pop-Roof Safari Land Cruisers',
      'All National Park Conservation Fees & Flying Doctor Emergency Evacuation Included',
      'Private Sundowner Cocktails in the Masai Mara Bush'
    ],
    rating: 4.99,
    reviewCount: 195,
    imageUrl: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=80',
    badge: 'Bucket List Masterpiece',
    highlights: ['Masai Mara National Reserve Game Drives', 'Serengeti National Park & Ngorongoro Crater (UNESCO)', 'Witness the Great Wildebeest Migration', 'Authentic Maasai Village Cultural Exchange'],
    inclusions: ['All luxury safari lodge and luxury tented camp accommodations', 'All meals (Breakfast, Safari Picnic Lunches, 3-Course Dinners)', 'Internal bush flight transfers', 'Expert English-speaking wildlife naturalist guides'],
    maxGroupSize: 12,
    activityLevel: 'Moderate'
  },
  {
    id: 'tour-italy-best-of-rail',
    category: 'european_rail',
    categoryLabel: 'European Escorted Tour',
    title: '11-Day Best of Italy: Rome, Florence, Venice & Amalfi Coast by High-Speed Rail',
    operator: 'Trafalgar & Globus Escorted Tours',
    tourName: 'Best of Italy & Amalfi Coast',
    destination: 'Rome, Florence, Tuscany, Venice, Sorrento & Capri',
    region: 'Europe & Mediterranean',
    durationDays: 11,
    originalPrice: 3800,
    discountedPrice: 2950,
    tourCredit: 400,
    exclusivePerks: [
      '$400 Tour Credit for Optional Capri Private Boat Tour',
      'VIP Skip-the-Line Vatican Museums & Sistine Chapel Private Access',
      'First-Class Frecciarossa High-Speed Rail Passes Included',
      'Authentic Chianti Wine Estate Tasting & Tuscan Dinner'
    ],
    rating: 4.96,
    reviewCount: 340,
    imageUrl: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1200&q=80',
    badge: 'Top European Tour',
    highlights: ['Private gondola ride in Venice Grand Canal', 'Guided Florence Uffizi & Accademia Gallery (David)', 'Colosseum & Roman Forum with Archaeologist Guide', 'Breathtaking Amalfi Coast Cliffside Drive'],
    inclusions: ['10 nights in hand-picked 4-star central hotels', '15 meals including welcome dinners and regional wine', 'Luxury air-conditioned motorcoach and luggage handling', 'Dedicated Tour Director 24/7 throughout journey'],
    maxGroupSize: 24,
    activityLevel: 'Moderate'
  },
  {
    id: 'tour-canadian-rockies-tauck',
    category: 'guided',
    categoryLabel: 'Scenic Rail & Mountain Escorted',
    title: '8-Day Grand Canadian Rockies & Rocky Mountaineer GoldLeaf Luxury Rail',
    operator: 'Tauck & Rocky Mountaineer',
    tourName: 'Grand Canadian Rockies & Glacier Skywalk',
    destination: 'Banff, Lake Louise, Jasper & Vancouver',
    region: 'North America',
    durationDays: 8,
    originalPrice: 4950,
    discountedPrice: 3950,
    tourCredit: 450,
    exclusivePerks: [
      '$450 Cloud 9 Extra Credit for Banff Gondola / Helicopter Glacier Flight',
      'GoldLeaf Glass-Domed Bi-Level Luxury Rail Car Seating',
      'Fairmont Chateau Lake Louise & Fairmont Banff Springs Guaranteed Stays',
      'All Gratuities, Luggage Transfers & Park Admissions Included'
    ],
    rating: 4.98,
    reviewCount: 228,
    imageUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
    badge: 'Luxury Scenic Classic',
    highlights: ['Icefields Parkway & Athabasca Glacier Ice Explorer Ride', 'Fairmont Chateau Lake Louise Lakeview Accommodations', '2 Full Days aboard Rocky Mountaineer with gourmet meals', 'Columbia Icefield Skywalk glass-bottom walkway'],
    inclusions: ['All meals on train and Fairmont resorts', 'Private luxury coach touring with Tauck Director', 'All national park entrance fees and airport transfers', 'No hidden costs — comprehensive inclusions'],
    maxGroupSize: 28,
    activityLevel: 'Relaxed'
  },
  {
    id: 'tour-national-parks-utah-grand-canyon',
    category: 'national_parks',
    categoryLabel: 'National Parks Adventure',
    title: '8-Day America’s Great National Parks: Grand Canyon, Zion, Bryce & Monument Valley',
    operator: 'Insight Vacations & Collette',
    tourName: 'Canyon Country & Red Rock Wonders',
    destination: 'Grand Canyon, Zion, Bryce Canyon, Monument Valley, Sedona',
    region: 'North America',
    durationDays: 8,
    originalPrice: 3200,
    discountedPrice: 2480,
    tourCredit: 350,
    exclusivePerks: [
      '$350 Tour Credit + Navajo Guided 4x4 Jeep Tour in Monument Valley',
      'Inside-the-Park Lodging at Grand Canyon National Park',
      'Sedona Red Rock Sunset Jeep Expedition',
      'Complimentary Airport Pick-Up & Drop-Off in Las Vegas / Phoenix'
    ],
    rating: 4.95,
    reviewCount: 280,
    imageUrl: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80',
    badge: 'American Icons',
    highlights: ['Zion’s towering red sandstone monoliths & Virgin River', 'Bryce Canyon hoodoo amphitheater sunrise', 'Grand Canyon South Rim rim-walk with geologist', 'Monument Valley traditional Navajo frybread lunch'],
    inclusions: ['7 nights premium hotel and park lodge stays', '12 meals with regional specialties', 'Custom executive motorcoach with extra legroom and Wi-Fi', 'All national park entry permits included'],
    maxGroupSize: 22,
    activityLevel: 'Active'
  }
];

// ----------------------------------------------------
// 3. LUXURY DATA
// ----------------------------------------------------
export const LUXURY_PACKAGES: LuxuryPackage[] = [
  {
    id: 'lux-regent-seven-seas-grandeur',
    category: 'luxury_ocean',
    categoryLabel: 'Ultra-Luxury All-Inclusive Ocean',
    title: '10-Night Mediterranean Masterpiece: Barcelona to Monte Carlo & Rome',
    supplier: 'Regent Seven Seas Cruises',
    propertyName: 'Seven Seas Grandeur (All-Balcony, All-Suite)',
    destination: 'Mediterranean & French Riviera',
    duration: '10 Nights',
    originalPrice: 8400,
    discountedPrice: 6600,
    luxuryCredit: 1000,
    exclusivePerks: [
      '$1,000 Free Shipboard Credit per Suite (Cloud 9 / Dream Vacations Exclusive)',
      'FREE Roundtrip Business Class Air on Intercontinental Flights',
      'FREE Unlimited Shore Excursions in Every Single Port',
      'FREE Pre-Cruise 1-Night Luxury Hotel Stay with Breakfast & Transfers',
      'FREE Fine Wines, Champagne, Spirits, Gratuities & Unlimited Wi-Fi'
    ],
    rating: 5.0,
    reviewCount: 142,
    imageUrl: 'https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&w=1200&q=80',
    badge: 'The Most Luxurious Ship Ever Built',
    suiteType: 'Deluxe Veranda Suite with Marble Bathroom & Private Balcony',
    luxuryInclusions: ['Personalized butler service in Penthouse suites and above', 'Culinary Arts Kitchen with hands-on cooking classes', 'Custom Fabergé egg centerpiece in Grand Dining Room', 'Open-seating dining in Chartreuse, Prime 7, and Pacific Rim']
  },
  {
    id: 'lux-amawaterways-rhine-castles',
    category: 'luxury_river',
    categoryLabel: 'Luxury River Cruise',
    title: '7-Night Captivating Rhine River: Amsterdam to Basel with Zurich Extension',
    supplier: 'AmaWaterways (Best River Cruise Line)',
    propertyName: 'AmaMora (Twin-Balcony Staterooms)',
    destination: 'Rhine River (Netherlands, Germany, France, Switzerland)',
    duration: '7 Nights',
    originalPrice: 4600,
    discountedPrice: 3450,
    luxuryCredit: 600,
    exclusivePerks: [
      '$600 Stateroom Credit + Complimentary Pre-Paid Gratuities',
      'Choice of up to 4 Daily Guided Excursions (Walking, Biking, Hiking, Wine Tastings)',
      'Unlimited Fine Wine, Beer & Soft Drinks with Lunch & Dinner + Daily Sip & Sail Cocktail Hour',
      'Chef’s Table Speciality Restaurant with Multi-Course Tasting Menu'
    ],
    rating: 4.99,
    reviewCount: 215,
    imageUrl: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=80',
    badge: 'Award-Winning River Voyage',
    suiteType: 'Twin Balcony Stateroom (French Balcony + Outside Balcony)',
    luxuryInclusions: ['Heated sun deck pool with swim-up bar', 'Fleet of complimentary bicycles for independent exploring', 'Dedicated Wellness Host with daily yoga, core and cardio classes', 'High-speed Wi-Fi and on-demand entertainment system']
  },
  {
    id: 'lux-private-yacht-bvi',
    category: 'yacht_charters',
    categoryLabel: 'Private Crewed Yacht Charter',
    title: '7-Night Private Catamaran Yacht Charter in the British Virgin Islands',
    supplier: 'The Moorings & Dream Yacht Charters',
    propertyName: 'Moorings 5000 5-Cabin Crewed Catamaran',
    destination: 'British Virgin Islands (Tortola, Virgin Gorda, Jost Van Dyke)',
    duration: '7 Nights',
    originalPrice: 12500,
    discountedPrice: 9800,
    luxuryCredit: 800,
    exclusivePerks: [
      '$800 Provisioning Credit & Welcome Moët & Chandon Champagne Case',
      'Private Licensed Captain & Professional Gourmet Chef Included',
      'Full Custom Itinerary tailored daily to your party’s preferences',
      'Water Toys: Stand-Up Paddleboards, Kayaks, Snorkel Gear, Subwing'
    ],
    rating: 5.0,
    reviewCount: 88,
    imageUrl: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
    badge: 'Private Island Hopping',
    suiteType: 'Entire 50ft Luxury Yacht with 5 Private En-Suite Queen Cabins',
    luxuryInclusions: ['All meals, appetizers, cocktails & open bar curated by personal chef', 'Custom mooring in secluded bays and world-famous beach bars (Foxy’s, Soggy Dollar)', 'Fuel, cruising permits, national park fees and water generation', 'Air conditioning in all staterooms with 24/7 generator']
  }
];

// ----------------------------------------------------
// 4. DESTINATIONS DATA
// ----------------------------------------------------
export const DESTINATION_GUIDES: DestinationGuide[] = [
  {
    id: 'dest-caribbean',
    category: 'caribbean',
    name: 'Caribbean & Bahamas',
    tagline: 'Turquoise Waters, White-Sand Cays & Island Rhythms',
    bestMonths: 'Year-Round (Peak: Dec - Apr)',
    averageTemp: '82°F / 28°C',
    topAttractions: ['Perfect Day at CocoCay', 'Grace Bay Beach', 'St. Thomas Magens Bay', 'BVI The Baths', 'Cozumel Coral Reefs'],
    recommendedLines: ['Royal Caribbean', 'Sandals Resorts', 'Disney Cruise Line', 'Celebrity Cruises'],
    imageUrl: 'https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&w=1000&q=80',
    summary: 'From the private island thrill parks of the Bahamas to the lush rainforest peaks of St. Lucia, the Caribbean offers sun-drenched escapes for families, honeymooners, and luxury seekers alike.',
    startingPrice: 599,
    bonusCredit: 350
  },
  {
    id: 'dest-alaska',
    category: 'alaska',
    name: 'Alaska & Inside Passage',
    tagline: 'Towering Glaciers, Whale Breaches & Untamed Frontiers',
    bestMonths: 'May through September',
    averageTemp: '62°F / 17°C (Summer)',
    topAttractions: ['Dawes Glacier & Endicott Arm', 'Glacier Bay National Park', 'Skagway White Pass Railroad', 'Juneau Mendenhall Glacier'],
    recommendedLines: ['Celebrity Cruises', 'Princess Cruises', 'Holland America', 'Tauck Canadian Tours'],
    imageUrl: 'https://images.unsplash.com/photo-1461250281059-4f83443edbdc?auto=format&fit=crop&w=1000&q=80',
    summary: 'Witness calving glaciers, bald eagles soaring over spruce forests, and pods of humpback whales against snow-capped Alaskan peaks. Experience it on top-tier balcony staterooms with bonus shore excursion credits.',
    startingPrice: 799,
    bonusCredit: 450
  },
  {
    id: 'dest-europe',
    category: 'europe',
    name: 'Europe & Mediterranean',
    tagline: 'Ancient Wonders, Riviera Glamour & River Romance',
    bestMonths: 'April through October',
    averageTemp: '76°F / 24°C',
    topAttractions: ['Santorini Sunset Caldera', 'Rome Colosseum & Vatican', 'Rhine Valley Castles', 'Amalfi Coast Positano', 'Barcelona Sagrada Familia'],
    recommendedLines: ['AmaWaterways', 'Celebrity Cruises', 'Trafalgar Tours', 'Viking River Cruises'],
    imageUrl: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1000&q=80',
    summary: 'Unpack once on an ocean ship or boutique river vessel while waking up in a new historic capital every morning—from the Greek Isles to the castles of the Rhine and Danube.',
    startingPrice: 1199,
    bonusCredit: 600
  },
  {
    id: 'dest-mexico',
    category: 'mexico',
    name: 'Mexico & Riviera Maya',
    tagline: 'Ancient Mayan Ruins, Cenotes & 5-Diamond All-Inclusive Luxury',
    bestMonths: 'November through May',
    averageTemp: '84°F / 29°C',
    topAttractions: ['Tulum Cliffside Mayan Ruins', 'Cancun Underwater Museum', 'Cabo San Lucas El Arco', 'Chichen Itza UNESCO Wonder'],
    recommendedLines: ['Secrets & Dreams Resorts', 'Hyatt Ziva / Zilara', 'Royal Caribbean', 'Sandals'],
    imageUrl: 'https://images.unsplash.com/photo-1664205543898-829ef8baa7ad?auto=format&fit=crop&w=1000&q=80',
    summary: 'Gourmet culinary journeys, swim-up suites, warm hospitality, and crystal-clear Caribbean cenotes make Mexico an unbeatable high-value getaway.',
    startingPrice: 699,
    bonusCredit: 400
  },
  {
    id: 'dest-africa',
    category: 'africa',
    name: 'Africa & Wildlife Safaris',
    tagline: 'The Great Migration, Serengeti Plains & Victoria Falls',
    bestMonths: 'July to October & Dec to March',
    averageTemp: '78°F / 26°C',
    topAttractions: ['Masai Mara National Reserve', 'Serengeti Migration', 'Ngorongoro Crater', 'Cape Town Table Mountain', 'Victoria Falls'],
    recommendedLines: ['Micato Safaris', 'Collette African Journeys', 'AmaWaterways Africa Chobe', 'Tauck'],
    imageUrl: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1000&q=80',
    summary: 'The ultimate bucket-list adventure. Witness lions, leopards, elephants, and rhinos in their natural habitat with luxury tented camps and expert naturalists.',
    startingPrice: 3450,
    bonusCredit: 500
  },
  {
    id: 'dest-themeparks',
    category: 'theme_parks',
    name: 'Theme Parks & Orlando',
    tagline: 'Immersive Magic at Walt Disney World & Universal Epic Universe',
    bestMonths: 'Year-Round (Best: Oct - May)',
    averageTemp: '79°F / 26°C',
    topAttractions: ['Star Wars: Galaxy’s Edge', 'Universal Epic Universe 2025', 'Wizarding World of Harry Potter', 'Magic Kingdom Fireworks'],
    recommendedLines: ['Disney Parks & Resorts', 'Universal Orlando Resorts', 'Disney Cruise Line'],
    imageUrl: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=1000&q=80',
    summary: 'Deluxe resort stays, early park access, personalized Genie+/Lightning Lane strategies, and bundled cruise-and-park getaways planned with zero fees.',
    startingPrice: 899,
    bonusCredit: 300
  }
];

// ----------------------------------------------------
// 5. SPECIAL DEALS DATA
// ----------------------------------------------------
export const SPECIAL_DEALS: SpecialDeal[] = [
  {
    id: 'deal-flash-caribbean-icon',
    category: 'flash_sales',
    categoryLabel: 'Wave Season Flash Sale',
    title: 'Icon of the Seas • 7-Night Caribbean + $350 Stateroom Cash',
    supplier: 'Royal Caribbean',
    vesselOrResort: 'Icon of the Seas',
    destination: 'Eastern Caribbean (Miami • CocoCay • St. Thomas)',
    dates: 'Fall 2025 - Spring 2026 Sailings',
    originalPrice: 1849,
    discountedPrice: 1299,
    bonusCreditAmount: 350,
    badgeText: 'Limited Inventory Flash',
    perks: ['Save $550 Instant Off', 'Free $350 Onboard Spending Cash', 'Kids Sail for $99 on select dates'],
    expiryNotice: 'Offer Expires Sunday 11:59 PM EST',
    imageUrl: 'https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'deal-sandals-resort-credit',
    category: 'bonus_credits',
    categoryLabel: 'Resort Spending Cash',
    title: 'Sandals Royal Curaçao • $500 Spa & Dining Credit + Free Transfers',
    supplier: 'Sandals Resorts',
    vesselOrResort: 'Sandals Royal Curaçao',
    destination: 'Curaçao, Southern Caribbean',
    dates: 'Travel through Dec 2026',
    originalPrice: 2850,
    discountedPrice: 1980,
    bonusCreditAmount: 500,
    badgeText: '$500 Extra Resort Cash',
    perks: ['$500 Red Lane Spa / Candlelight Dinner Credit', 'Free Island Tour in Convertible MINI', 'No Booking Fees Guaranteed'],
    expiryNotice: 'Book with $98 Deposit by End of Month',
    imageUrl: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'deal-military-honors',
    category: 'military',
    categoryLabel: 'Military & First Responder Honor',
    title: 'Exclusive Military & Veteran Travel Discount + Double Credit Stack',
    supplier: 'Celebrity Cruises & Sandals',
    vesselOrResort: 'All Celebrity Ships & Sandals Resorts',
    destination: 'Worldwide (Caribbean, Alaska, Europe, Mexico)',
    dates: 'Year-Round Active & Retired Duty',
    originalPrice: 2199,
    discountedPrice: 1499,
    bonusCreditAmount: 500,
    badgeText: 'Extra 10% Off + $500 Credit',
    perks: ['Additional 10% Military / Veteran discount applied on top of promos', 'Double stateroom spending cash from Cloud 9', 'Applies to Active, Retired, Veterans, Police & Fire'],
    expiryNotice: 'Always Available with Valid ID Verification',
    imageUrl: 'https://images.unsplash.com/photo-1516815231560-8f41ec531527?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'deal-kids-sail-free',
    category: 'kids_free',
    categoryLabel: 'Kids Sail Free Promotion',
    title: '3rd & 4th Guests Sail Free on Royal Caribbean & NCL Ships',
    supplier: 'Royal Caribbean / Norwegian',
    vesselOrResort: 'Symphony, Wonder, Utopia & Icon of the Seas',
    destination: 'Caribbean, Bahamas, Europe & Alaska',
    dates: 'Select Sailings Oct 2025 - Dec 2026',
    originalPrice: 3200,
    discountedPrice: 1850,
    bonusCreditAmount: 300,
    badgeText: 'Save Up to $1,400 per Cabin',
    perks: ['Guests 12 and under sail 100% free on stateroom fare (taxes only)', '$300 Onboard Spending Credit for Arcade & Treats', 'Free Youth Program & Waterpark Access'],
    expiryNotice: 'High Season Sailings Book Quickly',
    imageUrl: 'https://images.unsplash.com/photo-1761744434194-215434982be2?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'deal-past-passenger-loyalty',
    category: 'loyalty',
    categoryLabel: 'Past Guest Loyalty Multiplier',
    title: 'Crown & Anchor, Captain’s Club & Castaway Loyalty Multiplier',
    supplier: 'Royal, Celebrity & Disney',
    vesselOrResort: 'Fleetwide Worldwide',
    destination: 'Global Itineraries',
    dates: 'Any Future Voyage',
    originalPrice: 2400,
    discountedPrice: 1750,
    bonusCreditAmount: 600,
    badgeText: 'Retain Tier + Extra Cash',
    perks: ['You keep 100% of your loyalty points & tier status benefits', 'Cloud 9 stacks additional consortium onboard cash', 'Priority stateroom category upgrades'],
    expiryNotice: 'Provide Loyalty Number at Booking',
    imageUrl: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'deal-last-minute-bahamas',
    category: 'last_minute',
    categoryLabel: 'Last-Minute 30-Day Escape',
    title: '4-Night Bahamas & Perfect Day CocoCay Weekend Getaway',
    supplier: 'Royal Caribbean',
    vesselOrResort: 'Utopia of the Seas (From Port Canaveral)',
    destination: 'Bahamas & CocoCay',
    dates: 'Next 30 - 60 Days',
    originalPrice: 899,
    discountedPrice: 489,
    bonusCreditAmount: 150,
    badgeText: 'Save 45% Instantly',
    perks: ['Weekend getaway leaving Friday returning Monday', '$150 Instant Stateroom Spending Voucher', 'Zero Planning Fees'],
    expiryNotice: 'Last 8 Staterooms at this Rate',
    imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80'
  }
];

// ----------------------------------------------------
// 6. EXTRAS DATA
// ----------------------------------------------------
export const EXTRAS_SERVICES: ExtraService[] = [
  {
    id: 'extra-shore-excursions',
    category: 'excursions',
    title: 'Curated Shore Excursions & Private Day Passes',
    subtitle: 'Save up to 40% vs Cruise Line Desk with Guaranteed Return-to-Ship',
    description: 'We partner directly with Project Expedition and Shorefox to deliver intimate small-group adventures, private catamarans, helicopter glacier treks, and resort day passes with 100% money-back return-to-ship guarantees.',
    iconName: 'Compass',
    benefits: [
      'Smaller groups with personalized local storytelling',
      'Full refund if your ship misses the port due to weather',
      'Guaranteed on-time return to the ship or we cover travel costs',
      'Exclusive VIP private cabanas & skip-the-line access'
    ],
    partner: 'Project Expedition & Shorefox Certified',
    actionText: 'Explore Excursions',
    imageUrl: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'extra-travel-insurance',
    category: 'insurance',
    title: 'Comprehensive Travel Protection & Medical Coverage',
    subtitle: 'Protect Your Vacation Investment Against Unexpected Cancellations',
    description: 'Travel with complete peace of mind. Our Allianz and Travel Guard insurance packages cover trip cancellations, medical emergencies overseas, emergency air evacuations, baggage delays, and Cancel For Any Reason (CFAR) options.',
    iconName: 'ShieldCheck',
    benefits: [
      '100% trip cancellation reimbursement for covered reasons',
      '$50,000+ emergency medical & $500,000 medical evacuation',
      'Coverage for pre-existing medical conditions (when purchased early)',
      '24/7 global emergency travel assistance hotline'
    ],
    partner: 'Allianz Global Assistance & Travel Guard',
    actionText: 'Get Insurance Quote',
    imageUrl: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'extra-flights-hotels',
    category: 'flights_hotels',
    title: 'Pre/Post-Cruise Hotels, Airfare & Transfers',
    subtitle: 'Seamless Door-to-Stateroom Logistics Coordination',
    description: 'Never stress about travel day disruptions. We bundle discounted airline tickets, hand-selected 4-star pre-cruise hotels near the embarkation ports, and private luxury airport-to-ship motorcoach transfers.',
    iconName: 'Plane',
    benefits: [
      'Stress-free arrival day with guaranteed pre-cruise hotel blocks',
      'Luggage transfer directly from airport to your stateroom door',
      '24/7 flight delay monitoring and rebooking assistance',
      'Discounted consortium hotel rates with free breakfast included'
    ],
    partner: 'World Travel Holdings Air & Hotel Desk',
    actionText: 'Coordinate Air & Hotels',
    imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'extra-honeymoon-registry',
    category: 'registry',
    title: 'Honeymoon, Wedding & Milestone Gift Registry',
    subtitle: 'Let Friends & Family Gift Unforgettable Vacation Memories',
    description: 'Planning a honeymoon, destination wedding, anniversary, or retirement celebration? Set up a complimentary Dream Vacations Gift Registry where guests can contribute toward your stateroom, spa treatments, shore excursions, or private dinners.',
    iconName: 'Gift',
    benefits: [
      'Free personalized registry webpage with photos and couple story',
      'Direct contribution toward stateroom upgrades, spa, or excursions',
      'Downloadable announcement cards for wedding invitations',
      'Dedicated wedding group coordinator for seamless group booking'
    ],
    partner: 'Dream Vacations Honeymoon Wishes Registry',
    actionText: 'Create Free Registry',
    imageUrl: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'extra-price-drop-monitoring',
    category: 'price_drop',
    title: 'Automated 24/7 Price Drop Re-Fare Tracking',
    subtitle: 'If the Price Drops Before Final Payment, We Reprice It Automatically',
    description: 'Our proprietary rate-tracking algorithm constantly checks fare adjustments across all cruise lines and resorts. If your booked stateroom or category decreases in cost, we submit a re-fare request to save you cash or secure bonus shipboard credits.',
    iconName: 'TrendingDown',
    benefits: [
      'Automated rate sweeps 7 days a week',
      'Re-fare adjustments applied directly to your remaining balance',
      'Opportunity to upgrade to balcony or suite at zero added cost',
      'No fees or charges for reprocessing fare adjustments'
    ],
    partner: 'Cloud 9 Travels Guarantee',
    actionText: 'Learn About Repricing',
    imageUrl: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'extra-digital-brochures',
    category: 'brochures',
    title: 'Digital Travel Guides & Video Destination Library',
    subtitle: 'Virtual Ship Walkthroughs & Curated Destination Brochures',
    description: 'Explore high-definition 4K ship walkthroughs, resort drone footage, deck plans, and digital destination guidebooks for the Caribbean, Alaska, Europe, and Asia before making your vacation decision.',
    iconName: 'Video',
    benefits: [
      'Virtual stateroom 360° panoramas and deck plan comparison',
      'Downloadable PDF destination guides with packing checklists',
      'Insider dining recommendations and kids club schedules',
      'Direct consultation follow-up with Narmin & Naushad Kermally'
    ],
    partner: 'Dream Vacations Digital Media Studio',
    actionText: 'Browse Video Library',
    imageUrl: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1000&q=80'
  }
];

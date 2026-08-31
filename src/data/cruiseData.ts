import { CruiseDeal, ComparisonFeature, Testimonial, GalleryItem, FaqItem, TravelTip, SocialPost } from '../types';

export const CRUISE_DEALS: CruiseDeal[] = [
  // --- 1. OCEAN CRUISES ---
  {
    id: 'deal-icon-caribbean',
    category: 'ocean_cruise',
    categoryLabel: 'Ocean Cruise',
    title: '7-Night Eastern Caribbean & Perfect Day at CocoCay',
    cruiseLine: 'Royal Caribbean',
    shipName: 'Icon of the Seas',
    destination: 'Eastern Caribbean & Bahamas',
    region: 'Caribbean',
    durationNights: 7,
    departurePort: 'Miami, Florida',
    departureDates: ['Oct 14, 2025', 'Nov 18, 2025', 'Dec 09, 2025', 'Jan 20, 2026', 'Feb 17, 2026'],
    portsOfCall: ['Miami', 'Philipsburg, St. Maarten', 'Charlotte Amalie, St. Thomas', 'Perfect Day at CocoCay', 'Miami'],
    originalPrice: 1849,
    discountedPrice: 1299,
    onboardCredit: 350,
    exclusivePerks: [
      'Complimentary $350 Stateroom Onboard Credit',
      'Kids Sail Free on Select Sailings',
      'Exclusive Crown Lounge Access Voucher',
      'Free High-Speed VOOM Surf & Stream Wi-Fi'
    ],
    rating: 4.95,
    reviewCount: 342,
    imageUrl: 'https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&w=1200&q=80',
    badge: 'Top Family Cruise Pick',
    familyFriendlyScore: 99,
    luxuryScore: 92,
    shipHighlights: ['Category 6 Waterpark', 'Surfside Family Neighborhood', 'Over 40 Dining & Bar Concepts', 'Absolute Zero Ice Arena'],
    includedDining: ['Main Dining Room 3-Tier Multi-Course', 'Windjammer Marketplace', 'Surfside Bites', 'Park Cafe', 'Sorrento’s Pizza'],
    itineraryDays: [
      { day: 1, port: 'Miami, Florida', activity: 'Embarkation & Welcome Bon Voyage Sailaway', arriveTime: '11:00 AM', departTime: '5:00 PM' },
      { day: 2, port: 'Cruising at Sea', activity: 'Explore Category 6 Waterpark & AquaDome Show' },
      { day: 3, port: 'Philipsburg, St. Maarten', activity: 'Maho Beach plane spotting or catamaran snorkel tour', arriveTime: '8:00 AM', departTime: '6:00 PM' },
      { day: 4, port: 'Charlotte Amalie, St. Thomas', activity: 'Magens Bay crystal beach & duty-free shopping', arriveTime: '7:00 AM', departTime: '5:00 PM' },
      { day: 5, port: 'Cruising at Sea', activity: 'Surfside family games & Broadway musical evening' },
      { day: 6, port: 'Perfect Day at CocoCay, Bahamas', activity: 'Thrill Waterpark, Hideaway Beach & Helium Balloon', arriveTime: '8:00 AM', departTime: '5:00 PM' },
      { day: 7, port: 'Miami, Florida', activity: 'Disembarkation & Port Departure', arriveTime: '6:30 AM' }
    ]
  },
  {
    id: 'deal-celebrity-beyond-alaska',
    category: 'ocean_cruise',
    categoryLabel: 'Ocean Cruise',
    title: '7-Night Alaska Dawes Glacier & Inside Passage',
    cruiseLine: 'Celebrity Cruises',
    shipName: 'Celebrity Edge',
    destination: 'Alaska & Inside Passage',
    region: 'Alaska',
    durationNights: 7,
    departurePort: 'Seattle, Washington',
    departureDates: ['Jun 06, 2025', 'Jul 11, 2025', 'Aug 08, 2025', 'Sep 05, 2025'],
    portsOfCall: ['Seattle', 'Ketchikan', 'Endicott Arm & Dawes Glacier', 'Juneau', 'Skagway', 'Victoria BC', 'Seattle'],
    originalPrice: 2199,
    discountedPrice: 1549,
    onboardCredit: 450,
    exclusivePerks: [
      'Includes All Included (Drinks, Wi-Fi & Tips Covered)',
      '$450 Shore Excursion / Onboard Credit',
      'Complimentary Sunset Bar Champagne Tasting',
      'Guaranteed Veranda Category Upgrade'
    ],
    rating: 4.98,
    reviewCount: 289,
    imageUrl: 'https://images.unsplash.com/photo-1461250281059-4f83443edbdc?auto=format&fit=crop&w=1200&q=80',
    badge: 'Premium Luxury Alaska',
    familyFriendlyScore: 84,
    luxuryScore: 98,
    shipHighlights: ['Infinite Veranda Staterooms', 'The Magic Carpet Cantilevered Platform', 'Rooftop Garden', 'The Retreat Private Sundeck'],
    includedDining: ['Cosmopolitan, Normandie, Cyprus, Tuscan Restaurants', 'Oceanview Cafe', 'The Spa Cafe', 'Mast Grill'],
    itineraryDays: [
      { day: 1, port: 'Seattle, WA', activity: 'Embarkation overlooking Puget Sound', arriveTime: '12:00 PM', departTime: '4:00 PM' },
      { day: 2, port: 'At Sea', activity: 'Whale watching from Magic Carpet & The Retreat Lounge' },
      { day: 3, port: 'Ketchikan, Alaska', activity: 'Totem Bight State Park & Tongass Rainforest ziplining', arriveTime: '7:00 AM', departTime: '4:00 PM' },
      { day: 4, port: 'Endicott Arm & Juneau', activity: 'Dawes Glacier scenic cruising + Mendenhall Glacier helicopter trek', arriveTime: '6:00 AM', departTime: '9:00 PM' },
      { day: 5, port: 'Skagway, Alaska', activity: 'White Pass & Yukon Route vintage railroad journey', arriveTime: '7:00 AM', departTime: '8:30 PM' },
      { day: 6, port: 'Cruising Inside Passage', activity: 'Celebrity Chef Masterclass & Thermal Suite Spa Day' },
      { day: 7, port: 'Victoria, British Columbia', activity: 'Butchart Gardens evening illumination tour', arriveTime: '5:30 PM', departTime: '11:59 PM' }
    ]
  },
  {
    id: 'deal-disney-wish-bahamas',
    category: 'theme_park',
    categoryLabel: 'Disney Magic',
    title: '4-Night Bahamian Magical Escape with Castaway Cay',
    cruiseLine: 'Disney Cruise Line',
    shipName: 'Disney Wish',
    destination: 'Bahamas & Castaway Cay',
    region: 'Bahamas',
    durationNights: 4,
    departurePort: 'Port Canaveral (Orlando), Florida',
    departureDates: ['Oct 24, 2025', 'Nov 14, 2025', 'Dec 05, 2025', 'Jan 16, 2026', 'Feb 20, 2026'],
    portsOfCall: ['Port Canaveral', 'Nassau, Bahamas', 'Disney Castaway Cay', 'Port Canaveral'],
    originalPrice: 1950,
    discountedPrice: 1480,
    onboardCredit: 250,
    exclusivePerks: [
      'FREE $250 Disney Gift / Onboard Credit',
      'Complimentary Royal Court Tea Family Experience',
      'Dedicated Disney Destination Specialist Concierge',
      'Exclusive Pirate Night Merch Pack for Kids'
    ],
    rating: 4.97,
    reviewCount: 412,
    imageUrl: 'https://images.unsplash.com/photo-1599640842225-85d111c60e6b?auto=format&fit=crop&w=1200&q=80',
    badge: 'Ultimate Family Dream',
    familyFriendlyScore: 100,
    luxuryScore: 94,
    shipHighlights: ['AquaMouse Water Coaster at Sea', 'Arendelle: A Frozen Dining Adventure', 'Worlds of Marvel Cinematic Dining', 'Star Wars: Hyperspace Lounge'],
    includedDining: ['Rotational Dining across 3 signature themed dining rooms', 'Marceline Market', 'Festival of Foods', '24-hour Room Service'],
    itineraryDays: [
      { day: 1, port: 'Port Canaveral, FL', activity: 'Embarkation & "Set Sail on a Wish" deck party', arriveTime: '11:00 AM', departTime: '4:30 PM' },
      { day: 2, port: 'Nassau, Bahamas', activity: 'Atlantis Aquaventure or Dolphin Cay Encounter', arriveTime: '8:30 AM', departTime: '5:15 PM' },
      { day: 3, port: 'Disney Castaway Cay', activity: 'Castaway 5K, Snorkel Lagoon, Pelican Plunge & Serenity Bay', arriveTime: '8:30 AM', departTime: '4:45 PM' },
      { day: 4, port: 'Port Canaveral, FL', activity: 'Farewell breakfast & easy departure transfer', arriveTime: '7:30 AM' }
    ]
  },
  {
    id: 'deal-virgin-scarlet-riviera',
    category: 'ocean_cruise',
    categoryLabel: 'Adults-Only Cruise',
    title: '7-Night Irresistible Med & French Riviera (Adults Only 18+)',
    cruiseLine: 'Virgin Voyages',
    shipName: 'Scarlet Lady',
    destination: 'Mediterranean & French Riviera',
    region: 'Mediterranean',
    durationNights: 7,
    departurePort: 'Barcelona, Spain',
    departureDates: ['Jun 22, 2025', 'Jul 20, 2025', 'Aug 17, 2025', 'Sep 14, 2025'],
    portsOfCall: ['Barcelona', 'Toulon (Provence)', 'Marina di Carrara (Florence/Pisa)', 'Ajaccio (Corsica)', 'Ibiza (Overnight)', 'Barcelona'],
    originalPrice: 2400,
    discountedPrice: 1690,
    onboardCredit: 600,
    exclusivePerks: [
      '$600 Free Bar Tab Onboard Credit Included',
      'All 20+ Eateries Included (No Buffets, No Upcharges)',
      'Free Basic Wi-Fi, Essential Drinks & Group Fitness',
      'No Tipping or Gratuity Surprises (Ever)'
    ],
    rating: 4.93,
    reviewCount: 215,
    imageUrl: 'https://images.unsplash.com/photo-1512100356356-de1b84283e18?auto=format&fit=crop&w=1200&q=80',
    badge: 'Adults Only VIP',
    familyFriendlyScore: 0,
    luxuryScore: 96,
    shipHighlights: ['Overnight in Ibiza', 'No Kids, No Buffets, Pure Luxury', 'Redemption Spa & Thermal Suite', 'Manor Nightclub & Immersive Cabaret'],
    includedDining: ['Pink Agave Mexican', 'Extra Virgin Italian', 'The Wake Steak & Seafood', 'Gunbae Korean BBQ', 'The Test Kitchen'],
    itineraryDays: [
      { day: 1, port: 'Barcelona, Spain', activity: 'Embarkation & Rooftop Moët Champagne Toast', arriveTime: '1:00 PM', departTime: '6:00 PM' },
      { day: 2, port: 'Toulon / Provence, France', activity: 'Vineyard cycling & Cote d’Azur coast tour', arriveTime: '9:00 AM', departTime: '6:00 PM' },
      { day: 3, port: 'Marina di Carrara / Florence', activity: 'Pisa tower & Chianti wine tasting excursion', arriveTime: '8:00 AM', departTime: '8:00 PM' },
      { day: 4, port: 'Ajaccio, Corsica', activity: 'Old Town strolls & secluded turquoise cove swims', arriveTime: '8:00 AM', departTime: '5:00 PM' },
      { day: 5, port: 'Ibiza, Spain (Arrival)', activity: 'Sunset Beach Club & Dalt Vila Historic Citadel', arriveTime: '7:00 PM', departTime: 'Overnight' },
      { day: 6, port: 'Ibiza, Spain (Day 2)', activity: 'Formentera catamaran & Virgin Scarlet Night party', arriveTime: 'All Day', departTime: '6:00 PM' },
      { day: 7, port: 'Barcelona, Spain', activity: 'Morning disembarkation in Gothic Quarter', arriveTime: '6:30 AM' }
    ]
  },

  // --- 2. RIVER CRUISES ---
  {
    id: 'deal-amawaterways-danube',
    category: 'river_cruise',
    categoryLabel: 'Luxury River Cruise',
    title: '7-Night Romantic Danube River Cruise & Castles',
    cruiseLine: 'AmaWaterways',
    shipName: 'AmaMagna (Double-Width Luxury Ship)',
    destination: 'Danube River (Budapest to Vilshofen)',
    region: 'Europe',
    durationNights: 7,
    departurePort: 'Budapest, Hungary',
    departureDates: ['May 11, 2025', 'Jun 15, 2025', 'Jul 20, 2025', 'Sep 14, 2025', 'Oct 19, 2025'],
    portsOfCall: ['Budapest', 'Bratislava', 'Vienna', 'Weissenkirchen (Dürnstein)', 'Melk', 'Linz (Salzburg)', 'Passau', 'Vilshofen'],
    originalPrice: 3899,
    discountedPrice: 2899,
    onboardCredit: 300,
    exclusivePerks: [
      'Complimentary Daily Shore Excursions in Every Port',
      'Free Fine Wine, Craft Beer & Soft Drinks with Lunch & Dinner',
      'Special Oktoberfest Celebration in Vilshofen Exclusive to Ama',
      'Complimentary Fleet of Bicycles & Wellness Host on Board'
    ],
    rating: 4.99,
    reviewCount: 168,
    imageUrl: 'https://images.unsplash.com/photo-1541849546-216549ae216d?auto=format&fit=crop&w=1200&q=80',
    badge: 'All-Inclusive River Luxury',
    familyFriendlyScore: 78,
    luxuryScore: 99,
    shipHighlights: ['Twice the Width of Traditional River Ships', '4 Unique Gourmet Dining Venues', 'Sun Deck Heated Pool & Whirlpool', 'Full-Service Zen Wellness Studio'],
    includedDining: ['Main Restaurant Multi-Course Farm-to-Table', 'The Chef’s Table Experiential Tasting', 'Al Fresco Restaurant', 'Jimmy’s Wine Bar & Grill'],
    itineraryDays: [
      { day: 1, port: 'Budapest, Hungary', activity: 'Embarkation & Illuminations evening cruise along the Parliament', arriveTime: '3:00 PM', departTime: 'Overnight' },
      { day: 2, port: 'Budapest & Bratislava', activity: 'Buda Castle tour or cycling along the Danube promenade', arriveTime: '8:00 AM', departTime: '6:00 PM' },
      { day: 3, port: 'Vienna, Austria', activity: 'Imperial Schönbrunn Palace & Mozart orchestral concert evening', arriveTime: '7:00 AM', departTime: 'Overnight' },
      { day: 4, port: 'Wachau Valley & Melk', activity: 'Scenic cruising through Wachau + Melk Benedictine Abbey tour', arriveTime: '9:00 AM', departTime: '7:00 PM' },
      { day: 5, port: 'Linz (Salzburg excursion)', activity: 'Full day in Salzburg exploring "Sound of Music" & historic old town', arriveTime: '8:00 AM', departTime: '8:00 PM' },
      { day: 6, port: 'Passau, Germany', activity: 'Three Rivers city walking tour & St. Stephen’s cathedral pipe organ', arriveTime: '8:30 AM', departTime: '4:00 PM' },
      { day: 7, port: 'Vilshofen, Germany', activity: 'Private Bavarian Oktoberfest tent with pretzels, beer & brass music', arriveTime: '5:00 PM', departTime: 'Overnight' }
    ]
  },
  {
    id: 'deal-viking-rhine',
    category: 'river_cruise',
    categoryLabel: 'River Cruise',
    title: '8-Day Rhine Getaway: Castles & Cathedrals',
    cruiseLine: 'Viking River Cruises',
    shipName: 'Viking Longship Ingvi',
    destination: 'Rhine River (Amsterdam to Basel)',
    region: 'Europe',
    durationNights: 7,
    departurePort: 'Amsterdam, Netherlands',
    departureDates: ['May 04, 2025', 'Jun 08, 2025', 'Jul 13, 2025', 'Aug 17, 2025', 'Oct 12, 2025'],
    portsOfCall: ['Amsterdam', 'Kinderdijk', 'Cologne', 'Koblenz & Middle Rhine', 'Speyer', 'Strasbourg', 'Breisach (Black Forest)', 'Basel'],
    originalPrice: 3299,
    discountedPrice: 2499,
    onboardCredit: 250,
    exclusivePerks: [
      '$250 Stateroom Spending Credit per cabin',
      'Guided Shore Excursions in Every Port Included',
      'Free Beer, Wine & Soft Drinks with Onboard Lunches & Dinners',
      'Free High-Speed Wi-Fi throughout Ship'
    ],
    rating: 4.96,
    reviewCount: 224,
    imageUrl: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=80',
    badge: 'Top European River',
    familyFriendlyScore: 65,
    luxuryScore: 97,
    shipHighlights: ['Aquavit Terrace Indoor/Outdoor Lounge', 'Scandinavian Minimalist Design', 'Solar Panels & Hybrid Propulsion', 'Veranda Staterooms with French Balconies'],
    includedDining: ['The Restaurant Pan-European Gourmet', 'Aquavit Terrace Al Fresco Casual', 'Daily Afternoon Tea Service'],
    itineraryDays: [
      { day: 1, port: 'Amsterdam, Netherlands', activity: 'Embarkation & glass-topped canal boat tour', arriveTime: '12:00 PM', departTime: 'Overnight' },
      { day: 2, port: 'Kinderdijk, Netherlands', activity: 'Historic 18th-century UNESCO windmills tour', arriveTime: '8:00 AM', departTime: '1:00 PM' },
      { day: 3, port: 'Cologne, Germany', activity: 'Gothic Cologne Cathedral walking tour & Kölsch beer tasting', arriveTime: '9:00 AM', departTime: '6:00 PM' },
      { day: 4, port: 'Middle Rhine & Marksburg Castle', activity: 'Sailing past 30+ hilltop castles & legendary Lorelei Rock', arriveTime: '7:00 AM', departTime: '5:00 PM' },
      { day: 5, port: 'Speyer & Heidelberg', activity: 'Speyer Imperial Cathedral or excursion to Heidelberg Castle ruins', arriveTime: '8:00 AM', departTime: '6:30 PM' },
      { day: 6, port: 'Strasbourg, France', activity: 'Alsatian timbered houses in Petite France & astronomical clock', arriveTime: '8:30 AM', departTime: '7:00 PM' },
      { day: 7, port: 'Breisach & Black Forest', activity: 'Cuckoo clock workshop & Black Forest cherry gateau masterclass', arriveTime: '7:30 AM', departTime: '5:00 PM' },
      { day: 8, port: 'Basel, Switzerland', activity: 'Disembarkation overlooking Swiss Alps', arriveTime: '8:00 AM' }
    ]
  },

  // --- 3. ALL-INCLUSIVE RESORTS ---
  {
    id: 'deal-sandals-royal-curacao',
    category: 'all_inclusive_resort',
    categoryLabel: 'All-Inclusive Resort',
    title: '6-Night Unlimited-Luxury Romance Escape',
    cruiseLine: 'Sandals Resorts (Certified Specialist)',
    shipName: 'Sandals Royal Curaçao',
    destination: 'Santa Barbara Estate, Curaçao',
    region: 'Caribbean',
    durationNights: 6,
    departurePort: 'Curaçao International Airport (CUR)',
    departureDates: ['Daily Departures Year-Round', 'Flexible Dates 2025-2026'],
    portsOfCall: ['Spanish Water Bay', 'Willemstad Dutch Quarter', 'Private Island Beach & Snorkel Lagoon'],
    originalPrice: 4200,
    discountedPrice: 2990,
    onboardCredit: 500,
    exclusivePerks: [
      '$500 Exclusive Red Lane Spa & Excursion Resort Credit',
      'Complimentary Convertible MINI Cooper for Exploring the Island (Select Suites)',
      'Unlimited Fine Dining at 8 Gourmet Restaurants + 3 Beach Food Trucks',
      'Unlimited Premium Liquors, Robert Mondavi Wines & Scuba Diving'
    ],
    rating: 4.98,
    reviewCount: 310,
    imageUrl: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
    badge: 'Couples & Honeymoon VIP',
    familyFriendlyScore: 0,
    luxuryScore: 100,
    shipHighlights: ['Dos Awa Two-Level Infinity Pool', 'Seaside Bungalows with Private Pools', 'Off-Site Island "Dine Around" Credit', 'Dutch-Style Free Bicycle Rentals'],
    includedDining: ['Vincent European Fusion', 'Aolos Mediterranean', 'Butch’s Island Chophouse', 'Gatsu Gatsu Sushi', 'Strand Seafood Grill'],
    itineraryDays: [
      { day: 1, port: 'Curaçao Airport (CUR)', activity: 'Private roundtrip airport transfer & champagne check-in' },
      { day: 2, port: 'Santa Barbara Estate', activity: 'Lounge at Dos Awa infinity pool & scuba diving session' },
      { day: 3, port: 'Willemstad Exploration', activity: 'Complimentary MINI Cooper convertible drive to UNESCO Handelskade' },
      { day: 4, port: 'Spanish Water Lagoon', activity: 'Sunset catamaran cruise and private candlelit beach dinner' },
      { day: 5, port: 'Red Lane Spa Day', activity: 'Couples tropical stone massage with your $500 resort credit' },
      { day: 6, port: 'Private Beach Cabana', activity: 'Paddleboarding & beachside gourmet food trucks' },
      { day: 7, port: 'Curaçao Departure', activity: 'Farewell breakfast & seamless airport transfer' }
    ]
  },
  {
    id: 'deal-beaches-turks-caicos',
    category: 'all_inclusive_resort',
    categoryLabel: 'Family All-Inclusive',
    title: '5-Night Ultimate Family All-Inclusive on Grace Bay',
    cruiseLine: 'Beaches Resorts (Certified Specialist)',
    shipName: 'Beaches Turks & Caicos Resort Villages & Spa',
    destination: 'Grace Bay, Providenciales, Turks & Caicos',
    region: 'Caribbean',
    durationNights: 5,
    departurePort: 'Providenciales Airport (PLS)',
    departureDates: ['Flexible Year-Round Bookings 2025-2026'],
    portsOfCall: ['Grace Bay Beach (World’s #1 Beach)', 'Pirates Island Waterpark', 'Coral Gardens Reef'],
    originalPrice: 4800,
    discountedPrice: 3450,
    onboardCredit: 400,
    exclusivePerks: [
      '$400 Resort Spending Credit + Free Catamaran Excursion',
      'Free Access to 45,000 sq ft Pirates Island Waterpark',
      'Certified Nanny Care & Sesame Street Kids Camp Included',
      'Unlimited Dining at 21 Global Gourmet Restaurants'
    ],
    rating: 4.96,
    reviewCount: 480,
    imageUrl: 'https://images.unsplash.com/photo-1761744434194-215434982be2?auto=format&fit=crop&w=1200&q=80',
    badge: 'Top Family Resort on Earth',
    familyFriendlyScore: 100,
    luxuryScore: 96,
    shipHighlights: ['5 Distinct Themed Villages', '12-Mile Powder White Grace Bay Beach', 'Surf Simulator & Lazy River', 'Certified Autism Center Staff'],
    includedDining: ['Mario’s Italian', 'Schooners Seafood', 'Kimonos Teppanyaki', 'Barefoot by the Sea', 'Bobby Dee’s 50s Diner'],
    itineraryDays: [
      { day: 1, port: 'Providenciales (PLS)', activity: 'Complimentary airport shuttle & Sesame Street welcome parade' },
      { day: 2, port: 'Pirates Island Waterpark', activity: 'Surf simulator, lazy river, and slides for kids while parents relax' },
      { day: 3, port: 'Grace Bay Coral Reef', activity: 'Snorkeling boat trip & catamaran sailing on turquoise water' },
      { day: 4, port: 'Key West & Italian Villages', activity: 'Gourmet dining at Kimonos & beach bonfire with live music' },
      { day: 5, port: 'Red Lane Spa & Water Sports', activity: 'Paddleboards, glass-bottom boat & Xbox gaming lounge' },
      { day: 6, port: 'Departure', activity: 'Farewell character breakfast & airport return' }
    ]
  },
  {
    id: 'deal-secrets-akumal',
    category: 'all_inclusive_resort',
    categoryLabel: 'All-Inclusive Resort',
    title: '5-Night Adults-Only Secrets Akumal Riviera Maya',
    cruiseLine: 'Hyatt Inclusive Collection / Secrets',
    shipName: 'Secrets Akumal Riviera Maya (AAA 5-Diamond)',
    destination: 'Akumal Beach, Riviera Maya, Mexico',
    region: 'Mexico',
    durationNights: 5,
    departurePort: 'Cancun (CUN) or Tulum (TQO) Airport',
    departureDates: ['Daily Departures 2025-2026'],
    portsOfCall: ['Akumal Bay (Snorkel with Wild Sea Turtles)', 'Tulum Mayan Ruins', 'Cenote Dos Ojos'],
    originalPrice: 3100,
    discountedPrice: 2150,
    onboardCredit: 300,
    exclusivePerks: [
      '$300 Resort Coupons for Spa & Wine Cellar Dinners',
      'Direct Snorkeling with Wild Sea Turtles Right off Resort Beach',
      'Unlimited 24-Hour Room Service & Top-Shelf Spirits',
      'Preferred Club VIP Upgrade Available'
    ],
    rating: 4.97,
    reviewCount: 290,
    imageUrl: 'https://images.unsplash.com/photo-1507525428033-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    badge: 'Luxury Adults-Only Mexico',
    familyFriendlyScore: 0,
    luxuryScore: 98,
    shipHighlights: ['Calm Turquoise Bay with Sea Turtles', '3 Expansive Swimming Pools', 'Hydrotherapy Spa Circuit', 'Open-Air Theater & Nightly Entertainment'],
    includedDining: ['Market Cafe International', 'El Patio Authentic Mexican', 'Himitsu Pan-Asian & Teppanyaki', 'Portofino Italian', 'Oceana Fresh Seafood'],
    itineraryDays: [
      { day: 1, port: 'Cancun/Tulum Airport', activity: 'Private ground transfer & chilled towel/sparkling wine greeting' },
      { day: 2, port: 'Akumal Bay', activity: 'Morning swim with resident green sea turtles & beachside infinity pool' },
      { day: 3, port: 'Tulum & Cenote Trip', activity: 'Optional VIP excursion to cliffside Tulum ruins & crystal cenote' },
      { day: 4, port: 'Secrets Spa by Pevonia', activity: 'Hydrotherapy circuit followed by oceanfront sunset dinner' },
      { day: 5, port: 'Beach Cabana Day', activity: 'Kayaking, cocktail masterclass, and live Mexican fiesta show' },
      { day: 6, port: 'Departure', activity: 'Late checkout & luxury transfer to airport' }
    ]
  },

  // --- 4. GUIDED TOURS & SAFARIS ---
  {
    id: 'deal-globus-italy',
    category: 'guided_tour',
    categoryLabel: 'Guided Tour',
    title: '10-Day Best of Italy: Rome, Florence, Venice & Tuscany',
    cruiseLine: 'Globus / Cosmos / Avalon Family',
    shipName: 'Small-Group Escorted Luxury Motorcoach',
    destination: 'Italy (Rome to Venice)',
    region: 'Europe',
    durationNights: 9,
    departurePort: 'Rome Fiumicino (FCO)',
    departureDates: ['Apr 18, 2025', 'May 16, 2025', 'Jun 13, 2025', 'Sep 12, 2025', 'Oct 10, 2025'],
    portsOfCall: ['Rome', 'Vatican City', 'Orvieto', 'Siena & Chianti', 'Florence', 'Pisa', 'Venice & Murano Island'],
    originalPrice: 3850,
    discountedPrice: 2950,
    onboardCredit: 250,
    exclusivePerks: [
      'VIP Skip-the-Line Admission to Vatican Museums & Colosseum',
      'Exclusive Private Tuscan Vineyard Dinner with Wine Pairings',
      'Private Gondola Serenade in Venice Included',
      'First-Class Hand-Selected 4-Star Hotels with Daily Buffet Breakfast'
    ],
    rating: 4.97,
    reviewCount: 185,
    imageUrl: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80',
    badge: 'Premier European Tour',
    familyFriendlyScore: 82,
    luxuryScore: 97,
    shipHighlights: ['Dedicated Local Tour Director', 'Private Air-Conditioned Motorcoach with Wi-Fi', 'Baggage Handling & Hotel Porterage', 'Curated Local Food Tastings'],
    includedDining: ['Daily Buffet Breakfasts', 'Welcome Dinner in Rome Trastevere', 'Tuscan Wine Estate Feast', 'Venetian Farewell Banquet'],
    itineraryDays: [
      { day: 1, port: 'Rome, Italy', activity: 'Arrival transfer & welcome dinner in charming Trastevere' },
      { day: 2, port: 'Rome & Vatican City', activity: 'Skip-the-line VIP tour of St. Peter’s Basilica & Sistine Chapel' },
      { day: 3, port: 'Ancient Rome', activity: 'Colosseum & Roman Forum guided walk + Trevi Fountain stroll' },
      { day: 4, port: 'Orvieto & Tuscany', activity: 'Hilltop Orvieto cathedral & Chianti vineyard olive oil tasting' },
      { day: 5, port: 'Florence (Cradle of Renaissance)', activity: 'Michelangelo’s David at Accademia & Piazza del Duomo' },
      { day: 6, port: 'Pisa & Tuscan Countryside', activity: 'Leaning Tower of Pisa photo-stop & artisan leather demonstration' },
      { day: 7, port: 'Venice (Arrival)', activity: 'Private water taxi across St. Mark’s Basin & Doge’s Palace' },
      { day: 8, port: 'Venice & Murano', activity: 'Murano glassblower masterclass & private sunset gondola ride' },
      { day: 9, port: 'Venice Farewell', activity: 'Gourmet Venetian seafood banquet with tour director' },
      { day: 10, port: 'Venice Airport', activity: 'Disembarkation & transfer for flight home' }
    ]
  },
  {
    id: 'deal-collette-african-safari',
    category: 'guided_tour',
    categoryLabel: 'African Safari',
    title: '11-Day Kenya & Tanzania Classic Safari Wildlife Expedition',
    cruiseLine: 'Collette / Abercrombie & Kent Partner',
    shipName: 'Custom 4x4 Safari Land Cruisers & Luxury Lodges',
    destination: 'Kenya & Tanzania (Serengeti, Masai Mara & Ngorongoro)',
    region: 'Africa & Safari',
    durationNights: 10,
    departurePort: 'Nairobi (NBO), Kenya',
    departureDates: ['Jun 20, 2025', 'Jul 18, 2025', 'Aug 15, 2025', 'Sep 19, 2025', 'Oct 17, 2025'],
    portsOfCall: ['Nairobi', 'Amboseli (Mt. Kilimanjaro Views)', 'Ngorongoro Crater', 'Serengeti National Park', 'Masai Mara'],
    originalPrice: 6200,
    discountedPrice: 4890,
    onboardCredit: 350,
    exclusivePerks: [
      'Guaranteed Window Seat in Custom Pop-Top 4x4 Safari Cruisers',
      'Exclusive Sunset Bush Dinner with Traditional Maasai Dancers',
      'All National Park Conservation & Game Reserve Fees Covered ($900+ Value)',
      'Expert Certified Naturalist Guide & Spotter on Every Drive'
    ],
    rating: 4.99,
    reviewCount: 142,
    imageUrl: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=80',
    badge: 'Bucket List Wildlife Adventure',
    familyFriendlyScore: 80,
    luxuryScore: 100,
    shipHighlights: ['Luxury Tented Safari Camps', 'View the "Big Five" Animals Up Close', 'Ngorongoro Crater Floor Safari', 'Scenic Bush Flights Included'],
    includedDining: ['All Meals Included on Safari (Breakfast, Lunch & Dinner)', 'Campfire Sun-Downer Cocktails', 'Bush Picnics under Acacia Trees'],
    itineraryDays: [
      { day: 1, port: 'Nairobi, Kenya', activity: 'Arrival & transfer to luxury boutique city hotel' },
      { day: 2, port: 'Amboseli National Park', activity: 'Elephant herds against the majestic snows of Mt. Kilimanjaro' },
      { day: 3, port: 'Amboseli to Lake Manyara', activity: 'Tree-climbing lions and flamingo-filled alkaline lake' },
      { day: 4, port: 'Ngorongoro Crater', activity: 'Descend 2,000 feet into volcanic caldera to spot endangered black rhinos' },
      { day: 5, port: 'Serengeti National Park', activity: 'Endless plains game drive following the Great Migration' },
      { day: 6, port: 'Central Serengeti', activity: 'Morning and afternoon game drives tracking big cat prides' },
      { day: 7, port: 'Serengeti to Masai Mara', activity: 'Scenic bush flight across the Mara River' },
      { day: 8, port: 'Masai Mara Game Reserve', activity: 'Cheetah hunts and hippos in the Mara river pools' },
      { day: 9, port: 'Maasai Cultural Village', activity: 'Authentic Maasai community visit and spear throwing' },
      { day: 10, port: 'Masai Mara Farewell', activity: 'Hot air balloon safari (optional) & farewell bush banquet' },
      { day: 11, port: 'Nairobi Departure', activity: 'Flight to Nairobi & evening international departures' }
    ]
  },

  // --- 5. THEME PARKS & RESORTS ---
  {
    id: 'deal-disney-world-universal-vip',
    category: 'theme_park',
    categoryLabel: 'Theme Park Package',
    title: '6-Day Disney World & Universal Epic Universe Family VIP Package',
    cruiseLine: 'Disney & Universal Parks (Authorized Agency)',
    shipName: 'Disney Deluxe Resort Hotel & Universal Hotel Combo',
    destination: 'Orlando, Florida (Magic Kingdom, Epcot, Hollywood Studios, Epic Universe)',
    region: 'Theme Parks',
    durationNights: 5,
    departurePort: 'Orlando International Airport (MCO)',
    departureDates: ['Custom Dates Anytime 2025-2026'],
    portsOfCall: ['Magic Kingdom', 'Epcot World Celebration', 'Hollywood Studios (Star Wars)', 'Universal Epic Universe (New!)', 'Islands of Adventure'],
    originalPrice: 3600,
    discountedPrice: 2790,
    onboardCredit: 300,
    exclusivePerks: [
      '$300 Disney / Universal Park Spending Gift Card',
      'Early Theme Park Entry (30-min head start before general public every day)',
      'Complimentary Custom Daily Itinerary & Lightning Lane Concierge Strategy',
      'Free Theme Park Transportation & Deluxe Resort Pool Access'
    ],
    rating: 4.98,
    reviewCount: 365,
    imageUrl: 'https://images.unsplash.com/photo-1599640842225-85d111c60e6b?auto=format&fit=crop&w=1200&q=80',
    badge: 'Orlando Family Magic',
    familyFriendlyScore: 100,
    luxuryScore: 95,
    shipHighlights: ['Access to brand new Universal Epic Universe', 'Star Wars: Galaxy’s Edge & Avatar Pandora', 'Character Dining Reservations Handled', 'Monorail & Skyliner Resort Access'],
    includedDining: ['Resort Dining Discounts', 'Pre-Booked Hard-to-Get Character Breakfasts', 'Epcot International Food & Wine Festival Advice'],
    itineraryDays: [
      { day: 1, port: 'Orlando (MCO)', activity: 'Check in to Deluxe Disney Resort & evening at Disney Springs' },
      { day: 2, port: 'Magic Kingdom Park', activity: 'Tron Lightcycle Run, Space Mountain, and Happily Ever After Fireworks' },
      { day: 3, port: 'Disney’s Hollywood Studios & Epcot', activity: 'Rise of the Resistance, Slinky Dog Dash & Guardians of the Galaxy: Cosmic Rewind' },
      { day: 4, port: 'Universal Epic Universe (Brand New!)', activity: 'Super Nintendo World, Dark Universe & Ministry of Magic' },
      { day: 5, port: 'Universal Islands of Adventure', activity: 'Wizarding World of Harry Potter (Hagrid’s Motorbike) & VelociCoaster' },
      { day: 6, port: 'Departure', activity: 'Resort pool morning and airport transfer' }
    ]
  }
];

export const COMPARISON_FEATURES: ComparisonFeature[] = [
  {
    feature: '100% Best Price Guarantee & Rate Match',
    cloud9: {
      available: true,
      text: 'We match any lower advertised fleet/resort rate + add exclusive bonus perks',
      highlight: true
    },
    directBooking: {
      available: true,
      text: 'Standard price only; never gives you extra consortium agency credits'
    },
    genericAgencies: {
      available: false,
      text: 'Often excludes special promotions with hidden restrictions'
    }
  },
  {
    feature: 'Exclusive Extra Spending Cash / Credits',
    cloud9: {
      available: true,
      text: 'Up to $1,000 Free Stateroom or Resort Credit funded by our Dream Vacations volume',
      highlight: true
    },
    directBooking: {
      available: false,
      text: '$0 (Direct cruise lines & resorts keep all consortium marketing perks)'
    },
    genericAgencies: {
      available: true,
      text: 'Only $25 - $50 with tedious rebate forms'
    }
  },
  {
    feature: 'Automatic 24/7 Price-Drop Repricing',
    cloud9: {
      available: true,
      text: 'We monitor your reservation 24/7 and proactively re-fare you when prices drop',
      highlight: true
    },
    directBooking: {
      available: false,
      text: 'Never alerted; suppliers profit when you pay full initial rate'
    },
    genericAgencies: {
      available: false,
      text: 'Manual requests only; often charge $50 change fees'
    }
  },
  {
    feature: 'Certified Master Travel Advisors (Narmin & Naushad Kermally)',
    cloud9: {
      available: true,
      text: 'Direct access to franchise owners with 14+ years of expertise (Cell, Email & WhatsApp)',
      highlight: true
    },
    directBooking: {
      available: false,
      text: 'Random outsourced call center rep every single time you dial'
    },
    genericAgencies: {
      available: false,
      text: 'Impersonal support ticketing queues'
    }
  },
  {
    feature: 'Zero Hidden Booking or Advisory Fees',
    cloud9: {
      available: true,
      text: '100% Free VIP Concierge Planning — Our suppliers compensate us directly',
      highlight: true
    },
    directBooking: {
      available: true,
      text: 'No fee, but zero extra perks or tailored itinerary planning'
    },
    genericAgencies: {
      available: false,
      text: '$35 to $100 administrative service or cancellation charges'
    }
  },
  {
    feature: 'Comprehensive Multi-Travel Expertise',
    cloud9: {
      available: true,
      text: 'Ocean Cruises, River Cruises, All-Inclusive Resorts, Guided Tours & Disney/Universal',
      highlight: true
    },
    directBooking: {
      available: false,
      text: 'Only sells their own brand; cannot bundle pre/post hotels or multi-supplier trips'
    },
    genericAgencies: {
      available: true,
      text: 'Generic booking engine without certified specialty training'
    }
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    author: 'Sarah & David J.',
    location: 'Charlotte, North Carolina',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    cruiseLine: 'Royal Caribbean',
    shipName: 'Icon of the Seas',
    destination: 'Eastern Caribbean 7-Night',
    cabinType: 'Surfside Family Suite with Balcony',
    title: 'The practical advice made traveling with our children feel simple.',
    content: 'Cloud 9 helped us compare cabin locations before we booked and kept an eye on the fare afterward. The practical tips for traveling with children were the part we appreciated most.',
    perksReceived: 'Cabin comparison, fare monitoring, and family sailing guidance',
    verified: true,
    date: 'February 2025',
    travelType: 'Family with Kids'
  },
  {
    id: 'test-2',
    author: 'Marcus & Linda V.',
    location: 'Austin, Texas',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    cruiseLine: 'Sandals Resorts (Certified Specialist)',
    shipName: 'Sandals Royal Curaçao',
    destination: 'Curaçao Romance Getaway',
    cabinType: 'Seaside Kurason Island Poolside Bungalow',
    title: 'We felt prepared before we left and looked after throughout the trip.',
    content: 'The resort, room category, airport transfer, and final travel details were explained clearly. We never felt rushed, and every question had a straightforward answer.',
    perksReceived: 'Resort comparison, transfer planning, and pre-departure support',
    verified: true,
    date: 'January 2025',
    travelType: 'Couple'
  },
  {
    id: 'test-3',
    author: 'The Patel–Alvarez Family',
    location: 'Sugar Land, Texas',
    avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    cruiseLine: 'Disney Cruise Line & AmaWaterways',
    shipName: 'Disney Wish & AmaMagna River Cruise',
    destination: 'Multi-Generation Family Reunion',
    cabinType: '4 Connected Verandah Staterooms',
    title: 'Fourteen travelers, one clear plan, and no one left guessing.',
    content: 'Coordinating grandparents, teenagers, and young children felt manageable once the reservations and dining requests were organized in one place. Everyone knew what was booked and what still needed attention.',
    perksReceived: 'Group booking organization and linked dining coordination',
    verified: true,
    date: 'December 2024',
    travelType: 'Multi-Gen Group'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  // --- SUITES & RESORTS ---
  {
    id: 'gal-suite-1',
    title: 'Luxury Ocean Balcony Suite',
    category: 'suites',
    imageUrl: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1600&q=85'
    ],
    caption: 'Spacious private veranda with whirlpool, personalized stateroom concierge, and panoramic wake views.',
    shipOrPlace: 'The Haven Suite Villa — Norwegian Prima'
  },
  {
    id: 'gal-suite-2',
    title: 'Overwater Bungalow & Plunge Pool',
    category: 'suites',
    imageUrl: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1613545325278-f24b0cae1224?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=85'
    ],
    caption: 'Glass floor ocean viewing panels and private plunge pool over the Caribbean turquoise sea.',
    shipOrPlace: 'Sandals Royal Caribbean — Over-the-Water Villa'
  },
  {
    id: 'gal-suite-3',
    title: 'AmaMagna Grand River Suite',
    category: 'suites',
    imageUrl: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1600&q=85'
    ],
    caption: 'Full-width double balcony overlooking riverside European castles on the Danube.',
    shipOrPlace: 'AmaWaterways — AmaMagna Suite'
  },

  // --- FINE DINING ---
  {
    id: 'gal-din-1',
    title: 'Gourmet Steakhouse & Sommelier Selection',
    category: 'dining',
    imageUrl: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=85'
    ],
    caption: 'Prime cuts and curated vintage wines included in luxury all-inclusive and cruise packages.',
    shipOrPlace: 'Celebrity Edge — Fine Cut Steakhouse'
  },
  {
    id: 'gal-din-2',
    title: 'Beachfront Sunset Candlelit Dining',
    category: 'dining',
    imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1600&q=85'
    ],
    caption: 'Private table on the sand with waves lapping the shore and personalized multi-course service.',
    shipOrPlace: 'Secrets Akumal — Barefoot Seafood'
  },

  // --- ACTIVITIES & POOLS ---
  {
    id: 'gal-act-1',
    title: 'Infinity Edge Suspended Ocean Pool',
    category: 'activities',
    imageUrl: 'https://images.unsplash.com/photo-1507525428033-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1507525428033-b723cf961d3e?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1600&q=85'
    ],
    caption: 'Tranquil daybeds, private cabanas, and handcrafted tropical cocktails by the pool.',
    shipOrPlace: 'Sandals Royal Curaçao — Dos Awa Pool'
  },
  {
    id: 'gal-act-2',
    title: 'River Cruise Sun Deck & Heated Pool',
    category: 'activities',
    imageUrl: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1600&q=85'
    ],
    caption: 'Lounging on the sun deck while gliding past Austrian vineyards and UNESCO heritage landmarks.',
    shipOrPlace: 'AmaWaterways — AmaMagna Sun Deck'
  },

  // --- DESTINATIONS ---
  {
    id: 'gal-dest-1',
    title: 'Santorini Caldera Cliffside Excursion',
    category: 'destinations',
    imageUrl: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1600&q=85'
    ],
    caption: 'Whitewashed villages, cobblestone alleys, and blue-domed chapels perched over the Aegean Sea.',
    shipOrPlace: 'Oia, Santorini, Greece'
  },
  {
    id: 'gal-dest-2',
    title: 'Grace Bay Beach Turquoise Waters',
    category: 'destinations',
    imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=85'
    ],
    caption: 'Ranked world’s top beach with powder white sand and crystal clear coral reef waters.',
    shipOrPlace: 'Grace Bay, Turks & Caicos'
  },
  {
    id: 'gal-dest-3',
    title: 'Alaska Glacier Fjord Navigation',
    category: 'destinations',
    imageUrl: 'https://images.unsplash.com/photo-1461250281059-4f83443edbdc?auto=format&fit=crop&w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1461250281059-4f83443edbdc?auto=format&fit=crop&w=1600&q=85'
    ],
    caption: 'Sailing close to colossal calving tidewater glaciers in pristine glacial fjords.',
    shipOrPlace: 'Dawes Glacier, Alaska'
  },

  // --- FAMILY & THEME PARKS ---
  {
    id: 'gal-fam-1',
    title: 'Category 6 Record-Breaking Aqua Park',
    category: 'family',
    imageUrl: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1600&q=85'
    ],
    caption: 'Six record-setting waterslides including the tallest drop slide and family raft slide at sea.',
    shipOrPlace: 'Icon of the Seas — Thrill Island'
  },
  {
    id: 'gal-fam-2',
    title: 'Disney Character Celebrations & Castaway Cay',
    category: 'family',
    imageUrl: 'https://images.unsplash.com/photo-1599640842225-85d111c60e6b?auto=format&fit=crop&w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1599640842225-85d111c60e6b?auto=format&fit=crop&w=1600&q=85'
    ],
    caption: 'Magical character encounters, fireworks at sea, and private island family adventures.',
    shipOrPlace: 'Disney Wish & Castaway Cay'
  }
];

export const TRAVEL_TIPS: TravelTip[] = [
  {
    id: 'tip-1',
    title: 'Cruising vs All-Inclusive Resort: Which is Right for You?',
    category: 'Resort & Tour Guide',
    readTime: '3 min read',
    imageUrl: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
    snippet: 'Discover the key differences between ocean cruises, all-inclusive resorts, and river cruises to choose your perfect getaway.',
    bullets: [
      'Cruises let you wake up in a new port or island every morning without re-packing your suitcase.',
      'All-inclusive resorts provide unlimited relaxation with zero schedules, private beach loungers, and unrestricted dining & cocktails.',
      'River cruises offer intimate, culturally immersive travel right into the heart of historic European and world cities.'
    ],
    iconName: 'Compass',
    fullArticle: {
      introduction: 'At Cloud 9 Travels, one of the most common questions our clients ask is whether they should book an ocean cruise, an all-inclusive beach resort, or a river cruise. Here is our expert comparison guide to help you find the right fit for your travel style.',
      sections: [
        {
          heading: '1. The Multi-Destination Appeal of Ocean Cruising',
          content: 'If your family or group loves variety, ocean cruises are unbeatable. You unpack once and visit 3 to 5 different countries or Caribbean islands in a single week, with endless onboard entertainment and kid clubs.',
          takeaways: ['Highest entertainment and activity density', 'Perfect for active families and multi-generation groups']
        },
        {
          heading: '2. The Total Relaxation of All-Inclusive Resorts',
          content: 'At luxury resorts like Sandals, Beaches, or Secrets, everything is right outside your doorstep. You wake up on the beach, stroll to any gourmet restaurant without reservations, and enjoy premium watersports with no departure deadlines.',
          takeaways: ['Unlimited food, top-shelf liquor, and watersports included', 'Ideal for romantic honeymoons, anniversaries, and tranquil family beach getaways']
        },
        {
          heading: '3. The Cultural Intimacy of River Cruising',
          content: 'River ships dock right in city centers—steps away from historic castles, vineyards, and cathedrals in Vienna, Budapest, or the Rhine Valley, with daily excursions and local wines included.',
          takeaways: ['No sea sickness, smooth waters', 'Small ships with 100 to 190 guests for personalized luxury']
        }
      ],
      proTip: 'Let our certified advisors match your destination goals with supplier-exclusive bonus credits and room upgrades at zero booking cost!',
      recommendedShips: ['Icon of the Seas', 'Sandals Royal Curaçao', 'AmaMagna'],
      checklist: [
        'Decide on pace (active exploration vs laid-back beach lounge)',
        'Check passport expiration dates (must be valid 6+ months past travel)',
        'Ask about our exclusive resort and stateroom cash bonuses'
      ]
    }
  },
  {
    id: 'tip-2',
    title: 'Stateroom Secret: How to Avoid Noisy Cabins',
    category: 'Cabin Selection',
    readTime: '3 min read',
    imageUrl: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
    snippet: 'The #1 mistake travelers make when booking online is letting computer algorithms pick their room location.',
    bullets: [
      'Always check the deck immediately above AND below your cabin (avoid being directly under the pool deck or galley).',
      'If prone to motion sensitivity, book mid-ship and on lower-to-middle decks where ship pivot motion is minimal.',
      'Connecting staterooms have thinner shared doors—only choose them if traveling with family.'
    ],
    iconName: 'BedDouble',
    fullArticle: {
      introduction: 'Booking a cruise stateroom isn’t like reserving a standard hotel room. Ships are floating resorts where dynamic sound vibrations and galley service carts can make or break your sleep. Here is our blueprint for picking the perfect cabin.',
      sections: [
        {
          heading: '1. The "Sandwich Rule" for Pure Quiet',
          content: 'The golden rule of cabin selection is to sandwich your stateroom between two residential decks. Avoid booking a cabin directly below the pool deck or directly above nightclubs and casinos.',
          takeaways: ['Look for staterooms with cabins above and below', 'Avoid cabins directly adjacent to crew service pantries']
        },
        {
          heading: '2. Motion Physics & Seasickness',
          content: 'The fulcrum of lowest kinetic motion on any ship is low-to-midship on decks 4 through 8.',
          takeaways: ['Mid-ship cabins experience 60% less vertical sway', 'Balcony fresh air dramatically helps inner-ear equilibrium']
        }
      ],
      proTip: 'Aft-facing balcony staterooms offer larger verandas with mesmerizing wake views and zero wind turbulence.',
      recommendedShips: ['Icon of the Seas', 'Celebrity Edge', 'Norwegian Prima'],
      checklist: [
        'Verify residential stateroom sandwich (Decks above & below)',
        'Check distance from main elevator lobbies (aim for 4 to 8 doors away)',
        'Confirm if lifeboats obstruct downward ocean viewing'
      ]
    }
  },
  {
    id: 'tip-3',
    title: 'How Our Automatic Price-Drop Repricing Saves You Money',
    category: 'Money Saving',
    readTime: '2 min read',
    imageUrl: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80',
    snippet: 'Cruise and resort fares change dynamically. Here’s why booking with Cloud 9 Travels is 100% risk-free.',
    bullets: [
      'When you book early, you lock in the best stateroom or resort suite locations before they sell out.',
      'Our dedicated system monitors your exact booking category continuously.',
      'If the supplier lowers the rate before final payment, we immediately re-fare your booking to save you cash or score extra bonus perks!'
    ],
    iconName: 'TrendingDown',
    fullArticle: {
      introduction: 'Cruise lines and resorts adjust rates dynamically based on unbooked inventory. When you book directly on your own, suppliers will never notify you if your fare drops. Cloud 9 Travels monitors your reservation and acts on your behalf.',
      sections: [
        {
          heading: '1. Lock in Early with Modest Deposits',
          content: 'Booking 6 to 18 months in advance secures prime suites and holiday dates with modest refundable deposits. Final payment is typically not due until 75 to 90 days before departure.',
          takeaways: ['Lock in prime inventory with modest deposits', 'Full flexibility prior to final payment milestone']
        },
        {
          heading: '2. Proactive 24/7 Price Drop Auditing',
          content: 'If the cruise line or resort drops the rate during a flash promotion, our team automatically contacts the supplier revenue desk to adjust your balance down.',
          takeaways: ['Receive direct cash reductions or suite upgrades', 'Zero fees or administrative penalties for repricing']
        }
      ],
      proTip: 'You keep 100% of your past-cruiser or resort loyalty points while double-dipping on our agency bonus perks!',
      recommendedShips: ['Celebrity Beyond', 'Sun Princess', 'Scarlet Lady'],
      checklist: [
        'Check if your sailing qualifies for refundable deposit promotion',
        'Link your past traveler loyalty member ID number',
        'Review final payment calendar milestone date'
      ]
    }
  },
  {
    id: 'tip-4',
    title: 'Disney & Universal Theme Park Secrets for Families',
    category: 'Family Guide',
    readTime: '3 min read',
    imageUrl: 'https://images.unsplash.com/photo-1599640842225-85d111c60e6b?auto=format&fit=crop&w=1200&q=80',
    snippet: 'Expert advice on rope-dropping, Lightning Lane strategies, and resort perks for stress-free theme park vacations.',
    bullets: [
      'Stay at an official on-property resort hotel to gain 30-minute early theme park entry every single day.',
      'Let our certified Disney & Universal specialists handle your dining reservations and ride strategy 60 days in advance.',
      'Pack a compact portable charger and download park apps for mobile food ordering to bypass 45-minute lunch lines.'
    ],
    iconName: 'Baby',
    fullArticle: {
      introduction: 'Planning an Orlando or Disneyland family vacation can feel overwhelming with dynamic queues, mobile apps, and dining reservation windows. As certified Disney Destination Geniuses and Universal Specialists, Cloud 9 Travels structures your trip for pure enjoyment.',
      sections: [
        {
          heading: '1. The On-Property Resort Advantage',
          content: 'Staying at a Disney or Universal resort hotel grants early park entry, complimentary bus/monorail/Skyliner transportation, and priority access to ride reservations.',
          takeaways: ['30-minute head start beats the biggest morning crowds', 'Free luggage transfer and package delivery to your hotel']
        },
        {
          heading: '2. Mobile Ordering & Dining Hacks',
          content: 'Bypass long counter service lines by scheduling your mobile meals 2 hours ahead of peak lunch times through the official park apps.',
          takeaways: ['Pre-book character dining right at the 60-day mark', 'Take midday pool breaks to recharge for evening fireworks']
        }
      ],
      proTip: 'Universal’s brand-new Epic Universe opens in 2025—book early through our agency to secure priority ticket packages and on-site hotels!',
      recommendedShips: ['Disney Wish', 'Universal Epic Universe', 'Walt Disney World Resort'],
      checklist: [
        'Link park tickets in the My Disney Experience / Universal app',
        'Set calendar reminder for 60-day dining reservation window',
        'Pack portable power banks and comfortable walking shoes'
      ]
    }
  }
];

export const SOCIAL_POSTS: SocialPost[] = [
  {
    id: 'soc-1',
    username: 'Cloud9Travels',
    handle: '@cloud9travels',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
    imageUrl: 'https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&w=1000&q=80',
    likes: 2480,
    comments: 114,
    caption: 'Waking up to this breathtaking view over the turquoise Caribbean! Booked through Narmin & Naushad at Cloud 9 Travels and received an extra $350 stateroom cash credit for our private overwater cabana 🌊🌴✨ #Cloud9Travels #DreamVacations #IconOfTheSeas #LuxuryTravel',
    shipName: 'Icon of the Seas',
    location: 'CocoCay, Bahamas',
    platform: 'Instagram'
  },
  {
    id: 'soc-2',
    username: 'Cloud9 VIP Travelers',
    handle: '@cloud9_vip_community',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    imageUrl: 'https://images.unsplash.com/photo-1461250281059-4f83443edbdc?auto=format&fit=crop&w=1000&q=80',
    likes: 3120,
    comments: 168,
    caption: 'Facebook Member Spotlight: Gliding through Alaska’s Endicott Arm fjord! Cloud 9 monitored our sailing and repriced our suite 3 weeks before departure, saving us $480 cash. 🏔️🐋 Follow our Facebook community for secret flash rate drops!',
    shipName: 'Celebrity Edge',
    location: 'Dawes Glacier, Alaska',
    platform: 'Facebook'
  },
  {
    id: 'soc-3',
    username: 'Cloud9Travels',
    handle: '@cloud9travels',
    avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80',
    imageUrl: 'https://images.unsplash.com/photo-1599640842225-85d111c60e6b?auto=format&fit=crop&w=1000&q=80',
    likes: 5410,
    comments: 382,
    caption: 'The twins meeting Captain Mickey on the Disney Wish! 🏰✨ Cloud 9 Travels synced our entire family group of 14 and locked in bonus onboard credits. Watch our TikTok ship tour! #Cloud9Travels #DisneyWish #FamilyTravel #DreamVacations',
    shipName: 'Disney Wish',
    location: 'Castaway Cay, Bahamas',
    platform: 'TikTok'
  },
  {
    id: 'soc-4',
    username: 'Cloud9Travels',
    handle: '@cloud9travels',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
    imageUrl: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1000&q=80',
    likes: 2940,
    comments: 147,
    caption: 'Sunset in Curaçao at Sandals Royal Curaçao! 🍸🌴 Unlimited diving, private infinity pool, and our convertible MINI Cooper booked with zero fees through Cloud 9 Travels. #Cloud9Travels #SandalsResorts #AllInclusiveLuxury',
    shipName: 'Sandals Royal Curaçao',
    location: 'Santa Barbara Estate, Curaçao',
    platform: 'Instagram'
  }
];

export const FAQS: FaqItem[] = [
  {
    id: 'faq-pricing-1',
    category: 'pricing',
    question: 'Is there a fee to work with a Dream Vacations Travel Advisor?',
    answer: 'In many cases, there is no additional cost to work with a Dream Vacations Travel Advisor. Travel advisors are often compensated by cruise lines, hotels, tour companies, and other travel partners. For more complex or highly customized vacations, an advisor may charge a planning fee — if a fee applies, it will be explained upfront so you know what to expect before moving forward.'
  },
  {
    id: 'faq-pricing-2',
    category: 'pricing',
    question: 'Does Cloud9Travels offer a Best Price Guarantee?',
    answer: 'Yes, for eligible cruise bookings. If you find a lower advertised rate for which you qualify within 24 hours of booking and depositing your cruise with Dream Vacations, send the advertisement or link showing that rate to your Travel Advisor. If the offer meets the program requirements, we will match it. The lower rate must be available to book and apply to the identical cruise product — including the ship, sailing date, and cabin category — and you must qualify for the cruise line’s rate.'
  },
  {
    id: 'faq-pricing-3',
    category: 'pricing',
    question: 'Is the Best Price Guarantee automatic?',
    answer: 'No. The Best Price Guarantee requires you to identify an eligible lower advertised rate and send it to your Travel Advisor within the applicable 24-hour period. It is not an automatic monitoring or automatic refund system.'
  },
  {
    id: 'faq-pricing-4',
    category: 'pricing',
    question: 'Does the Best Price Guarantee apply to every vacation?',
    answer: 'No. The guarantee applies to qualifying cruise vacations and excludes group cruises and land bookings. It applies to the cruise cost under the program’s terms, rather than extras such as airfare, land components, shipboard credits, group amenities, travel insurance, transfers, pre- or post-cruise hotels, and shore excursions. Princess Cruises is currently excluded from the Dream Vacations Best Price Guarantee program.'
  },
  {
    id: 'faq-pricing-5',
    category: 'pricing',
    question: 'Do cruise prices change?',
    answer: 'Yes. Cruise pricing can fluctuate based on the cruise line, itinerary, ship, cruise type, how close the sailing is to departure, and overall supply and demand. Popular and holiday periods can cost more, so if you need a specific peak-season sailing, we encourage booking earlier to improve availability and reduce the risk of later increases.'
  },
  {
    id: 'faq-pricing-6',
    category: 'pricing',
    question: 'What is usually included in my cruise fare?',
    answer: 'Most cruise fares include your stateroom, many onboard meals, selected entertainment and activities, and access to many common ship amenities. Many mainstream lines also include supervised children’s or teen programming for guests who meet the program’s age requirements. Optional items can cost extra, including specialty restaurants, alcoholic and premium beverages, shore excursions, spa treatments, some fitness activities, Wi-Fi, laundry, photographs, shopping, and casino spending. Exact inclusions vary by cruise line, ship, sailing, fare, and promotion, so your specific booking should always be checked.'
  },
  {
    id: 'faq-pricing-7',
    category: 'pricing',
    question: 'Are military or senior cruise discounts available?',
    answer: 'They can be. Select cruise lines and sailings offer military or senior benefits, and the benefit can take the form of a reduced fare, onboard credit, or another special rate. Eligibility and the actual promotion vary by cruise line and sailing, so ask your Travel Advisor what is currently available for your sailing.'
  },
  {
    id: 'faq-booking-1',
    category: 'booking',
    question: 'What information will I need to book a cruise?',
    answer: 'Your reservation generally requires information for each traveler, including the full name as shown on their travel documentation, date of birth, nationality, contact details, emergency contact information, and any relevant special needs or medical conditions. The more you share about your travel dates, flexibility, preferred destination, budget, who is traveling, desired experience, and any special occasions or requests, the better your Travel Advisor can tailor recommendations to you — you do not need to know every answer before beginning the planning process.'
  },
  {
    id: 'faq-booking-2',
    category: 'booking',
    question: 'Do I need a passport for my cruise?',
    answer: 'It depends on the itinerary and traveler, but a valid U.S. passport is required in most cases, and we recommend traveling with one even on some closed-loop cruises that may allow other qualifying documentation (a closed-loop cruise generally begins and ends at the same U.S. port). A cruise line may require a passport even when minimum government requirements do not, and additional documents can be required for international destinations. Having the required identification and travel documents is ultimately the traveler’s responsibility, so please check the documentation required for your specific itinerary.'
  },
  {
    id: 'faq-booking-3',
    category: 'booking',
    question: 'Does my reservation name need to match my passport or other travel documents?',
    answer: 'Yes. Make your reservation using your name exactly as it appears on the identification or proof of citizenship you will travel with, such as a passport or birth certificate. If your identification reflects a different name, you may need supporting documentation for the name change.'
  },
  {
    id: 'faq-booking-4',
    category: 'booking',
    question: 'What should I do after booking my cruise?',
    answer: 'First, confirm you have the required travel documents. Then complete the cruise line’s online registration and review shore-excursion options before departure. Online registration is required by most cruise lines, and you will generally need your cruise-line reservation number plus personal information for each traveler.'
  },
  {
    id: 'faq-booking-5',
    category: 'booking',
    question: 'When will I get my boarding pass and luggage tags?',
    answer: 'Timing differs by cruise line. Electronic documents and luggage tags generally become available according to each cruise line’s own check-in schedule and requirements, and full payment or completed online check-in can be prerequisites for some lines. Your Travel Advisor can confirm the check-in requirements and timing for your specific cruise line.'
  },
  {
    id: 'faq-family-1',
    category: 'family',
    question: 'Are cruises a good vacation for families with children?',
    answer: 'Cruising is a great family-vacation option because ships can combine destinations, onboard entertainment, children’s activities, and easier logistics in one trip. Many cruise lines offer supervised, age-specific children’s and teen programs, and ships may also feature pools, splash areas, shows, games, sports, and other family-oriented activities. Family promotions and room availability vary, so it is worth looking for applicable family offers and booking early when room configuration or family-suite availability is important.'
  },
  {
    id: 'faq-family-2',
    category: 'family',
    question: 'What type of stateroom should I choose?',
    answer: 'There are four common room categories. Interior rooms are generally the most economical and do not have an exterior window. Oceanview rooms provide an exterior-facing window. Balcony rooms include private outdoor space. Suites or Junior Suites provide additional space and can include extra amenities or services, depending on the ship and category. The right choice also depends on your budget, room availability, location on the ship, required accommodations, room size, and the amenities that matter to you.'
  },
  {
    id: 'faq-family-3',
    category: 'family',
    question: 'What is a “guarantee” stateroom?',
    answer: 'A guarantee stateroom can offer a lower-priced way to secure a particular room type, but you do not select the exact room, deck, location, or view — the cruise line assigns the room later, and it can potentially have an obstructed view or a bed configuration that cannot be changed. This option is best for travelers who are comfortable giving the cruise line control over the final room assignment.'
  },
  {
    id: 'faq-family-4',
    category: 'family',
    question: 'Can I book more than one stateroom?',
    answer: 'Yes. Multiple rooms can be booked online, but each cabin is booked as a separate transaction. If having rooms next to or near each other is important, we recommend working with your Travel Advisor, since adjacent or nearby availability can be harder to coordinate through separate online transactions.'
  },
  {
    id: 'faq-family-5',
    category: 'family',
    question: 'Should I book early when traveling with a family?',
    answer: 'Booking earlier can be useful when your family needs a particular configuration or more space. Early booking generally provides a better selection of staterooms, and some ships offer family suites or other rooms designed to accommodate larger parties.'
  },
  {
    id: 'faq-perks-1',
    category: 'perks',
    question: 'What is onboard credit?',
    answer: 'Onboard Credit, or OBC, is a credit added to your onboard account that can be used toward eligible purchases during your cruise, such as specialty dining, drinks, spa services, merchandise, Wi-Fi, photographs, and some shore excursions purchased onboard. It may be provided through an exclusive Cloud9Travels offer or through a promotion negotiated with the cruise line. Restrictions apply, gratuity eligibility varies by cruise line, and credit is generally awarded per room rather than per guest, so use it during your cruise — unused credit can be forfeited.'
  },
  {
    id: 'faq-perks-2',
    category: 'perks',
    question: 'Do I automatically receive onboard credit when I book?',
    answer: 'Not necessarily. Onboard credit is an extra perk that can come from an exclusive Cloud9Travels offer or an arrangement with a cruise line, so treat it as an eligible-booking benefit rather than something guaranteed on every reservation — ask your Travel Advisor what is currently available for your sailing.'
  },
  {
    id: 'faq-perks-3',
    category: 'perks',
    question: 'What is Return & Earn?',
    answer: 'Return & Earn is Dream Vacations’ promotion for travelers planning another qualifying cruise. Eligible travelers can book another cruise while onboard or within 30 days after returning and receive $25–$150 in onboard credit on the new reservation, depending on its value. The new cruise must be a qualifying new individual reservation, must sail within 24 months after the previous trip’s end date, and must be booked with Dream Vacations. Group and land reservations do not qualify, and the credit is non-refundable, non-transferable, cannot be redeemed for cash or used in the casino, and unused amounts expire after the qualifying cruise.'
  },
  {
    id: 'faq-perks-4',
    category: 'perks',
    question: 'Can Return & Earn be combined with a cruise-line offer?',
    answer: 'It may be combinable with cruise-line offers or promotions, subject to availability and applicable restrictions — ask your Travel Advisor to confirm for your specific offer.'
  },
  {
    id: 'faq-perks-5',
    category: 'perks',
    question: 'Can my Travel Advisor help with flights, hotels, and excursions too?',
    answer: 'Yes. Your Travel Advisor can assist with flights, hotels, cruises, excursions, and other elements of your vacation while helping coordinate the itinerary. They are generally in the strongest position to help with items that were actually booked through them.'
  },
  {
    id: 'faq-perks-6',
    category: 'perks',
    question: 'What happens if something goes wrong while I’m traveling?',
    answer: 'For travel arrangements booked through us, your Travel Advisor can help adjust or rebook reservations, communicate with travel partners, and guide you through possible next steps. There are limits — an advisor cannot directly control events such as airline delays or cancellations, and our ability to intervene is more limited when a service was booked independently, though we can still provide guidance.'
  }
];

export const PARTNER_CRUISE_LINES = [
  // Cruises
  { name: 'Royal Caribbean', logoText: 'ROYAL CARIBBEAN', perk: 'Top Producer Rate Match + $350 Credit' },
  { name: 'Celebrity Cruises', logoText: 'CELEBRITY CRUISES', perk: 'All Included Drinks & Wi-Fi + $500 Credit' },
  { name: 'Disney Cruise Line', logoText: 'DISNEY CRUISE LINE', perk: 'Specialist Concierge + $250 Disney Gift' },
  { name: 'AmaWaterways', logoText: 'AMAWATERWAYS', perk: 'Luxury River Cruise + Shore Excursions Included' },
  { name: 'Sandals Resorts', logoText: 'SANDALS & BEACHES', perk: 'Certified Sandals Specialist + $500 Resort Credit' },
  { name: 'Secrets & Dreams', logoText: 'HYATT INCLUSIVE', perk: 'AAA 5-Diamond + $300 Resort Spa Coupons' },
  { name: 'Viking River Cruises', logoText: 'VIKING', perk: 'All-Inclusive River Voyages + Bonus Cash' },
  { name: 'Princess Cruises', logoText: 'PRINCESS CRUISES', perk: 'MedallionClass VIP + Pre-Paid Gratuities' },
  { name: 'Norwegian Cruise Line', logoText: 'NORWEGIAN CRUISE LINE', perk: 'Free At Sea Packages + Extra $300 Credit' },
  { name: 'Globus & Tours', logoText: 'GLOBUS TOURS', perk: 'VIP Skip-the-Line Escorted European Tours' },
  { name: 'Virgin Voyages', logoText: 'VIRGIN VOYAGES', perk: 'Adults Only VIP + $600 Bar Tab Included' },
  { name: 'Universal & Disney Parks', logoText: 'DISNEY & UNIVERSAL', perk: 'Authorized Park Planner + Early Entry' }
];

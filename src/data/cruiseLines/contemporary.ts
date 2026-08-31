import { CruiseLineDetail } from './types';

export const CONTEMPORARY_CRUISE_LINES: CruiseLineDetail[] = [
  // 1. ROYAL CARIBBEAN
  {
    id: 'royal-caribbean',
    name: 'Royal Caribbean',
    category: 'contemporary',
    categoryLabel: 'Contemporary and Ocean',
    tagline: 'Bold Innovation, Record Breaking Mega Ships and Private Island Thrills',
    description: 'Home to the world’s largest cruise ships featuring Category 6 waterparks, ice arenas, Broadway musicals, and award winning private destinations like Perfect Day at CocoCay.',
    logoUrl: 'https://logo.clearbit.com/royalcaribbean.com',
    brandColor: '#002855',
    imageUrl: 'https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&w=1200&q=80',
    fleetCount: 28,
    startingPrice: 389,
    exclusivePerksSummary: 'Up to $350 Stateroom Credit plus Free VOOM Wi-Fi and Kids Sail Free Perks',
    popularDestinations: ['Eastern Caribbean', 'Western Caribbean', 'Bahamas and CocoCay', 'Alaska', 'Mediterranean', 'Mexican Riviera'],
    departurePorts: ['Miami, FL', 'Fort Lauderdale, FL', 'Port Canaveral, FL', 'Galveston, TX', 'Seattle, WA', 'Barcelona, Spain'],
    keyHighlights: ['Category 6 Waterparks', 'Central Park Open Air Neighborhood', 'FlowRider Surf Simulators', 'AquaTheater High Diving Shows'],
    offers: [
      {
        id: 'rc-icon-caribbean',
        title: '7 Night Eastern Caribbean and Perfect Day at CocoCay',
        shipName: 'Icon of the Seas',
        destination: 'Eastern Caribbean and Bahamas',
        region: 'Caribbean',
        durationNights: 7,
        departurePort: 'Miami, FL',
        departureDates: ['Oct 14, 2025', 'Nov 18, 2025', 'Dec 09, 2025', 'Jan 20, 2026', 'Feb 17, 2026'],
        originalPrice: 1849,
        discountedPrice: 1299,
        onboardCredit: 350,
        badge: 'Top Family Pick',
        perks: ['$350 Stateroom Credit', 'Kids Sail Free on Select Dates', 'Crown Lounge Voucher', 'VOOM Surf and Stream Wi-Fi'],
        itinerarySummary: 'Miami to Philipsburg St. Maarten, Charlotte Amalie St. Thomas, Perfect Day at CocoCay, and return to Miami.',
        itineraryDays: [
          { day: 1, port: 'Miami, Florida', activity: 'Embarkation and welcome bon voyage sailaway', arriveTime: '11:00 AM', departTime: '5:00 PM' },
          { day: 2, port: 'Cruising at Sea', activity: 'Explore Category 6 Waterpark and AquaDome evening production' },
          { day: 3, port: 'Philipsburg, St. Maarten', activity: 'Maho Beach plane spotting or catamaran snorkel tour', arriveTime: '8:00 AM', departTime: '6:00 PM' },
          { day: 4, port: 'Charlotte Amalie, St. Thomas', activity: 'Magens Bay crystal beach and duty free shopping', arriveTime: '7:00 AM', departTime: '5:00 PM' },
          { day: 5, port: 'Cruising at Sea', activity: 'Surfside family games and Broadway musical performance' },
          { day: 6, port: 'Perfect Day at CocoCay, Bahamas', activity: 'Thrill Waterpark, Hideaway Beach, and Daredevil Peak', arriveTime: '8:00 AM', departTime: '5:00 PM' },
          { day: 7, port: 'Miami, Florida', activity: 'Disembarkation and departure transfer', arriveTime: '6:30 AM' }
        ],
        includedDining: ['Main Dining Room 3-Tier Multi-Course', 'Windjammer Marketplace', 'Surfside Bites', 'Park Cafe', 'Sorrento’s Pizza'],
        shipHighlights: ['Category 6 Waterpark', 'Surfside Family Neighborhood', 'Over 40 Dining and Bar Concepts', 'Absolute Zero Ice Arena']
      },
      {
        id: 'rc-utopia-weekend',
        title: '4 Night Bahamas and Perfect Day at CocoCay',
        shipName: 'Utopia of the Seas',
        destination: 'Bahamas and CocoCay',
        region: 'Bahamas',
        durationNights: 4,
        departurePort: 'Port Canaveral, FL',
        departureDates: ['Oct 24, 2025', 'Nov 07, 2025', 'Dec 12, 2025', 'Jan 16, 2026'],
        originalPrice: 799,
        discountedPrice: 489,
        onboardCredit: 150,
        badge: 'Weekend Escape',
        perks: ['$150 Stateroom Credit', 'Soda Package Upgrade for 2 Guests', 'Casino Credit'],
        itinerarySummary: 'Port Canaveral to Nassau Bahamas, Perfect Day at CocoCay, and return.',
        itineraryDays: [
          { day: 1, port: 'Port Canaveral, Florida', activity: 'Embarkation and Sailaway party', arriveTime: '12:00 PM', departTime: '4:30 PM' },
          { day: 2, port: 'Nassau, Bahamas', activity: 'Atlantis resort excursion or Junkanoo beach cultural tour', arriveTime: '8:00 AM', departTime: '5:00 PM' },
          { day: 3, port: 'Perfect Day at CocoCay', activity: 'Oasis Lagoon freshwater pool and private cabana relax', arriveTime: '7:00 AM', departTime: '5:30 PM' },
          { day: 4, port: 'Port Canaveral, Florida', activity: 'Morning arrival and disembarkation', arriveTime: '6:00 AM' }
        ],
        includedDining: ['Main Dining Room', 'El Loco Fresh Mexican', 'Windjammer Buffet', 'Park Cafe Gourmet Deli'],
        shipHighlights: ['Royal Railway Utopia Station', 'The Ultimate Abyss Slide', '5 Resort Pools', 'Spotlight Karaoke']
      }
    ]
  },

  // 2. CELEBRITY CRUISES
  {
    id: 'celebrity-cruises',
    name: 'Celebrity Cruises',
    category: 'contemporary',
    categoryLabel: 'Premium Modern Luxury',
    tagline: 'Relaxed Luxury, World Class Michelin Inspired Dining and The Magic Carpet',
    description: 'Award winning modern luxury resort ships designed by Kelly Hoppen with Nate Berkus sunset bars, seamless indoor outdoor ocean connectivity, and The Retreat suite sanctuaries.',
    logoUrl: 'https://logo.clearbit.com/celebritycruises.com',
    brandColor: '#0c2340',
    imageUrl: 'https://images.unsplash.com/photo-1599640842225-85d111c60e6b?auto=format&fit=crop&w=1200&q=80',
    fleetCount: 16,
    startingPrice: 599,
    exclusivePerksSummary: 'All Included Drinks and Wi-Fi plus Up to $400 Stateroom Credit and Pre-Paid Gratuities',
    popularDestinations: ['Mediterranean', 'Alaska Inside Passage', 'Caribbean and Antilles', 'Norwegian Fjords', 'Galapagos Islands'],
    departurePorts: ['Fort Lauderdale, FL', 'Miami, FL', 'Rome Civitavecchia, Italy', 'Athens Piraeus, Greece', 'Vancouver, BC'],
    keyHighlights: ['Magic Carpet Cantilevered Platform', 'Rooftop Garden and Outdoor Movies', 'Eden Multi-Level Sensory Sanctuary', 'The Retreat Private Sundeck and Lounge'],
    offers: [
      {
        id: 'cel-ascent-med',
        title: '9 Night Italian Riviera and France Best of Mediterranean',
        shipName: 'Celebrity Ascent',
        destination: 'Italy and French Riviera',
        region: 'Mediterranean',
        durationNights: 9,
        departurePort: 'Rome Civitavecchia, Italy',
        departureDates: ['Oct 10, 2025', 'May 16, 2026', 'Jun 27, 2026', 'Jul 18, 2026'],
        originalPrice: 2499,
        discountedPrice: 1749,
        onboardCredit: 400,
        badge: 'Modern Luxury',
        perks: ['Classic Beverage Package Included', 'Basic Wi-Fi Included', '$400 Stateroom Credit', 'Prepaid Crew Gratuities'],
        itinerarySummary: 'Rome to Portofino, Florence La Spezia, Cannes, Nice, Palma de Mallorca, and Barcelona.',
        itineraryDays: [
          { day: 1, port: 'Civitavecchia Rome, Italy', activity: 'Boarding and Welcome Toast at The Sunset Bar', arriveTime: '12:00 PM', departTime: '5:00 PM' },
          { day: 2, port: 'Portofino, Italy', activity: 'Scenic tender and Ligurian seaside strolls', arriveTime: '8:00 AM', departTime: '6:00 PM' },
          { day: 3, port: 'La Spezia Florence Pisa, Italy', activity: 'Cinque Terre train exploration or Tuscan vineyard tour', arriveTime: '7:00 AM', departTime: '7:00 PM' },
          { day: 4, port: 'Cannes, France', activity: 'Croisette boulevard and Provençal perfume workshops', arriveTime: '8:00 AM', departTime: '6:00 PM' },
          { day: 5, port: 'Cruising the Mediterranean Sea', activity: 'Spa thermal suite relaxation and Eden evening performance' },
          { day: 6, port: 'Palma de Mallorca, Spain', activity: 'Gothic Cathedral and Valldemossa mountain village', arriveTime: '8:00 AM', departTime: '5:00 PM' },
          { day: 7, port: 'Barcelona, Spain', activity: 'Arrival in Catalunya and disembarkation', arriveTime: '6:00 AM' }
        ],
        includedDining: ['Cosmopolitan Restaurant', 'Normandie French Cuisine', 'Cyprus Mediterranean', 'Tuscan Italian Grill', 'Oceanview Cafe'],
        shipHighlights: ['The Magic Carpet', 'The Sunset Bar by Nate Berkus', 'Le Voyage by Chef Daniel Boulud', 'Edge Villas with Plunge Pools']
      }
    ]
  },

  // 3. CARNIVAL CRUISE LINE
  {
    id: 'carnival-cruises',
    name: 'Carnival Cruise Line',
    category: 'contemporary',
    categoryLabel: 'Contemporary Fun and Value',
    tagline: 'Choose Fun with Guy Fieri Burgers, BOLT Sea Coasters and High Energy Entertainment',
    description: 'America’s most popular cruise line delivering unforgettable family fun, BOLT roller coasters at sea, Guy Fieri burgers, and vibrant poolside celebrations.',
    logoUrl: 'https://logo.clearbit.com/carnival.com',
    brandColor: '#cc0000',
    imageUrl: 'https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&w=1200&q=80',
    fleetCount: 27,
    startingPrice: 249,
    exclusivePerksSummary: 'Reduced Deposits from $50 plus Up to $200 Onboard Credit and Free Room Upgrades',
    popularDestinations: ['Western Caribbean', 'Eastern Caribbean', 'Bahamas', 'Baja Mexico', 'Alaska', 'Bermuda'],
    departurePorts: ['Miami, FL', 'Port Canaveral, FL', 'Galveston, TX', 'New Orleans, LA', 'Tampa, FL', 'Long Beach, CA'],
    keyHighlights: ['BOLT Ultimate Sea Coaster', 'Guy’s Burger Joint Included', 'WaterWorks Aqua Park', 'Punchliner Comedy Club'],
    offers: [
      {
        id: 'carnival-jubilee-west',
        title: '7 Night Western Caribbean with Cozumel and Roatan',
        shipName: 'Carnival Jubilee',
        destination: 'Western Caribbean',
        region: 'Caribbean',
        durationNights: 7,
        departurePort: 'Galveston, TX',
        departureDates: ['Oct 18, 2025', 'Nov 15, 2025', 'Dec 20, 2025', 'Jan 17, 2026'],
        originalPrice: 949,
        discountedPrice: 599,
        onboardCredit: 200,
        badge: 'Best Value Fun',
        perks: ['$200 Onboard Credit', '$50 Reduced Deposit per Person', 'Free Two Category Stateroom Upgrade'],
        itinerarySummary: 'Galveston to Mahogany Bay Roatan, Costa Maya Mexico, Cozumel Mexico, and return.',
        itineraryDays: [
          { day: 1, port: 'Galveston, Texas', activity: 'Boarding and Sailaway Deck Party', arriveTime: '11:30 AM', departTime: '3:30 PM' },
          { day: 2, port: 'Fun Day at Sea', activity: 'Ride BOLT Roller Coaster and Guy’s Burger lunch' },
          { day: 3, port: 'Mahogany Bay, Roatan', activity: 'Private beach chair lift and monkey eco sanctuary', arriveTime: '8:00 AM', departTime: '6:00 PM' },
          { day: 4, port: 'Costa Maya, Mexico', activity: 'Chacchoben Mayan ruins and beach clubs', arriveTime: '8:00 AM', departTime: '5:00 PM' },
          { day: 5, port: 'Cozumel, Mexico', activity: 'Chankanaab reef snorkel and authentic Mexican fiesta', arriveTime: '8:00 AM', departTime: '5:00 PM' },
          { day: 6, port: 'Fun Day at Sea', activity: 'WaterWorks slides and evening Punchliner Comedy show' },
          { day: 7, port: 'Galveston, Texas', activity: 'Disembarkation and departure transfers', arriveTime: '8:00 AM' }
        ],
        includedDining: ['Guy’s Burger Joint', 'Big Chicken by Shaq', 'BlueIguana Cantina', 'Main Dining Room', 'Lido Marketplace'],
        shipHighlights: ['BOLT Ultimate Sea Coaster', 'Currents and The Shores Zones', 'Family Feud Live at Sea', 'Serenity Adults Only Retreat']
      }
    ]
  },

  // 4. NORWEGIAN CRUISE LINE
  {
    id: 'norwegian-cruises',
    name: 'Norwegian Cruise Line',
    category: 'contemporary',
    categoryLabel: 'Freestyle Cruising and Resort',
    tagline: 'Freestyle Cruising with No Fixed Dining Times and Race Tracks at Sea',
    description: 'Pioneers of Freestyle Cruising with total schedule freedom, multi level Ferrari go kart race tracks, Broadway smash hits, and the exclusive Haven ship within a ship enclave.',
    logoUrl: 'https://logo.clearbit.com/ncl.com',
    brandColor: '#00386b',
    imageUrl: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1200&q=80',
    fleetCount: 19,
    startingPrice: 429,
    exclusivePerksSummary: 'Free at Sea Package with Open Bar, Specialty Dining, Wi-Fi, Shore Credits, and $300 Spending Cash',
    popularDestinations: ['Alaska Inside Passage', 'Hawaii 7-Day Inter-Island', 'Bermuda from NYC', 'Greek Isles', 'Caribbean'],
    departurePorts: ['Miami, FL', 'New York, NY', 'Seattle, WA', 'Honolulu, HI', 'Rome, Italy', 'Boston, MA'],
    keyHighlights: ['Three Level Speedway Race Track', 'The Haven Luxury Enclave', 'Ocean Boulevard 360 Waterfront Promenade', 'Beetlejuice and Broadway Musicals'],
    offers: [
      {
        id: 'ncl-viva-greek',
        title: '10 Night Greek Isles and Italy with Santorini and Mykonos',
        shipName: 'Norwegian Viva',
        destination: 'Greek Isles and Adriatic',
        region: 'Mediterranean',
        durationNights: 10,
        departurePort: 'Athens Piraeus, Greece',
        departureDates: ['Oct 22, 2025', 'May 08, 2026', 'Jun 19, 2026', 'Aug 14, 2026'],
        originalPrice: 2399,
        discountedPrice: 1549,
        onboardCredit: 300,
        badge: 'Free at Sea Pick',
        perks: ['Free Open Bar Unlimited Drinks', 'Free Specialty Dining Meals', '$50 Shore Excursion Credit per Port', 'Free High Speed Wi-Fi'],
        itinerarySummary: 'Athens to Santorini, Mykonos, Rhodes, Crete, Corfu, Dubrovnik Croatia, and Venice Trieste.',
        itineraryDays: [
          { day: 1, port: 'Athens Piraeus, Greece', activity: 'Embarkation and welcome sailaway overlooking the Parthenon', arriveTime: '12:00 PM', departTime: '7:00 PM' },
          { day: 2, port: 'Santorini, Greece', activity: 'Oia cliffside whitewashed village and sunset views', arriveTime: '6:30 AM', departTime: '9:00 PM' },
          { day: 3, port: 'Mykonos, Greece', activity: 'Little Venice windmills and vibrant town strolls', arriveTime: '7:00 AM', departTime: '6:00 PM' },
          { day: 4, port: 'Rhodes, Greece', activity: 'Medieval Palace of the Grand Master', arriveTime: '8:00 AM', departTime: '6:00 PM' },
          { day: 5, port: 'Dubrovnik, Croatia', activity: 'Walk the ancient stone fortress walls', arriveTime: '8:00 AM', departTime: '7:00 PM' },
          { day: 6, port: 'Trieste Venice, Italy', activity: 'Grand Canal gondola ride and disembarkation', arriveTime: '6:30 AM' }
        ],
        includedDining: ['Hudson’s 270-Degree View Dining', 'The Commodore Room', 'Indulge Food Hall 11 Stations', 'Surfside Cafe'],
        shipHighlights: ['Viva Speedway Three Level Track', 'The Drop and Rush 10-Story Dry Slides', 'Oceanwalk Glass Bridges', 'Infinity Beach Pools']
      }
    ]
  },

  // 5. PRINCESS CRUISES
  {
    id: 'princess-cruises',
    name: 'Princess Cruises',
    category: 'contemporary',
    categoryLabel: 'Premium Destination Leader',
    tagline: 'The Destination Leader with MedallionClass Effortless Personalized Vacations',
    description: 'Renowned for world class Alaska wilderness voyages, immersive itineraries, culinary excellence, and touchless MedallionClass effortless luxury.',
    logoUrl: 'https://logo.clearbit.com/princess.com',
    brandColor: '#002f6c',
    imageUrl: 'https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&w=1200&q=80',
    fleetCount: 17,
    startingPrice: 479,
    exclusivePerksSummary: 'Princess Plus Package Upgrade plus $250 Stateroom Credit and Free Wi-Fi with Casual Dining',
    popularDestinations: ['Alaska Glaciers and Denali', 'Japan and Asia', 'Mediterranean and Holy Land', 'Panama Canal', 'British Isles'],
    departurePorts: ['Seattle, WA', 'Vancouver, BC', 'San Francisco, CA', 'Fort Lauderdale, FL', 'Tokyo Yokohama, Japan', 'Southampton, UK'],
    keyHighlights: ['MedallionClass Connected Technology', 'Movies Under the Stars with Warm Cookies', 'Chef’s Table Lumiere Gourmet Dining', 'The Sanctuary Adults Retreat'],
    offers: [
      {
        id: 'prin-star-alaska',
        title: '7 Night Voyage of the Glaciers Alaska with Glacier Bay',
        shipName: 'Star Princess',
        destination: 'Alaska Inside Passage and Glaciers',
        region: 'Alaska',
        durationNights: 7,
        departurePort: 'Vancouver, BC',
        departureDates: ['May 17, 2026', 'Jun 14, 2026', 'Jul 12, 2026', 'Aug 09, 2026'],
        originalPrice: 1699,
        discountedPrice: 1049,
        onboardCredit: 250,
        badge: 'Glacier Bay Leader',
        perks: ['Princess Plus Package Included', 'Glacier Bay National Park Ranger Onboard', '$250 Stateroom Spending Cash', 'Medallion Delivery Anywhere'],
        itinerarySummary: 'Vancouver through Inside Passage to Ketchikan, Juneau, Skagway, Glacier Bay National Park, College Fjord, and Anchorage Whittier.',
        itineraryDays: [
          { day: 1, port: 'Vancouver, BC', activity: 'Scenic sail past Lions Gate Bridge into Canadian wilderness', arriveTime: '12:00 PM', departTime: '4:30 PM' },
          { day: 2, port: 'Cruising the Inside Passage', activity: 'Whale watching and naturalist glacier lecture' },
          { day: 3, port: 'Ketchikan, Alaska', activity: 'Totem Bight State Park and Saxman Native Village', arriveTime: '6:30 AM', departTime: '3:00 PM' },
          { day: 4, port: 'Juneau, Alaska', activity: 'Mendenhall Glacier helicopter trek and dog sledding', arriveTime: '8:00 AM', departTime: '9:00 PM' },
          { day: 5, port: 'Skagway, Alaska', activity: 'White Pass and Yukon Route historic vintage rail', arriveTime: '7:00 AM', departTime: '8:30 PM' },
          { day: 6, port: 'Glacier Bay National Park', activity: 'Full day scenic cruising with Margerie Glacier calving', arriveTime: '6:00 AM', departTime: '3:00 PM' },
          { day: 7, port: 'Anchorage Whittier, Alaska', activity: 'Arrival in Whittier with optional rail link to Denali', arriveTime: '12:30 AM' }
        ],
        includedDining: ['Main Dining Salons', 'Alfredo’s Pizzeria', 'International Cafe 24 Hours', 'World Fresh Marketplace'],
        shipHighlights: ['The Dome Geodesic Glass Multi-Deck Pavilion', 'Piazza with 360-degree views', 'Spellbound Magic Experience', 'Lotus Spa and Enclave']
      }
    ]
  },

  // 6. HOLLAND AMERICA LINE
  {
    id: 'holland-america-cruises',
    name: 'Holland America Line',
    category: 'contemporary',
    categoryLabel: 'Premium Classic Ocean',
    tagline: '150 Years of Ocean Heritage, Live Music Walk and Culinary Council Excellence',
    description: 'Classic mid sized ocean ships featuring world renowned live music on the Music Walk, regional culinary masterclasses, and deep destination expertise in Alaska and Europe.',
    logoUrl: 'https://logo.clearbit.com/hollandamerica.com',
    brandColor: '#002f6c',
    imageUrl: 'https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&w=1200&q=80',
    fleetCount: 11,
    startingPrice: 499,
    exclusivePerksSummary: 'Have It All Package Included with Beverage Package, Specialty Dining, Shore Credits, Wi-Fi, and $300 Spending Money',
    popularDestinations: ['Alaska Inside Passage', 'Northern Europe and Baltic', 'Panama Canal', 'New England and Canada', 'South America and Antarctica'],
    departurePorts: ['Seattle, WA', 'Vancouver, BC', 'Fort Lauderdale, FL', 'San Diego, CA', 'Rotterdam, Netherlands', 'Boston, MA'],
    keyHighlights: ['Music Walk with B.B. King’s Blues Club and Lincoln Center Stage', 'Culinary Council Gourmet Menus', 'Explorations Central Destination Programming', 'Greenhouse Spa and Salon'],
    offers: [
      {
        id: 'hal-rotterdam-norway',
        title: '7 Night Norse Legends and Norwegian Fjords',
        shipName: 'Rotterdam',
        destination: 'Norwegian Fjords',
        region: 'Europe',
        durationNights: 7,
        departurePort: 'Rotterdam, Netherlands',
        departureDates: ['May 24, 2026', 'Jun 21, 2026', 'Jul 19, 2026', 'Aug 16, 2026'],
        originalPrice: 1899,
        discountedPrice: 1199,
        onboardCredit: 300,
        badge: 'Premium Heritage',
        perks: ['Have It All Package Included', 'Signature Beverage Package', '$100 Shore Excursion Credit', 'Specialty Dining Dinner Included'],
        itinerarySummary: 'Rotterdam to Eidfjord, Flam, Geirangerfjord, Bergen Norway, and return to Rotterdam.',
        itineraryDays: [
          { day: 1, port: 'Rotterdam, Netherlands', activity: 'Embarkation and scenic sail down the Nieuwe Maas river', arriveTime: '12:00 PM', departTime: '5:00 PM' },
          { day: 2, port: 'At Sea across North Sea', activity: 'Lincoln Center Stage classical performance and cooking demo' },
          { day: 3, port: 'Eidfjord, Norway', activity: 'Hardangervidda mountain plateau and Voringsfossen waterfall', arriveTime: '7:00 AM', departTime: '3:00 PM' },
          { day: 4, port: 'Flam, Norway', activity: 'The legendary Flamsbana vintage mountain railway', arriveTime: '8:00 AM', departTime: '6:00 PM' },
          { day: 5, port: 'Geiranger, Norway', activity: 'Scenic cruising past the Seven Sisters Waterfalls', arriveTime: '8:00 AM', departTime: '5:00 PM' },
          { day: 6, port: 'Bergen, Norway', activity: 'Bryggen UNESCO historic wooden wharf and Floibanen funicular', arriveTime: '8:00 AM', departTime: '5:00 PM' },
          { day: 7, port: 'Rotterdam, Netherlands', activity: 'Disembarkation and airport connections', arriveTime: '7:00 AM' }
        ],
        includedDining: ['The Dining Room', 'Lido Market', 'Dive-In Gourmet Burgers', 'New York Pizza and Deli'],
        shipHighlights: ['B.B. King’s Blues Club', 'Rolling Stone Lounge', 'Billboard Onboard Dual Pianos', 'World Stage 270-Degree LED Theatre']
      }
    ]
  },

  // 7. MSC CRUISES
  {
    id: 'msc-cruises',
    name: 'MSC Cruises',
    category: 'contemporary',
    categoryLabel: 'Contemporary European Elegance',
    tagline: 'European Sophistication, Swarovski Crystal Staircases and Ocean Cay Marine Reserve',
    description: 'The world’s fastest growing cruise line featuring glamorous European design, Swarovski crystal staircases, authentic Mediterranean cuisine, and the private Ocean Cay MSC Marine Reserve.',
    logoUrl: 'https://logo.clearbit.com/msccruises.com',
    brandColor: '#002b49',
    imageUrl: 'https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&w=1200&q=80',
    fleetCount: 23,
    startingPrice: 289,
    exclusivePerksSummary: 'Free Drinks and Wi-Fi plus Kids Sail Free on Select Voyages and $200 Stateroom Credit',
    popularDestinations: ['Bahamas and Ocean Cay', 'Western Mediterranean', 'Eastern Caribbean', 'Northern Europe', 'Emirates and Arabian Gulf'],
    departurePorts: ['Miami, FL', 'Port Canaveral, FL', 'New York, NY', 'Barcelona, Spain', 'Genoa, Italy', 'Dubai, UAE'],
    keyHighlights: ['Ocean Cay Private Marine Sanctuary', 'MSC Yacht Club Ship-Within-a-Ship', 'Swarovski Crystal Staircases', 'Authentic Gelaterias and Venchi Chocolate'],
    offers: [
      {
        id: 'msc-world-america',
        title: '7 Night Eastern Caribbean and Ocean Cay Marine Reserve',
        shipName: 'MSC World America',
        destination: 'Eastern Caribbean and Bahamas',
        region: 'Caribbean',
        durationNights: 7,
        departurePort: 'Miami, FL',
        departureDates: ['Oct 11, 2025', 'Nov 08, 2025', 'Dec 13, 2025', 'Jan 17, 2026', 'Feb 14, 2026'],
        originalPrice: 1099,
        discountedPrice: 629,
        onboardCredit: 200,
        badge: 'New Flagship',
        perks: ['Easy Plus Drinks Package Included', 'Browse Wi-Fi Included', '$200 Stateroom Credit', 'Overnight Stay at Ocean Cay'],
        itinerarySummary: 'Miami to Puerto Plata Dominican Republic, San Juan Puerto Rico, and overnight at Ocean Cay MSC Marine Reserve Bahamas.',
        itineraryDays: [
          { day: 1, port: 'Miami, Florida', activity: 'Boarding at the state of the art PortMiami MSC Terminal', arriveTime: '11:00 AM', departTime: '6:00 PM' },
          { day: 2, port: 'Cruising at Sea', activity: 'Explore World Galleria, Cliffhanger over-water swing and pools' },
          { day: 3, port: 'Puerto Plata, Dominican Republic', activity: 'Damajagua waterfalls and historic colonial fort', arriveTime: '9:00 AM', departTime: '5:00 PM' },
          { day: 4, port: 'San Juan, Puerto Rico', activity: 'Old San Juan cobblestone walk and El Morro fortress', arriveTime: '9:00 AM', departTime: '6:00 PM' },
          { day: 5, port: 'Cruising at Sea', activity: 'Venchi gelato tasting and Swarovski staircase photos' },
          { day: 6, port: 'Ocean Cay MSC Marine Reserve, Bahamas', activity: 'Snorkeling, paddle boarding, and evening lighthouse laser show', arriveTime: '8:00 AM' },
          { day: 7, port: 'Miami, Florida', activity: 'Morning arrival in Miami and disembarkation', arriveTime: '7:00 AM' }
        ],
        includedDining: ['Main Dining Rooms 4 Venues', 'La Boca Grill', 'Il Mercato Buffet', 'Luna Park Pizza and Burger'],
        shipHighlights: ['Cliffhanger Only Overwater Swing at Sea', 'World Promenade with 11-Deck Dry Slide', 'MSC Yacht Club VIP Sanctuary', 'The Comedy Club']
      }
    ]
  },

  // 8. DISNEY CRUISE LINE
  {
    id: 'disney-cruises',
    name: 'Disney Cruise Line',
    category: 'contemporary',
    categoryLabel: 'Family Magic and Themed Voyages',
    tagline: 'Legendary Disney Storytelling, Marvel Themed Dining and Castaway Cay Paradise',
    description: 'Unmatched family magic featuring Broadway caliber Disney productions, Marvel and Frozen themed dining rooms, Disney characters, and two private Bahamian island paradises.',
    logoUrl: 'https://logo.clearbit.com/disneycruise.com',
    brandColor: '#002040',
    imageUrl: 'https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&w=1200&q=80',
    fleetCount: 6,
    startingPrice: 899,
    exclusivePerksSummary: 'Exclusive Disney Stateroom Gift Credit plus Dedicated Concierge and Free Character Photo Package',
    popularDestinations: ['Bahamas and Castaway Cay', 'Lookout Cay at Lighthouse Point', 'Western Caribbean', 'Alaska Inside Passage', 'Northern Europe'],
    departurePorts: ['Port Canaveral, FL', 'Fort Lauderdale, FL', 'San Diego, CA', 'Galveston, TX', 'Vancouver, BC', 'Southampton, UK'],
    keyHighlights: ['Castaway Cay and Lookout Cay Private Islands', 'Rotational Dining with Marvel and Frozen Themes', 'Fireworks at Sea on Pirate Night', 'Oceaneer Club Kids Spaces'],
    offers: [
      {
        id: 'disney-treasure-carib',
        title: '7 Night Western Caribbean with Castaway Cay and Cozumel',
        shipName: 'Disney Treasure',
        destination: 'Western Caribbean and Bahamas',
        region: 'Caribbean',
        durationNights: 7,
        departurePort: 'Port Canaveral, FL',
        departureDates: ['Oct 25, 2025', 'Nov 22, 2025', 'Dec 20, 2025', 'Jan 24, 2026'],
        originalPrice: 3499,
        discountedPrice: 2899,
        onboardCredit: 250,
        badge: 'Premier Family Magic',
        perks: ['Exclusive $250 Disney Onboard Credit', 'Free Commemorative Family Photo Package', 'Rotational Dining with Dedicated Servers Included'],
        itinerarySummary: 'Port Canaveral to Cozumel Mexico, George Town Grand Cayman, Falmouth Jamaica, and Disney Castaway Cay Bahamas.',
        itineraryDays: [
          { day: 1, port: 'Port Canaveral, Florida', activity: 'Boarding and Mickey’s Sail-A-Wave Deck Party', arriveTime: '11:00 AM', departTime: '4:30 PM' },
          { day: 2, port: 'Cruising at Sea', activity: 'AquaMouse water coaster and Marvel theatrical dining' },
          { day: 3, port: 'Cozumel, Mexico', activity: 'Chankanaab marine park and dolphin encounter', arriveTime: '8:30 AM', departTime: '5:30 PM' },
          { day: 4, port: 'George Town, Grand Cayman', activity: 'Stingray City catamaran tour and Seven Mile Beach', arriveTime: '8:00 AM', departTime: '4:30 PM' },
          { day: 5, port: 'Falmouth, Jamaica', activity: 'Dunn’s River Falls climb and bobsled adventure', arriveTime: '7:30 AM', departTime: '4:45 PM' },
          { day: 6, port: 'Disney Castaway Cay, Bahamas', activity: 'Castaway 5K, Pelican Plunge water slide, and character beach meet', arriveTime: '8:30 AM', departTime: '4:45 PM' },
          { day: 7, port: 'Port Canaveral, Florida', activity: 'Character farewell breakfast and disembarkation', arriveTime: '7:30 AM' }
        ],
        includedDining: ['Plaza de Coco Theatrical Dining', 'Worlds of Marvel Cinematic Dining', '1923 Walt Disney Animation Heritage', 'Marceline Market Buffet'],
        shipHighlights: ['AquaMouse Curse of the Golden Egg Water Coaster', 'Haunted Mansion Parlor Lounge', 'Sarabi Lion King Entertainment Hub', 'Broadway Tale of Moana Production']
      }
    ]
  },

  // 9. VIRGIN VOYAGES
  {
    id: 'virgin-voyages',
    name: 'Virgin Voyages',
    category: 'contemporary',
    categoryLabel: 'Adults Only Boutique Luxury',
    tagline: 'Always Exclusively Adults Only, 20 Plus Eateries with Michelin Chefs and The Beach Club at Bimini',
    description: 'Richard Branson’s award winning adults only sanctuary featuring no buffets, no kids, over 20 included Michelin chef designed eateries, fitness classes, and high energy beach club parties.',
    logoUrl: 'https://logo.clearbit.com/virginvoyages.com',
    brandColor: '#cc0000',
    imageUrl: 'https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&w=1200&q=80',
    fleetCount: 4,
    startingPrice: 649,
    exclusivePerksSummary: 'Free $600 Bar Tab Credit on Select Sailings plus All Dining, Gratuities, and Wi-Fi 100% Included',
    popularDestinations: ['Caribbean and Bimini', 'French Riviera and Ibiza', 'Greek Island Glow', 'San Juan and Lesser Antilles', 'Transatlantic'],
    departurePorts: ['Miami, FL', 'San Juan, PR', 'Barcelona, Spain', 'Athens Piraeus, Greece', 'Portsmouth, UK'],
    keyHighlights: ['Exclusively Adults Only 18+', '20+ Michelin Star Chef Curated Eateries with No Surcharges', 'The Beach Club at Bimini Private Island', 'All Gratuities, Essential Drinks and Wi-Fi Included'],
    offers: [
      {
        id: 'virgin-scarlet-mayan',
        title: '5 Night Riviera Maya with Cozumel and Beach Club at Bimini',
        shipName: 'Scarlet Lady',
        destination: 'Western Caribbean and Bahamas',
        region: 'Caribbean',
        durationNights: 5,
        departurePort: 'Miami, FL',
        departureDates: ['Oct 19, 2025', 'Nov 09, 2025', 'Dec 07, 2025', 'Jan 11, 2026', 'Feb 08, 2026'],
        originalPrice: 1550,
        discountedPrice: 990,
        onboardCredit: 300,
        badge: 'Adults Only Pick',
        perks: ['$300 Prepaid Bar Tab Included', 'All 20+ Eateries Included at Zero Surcharge', 'All Gratuities and Basic Wi-Fi Included', 'All Group Fitness Classes Free'],
        itinerarySummary: 'Miami to Cozumel Playa del Carmen Mexico, day at sea, and The Beach Club at Bimini Bahamas.',
        itineraryDays: [
          { day: 1, port: 'Miami, Florida', activity: 'Boarding and Sunset Sailaway Party at the Aquatic Club', arriveTime: '1:30 PM', departTime: '6:00 PM' },
          { day: 2, port: 'Day at Sea', activity: 'Redemption Spa hydrotherapy, drag bingo, and Gunbae Korean BBQ' },
          { day: 3, port: 'Cozumel Playa del Carmen, Mexico', activity: 'Tulum cliffside ruins or cenote cave snorkeling', arriveTime: '8:00 AM', departTime: '7:00 PM' },
          { day: 4, port: 'The Beach Club at Bimini, Bahamas', activity: 'Poolside DJ party, floating cabanas, and beach bonfire farewell', arriveTime: '8:00 AM', departTime: '7:00 PM' },
          { day: 5, port: 'Miami, Florida', activity: 'Morning arrival in Miami and leisurely disembarkation', arriveTime: '6:30 AM' }
        ],
        includedDining: ['The Wake Steak and Seafood', 'Pink Agave Elevated Mexican', 'Extra Virgin Handmade Pasta', 'Gunbae Korean BBQ', 'The Test Kitchen Experimental'],
        shipHighlights: ['The Manor Nightclub', 'Scarlet Night Ship-Wide Immersive Party', 'Redemption Spa with Salt Room', 'Squid Ink Tattoo Studio at Sea']
      }
    ]
  },

  // 10. COSTA CRUISES
  {
    id: 'costa-cruises',
    name: 'Costa Cruises',
    category: 'contemporary',
    categoryLabel: 'Italian Style Ocean',
    tagline: 'Cruising Italian Style with Mediterranean Heart and Mediterranean Living',
    description: 'Italy’s premier cruise line bringing the authentic warmth, gastronomy, and celebratory spirit of Italian culture across the Mediterranean, Caribbean, and South America.',
    logoUrl: 'https://logo.clearbit.com/costacruises.com',
    brandColor: '#ffcc00',
    imageUrl: 'https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&w=1200&q=80',
    fleetCount: 10,
    startingPrice: 329,
    exclusivePerksSummary: 'All Inclusive Beverage Packages plus $150 Stateroom Credit and Kids Free Deals',
    popularDestinations: ['Western Mediterranean', 'Greek Isles', 'Northern Fjords', 'Caribbean', 'Dubai and Emirates'],
    departurePorts: ['Barcelona, Spain', 'Savona, Italy', 'Civitavecchia, Italy', 'Marseille, France'],
    keyHighlights: ['Authentic Italian Pizza and Gelato', 'Nutella Bars at Sea', 'Smeralda Skywalk Glass Promenade', 'Archipelago Michelin Star Chef Menus'],
    offers: [
      {
        id: 'costa-toscana-med',
        title: '7 Night Western Mediterranean Colors of Italy and Spain',
        shipName: 'Costa Toscana',
        destination: 'Western Mediterranean',
        region: 'Mediterranean',
        durationNights: 7,
        departurePort: 'Barcelona, Spain',
        departureDates: ['Oct 19, 2025', 'Nov 16, 2025', 'Apr 12, 2026', 'May 17, 2026'],
        originalPrice: 899,
        discountedPrice: 529,
        onboardCredit: 150,
        badge: 'Italian Flavor',
        perks: ['MyDrinks Beverage Package Included', '$150 Stateroom Credit', 'Free Kids Fare on Select Dates'],
        itinerarySummary: 'Barcelona to Palma de Mallorca, Palermo Sicily, Civitavecchia Rome, Savona, and Marseille.',
        itineraryDays: [
          { day: 1, port: 'Barcelona, Spain', activity: 'Boarding and authentic Italian aperitivo', arriveTime: '12:00 PM', departTime: '6:00 PM' },
          { day: 2, port: 'Palma de Mallorca, Spain', activity: 'Beaches of Mallorca and historic Bellver Castle', arriveTime: '8:00 AM', departTime: '6:00 PM' },
          { day: 3, port: 'Palermo Sicily, Italy', activity: 'Monreale Cathedral and street food arancini tour', arriveTime: '8:00 AM', departTime: '4:30 PM' },
          { day: 4, port: 'Civitavecchia Rome, Italy', activity: 'Vatican Museums and Colosseum full day tour', arriveTime: '8:30 AM', departTime: '7:00 PM' },
          { day: 5, port: 'Savona, Italy', activity: 'Portofino excursion or Genoa historic district', arriveTime: '8:30 AM', departTime: '6:30 PM' },
          { day: 6, port: 'Marseille, France', activity: 'Notre Dame de la Garde and Calanques cliffs', arriveTime: '9:00 AM', departTime: '6:00 PM' },
          { day: 7, port: 'Barcelona, Spain', activity: 'Disembarkation in Barcelona', arriveTime: '8:00 AM' }
        ],
        includedDining: ['La Sagra dei Sapori', 'Pummid’Oro Pizzeria', 'Heineken Star Club', 'Oliveto Restaurant'],
        shipHighlights: ['Volare Skywalk 65 Meters Above Sea', 'Colosseo 3-Deck Acrobatic Arena', 'Splash Aqua Park', 'Sole Mio Wellness Spa']
      }
    ]
  },

  // 11. CELESTYAL CRUISES
  {
    id: 'celestyal-cruises',
    name: 'Celestyal Cruises',
    category: 'contemporary',
    categoryLabel: 'Authentic Greek Destination Specialist',
    tagline: 'The Authentic Greek Island and Eastern Mediterranean Destination Specialist',
    description: 'Mid sized Greek flag cruise line offering unhurried port stays, overnight visits in Mykonos and Santorini, and all inclusive authentic Hellenic hospitality.',
    logoUrl: 'https://logo.clearbit.com/celestyal.com',
    brandColor: '#005ba6',
    imageUrl: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1200&q=80',
    fleetCount: 2,
    startingPrice: 489,
    exclusivePerksSummary: 'Complimentary Shore Excursions and Drinks plus $150 Stateroom Spending Cash',
    popularDestinations: ['Greek Islands', 'Idyllic Aegean', 'Arabian Gulf', 'Three Continents', 'Adriatic'],
    departurePorts: ['Athens Piraeus, Greece', 'Athens Lavrion, Greece', 'Heraklion Crete, Greece', 'Doha, Qatar'],
    keyHighlights: ['Overnight Stays in Mykonos and Santorini', 'Complimentary Shore Excursions Included', 'Authentic Greek Cuisine and Olive Oil Tastings', 'Intimate Access to Small Harbors'],
    offers: [
      {
        id: 'celestyal-idyllic-aegean',
        title: '7 Night Idyllic Aegean with Overnight in Mykonos and Santorini',
        shipName: 'Celestyal Journey',
        destination: 'Greek Isles',
        region: 'Mediterranean',
        durationNights: 7,
        departurePort: 'Athens Piraeus, Greece',
        departureDates: ['May 02, 2026', 'Jun 06, 2026', 'Jul 11, 2026', 'Sep 05, 2026'],
        originalPrice: 1429,
        discountedPrice: 899,
        onboardCredit: 150,
        badge: 'Aegean Specialist',
        perks: ['Select Drinks with Meals Included', '$80 Shore Excursion Discount Voucher', '$150 Stateroom Credit', 'All Port Taxes and Gratuities Included'],
        itinerarySummary: 'Athens to Thessaloniki, Kusadasi Ephesus Turkey, Crete, Santorini, Mykonos overnight, and Milos.',
        itineraryDays: [
          { day: 1, port: 'Athens Piraeus, Greece', activity: 'Boarding and sail toward northern Aegean', arriveTime: '12:00 PM', departTime: '5:00 PM' },
          { day: 2, port: 'Thessaloniki, Greece', activity: 'Byzantine monuments and lively Aristotelous Square', arriveTime: '10:00 AM', departTime: '7:00 PM' },
          { day: 3, port: 'Kusadasi Ephesus, Turkey', activity: 'Ancient ruins of Ephesus and House of the Virgin Mary', arriveTime: '1:00 PM', departTime: '7:00 PM' },
          { day: 4, port: 'Heraklion Crete, Greece', activity: 'Palace of Knossos Minoan labyrinth tour', arriveTime: '8:00 AM', departTime: '7:00 PM' },
          { day: 5, port: 'Santorini, Greece', activity: 'Fira cable car and sunset over the volcanic caldera', arriveTime: '7:00 AM', departTime: '11:59 PM' },
          { day: 6, port: 'Mykonos, Greece', activity: 'Full day and late night in vibrant Chora town', arriveTime: '8:00 AM', departTime: '2:00 AM' },
          { day: 7, port: 'Milos, Greece', activity: 'White volcanic moonscapes of Sarakiniko Beach', arriveTime: '9:00 AM', departTime: '7:00 PM' }
        ],
        includedDining: ['Thalassa Restaurant', 'The Taverna Casual Buffet', 'Leda Greek Speciality Table'],
        shipHighlights: ['Sozo Wellness Sanctuary', 'Starlight Amphitheater', 'Amphora Lounge', 'Sun Deck Horizon Pool']
      }
    ]
  },

  // 12. MARGARITAVILLE AT SEA
  {
    id: 'margaritaville-at-sea',
    name: 'Margaritaville at Sea',
    category: 'contemporary',
    categoryLabel: 'Resort Fun and Short Getaways',
    tagline: 'It’s 5 O’Clock Everywhere with Tropical Relaxation and Island Style Getaways',
    description: 'Jimmy Buffett’s tropical vacation cruise experience offering 2 to 5 night island escapes, license to chill pools, 5 O’Clock Somewhere bars, and vibrant Caribbean live music.',
    logoUrl: 'https://logo.clearbit.com/margaritavilleatsea.com',
    brandColor: '#008080',
    imageUrl: 'https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&w=1200&q=80',
    fleetCount: 2,
    startingPrice: 199,
    exclusivePerksSummary: 'Heroes Sail Free Program plus Free Drink Upgrades and $100 Stateroom Credit',
    popularDestinations: ['Grand Bahama Island', 'Key West and Cozumel', 'Nassau', 'Progreso Mexico'],
    departurePorts: ['Palm Beach, FL', 'Tampa, FL'],
    keyHighlights: ['License to Chill Pools and Hot Tubs', '5 O’Clock Somewhere Bar', 'JWB Prime Steakhouse', 'Jimmy’s Shipwreck Production Show'],
    offers: [
      {
        id: 'margarita-islander-keywest',
        title: '4 Night Key West and Cozumel Tropical Getaway',
        shipName: 'Margaritaville at Sea Islander',
        destination: 'Key West and Mexico',
        region: 'Caribbean',
        durationNights: 4,
        departurePort: 'Tampa, FL',
        departureDates: ['Oct 23, 2025', 'Nov 13, 2025', 'Dec 11, 2025', 'Jan 15, 2026'],
        originalPrice: 699,
        discountedPrice: 349,
        onboardCredit: 100,
        badge: 'Island Chill',
        perks: ['$100 Stateroom Credit', 'Welcome Margarita per Guest', 'Discounts for Military, First Responders, and Educators'],
        itinerarySummary: 'Tampa to Key West Florida, Cozumel Mexico, and return to Tampa.',
        itineraryDays: [
          { day: 1, port: 'Tampa, Florida', activity: 'Boarding with live steel drum welcome music', arriveTime: '12:00 PM', departTime: '4:00 PM' },
          { day: 2, port: 'Key West, Florida', activity: 'Duval Street stroll, Hemingway House, and Key Lime pie tasting', arriveTime: '8:00 AM', departTime: '5:00 PM' },
          { day: 3, port: 'Cozumel, Mexico', activity: 'Playa Mia beach resort and reef catamaran snorkel', arriveTime: '8:00 AM', departTime: '5:00 PM' },
          { day: 4, port: 'Cruising at Sea', activity: 'LandShark Pool party and evening theater musical' },
          { day: 5, port: 'Tampa, Florida', activity: 'Morning arrival in Tampa and disembarkation', arriveTime: '7:00 AM' }
        ],
        includedDining: ['Fins Dining Room', 'Port of Indecision Buffet', 'Cheeseburger in Paradise', 'Frank and Lola’s Pizzeria'],
        shipHighlights: ['14-Deck Atrium with Giant Flip Flop', 'LandShark Bar and Grill', 'St. Somewhere Spa', 'Stars on the Water Live Theatre']
      }
    ]
  }
];

import { CruiseLineDetail } from './types';

export const LUXURY_CRUISE_LINES: CruiseLineDetail[] = [
  // 1. SILVERSEA CRUISES
  {
    id: 'silversea-cruises',
    name: 'Silversea Cruises',
    category: 'luxury',
    categoryLabel: 'Ultra Luxury and All Inclusive',
    tagline: 'Door to Door All Inclusive Ultra Luxury with Dedicated Butler Service for Every Suite',
    description: 'The pinnacle of personalized ultra luxury voyaging featuring ocean-view suite butler service, S.A.L.T. culinary discovery programs, and inclusive private executive transfers from your home.',
    logoUrl: 'https://logo.clearbit.com/silversea.com',
    brandColor: '#1d232a',
    imageUrl: 'https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&w=1200&q=80',
    fleetCount: 12,
    startingPrice: 3450,
    exclusivePerksSummary: 'Private Executive Home Transfers, Free Shore Excursions in Every Port, and $600 Suite Credit',
    popularDestinations: ['Mediterranean and Amalfi', 'Antarctica and Galapagos', 'Northern Europe', 'Asia and Japan', 'South Pacific'],
    departurePorts: ['Venice, Italy', 'Reykjavik, Iceland', 'Tokyo, Japan', 'Ushuaia, Argentina', 'Athens, Greece'],
    keyHighlights: ['Dedicated Butler for Every Single Suite', 'S.A.L.T. Sea and Land Taste Culinary Experience', 'Otium Roman Inspired Luxury Spa', 'Door-to-Door Private Chauffeur Transfers'],
    offers: [
      {
        id: 'silver-nova-med',
        title: '10 Night Mediterranean Riviera and Amalfi Splendors',
        shipName: 'Silver Nova',
        destination: 'Italy, Monaco and French Riviera',
        region: 'Mediterranean',
        durationNights: 10,
        departurePort: 'Rome Civitavecchia, Italy',
        departureDates: ['Oct 08, 2025', 'May 12, 2026', 'Jun 22, 2026', 'Sep 15, 2026'],
        originalPrice: 7800,
        discountedPrice: 5950,
        onboardCredit: 600,
        badge: 'Ultra Luxury Flagship',
        perks: ['Dedicated Butler Service for Every Suite', 'Door-to-Door Private Chauffeur Included', 'Free Shore Excursion in Every Port', 'Complimentary Vintage Wines and Champagne'],
        itinerarySummary: 'Rome to Sorrento Amalfi, Taormina Sicily, Valletta Malta, Porto Cervo, Monte Carlo Monaco, and Nice France.',
        itineraryDays: [
          { day: 1, port: 'Civitavecchia Rome, Italy', activity: 'Chauffeured transfer from Rome and champagne suite check in', arriveTime: '12:00 PM', departTime: '6:00 PM' },
          { day: 2, port: 'Sorrento Amalfi Coast, Italy', activity: 'Private boat to Capri or Pompeii archaeological private tour', arriveTime: '8:00 AM', departTime: '6:00 PM' },
          { day: 3, port: 'Taormina Sicily, Italy', activity: 'Ancient Greek Amphitheater and Mount Etna wine tasting', arriveTime: '8:00 AM', departTime: '5:00 PM' },
          { day: 4, port: 'Valletta, Malta', activity: 'St. John’s Co-Cathedral and Caravaggio masterpiece viewing', arriveTime: '7:00 AM', departTime: '4:00 PM' },
          { day: 5, port: 'Monte Carlo, Monaco', activity: 'Casino de Monte Carlo and palace square changing of guards', arriveTime: '8:00 AM', departTime: '11:00 PM' },
          { day: 6, port: 'Nice, France', activity: 'Promenade des Anglais and private airport transfer', arriveTime: '7:00 AM' }
        ],
        includedDining: ['S.A.L.T. Kitchen Regionally Sourced', 'Atlantide Fine Dining', 'La Terrazza Authentic Italian', 'The Marquee Al Fresco'],
        shipHighlights: ['Asymmetrical Open Architectural Design', 'The Otium Spa with Thermal Baths', 'S.A.L.T. Lab Culinary Kitchen', 'All-Suite Balcony Accommodations']
      }
    ]
  },

  // 2. REGENT SEVEN SEAS CRUISES
  {
    id: 'regent-cruises',
    name: 'Regent Seven Seas Cruises',
    category: 'luxury',
    categoryLabel: 'The Most Inclusive Luxury Experience',
    tagline: 'An Unrivaled Experience with Free Unlimited Shore Excursions and Valet Laundry',
    description: 'The world’s most all inclusive luxury line where everything from first class airfare and unlimited shore excursions to fine wines, spirits, and valet laundry is fully included.',
    logoUrl: 'https://logo.clearbit.com/rssc.com',
    brandColor: '#002855',
    imageUrl: 'https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&w=1200&q=80',
    fleetCount: 6,
    startingPrice: 4299,
    exclusivePerksSummary: 'Free Business Class Air, Unlimited Shore Excursions, and $500 Suite Shipboard Cash',
    popularDestinations: ['Mediterranean', 'Alaska Inside Passage', 'Northern Europe', 'Transatlantic', 'Asia and Orient'],
    departurePorts: ['Miami, FL', 'Barcelona, Spain', 'Southampton, UK', 'Reykjavik, Iceland', 'Tokyo, Japan'],
    keyHighlights: ['Free Unlimited Shore Excursions in Every Single Port', 'Free Roundtrip Business Class Air on Intercontinental Flights', 'Custom Marble Bathrooms with L’Occitane Amenities', 'All-Suite All-Balcony Fleets'],
    offers: [
      {
        id: 'regent-grandeur-fjords',
        title: '10 Night Majestic Fjords and Scandinavian Capitals',
        shipName: 'Seven Seas Grandeur',
        destination: 'Norway Fjords and Scandinavia',
        region: 'Europe',
        durationNights: 10,
        departurePort: 'Southampton, UK',
        departureDates: ['Jun 12, 2026', 'Jul 10, 2026', 'Aug 07, 2026'],
        originalPrice: 9999,
        discountedPrice: 7699,
        onboardCredit: 500,
        badge: 'Most Inclusive',
        perks: ['Free Unlimited Shore Excursions Included', 'Free Business Class Air on Select Suites', '$500 Shipboard Credit', 'Free Unlimited Valet Laundry'],
        itinerarySummary: 'Southampton to Stavanger, Flam, Geirangerfjord, Alesund, Bergen Norway, and Copenhagen Denmark.',
        itineraryDays: [
          { day: 1, port: 'Southampton, UK', activity: 'Boarding and champagne reception with string quartet', arriveTime: '12:00 PM', departTime: '5:00 PM' },
          { day: 2, port: 'Cruising the North Sea', activity: 'Culinary Arts Kitchen masterclass and Serene Spa relaxation' },
          { day: 3, port: 'Stavanger, Norway', activity: 'Lysefjord boat cruise to Preikestolen Pulpit Rock', arriveTime: '8:00 AM', departTime: '5:00 PM' },
          { day: 4, port: 'Flam, Norway', activity: 'Flam railway private vintage train and fjord waterfalls', arriveTime: '8:00 AM', departTime: '6:00 PM' },
          { day: 5, port: 'Geiranger, Norway', activity: 'Eagle Road panoramic vista and Seven Sisters boat tour', arriveTime: '8:00 AM', departTime: '5:00 PM' },
          { day: 6, port: 'Copenhagen, Denmark', activity: 'Nyhavn canal cruise and private transfer', arriveTime: '7:00 AM' }
        ],
        includedDining: ['Compass Rose Custom Menus', 'Prime 7 Steakhouse', 'Chartreuse French Fine Dining', 'Pacific Rim Asian Fusion'],
        shipHighlights: ['Million-Dollar Fabergé Egg Art Installation', 'Culinary Arts Kitchen', 'Serene Spa and Wellness', 'Regent Suite with Private Steinway Piano']
      }
    ]
  },

  // 3. OCEANIA CRUISES
  {
    id: 'oceania-cruises',
    name: 'Oceania Cruises',
    category: 'luxury',
    categoryLabel: 'Upper Premium and Culinary Excellence',
    tagline: 'The Finest Cuisine at Sea with Intimate Designer Ships and Destination Immersion',
    description: 'Renowned for having the finest cuisine at sea curated by Master Chef Jacques Pepin, intimate residential style luxury, unhurried boutique port stays, and exceptional value.',
    logoUrl: 'https://logo.clearbit.com/oceaniacruises.com',
    brandColor: '#002d62',
    imageUrl: 'https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&w=1200&q=80',
    fleetCount: 8,
    startingPrice: 1699,
    exclusivePerksSummary: 'Your World Included with Free Shore Credits, Gourmet Dining, Unlimited Wi-Fi, and $400 Stateroom Cash',
    popularDestinations: ['Mediterranean', 'Northern Europe', 'South Pacific and Tahiti', 'Asia and Orient', 'Panama Canal'],
    departurePorts: ['Miami, FL', 'Civitavecchia Rome, Italy', 'Barcelona, Spain', 'Papeete, Tahiti', 'Tokyo, Japan'],
    keyHighlights: ['Finest Cuisine at Sea by Master Chef Jacques Pepin', 'The Culinary Center Hands On Cooking Stations', 'Ralph Lauren Home Furnished Owner Suites', 'Aquamar Spa and Vitality Center'],
    offers: [
      {
        id: 'oceania-vista-amalfi',
        title: '7 Night Italian and French Vignettes with Portofino and Monaco',
        shipName: 'Vista',
        destination: 'Italy and French Riviera',
        region: 'Mediterranean',
        durationNights: 7,
        departurePort: 'Rome Civitavecchia, Italy',
        departureDates: ['Oct 14, 2025', 'May 19, 2026', 'Jun 16, 2026', 'Sep 22, 2026'],
        originalPrice: 3899,
        discountedPrice: 2499,
        onboardCredit: 400,
        badge: 'Culinary Master',
        perks: ['Free Gourmet Specialty Dining in All Restaurants', 'Free Shore Excursion Credit', 'Free Unlimited Starlink Wi-Fi', '$400 Shipboard Cash'],
        itinerarySummary: 'Rome to Florence Livorno, Portofino, Saint-Tropez, Monte Carlo, and Barcelona.',
        itineraryDays: [
          { day: 1, port: 'Civitavecchia Rome, Italy', activity: 'Embarkation and welcome gourmet dinner', arriveTime: '12:00 PM', departTime: '6:00 PM' },
          { day: 2, port: 'Livorno Florence Pisa, Italy', activity: 'Tuscan truffle hunting and Chianti vineyard luncheon', arriveTime: '7:30 AM', departTime: '7:30 PM' },
          { day: 3, port: 'Portofino, Italy', activity: 'Harborside stroll and scenic walk to Castello Brown', arriveTime: '8:00 AM', departTime: '6:00 PM' },
          { day: 4, port: 'Saint-Tropez, France', activity: 'Pampelonne beach club or Provençal market exploration', arriveTime: '8:00 AM', departTime: '7:00 PM' },
          { day: 5, port: 'Monte Carlo, Monaco', activity: 'Grand Casino and Formula 1 track walking tour', arriveTime: '8:00 AM', departTime: '11:00 PM' },
          { day: 6, port: 'Barcelona, Spain', activity: 'Disembarkation and private airport transfer', arriveTime: '7:00 AM' }
        ],
        includedDining: ['The Grand Dining Room', 'Toscana Authentic Italian', 'Polo Grill Steakhouse', 'Red Ginger Pan-Asian', 'Ember American Classics'],
        shipHighlights: ['The Culinary Center by Chef Jacques Pépin', 'Baristas Coffee Lounge with Illy espresso', 'Aquamar Spa Terrace', 'Library with over 2000 books']
      }
    ]
  },

  // 4. SEABOURN
  {
    id: 'seabourn-cruises',
    name: 'Seabourn',
    category: 'luxury',
    categoryLabel: 'Ultra Luxury Yacht Cruising',
    tagline: 'Private Yacht Atmosphere, Caviar in the Surf and Unmatched Intuitive Service',
    description: 'Intimate ultra luxury small ships and purpose-built expedition yachts featuring all suite ocean-view accommodations, complimentary fine caviar and champagne, and watersports marinas.',
    logoUrl: 'https://logo.clearbit.com/seabourn.com',
    brandColor: '#2b2b2b',
    imageUrl: 'https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&w=1200&q=80',
    fleetCount: 7,
    startingPrice: 3299,
    exclusivePerksSummary: 'Complimentary Caviar in the Surf, Free Fine Spirits and Wines, and $500 Suite Spending Cash',
    popularDestinations: ['Caribbean and Carambola Beach', 'Mediterranean Hidden Ports', 'Antarctica and Arctic', 'Alaska Fjords', 'Australia and Kimberley'],
    departurePorts: ['Miami, FL', 'Bridgetown, Barbados', 'Piraeus Athens, Greece', 'Lisbon, Portugal', 'Buenos Aires, Argentina'],
    keyHighlights: ['Complimentary Caviar in the Surf Beach Events', 'Fold-Out Watersports Marina with Kayaks and Paddleboards', 'Dining by Michelin-Starred Chef Thomas Keller', 'Submarines Onboard Purpose-Built Expeditions'],
    offers: [
      {
        id: 'seabourn-ovation-carib',
        title: '7 Night Caribbean Yacht Harbors with Caviar in the Surf',
        shipName: 'Seabourn Ovation',
        destination: 'Leeward and Windward Islands',
        region: 'Caribbean',
        durationNights: 7,
        departurePort: 'Bridgetown, Barbados',
        departureDates: ['Nov 15, 2025', 'Dec 13, 2025', 'Jan 17, 2026', 'Feb 14, 2026'],
        originalPrice: 4899,
        discountedPrice: 3499,
        onboardCredit: 500,
        badge: 'Yacht Elegance',
        perks: ['Caviar in the Surf Beach Party Included', 'All Fine Wines, Champagne, and Spirits Included', '$500 Suite Stateroom Credit', 'Watersports Marina Access'],
        itinerarySummary: 'Barbados to Bequia, St. Lucia, Guadeloupe, St. Kitts Carambola Beach, St. Barts, and St. Maarten.',
        itineraryDays: [
          { day: 1, port: 'Bridgetown, Barbados', activity: 'Boarding with chilled champagne and suite escort', arriveTime: '12:00 PM', departTime: '6:00 PM' },
          { day: 2, port: 'Port Elizabeth, Bequia', activity: 'Old world Caribbean yacht harbor and turtle sanctuary', arriveTime: '8:00 AM', departTime: '5:00 PM' },
          { day: 3, port: 'Rodney Bay, St. Lucia', activity: 'Scenic cruising past the iconic Piton volcanic peaks', arriveTime: '8:00 AM', departTime: '6:00 PM' },
          { day: 4, port: 'South Friar’s Bay, St. Kitts', activity: 'Signature Caviar in the Surf beach party with iced champagne bar', arriveTime: '8:00 AM', departTime: '5:00 PM' },
          { day: 5, port: 'Gustavia, St. Barts', activity: 'French designer boutiques and Shell Beach relaxation', arriveTime: '8:00 AM', departTime: '10:00 PM' },
          { day: 6, port: 'Philipsburg, St. Maarten', activity: 'Disembarkation and private airport transfer', arriveTime: '7:00 AM' }
        ],
        includedDining: ['The Restaurant Fine Dining', 'The Grill by Chef Thomas Keller', 'The Colonnade Al Fresco', 'Earth and Ocean at The Patio'],
        shipHighlights: ['Watersports Marina with Retractable Platform', 'Seabourn Square Social Concierge Hub', 'The Spa at Seabourn with Thermal Suite', 'All-Oceanfront Veranda Suites']
      }
    ]
  },

  // 5. AZAMARA CRUISES
  {
    id: 'azamara-cruises',
    name: 'Azamara Cruises',
    category: 'luxury',
    categoryLabel: 'Destination Immersion Specialist',
    tagline: 'Destination Immersion with Extended Overnights and Exclusive AzAmazing Celebrations',
    description: 'Upmarket boutique ship cruising specializing in Destination Immersion, featuring more late night stays and overnights than any other line, paired with an exclusive evening AzAmazing event.',
    logoUrl: 'https://logo.clearbit.com/azamara.com',
    brandColor: '#002f6c',
    imageUrl: 'https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&w=1200&q=80',
    fleetCount: 4,
    startingPrice: 1499,
    exclusivePerksSummary: 'Exclusive AzAmazing Evening Event, All Included Drinks and Gratuities, plus $300 Stateroom Credit',
    popularDestinations: ['Mediterranean Overnights', 'South America and Rio Carnival', 'Japan Intensive', 'Norway Fjords', 'South Africa Safari'],
    departurePorts: ['Barcelona, Spain', 'Rome Civitavecchia, Italy', 'Venice, Italy', 'Tokyo, Japan', 'Cape Town, South Africa'],
    keyHighlights: ['Overnight and Late Night Stays in Almost Every Port', 'Complimentary AzAmazing Evening Private Cultural Event', 'Boutique Ships with Access to Hidden Harbors', 'All Standard Spirits, Beers, Wines and Gratuities Included'],
    offers: [
      {
        id: 'aza-pursuit-spain',
        title: '8 Night Spain Intensive with Overnight in Seville and Ibiza',
        shipName: 'Azamara Pursuit',
        destination: 'Spain and Balearic Islands',
        region: 'Mediterranean',
        durationNights: 8,
        departurePort: 'Barcelona, Spain',
        departureDates: ['Oct 25, 2025', 'May 09, 2026', 'Jun 20, 2026', 'Sep 12, 2026'],
        originalPrice: 3199,
        discountedPrice: 1899,
        onboardCredit: 300,
        badge: 'Destination Immersion',
        perks: ['Exclusive Private Flamenco AzAmazing Evening in Seville Included', 'All Gratuities and Select Beverages Included', '$300 Stateroom Credit', 'White Night Deck Party'],
        itinerarySummary: 'Barcelona to Valencia, Cartagena, Malaga, Seville overnight via Guadalquivir River, and Lisbon Portugal.',
        itineraryDays: [
          { day: 1, port: 'Barcelona, Spain', activity: 'Embarkation and welcome cocktail reception', arriveTime: '12:00 PM', departTime: '6:00 PM' },
          { day: 2, port: 'Valencia, Spain', activity: 'City of Arts and Sciences and authentic paella tasting', arriveTime: '8:00 AM', departTime: '8:00 PM' },
          { day: 3, port: 'Malaga, Spain', activity: 'Picasso Museum and evening tapas tour', arriveTime: '8:00 AM', departTime: '10:00 PM' },
          { day: 4, port: 'Seville, Spain (Overnight)', activity: 'Scenic sailing up Guadalquivir River into the heart of Seville and AzAmazing Flamenco event', arriveTime: '1:00 PM' },
          { day: 5, port: 'Seville, Spain', activity: 'Alcazar Royal Palace and Plaza de España before sunset departure', departTime: '6:00 PM' },
          { day: 6, port: 'Lisbon, Portugal', activity: 'Arrival in Lisbon and disembarkation', arriveTime: '8:00 AM' }
        ],
        includedDining: ['Discoveries Restaurant', 'Windows Cafe Sunset Terrace', 'The Patio Poolside Grill', 'Swirl and Top Gelato'],
        shipHighlights: ['White Night Poolside Feast and Dance Party', 'The Sanctum Spa and Thalassotherapy Pool', 'Aqualina Italian Fine Dining', 'Prime C Steakhouse']
      }
    ]
  },

  // 6. CUNARD LINE
  {
    id: 'cunard-cruises',
    name: 'Cunard Line',
    category: 'luxury',
    categoryLabel: 'Iconic British Ocean Liner Heritage',
    tagline: 'Timeless Elegance, Traditional White Glove Afternoon Tea and The Transatlantic Crossing',
    description: 'The world’s most famous ocean liner company delivering 180 years of British royalty traditions, grand ballroom galas, white gloved afternoon tea service, and the flagship Queen Mary 2 transatlantic crossings.',
    logoUrl: 'https://logo.clearbit.com/cunard.com',
    brandColor: '#1a1a1a',
    imageUrl: 'https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&w=1200&q=80',
    fleetCount: 4,
    startingPrice: 999,
    exclusivePerksSummary: 'Complimentary Grills Suite Upgrades, Free Drinks Package on Select Sailings, and $400 Stateroom Cash',
    popularDestinations: ['Transatlantic Ocean Crossing', 'Norwegian Fjords', 'Alaska Inside Passage', 'World Voyages', 'New England and Canada'],
    departurePorts: ['Southampton, UK', 'New York, NY', 'Hamburg, Germany', 'Sydney, Australia', 'Tokyo, Japan'],
    keyHighlights: ['White-Glove Afternoon Tea in the Queens Room', 'Grand Royal Gala Balls with Live Big Band Orchestra', 'The Only True Ocean Liner in the World Queen Mary 2', 'Illuminations Planetarium at Sea'],
    offers: [
      {
        id: 'cunard-qm2-transatlantic',
        title: '7 Night Iconic Transatlantic Crossing from New York to London',
        shipName: 'Queen Mary 2',
        destination: 'Transatlantic Ocean Crossing',
        region: 'World',
        durationNights: 7,
        departurePort: 'New York, NY',
        departureDates: ['Oct 17, 2025', 'Nov 14, 2025', 'Apr 24, 2026', 'May 22, 2026', 'Jun 19, 2026'],
        originalPrice: 1999,
        discountedPrice: 1299,
        onboardCredit: 400,
        badge: 'Iconic Crossing',
        perks: ['White-Glove Afternoon Tea Included Daily', 'Gala Balls with Big Band Included', '$400 Stateroom Credit', 'Complimentary Champagne Welcome'],
        itinerarySummary: 'New York Brooklyn Cruise Terminal, scenic sail past the Statue of Liberty, 6 unhurried days at sea, and arrival in Southampton London.',
        itineraryDays: [
          { day: 1, port: 'New York, NY (Brooklyn)', activity: 'Boarding, sail past Manhattan skyline and under Verrazzano Bridge', arriveTime: '12:00 PM', departTime: '5:00 PM' },
          { day: 2, port: 'Day at Sea', activity: 'Planetarium show at Illuminations and RADA acting workshop' },
          { day: 3, port: 'Day at Sea', activity: 'Queens Room White Glove Afternoon Tea and Black and White Gala Ball' },
          { day: 4, port: 'Day at Sea', activity: 'Explore the 8000-book Maritime Library and Cunard Insights lecture' },
          { day: 5, port: 'Day at Sea', activity: 'Canyon Ranch Spa club and Golden Lion pub trivia' },
          { day: 6, port: 'Day at Sea', activity: 'Masquerade Royal Ball and Britannia formal dinner' },
          { day: 7, port: 'Southampton, UK', activity: 'Early morning arrival and express coach transfer to London', arriveTime: '6:30 AM' }
        ],
        includedDining: ['Britannia Restaurant 2-Tier Grand Dining', 'Kings Court Buffet', 'Golden Lion Pub Fish and Chips', 'Queens Room Tea'],
        shipHighlights: ['The Only Ocean Liner Built for North Atlantic Weather', 'Full-Scale Planetarium Illuminations', 'Largest Library and Ballroom at Sea', 'Canyon Ranch Wellness Spa']
      }
    ]
  },

  // 7. CRYSTAL CRUISES
  {
    id: 'crystal-cruises',
    name: 'Crystal Cruises',
    category: 'luxury',
    categoryLabel: 'Ultra Luxury and World Class Service',
    tagline: 'Exceptional Space, Highest Crew to Guest Ratios and Nobu Masterpiece Dining',
    description: 'Reimagined ultra luxury cruising featuring the industry’s highest space-to-guest and crew-to-guest ratios, Michelin-level culinary artistry with Master Chef Nobu Matsuhisa, and all-suite accommodations.',
    logoUrl: 'https://logo.clearbit.com/crystalcruises.com',
    brandColor: '#002b49',
    imageUrl: 'https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&w=1200&q=80',
    fleetCount: 2,
    startingPrice: 3890,
    exclusivePerksSummary: 'Complimentary Umi Uma by Nobu Dining, Fine Wines and Spirits, and $500 Suite Credit',
    popularDestinations: ['Mediterranean', 'Caribbean and West Indies', 'Northern Europe', 'Transatlantic', 'Asia'],
    departurePorts: ['Miami, FL', 'Venice, Italy', 'Athens, Greece', 'Reykjavik, Iceland'],
    keyHighlights: ['Umi Uma Japanese Restaurant by Master Chef Nobu Matsuhisa', 'Nearly 1 to 1 Staff to Guest Ratio', 'Osteria d’Ovidio Authentic Northern Italian', 'Spacious All-Suite Layouts with Private Verandas'],
    offers: [
      {
        id: 'crys-serenity-greek',
        title: '8 Night Cyclades and Aegean Luxury Voyage with Santorini',
        shipName: 'Crystal Serenity',
        destination: 'Greek Isles and Turkey',
        region: 'Mediterranean',
        durationNights: 8,
        departurePort: 'Athens Piraeus, Greece',
        departureDates: ['Jun 08, 2026', 'Jul 06, 2026', 'Aug 17, 2026'],
        originalPrice: 6500,
        discountedPrice: 4790,
        onboardCredit: 500,
        badge: 'Nobu Master Dining',
        perks: ['Complimentary Dinner at Umi Uma by Nobu Included', 'All Beverages and Gratuities Included', '$500 Suite Credit', 'Butler Service in All Penthouse Suites'],
        itinerarySummary: 'Athens to Mykonos, Patmos, Bodrum Turkey, Rhodes, Santorini, and return to Athens.',
        itineraryDays: [
          { day: 1, port: 'Athens Piraeus, Greece', activity: 'Boarding and champagne welcome reception', arriveTime: '12:00 PM', departTime: '6:00 PM' },
          { day: 2, port: 'Mykonos, Greece', activity: 'Private beach club day or walking tour of Little Venice', arriveTime: '8:00 AM', departTime: '10:00 PM' },
          { day: 3, port: 'Bodrum, Turkey', activity: 'Castle of St. Peter and private gulet sailboat excursion', arriveTime: '8:00 AM', departTime: '6:00 PM' },
          { day: 4, port: 'Rhodes, Greece', activity: 'Acropolis of Lindos and ancient knight cobblestones', arriveTime: '8:00 AM', departTime: '6:00 PM' },
          { day: 5, port: 'Santorini, Greece', activity: 'Caldera catamaran tour and wine tasting in Megalochori', arriveTime: '7:00 AM', departTime: '9:00 PM' },
          { day: 6, port: 'Athens Piraeus, Greece', activity: 'Disembarkation and departure transfer', arriveTime: '7:00 AM' }
        ],
        includedDining: ['Waterside Main Dining', 'Umi Uma by Nobu Matsuhisa', 'Osteria d’Ovidio Fine Italian', 'The Bistro European Cafe'],
        shipHighlights: ['Crystal Life Spa and Salon', 'Galaxy Lounge Production Shows', 'Paddle Tennis and Golf Driving Nets', 'Avenue Saloon Piano Bar']
      }
    ]
  },

  // 8. EXPLORA JOURNEYS
  {
    id: 'explora-journeys',
    name: 'Explora Journeys',
    category: 'luxury',
    categoryLabel: 'European Luxury Ocean State of Mind',
    tagline: 'The Ocean State of Mind with Oceanfront Suites and European Elegance',
    description: 'The ultra luxury lifestyle brand of the MSC Group, delivering an ocean state of mind with sweeping private oceanfront terraces, nine distinct culinary journeys, and unhurried ocean travels.',
    logoUrl: 'https://logo.clearbit.com/explorajourneys.com',
    brandColor: '#1c1c1c',
    imageUrl: 'https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&w=1200&q=80',
    fleetCount: 2,
    startingPrice: 3250,
    exclusivePerksSummary: 'Complimentary Champagne Bottle, All Inclusive Fine Dining and Spirits, plus $400 Journey Experience Credit',
    popularDestinations: ['Mediterranean', 'Caribbean and Lesser Antilles', 'Red Sea and Arabian Peninsula', 'Northern Europe', 'Amazon and South America'],
    departurePorts: ['Miami, FL', 'Barcelona, Spain', 'Civitavecchia Rome, Italy', 'Jeddah, Saudi Arabia'],
    keyHighlights: ['All-Oceanfront Suites with Private Sun Terrace Daybeds', 'Nine Distinct Culinary Experiences with No Surcharges', 'Ocean Wellness Thermal Spa and Open-Air Fitness', 'Three Heated Outdoor Pools and 64 Private Cabanas'],
    offers: [
      {
        id: 'explora-one-carib',
        title: '7 Night A Journey to Hidden Lesser Antilles and St. Barts',
        shipName: 'EXPLORA I',
        destination: 'Caribbean and West Indies',
        region: 'Caribbean',
        durationNights: 7,
        departurePort: 'Miami, FL',
        departureDates: ['Nov 20, 2025', 'Dec 18, 2025', 'Jan 22, 2026', 'Feb 19, 2026'],
        originalPrice: 4600,
        discountedPrice: 3350,
        onboardCredit: 400,
        badge: 'Ocean State of Mind',
        perks: ['Bottle of Chilled Champagne on Arrival', 'All 9 Culinary Experiences Included', '$400 Journey Experience Credit', 'High Speed Wi-Fi and Thermal Spa Access'],
        itinerarySummary: 'Miami to San Juan Puerto Rico, St. John USVI, Gustavia St. Barts, Antigua, and Bridgetown Barbados.',
        itineraryDays: [
          { day: 1, port: 'Miami, Florida', activity: 'Boarding and sunset champagne sailaway', arriveTime: '12:00 PM', departTime: '6:00 PM' },
          { day: 2, port: 'A Day on the Ocean', activity: 'Ocean Wellness thermal suite and pool daybed relaxation' },
          { day: 3, port: 'San Juan, Puerto Rico', activity: 'Rainforest hiking or historic San Juan architecture walk', arriveTime: '8:00 AM', departTime: '6:00 PM' },
          { day: 4, port: 'Gustavia, St. Barts', activity: 'Chic beach clubs and French dining along the quay', arriveTime: '8:00 AM', departTime: '10:00 PM' },
          { day: 5, port: 'St. John’s, Antigua', activity: 'Shirley Heights lookout and Nelson’s Dockyard', arriveTime: '8:00 AM', departTime: '6:00 PM' },
          { day: 6, port: 'Bridgetown, Barbados', activity: 'Disembarkation and private departure transfer', arriveTime: '7:00 AM' }
        ],
        includedDining: ['Sakura Pan-Asian Cuisine', 'Marble and Co. Steakhouse', 'Med Yacht Club Mediterranean', 'Fil Rouge French Inspired', 'Emporium Marketplace'],
        shipHighlights: ['Ocean Wellness Spa with Himalayan Salt Room', 'Astern Pool and Lounge with Infinity Edge', 'Lobby Bar with Master Piano', 'All-Suite Balcony Layouts']
      }
    ]
  },

  // 9. PAUL GAUGUIN CRUISES
  {
    id: 'paul-gauguin-cruises',
    name: 'Paul Gauguin Cruises',
    category: 'luxury',
    categoryLabel: 'French Polynesia and South Pacific Leader',
    tagline: 'The Undisputed Specialist of Tahiti, French Polynesia and the South Pacific',
    description: 'Purpose-built to navigate the shallow lagoons of Tahiti and the South Seas, offering five-star luxury, Polynesian hospitality with Les Gauguines cultural ambassadors, and private islet retreats.',
    logoUrl: 'https://logo.clearbit.com/pgcruises.com',
    brandColor: '#004b6e',
    imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    fleetCount: 1,
    startingPrice: 3790,
    exclusivePerksSummary: 'Private Islet Motu Mahana Beach Barbecue, Retractable Marina Kayaks, and $300 Shipboard Credit',
    popularDestinations: ['Tahiti and Society Islands', 'Tuamotu Archipelago', 'Marquesas Islands', 'Cook Islands', 'Fiji and South Pacific'],
    departurePorts: ['Papeete, Tahiti', 'Lautoka, Fiji'],
    keyHighlights: ['Private Islet Beach Day on Motu Mahana with Floating Bar', 'Retractable Watersports Marina with Kayaks, Paddleboards and Scuba', 'Les Gauguines and Les Gauguins Polynesian Cultural Hosts', 'All Meals, Fine Wines, Spirits and Gratuities Included'],
    offers: [
      {
        id: 'pg-tahiti-society',
        title: '7 Night Tahiti and Society Islands Paradise with Bora Bora',
        shipName: 'The Gauguin',
        destination: 'French Polynesia and Bora Bora',
        region: 'South Pacific',
        durationNights: 7,
        departurePort: 'Papeete, Tahiti',
        departureDates: ['Nov 01, 2025', 'Dec 06, 2025', 'Jan 10, 2026', 'Feb 21, 2026', 'Apr 18, 2026'],
        originalPrice: 5690,
        discountedPrice: 4290,
        onboardCredit: 300,
        badge: 'Tahiti Specialist',
        perks: ['Exclusive Motu Mahana Private Islet Day with Floating Lagoon Bar', 'Overnight Stays in Bora Bora and Moorea', 'All Scuba and Kayak Marina Gear Included', '$300 Stateroom Cash'],
        itinerarySummary: 'Papeete Tahiti to Huahine, Taha’a Motu Mahana private islet, Bora Bora overnight, Moorea overnight, and return to Papeete.',
        itineraryDays: [
          { day: 1, port: 'Papeete, Tahiti', activity: 'Boarding with flower lei greeting and welcome tropical cocktail', arriveTime: '3:00 PM', departTime: '11:59 PM' },
          { day: 2, port: 'Huahine, Society Islands', activity: 'Sacred blue-eyed eels and archaeological marae temples', arriveTime: '8:00 AM', departTime: '5:00 PM' },
          { day: 3, port: 'Taha’a (Motu Mahana)', activity: 'Private islet day with traditional Polynesian feast, barbecue and floating bar', arriveTime: '8:00 AM', departTime: '5:00 PM' },
          { day: 4, port: 'Bora Bora, Society Islands (Overnight)', activity: 'Mount Otemanu catamaran cruise and stingray snorkel encounter', arriveTime: '8:00 AM' },
          { day: 5, port: 'Bora Bora, Society Islands', activity: 'Private beach day and lagoon sunset sailing', departTime: '6:00 PM' },
          { day: 6, port: 'Moorea, Society Islands (Overnight)', activity: 'Cook’s Bay scenic hike and dolphin sanctuary visit', arriveTime: '8:00 AM' },
          { day: 7, port: 'Papeete, Tahiti', activity: 'Disembarkation and flight connections', arriveTime: '7:00 AM' }
        ],
        includedDining: ['L’Etoile Main Dining Room', 'La Veranda Overwater French Dining', 'Le Grill Casual Poolside'],
        shipHighlights: ['Retractable Watersports Marina', 'Deep Blue Spa by Algotherm', 'Les Gauguines Cultural Performances', 'Open Bridge Policy']
      }
    ]
  },

  // 10. SEADREAM YACHT CLUB
  {
    id: 'seadream-cruises',
    name: 'SeaDream Yacht Club',
    category: 'luxury',
    categoryLabel: 'Mega Yacht Casual Luxury',
    tagline: 'It’s Yachting, Not Cruising with 112 Guests, Balinese Dream Beds and Champagne and Caviar Splash',
    description: 'Intimate twin mega yachts hosting just 112 guests with a crew of 95, delivering an ultra casual luxury yachting lifestyle, outdoor Balinese Dream Beds under the stars, and signature Champagne and Caviar splashes.',
    logoUrl: 'https://logo.clearbit.com/seadream.com',
    brandColor: '#002855',
    imageUrl: 'https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&w=1200&q=80',
    fleetCount: 2,
    startingPrice: 3499,
    exclusivePerksSummary: 'Signature Champagne and Caviar Splash, Sleeping Under the Stars on Balinese Beds, and $300 Yacht Credit',
    popularDestinations: ['Caribbean Yacht Harbors', 'Mediterranean Small Ports', 'Greek Isles and Corinth Canal', 'Norwegian Fjords'],
    departurePorts: ['San Juan, PR', 'St. Thomas, USVI', 'Civitavecchia Rome, Italy', 'Piraeus Athens, Greece', 'Oslo, Norway'],
    keyHighlights: ['Only 112 Guests with 95 Crew Members', 'Signature Champagne and Caviar Splash in the Surf', 'Balinese Dream Beds for Sleeping Under the Stars', 'Watersports Marina with WaveRunners and Stand-Up Paddleboards'],
    offers: [
      {
        id: 'seadream-virgin-islands',
        title: '7 Night Virgin Islands and French West Indies Yachting with Jost Van Dyke',
        shipName: 'SeaDream II',
        destination: 'Virgin Islands and Leewards',
        region: 'Caribbean',
        durationNights: 7,
        departurePort: 'St. Thomas, USVI',
        departureDates: ['Dec 06, 2025', 'Jan 10, 2026', 'Feb 07, 2026', 'Mar 14, 2026'],
        originalPrice: 4999,
        discountedPrice: 3699,
        onboardCredit: 300,
        badge: 'Yachting Not Cruising',
        perks: ['Signature Champagne and Caviar Splash Included', 'All Gourmet Dining, Open Bar, and Marina Toys Included', '$300 Yacht Spending Credit', 'Sleeping Under the Stars on Balinese Dream Beds'],
        itinerarySummary: 'St. Thomas to St. John, Virgin Gorda, Jost Van Dyke Soggy Dollar Beach, Gustavia St. Barts, and return to St. Thomas.',
        itineraryDays: [
          { day: 1, port: 'St. Thomas, USVI', activity: 'Boarding with chilled champagne and welcome yacht tour', arriveTime: '1:00 PM', departTime: '6:00 PM' },
          { day: 2, port: 'St. John, USVI', activity: 'Trunk Bay snorkeling and Cruz Bay rum tasting', arriveTime: '8:00 AM', departTime: '6:00 PM' },
          { day: 3, port: 'Virgin Gorda, BVI', activity: 'The Baths granite boulder tidal pools and Champagne and Caviar Splash', arriveTime: '8:00 AM', departTime: '5:00 PM' },
          { day: 4, port: 'Jost Van Dyke, BVI', activity: 'White Bay beach day and Painkiller cocktail at Soggy Dollar', arriveTime: '8:00 AM', departTime: '10:00 PM' },
          { day: 5, port: 'Gustavia, St. Barts (Overnight)', activity: 'Fine dining ashore and boutique shopping', arriveTime: '8:00 AM' },
          { day: 6, port: 'Gustavia, St. Barts', activity: 'Water skiing from the SeaDream marina platform', departTime: '6:00 PM' },
          { day: 7, port: 'St. Thomas, USVI', activity: 'Disembarkation and private airport transfer', arriveTime: '7:00 AM' }
        ],
        includedDining: ['The Dining Salon', 'Topside Restaurant Al Fresco', 'Raw Food Menu Plant-Based', '24-Hour Room Service'],
        shipHighlights: ['Watersports Marina with Jet Skis and Water Slides', 'Starlit Movies on Deck with Fresh Popcorn', 'SeaDream Spa by Thai Certified Therapists', 'Balinese Dream Beds']
      }
    ]
  },

  // 11. WINDSTAR CRUISES
  {
    id: 'windstar-cruises',
    name: 'Windstar Cruises',
    category: 'luxury',
    categoryLabel: 'Small Ship and Masted Sailing Yachts',
    tagline: '180 Degrees from Ordinary with Iconic Tall Sailing Ships and Intimate All-Suite Yachts',
    description: 'Iconic tall sailing masted yachts and newly reimagined all-suite Star Plus class motor vessels offering access to hidden harbors, official James Beard Foundation culinary partnerships, and watersports platforms.',
    logoUrl: 'https://logo.clearbit.com/windstarcruises.com',
    brandColor: '#002f6c',
    imageUrl: 'https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&w=1200&q=80',
    fleetCount: 6,
    startingPrice: 1999,
    exclusivePerksSummary: 'All-Inclusive Upgrade Included with Unlimited Wi-Fi, Drinks and Gratuities, plus $300 Stateroom Cash',
    popularDestinations: ['Tahiti and Tuamotus', 'Greek Isles and Small Ports', 'Costa Rica and Panama Canal', 'Caribbean Secret Coves', 'Iceland Circumnavigation'],
    departurePorts: ['Papeete, Tahiti', 'Piraeus Athens, Greece', 'Barcelona, Spain', 'Colon, Panama', 'Reykjavik, Iceland'],
    keyHighlights: ['Official Cruise Line of the James Beard Foundation', 'Iconic Computer-Operated Tall Masted Sails', 'Watersports Platform with Complimentary Snorkel and Kayaks', 'Intimate Capacity of Only 148 to 342 Guests'],
    offers: [
      {
        id: 'wind-surf-tahiti',
        title: '7 Night Dreams of Tahiti under Tall Sails with Bora Bora',
        shipName: 'Wind Spirit',
        destination: 'French Polynesia and Society Islands',
        region: 'South Pacific',
        durationNights: 7,
        departurePort: 'Papeete, Tahiti',
        departureDates: ['Oct 30, 2025', 'Nov 27, 2025', 'Jan 15, 2026', 'Feb 19, 2026', 'Mar 26, 2026'],
        originalPrice: 4299,
        discountedPrice: 2899,
        onboardCredit: 300,
        badge: 'Tall Ship Sailing',
        perks: ['All Inclusive Package with Drinks, Wi-Fi and Gratuities Included', 'Exclusive Bora Bora Destination Celebration with Fire Dancers', '$300 Stateroom Credit', 'Watersports Platform Access'],
        itinerarySummary: 'Papeete Tahiti under unfurled white sails to Moorea, Raiatea, Taha’a, Bora Bora overnight, and Huahine.',
        itineraryDays: [
          { day: 1, port: 'Papeete, Tahiti', activity: 'Boarding and dramatic sailaway to the sound of 1492 Conquest of Paradise', arriveTime: '1:00 PM', departTime: '6:00 PM' },
          { day: 2, port: 'Moorea, Society Islands', activity: 'Belvedere Lookout and Cook’s Bay catamaran snorkel', arriveTime: '8:00 AM', departTime: '5:00 PM' },
          { day: 3, port: 'Raiatea, Society Islands', activity: 'Faaroa River kayak tour and UNESCO Taputapuatea marae', arriveTime: '8:00 AM', departTime: '6:00 PM' },
          { day: 4, port: 'Taha’a (Motu Mahana)', activity: 'Private motu beach feast with vanilla plantation visit', arriveTime: '8:00 AM', departTime: '5:00 PM' },
          { day: 5, port: 'Bora Bora, Society Islands (Overnight)', activity: 'Lagoon snorkeling with rays and private island fire dance evening', arriveTime: '9:00 AM' },
          { day: 6, port: 'Bora Bora, Society Islands', activity: 'Marina watersports platform paddleboarding', departTime: '6:00 PM' },
          { day: 7, port: 'Papeete, Tahiti', activity: 'Disembarkation and airport transfer', arriveTime: '7:00 AM' }
        ],
        includedDining: ['Amphora Main Restaurant', 'Candles Romantic Outdoor Steakhouse', 'Veranda Breakfast and Lunch'],
        shipHighlights: ['Water Sports Marina with Stand-Up Paddleboards and Sailboats', 'Open Bridge with Officers', 'James Beard Foundation Curated Dishes', 'Unfurled Sail Experience']
      }
    ]
  },

  // 12. THE RITZ-CARLTON YACHT COLLECTION
  {
    id: 'ritz-carlton-yacht-collection',
    name: 'The Ritz-Carlton Yacht Collection',
    category: 'luxury',
    categoryLabel: 'Legendary Ritz-Carlton Luxury at Sea',
    tagline: 'Legendary Ritz-Carlton Hospitality Reimagined for the High Seas',
    description: 'Custom-built superyachts featuring all-terrace ocean suites, personal concierges, Michelin-worthy dining, and the relaxed freedom of a private luxury yacht vacation.',
    logoUrl: 'https://logo.clearbit.com/ritzcarltonyachtcollection.com',
    brandColor: '#002b49',
    imageUrl: 'https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&w=1200&q=80',
    fleetCount: 3,
    startingPrice: 4800,
    exclusivePerksSummary: 'Personal Concierge for Every Suite, Moët and Chandon Welcome Champagne, and $500 Yacht Credit',
    popularDestinations: ['Mediterranean Riviera', 'Caribbean Yacht Harbors', 'Greek Isles', 'Northern Europe', 'Transatlantic'],
    departurePorts: ['Fort Lauderdale, FL', 'San Juan, PR', 'Civitavecchia Rome, Italy', 'Barcelona, Spain', 'Valletta, Malta'],
    keyHighlights: ['Personal Concierge Dedicated to Every Single Suite', 'Custom Marina with Direct Sea Access for Kayaks and Paddleboards', 'The Ritz-Carlton Spa with Ocean-View Treatment Rooms', 'All-Terrace Suites with Floor-to-Ceiling Windows'],
    offers: [
      {
        id: 'ritz-evrima-french-riviera',
        title: '7 Night French Riviera and Corsica Superyacht Voyage',
        shipName: 'Evrima',
        destination: 'France, Monaco and Corsica',
        region: 'Mediterranean',
        durationNights: 7,
        departurePort: 'Rome Civitavecchia, Italy',
        departureDates: ['Jun 14, 2026', 'Jul 19, 2026', 'Aug 23, 2026', 'Sep 20, 2026'],
        originalPrice: 7900,
        discountedPrice: 5900,
        onboardCredit: 500,
        badge: 'Superyacht Luxury',
        perks: ['Personal Concierge Service for Every Suite', 'All Beverages and Fine Dining Included', '$500 Yacht Spending Credit', 'Complimentary Marina Watersports Access'],
        itinerarySummary: 'Rome to Porto-Vecchio Corsica, Saint-Tropez overnight, Cannes, Monte Carlo Monaco, and Nice France.',
        itineraryDays: [
          { day: 1, port: 'Civitavecchia Rome, Italy', activity: 'Boarding with Moët and Chandon champagne welcome', arriveTime: '1:00 PM', departTime: '6:00 PM' },
          { day: 2, port: 'Porto-Vecchio, Corsica', activity: 'Santa Giulia turquoise beach or mountain citadel hike', arriveTime: '8:00 AM', departTime: '6:00 PM' },
          { day: 3, port: 'Calvi, Corsica', activity: 'Genoese Citadel and Corsican wine and cheese tasting', arriveTime: '8:00 AM', departTime: '5:00 PM' },
          { day: 4, port: 'Saint-Tropez, France (Overnight)', activity: 'Yacht harbor stroll and exclusive beach club evening', arriveTime: '8:00 AM' },
          { day: 5, port: 'Saint-Tropez, France', activity: 'Marina paddleboarding and afternoon sail to Cannes', departTime: '3:00 PM' },
          { day: 6, port: 'Monte Carlo, Monaco', activity: 'Private palace tour and Casino de Monte Carlo dinner', arriveTime: '8:00 AM', departTime: '11:00 PM' },
          { day: 7, port: 'Nice, France', activity: 'Disembarkation and private airport transfer', arriveTime: '7:00 AM' }
        ],
        includedDining: ['The Evrima Room Main Restaurant', 'Mistral Mediterranean Al Fresco', 'Talaat Thai Modern Asian', 'The Pool House Casual'],
        shipHighlights: ['The Marina and Marina Terrace with Ocean Lounge', 'The Ritz-Carlton Spa with Outdoor Mist Lounge', 'The Living Room Cafe and Library', 'Infinity Edge Pool on Deck 5']
      }
    ]
  }
];

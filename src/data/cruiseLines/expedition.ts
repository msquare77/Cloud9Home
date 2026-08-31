import { CruiseLineDetail } from './types';

export const EXPEDITION_CRUISE_LINES: CruiseLineDetail[] = [
  // 1. ATLAS OCEAN VOYAGES
  {
    id: 'atlas-ocean-voyages-cruise',
    name: 'Atlas Ocean Voyages',
    category: 'expedition',
    categoryLabel: 'Intimate Yacht Expeditions',
    tagline: 'Luxe-Adventure Expeditions with Under 200 Guests and Private Jet Charters',
    description: 'Year-round intimate yacht expeditions catering to fewer than 200 explorers with polar-class hulls, inclusive private charter jet flights to Antarctica, and complimentary parkas.',
    logoUrl: 'https://logo.clearbit.com/atlasoceanvoyages.com',
    brandColor: '#1a1a1a',
    imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80',
    fleetCount: 3,
    startingPrice: 4499,
    exclusivePerksSummary: 'Complimentary Private Charter Flights, Custom Polar Parka, and $400 Stateroom Credit',
    popularDestinations: ['Antarctica Peninsula and South Georgia', 'Arctic and Svalbard', 'Fjords and Northern Europe', 'Mediterranean Epicurean', 'South America'],
    departurePorts: ['Ushuaia, Argentina', 'Longyearbyen, Svalbard', 'Reykjavik, Iceland', 'Nice, France', 'Rio de Janeiro, Brazil'],
    keyHighlights: ['Capacity Limited to Under 200 Guests for Maximum Zodiac Exploration', 'Complimentary Private Charter Jet Flights on Polar Itineraries', 'Free Custom Water-Resistant Expedition Parka to Keep', 'L’Occitane Amenities and SeaSpa by L’Occitane'],
    offers: [
      {
        id: 'atlas-antarctica-classic',
        title: '9 Night Antarctica Discovery Yacht Expedition with Private Jet',
        shipName: 'World Navigator',
        destination: 'Antarctica Peninsula and Drake Passage',
        region: 'World',
        durationNights: 9,
        departurePort: 'Ushuaia, Argentina',
        departureDates: ['Dec 05, 2025', 'Jan 12, 2026', 'Feb 02, 2026', 'Mar 01, 2026'],
        originalPrice: 8999,
        discountedPrice: 6799,
        onboardCredit: 400,
        badge: 'Polar Expedition',
        perks: ['Roundtrip Private Charter Flight from Buenos Aires Included', 'Custom Polar Expedition Parka Included', 'All Zodiac Landings and Guided Hikes Included', '$400 Stateroom Credit'],
        itinerarySummary: 'Buenos Aires charter flight to Ushuaia, Drake Passage, South Shetland Islands, Antarctic Peninsula multiple landings, and return.',
        itineraryDays: [
          { day: 1, port: 'Buenos Aires and Ushuaia', activity: 'Private charter flight to Ushuaia and boarding World Navigator', arriveTime: '12:00 PM', departTime: '6:00 PM' },
          { day: 2, port: 'Crossing the Drake Passage', activity: 'Marine biologist lectures and seabird spotting from The Dome lounge' },
          { day: 3, port: 'South Shetland Islands', activity: 'First Zodiac landing among chinstrap penguin colonies', arriveTime: '8:00 AM', departTime: '6:00 PM' },
          { day: 4, port: 'Antarctic Peninsula', activity: 'Kayaking among towering electric-blue icebergs and glacier landings', arriveTime: '7:00 AM', departTime: '7:00 PM' },
          { day: 5, port: 'Neko Harbour and Paradise Bay', activity: 'Stepping foot onto the seventh continent and polar plunge event', arriveTime: '7:00 AM', departTime: '7:00 PM' },
          { day: 6, port: 'Lemaire Channel', activity: 'Scenic navigation through Kodak Gap with orcas and humpback whales', arriveTime: '8:00 AM', departTime: '5:00 PM' },
          { day: 7, port: 'Ushuaia, Argentina', activity: 'Disembarkation and charter flight to Buenos Aires', arriveTime: '7:00 AM' }
        ],
        includedDining: ['Porto Main Restaurant International Cuisine', '7-Aft Grill Chophouse', 'The Dome Observation Tea and Tapas', 'Paula’s Pantry Artisanal Grab and Go'],
        shipHighlights: ['1B Ice-Class Polar Expedition Hull', 'SeaSpa by L’Occitane', 'The Dome 270-Degree Observation Lounge', 'Fleet of 18 Zodiacs and Polar Kayaks']
      }
    ]
  },

  // 2. HX HURTIGRUTEN EXPEDITIONS
  {
    id: 'hurtigruten-expeditions',
    name: 'HX Hurtigruten Expeditions',
    category: 'expedition',
    categoryLabel: 'Pioneers of Polar Exploration',
    tagline: 'Pioneers in Expedition Travel Since 1896 with Science Centers and Hybrid Ships',
    description: 'The world leader in exploration travel since 1896, operating innovative hybrid electric expedition ships equipped with state-of-the-art Science Centers and expert expedition teams.',
    logoUrl: 'https://logo.clearbit.com/travelhx.com',
    brandColor: '#d6001c',
    imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80',
    fleetCount: 7,
    startingPrice: 3190,
    exclusivePerksSummary: 'All Zodiac Excursions and Science Center Access Included plus $350 Stateroom Credit',
    popularDestinations: ['Antarctica and Falklands', 'Svalbard Polar Bears', 'Galapagos Islands', 'Greenland and Northwest Passage', 'Alaska Fjords'],
    departurePorts: ['Ushuaia, Argentina', 'Longyearbyen, Norway', 'Reykjavik, Iceland', 'Quito, Ecuador', 'Vancouver, BC'],
    keyHighlights: ['World’s First Hybrid Electric Expedition Cruise Ships', 'Full Interactive Onboard Science Center with Microscopes', 'Complimentary Expedition Jacket and Boots on Loan', 'All Daily Zodiac Landings and Nature Walks Included'],
    offers: [
      {
        id: 'hx-svalbard-polar-bears',
        title: '9 Night Realm of the Polar Bear Svalbard Circumnavigation',
        shipName: 'MS Spitsbergen',
        destination: 'Svalbard Arctic and Glaciers',
        region: 'Europe',
        durationNights: 9,
        departurePort: 'Longyearbyen, Svalbard',
        departureDates: ['Jun 05, 2026', 'Jun 19, 2026', 'Jul 10, 2026', 'Jul 24, 2026', 'Aug 07, 2026'],
        originalPrice: 6290,
        discountedPrice: 4890,
        onboardCredit: 350,
        badge: 'Arctic Wildlife',
        perks: ['Complimentary Wind and Water Resistant Expedition Jacket', 'All Daily Zodiac Landings and Guided Tundra Hikes Included', '$350 Stateroom Credit', 'Beer and Wine with Lunch and Dinner'],
        itinerarySummary: 'Longyearbyen to North West Spitsbergen National Park, Eastern Svalbard Nature Reserves, Hinlopen Strait, and Kongsfjorden.',
        itineraryDays: [
          { day: 1, port: 'Longyearbyen, Svalbard', activity: 'Boarding MS Spitsbergen and sail into Isfjorden', arriveTime: '2:00 PM', departTime: '6:00 PM' },
          { day: 2, port: 'North West Spitsbergen', activity: 'Historic whaling stations and Zodiac cruising among walrus haulouts', arriveTime: '8:00 AM', departTime: '6:00 PM' },
          { day: 3, port: 'Woodfjorden and Monaco Glacier', activity: 'Calving glacier front navigation and Arctic fox spotting', arriveTime: '7:00 AM', departTime: '7:00 PM' },
          { day: 4, port: 'Hinlopen Strait and Alkefjellet', activity: 'Towering basalt bird cliffs with 60000 pairs of Brünnich’s guillemots', arriveTime: '8:00 AM', departTime: '6:00 PM' },
          { day: 5, port: 'Eastern Svalbard Polar Bear Territory', activity: 'Searching for polar bears on sea ice floes with expedition team', arriveTime: '7:00 AM', departTime: '7:00 PM' },
          { day: 6, port: 'Kongsfjorden and Ny-Alesund', activity: 'World’s northernmost permanent settlement and research station', arriveTime: '8:00 AM', departTime: '4:00 PM' },
          { day: 7, port: 'Longyearbyen, Svalbard', activity: 'Disembarkation and Arctic museum tour', arriveTime: '7:00 AM' }
        ],
        includedDining: ['Aune Main Dining Nordic Buffet and A La Carte', 'Fredheim Casual Street Food Kitchen', 'Lindstrøm Fine Dining for Suites'],
        shipHighlights: ['HX Science Center with Resident Scientists', 'Outdoor Hot Tubs with Fjord Views', 'Expedition Launch Marina', 'Panoramic Explorer Lounge and Bar']
      }
    ]
  },

  // 3. LINDBLAD EXPEDITIONS
  {
    id: 'lindblad-expeditions',
    name: 'Lindblad Expeditions',
    category: 'expedition',
    categoryLabel: 'National Geographic Exploration',
    tagline: 'In Partnership with National Geographic for Authentic Wildlife Discovery',
    description: 'In alliance with National Geographic, delivering world renowned naturalists, undersea specialists, certified photo instructors, and nimble small ships reaching remote frontiers.',
    logoUrl: 'https://logo.clearbit.com/expeditions.com',
    brandColor: '#ffd100',
    imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80',
    fleetCount: 16,
    startingPrice: 4690,
    exclusivePerksSummary: 'National Geographic Certified Photo Instructors, Undersea ROV Video Shows, and $400 Expedition Cash',
    popularDestinations: ['Galapagos Islands Year-Round', 'Antarctica and South Georgia', 'Baja California Whale Watching', 'Alaska Wilderness Passages', 'Arctic and Greenland'],
    departurePorts: ['Guayaquil, Ecuador', 'Ushuaia, Argentina', 'Loreto, Mexico', 'Juneau, AK', 'Reykjavik, Iceland'],
    keyHighlights: ['National Geographic Photographers and Naturalists Onboard Every Departure', 'Undersea Specialists with ROV Remote Cameras and Hydrophones', 'Nimble Fleet of Zodiacs, Sea Kayaks, and Stand-Up Paddleboards', 'OM System Photography Gear Loan Lockers Onboard'],
    offers: [
      {
        id: 'lindblad-galapagos-wildlife',
        title: '7 Night Galapagos Wild and Intimate with National Geographic',
        shipName: 'National Geographic Islander II',
        destination: 'Galapagos Islands Archipelago',
        region: 'World',
        durationNights: 7,
        departurePort: 'Guayaquil, Ecuador',
        departureDates: ['Oct 24, 2025', 'Nov 21, 2025', 'Dec 19, 2025', 'Jan 16, 2026', 'Feb 20, 2026'],
        originalPrice: 8490,
        discountedPrice: 6890,
        onboardCredit: 400,
        badge: 'National Geographic',
        perks: ['National Geographic Photo Instructor and Certified Naturalists Included', 'All Snorkeling Gear, Wetsuits, and Kayaks Included', 'Internal Galapagos Roundtrip Flights Included', '$400 Expedition Stateroom Credit'],
        itinerarySummary: 'Guayaquil flight to Baltra Galapagos, North Seymour, Fernandina, Isabela, Floreana, Santa Cruz Charles Darwin Research Station, and return.',
        itineraryDays: [
          { day: 1, port: 'Guayaquil to Baltra Galapagos', activity: 'Boarding the 48-guest all-suite National Geographic Islander II and welcome briefing', arriveTime: '11:00 AM', departTime: '4:00 PM' },
          { day: 2, port: 'North Seymour and Santa Cruz', activity: 'Blue-footed booby courtship dances and magnificent frigatebird nesting', arriveTime: '7:30 AM', departTime: '6:00 PM' },
          { day: 3, port: 'Isabela and Fernandina', activity: 'Snorkeling with Galapagos penguins, flightless cormorants, and sea lions', arriveTime: '7:00 AM', departTime: '6:00 PM' },
          { day: 4, port: 'Urbina Bay and Tagus Cove', activity: 'Giant land tortoises in the wild and historic pirate graffiti walk', arriveTime: '8:00 AM', departTime: '5:30 PM' },
          { day: 5, port: 'Floreana Island', activity: 'Post Office Bay barrel tradition and flamingo saltwater lagoon', arriveTime: '7:30 AM', departTime: '5:00 PM' },
          { day: 6, port: 'Santa Cruz Island', activity: 'Charles Darwin Research Station and giant tortoise breeding reserve', arriveTime: '8:00 AM', departTime: '6:00 PM' },
          { day: 7, port: 'Baltra to Guayaquil', activity: 'Disembarkation and return flight to Ecuador mainland', arriveTime: '8:30 AM' }
        ],
        includedDining: ['Yacht Club Restaurant Indoor and Outdoor Al Fresco', 'Patio Grill Casual Dining', 'All Open Bar Beverages Included'],
        shipHighlights: ['Only 48 Guests in All-Suite Accommodations', 'Science Hub with Interactive Touchscreens', 'Observation Deck with Hammocks', 'Marina Platform with Stand-Up Paddleboards and Glass-Bottom Zodiac']
      }
    ]
  },

  // 4. PONANT CRUISES
  {
    id: 'compagnie-du-ponant-cruises',
    name: 'Ponant Cruises',
    category: 'expedition',
    categoryLabel: 'French Luxury Polar and Tropical Expeditions',
    tagline: 'French Art of Living on the World’s Oceans with Le Commandant Charcot Icebreaker',
    description: 'The world leader in luxury polar and tropical expeditions sailing under the French flag with Alain Ducasse gastronomy, Veuve Clicquot champagne, and the world’s only luxury luxury icebreaker.',
    logoUrl: 'https://logo.clearbit.com/ponant.com',
    brandColor: '#002040',
    imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80',
    fleetCount: 13,
    startingPrice: 4850,
    exclusivePerksSummary: 'Gastronomy by Alain Ducasse, Free Open Bar with French Wines, and $400 Stateroom Cash',
    popularDestinations: ['Geographic North Pole', 'Antarctica and Ross Sea', 'Seychelles and Madagascar', 'Kimberley Australia', 'Polynesia and Pacific'],
    departurePorts: ['Longyearbyen, Norway', 'Ushuaia, Argentina', 'Mahe, Seychelles', 'Darwin, Australia', 'Papeete, Tahiti'],
    keyHighlights: ['Le Commandant Charcot The World’s Only Luxury Polar Class 2 Icebreaker', 'Gastronomy Curated in Partnership with Ducasse Conseil', 'Blue Eye Multi-Sensory Underwater Lounge on Explorer Class Ships', 'Complimentary Open Bar with Veuve Clicquot Champagne and Fine French Wines'],
    offers: [
      {
        id: 'ponant-charcot-northpole',
        title: '15 Night The Geographic North Pole Expedition aboard Luxury Icebreaker',
        shipName: 'Le Commandant Charcot',
        destination: 'High Arctic and Geographic North Pole 90 Degrees North',
        region: 'World',
        durationNights: 15,
        departurePort: 'Longyearbyen, Svalbard',
        departureDates: ['Jul 10, 2026', 'Jul 25, 2026', 'Aug 09, 2026'],
        originalPrice: 24500,
        discountedPrice: 19800,
        onboardCredit: 500,
        badge: 'Ultimate Icebreaker',
        perks: ['Reaching the True Geographic North Pole 90°00’00”', 'Helicopter and Hovercraft Reconnaissance Support', 'All Gourmet Dining and Fine French Wines Included', '$500 Suite Spending Cash'],
        itinerarySummary: 'Longyearbyen Svalbard, crushing through multi-year pack ice, reaching the North Pole, polar ice walks, and return.',
        itineraryDays: [
          { day: 1, port: 'Longyearbyen, Svalbard', activity: 'Boarding the PC2 polar icebreaker Le Commandant Charcot', arriveTime: '2:00 PM', departTime: '6:00 PM' },
          { day: 2, port: 'Cruising through the Pack Ice', activity: 'Witness the ship effortlessly navigate thick multi-year Arctic ice floes' },
          { day: 3, port: 'High Arctic Ice Floes', activity: 'Stepping onto the ice for snowshoe treks and polar bear watching', arriveTime: '8:00 AM', departTime: '6:00 PM' },
          { day: 4, port: 'Cruising to 90° North', activity: 'Glaciology lectures and Ducasse gastronomic French dinner' },
          { day: 5, port: 'The Geographic North Pole', activity: 'Celebrating at 90°00’00” North with champagne toast on the ice', arriveTime: '10:00 AM', departTime: '8:00 PM' },
          { day: 6, port: 'Navigation Southbound', activity: 'Participating in citizen science research projects onboard' },
          { day: 7, port: 'Longyearbyen, Svalbard', activity: 'Disembarkation and charter flight connections', arriveTime: '8:00 AM' }
        ],
        includedDining: ['Nuna Panoramic Gourmet Restaurant', 'Sila Casual Buffet Restaurant', 'Blue Cafe Outdoor Grill'],
        shipHighlights: ['World’s First Hybrid Electric LNG Polar Icebreaker', 'Indoor Heated Sea-Water Pool and Winter Garden', 'Outdoor Heated Blue Lagoon', 'Polar Scientific Laboratories']
      }
    ]
  },

  // 5. SCENIC OCEAN CRUISES
  {
    id: 'scenic-ocean-cruises',
    name: 'Scenic Ocean Cruises',
    category: 'expedition',
    categoryLabel: 'The World’s First Discovery Yachts',
    tagline: 'Ultra Luxury Discovery Yachts with Two Onboard Helicopters and a Submarine',
    description: 'The world’s first ultra luxury discovery yachts, Scenic Eclipse I & II, featuring only 228 guests, all-verandah suites, two Airbus helicopters, and a custom submarine.',
    logoUrl: 'https://logo.clearbit.com/scenicusa.com',
    brandColor: '#1c1c1c',
    imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80',
    fleetCount: 2,
    startingPrice: 5995,
    exclusivePerksSummary: 'Private Suite Butler Service, All 10 Dining Experiences Included, and $500 Suite Credit',
    popularDestinations: ['Antarctica and Weddell Sea', 'Arctic and Greenland', 'Polynesia and Easter Island', 'Mediterranean Yacht Harbors', 'Australia and Kimberley'],
    departurePorts: ['Buenos Aires, Argentina', 'Reykjavik, Iceland', 'Papeete, Tahiti', 'Valletta, Malta', 'Broome, Australia'],
    keyHighlights: ['Two Onboard State-of-the-Art Airbus Helicopters for Aerial Exploration', 'Scenic Neptune Custom Submarine Diving down to 300 Meters', '10 Unrivaled Dining Experiences with No Surcharges', '5,920 sq ft Senses Spa with Thermal Lounges and Vitality Pools'],
    offers: [
      {
        id: 'scenic-eclipse-antarctica',
        title: '12 Night Antarctica in Depth Discovery Yacht Exploration',
        shipName: 'Scenic Eclipse',
        destination: 'Antarctica Peninsula and South Shetland Islands',
        region: 'World',
        durationNights: 12,
        departurePort: 'Buenos Aires, Argentina',
        departureDates: ['Nov 28, 2025', 'Dec 19, 2025', 'Jan 09, 2026', 'Feb 13, 2026'],
        originalPrice: 15495,
        discountedPrice: 11995,
        onboardCredit: 500,
        badge: 'Discovery Yacht',
        perks: ['Roundtrip Flights from Buenos Aires to Ushuaia Included', 'Butler Service for Every Suite Included', 'All 10 Culinary Experiences, Premium Spirits, and Gratuities Included', '$500 Suite Spending Cash'],
        itinerarySummary: 'Buenos Aires to Ushuaia, Drake Passage, South Shetland Islands, multiple Antarctic Peninsula landings, and return.',
        itineraryDays: [
          { day: 1, port: 'Buenos Aires to Ushuaia', activity: 'Boarding Scenic Eclipse with butler suite welcome', arriveTime: '12:00 PM', departTime: '6:00 PM' },
          { day: 2, port: 'Cruising the Drake Passage', activity: 'Briefing by expedition team and Senses Spa thermal lounge relaxation' },
          { day: 3, port: 'South Shetland Islands', activity: 'First Zodiac landing and optional helicopter flight over towering glaciers', arriveTime: '8:00 AM', departTime: '6:00 PM' },
          { day: 4, port: 'Antarctic Peninsula', activity: 'Submarine dive with Scenic Neptune to view underwater ice shelves', arriveTime: '7:00 AM', departTime: '7:00 PM' },
          { day: 5, port: 'Port Lockroy and Pleneau Island', activity: 'Penguin post office visit and kayaking through iceberg mazes', arriveTime: '7:00 AM', departTime: '7:00 PM' },
          { day: 6, port: 'Deception Island', activity: 'Sailing inside a volcanic caldera and thermal beach walk', arriveTime: '8:00 AM', departTime: '4:00 PM' },
          { day: 7, port: 'Ushuaia, Argentina', activity: 'Disembarkation and flight to Buenos Aires', arriveTime: '7:00 AM' }
        ],
        includedDining: ['Elements Main French Restaurant', 'Koko’s Asian Fusion and Sushi Bar', 'Chef’s Table Lumière 10-Course', 'Azure Bar and Cafe'],
        shipHighlights: ['Two Onboard Airbus H130 Helicopters', 'Scenic Neptune 6-Guest Custom Submarine', 'Polar Class 6 Ice-Strengthened Hull', 'Spacious All-Verandah Suite Layouts']
      }
    ]
  },

  // 6. STAR CLIPPERS CRUISES
  {
    id: 'star-clippers-cruises',
    name: 'Star Clippers Cruises',
    category: 'expedition',
    categoryLabel: 'Authentic Tall Ship Masted Sailing',
    tagline: 'Authentic Tall Ship Sailing aboard the World’s Largest Full-Rigged Clipper Ships',
    description: 'The world’s leading tall ship sailing operator featuring authentic full-rigged four and five masted clipper ships, canvas sails, climbing the mast to the crow’s nest, and sleeping on teak decks.',
    logoUrl: 'https://logo.clearbit.com/starclippers.com',
    brandColor: '#002f6c',
    imageUrl: 'https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&w=1200&q=80',
    fleetCount: 3,
    startingPrice: 1790,
    exclusivePerksSummary: 'Mast Climbing to the Crow’s Nest, Teak Deck Sailing, and $200 Stateroom Credit',
    popularDestinations: ['Caribbean Treasure Islands', 'Greek Isles and Cyclades', 'Amalfi Coast and Sicily', 'Costa Rica and Panama', 'Transatlantic Under Sail'],
    departurePorts: ['Bridgetown, Barbados', 'St. Maarten', 'Piraeus Athens, Greece', 'Civitavecchia Rome, Italy', 'Puntarenas, Costa Rica'],
    keyHighlights: ['Royal Clipper The Largest Five-Masted Full-Rigged Sailing Ship in the World', 'Climbing the Mast to the Passenger Crow’s Nest 60 Feet in the Air', 'Lying in the Bowsprit Net Suspended over the Ocean Waves', 'Drop-Down Marina for Water Skiing, Kayaking and Windsurfing'],
    offers: [
      {
        id: 'star-royal-caribbean-treasure',
        title: '7 Night Caribbean Grenadines and Windward Islands under Full Sails',
        shipName: 'Royal Clipper',
        destination: 'Windward Islands and Grenadines',
        region: 'Caribbean',
        durationNights: 7,
        departurePort: 'Bridgetown, Barbados',
        departureDates: ['Nov 22, 2025', 'Dec 20, 2025', 'Jan 17, 2026', 'Feb 14, 2026', 'Mar 14, 2026'],
        originalPrice: 2890,
        discountedPrice: 1990,
        onboardCredit: 200,
        badge: 'Tall Ship Sails',
        perks: ['Climbing to the Crow’s Nest and Bowsprit Net Included', 'Complimentary Water Skiing and Windsurfing from the Marina', '$200 Stateroom Credit', 'Open Seating Dining with No Fixed Times'],
        itinerarySummary: 'Barbados under 42 billowing sails to Rodney Bay St. Lucia, Dominica, Antigua, St. Kitts, Iles des Saintes, and Martinique.',
        itineraryDays: [
          { day: 1, port: 'Bridgetown, Barbados', activity: 'Boarding the 5-masted Royal Clipper and sailaway with sails unfurling to music', arriveTime: '2:00 PM', departTime: '10:00 PM' },
          { day: 2, port: 'Rodney Bay, St. Lucia', activity: 'Pigeon Island national park and marina watersports', arriveTime: '8:00 AM', departTime: '6:00 PM' },
          { day: 3, port: 'Cabrits, Dominica', activity: 'Trafalgar Falls rainforest hike and river tubing', arriveTime: '8:00 AM', departTime: '5:00 PM' },
          { day: 4, port: 'Falmouth Harbour, Antigua', activity: 'Nelson’s Dockyard and English Harbour yacht views', arriveTime: '8:00 AM', departTime: '6:00 PM' },
          { day: 5, port: 'South Friar’s Bay, St. Kitts', activity: 'Beach day with catamaran snorkeling and climb to the Crow’s Nest', arriveTime: '8:00 AM', departTime: '5:00 PM' },
          { day: 6, port: 'Iles des Saintes, Guadeloupe', activity: 'French Caribbean village stroll and Fort Napoleon cactus garden', arriveTime: '8:00 AM', departTime: '3:00 PM' },
          { day: 7, port: 'Bridgetown, Barbados', activity: 'Disembarkation and airport transfer', arriveTime: '7:00 AM' }
        ],
        includedDining: ['Three-Deck Grand Dining Room', 'Tropical Bar Al Fresco Buffet', 'Midnight Snacks Daily'],
        shipHighlights: ['42 Billowing Sails with 56,000 sq ft of Sail Canvas', 'Submerged Captain Nemo Underwater Portholes Lounge', 'Three Teak Deck Swimming Pools', 'Retractable Stern Marina Platform']
      }
    ]
  },

  // 7. VIKING OCEAN CRUISES
  {
    id: 'viking-ocean-cruises',
    name: 'Viking Ocean Cruises',
    category: 'expedition',
    categoryLabel: 'Small Ship Ocean and Exploration',
    tagline: 'The Thinking Person’s Ocean Cruise with All Veranda Staterooms and No Casinos',
    description: 'Award winning small ocean ships hosting just 930 guests with all-veranda staterooms, Nordic spas with real snow grottoes, destination immersion, and no casinos or children under 18.',
    logoUrl: 'https://logo.clearbit.com/vikingcruises.com',
    brandColor: '#8b0000',
    imageUrl: 'https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&w=1200&q=80',
    fleetCount: 10,
    startingPrice: 2899,
    exclusivePerksSummary: 'Complimentary Shore Excursions in Every Port, Free Nordic Spa Access, and $300 Stateroom Cash',
    popularDestinations: ['Viking Homelands Scandinavia', 'Mediterranean and Adriatic', 'Alaska Inside Passage', 'Australia and New Zealand', 'World Cruises'],
    departurePorts: ['Stockholm, Sweden', 'Bergen, Norway', 'Barcelona, Spain', 'Civitavecchia Rome, Italy', 'Vancouver, BC'],
    keyHighlights: ['All Staterooms Feature Private Verandas and Heated Bathroom Floors', 'LivNordic Spa with Complimentary Hydrotherapy Pool and Snow Grotto', 'Infinity Edge Glass-Backed Cantilevered Stern Pool', 'One Complimentary Shore Excursion Included in Every Single Port'],
    offers: [
      {
        id: 'viking-homelands-baltic',
        title: '14 Night Viking Homelands Scandinavia and Baltic with Norwegian Fjords',
        shipName: 'Viking Star',
        destination: 'Scandinavian Capitals and Norway',
        region: 'Europe',
        durationNights: 14,
        departurePort: 'Stockholm, Sweden',
        departureDates: ['May 10, 2026', 'Jun 07, 2026', 'Jul 05, 2026', 'Aug 02, 2026', 'Aug 30, 2026'],
        originalPrice: 6999,
        discountedPrice: 4999,
        onboardCredit: 300,
        badge: 'Top Rated Ocean',
        perks: ['One Free Shore Excursion in Every Port of Call Included', 'Complimentary Access to LivNordic Spa and Snow Grotto', 'Beer, Wine and Soft Drinks with Lunch and Dinner', '$300 Stateroom Credit'],
        itinerarySummary: 'Stockholm Sweden overnight to Helsinki Finland, Tallinn Estonia, Gdansk Poland, Copenhagen Denmark, Aalborg, Stavanger, Eidfjord, and Bergen Norway overnight.',
        itineraryDays: [
          { day: 1, port: 'Stockholm, Sweden (Overnight)', activity: 'Boarding Viking Star, Vasa museum visit, and archipelago cruise', arriveTime: '1:00 PM' },
          { day: 2, port: 'Stockholm, Sweden', activity: 'Gamla Stan medieval old town walking tour', departTime: '4:00 PM' },
          { day: 3, port: 'Helsinki, Finland', activity: 'Rock Church Temppeliaukio and Senate Square guided visit', arriveTime: '8:00 AM', departTime: '5:00 PM' },
          { day: 4, port: 'Tallinn, Estonia', activity: 'UNESCO medieval Upper and Lower Town cobblestones', arriveTime: '8:00 AM', departTime: '5:00 PM' },
          { day: 5, port: 'Copenhagen, Denmark', activity: 'Nyhavn harbor and Amalienborg Royal Palace tour', arriveTime: '8:00 AM', departTime: '6:00 PM' },
          { day: 6, port: 'Stavanger and Eidfjord, Norway', activity: 'Lysefjord Pulpit Rock boat excursion and Voringsfossen waterfall', arriveTime: '8:00 AM', departTime: '6:00 PM' },
          { day: 7, port: 'Bergen, Norway (Overnight)', activity: 'Bryggen Hanseatic wharf, Floibanen funicular, and farewell Scandinavian dinner', arriveTime: '8:00 AM' }
        ],
        includedDining: ['The Restaurant Four-Course Menus', 'Manfredi’s Italian Trattoria', 'The Chef’s Table Wine Pairing', 'World Cafe Sushi and Seafood Buffet', 'Mamsen’s Norwegian Deli'],
        shipHighlights: ['LivNordic Spa with Real Snow Grotto and Thalassotherapy Pool', 'Infinity Cantilevered Glass Pool at the Stern', 'The Wintergarden Afternoon Tea', 'The Explorers’ Lounge with 2-Deck 180-Degree Views']
      }
    ]
  }
];

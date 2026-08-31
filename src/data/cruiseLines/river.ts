import { CruiseLineDetail } from './types';

export const RIVER_CRUISE_LINES: CruiseLineDetail[] = [
  // 1. AMAWATERWAYS
  {
    id: 'amawaterways',
    name: 'AmaWaterways',
    category: 'river',
    categoryLabel: 'Luxury European River Specialist',
    tagline: 'The Heart of the River with Twin Balconies, Fleet of Bicycles and Wine Cruises',
    description: 'Family owned premier luxury river cruise line renowned for spacious twin-balcony staterooms, Chef’s Table multi-course tasting menus, complimentary guided bicycle tours, and festive wine cruises.',
    logoUrl: 'https://logo.clearbit.com/amawaterways.com',
    brandColor: '#002f6c',
    imageUrl: 'https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&w=1200&q=80',
    fleetCount: 26,
    startingPrice: 2199,
    exclusivePerksSummary: 'Complimentary Shore Excursions and Fine Regional Wines, Free Bicycle Fleet, plus $300 Stateroom Credit',
    popularDestinations: ['Danube River and Vienna', 'Rhine River and Castles', 'Douro River Portugal', 'Seine and Bordeaux France', 'Mekong River Vietnam and Cambodia'],
    departurePorts: ['Budapest, Hungary', 'Amsterdam, Netherlands', 'Porto, Portugal', 'Paris, France', 'Basel, Switzerland'],
    keyHighlights: ['Signature Twin-Balcony Staterooms French and Outside', 'Complimentary Fleet of Bicycles and Guided Hikes', 'The Chef’s Table Specialty Restaurant Included', 'Member of La Chaîne des Rôtisseurs Gastronomic Guild'],
    offers: [
      {
        id: 'ama-magna-danube',
        title: '7 Night Magna on the Danube with Vienna and Budapest',
        shipName: 'AmaMagna',
        destination: 'Danube River Historic Capitals',
        region: 'Europe',
        durationNights: 7,
        departurePort: 'Vilshofen, Germany',
        departureDates: ['Oct 19, 2025', 'May 10, 2026', 'Jun 14, 2026', 'Jul 19, 2026', 'Aug 16, 2026'],
        originalPrice: 3899,
        discountedPrice: 2899,
        onboardCredit: 300,
        badge: 'Double Width Flagship',
        perks: ['Choice of Daily Small-Group Shore Excursions Included', 'Unlimited Fine Regional Wine and Beer with Lunch and Dinner', 'Exclusive Oktoberfest Celebration in Vilshofen', '$300 Stateroom Credit'],
        itinerarySummary: 'Vilshofen Germany to Passau, Linz, Melk Abbey, Dürnstein, Vienna overnight, Bratislava Slovakia, and Budapest Hungary.',
        itineraryDays: [
          { day: 1, port: 'Vilshofen, Germany', activity: 'Boarding the double-width AmaMagna and exclusive Bavarian Oktoberfest welcome party', arriveTime: '2:00 PM' },
          { day: 2, port: 'Passau, Germany', activity: 'Walking tour of Three Rivers City and organ concert in St. Stephen’s Cathedral', arriveTime: '7:30 AM', departTime: '5:00 PM' },
          { day: 3, port: 'Linz and Salzburg, Austria', activity: 'Full day excursion to Mozart’s Salzburg or guided castle hike', arriveTime: '7:00 AM', departTime: '11:00 PM' },
          { day: 4, port: 'Melk and Dürnstein, Austria', activity: 'UNESCO Melk Benedictine Abbey and Wachau Valley wine tasting', arriveTime: '8:00 AM', departTime: '6:00 PM' },
          { day: 5, port: 'Vienna, Austria (Overnight)', activity: 'Ringstrasse tour, Schonbrunn Palace, and evening Mozart and Strauss concert', arriveTime: '6:00 AM' },
          { day: 6, port: 'Bratislava, Slovakia', activity: 'Coronation walking tour and Slovakian craft beer tasting', arriveTime: '7:00 AM', departTime: '2:00 PM' },
          { day: 7, port: 'Budapest, Hungary', activity: 'Scenic evening river illumination cruise past Parliament and disembarkation next morning', arriveTime: '9:00 PM' }
        ],
        includedDining: ['The Main Restaurant Multi-Course', 'The Chef’s Table Degustation', 'Jimmy’s Wine Bar Restaurant', 'Al Fresco Restaurant'],
        shipHighlights: ['Twice the Width of Traditional River Ships', 'Full Zen Wellness Studio with Juice Bar', 'Heated Sun Deck Pool and Whirlpool', 'Water Sports Marina Platform with Sundowner Boat']
      }
    ]
  },

  // 2. AMERICAN CRUISE LINES
  {
    id: 'american-cruise-lines',
    name: 'American Cruise Lines',
    category: 'river',
    categoryLabel: 'Small Ship American Waterways',
    tagline: 'Small Ship Cruising Done Perfectly along America’s Legendary Rivers and Coasts',
    description: 'The premier USA-flagged cruise line operating modern riverboats and coastal catamarans on the Mississippi River, Columbia and Snake Rivers, New England Islands, and Alaska.',
    logoUrl: 'https://logo.clearbit.com/americancruiselines.com',
    brandColor: '#002d62',
    imageUrl: 'https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&w=1200&q=80',
    fleetCount: 19,
    startingPrice: 2890,
    exclusivePerksSummary: 'Complimentary Pre-Cruise Hotel Stay, Free Domestic Flights on Select Sailings, and $250 Stateroom Cash',
    popularDestinations: ['Lower Mississippi River', 'Upper Mississippi and Mark Twain', 'Columbia and Snake Rivers', 'New England Islands and Maine', 'Puget Sound and Alaska'],
    departurePorts: ['New Orleans, LA', 'Memphis, TN', 'St. Louis, MO', 'Portland, OR', 'Boston, MA'],
    keyHighlights: ['100% American Built and American Flagged Ships', 'Complimentary Pre-Cruise Premium Hotel Stay and Luggage Valet', 'All-Balcony Modern Riverboat Staterooms', 'Daily Riverlorian and Historian Guided Shore Excursions'],
    offers: [
      {
        id: 'acl-mississippi-lower',
        title: '8 Night Lower Mississippi River Cruise with New Orleans and Memphis',
        shipName: 'American Symphony',
        destination: 'Mississippi River',
        region: 'North America Rivers',
        durationNights: 8,
        departurePort: 'New Orleans, LA',
        departureDates: ['Oct 25, 2025', 'Nov 15, 2025', 'Dec 06, 2025', 'Feb 21, 2026', 'Mar 28, 2026'],
        originalPrice: 5190,
        discountedPrice: 4290,
        onboardCredit: 250,
        badge: 'Classic Americana',
        perks: ['Free 1-Night Pre-Cruise Luxury Hotel Stay in New Orleans', 'Complimentary Daily Shore Excursions Included', 'All Beer and Wine with Meals plus Evening Cocktail Hour', '$250 Stateroom Spending Cash'],
        itinerarySummary: 'New Orleans pre-stay, Oak Alley Plantation, St. Francisville, Natchez, Vicksburg National Military Park, and Memphis Tennessee.',
        itineraryDays: [
          { day: 1, port: 'New Orleans, Louisiana', activity: 'Pre-cruise luxury hotel stay in the French Quarter', arriveTime: '3:00 PM' },
          { day: 2, port: 'New Orleans, Louisiana', activity: 'Boarding the modern riverboat American Symphony and bon voyage cocktail party', arriveTime: '11:00 AM', departTime: '5:00 PM' },
          { day: 3, port: 'Oak Alley Plantation, Louisiana', activity: 'Canopy of 300-year-old live oaks and antebellum historic tour', arriveTime: '8:00 AM', departTime: '1:00 PM' },
          { day: 4, port: 'St. Francisville, Louisiana', activity: 'Historic West Feliciana Parish and Victorian architecture', arriveTime: '8:00 AM', departTime: '1:00 PM' },
          { day: 5, port: 'Natchez, Mississippi', activity: 'Stanton Hall antebellum mansion and Delta cotton history', arriveTime: '8:00 AM', departTime: '5:00 PM' },
          { day: 6, port: 'Vicksburg, Mississippi', activity: 'Vicksburg National Military Park and battlefield memorial tour', arriveTime: '8:00 AM', departTime: '5:00 PM' },
          { day: 7, port: 'Cruising the Mississippi River', activity: 'Riverlorian presentation on Mark Twain and Delta blues music show' },
          { day: 8, port: 'Memphis, Tennessee', activity: 'Beale Street and optional Graceland Elvis Presley mansion tour before departure', arriveTime: '8:00 AM' }
        ],
        includedDining: ['Grand Dining Room with Regional Southern Cooking', 'The Sky Lounge Al Fresco', 'Daily Evening Cocktail Reception'],
        shipHighlights: ['Opening Bow with Retractable Gangway', 'Multi-Story Glass Atrium', 'Private Verandas on Every Stateroom', 'Spacious Fitness Center and Sun Deck']
      }
    ]
  },

  // 3. AVALON WATERWAYS
  {
    id: 'avalon-river-cruises',
    name: 'Avalon Waterways',
    category: 'river',
    categoryLabel: 'Panorama Suite River Specialist',
    tagline: 'Cruising from a Unique Perspective with Wall to Wall Panorama Suites and Beds Facing the View',
    description: 'Pioneers of Suite Ships featuring wall to wall panoramic floor to ceiling windows that convert your stateroom into an open air balcony with beds facing the passing European scenery.',
    logoUrl: 'https://logo.clearbit.com/avalonwaterways.com',
    brandColor: '#003366',
    imageUrl: 'https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&w=1200&q=80',
    fleetCount: 16,
    startingPrice: 2399,
    exclusivePerksSummary: 'Avalon Choice Active, Discovery, and Classic Excursions Included plus $250 Stateroom Credit',
    popularDestinations: ['Rhine and Moselle Rivers', 'Danube River Capitals', 'Rhône and Saône Burgundy France', 'Seine River to Normandy', 'Egypt and the Nile'],
    departurePorts: ['Amsterdam, Netherlands', 'Basel, Switzerland', 'Budapest, Hungary', 'Paris, France', 'Arles, France'],
    keyHighlights: ['Wall-to-Wall Panorama Windows Creating an Open-Air Balcony', 'Beds Directly Facing the River Views', 'Avalon Choice Active, Discovery and Classic Guided Excursions', 'Avalon Fresh Farm-to-Table Gourmet Cuisine'],
    offers: [
      {
        id: 'avalon-rhine-castles',
        title: '7 Night Romantic Rhine and Castle Gorge with Panorama Suites',
        shipName: 'Avalon Envision',
        destination: 'Rhine River Castles',
        region: 'Europe',
        durationNights: 7,
        departurePort: 'Amsterdam, Netherlands',
        departureDates: ['Oct 21, 2025', 'May 05, 2026', 'Jun 09, 2026', 'Jul 14, 2026'],
        originalPrice: 3499,
        discountedPrice: 2499,
        onboardCredit: 250,
        badge: 'Open Air Balcony',
        perks: ['Open-Air Balcony Panorama Suite Upgrade', 'All Regional Wine, Beer, and Soft Drinks with Meals Included', '$250 Stateroom Credit', 'Avalon Choice Guided Tours Included'],
        itinerarySummary: 'Amsterdam canal cruise to Cologne Cathedral, Rhine Gorge Castle Fairytale sailing, Rüdesheim, Heidelberg, and Basel Switzerland.',
        itineraryDays: [
          { day: 1, port: 'Amsterdam, Netherlands', activity: 'Boarding, welcome dinner, and twilight canal cruise', arriveTime: '2:00 PM' },
          { day: 2, port: 'Amsterdam, Netherlands', activity: 'Rijksmuseum or Zaanse Schans windmill guided tour', departTime: '1:00 PM' },
          { day: 3, port: 'Cologne, Germany', activity: 'Gothic twin-spired Cologne Cathedral and Jewish heritage walk', arriveTime: '9:00 AM', departTime: '6:00 PM' },
          { day: 4, port: 'Rhine Gorge and Rüdesheim', activity: 'Scenic sailing past 40 hilltop castles, Lorelei Rock, and Siegfried’s Mechanical Music Museum', arriveTime: '8:00 AM', departTime: '8:00 PM' },
          { day: 5, port: 'Mainz and Heidelberg, Germany', activity: 'Heidelberg Castle ruins and historic university town', arriveTime: '8:00 AM', departTime: '6:00 PM' },
          { day: 6, port: 'Strasbourg, France', activity: 'La Petite France timbered canals and Alsatian wine tasting', arriveTime: '8:00 AM', departTime: '6:00 PM' },
          { day: 7, port: 'Basel, Switzerland', activity: 'Disembarkation and airport transfer', arriveTime: '8:00 AM' }
        ],
        includedDining: ['Panorama Dining Room', 'Sky Grill Al Fresco', 'Panorama Bistro Tasting Menu', 'Club Lounge Coffee Bar'],
        shipHighlights: ['Wall-to-Wall Open-Air Balcony', 'Sky Deck Whirlpool and Shaded Lounges', 'Adventure Center with Bikes and Walking Sticks', 'Fitness Center with Panoramic River Views']
      }
    ]
  },

  // 4. CROISIEUROPE
  {
    id: 'croisi-europe-cruises',
    name: 'CroisiEurope',
    category: 'river',
    categoryLabel: 'French River and Canal Barge Pioneer',
    tagline: 'Europe’s River and Canal Pioneer with Authentic French Gastronomy and All Inclusive Value',
    description: 'The largest river cruise operator in Europe with French heritage, offering intimate access to rivers, coastal waters, and French canal barges with all-inclusive French cuisine and wine.',
    logoUrl: 'https://logo.clearbit.com/croisieurope.com',
    brandColor: '#003366',
    imageUrl: 'https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&w=1200&q=80',
    fleetCount: 50,
    startingPrice: 1399,
    exclusivePerksSummary: 'All-Inclusive Open Bar with French Wines and Spirits, Free Wi-Fi, and $150 Stateroom Credit',
    popularDestinations: ['Douro Valley Portugal', 'Garonne and Dordogne Bordeaux', 'Rhône and Provence', 'Elbe River and Prague', 'French Canal Barges'],
    departurePorts: ['Porto, Portugal', 'Bordeaux, France', 'Lyon, France', 'Berlin, Germany', 'Strasbourg, France'],
    keyHighlights: ['Authentic French Haute Cuisine Curated by French Chefs', 'All-Inclusive Beverages Open Bar with French Wines and Cocktails', 'Paddlewheel Riverboats Capable of Navigating Shallow Waters like the Elbe', 'Intimate 22-Guest Luxury Canal Barges in Burgundy and Champagne'],
    offers: [
      {
        id: 'croisi-douro-portugal',
        title: '6 Night Douro Valley and Salamanca Spanish Sunshine',
        shipName: 'MS Gil Eanes',
        destination: 'Douro River Portugal and Spain',
        region: 'Europe',
        durationNights: 6,
        departurePort: 'Porto, Portugal',
        departureDates: ['Oct 22, 2025', 'May 14, 2026', 'Jun 18, 2026', 'Sep 10, 2026'],
        originalPrice: 2199,
        discountedPrice: 1499,
        onboardCredit: 150,
        badge: 'French Gastronomy',
        perks: ['All Meals and Open Bar with French and Portuguese Wines Included', 'Full Day Excursion to Salamanca Spain Included', '$150 Stateroom Credit', 'Traditional Fado Gala Evening'],
        itinerarySummary: 'Porto to Régua, Pinhao, Vega de Terrón for Salamanca Spain, Barca d’Alva, and return to Porto.',
        itineraryDays: [
          { day: 1, port: 'Porto, Portugal', activity: 'Boarding, welcome cocktail and crew presentation', arriveTime: '5:00 PM' },
          { day: 2, port: 'Porto to Régua, Portugal', activity: 'Cruising through Carrapatelo lock and Mateus Palace gardens', arriveTime: '8:00 AM', departTime: '6:00 PM' },
          { day: 3, port: 'Régua to Vega de Terrón, Spain', activity: 'Scenic sailing along terraced vineyards and Flamenco evening show', arriveTime: '8:00 AM', departTime: '7:00 PM' },
          { day: 4, port: 'Vega de Terrón to Salamanca, Spain', activity: 'Full day excursion to UNESCO Salamanca, Plaza Mayor and Cathedral', arriveTime: '8:00 AM', departTime: '6:00 PM' },
          { day: 5, port: 'Pinhao and Porto, Portugal', activity: 'Vintage port wine cellar tasting in Porto', arriveTime: '9:00 AM', departTime: '6:00 PM' },
          { day: 6, port: 'Porto, Portugal', activity: 'Farewell French gala dinner and disembarkation next morning', arriveTime: '7:00 AM' }
        ],
        includedDining: ['Main Dining Salon French Service', 'Lounge Bar with Cocktail Service', 'Sun Deck Snack Station'],
        shipHighlights: ['Sun Deck Swimming Pool', 'Panoramic Lounge Bar with Dance Floor', 'Gift Shop and Wi-Fi Throughout', 'Spacious French Balcony Cabins']
      }
    ]
  },

  // 5. RIVIERA RIVER CRUISES
  {
    id: 'riviera-river-cruises',
    name: 'Riviera River Cruises',
    category: 'river',
    categoryLabel: 'Award Winning European River Value',
    tagline: 'Europe’s Award Winning Five Star Luxury River Cruises with Transparent Honest Pricing',
    description: 'UK and European favorite delivering five-star luxury river vessels with Swiss-operated hospitality, included daily guided excursions, and transparent honest pricing without hidden costs.',
    logoUrl: 'https://logo.clearbit.com/rivierarivercruises.com',
    brandColor: '#002040',
    imageUrl: 'https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&w=1200&q=80',
    fleetCount: 14,
    startingPrice: 1899,
    exclusivePerksSummary: 'Complimentary Superior Drinks Package Upgrade plus Daily Excursions and $200 Stateroom Cash',
    popularDestinations: ['Danube River and Budapest', 'Rhine and Switzerland', 'Douro Valley Portugal', 'Seine Paris to Normandy', 'Rhône and Provence'],
    departurePorts: ['Budapest, Hungary', 'Amsterdam, Netherlands', 'Porto, Portugal', 'Paris, France', 'Avignon, France'],
    keyHighlights: ['Five-Star Swiss Operated Hospitality and Service', 'Complimentary Daily Guided Shore Tours with Local Experts', 'Marble Bathrooms with Crabtree and Evelyn Toiletries', 'No Solo Traveler Supplements on Select Departures'],
    offers: [
      {
        id: 'riviera-blue-danube',
        title: '7 Night The Blue Danube with Vienna, Budapest and Salzburg',
        shipName: 'MS Geoffrey Chaucer',
        destination: 'Danube River Capitals',
        region: 'Europe',
        durationNights: 7,
        departurePort: 'Budapest, Hungary',
        departureDates: ['Oct 27, 2025', 'May 18, 2026', 'Jun 22, 2026', 'Aug 24, 2026'],
        originalPrice: 2999,
        discountedPrice: 1999,
        onboardCredit: 200,
        badge: 'Five Star Value',
        perks: ['Superior Drinks Package Included with Meals and Evenings', 'All Daily Guided Excursions Included', '$200 Stateroom Spending Cash', 'Tea and Coffee Station in Every Cabin'],
        itinerarySummary: 'Budapest overnight to Esztergom, Bratislava Slovakia, Dürnstein, Melk Abbey, Salzburg or Linz, and Vienna Austria.',
        itineraryDays: [
          { day: 1, port: 'Budapest, Hungary', activity: 'Boarding, welcome dinner and illuminated evening cruise past Buda Castle', arriveTime: '3:00 PM' },
          { day: 2, port: 'Esztergom and Bratislava', activity: 'Esztergom Basilica and walking tour of Bratislava old town', arriveTime: '8:00 AM', departTime: '6:00 PM' },
          { day: 3, port: 'Dürnstein and Melk, Austria', activity: 'Wachau Valley sailing and UNESCO Melk Abbey guided tour', arriveTime: '8:00 AM', departTime: '5:00 PM' },
          { day: 4, port: 'Salzburg or Linz, Austria', activity: 'Full day excursion to Salzburg Sound of Music sites or historic Linz', arriveTime: '7:30 AM', departTime: '8:00 PM' },
          { day: 5, port: 'Vienna, Austria (Overnight)', activity: 'St. Stephen’s Cathedral, Spanish Riding School, and classical concert', arriveTime: '7:00 AM' },
          { day: 6, port: 'Budapest, Hungary', activity: 'Fisherman’s Bastion and Central Market Hall guided visit', arriveTime: '1:00 PM' },
          { day: 7, port: 'Budapest, Hungary', activity: 'Disembarkation and departure transfers', arriveTime: '8:00 AM' }
        ],
        includedDining: ['The Main Restaurant Four-Course Dining', 'The Bistro Stern Restaurant with Open Kitchen'],
        shipHighlights: ['Sun Deck Splash Pool and Putting Green', 'Wellness Area with Sauna and Steam Room', 'Observation Lounge with Panoramic Views', 'Hotel-Style Beds with Fine Egyptian Cotton Linens']
      }
    ]
  },

  // 6. SCENIC RIVER CRUISES
  {
    id: 'scenic-river-cruises',
    name: 'Scenic River Cruises',
    category: 'river',
    categoryLabel: 'Truly All Inclusive 5-Star River Cruising',
    tagline: 'Truly All Inclusive 5-Star Luxury with Butler Service, Scenic Sun Lounges and Free E-Bikes',
    description: 'The benchmark of truly all-inclusive 5-star river cruising where every excursion, all drinks, butler service, exclusive Scenic Enrich evening galas, and electric bikes are 100% included.',
    logoUrl: 'https://logo.clearbit.com/scenicusa.com',
    brandColor: '#1c1c1c',
    imageUrl: 'https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&w=1200&q=80',
    fleetCount: 15,
    startingPrice: 3495,
    exclusivePerksSummary: 'Exclusive Scenic Enrich Private Castle Concert, All Included Top Shelf Spirits and Butler Service, plus $400 Suite Credit',
    popularDestinations: ['Rhine, Main and Danube', 'Bordeaux Wine Country', 'South of France Rhône', 'Douro River Portugal', 'Mekong River'],
    departurePorts: ['Amsterdam, Netherlands', 'Budapest, Hungary', 'Bordeaux, France', 'Lyon, France', 'Porto, Portugal'],
    keyHighlights: ['Scenic Sun Lounge Balconies Converting with the Push of a Button', 'Butler Service for Every Guest in Every Suite', 'Exclusive Scenic Enrich Private Royal Palace Concerts', 'Fleet of Electronic Bicycles E-Bikes with GPS'],
    offers: [
      {
        id: 'scenic-jewels-europe',
        title: '14 Night Jewels of Europe 5-Star Voyage from Amsterdam to Budapest',
        shipName: 'Scenic Jasper',
        destination: 'Rhine, Main and Danube Rivers',
        region: 'Europe',
        durationNights: 14,
        departurePort: 'Amsterdam, Netherlands',
        departureDates: ['Oct 15, 2025', 'May 06, 2026', 'Jun 17, 2026', 'Jul 29, 2026', 'Sep 09, 2026'],
        originalPrice: 7995,
        discountedPrice: 5995,
        onboardCredit: 400,
        badge: 'Truly All Inclusive',
        perks: ['Exclusive Scenic Enrich Classical Concert at Palais Liechtenstein in Vienna Included', 'Butler Service for All Suites', 'Unlimited Top-Shelf Spirits, Wines, and Cocktails Included 24/7', '$400 Suite Spending Cash'],
        itinerarySummary: 'Amsterdam to Cologne, Rhine Gorge, Rüdesheim, Würzburg, Bamberg, Nuremberg, Regensburg, Passau, Melk, Dürnstein, Vienna, and Budapest.',
        itineraryDays: [
          { day: 1, port: 'Amsterdam, Netherlands', activity: 'Boarding, champagne suite escort by your butler, and evening cruise', arriveTime: '1:00 PM' },
          { day: 2, port: 'Amsterdam, Netherlands', activity: 'Scenic Freechoice canal cruise or culinary cheese tour', departTime: '1:00 PM' },
          { day: 3, port: 'Cologne, Germany', activity: 'Gothic Cathedral and walking tour of old town', arriveTime: '9:00 AM', departTime: '6:00 PM' },
          { day: 4, port: 'Rhine Gorge and Rüdesheim', activity: 'Fairytale castle sailing and Siegfried’s Music Museum', arriveTime: '8:00 AM', departTime: '8:00 PM' },
          { day: 5, port: 'Würzburg, Germany', activity: 'Bishops’ Residenz Palace and Baroque wine cellar tasting', arriveTime: '8:00 AM', departTime: '6:00 PM' },
          { day: 6, port: 'Bamberg, Germany', activity: 'UNESCO medieval old town and smoked beer tasting', arriveTime: '8:00 AM', departTime: '2:00 PM' },
          { day: 7, port: 'Nuremberg, Germany', activity: 'WWII historical sites and castle ramparts', arriveTime: '8:00 AM', departTime: '5:00 PM' },
          { day: 8, port: 'Vienna, Austria (Overnight)', activity: 'Exclusive Scenic Enrich private classical concert at Palais Liechtenstein', arriveTime: '8:00 AM' },
          { day: 9, port: 'Budapest, Hungary', activity: 'Illuminated evening sail past Parliament and disembarkation', arriveTime: '7:00 AM' }
        ],
        includedDining: ['Crystal Dining Restaurant', 'Portobellos Italian Fine Dining', 'Table La Rive Chef’s Degustation', 'River Cafe Casual'],
        shipHighlights: ['Scenic Sun Lounge Balcony Systems', 'Salt Therapy Lounge with Himalayan Rock Salt', 'Fleet of Electric Bicycles', 'Vitality Pool and Sun Deck']
      }
    ]
  },

  // 7. UNIWORLD BOUTIQUE RIVER CRUISES
  {
    id: 'uniworld-cruises',
    name: 'Uniworld Boutique River Cruises',
    category: 'river',
    categoryLabel: 'Ultra Luxury Boutique Floating Palaces',
    tagline: 'You Deserve the Best with One of a Kind Floating Boutique Palaces and Antiques',
    description: 'The world’s only authentic boutique river cruise collection where every ship is a unique one of a kind floating palace adorned with custom antiques, original artwork, and six-star service.',
    logoUrl: 'https://logo.clearbit.com/uniworld.com',
    brandColor: '#002040',
    imageUrl: 'https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&w=1200&q=80',
    fleetCount: 17,
    startingPrice: 3999,
    exclusivePerksSummary: 'Curated Masterpiece Floating Palace Staterooms, All Included Top Shelf Bar and Shore Excursions, plus $400 Suite Credit',
    popularDestinations: ['Venice Lagoon and Po River', 'Castles along the Rhine', 'Burgundy and Provence', 'Danube Capitals', 'Egypt and the Nile'],
    departurePorts: ['Venice, Italy', 'Amsterdam, Netherlands', 'Budapest, Hungary', 'Arles, France', 'Cairo, Egypt'],
    keyHighlights: ['Each Ship is Individually Designed with Museum-Quality Artwork and Antiques', 'The Only Luxury Cruise Ship Allowed to Dock in the Heart of Venice', 'Farm-to-Table Gourmet Dining Curated by Master Chefs', 'All-Inclusive Beverages, Gratuities, and Masterpiece Excursions'],
    offers: [
      {
        id: 'uniworld-venice-gem',
        title: '7 Night Venice and the Gems of Northern Italy with Po River',
        shipName: 'S.S. La Venezia',
        destination: 'Venice Lagoon and Northern Italy',
        region: 'Europe',
        durationNights: 7,
        departurePort: 'Venice, Italy',
        departureDates: ['Oct 19, 2025', 'May 10, 2026', 'Jun 14, 2026', 'Jul 19, 2026', 'Sep 20, 2026'],
        originalPrice: 5699,
        discountedPrice: 4299,
        onboardCredit: 400,
        badge: 'Floating Palace',
        perks: ['Exclusive After-Hours Private Lighting Ceremony at St. Mark’s Basilica Included', 'Docked directly at San Basilio in the heart of Venice', 'All Premium Spirits, Fine Wines, and Excursions Included', '$400 Suite Spending Cash'],
        itinerarySummary: 'Venice San Basilio to Burano glassblowing, Mazzorbo, Chioggia, Polesella for Bologna or Ferrara, and return to Venice Lagoon.',
        itineraryDays: [
          { day: 1, port: 'Venice, Italy', activity: 'Boarding the S.S. La Venezia decorated with Fortuny fabrics and Murano glass', arriveTime: '2:00 PM' },
          { day: 2, port: 'Venice, Italy', activity: 'Exclusive after-hours private opening of St. Mark’s Basilica with no crowds', arriveTime: '8:00 AM' },
          { day: 3, port: 'Burano and Mazzorbo, Italy', activity: 'Rainbow-colored fishermen’s houses and Venissa vineyard wine tasting', arriveTime: '8:00 AM', departTime: '6:00 PM' },
          { day: 4, port: 'Chioggia, Italy', activity: 'Little Venice fish market and cycling the lagoon promenade', arriveTime: '8:00 AM', departTime: '7:00 PM' },
          { day: 5, port: 'Polesella, Italy', activity: 'Full day culinary tour of Bologna pasta masterclass or Renaissance Ferrara', arriveTime: '8:00 AM', departTime: '6:00 PM' },
          { day: 6, port: 'Venice Lagoon, Italy', activity: 'Private gondola ride and farewell Venetian Gala Dinner', arriveTime: '1:00 PM' },
          { day: 7, port: 'Venice, Italy', activity: 'Disembarkation and water taxi departure transfer', arriveTime: '8:00 AM' }
        ],
        includedDining: ['Ristorante Rialto Four-Course', 'La Taverna Authentic Cicchetti', 'Panini Lounge Casual'],
        shipHighlights: ['Interiors Inspired by Venetian Oligarchy with Fortuny Fabrics', 'Murano Glass Chandeliers and Custom Art Pieces', 'Serenity River Spa', 'Sun Deck with 360-Degree Lagoon Panorama']
      }
    ]
  },

  // 8. VICTORY CRUISE LINES
  {
    id: 'victory-cruise-lines',
    name: 'Victory Cruise Lines',
    category: 'river',
    categoryLabel: 'Great Lakes and Coastal America Specialist',
    tagline: 'The Definitive Great Lakes Cruise Experience aboard Classic All-Inclusive Coastal Vessels',
    description: 'Specializing in all-inclusive exploration of the Great Lakes of North America, scenic St. Lawrence Seaway, and Canadian Maritimes with small luxury coastal ships.',
    logoUrl: 'https://logo.clearbit.com/victorycruiselines.com',
    brandColor: '#002f6c',
    imageUrl: 'https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&w=1200&q=80',
    fleetCount: 2,
    startingPrice: 3899,
    exclusivePerksSummary: 'Free 1-Night Pre-Cruise Hotel Stay, All Included Shore Excursions and Open Bar, plus $250 Stateroom Cash',
    popularDestinations: ['All 5 Great Lakes', 'Niagara Falls and Lake Ontario', 'Mackinac Island Lake Huron', 'Georgian Bay and Lake Superior', 'St. Lawrence Seaway'],
    departurePorts: ['Chicago, IL', 'Toronto, ON', 'Detroit, MI', 'Montreal, QC', 'Milwaukee, WI'],
    keyHighlights: ['The Only Cruise Line Visiting All 5 Great Lakes on a Single Voyage', 'Horse-Drawn Carriage Tour on Historic Motorless Mackinac Island Included', 'Complimentary 1-Night Pre-Cruise Hotel Stay with Breakfast', 'All Shore Tours, Beer, Wine, Spirits, and Gratuities Included'],
    offers: [
      {
        id: 'vic-great-lakes-grand',
        title: '10 Night Great Lakes Grand Discovery Visiting All 5 Great Lakes',
        shipName: 'Victory I',
        destination: 'All 5 North American Great Lakes',
        region: 'North America Rivers',
        durationNights: 10,
        departurePort: 'Toronto, ON',
        departureDates: ['May 15, 2026', 'Jun 12, 2026', 'Jul 10, 2026', 'Aug 07, 2026', 'Sep 04, 2026'],
        originalPrice: 6499,
        discountedPrice: 4999,
        onboardCredit: 250,
        badge: 'All 5 Great Lakes',
        perks: ['Complimentary Pre-Cruise Hotel Stay in Toronto', 'All Shore Excursions and Open Bar Included', '$250 Stateroom Credit', 'Private Horse Carriage Tour on Mackinac Island'],
        itinerarySummary: 'Toronto to Niagara Falls, Port Colborne Lake Erie, Cleveland Rock and Roll Hall of Fame, Detroit, Lake Huron, Mackinac Island, Sault Ste. Marie Lake Superior, and Chicago.',
        itineraryDays: [
          { day: 1, port: 'Toronto, Ontario', activity: 'Pre-cruise luxury hotel stay and welcome dinner', arriveTime: '3:00 PM' },
          { day: 2, port: 'Port Colborne and Niagara Falls', activity: 'Boarding the Victory I and Hornblower Niagara Falls boat cruise', arriveTime: '11:00 AM', departTime: '7:00 PM' },
          { day: 3, port: 'Cleveland, Ohio (Lake Erie)', activity: 'Rock and Roll Hall of Fame and Cleveland Museum of Art', arriveTime: '8:00 AM', departTime: '6:00 PM' },
          { day: 4, port: 'Detroit, Michigan', activity: 'Henry Ford Museum of American Innovation', arriveTime: '8:00 AM', departTime: '6:00 PM' },
          { day: 5, port: 'Cruising Lake Huron', activity: 'Historian presentation on Great Lakes maritime legends and shipwrecks' },
          { day: 6, port: 'Mackinac Island, Michigan', activity: 'Horse-drawn carriage tour and Grand Hotel world-famous luncheon buffet', arriveTime: '8:00 AM', departTime: '6:00 PM' },
          { day: 7, port: 'Sault Ste. Marie (Lake Superior)', activity: 'Soo Locks transit and Canadian bushplane heritage museum', arriveTime: '8:00 AM', departTime: '5:00 PM' },
          { day: 8, port: 'Cruising Lake Michigan', activity: 'Captain’s Farewell Champagne Dinner and sunset sailing' },
          { day: 9, port: 'Chicago, Illinois', activity: 'Arrival at Navy Pier Chicago and disembarkation', arriveTime: '7:00 AM' }
        ],
        includedDining: ['The Coastal Dining Room Five-Course', 'The Grill Al Fresco Buffet', 'English Afternoon Tea Daily'],
        shipHighlights: ['Intimate 190-Guest Coastal Vessel', 'Tavern Lounge with Live Piano and Folk Entertainment', 'Sun Deck Observation Lounge', 'Engaging Onboard Historians and Geologists']
      }
    ]
  },

  // 9. VIKING RIVER CRUISES
  {
    id: 'viking-river-cruises',
    name: 'Viking River Cruises',
    category: 'river',
    categoryLabel: 'The World’s Leading River Cruise Line',
    tagline: 'Exploring the World in Comfort with Award-Winning Longships and Scandinavian Design',
    description: 'The undisputed global leader in river cruising featuring patented Viking Longships with Aquavit Terraces, Scandinavian understated elegance, and one complimentary shore excursion in every port.',
    logoUrl: 'https://logo.clearbit.com/vikingcruises.com',
    brandColor: '#8b0000',
    imageUrl: 'https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&w=1200&q=80',
    fleetCount: 65,
    startingPrice: 1999,
    exclusivePerksSummary: 'Free Airfare Deals on Select Sailings, Shore Excursions in Every Port, and $300 Stateroom Credit',
    popularDestinations: ['Rhine Getaway and Castles', 'Danube Waltz and Capitals', 'Romantic Danube', 'Grand European 15-Day', 'Paris and the Heart of Normandy'],
    departurePorts: ['Amsterdam, Netherlands', 'Basel, Switzerland', 'Budapest, Hungary', 'Passau, Germany', 'Paris, France'],
    keyHighlights: ['Patented Viking Longship Design with Aquavit Terrace Indoor/Outdoor Dining', 'One Complimentary Shore Excursion in Every Port of Call', 'Understated Clean Scandinavian Interiors with Natural Light', 'All Beer, Wine and Soft Drinks with Onboard Lunch and Dinner Included'],
    offers: [
      {
        id: 'viking-rhine-getaway',
        title: '7 Night Rhine Getaway from Amsterdam to Basel with Castles',
        shipName: 'Viking Longship Hlin',
        destination: 'Rhine River Castles and Windmills',
        region: 'Europe',
        durationNights: 7,
        departurePort: 'Amsterdam, Netherlands',
        departureDates: ['Oct 18, 2025', 'Nov 08, 2025', 'May 02, 2026', 'Jun 13, 2026', 'Jul 18, 2026'],
        originalPrice: 3299,
        discountedPrice: 2299,
        onboardCredit: 300,
        badge: 'Viking Longship',
        perks: ['Free Roundtrip Airfare on Select 2026 Dates', 'Shore Excursion Included in Every Single Port', 'Beer, Wine and Soft Drinks with Lunch and Dinner', '$300 Stateroom Credit'],
        itinerarySummary: 'Amsterdam to Kinderdijk Windmills, Cologne, Koblenz, Marksburg Castle, Rhine Gorge, Speyer, Strasbourg, and Basel Switzerland.',
        itineraryDays: [
          { day: 1, port: 'Amsterdam, Netherlands', activity: 'Boarding, welcome dinner and scenic evening canal cruise', arriveTime: '1:00 PM' },
          { day: 2, port: 'Kinderdijk, Netherlands', activity: 'UNESCO 18th-century working windmill guided tour', arriveTime: '8:00 AM', departTime: '1:00 PM' },
          { day: 3, port: 'Cologne, Germany', activity: 'Cologne Cathedral and historic Roman-Germanic museum', arriveTime: '9:00 AM', departTime: '6:00 PM' },
          { day: 4, port: 'Koblenz and Rhine Gorge', activity: 'Marksburg medieval castle tour and scenic sailing past 40 hilltop castles', arriveTime: '8:00 AM', departTime: '6:00 PM' },
          { day: 5, port: 'Speyer, Germany', activity: 'Imperial Cathedral of Speyer and historic Jewish Mikveh bath', arriveTime: '8:00 AM', departTime: '6:00 PM' },
          { day: 6, port: 'Strasbourg, France', activity: 'Gothic Notre Dame Cathedral and astronomical clock demonstration', arriveTime: '8:00 AM', departTime: '6:00 PM' },
          { day: 7, port: 'Basel, Switzerland', activity: 'Disembarkation and Zurich airport departure transfer', arriveTime: '7:00 AM' }
        ],
        includedDining: ['The Restaurant Regional Menus', 'Aquavit Terrace Indoor/Outdoor Al Fresco'],
        shipHighlights: ['Aquavit Terrace with Retractable Floor-to-Ceiling Glass Doors', 'Sun Deck with 360-Degree Views and Herb Garden', 'Library with Curated Destination Books', 'Hybrid Energy Propulsion for Silent Smooth Sailing']
      }
    ]
  },

  // 10. EMERALD CRUISES
  {
    id: 'emerald-cruises',
    name: 'Emerald Cruises',
    category: 'river',
    categoryLabel: 'Modern Luxury Star-Ships and Yachts',
    tagline: 'Contemporary 5-Star River Cruising with Innovative Sun Deck Pools Converting to Cinemas',
    description: 'Award winning river and luxury yacht operator featuring modern Star-Ships with an innovative heated indoor pool that magically converts into a cinema by night, with all gratuities included.',
    logoUrl: 'https://logo.clearbit.com/emeraldcruises.com',
    brandColor: '#003366',
    imageUrl: 'https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&w=1200&q=80',
    fleetCount: 9,
    startingPrice: 1995,
    exclusivePerksSummary: 'All Gratuities Included, Free EmeraldPLUS Cultural Events, and $250 Stateroom Cash',
    popularDestinations: ['Danube Delights', 'Jewels of the Rhine', 'Sensations of Lyon and Provence', 'Secrets of the Douro Portugal', 'Mekong River'],
    departurePorts: ['Amsterdam, Netherlands', 'Budapest, Hungary', 'Nuremberg, Germany', 'Lyon, France', 'Porto, Portugal'],
    keyHighlights: ['Indoor Heated Pool with Retractable Glass Roof that Converts into a Cinema at Night', 'All Transfers, Tips and Gratuities 100% Included in Price', 'EmeraldACTIVE Guided Biking and Hiking Excursions', 'EmeraldPLUS Exclusive Cultural Enrichments'],
    offers: [
      {
        id: 'emerald-danube-delights',
        title: '7 Night Danube Delights from Munich to Budapest with Vienna',
        shipName: 'Emerald Destiny',
        destination: 'Danube River Capitals',
        region: 'Europe',
        durationNights: 7,
        departurePort: 'Regensburg, Germany',
        departureDates: ['Oct 25, 2025', 'May 16, 2026', 'Jun 20, 2026', 'Aug 15, 2026'],
        originalPrice: 3195,
        discountedPrice: 2195,
        onboardCredit: 250,
        badge: 'Pool and Cinema',
        perks: ['All Port Taxes, Airport Transfers, and Gratuities Included', 'EmeraldACTIVE Guided Bike Tours Included', '$250 Stateroom Credit', 'Wine, Beer and Soft Drinks with Meals'],
        itinerarySummary: 'Regensburg to Passau, Melk Abbey, Dürnstein, Vienna, Bratislava Slovakia, and Budapest Hungary.',
        itineraryDays: [
          { day: 1, port: 'Regensburg, Germany', activity: 'Boarding the Emerald Destiny and welcome toast', arriveTime: '2:00 PM' },
          { day: 2, port: 'Passau, Germany', activity: 'Guided walking tour of the city where three rivers meet', arriveTime: '8:00 AM', departTime: '5:00 PM' },
          { day: 3, port: 'Melk and Dürnstein, Austria', activity: 'Benedictine Abbey visit or bike tour along the Danube path', arriveTime: '8:00 AM', departTime: '6:00 PM' },
          { day: 4, port: 'Vienna, Austria', activity: 'Ringstrasse coach tour or guided hike to Kahlenberg vineyard hills', arriveTime: '7:00 AM', departTime: '11:00 PM' },
          { day: 5, port: 'Bratislava, Slovakia', activity: 'Walking tour of historic old town and coffee with a local family', arriveTime: '8:00 AM', departTime: '2:00 PM' },
          { day: 6, port: 'Budapest, Hungary', activity: 'Fisherman’s Bastion and evening Danube illumination cruise', arriveTime: '1:00 PM' },
          { day: 7, port: 'Budapest, Hungary', activity: 'Disembarkation and airport transfer', arriveTime: '8:00 AM' }
        ],
        includedDining: ['Reflections Restaurant Four-Course Dining', 'The Terrace Light Breakfast and Lunch'],
        shipHighlights: ['Heated Pool with Retractable Glass Roof that Converts to Cinema', 'EmeraldACTIVE Guided Hikes and Bikes', 'Sun Deck Putting Green and Giant Chess', 'Balcony Drop-Down Glass Windows']
      }
    ]
  }
];

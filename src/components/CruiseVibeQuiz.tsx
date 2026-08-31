import React, { useState } from 'react';
import {
  ArrowRight,
  RotateCcw,
  Check,
  HelpCircle,
  Sparkles,
  Users,
  Compass,
  Ship,
  Utensils,
  MapPin,
  BedDouble,
  ShieldCheck,
  PhoneCall,
  Gift
} from 'lucide-react';
import { CRUISE_DEALS } from '../data/cruiseData';

interface CruiseVibeQuizProps {
  onOpenBookingModal: (dealTitle: string) => void;
}

interface QuizAnswers {
  travelerType?: string;
  vibe?: string;
  shipSize?: string;
  diningStyle?: string;
  destination?: string;
  stateroomPreference?: string;
}

interface QuestionOption {
  id: string;
  title: string;
  subtitle: string;
  badge?: string;
  recommendedFor?: string;
}

interface QuizQuestion {
  id: keyof QuizAnswers;
  stepNumber: number;
  question: string;
  beginnerNote: string;
  icon: React.ElementType;
  options: QuestionOption[];
}

const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'travelerType',
    stepNumber: 1,
    question: 'Who will be traveling in your vacation group?',
    beginnerNote: '💡 First-Timer Tip: Stateroom configurations and kids club programs vary significantly by cruise line. Connecting staterooms are best for larger families!',
    icon: Users,
    options: [
      {
        id: 'family_kids',
        title: 'Family with Kids & Teens',
        subtitle: 'Looking for kids clubs, waterslides, Broadway shows, and family-friendly dining',
        badge: 'Top Pick for Families',
        recommendedFor: 'Royal Caribbean, Disney, MSC',
      },
      {
        id: 'couples',
        title: 'Couples / Romantic Getaway',
        subtitle: 'Quiet verandas, thermal spa suites, sunset cocktail bars, and romantic specialty dining',
        badge: 'Romantic & Relaxing',
        recommendedFor: 'Celebrity Cruises, Virgin Voyages, Princess',
      },
      {
        id: 'adults_only',
        title: 'Adults Only (18+ / Friends Trip)',
        subtitle: 'Kid-free relaxation, late-night DJ deck parties, elevated gastronomy, and beach clubs',
        badge: 'No Kids Onboard',
        recommendedFor: 'Virgin Voyages, Viking, Silversea',
      },
      {
        id: 'multigen',
        title: 'Multi-Generational (Grandparents to Kids)',
        subtitle: 'Something for every generation from quiet reading lounges to youth thrill decks',
        badge: 'All Ages Together',
        recommendedFor: 'Princess, Royal Caribbean, Holland America',
      },
      {
        id: 'solo',
        title: 'Solo Explorer / Single Cabin',
        subtitle: 'Dedicated studio cabins without paying double occupancy penalties',
        badge: 'Studio Cabins',
        recommendedFor: 'Norwegian Cruise Line, Virgin Voyages',
      },
    ],
  },
  {
    id: 'vibe',
    stepNumber: 2,
    question: 'What energy & vacation vibe are you looking for?',
    beginnerNote: '💡 First-Timer Tip: Some ships feel like vibrant Las Vegas-style floating entertainment hubs, while others are peaceful ocean sanctuaries.',
    icon: Compass,
    options: [
      {
        id: 'thrills',
        title: 'High-Energy Thrills & Adventure',
        subtitle: 'Water coasters, zip lines, laser tag, surf simulators, and massive pool decks',
        badge: 'Mega-Thrill',
        recommendedFor: 'Icon & Oasis Class Ships',
      },
      {
        id: 'relaxed_luxury',
        title: 'Modern Luxury & Ocean Tranquility',
        subtitle: 'Rooftop gardens, infinity pool plunge decks, world-class art, and thermal hydrotherapy',
        badge: 'Sophisticated Chill',
        recommendedFor: 'Celebrity Edge Series',
      },
      {
        id: 'disney_magic',
        title: 'Storybook Magic & Character Fun',
        subtitle: 'Disney character dining, live Broadway musicals at sea, and pirate fireworks nights',
        badge: 'Magical Memories',
        recommendedFor: 'Disney Wish & Treasure',
      },
      {
        id: 'cultural_discovery',
        title: 'Scenic Vistas & Cultural Ports',
        subtitle: 'Focus on historic cities, glacier viewing, local culinary tours, and lecture series',
        badge: 'Port Intensive',
        recommendedFor: 'European Rivers & Alaska Sailings',
      },
    ],
  },
  {
    id: 'shipSize',
    stepNumber: 3,
    question: 'What ship size sounds most comfortable to you?',
    beginnerNote: '💡 First-Timer Tip: Mega-ships have state-of-the-art stabilizers so you rarely feel any motion. Small river ships glide smoothly along calm rivers with zero waves!',
    icon: Ship,
    options: [
      {
        id: 'mega',
        title: 'Mega-Resort Floating City (5,000+ Guests)',
        subtitle: '20+ dining venues, multiple neighborhoods, ice rinks, waterparks, and endless options',
        badge: 'Zero Boredom',
        recommendedFor: 'Royal Caribbean, Carnival, MSC',
      },
      {
        id: 'midsize',
        title: 'Mid-Sized Classic Liner (2,000 - 3,500 Guests)',
        subtitle: 'The sweet spot: easy to navigate, elegant ocean views, spacious lounges, fewer crowds',
        badge: 'Balanced & Classic',
        recommendedFor: 'Celebrity, Princess, Holland America',
      },
      {
        id: 'boutique_luxury',
        title: 'Intimate Boutique Yacht (300 - 700 Guests)',
        subtitle: 'Secluded harbors, 1:1 crew-to-guest ratio, all-suite accommodations, open seating',
        badge: 'Ultra-Exclusive',
        recommendedFor: 'Silversea, Ritz-Carlton Yacht, Seabourn',
      },
      {
        id: 'river_longship',
        title: 'Scenic River Longship (150 - 190 Guests)',
        subtitle: 'Glides on calm rivers, docks right in downtown European city centers with zero ocean waves',
        badge: '100% Smooth Sailing',
        recommendedFor: 'AmaWaterways, Viking River Cruises',
      },
    ],
  },
  {
    id: 'diningStyle',
    stepNumber: 4,
    question: 'How do you prefer dining and drinks on vacation?',
    beginnerNote: '💡 First-Timer Tip: Base cruise fares always include 3 full meals daily in main dining rooms & buffets. Drinks and specialty steakhouses can be bundled all-inclusive!',
    icon: Utensils,
    options: [
      {
        id: 'all_inclusive_worry_free',
        title: 'All-Inclusive Bundle (Open Bar + Wi-Fi Included)',
        subtitle: 'One upfront price covering unlimited cocktails, beer, wine, gratuities, and Wi-Fi',
        badge: 'Zero Surprises',
        recommendedFor: 'Celebrity "All Included", Virgin Voyages',
      },
      {
        id: 'foodie_variety',
        title: 'Diverse Gourmet & Casual Walk-Up Eateries',
        subtitle: 'Tacos by the pool, artisan pizza, burger shacks, and 15+ flexible walk-in venues',
        badge: 'Ultimate Flexibility',
        recommendedFor: 'Virgin Voyages, Royal Caribbean',
      },
      {
        id: 'traditional_michelin',
        title: 'Refined Multi-Course Fine Dining & Steakhouses',
        subtitle: 'Sommelier wine pairings, dry-aged steaks, fresh seafood, and Michelin-inspired menus',
        badge: 'Culinary Excellence',
        recommendedFor: 'Oceania, Celebrity, Silversea',
      },
      {
        id: 'family_interactive',
        title: 'Fun Rotational Dining & Character Experiences',
        subtitle: 'Your waitstaff travels with you to new themed dining rooms every evening',
        badge: 'Kid & Family Favorite',
        recommendedFor: 'Disney Cruise Line',
      },
    ],
  },
  {
    id: 'destination',
    stepNumber: 5,
    question: 'Where in the world is your dream destination?',
    beginnerNote: '💡 First-Timer Tip: Caribbean and Bahamas 4 to 7-night cruises from Florida are the #1 recommended starter cruises for first-time voyagers!',
    icon: MapPin,
    options: [
      {
        id: 'caribbean_bahamas',
        title: 'Tropical Caribbean & Bahamas Private Islands',
        subtitle: 'Turquoise beaches, cabanas at CocoCay / Castaway Cay, snorkeling, warm sunshine',
        badge: '#1 for Beginners',
        recommendedFor: 'Short 4-7 night escapes',
      },
      {
        id: 'alaska',
        title: 'Alaska Glaciers & Wilderness Inside Passage',
        subtitle: 'Calving glaciers, bald eagles, whales, sled dog excursions, and majestic fjords',
        badge: 'Breathtaking Scenery',
        recommendedFor: '7-night summer sailings',
      },
      {
        id: 'mediterranean',
        title: 'Mediterranean, Greek Isles & Italy',
        subtitle: 'Rome, Santorini, Barcelona, Amalfi Coast, and historic European ruins',
        badge: 'Bucket-List Wonder',
        recommendedFor: '7-10 night grand voyages',
      },
      {
        id: 'europe_river',
        title: 'European River Castles (Rhine & Danube)',
        subtitle: 'Fairy-tale castles, riverside vineyards, cobblestone villages, and Christmas markets',
        badge: 'Historic & Intimate',
        recommendedFor: '7-night river cruises',
      },
    ],
  },
  {
    id: 'stateroomPreference',
    stepNumber: 6,
    question: 'Which stateroom (cabin) style fits your comfort & budget?',
    beginnerNote: '💡 First-Timer Tip: Balcony cabins are the most popular choice because having private outdoor ocean air right outside your bedroom makes a huge difference!',
    icon: BedDouble,
    options: [
      {
        id: 'balcony',
        title: 'Private Ocean Balcony / Veranda (Recommended)',
        subtitle: 'Floor-to-ceiling glass doors opening to your own private oceanfront balcony with chairs',
        badge: 'Most Popular (85% of guests)',
        recommendedFor: 'Best overall experience & fresh air',
      },
      {
        id: 'suite',
        title: 'VIP Concierge Suite (Butler + Private Lounge)',
        subtitle: 'Spacious suites with priority embarkation, dedicated sundecks, and private concierge service',
        badge: 'Luxury Treatment',
        recommendedFor: 'The Retreat, Haven, Royal Suite Class',
      },
      {
        id: 'interior_oceanview',
        title: 'Smart Value (Interior or Oceanview Window)',
        subtitle: 'Cozy, comfortable room at the lowest guaranteed price point. Spend your savings on excursions!',
        badge: 'Maximum Savings',
        recommendedFor: 'Budget-conscious smart travelers',
      },
    ],
  },
];

export const CruiseVibeQuiz: React.FC<CruiseVibeQuizProps> = ({ onOpenBookingModal }) => {
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);
  const [answers, setAnswers] = useState<QuizAnswers>({});
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  const currentQuestion = QUIZ_QUESTIONS[currentStepIndex];
  const totalQuestions = QUIZ_QUESTIONS.length;

  const handleSelectOption = (questionKey: keyof QuizAnswers, optionId: string) => {
    const updatedAnswers = { ...answers, [questionKey]: optionId };
    setAnswers(updatedAnswers);

    if (currentStepIndex < totalQuestions - 1) {
      setCurrentStepIndex(prev => prev + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const handlePrevious = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex(prev => prev - 1);
    }
  };

  const handleReset = () => {
    setAnswers({});
    setCurrentStepIndex(0);
    setIsCompleted(false);
  };

  // Determine dynamic recommendation based on answers
  const getMatchedRecommendation = () => {
    // 1. Disney Match
    if (answers.vibe === 'disney_magic' || answers.diningStyle === 'family_interactive' || answers.travelerType === 'family_kids') {
      const disneyDeal = CRUISE_DEALS.find(d => d.cruiseLine === 'Disney Cruise Line') || CRUISE_DEALS[2];
      return {
        deal: disneyDeal,
        cruiseLine: 'Disney Cruise Line',
        shipName: 'Disney Wish / Treasure',
        vibeCategory: 'Storybook Family Magic & Multi-Gen Delight',
        matchPercent: '99% Match',
        whyThisMatches: 'World-class rotational dining, Broadway Disney theater, supervised youth clubs with zero extra fees, and magical private island stops at Castaway Cay.',
        stateroomTip: 'Features split-bathrooms designed specifically for families, allowing two people to get ready simultaneously.',
        includedPerks: [
          'Ask about current sailing offers',
          'Character Breakfast & Rotational Dining Included',
          'Automatic Price Drop Monitoring Protection',
          'Complimentary Stateroom Location Deck Mapping',
        ],
        estimatedFare: 'Live quote required',
      };
    }

    // 2. Virgin Voyages (Adults Only)
    if (answers.travelerType === 'adults_only' || answers.travelerType === 'solo') {
      const virginDeal = CRUISE_DEALS.find(d => d.cruiseLine === 'Virgin Voyages') || CRUISE_DEALS[3];
      return {
        deal: virginDeal,
        cruiseLine: 'Virgin Voyages',
        shipName: 'Resilient Lady / Scarlet Lady',
        vibeCategory: 'Adults-Only 18+ Yacht-Inspired Luxury',
        matchPercent: '98% Match',
        whyThisMatches: 'Zero kids onboard, all 20+ Michelin-curated eateries included with no upcharges, free essential Wi-Fi, included fitness classes, and late-night beach clubs in Bimini.',
        stateroomTip: 'Sea Terrace cabins feature handcrafted red hammocks on the balcony, transformative Seabeds, and tablet-controlled mood lighting.',
        includedPerks: [
          'Ask about current sailing offers',
          'All 20+ Specialty Restaurants Included (No Buffets)',
          'All Gratuities, Essential Wi-Fi & Fitness Classes Covered',
          'Exclusive VIP Stateroom Concierge Service',
        ],
        estimatedFare: 'Live quote required',
      };
    }

    // 3. Celebrity Cruises (Couples / Relaxed Modern Luxury)
    if (answers.vibe === 'relaxed_luxury' || answers.diningStyle === 'traditional_michelin' || answers.stateroomPreference === 'suite') {
      const celebrityDeal = CRUISE_DEALS.find(d => d.cruiseLine === 'Celebrity Cruises') || CRUISE_DEALS[1];
      return {
        deal: celebrityDeal,
        cruiseLine: 'Celebrity Cruises',
        shipName: 'Celebrity Apex / Beyond',
        vibeCategory: 'Modern Luxury, World-Class Dining & Thermal Spas',
        matchPercent: '97% Match',
        whyThisMatches: 'The iconic Magic Carpet lounge cantilevered over the ocean, Michelin-starred culinary direction, serene adult-only Solarium retreat, and rooftop garden.',
        stateroomTip: 'Infinite Veranda staterooms blur the line between indoor and outdoor living with push-button panoramic glass ocean verandas.',
        includedPerks: [
          'Ask about current sailing offers',
          'All-Included Package (Drinks, Wi-Fi & Tips available)',
          'Consortium Guaranteed Lowest Stateroom Rate',
          'Dedicated Stateroom Selection & Dining Concierge',
        ],
        estimatedFare: 'Live quote required',
      };
    }

    // 4. Alaska / Cultural
    if (answers.destination === 'alaska' || answers.destination === 'mediterranean') {
      const princessDeal = CRUISE_DEALS.find(d => d.region === 'Alaska' || d.region === 'Europe') || CRUISE_DEALS[4] || CRUISE_DEALS[0];
      return {
        deal: princessDeal,
        cruiseLine: 'Princess Cruises',
        shipName: 'Discovery Princess',
        vibeCategory: 'Glacier Viewing, Ocean Medallion Ease & Scenic Ports',
        matchPercent: '96% Match',
        whyThisMatches: 'Premier Glacier Bay National Park permits, wearable MedallionClass touchless door unlocking & drink delivery anywhere on ship, and naturalists onboard.',
        stateroomTip: 'Mid-ship Balcony staterooms on Deck 10 to 12 offer optimal viewing angles for glacier calving in Alaska fjords.',
        includedPerks: [
          'Ask about current sailing offers',
          'Princess Plus Drink Package & Wi-Fi Bundle Upgrade',
          'Best Price & Glacier Permit Guarantee',
          'Direct 1-on-1 Alaska Specialist Guidance',
        ],
        estimatedFare: 'Live quote required',
      };
    }

    // 5. Default High-Energy / Royal Caribbean
    const rciDeal = CRUISE_DEALS.find(d => d.cruiseLine === 'Royal Caribbean') || CRUISE_DEALS[0];
    return {
      deal: rciDeal,
      cruiseLine: 'Royal Caribbean International',
      shipName: 'Icon of the Seas / Wonder of the Seas',
      vibeCategory: 'Ultimate Ocean Mega-Resort & Island Thrill',
      matchPercent: '98% Match',
      whyThisMatches: 'Category 6 waterpark with 6 record-breaking slides, Broadway musicals, AquaTheater diving spectacles, 40+ restaurants and bars, and Perfect Day at CocoCay.',
      stateroomTip: 'Ocean View Balconies overlooking the open sea provide private sanctuary after fun-filled days on the active boardwalks.',
      includedPerks: [
        'Ask about current sailing offers',
        'Kids Sail Free on Select Dates with Full Stateroom Credit',
        'Guaranteed Lowest Price Match Lock',
        'No-Fee Stateroom Changes & Concierge Deck Mapping',
      ],
      estimatedFare: 'Live quote required',
    };
  };

  const match = getMatchedRecommendation();

  return (
    <section id="quiz-section" className="py-20 sm:py-28 bg-[#0E1035] text-white relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#14ABFA]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#14ABFA]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-[1640px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 relative z-10 space-y-10">
        
        {/* Header with Beginner-Friendly Framing */}
        <div className="max-w-4xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#14ABFA]/15 border border-[#14ABFA]/30 text-[#14ABFA] text-xs font-black uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Cruise Matcher & Beginner Guide</span>
          </div>

          <h2 className="editorial-title text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight">
            FIND YOUR PERFECT SHIP & VIBE
          </h2>

          <p className="text-sm sm:text-base text-[#F1F6FD]/80 font-normal leading-relaxed">
            Never taken a cruise before? Wondering how staterooms, dining, and ship sizes work? Answer 6 simple questions designed for complete beginners and we will instantly pair you with the right ship, cabin style, and exclusive free spending cash.
          </p>
        </div>

        {/* Main Interactive Questionnaire Card */}
        <div className="bg-[#121544] border border-white/10 shadow-2xl p-6 sm:p-10 lg:p-12 relative">
          
          {!isCompleted ? (
            <div className="space-y-8">
              {/* Step Progress & Indicator */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#14ABFA] text-[#0E1035] font-black text-sm flex items-center justify-center">
                    {currentStepIndex + 1}
                  </div>
                  <div>
                    <span className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider block">
                      Question {currentStepIndex + 1} of {totalQuestions}
                    </span>
                    <span className="text-[11px] text-[#14ABFA] font-semibold">
                      {Math.round(((currentStepIndex + 1) / totalQuestions) * 100)}% Complete
                    </span>
                  </div>
                </div>

                {/* Progress Bar Segments */}
                <div className="flex items-center gap-1.5 w-full sm:w-64">
                  {QUIZ_QUESTIONS.map((q, idx) => (
                    <div
                      key={q.id}
                      className={`h-2 flex-1 transition-all duration-300 ${
                        idx <= currentStepIndex ? 'bg-[#14ABFA]' : 'bg-white/15'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Current Question Title & Beginner Tip */}
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  {React.createElement(currentQuestion.icon, {
                    className: 'w-6 h-6 text-[#14ABFA] shrink-0 mt-1',
                  })}
                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-white leading-snug">
                      {currentQuestion.question}
                    </h3>
                  </div>
                </div>

                {/* Helpful Beginner Guidance Box */}
                <div className="p-3.5 bg-white/5 border border-white/10 text-xs sm:text-sm text-[#F1F6FD]/90 font-medium flex items-start gap-2.5">
                  <HelpCircle className="w-4 h-4 text-[#14ABFA] shrink-0 mt-0.5" />
                  <span>{currentQuestion.beginnerNote}</span>
                </div>
              </div>

              {/* Options Selection Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                {currentQuestion.options.map((opt) => {
                  const isSelected = answers[currentQuestion.id] === opt.id;
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => handleSelectOption(currentQuestion.id, opt.id)}
                      className={`p-6 text-left transition-all duration-200 cursor-pointer border group relative flex flex-col justify-between ${
                        isSelected
                          ? 'bg-[#14ABFA]/20 border-[#14ABFA] text-white ring-1 ring-[#14ABFA]'
                          : 'bg-white/5 hover:bg-white/10 border-white/10 hover:border-[#14ABFA]/50 text-white'
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <span className="text-base sm:text-lg font-bold text-white group-hover:text-[#14ABFA] transition-colors">
                            {opt.title}
                          </span>
                          {opt.badge && (
                            <span className="px-2.5 py-0.5 bg-[#14ABFA] text-[#0E1035] text-[10px] font-black uppercase tracking-wider shrink-0">
                              {opt.badge}
                            </span>
                          )}
                        </div>

                        <p className="text-xs sm:text-sm text-[#F1F6FD]/75 font-normal leading-relaxed mb-4">
                          {opt.subtitle}
                        </p>
                      </div>

                      {opt.recommendedFor && (
                        <div className="pt-3 border-t border-white/10 text-[11px] text-[#14ABFA] font-semibold flex items-center gap-1.5">
                          <Sparkles className="w-3 h-3 shrink-0" />
                          <span>Includes: {opt.recommendedFor}</span>
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Bottom Nav Controls */}
              <div className="flex items-center justify-between pt-6 border-t border-white/10">
                <button
                  type="button"
                  onClick={handlePrevious}
                  disabled={currentStepIndex === 0}
                  className={`text-xs font-bold uppercase tracking-wider px-4 py-2 transition-colors ${
                    currentStepIndex === 0
                      ? 'text-white/30 cursor-not-allowed'
                      : 'text-white/80 hover:text-white cursor-pointer'
                  }`}
                >
                  ← Back to Previous Question
                </button>

                <span className="text-xs text-white/50">
                  Select an option to advance automatically
                </span>
              </div>
            </div>
          ) : (
            /* COMPREHENSIVE MATCH RESULTS VIEW */
            <div className="space-y-8">
              {/* Header Bar */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="px-3 py-1 bg-emerald-500 text-white font-black text-xs uppercase tracking-widest">
                    {match.matchPercent}
                  </div>
                  <span className="text-base sm:text-lg font-extrabold text-white">
                    We Found Your Ideal Cruise Ship & Stateroom Match!
                  </span>
                </div>

                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#14ABFA] hover:text-white cursor-pointer uppercase tracking-wider transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Start Over / Change Answers</span>
                </button>
              </div>

              {/* Two Column Result Breakdown */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left Ship Card */}
                <div className="site-image-card lg:col-span-5 bg-[#0E1035] border border-white/15 overflow-hidden shadow-xl">
                  <div className="site-content-image-frame relative h-72 bg-black">
                    <img
                      src={match.deal.imageUrl}
                      alt={match.shipName}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0E1035] via-[#0E1035]/30 to-transparent" />
                    
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                      <span className="px-3 py-1 bg-[#14ABFA] text-[#0E1035] text-xs font-black uppercase tracking-wider">
                        {match.cruiseLine}
                      </span>
                      <span className="px-3 py-1 bg-black/60 text-white text-xs font-bold">
                        {match.deal.durationNights} Nights
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <p className="text-[11px] font-bold text-[#14ABFA] uppercase tracking-wider">
                        {match.vibeCategory}
                      </p>
                      <h4 className="text-xl sm:text-2xl font-black text-white mt-0.5">
                        {match.shipName}
                      </h4>
                    </div>
                  </div>

                  {/* Ship Highlights */}
                  <div className="p-6 space-y-4">
                    <div className="flex items-center justify-between text-xs border-b border-white/10 pb-3">
                      <span className="text-white/60">Sample Itinerary:</span>
                      <span className="font-bold text-white">{match.deal.region}</span>
                    </div>

                    <div className="flex items-center justify-between text-xs border-b border-white/10 pb-3">
                      <span className="text-white/60">Starting Rate:</span>
                      <span className="font-bold text-[#14ABFA] text-base">{match.estimatedFare}</span>
                    </div>

                    <div className="flex items-center justify-between text-xs">
                      <span className="text-white/60">Rating & Trust:</span>
                      <span className="font-bold text-white">★ 4.9/5 ({match.deal.reviewCount} Verified Reviews)</span>
                    </div>
                  </div>
                </div>

                {/* Right Details & Exclusive Free Perks */}
                <div className="lg:col-span-7 space-y-6">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-black text-white">
                      {match.deal.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#F1F6FD]/80 font-normal mt-2 leading-relaxed">
                      {match.whyThisMatches}
                    </p>
                  </div>

                  {/* Stateroom Recommendation for Beginners */}
                  <div className="p-4 bg-white/5 border-l-4 border-[#14ABFA] space-y-1">
                    <span className="text-xs font-bold text-[#14ABFA] uppercase tracking-wider block">
                      Recommended Stateroom Placement
                    </span>
                    <p className="text-xs text-white/90 font-medium leading-relaxed">
                      {match.stateroomTip}
                    </p>
                  </div>

                  {/* Exclusive Cloud 9 Free Included Perks */}
                  <div className="bg-white/5 border border-white/10 p-5 space-y-3">
                    <div className="flex items-center gap-2 text-xs font-black text-[#14ABFA] uppercase tracking-wider">
                      <Gift className="w-4 h-4" />
                      <span>Your Included First-Timer Bonus Package (No Extra Cost):</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {match.includedPerks.map((perk, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-white/90 font-medium">
                          <Check className="w-3.5 h-3.5 text-[#14ABFA] shrink-0" />
                          <span>{perk}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Direct Call to Action */}
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                    <button
                      type="button"
                      onClick={() => onOpenBookingModal(`Matched Cruise: ${match.cruiseLine} (${match.shipName})`)}
                      className="px-8 py-4 bg-[#14ABFA] hover:bg-white text-[#0E1035] font-black text-xs uppercase tracking-wider shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer focus:outline-none"
                    >
                      <span>Lock In Stateroom & Claim Credit</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    <button
                      type="button"
                      onClick={() => onOpenBookingModal(`First-Timer Cruise Specialist Consultation for ${match.cruiseLine}`)}
                      className="px-6 py-4 bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer focus:outline-none"
                    >
                      <PhoneCall className="w-3.5 h-3.5 text-[#14ABFA]" />
                      <span>Talk to a Cruise Specialist (Free)</span>
                    </button>
                  </div>

                  <div className="flex items-center gap-2 text-[11px] text-white/60">
                    <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Current pricing, availability, and applicable terms confirmed by your advisor</span>
                  </div>
                </div>

              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};

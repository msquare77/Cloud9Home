import React from 'react';
import { CruiseFilterState } from '../types';

const HERO_CRUISE_IMAGE = new URL('../../assets/magnific/hero-cruise.png', import.meta.url).href;
const GIVEAWAY_IMAGE = new URL('../../assets/magnific/resort-3.jpg', import.meta.url).href;
const PARTNER_ROYAL_CARIBBEAN = new URL('../../assets/Untitled-1_0004_il_fullxfull.1868834064_mdde.png', import.meta.url).href;
const PARTNER_CELEBRITY = new URL('../../assets/Untitled-1_0000_celebrity-cruises-3-logo-png-transparent.png', import.meta.url).href;
const PARTNER_SANDALS = new URL('../../assets/Untitled-1_0003_sandals-1-logo-png-transparent.png', import.meta.url).href;
const PARTNER_AMAWATERWAYS = new URL('../../assets/Untitled-1_0001_0x0.png', import.meta.url).href;
const PARTNER_DISNEY = new URL('../../assets/Untitled-1_0002_Disney-Cruise-Line-Symbol.png', import.meta.url).href;

interface HeroSectionProps {
  filters: CruiseFilterState;
  onFilterChange: (key: keyof CruiseFilterState, value: string) => void;
  onSearchSubmit: () => void;
  onOpenBookingModal: (dealTitle?: string) => void;
  onStartQuiz: () => void;
  onNavigateToMatch: (sectionId: string, subpageKey?: string) => void;
  dealCount: number;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  filters,
  onFilterChange,
  onSearchSubmit,
  onOpenBookingModal,
  onStartQuiz,
  dealCount,
  onNavigateToMatch
}) => {
  return (
    <section id="hero-section" className="relative pt-12 pb-20 lg:pb-28 overflow-hidden">
      {/* Prominent Hero Background Image with Atmospheric Ocean Horizon */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
        <div className="absolute inset-0 w-full h-full">
          <img
            src={HERO_CRUISE_IMAGE}
            alt="Luxury Ocean Horizons and Vacation Destinations"
            className="w-full h-full object-cover object-center transform scale-105"
          />
        </div>

        {/* Ambient Contrast Overlays ensuring high-contrast legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#F1F6FD]/95 via-[#F1F6FD]/85 to-[#F1F6FD]/30 sm:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#F1F6FD] via-transparent to-[#F1F6FD]/50" />
      </div>

      <div className="w-full max-w-[1640px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 relative z-10">
        
        {/* Top Section Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-16 mb-16 items-center">
          {/* Left Column: Editorial Headline & Narrative */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="mb-2.5 flex items-center">
              <span className="font-signature text-3xl sm:text-4xl lg:text-5xl text-[#14ABFA] select-none tracking-normal">
                Dream Vacations
              </span>
            </div>

            <h1 className="editorial-title text-4xl sm:text-6xl md:text-7xl lg:text-6xl xl:text-7xl 2xl:text-[5.5rem] text-[#0E1035] mb-5 sm:mb-6 leading-[0.95] tracking-tight">
              DISCOVER <br />
              EXTRAORDINARY <br />
              <span className="text-[#14ABFA]">VACATIONS.</span>
            </h1>

            <p className="text-base sm:text-lg leading-relaxed text-[#0E1035]/75 max-w-2xl font-normal">
              Cruises, resorts, tours, and luxury vacations planned by your dedicated, full-service Dream Vacations travel advisors.
            </p>
          </div>

          {/* Right Column: Clean Editorial Offer Card & Why Us Cards */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {/* Caribbean Vacation Giveaway */}
            <div className="relative min-h-64 shadow-xl overflow-hidden group bg-[#0E1035]">
              <img
                src={GIVEAWAY_IMAGE}
                alt="Turquoise Caribbean water and tropical cruise destination"
                className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0E1035]/95 via-[#0E1035]/78 to-[#0E1035]/10" />
              <div className="absolute -top-10 -right-8 w-36 h-36 rounded-full bg-[#2FE0C0]/35 blur-3xl" />
              <div className="absolute -bottom-12 left-1/3 w-40 h-40 rounded-full bg-[#14ABFA]/35 blur-3xl" />

              <div className="relative z-10 p-7 sm:p-8 min-h-64 flex flex-col justify-center items-start max-w-[85%]">
                <h3 className="text-3xl sm:text-4xl font-black text-white leading-[0.95] tracking-tight uppercase mb-3 drop-shadow-lg sm:whitespace-nowrap">
                  Win a <span className="text-[#2FE0C0]">Vacation</span>
                </h3>
                <p className="text-sm sm:text-base text-white font-bold leading-snug mb-5 drop-shadow-md">
                  Win a Caribbean cruise for two!
                </p>
                <button
                  type="button"
                  onClick={() => onOpenBookingModal('Win a Caribbean Cruise for Two')}
                  className="px-6 py-3 bg-[#14ABFA] hover:bg-[#E8A73D] text-[#0E1035] text-xs font-black uppercase tracking-wider transition-all duration-300 cursor-pointer shadow-xl hover:-translate-y-0.5"
                >
                  Participate to Win
                </button>
              </div>
            </div>

            {/* Global Partner Logos */}
            <div className="relative overflow-hidden bg-white/25 backdrop-blur-2xl backdrop-saturate-150 p-6 sm:p-7 shadow-[0_18px_55px_rgba(14,16,53,0.14),inset_0_1px_0_rgba(255,255,255,0.8)]">
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-white/60 via-white/15 to-[#14ABFA]/8" />
              <div className="absolute -top-12 -left-6 w-64 h-24 rotate-[-8deg] bg-white/40 blur-2xl pointer-events-none" />
              <div className="relative z-10">
                <h3 className="text-[#0E1035] text-lg sm:text-xl font-extrabold mb-5">
                  Global Partners
                </h3>
                <div className="grid grid-cols-3 sm:grid-cols-5 items-center gap-4 sm:gap-5">
                  <img src={PARTNER_ROYAL_CARIBBEAN} alt="Royal Caribbean" className="w-full h-12 object-contain drop-shadow-sm" />
                  <img src={PARTNER_CELEBRITY} alt="Celebrity Cruises" className="w-full h-12 object-contain drop-shadow-sm" />
                  <img src={PARTNER_SANDALS} alt="Sandals Resorts" className="w-full h-12 object-contain drop-shadow-sm" />
                  <img src={PARTNER_AMAWATERWAYS} alt="AmaWaterways" className="w-full h-12 object-contain drop-shadow-sm" />
                  <img src={PARTNER_DISNEY} alt="Disney Cruise Line" className="w-full h-12 object-contain drop-shadow-sm" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Legacy search controls retained for state compatibility; explorer now renders below. */}
        <div className="hidden bg-white shadow-xs p-6 sm:p-9 mb-14">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 mb-6 border-b border-[#0E1035]/10">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#0E1035] tracking-tight leading-tight">
                Explore All Vacation Experiences
              </h2>
              <p className="text-xs text-[#0E1035]/65 font-normal mt-1">
                Cruises, luxury resorts, guided tours, and theme park getaways bundled with exclusive perks
              </p>
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-2 bg-[#F1F6FD] text-[#0E1035] font-semibold text-xs">
              <span className="w-2 h-2 rounded-full bg-[#14ABFA]" />
              <span>{dealCount} Verified Offers Available</span>
            </div>
          </div>

          {/* Form Fields Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
            {/* Vacation Category */}
            <div className="space-y-1.5">
              <label htmlFor="hero-category" className="text-xs font-semibold text-[#0E1035] block uppercase tracking-wider">
                Vacation Type
              </label>
              <select
                id="hero-category"
                value={filters.category || 'all'}
                onChange={(e) => onFilterChange('category', e.target.value)}
                className="w-full bg-[#F1F6FD] px-3.5 py-3 text-xs sm:text-sm font-medium text-[#0E1035] focus:outline-none focus:ring-2 focus:ring-[#14ABFA] focus:bg-white transition-all cursor-pointer"
              >
                <option value="all">All Vacation Experiences</option>
                <option value="ocean_cruise">Ocean Cruises (Royal, Celebrity, Disney, Virgin, NCL)</option>
                <option value="river_cruise">River Cruises (AmaWaterways, Viking, Uniworld)</option>
                <option value="all_inclusive_resort">All-Inclusive Resorts (Sandals, Beaches, Secrets)</option>
                <option value="guided_tour">Guided Tours & Safaris (Globus, Collette, Tauck)</option>
                <option value="theme_park">Theme Parks & Resorts (Disney & Universal Parks)</option>
              </select>
            </div>

            {/* Destination */}
            <div className="space-y-1.5">
              <label htmlFor="hero-destination" className="text-xs font-semibold text-[#0E1035] block uppercase tracking-wider">
                Destination / Region
              </label>
              <select
                id="hero-destination"
                value={filters.destination}
                onChange={(e) => onFilterChange('destination', e.target.value)}
                className="w-full bg-[#F1F6FD] px-3.5 py-3 text-xs sm:text-sm font-medium text-[#0E1035] focus:outline-none focus:ring-2 focus:ring-[#14ABFA] focus:bg-white transition-all cursor-pointer"
              >
                <option value="all">All Destinations (Caribbean, Europe, Alaska...)</option>
                <option value="Caribbean">Caribbean & Bahamas Islands</option>
                <option value="Alaska">Alaska Glaciers & Inside Passage</option>
                <option value="Europe">Europe & Mediterranean</option>
                <option value="Mexico">Mexico & Riviera Maya</option>
                <option value="Africa & Safari">Africa & Wildlife Safaris</option>
                <option value="Theme Parks">Orlando & Theme Parks</option>
              </select>
            </div>

            {/* Cruise Line / Resort Partner */}
            <div className="space-y-1.5">
              <label htmlFor="hero-cruiseline" className="text-xs font-semibold text-[#0E1035] block uppercase tracking-wider">
                Preferred Brand / Supplier
              </label>
              <select
                id="hero-cruiseline"
                value={filters.cruiseLine}
                onChange={(e) => onFilterChange('cruiseLine', e.target.value)}
                className="w-full bg-[#F1F6FD] px-3.5 py-3 text-xs sm:text-sm font-medium text-[#0E1035] focus:outline-none focus:ring-2 focus:ring-[#14ABFA] focus:bg-white transition-all cursor-pointer"
              >
                <option value="all">All Top-Rated Travel Partners</option>
                <option value="Royal Caribbean">Royal Caribbean International</option>
                <option value="Celebrity Cruises">Celebrity Cruises</option>
                <option value="Disney Cruise Line">Disney Cruise Line & Parks</option>
                <option value="Virgin Voyages">Virgin Voyages (Adults Only 18+)</option>
                <option value="AmaWaterways">AmaWaterways River Cruises</option>
                <option value="Sandals Resorts (Certified Specialist)">Sandals & Beaches Luxury Resorts</option>
                <option value="Hyatt Inclusive Collection / Secrets">Secrets & Dreams Resorts</option>
                <option value="Viking River Cruises">Viking River Cruises</option>
                <option value="Globus / Cosmos / Avalon Family">Globus Escorted Tours</option>
              </select>
            </div>

            {/* Travel Window */}
            <div className="space-y-1.5">
              <label htmlFor="hero-month" className="text-xs font-semibold text-[#0E1035] block uppercase tracking-wider">
                Travel Window
              </label>
              <select
                id="hero-month"
                value={filters.month}
                onChange={(e) => onFilterChange('month', e.target.value)}
                className="w-full bg-[#F1F6FD] px-3.5 py-3 text-xs sm:text-sm font-medium text-[#0E1035] focus:outline-none focus:ring-2 focus:ring-[#14ABFA] focus:bg-white transition-all cursor-pointer"
              >
                <option value="all">Any Upcoming Month</option>
                <option value="next_3_months">Next 3 Months</option>
                <option value="next_6_months">Next 6 Months</option>
                <option value="next_12_months">Next 12 Months</option>
              </select>
            </div>

            {/* Length / Duration */}
            <div className="space-y-1.5">
              <label htmlFor="hero-duration" className="text-xs font-semibold text-[#0E1035] block uppercase tracking-wider">
                Trip Duration
              </label>
              <select
                id="hero-duration"
                value={filters.duration}
                onChange={(e) => onFilterChange('duration', e.target.value)}
                className="w-full bg-[#F1F6FD] px-3.5 py-3 text-xs sm:text-sm font-medium text-[#0E1035] focus:outline-none focus:ring-2 focus:ring-[#14ABFA] focus:bg-white transition-all cursor-pointer"
              >
                <option value="all">Any Duration (4 to 14+ Nights)</option>
                <option value="short">4 - 5 Nights (Quick Getaway)</option>
                <option value="medium">6 - 8 Nights (Standard Week)</option>
                <option value="long">9+ Nights (Grand Voyage / Expedition)</option>
              </select>
            </div>

            {/* Voyage Style / Traveler Profile */}
            <div className="space-y-1.5">
              <label htmlFor="hero-travelertype" className="text-xs font-semibold text-[#0E1035] block uppercase tracking-wider">
                Traveler Profile
              </label>
              <select
                id="hero-travelertype"
                value={filters.travelerType}
                onChange={(e) => onFilterChange('travelerType', e.target.value)}
                className="w-full bg-[#F1F6FD] px-3.5 py-3 text-xs sm:text-sm font-medium text-[#0E1035] focus:outline-none focus:ring-2 focus:ring-[#14ABFA] focus:bg-white transition-all cursor-pointer"
              >
                <option value="all">All Traveling Parties</option>
                <option value="family">Family with Kids / Teens</option>
                <option value="couples">Couples Romantic Getaway / Honeymoon</option>
                <option value="multigen">Multi-Gen Group & Family Reunion</option>
                <option value="adults_only">Adults-Only (18+ / 21+)</option>
              </select>
            </div>
          </div>

          {/* Action Row */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#0E1035]/10">
            <div className="flex items-center gap-4 w-full sm:w-auto">
              <button
                type="button"
                onClick={onSearchSubmit}
                className="w-full sm:w-auto px-6 py-3 text-xs font-black uppercase tracking-wider text-[#0E1035] hover:text-[#14ABFA] border-b-2 border-[#14ABFA] transition-colors cursor-pointer focus:outline-none"
              >
                View Vacation Offers ({dealCount})
              </button>
              <button
                type="button"
                onClick={() => onOpenBookingModal()}
                className="hidden md:flex px-6 py-3 text-xs font-black uppercase tracking-wider text-[#0E1035] hover:text-[#14ABFA] border-b-2 border-transparent hover:border-[#14ABFA] transition-colors cursor-pointer"
              >
                Request Custom Quote
              </button>
            </div>

            {/* Interactive Vacation Matcher Quiz CTA */}
            <button
              type="button"
              onClick={onStartQuiz}
              className="text-xs font-semibold uppercase tracking-wider text-[#0E1035] hover:text-[#14ABFA] flex items-center gap-1.5 transition-colors cursor-pointer focus:outline-none border-b-2 border-transparent hover:border-[#14ABFA] py-1"
            >
              <span>Not sure which getaway fits?</span>
              <span className="font-bold">
                Take 60-Sec Vacation Matcher →
              </span>
            </button>
          </div>
        </div>

        {/* Editorial Bottom Value Grid Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 border-t border-[#0E1035]/10 pt-10">
          <div className="flex flex-col gap-1">
            <span className="text-sm font-bold text-[#0E1035]">Price Guarantee</span>
            <span className="text-xs text-[#0E1035]/60 font-normal">See current terms and conditions</span>
          </div>

          <div className="flex flex-col gap-1">
            <span className="text-sm font-bold text-[#0E1035]">Full-Service Advisor</span>
            <span className="text-xs text-[#0E1035]/60 font-normal">Dedicated vacation planning support</span>
          </div>

          <div className="flex flex-col gap-1">
            <span className="text-sm font-bold text-[#0E1035]">Exclusive Deals</span>
            <span className="text-xs text-[#0E1035]/60 font-normal">Sign up for current vacation offers</span>
          </div>

          <div className="flex flex-col gap-1">
            <span className="text-sm font-bold text-[#0E1035]">Dream Vacations Franchise</span>
            <span className="text-xs text-[#0E1035]/60 font-normal">Trusted advisors since 2011</span>
          </div>

          <div className="col-span-2 lg:col-span-1 flex justify-start lg:justify-end items-center gap-3 pt-2 lg:pt-0">
            <div className="text-left lg:text-right">
              <span className="block text-[10px] font-semibold uppercase tracking-wider text-[#0E1035]/50">Narmin & Naushad Kermally</span>
              <a href="tel:17135607016" className="text-xs font-semibold text-[#0E1035] hover:text-[#14ABFA] underline">
                (713) 560-7016
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

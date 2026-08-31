import React, { useState, useMemo, useRef, useEffect } from 'react';
import { ChevronDown, Check } from 'lucide-react';
import { CruiseDeal, CruiseFilterState, VacationCategory } from '../types';

interface FeaturedDealsProps {
  deals: CruiseDeal[];
  activeFilters: CruiseFilterState;
  onOpenBookingModal: (dealTitle: string) => void;
  onOpenItineraryModal: (deal: CruiseDeal) => void;
}

type SortOptionKey = 'featured' | 'price_low' | 'price_high' | 'perks_high' | 'rating' | 'duration';

const SORT_OPTIONS: { id: SortOptionKey; label: string; shortLabel: string }[] = [
  { id: 'featured', label: 'Featured / Recommended', shortLabel: 'Featured' },
  { id: 'price_low', label: 'Price: Low to High', shortLabel: 'Price: Low to High' },
  { id: 'price_high', label: 'Price: High to Low', shortLabel: 'Price: High to Low' },
  { id: 'perks_high', label: 'Highest Onboard / Resort Credit ($)', shortLabel: 'Highest Credit' },
  { id: 'rating', label: 'Highest Guest Rating', shortLabel: 'Top Rated' },
  { id: 'duration', label: 'Longest Trip Duration', shortLabel: 'Longest Duration' },
];

interface CategoryTab {
  id: 'all' | VacationCategory;
  label: string;
}

const CATEGORY_TABS: CategoryTab[] = [
  { id: 'all', label: 'All Getaways' },
  { id: 'ocean_cruise', label: 'Ocean Cruises' },
  { id: 'river_cruise', label: 'River Cruises' },
  { id: 'all_inclusive_resort', label: 'All-Inclusive Resorts' },
  { id: 'guided_tour', label: 'Guided Tours & Safaris' },
  { id: 'theme_park', label: 'Theme Parks & Disney' },
];

export const FeaturedDeals: React.FC<FeaturedDealsProps> = ({
  deals,
  activeFilters,
  onOpenBookingModal,
  onOpenItineraryModal,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | VacationCategory>('all');
  const [selectedRegion, setSelectedRegion] = useState<string>('all');
  const [sortBy, setSortBy] = useState<SortOptionKey>('featured');
  const [isSortOpen, setIsSortOpen] = useState<boolean>(false);
  const sortContainerRef = useRef<HTMLDivElement>(null);

  // Sync with activeFilters.category if passed from Hero search
  useEffect(() => {
    if (activeFilters.category && activeFilters.category !== 'all') {
      setSelectedCategory(activeFilters.category as VacationCategory);
    }
  }, [activeFilters.category]);

  // Close dropdown on outside click
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (sortContainerRef.current && !sortContainerRef.current.contains(e.target as Node)) {
        setIsSortOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  const filteredDeals = useMemo(() => {
    const list = deals.filter(deal => {
      // Category tab filter
      if (selectedCategory !== 'all') {
        const dealCat = deal.category || 'ocean_cruise';
        if (dealCat !== selectedCategory) return false;
      }

      // Region tab filter
      if (selectedRegion !== 'all' && deal.region !== selectedRegion) {
        return false;
      }
      // Top search filters
      if (activeFilters.category && activeFilters.category !== 'all') {
        const dealCat = deal.category || 'ocean_cruise';
        if (dealCat !== activeFilters.category) return false;
      }
      if (activeFilters.destination !== 'all' && deal.region !== activeFilters.destination) {
        return false;
      }
      if (activeFilters.cruiseLine !== 'all' && deal.cruiseLine !== activeFilters.cruiseLine) {
        return false;
      }
      if (activeFilters.departurePort !== 'all' && deal.departurePort !== activeFilters.departurePort) {
        return false;
      }
      if (activeFilters.duration === 'short' && deal.durationNights > 5) {
        return false;
      }
      if (activeFilters.duration === 'medium' && (deal.durationNights < 6 || deal.durationNights > 8)) {
        return false;
      }
      if (activeFilters.duration === 'long' && deal.durationNights < 9) {
        return false;
      }
      if (activeFilters.travelerType === 'family' && deal.familyFriendlyScore < 80) {
        return false;
      }
      if (activeFilters.travelerType === 'adults_only' && deal.familyFriendlyScore > 10) {
        return false;
      }
      return true;
    });

    return [...list].sort((a, b) => {
      if (sortBy === 'price_low') return a.discountedPrice - b.discountedPrice;
      if (sortBy === 'price_high') return b.discountedPrice - a.discountedPrice;
      if (sortBy === 'perks_high') return b.onboardCredit - a.onboardCredit;
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'duration') return b.durationNights - a.durationNights;
      return 0; // featured original order
    });
  }, [deals, selectedCategory, selectedRegion, activeFilters, sortBy]);

  const currentSortLabel = SORT_OPTIONS.find(opt => opt.id === sortBy)?.label || 'Featured / Recommended';

  return (
    <section id="deals-section" className="py-20 sm:py-28 bg-white">
      <div className="w-full max-w-[1640px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="max-w-3xl">
            <span className="font-signature text-3xl sm:text-4xl text-[#14ABFA] select-none block mb-1">
              Curated Escapes & Exclusive Perks
            </span>
            <h2 className="editorial-title text-3xl sm:text-5xl lg:text-6xl text-[#0E1035] leading-tight">
              FEATURED VACATIONS & EXCLUSIVE OFFERS
            </h2>
            <p className="text-sm sm:text-base text-[#0E1035]/75 font-normal mt-3 leading-relaxed">
              Guaranteed lowest rates bundled with direct stateroom spending cash, resort credits, and complimentary Dream Vacations concierge privileges.
            </p>
          </div>

          {/* Interactive Custom Sort Dropdown Button */}
          <div ref={sortContainerRef} className="relative self-start md:self-auto shrink-0 z-30">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0E1035]/60 whitespace-nowrap">
                Sort By:
              </span>
              <button
                type="button"
                id="sort-by-menu-button"
                onClick={() => setIsSortOpen(prev => !prev)}
                className="bg-[#F1F6FD] hover:bg-[#E4EEFB] px-4 py-2.5 text-xs font-bold text-[#0E1035] flex items-center gap-2.5 shadow-xs transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#14ABFA]"
                aria-expanded={isSortOpen}
                aria-haspopup="listbox"
              >
                <span className="tracking-wide">{currentSortLabel}</span>
                <ChevronDown className={`w-4 h-4 text-[#0E1035]/60 transition-transform duration-200 ${isSortOpen ? 'rotate-180 text-[#14ABFA]' : ''}`} />
              </button>
            </div>

            {/* Floating Dropdown Menu */}
            {isSortOpen && (
              <div 
                className="absolute right-0 mt-2 w-64 bg-white shadow-xl py-1.5 z-50 animate-in fade-in zoom-in-95 duration-150"
                role="listbox"
              >
                <div className="px-3.5 py-2 text-[10px] font-bold uppercase tracking-widest text-[#0E1035]/40 border-b border-[#0E1035]/10">
                  Select Display Order
                </div>
                {SORT_OPTIONS.map((option) => {
                  const isSelected = sortBy === option.id;
                  return (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => {
                        setSortBy(option.id);
                        setIsSortOpen(false);
                      }}
                      className={`w-full text-left px-3.5 py-2.5 text-xs font-bold flex items-center justify-between transition-colors cursor-pointer ${
                        isSelected 
                          ? 'bg-[#14ABFA]/10 text-[#0E1035]' 
                          : 'text-[#0E1035]/75 hover:bg-[#F1F6FD] hover:text-[#0E1035]'
                      }`}
                      role="option"
                      aria-selected={isSelected}
                    >
                      <span className={isSelected ? 'font-black text-[#0E1035]' : 'font-medium'}>
                        {option.label}
                      </span>
                      {isSelected && (
                        <Check className="w-3.5 h-3.5 text-[#14ABFA] shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        {/* Vacation Category Navigation Tabs */}
        <div className="site-text-tab-row flex items-center overflow-x-auto pb-1 mb-10 scrollbar-none">
          {CATEGORY_TABS.map((tab) => {
            const isActive = selectedCategory === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  setSelectedCategory(tab.id);
                  setSelectedRegion('all');
                }}
                className={`site-text-tab ${isActive ? 'is-active' : ''}`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Deals Cards Grid */}
        {filteredDeals.length === 0 ? (
          <div className="bg-[#F1F6FD] p-12 sm:p-16 text-center max-w-xl mx-auto">
            <h3 className="text-xl font-bold text-[#0E1035] mb-2">No exact matches for these filters</h3>
            <p className="text-xs sm:text-sm text-[#0E1035]/70 mb-6 max-w-md mx-auto">
              Try changing your vacation category, destination, or duration filters to view all available getaways.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSelectedRegion('all');
                setSortBy('featured');
              }}
              className="px-6 py-3 text-[#0E1035] hover:text-[#14ABFA] font-black text-xs uppercase tracking-widest transition-colors cursor-pointer border-b-2 border-[#14ABFA]"
            >
              Reset Filters & View All
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDeals.map((deal) => {
              const savings = deal.originalPrice - deal.discountedPrice;
              const isResortOrTour = deal.category === 'all_inclusive_resort' || deal.category === 'guided_tour' || deal.category === 'theme_park';
              
              return (
                <div
                  key={deal.id}
                  className="site-image-card bg-white shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden group"
                >
                  {/* Card Image Header */}
                  <div className="site-content-image-frame relative h-64 sm:h-72 lg:h-80 bg-[#0E1035]">
                    <img
                      src={deal.imageUrl}
                      alt={deal.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0E1035]/90 via-[#0E1035]/25 to-transparent" />

                    {/* Top Category Badge & Line */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2">
                      <span className="px-3 py-1 bg-[#0E1035]/90 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-widest">
                        {deal.categoryLabel || deal.cruiseLine}
                      </span>
                      {deal.badge && (
                        <span className="px-3 py-1 bg-[#14ABFA] text-[#0E1035] text-[10px] font-black uppercase tracking-wider">
                          {deal.badge}
                        </span>
                      )}
                    </div>

                    {/* Image Bottom Info */}
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <div className="flex items-center justify-between text-xs font-bold">
                        <span className="text-[#F1F6FD]/95 font-bold tracking-wide">
                          {deal.shipName}
                        </span>
                        <span className="bg-black/40 backdrop-blur-xs px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider">
                          {deal.durationNights} Nights
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Rating & Supplier */}
                      <div className="flex items-center justify-between text-xs text-[#0E1035]/70 font-semibold mb-2.5">
                        <div className="flex items-center gap-1.5 text-[#0E1035]">
                          <span className="font-extrabold">{deal.rating} / 5.0</span>
                          <span className="text-xs text-[#0E1035]/50">({deal.reviewCount})</span>
                        </div>
                        <span className="font-bold text-[11px] uppercase tracking-wider text-[#0E1035]/75 truncate max-w-[160px]">
                          {deal.cruiseLine}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="font-black text-base sm:text-lg text-[#0E1035] leading-snug mb-3 tracking-tight group-hover:text-[#14ABFA] transition-colors">
                        {deal.title}
                      </h3>

                      {/* Highlights / Route */}
                      <div className="mb-4">
                        <div className="text-[10px] font-bold text-[#0E1035]/60 uppercase tracking-wider mb-1">
                          {isResortOrTour ? 'Highlights & Inclusions' : 'Ports of Call'}
                        </div>
                        <p className="text-xs font-medium text-[#0E1035]/85 leading-relaxed">
                          {deal.portsOfCall.join(' • ')}
                        </p>
                      </div>

                      {/* Complimentary Amenities */}
                      <div className="mb-5 py-2.5 border-t border-b border-[#0E1035]/10">
                        <div className="text-[10px] font-black uppercase tracking-wider text-[#14ABFA] mb-1.5">
                          Cloud 9 / Dream Vacations Perks
                        </div>
                        <div className="space-y-1 text-xs text-[#0E1035]/90 font-medium">
                          {deal.exclusivePerks.slice(0, 2).map((perk, perkIdx) => (
                            <div key={perkIdx} className="flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#14ABFA] shrink-0" />
                              <span className="truncate">{perk}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Pricing and Action Buttons */}
                    <div className="pt-2">
                      <div className="flex items-end justify-between mb-4">
                        <div>
                          <span className="text-[10px] font-bold text-[#0E1035]/50 block uppercase tracking-wider">
                            {isResortOrTour ? 'Package From' : 'Stateroom From'}
                          </span>
                          <div className="flex items-baseline gap-2">
                            <span className="text-2xl sm:text-3xl font-black text-[#0E1035]">
                              ${deal.discountedPrice}
                            </span>
                            <span className="text-xs text-gray-400 line-through font-semibold">
                              ${deal.originalPrice}
                            </span>
                            <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-1.5 py-0.5 uppercase">
                              Save ${savings}
                            </span>
                          </div>
                        </div>

                        <div className="text-right">
                          <span className="text-xs font-black text-[#14ABFA] block uppercase tracking-wide">
                            +${deal.onboardCredit} Credit
                          </span>
                          <span className="text-[10px] uppercase font-medium text-[#0E1035]/50">
                            {isResortOrTour ? 'resort perk' : 'per stateroom'}
                          </span>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="grid grid-cols-2 gap-2.5">
                        <button
                          type="button"
                          onClick={() => onOpenItineraryModal(deal)}
                          className="w-full py-2.5 text-xs font-black uppercase tracking-wider text-[#0E1035] hover:text-[#14ABFA] transition-colors text-center cursor-pointer focus:outline-none border-b-2 border-transparent hover:border-[#0E1035]"
                        >
                          Details
                        </button>
                        <button
                          type="button"
                          onClick={() => onOpenBookingModal(deal.title)}
                          className="w-full py-2.5 text-xs font-black uppercase tracking-wider text-[#0E1035] hover:text-[#14ABFA] transition-colors text-center cursor-pointer focus:outline-none border-b-2 border-[#14ABFA]"
                        >
                          Reserve
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

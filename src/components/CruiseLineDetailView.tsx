import React, { useState, useMemo } from 'react';
import { ALL_CRUISE_LINES, CruiseLineDetail, CruiseLineOffer } from '../data/allCruiseLinesData';
import { CruiseDeal } from '../types';
import { CruiseLineLogo } from './CruiseLineLogo';

interface CruiseLineDetailViewProps {
  cruiseLineId: string;
  onBackToAllCruiseLines: () => void;
  onOpenBookingModal: (dealTitle?: string) => void;
  onOpenItineraryModal: (deal: CruiseDeal) => void;
}

export const CruiseLineDetailView: React.FC<CruiseLineDetailViewProps> = ({
  cruiseLineId,
  onBackToAllCruiseLines,
  onOpenBookingModal,
  onOpenItineraryModal,
}) => {
  const line = useMemo(() => {
    return ALL_CRUISE_LINES.find((l) => l.id === cruiseLineId) || ALL_CRUISE_LINES[0];
  }, [cruiseLineId]);

  // Cruise Search Filters within the Cruise Line
  const [selectedDestination, setSelectedDestination] = useState<string>('all');
  const [selectedDuration, setSelectedDuration] = useState<string>('all');
  const [selectedDeparturePort, setSelectedDeparturePort] = useState<string>('all');
  const [selectedShip, setSelectedShip] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'price-asc' | 'price-desc' | 'duration'>('price-asc');

  // Extract unique filter options for this cruise line
  const destinations = useMemo(() => {
    const set = new Set<string>();
    line.offers.forEach((o) => {
      set.add(o.region);
      set.add(o.destination);
    });
    return Array.from(set);
  }, [line]);

  const departurePorts = useMemo(() => {
    const set = new Set<string>();
    line.offers.forEach((o) => set.add(o.departurePort));
    return Array.from(set);
  }, [line]);

  const ships = useMemo(() => {
    const set = new Set<string>();
    line.offers.forEach((o) => set.add(o.shipName));
    return Array.from(set);
  }, [line]);

  // Filter and sort offers
  const filteredOffers = useMemo(() => {
    return line.offers
      .filter((offer) => {
        if (
          selectedDestination !== 'all' &&
          offer.region !== selectedDestination &&
          offer.destination !== selectedDestination
        ) {
          return false;
        }
        if (selectedDeparturePort !== 'all' && offer.departurePort !== selectedDeparturePort) {
          return false;
        }
        if (selectedShip !== 'all' && offer.shipName !== selectedShip) {
          return false;
        }
        if (selectedDuration !== 'all') {
          if (selectedDuration === 'short' && offer.durationNights > 5) return false;
          if (selectedDuration === 'week' && (offer.durationNights < 6 || offer.durationNights > 8))
            return false;
          if (selectedDuration === 'extended' && offer.durationNights < 9) return false;
        }
        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'price-asc') return a.discountedPrice - b.discountedPrice;
        if (sortBy === 'price-desc') return b.discountedPrice - a.discountedPrice;
        if (sortBy === 'duration') return a.durationNights - b.durationNights;
        return 0;
      });
  }, [line, selectedDestination, selectedDuration, selectedDeparturePort, selectedShip, sortBy]);

  // Convert offer to CruiseDeal format for ItineraryModal
  const convertOfferToDeal = (offer: CruiseLineOffer): CruiseDeal => ({
    id: offer.id,
    title: offer.title,
    cruiseLine: line.name,
    shipName: offer.shipName,
    destination: offer.destination,
    region: (offer.region === 'North America Rivers' ? 'Europe' : offer.region) as any,
    durationNights: offer.durationNights,
    departurePort: offer.departurePort,
    departureDates: offer.departureDates,
    portsOfCall: offer.itineraryDays.map((d) => d.port),
    originalPrice: offer.originalPrice,
    discountedPrice: offer.discountedPrice,
    onboardCredit: offer.onboardCredit,
    exclusivePerks: offer.perks,
    rating: 4.95,
    reviewCount: 280,
    imageUrl: line.imageUrl,
    badge: offer.badge,
    familyFriendlyScore: line.category === 'contemporary' ? 95 : 80,
    luxuryScore: line.category === 'luxury' ? 98 : 88,
    shipHighlights: offer.shipHighlights,
    includedDining: offer.includedDining,
    itineraryDays: offer.itineraryDays,
  });

  return (
    <div className="w-full bg-[#F1F6FD] text-[#0E1035] space-y-12">
      {/* Navigation Breadcrumb & Back Action */}
      <div className="flex items-center justify-between border-b border-[#0E1035]/10 pb-4">
        <button
          type="button"
          onClick={onBackToAllCruiseLines}
          className="text-xs font-black uppercase tracking-wider text-[#0E1035] hover:text-[#14ABFA] transition-colors cursor-pointer border-b-2 border-transparent hover:border-[#14ABFA] pb-0.5 focus:outline-none"
        >
          ← Back to All Cruise Lines
        </button>

        <span className="text-xs font-bold text-[#0E1035]/60 uppercase tracking-wider">
          Dream Vacations Portfolio • {line.name}
        </span>
      </div>

      {/* Hero Cruise Line Header */}
      <div className="bg-[#0E1035] text-white p-8 sm:p-12 lg:p-14 relative overflow-hidden shadow-xs">
        <div className="relative z-10 max-w-4xl space-y-4">
          <div className="flex flex-wrap items-center gap-4">
            <CruiseLineLogo
              name={line.name}
              logoUrl={line.logoUrl}
              brandColor={line.brandColor}
              size="lg"
            />
            <div className="flex flex-col gap-1">
              <span className="text-[11px] font-black uppercase tracking-widest text-[#14ABFA] bg-white/10 px-3 py-1 self-start">
                {line.categoryLabel}
              </span>
              <span className="text-xs font-bold text-white/70">
                Fleet Size: {line.fleetCount} Ships
              </span>
            </div>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase pt-2">
            {line.name}
          </h2>

          <p className="text-base sm:text-xl font-medium text-white/90 leading-relaxed">
            {line.tagline}
          </p>

          <p className="text-xs sm:text-sm text-white/75 leading-relaxed pt-2 border-t border-white/10">
            {line.description}
          </p>

          {/* Dream Vacations Exclusive Perks Alert */}
          <div className="pt-4 flex flex-wrap items-center gap-4 text-xs font-bold text-[#14ABFA]">
            <span className="text-white uppercase tracking-wider">Exclusive Agent Inclusions:</span>
            <span>{line.exclusivePerksSummary}</span>
          </div>
        </div>

        {/* Decorative background image overlay */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 hidden md:block">
          <img
            src={line.imageUrl}
            alt={line.name}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>

      {/* Cruise Line Highlights & Fleet Perks */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-white p-6 sm:p-8 shadow-xs">
        <div className="space-y-2">
          <h4 className="text-xs font-black uppercase tracking-wider text-[#0E1035]">
            Signature Line Highlights
          </h4>
          <ul className="space-y-1.5 text-xs text-[#0E1035]/80">
            {line.keyHighlights.map((hl, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-[#14ABFA] font-bold">•</span>
                <span>{hl}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-2">
          <h4 className="text-xs font-black uppercase tracking-wider text-[#0E1035]">
            Top Sailing Destinations
          </h4>
          <div className="flex flex-wrap gap-1.5">
            {line.popularDestinations.map((dest, i) => (
              <span
                key={i}
                className="px-2.5 py-1 bg-[#F1F6FD] text-[11px] font-bold text-[#0E1035]"
              >
                {dest}
              </span>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <h4 className="text-xs font-black uppercase tracking-wider text-[#0E1035]">
            Primary Departure Ports
          </h4>
          <div className="flex flex-wrap gap-1.5">
            {line.departurePorts.map((port, i) => (
              <span
                key={i}
                className="px-2.5 py-1 bg-[#F1F6FD] text-[11px] font-bold text-[#0E1035]"
              >
                {port}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* CRUISE SEARCH FILTER FOR THIS CRUISE LINE */}
      <div className="bg-white p-6 sm:p-8 shadow-xs space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#0E1035]/10 pb-4">
          <div>
            <h3 className="text-lg font-black uppercase tracking-wider text-[#0E1035]">
              Search {line.name} Sailings & Offers
            </h3>
            <p className="text-xs text-[#0E1035]/70">
              Filter available itineraries by destination, duration, port, or ship
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-[#0E1035]/60 uppercase tracking-wider">
              Sort By:
            </span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-[#F1F6FD] border border-[#0E1035]/15 text-xs font-bold text-[#0E1035] px-3 py-2 focus:outline-none cursor-pointer"
            >
              <option value="price-asc">Price (Lowest First)</option>
              <option value="price-desc">Price (Highest First)</option>
              <option value="duration">Duration (Nights)</option>
            </select>
          </div>
        </div>

        {/* Filter Dropdowns Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Destination */}
          <div className="space-y-1.5">
            <label className="text-[10px] font-black uppercase tracking-widest text-[#0E1035]/60 block">
              Destination
            </label>
            <select
              value={selectedDestination}
              onChange={(e) => setSelectedDestination(e.target.value)}
              className="w-full bg-[#F1F6FD] border border-[#0E1035]/15 text-xs font-bold text-[#0E1035] p-3 focus:outline-none cursor-pointer"
            >
              <option value="all">All Destinations</option>
              {destinations.map((d, i) => (
                <option key={i} value={d}>
                  {d}
                </option>
              ))}
            </select>
          </div>

          {/* Duration */}
          <div className="space-y-1.5">
            <label className="text-[10px] font-black uppercase tracking-widest text-[#0E1035]/60 block">
              Duration
            </label>
            <select
              value={selectedDuration}
              onChange={(e) => setSelectedDuration(e.target.value)}
              className="w-full bg-[#F1F6FD] border border-[#0E1035]/15 text-xs font-bold text-[#0E1035] p-3 focus:outline-none cursor-pointer"
            >
              <option value="all">All Durations</option>
              <option value="short">Short Getaways (3 to 5 Nights)</option>
              <option value="week">Week Voyages (6 to 8 Nights)</option>
              <option value="extended">Extended Sailings (9+ Nights)</option>
            </select>
          </div>

          {/* Departure Port */}
          <div className="space-y-1.5">
            <label className="text-[10px] font-black uppercase tracking-widest text-[#0E1035]/60 block">
              Departure Port
            </label>
            <select
              value={selectedDeparturePort}
              onChange={(e) => setSelectedDeparturePort(e.target.value)}
              className="w-full bg-[#F1F6FD] border border-[#0E1035]/15 text-xs font-bold text-[#0E1035] p-3 focus:outline-none cursor-pointer"
            >
              <option value="all">All Ports</option>
              {departurePorts.map((p, i) => (
                <option key={i} value={p}>
                  {p}
                </option>
              ))}
            </select>
          </div>

          {/* Ship Selection */}
          <div className="space-y-1.5">
            <label className="text-[10px] font-black uppercase tracking-widest text-[#0E1035]/60 block">
              Specific Ship
            </label>
            <select
              value={selectedShip}
              onChange={(e) => setSelectedShip(e.target.value)}
              className="w-full bg-[#F1F6FD] border border-[#0E1035]/15 text-xs font-bold text-[#0E1035] p-3 focus:outline-none cursor-pointer"
            >
              <option value="all">All Fleet Vessels</option>
              {ships.map((s, i) => (
                <option key={i} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Reset Filter Button */}
        {(selectedDestination !== 'all' ||
          selectedDuration !== 'all' ||
          selectedDeparturePort !== 'all' ||
          selectedShip !== 'all') && (
          <div className="pt-2 flex items-center justify-between text-xs">
            <span className="font-bold text-[#0E1035]">
              Showing {filteredOffers.length} of {line.offers.length} offers matching your criteria
            </span>
            <button
              type="button"
              onClick={() => {
                setSelectedDestination('all');
                setSelectedDuration('all');
                setSelectedDeparturePort('all');
                setSelectedShip('all');
              }}
              className="font-bold text-[#14ABFA] hover:text-[#0E1035] uppercase tracking-wider cursor-pointer border-b border-[#14ABFA]"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* OFFERS LIST */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-black uppercase tracking-wider text-[#0E1035]">
            Featured {line.name} Special Offers ({filteredOffers.length})
          </h3>
          <span className="text-xs font-bold text-[#0E1035]/70">
            Best Price Guarantee • 100% Free Concierge Planning
          </span>
        </div>

        {filteredOffers.length === 0 ? (
          <div className="bg-white p-12 text-center shadow-xs space-y-4">
            <h4 className="text-base font-bold text-[#0E1035]">
              No offers matching current search criteria
            </h4>
            <p className="text-xs text-[#0E1035]/70 max-w-md mx-auto">
              Our travel specialists have access to unpublished wholesale consortium rates for any
              sailing on {line.name}.
            </p>
            <button
              type="button"
              onClick={() => onOpenBookingModal(`Custom Request: ${line.name}`)}
              className="px-6 py-3 text-xs font-black uppercase tracking-wider text-[#0E1035] hover:text-[#14ABFA] border-b-2 border-[#14ABFA] transition-colors cursor-pointer"
            >
              Request Custom Quote for {line.name}
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredOffers.map((offer) => {
              const savings = offer.originalPrice - offer.discountedPrice;
              const dealFormat = convertOfferToDeal(offer);

              return (
                <div
                  key={offer.id}
                  className="bg-white shadow-xs hover:shadow-lg transition-all flex flex-col justify-between overflow-hidden group"
                >
                  <div>
                    {/* Card Header Banner */}
                    <div className="bg-[#0E1035] text-white p-4 flex items-center justify-between">
                      <span className="text-[10px] font-black uppercase tracking-widest text-[#14ABFA]">
                        {offer.shipName}
                      </span>
                      {offer.badge && (
                        <span className="text-[10px] font-black uppercase tracking-wider text-[#0E1035] bg-[#14ABFA] px-2 py-0.5">
                          {offer.badge}
                        </span>
                      )}
                    </div>

                    <div className="p-6 space-y-4">
                      <div>
                        <div className="flex items-center justify-between text-xs text-[#0E1035]/60 uppercase tracking-wider font-bold mb-1">
                          <span>{offer.durationNights} Nights</span>
                          <span>{offer.region}</span>
                        </div>
                        <h4 className="font-extrabold text-base text-[#0E1035] leading-snug group-hover:text-[#14ABFA] transition-colors">
                          {offer.title}
                        </h4>
                      </div>

                      {/* Ports & Departure */}
                      <div className="space-y-1 text-xs">
                        <div className="text-[#0E1035]/70">
                          <span className="font-bold text-[#0E1035]">Departing From: </span>
                          <span>{offer.departurePort}</span>
                        </div>
                        <div className="text-[#0E1035]/70">
                          <span className="font-bold text-[#0E1035]">Itinerary: </span>
                          <span className="line-clamp-2">{offer.itinerarySummary}</span>
                        </div>
                      </div>

                      {/* Dates Sample */}
                      <div className="space-y-1">
                        <span className="text-[10px] font-black uppercase tracking-wider text-[#0E1035]/50 block">
                          Sample Departure Dates:
                        </span>
                        <div className="flex flex-wrap gap-1">
                          {offer.departureDates.slice(0, 3).map((d, di) => (
                            <span
                              key={di}
                              className="px-2 py-0.5 bg-[#F1F6FD] text-[10px] font-bold text-[#0E1035]"
                            >
                              {d}
                            </span>
                          ))}
                          {offer.departureDates.length > 3 && (
                            <span className="px-1.5 py-0.5 text-[10px] font-bold text-[#0E1035]/60">
                              +{offer.departureDates.length - 3} more
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Exclusive Inclusions */}
                      <div className="py-2.5 border-t border-b border-[#0E1035]/10 space-y-1">
                        <span className="text-[10px] font-black uppercase tracking-wider text-[#14ABFA] block">
                          Dream Vacations Exclusive Perks:
                        </span>
                        <ul className="space-y-1 text-xs text-[#0E1035]/85">
                          {offer.perks.slice(0, 2).map((p, pi) => (
                            <li key={pi} className="flex items-center gap-1.5">
                              <span className="text-[#14ABFA] font-bold">✓</span>
                              <span className="truncate">{p}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Pricing & Footer Actions */}
                  <div className="p-6 pt-0 space-y-4">
                    <div className="flex items-end justify-between">
                      <div>
                        <span className="text-[10px] font-bold text-[#0E1035]/50 uppercase tracking-wider block">
                          From (per stateroom)
                        </span>
                        <div className="flex items-baseline gap-2">
                          <span className="text-2xl font-black text-[#0E1035]">
                            ${offer.discountedPrice}
                          </span>
                          <span className="text-xs text-gray-400 line-through font-bold">
                            ${offer.originalPrice}
                          </span>
                        </div>
                        <span className="text-[10px] font-bold text-emerald-700 uppercase">
                          Save ${savings}
                        </span>
                      </div>

                      <div className="text-right">
                        <span className="text-xs font-black text-[#14ABFA] uppercase">
                          +${offer.onboardCredit} Credit
                        </span>
                        <span className="text-[10px] text-[#0E1035]/50 block uppercase">
                          Exclusive Cash
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 pt-2">
                      <button
                        type="button"
                        onClick={() => onOpenItineraryModal(dealFormat)}
                        className="py-2.5 text-xs font-black uppercase tracking-wider text-[#0E1035] hover:text-[#14ABFA] border-b-2 border-transparent hover:border-[#14ABFA] transition-colors cursor-pointer text-center focus:outline-none"
                      >
                        View Itinerary
                      </button>
                      <button
                        type="button"
                        onClick={() =>
                          onOpenBookingModal(`${line.name} Special: ${offer.title} (${offer.shipName})`)
                        }
                        className="py-2.5 text-xs font-black uppercase tracking-wider text-[#0E1035] hover:text-[#14ABFA] border-b-2 border-[#14ABFA] transition-colors cursor-pointer text-center focus:outline-none"
                      >
                        Reserve Offer
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Back to top / Back to All Cruise Lines button */}
      <div className="pt-6 border-t border-[#0E1035]/10 flex items-center justify-between">
        <button
          type="button"
          onClick={onBackToAllCruiseLines}
          className="text-xs font-black uppercase tracking-wider text-[#0E1035] hover:text-[#14ABFA] transition-colors cursor-pointer border-b-2 border-[#14ABFA] pb-0.5 focus:outline-none"
        >
          ← Return to All Cruise Lines Portfolio
        </button>

        <button
          type="button"
          onClick={() => onOpenBookingModal(`Concierge Request for ${line.name}`)}
          className="text-xs font-black uppercase tracking-wider text-[#0E1035] hover:text-[#14ABFA] transition-colors cursor-pointer border-b-2 border-[#14ABFA] pb-0.5 focus:outline-none"
        >
          Speak with a {line.name} Certified Specialist →
        </button>
      </div>
    </div>
  );
};

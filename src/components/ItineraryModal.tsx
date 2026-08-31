import React from 'react';
import { X, Check } from 'lucide-react';
import { CruiseDeal } from '../types';

interface ItineraryModalProps {
  deal: CruiseDeal | null;
  onClose: () => void;
  onBookThisDeal: (dealTitle: string) => void;
}

export const ItineraryModal: React.FC<ItineraryModalProps> = ({ deal, onClose, onBookThisDeal }) => {
  if (!deal) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4">
      <div 
        className="site-image-card relative bg-white max-w-3xl w-full overflow-hidden shadow-2xl my-8 flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="site-content-image-frame relative h-48 sm:h-56 shrink-0">
          <img
            src={deal.imageUrl}
            alt={deal.shipName}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0E1035] via-[#0E1035]/50 to-transparent" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2.5 text-white/80 hover:text-white transition-colors cursor-pointer"
            aria-label="Close itinerary modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header text info */}
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 bg-[#14ABFA] text-[#0E1035] text-xs font-black">
                {deal.cruiseLine}
              </span>
              <span className="text-xs font-bold text-white/80">
                {deal.durationNights} Nights • {deal.shipName}
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white leading-tight">
              {deal.title}
            </h3>
          </div>
        </div>

        {/* Scrollable Modal Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          {/* Top Key Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-[#F1F6FD] p-4 text-center shadow-xs">
            <div>
              <span className="text-[11px] font-bold text-[#0E1035]/60 uppercase block">Starting Fare</span>
              <span className="text-lg font-black text-[#0E1035]">Request Live Pricing</span>
            </div>
            <div>
              <span className="text-[11px] font-bold text-[#0E1035]/60 uppercase block">Free Cash Credit</span>
              <span className="text-lg font-black text-[#14ABFA]">Ask About Current Offers</span>
            </div>
            <div>
              <span className="text-[11px] font-bold text-[#0E1035]/60 uppercase block">Departure Port</span>
              <span className="text-xs font-bold text-[#0E1035]">{deal.departurePort.split(',')[0]}</span>
            </div>
            <div>
              <span className="text-[11px] font-bold text-[#0E1035]/60 uppercase block">Guest Rating</span>
              <span className="text-xs font-black text-[#0E1035]">
                {deal.rating} / 5.0
              </span>
            </div>
          </div>

          {/* Day by Day Itinerary Timeline */}
          <div>
            <h4 className="text-sm font-extrabold text-[#0E1035] uppercase tracking-wider mb-3">
              Day-by-Day Port Schedule:
            </h4>

            <div className="border-l-2 border-[#14ABFA]/40 ml-2 pl-4 space-y-4">
              {deal.itineraryDays.map((day) => (
                <div key={day.day} className="bg-[#F1F6FD] p-3.5">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="text-xs font-black text-[#0E1035]">
                      Day {day.day}: {day.port}
                    </span>
                    {(day.arriveTime || day.departTime) && (
                      <span className="text-[11px] font-semibold text-[#14ABFA]">
                        {day.arriveTime ? `${day.arriveTime} - ` : ''}{day.departTime || 'All Day'}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-[#0E1035]/80 font-medium">
                    {day.activity}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Included Dining & Ship Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-[#F1F6FD] p-4">
              <div className="text-xs font-black text-[#0E1035] mb-2 uppercase tracking-wider">
                Complimentary Included Dining:
              </div>
              <ul className="space-y-1 text-xs text-[#0E1035]/80">
                {deal.includedDining.map((dining, dIdx) => (
                  <li key={dIdx} className="flex items-center gap-1.5">
                    <Check className="w-3 h-3 text-[#14ABFA]" />
                    <span>{dining}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#F1F6FD] p-4">
              <div className="text-xs font-black text-[#0E1035] mb-2 uppercase tracking-wider">
                Signature Ship Highlights:
              </div>
              <ul className="space-y-1 text-xs text-[#0E1035]/80">
                {deal.shipHighlights.map((hl, hlIdx) => (
                  <li key={hlIdx} className="flex items-center gap-1.5">
                    <Check className="w-3 h-3 text-[#14ABFA]" />
                    <span>{hl}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Exclusive Perks Box */}
          <div className="bg-[#0E1035] text-white p-4 sm:p-5">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-extrabold text-[#14ABFA] uppercase tracking-wider">
                Cloud 9 / Dream Vacations Exclusive Bonuses:
              </span>
              <span className="text-xs font-black text-[#14ABFA]">
                Available offers vary by sailing
              </span>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-[#F1F6FD]/90">
              {deal.exclusivePerks.map((perk, pIdx) => (
                <li key={pIdx} className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#14ABFA] shrink-0 mt-0.5" />
                  <span>{perk}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Modal Bottom Action Footer */}
        <div className="p-4 sm:p-6 bg-white border-t border-[#0E1035]/10 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <div className="text-center sm:text-left">
            <span className="text-xs text-[#0E1035]/60 block font-medium">Locked In Rate From:</span>
            <span className="text-xl font-black text-[#0E1035]">Live pricing required</span>
          </div>

          <button
            onClick={() => {
              onClose();
              onBookThisDeal(deal.title);
            }}
            className="w-full sm:w-auto px-6 py-3 text-xs sm:text-sm font-black uppercase tracking-wider text-[#0E1035] hover:text-[#14ABFA] border-b-2 border-[#14ABFA] transition-colors cursor-pointer"
          >
            Request This Sailing
          </button>
        </div>
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { X } from 'lucide-react';
import confetti from 'canvas-confetti';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialDealTitle?: string;
  initialQuoteDetails?: {
    destination: string;
    cruiseLine: string;
    stateroom: string;
    adults: number;
    children: number;
    estimatedTotal: number;
  };
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialDealTitle,
  initialQuoteDetails
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    vacationType: 'Ocean Cruise',
    destination: initialQuoteDetails?.destination || 'Caribbean & Bahamas',
    supplierOrLine: initialQuoteDetails?.cruiseLine || 'Royal Caribbean',
    stateroomOrRoom: initialQuoteDetails?.stateroom || 'Private Balcony Veranda / Deluxe Room',
    adults: initialQuoteDetails?.adults || 2,
    children: initialQuoteDetails?.children || 0,
    travelMonth: 'Fall / Winter 2025',
    specialNotes: initialDealTitle ? `Interested in: ${initialDealTitle}` : '',
    contactPreference: 'email'
  });

  const [submitted, setSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ref = `DV-${Math.floor(10000 + Math.random() * 90000)}`;
    setBookingRef(ref);
    setSubmitted(true);

    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#14ABFA', '#0E1035', '#F1F6FD', '#38BDF8']
      });
    } catch (err) {
      // safe fallback
    }
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4">
      <div 
        className="relative bg-white max-w-2xl w-full overflow-hidden shadow-2xl my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#0E1035] text-white p-6 sm:p-7 relative">
          <button
            onClick={handleResetAndClose}
            className="absolute top-5 right-5 p-2 text-white/70 hover:text-white transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-start gap-4 pr-10">
            <img
              src="/assets/cloud9-mark.png"
              alt="Cloud 9 Travels"
              className="w-11 h-11 object-contain shrink-0"
            />
            <div>
              <div className="text-[10px] font-black uppercase tracking-widest text-[#14ABFA] mb-1">
                Vacation Planning Consultation
              </div>

              <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight">
                {submitted ? 'Custom Vacation Quote Request Received!' : 'Request Your Custom Vacation Quote & Bonus Perks'}
              </h3>
              <p className="text-xs sm:text-sm text-[#F1F6FD]/80 font-medium mt-1">
                {submitted 
                  ? 'Narmin & Naushad Kermally are locking in your lowest fare & exclusive amenities.' 
                  : 'Dedicated planning support • Current supplier pricing • Available vacation offers'}
              </p>
            </div>
          </div>
        </div>

        {/* Modal Body */}
        {submitted ? (
          <div className="p-6 sm:p-8 text-center space-y-6">
            <div className="text-4xl text-emerald-600 font-bold select-none">
              ✓
            </div>

            <div>
              <span className="text-xs font-bold text-[#0E1035]/60 uppercase tracking-widest block">
                Quote Reference ID
              </span>
              <div className="text-2xl sm:text-3xl font-black text-[#14ABFA] tracking-wider mt-1">
                {bookingRef}
              </div>
            </div>

            <div className="bg-[#F1F6FD] p-5 text-left space-y-3">
              <div className="flex items-center justify-between text-xs font-bold text-[#0E1035] border-b border-[#0E1035]/10 pb-2">
                <span>Your Dedicated Travel Advisors:</span>
                <span className="text-[#14ABFA]">Narmin & Naushad Kermally (Cloud 9 Travels)</span>
              </div>
              <div className="text-xs text-[#0E1035]/80 space-y-1">
                <p>✓ <strong>Vacation Type:</strong> {formData.vacationType}</p>
                <p>✓ <strong>Destination:</strong> {formData.destination} ({formData.supplierOrLine})</p>
                <p>✓ <strong>Room / Stateroom:</strong> {formData.stateroomOrRoom}</p>
                <p>✓ <strong>Party Size:</strong> {formData.adults} Adults, {formData.children} Children</p>
                <p>✓ <strong>Exclusive Perks:</strong> Stateroom / Resort Credit Voucher Linked to #{bookingRef}</p>
              </div>
            </div>

            <p className="text-xs text-[#0E1035]/70 font-medium max-w-md mx-auto">
              We have sent your request to <strong>{formData.email}</strong>. Your Cloud 9 Travels advisor will follow up shortly. For immediate help, call <strong>(713) 560-7016</strong> to confirm current availability and pricing.
            </p>

            <button
              onClick={handleResetAndClose}
              className="py-3 px-6 text-xs font-black uppercase tracking-wider text-[#0E1035] hover:text-[#14ABFA] border-b-2 border-[#14ABFA] transition-colors cursor-pointer"
            >
              Return to Vacation Hub
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-4">
            {/* Vacation Type & Destination */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-bold text-[#0E1035] block mb-1">
                  Vacation Experience Type
                </label>
                <select
                  value={formData.vacationType}
                  onChange={(e) => setFormData({ ...formData, vacationType: e.target.value })}
                  className="w-full bg-[#F1F6FD] px-3.5 py-2.5 text-xs font-bold text-[#0E1035] focus:ring-2 focus:ring-[#14ABFA] outline-none"
                >
                  <option value="Ocean Cruise">Ocean Cruise (Royal Caribbean, Celebrity, Disney, etc.)</option>
                  <option value="River Cruise">River Cruise (AmaWaterways, Viking, Uniworld)</option>
                  <option value="All-Inclusive Resort">All-Inclusive Luxury Resort (Sandals, Secrets, etc.)</option>
                  <option value="Guided Tour & Safari">Guided World Tour & Safari (Globus, Collette)</option>
                  <option value="Theme Park Vacation">Disney & Universal Parks Getaway</option>
                  <option value="Luxury Villa / Group">Luxury Villa / Custom Family Group</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-bold text-[#0E1035] block mb-1">
                  Destination Region
                </label>
                <select
                  value={formData.destination}
                  onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                  className="w-full bg-[#F1F6FD] px-3.5 py-2.5 text-xs font-bold text-[#0E1035] focus:ring-2 focus:ring-[#14ABFA] outline-none"
                >
                  <option value="Caribbean & Bahamas">Caribbean & Bahamas</option>
                  <option value="Europe & Mediterranean">Europe & Mediterranean</option>
                  <option value="Alaska Glaciers">Alaska Glaciers & Inside Passage</option>
                  <option value="Mexico & Riviera Maya">Mexico & Riviera Maya</option>
                  <option value="Africa Safari & Wildlife">Africa Safari & Wildlife</option>
                  <option value="Orlando / Theme Parks">Orlando Theme Parks & Resorts</option>
                  <option value="Hawaii & South Pacific">Hawaii & South Pacific</option>
                </select>
              </div>
            </div>

            {/* Preferred Supplier & Room Category */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-bold text-[#0E1035] block mb-1">
                  Preferred Cruise Line or Resort Brand
                </label>
                <input
                  type="text"
                  placeholder="e.g. Royal Caribbean, Sandals, AmaWaterways, Disney"
                  value={formData.supplierOrLine}
                  onChange={(e) => setFormData({ ...formData, supplierOrLine: e.target.value })}
                  className="w-full bg-[#F1F6FD] px-3.5 py-2.5 text-xs font-semibold text-[#0E1035] focus:outline-none focus:ring-2 focus:ring-[#14ABFA]"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-[#0E1035] block mb-1">
                  Preferred Room / Stateroom Category
                </label>
                <select
                  value={formData.stateroomOrRoom}
                  onChange={(e) => setFormData({ ...formData, stateroomOrRoom: e.target.value })}
                  className="w-full bg-[#F1F6FD] px-3 py-2.5 text-xs font-bold text-[#0E1035] outline-none"
                >
                  <option value="Balcony Veranda">Balcony Veranda / Oceanfront Room (Popular)</option>
                  <option value="Club Level / Suite">Club Level / Butler Suite / The Retreat</option>
                  <option value="Ocean View Window">Ocean View Window / Swim-Up Suite</option>
                  <option value="Interior / Standard">Interior / Standard Value Room</option>
                  <option value="Multi-Room Villa">Multi-Room Connecting Suite / Private Villa</option>
                </select>
              </div>
            </div>

            {/* Guests & Travel Month */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="text-xs font-bold text-[#0E1035] block mb-1">
                  Adults (18+)
                </label>
                <select
                  value={formData.adults}
                  onChange={(e) => setFormData({ ...formData, adults: Number(e.target.value) })}
                  className="w-full bg-[#F1F6FD] px-3 py-2.5 text-xs font-bold text-[#0E1035] outline-none"
                >
                  {[1, 2, 3, 4, 5, 6, 8, 10, 15, 20].map(n => <option key={n} value={n}>{n} {n === 1 ? 'Adult' : 'Adults'}</option>)}
                </select>
              </div>

              <div>
                <label className="text-xs font-bold text-[#0E1035] block mb-1">
                  Children (0-17)
                </label>
                <select
                  value={formData.children}
                  onChange={(e) => setFormData({ ...formData, children: Number(e.target.value) })}
                  className="w-full bg-[#F1F6FD] px-3 py-2.5 text-xs font-bold text-[#0E1035] outline-none"
                >
                  {[0, 1, 2, 3, 4, 5, 6].map(n => <option key={n} value={n}>{n} {n === 1 ? 'Child' : 'Children'}</option>)}
                </select>
              </div>

              <div>
                <label className="text-xs font-bold text-[#0E1035] block mb-1">
                  Estimated Travel Dates
                </label>
                <input
                  type="text"
                  placeholder="e.g. Oct 2025 or Spring Break"
                  value={formData.travelMonth}
                  onChange={(e) => setFormData({ ...formData, travelMonth: e.target.value })}
                  className="w-full bg-[#F1F6FD] px-3 py-2.5 text-xs font-semibold text-[#0E1035] focus:outline-none focus:ring-2 focus:ring-[#14ABFA]"
                />
              </div>
            </div>

            {/* Contact details */}
            <div className="pt-2 border-t border-[#0E1035]/10 space-y-3">
              <div>
                <label className="text-xs font-bold text-[#0E1035] block mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Jennifer & Michael Stevens"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full bg-[#F1F6FD] px-3.5 py-2.5 text-xs font-semibold text-[#0E1035] focus:outline-none focus:ring-2 focus:ring-[#14ABFA]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-bold text-[#0E1035] block mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#F1F6FD] px-3.5 py-2.5 text-xs font-semibold text-[#0E1035] focus:outline-none focus:ring-2 focus:ring-[#14ABFA]"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-[#0E1035] block mb-1">
                    Phone Number (Direct Contact)
                  </label>
                  <input
                    type="tel"
                    placeholder="(713) 000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#F1F6FD] px-3.5 py-2.5 text-xs font-semibold text-[#0E1035] focus:outline-none focus:ring-2 focus:ring-[#14ABFA]"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-[#0E1035] block mb-1">
                  Special Requests / Milestone Celebrations / Group Inquiries
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Anniversary getaway, honeymoon registry, connecting suites for grandparents, transferring existing booking..."
                  value={formData.specialNotes}
                  onChange={(e) => setFormData({ ...formData, specialNotes: e.target.value })}
                  className="w-full bg-[#F1F6FD] p-3 text-xs text-[#0E1035] focus:outline-none focus:ring-2 focus:ring-[#14ABFA]"
                />
              </div>
            </div>

            {/* Trust check */}
            <div className="bg-[#F1F6FD] p-3 text-[11px] text-[#0E1035]/80">
              <span>Your dedicated Dream Vacations advisor will confirm current supplier pricing, availability, and applicable terms.</span>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3.5 text-xs font-black uppercase tracking-wider text-[#0E1035] hover:text-[#14ABFA] border-b-2 border-[#14ABFA] transition-colors cursor-pointer text-center"
              >
                Get Free Custom Quote & Lock In Exclusive Bonus Perks
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

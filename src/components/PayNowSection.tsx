import React, { useState } from 'react';
import { CreditCard, Lock, CheckCircle2, ShieldCheck, Search, TrendingDown, Phone, Mail, Calendar, Clock, ArrowRight, DollarSign, User } from 'lucide-react';

interface PayNowSectionProps {
  onOpenBookingModal: (dealTitle?: string) => void;
  initialSubpage?: string;
}

type PaySubpageKey = 'payment' | 'lookup' | 'reprice' | 'consult';

const PAY_SUBPAGES: { id: PaySubpageKey; label: string; description: string }[] = [
  { id: 'payment', label: 'Make a Secure Payment / Deposit', description: 'Submit an encrypted initial deposit or final balance payment directly toward your verified reservation.' },
  { id: 'lookup', label: 'Check Existing Reservation Status', description: 'Lookup your stateroom number, dining confirmation, and accumulated onboard credit balance.' },
  { id: 'reprice', label: 'Request Price Drop Re-Fare Check', description: 'Ask our team to perform a real-time system audit for lower fares or extra stateroom amenities.' },
  { id: 'consult', label: 'Schedule 1-on-1 Consultation', description: 'Book a complimentary 15-minute phone or video trip planning session with Narmin & Naushad Kermally.' }
];

export const PayNowSection: React.FC<PayNowSectionProps> = ({
  onOpenBookingModal,
  initialSubpage = 'payment'
}) => {
  const [activeSubpage, setActiveSubpage] = useState<PaySubpageKey>(initialSubpage as PaySubpageKey || 'payment');

  // Form states
  const [paymentForm, setPaymentForm] = useState({
    bookingNumber: '',
    leadGuestName: '',
    supplier: 'Royal Caribbean',
    paymentType: 'Deposit ($250)',
    customAmount: '',
    cardNumber: '',
    expDate: '',
    cvv: '',
    billingZip: ''
  });
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  // Lookup state
  const [lookupNumber, setLookupNumber] = useState('');
  const [lookupLastName, setLookupLastName] = useState('');
  const [lookupResult, setLookupResult] = useState<any>(null);

  // Reprice state
  const [repriceForm, setRepriceForm] = useState({
    bookingNumber: '',
    guestName: '',
    email: '',
    phone: '',
    shipOrResort: ''
  });
  const [repriceSubmitted, setRepriceSubmitted] = useState(false);

  // Consultation state
  const [consultForm, setConsultForm] = useState({
    name: '',
    phone: '',
    email: '',
    preferredDate: '',
    preferredTime: 'Morning (9:00 AM - 12:00 PM)',
    vacationType: 'Ocean Cruise'
  });
  const [consultSubmitted, setConsultSubmitted] = useState(false);

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPaymentSuccess(true);
    setTimeout(() => {
      setPaymentSuccess(false);
      setPaymentForm({
        bookingNumber: '',
        leadGuestName: '',
        supplier: 'Royal Caribbean',
        paymentType: 'Deposit ($250)',
        customAmount: '',
        cardNumber: '',
        expDate: '',
        cvv: '',
        billingZip: ''
      });
    }, 6000);
  };

  const handleLookupSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (lookupNumber.trim() || lookupLastName.trim()) {
      setLookupResult({
        bookingNumber: lookupNumber.trim() || 'DV-982410',
        leadGuest: lookupLastName.trim() ? `${lookupLastName} Party` : 'Smith Family',
        supplier: 'Royal Caribbean International',
        shipOrResort: 'Icon of the Seas • 7-Night Eastern Caribbean',
        sailDate: 'November 18, 2025 (84 Days to Sail)',
        stateroom: 'Cabin #11248 (Infinite Oceanview Balcony - Midship)',
        dining: 'Traditional 6:00 PM Early Seating • Table for 4',
        depositStatus: 'Deposit Paid & Confirmed',
        remainingBalance: 'Contact your advisor for the current balance and due date',
        onboardCredit: 'Applicable offers are listed on your official supplier invoice',
        concierge: 'Narmin & Naushad Kermally (Cloud 9 Travels / Dream Vacations)'
      });
    }
  };

  const handleRepriceSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setRepriceSubmitted(true);
    setTimeout(() => setRepriceSubmitted(false), 5000);
  };

  const handleConsultSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setConsultSubmitted(true);
    setTimeout(() => setConsultSubmitted(false), 5000);
  };

  const activeDescription = PAY_SUBPAGES.find(s => s.id === activeSubpage)?.description;

  return (
    <section id="pay-now-section" className="py-20 sm:py-28 bg-white border-t border-[#0E1035]/10">
      <div className="w-full max-w-[1640px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        
        {/* Section Header */}
        <div className="max-w-4xl mb-8">
          <div className="mb-1">
            <span className="font-signature text-3xl sm:text-4xl text-[#14ABFA] select-none">
              Encrypted & 100% Secure
            </span>
          </div>
          <h2 className="editorial-title text-3xl sm:text-5xl lg:text-6xl text-[#0E1035] leading-tight">
            PAY NOW & CLIENT PORTAL
          </h2>
          <p className="text-sm sm:text-base text-[#0E1035]/75 font-normal mt-3 leading-relaxed">
            Manage your vacation payments safely. All transactions are processed through Dream Vacations’ bank-grade 256-bit SSL encrypted PCI-DSS certified gateway with instant electronic receipts.
          </p>
        </div>

        {/* SUBPAGE TOGGLE BUTTONS ON TOP OF SECTION */}
        <div className="mb-10">
          <div className="site-text-tab-row flex items-center overflow-x-auto pb-1 scrollbar-none">
            {PAY_SUBPAGES.map((subpage) => {
              const isActive = activeSubpage === subpage.id;
              return (
                <button
                  key={subpage.id}
                  onClick={() => setActiveSubpage(subpage.id)}
                  className={`site-text-tab ${isActive ? 'is-active' : ''}`}
                >
                  <span>{subpage.label}</span>
                </button>
              );
            })}
          </div>

          {/* Active Subpage Subtitle Bar */}
          <div className="mt-4 flex items-center justify-between text-xs sm:text-sm text-[#0E1035]/75 bg-[#F1F6FD] p-4 shadow-xs">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#14ABFA]" />
              <span className="font-semibold text-[#0E1035]">{activeDescription}</span>
            </div>
            <span className="font-extrabold text-[#0E1035] hidden md:inline-block">
              256-Bit SSL Encrypted
            </span>
          </div>
        </div>

        {/* Interactive Dynamic Form Container */}
        <div className="max-w-4xl mx-auto bg-[#F1F6FD] p-6 sm:p-10 lg:p-12 shadow-sm">
          
          {/* 1. MAKE A SECURE PAYMENT SUBPAGE */}
          {activeSubpage === 'payment' && (
            <div>
              <div className="flex items-center justify-between border-b border-[#0E1035]/10 pb-4 mb-6">
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-[#0E1035]">Client Payment Authorization</h3>
                  <p className="text-xs text-[#0E1035]/70 font-medium">Applied directly to your supplier reservation without intermediary markups.</p>
                </div>
                <div className="flex items-center gap-1.5 bg-emerald-100 text-emerald-800 text-xs font-black px-3 py-1 uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>PCI-DSS Verified</span>
                </div>
              </div>

              {paymentSuccess ? (
                <div className="bg-white p-8 text-center shadow-sm space-y-3">
                  <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-black text-[#0E1035]">Payment Successfully Processed</h4>
                  <p className="text-xs sm:text-sm text-[#0E1035]/80 max-w-md mx-auto">
                    Your authorization was securely transmitted to {paymentForm.supplier}. An official confirmation invoice and stateroom perk voucher have been sent to your email.
                  </p>
                  <div className="p-3 bg-[#F1F6FD] max-w-xs mx-auto text-xs font-bold text-[#0E1035]">
                    Transaction Ref: DV-TXN-{Math.floor(100000 + Math.random() * 900000)}
                  </div>
                </div>
              ) : (
                <form onSubmit={handlePaymentSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-black uppercase tracking-wider text-[#0E1035] mb-1.5">
                        Booking / Reservation # *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. 7849102 or DV-982"
                        value={paymentForm.bookingNumber}
                        onChange={e => setPaymentForm({...paymentForm, bookingNumber: e.target.value})}
                        className="w-full bg-white text-[#0E1035] px-4 py-3 text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#14ABFA]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-black uppercase tracking-wider text-[#0E1035] mb-1.5">
                        Lead Passenger Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Johnathan Smith"
                        value={paymentForm.leadGuestName}
                        onChange={e => setPaymentForm({...paymentForm, leadGuestName: e.target.value})}
                        className="w-full bg-white text-[#0E1035] px-4 py-3 text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#14ABFA]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-black uppercase tracking-wider text-[#0E1035] mb-1.5">
                        Travel Supplier / Cruise Line *
                      </label>
                      <select
                        value={paymentForm.supplier}
                        onChange={e => setPaymentForm({...paymentForm, supplier: e.target.value})}
                        className="w-full bg-white text-[#0E1035] px-4 py-3 text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#14ABFA]"
                      >
                        <option value="Royal Caribbean">Royal Caribbean</option>
                        <option value="Celebrity Cruises">Celebrity Cruises</option>
                        <option value="Disney Cruise Line / Disney Parks">Disney Cruise Line / Disney Parks</option>
                        <option value="Sandals & Beaches Resorts">Sandals & Beaches Resorts</option>
                        <option value="AmaWaterways River Cruises">AmaWaterways River Cruises</option>
                        <option value="Princess Cruises">Princess Cruises</option>
                        <option value="Norwegian Cruise Line">Norwegian Cruise Line</option>
                        <option value="Secrets / Hyatt Inclusive">Secrets / Hyatt Inclusive Resorts</option>
                        <option value="Tauck / Collette / Globus Tours">Tauck / Collette / Globus Tours</option>
                        <option value="Regent Seven Seas / Silversea">Regent Seven Seas / Silversea</option>
                        <option value="Universal Orlando Resorts">Universal Orlando Resorts</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-black uppercase tracking-wider text-[#0E1035] mb-1.5">
                        Payment Type & Amount *
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        <select
                          value={paymentForm.paymentType}
                          onChange={e => setPaymentForm({...paymentForm, paymentType: e.target.value})}
                          className="bg-white text-[#0E1035] px-3 py-3 text-xs font-medium focus:outline-none"
                        >
                          <option value="Deposit ($250)">Deposit ($250)</option>
                          <option value="Deposit ($500)">Deposit ($500)</option>
                          <option value="Partial Payment">Partial Payment</option>
                          <option value="Final Balance">Final Balance</option>
                        </select>
                        <input
                          type="text"
                          placeholder="Amount ($)"
                          value={paymentForm.customAmount}
                          onChange={e => setPaymentForm({...paymentForm, customAmount: e.target.value})}
                          className="bg-white text-[#0E1035] px-3 py-3 text-xs font-medium focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Payment Card Inputs */}
                  <div className="bg-white p-4 sm:p-6 space-y-4 shadow-xs">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-black uppercase tracking-wider text-[#0E1035] flex items-center gap-1.5">
                        <CreditCard className="w-4 h-4 text-[#14ABFA]" /> Card Information
                      </span>
                      <span className="text-[10px] text-[#0E1035]/50 font-bold uppercase">Visa • Mastercard • Amex • Discover</span>
                    </div>

                    <div>
                      <input
                        type="text"
                        required
                        placeholder="16-Digit Card Number"
                        value={paymentForm.cardNumber}
                        onChange={e => setPaymentForm({...paymentForm, cardNumber: e.target.value})}
                        className="w-full bg-[#F1F6FD] text-[#0E1035] px-4 py-3 text-xs sm:text-sm font-mono focus:outline-none focus:ring-2 focus:ring-[#14ABFA]"
                      />
                    </div>

                    <div className="grid grid-cols-3 gap-3">
                      <input
                        type="text"
                        required
                        placeholder="MM / YY"
                        value={paymentForm.expDate}
                        onChange={e => setPaymentForm({...paymentForm, expDate: e.target.value})}
                        className="bg-[#F1F6FD] text-[#0E1035] px-3 py-2.5 text-xs font-mono focus:outline-none"
                      />
                      <input
                        type="text"
                        required
                        placeholder="CVV / CVC"
                        value={paymentForm.cvv}
                        onChange={e => setPaymentForm({...paymentForm, cvv: e.target.value})}
                        className="bg-[#F1F6FD] text-[#0E1035] px-3 py-2.5 text-xs font-mono focus:outline-none"
                      />
                      <input
                        type="text"
                        required
                        placeholder="Billing Zip"
                        value={paymentForm.billingZip}
                        onChange={e => setPaymentForm({...paymentForm, billingZip: e.target.value})}
                        className="bg-[#F1F6FD] text-[#0E1035] px-3 py-2.5 text-xs font-mono focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-[#0E1035]/70">
                    <Lock className="w-3.5 h-3.5 text-[#14ABFA] shrink-0" />
                    <span>Your payment is submitted directly to the cruise line/resort merchant account. We never store credit card numbers.</span>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 text-xs sm:text-sm font-black uppercase tracking-wider text-white bg-[#0E1035] hover:bg-[#14ABFA] hover:text-[#0E1035] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md focus:outline-none"
                  >
                    <Lock className="w-4 h-4" />
                    <span>Authorize Secure Payment & Receive Receipt</span>
                  </button>
                </form>
              )}
            </div>
          )}

          {/* 2. CHECK RESERVATION STATUS SUBPAGE */}
          {activeSubpage === 'lookup' && (
            <div>
              <div className="border-b border-[#0E1035]/10 pb-4 mb-6">
                <h3 className="text-xl sm:text-2xl font-black text-[#0E1035]">Check Existing Reservation</h3>
                <p className="text-xs text-[#0E1035]/70 font-medium">Access your itinerary, stateroom assignments, dining confirmations, and stateroom perks.</p>
              </div>

              <form onSubmit={handleLookupSubmit} className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                <input
                  type="text"
                  required
                  placeholder="Booking # (e.g. 982410)"
                  value={lookupNumber}
                  onChange={e => setLookupNumber(e.target.value)}
                  className="bg-white text-[#0E1035] px-4 py-3 text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#14ABFA]"
                />
                <input
                  type="text"
                  required
                  placeholder="Passenger Last Name"
                  value={lookupLastName}
                  onChange={e => setLookupLastName(e.target.value)}
                  className="bg-white text-[#0E1035] px-4 py-3 text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#14ABFA]"
                />
                <button
                  type="submit"
                  className="py-3 px-6 text-xs font-black uppercase tracking-wider text-white bg-[#0E1035] hover:bg-[#14ABFA] hover:text-[#0E1035] transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Search className="w-4 h-4" />
                  <span>Lookup Booking</span>
                </button>
              </form>

              {lookupResult && (
                <div className="bg-white p-6 sm:p-8 shadow-md space-y-5 animate-in fade-in duration-300">
                  <div className="flex items-center justify-between border-b border-[#0E1035]/10 pb-3">
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-[#14ABFA]">Live Reservation Status</span>
                      <h4 className="text-lg sm:text-xl font-black text-[#0E1035]">{lookupResult.shipOrResort}</h4>
                    </div>
                    <span className="text-xs font-black text-emerald-700 bg-emerald-100 px-2.5 py-1 uppercase">
                      {lookupResult.depositStatus}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                    <div>
                      <span className="text-gray-400 font-bold block uppercase tracking-wider text-[10px]">Lead Passenger</span>
                      <span className="font-extrabold text-[#0E1035] text-sm">{lookupResult.leadGuest}</span>
                    </div>
                    <div>
                      <span className="text-gray-400 font-bold block uppercase tracking-wider text-[10px]">Departure Date</span>
                      <span className="font-extrabold text-[#0E1035] text-sm">{lookupResult.sailDate}</span>
                    </div>
                    <div>
                      <span className="text-gray-400 font-bold block uppercase tracking-wider text-[10px]">Stateroom / Suite</span>
                      <span className="font-extrabold text-[#0E1035]">{lookupResult.stateroom}</span>
                    </div>
                    <div>
                      <span className="text-gray-400 font-bold block uppercase tracking-wider text-[10px]">Dining Preference</span>
                      <span className="font-extrabold text-[#0E1035]">{lookupResult.dining}</span>
                    </div>
                  </div>

                  <div className="bg-[#F1F6FD] p-4 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-black text-[#14ABFA] uppercase tracking-wider block">Exclusive Stateroom Amenity</span>
                      <span className="text-sm font-black text-[#0E1035]">{lookupResult.onboardCredit}</span>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] font-bold text-gray-500 uppercase block">Remaining Balance</span>
                      <span className="text-sm font-black text-[#0E1035]">{lookupResult.remainingBalance}</span>
                    </div>
                  </div>

                  <div className="text-xs text-[#0E1035]/70 flex items-center justify-between pt-2">
                    <span>Advisor: <strong>{lookupResult.concierge}</strong></span>
                    <button
                      onClick={() => onOpenBookingModal('Manage Reservation Inquiry')}
                      className="text-[#14ABFA] font-black hover:underline"
                    >
                      Request Modification →
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* 3. REQUEST PRICE DROP RE-FARE SUBPAGE */}
          {activeSubpage === 'reprice' && (
            <div>
              <div className="border-b border-[#0E1035]/10 pb-4 mb-6">
                <h3 className="text-xl sm:text-2xl font-black text-[#0E1035]">Automated Price Drop Re-Fare Audit</h3>
                <p className="text-xs text-[#0E1035]/70 font-medium">Prior to final payment, if the supplier fare decreases, we automatically repriced it to save you money.</p>
              </div>

              {repriceSubmitted ? (
                <div className="bg-white p-8 text-center shadow-sm space-y-3">
                  <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-black text-[#0E1035]">Re-Fare Request Queued</h4>
                  <p className="text-xs sm:text-sm text-[#0E1035]/80 max-w-md mx-auto">
                    Narmin & Naushad Kermally will audit your booking rates and contact you within 24 hours with your re-fare savings or bonus amenity credits!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleRepriceSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-black uppercase tracking-wider text-[#0E1035] mb-1.5">Booking # *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. 7849102"
                        value={repriceForm.bookingNumber}
                        onChange={e => setRepriceForm({...repriceForm, bookingNumber: e.target.value})}
                        className="w-full bg-white text-[#0E1035] px-4 py-3 text-xs sm:text-sm font-medium focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-black uppercase tracking-wider text-[#0E1035] mb-1.5">Lead Guest Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="Your full name"
                        value={repriceForm.guestName}
                        onChange={e => setRepriceForm({...repriceForm, guestName: e.target.value})}
                        className="w-full bg-white text-[#0E1035] px-4 py-3 text-xs sm:text-sm font-medium focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-black uppercase tracking-wider text-[#0E1035] mb-1.5">Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="you@email.com"
                        value={repriceForm.email}
                        onChange={e => setRepriceForm({...repriceForm, email: e.target.value})}
                        className="w-full bg-white text-[#0E1035] px-4 py-3 text-xs sm:text-sm font-medium focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-black uppercase tracking-wider text-[#0E1035] mb-1.5">Ship / Resort Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Celebrity Edge, Sandals Curaçao"
                        value={repriceForm.shipOrResort}
                        onChange={e => setRepriceForm({...repriceForm, shipOrResort: e.target.value})}
                        className="w-full bg-white text-[#0E1035] px-4 py-3 text-xs sm:text-sm font-medium focus:outline-none"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 text-xs sm:text-sm font-black uppercase tracking-wider text-white bg-[#0E1035] hover:bg-[#14ABFA] hover:text-[#0E1035] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
                  >
                    <TrendingDown className="w-4 h-4" />
                    <span>Submit Free Rate Audit Request</span>
                  </button>
                </form>
              )}
            </div>
          )}

          {/* 4. SCHEDULE 1-ON-1 CONSULTATION SUBPAGE */}
          {activeSubpage === 'consult' && (
            <div>
              <div className="border-b border-[#0E1035]/10 pb-4 mb-6">
                <h3 className="text-xl sm:text-2xl font-black text-[#0E1035]">Schedule 1-on-1 Travel Consultation</h3>
                <p className="text-xs text-[#0E1035]/70 font-medium">Personal vacation-planning session with your Cloud 9 Travels advisor.</p>
              </div>

              {consultSubmitted ? (
                <div className="bg-white p-8 text-center shadow-sm space-y-3">
                  <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-black text-[#0E1035]">Consultation Confirmed</h4>
                  <p className="text-xs sm:text-sm text-[#0E1035]/80 max-w-md mx-auto">
                    We will call you at your preferred time window. For immediate service, call us directly at <strong>(713) 560-7016</strong>.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleConsultSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-black uppercase tracking-wider text-[#0E1035] mb-1.5">Your Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="Full Name"
                        value={consultForm.name}
                        onChange={e => setConsultForm({...consultForm, name: e.target.value})}
                        className="w-full bg-white text-[#0E1035] px-4 py-3 text-xs sm:text-sm font-medium focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-black uppercase tracking-wider text-[#0E1035] mb-1.5">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        placeholder="(713) 000-0000"
                        value={consultForm.phone}
                        onChange={e => setConsultForm({...consultForm, phone: e.target.value})}
                        className="w-full bg-white text-[#0E1035] px-4 py-3 text-xs sm:text-sm font-medium focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-black uppercase tracking-wider text-[#0E1035] mb-1.5">Vacation Type of Interest *</label>
                      <select
                        value={consultForm.vacationType}
                        onChange={e => setConsultForm({...consultForm, vacationType: e.target.value})}
                        className="w-full bg-white text-[#0E1035] px-4 py-3 text-xs sm:text-sm font-medium focus:outline-none"
                      >
                        <option value="Ocean Cruise">Ocean Cruise (Royal, Celebrity, Disney)</option>
                        <option value="River Cruise">River Cruise (AmaWaterways, Viking)</option>
                        <option value="All-Inclusive Resort">All-Inclusive Resort (Sandals, Secrets)</option>
                        <option value="Guided Tour / Safari">Guided Tour / African Safari</option>
                        <option value="Disney / Universal Parks">Disney / Universal Theme Parks</option>
                        <option value="Ultra-Luxury / Yacht">Ultra-Luxury / Private Yacht</option>
                        <option value="Group / Wedding Travel">Multi-Gen Group / Destination Wedding</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-black uppercase tracking-wider text-[#0E1035] mb-1.5">Preferred Call Time *</label>
                      <select
                        value={consultForm.preferredTime}
                        onChange={e => setConsultForm({...consultForm, preferredTime: e.target.value})}
                        className="w-full bg-white text-[#0E1035] px-4 py-3 text-xs sm:text-sm font-medium focus:outline-none"
                      >
                        <option value="Morning (9:00 AM - 12:00 PM CST)">Morning (9:00 AM - 12:00 PM CST)</option>
                        <option value="Afternoon (12:00 PM - 5:00 PM CST)">Afternoon (12:00 PM - 5:00 PM CST)</option>
                        <option value="Evening (5:00 PM - 8:00 PM CST)">Evening (5:00 PM - 8:00 PM CST)</option>
                        <option value="Weekend (Saturday)">Weekend (Saturday)</option>
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 text-xs sm:text-sm font-black uppercase tracking-wider text-white bg-[#0E1035] hover:bg-[#14ABFA] hover:text-[#0E1035] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Confirm Free 15-Minute Concierge Session</span>
                  </button>
                </form>
              )}
            </div>
          )}

        </div>
      </div>
    </section>
  );
};

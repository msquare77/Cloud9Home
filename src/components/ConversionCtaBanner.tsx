import React, { useState } from 'react';

interface ConversionCtaBannerProps {
  onOpenBookingModal: () => void;
}

export const ConversionCtaBanner: React.FC<ConversionCtaBannerProps> = ({ onOpenBookingModal }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
    }
  };

  return (
    <section className="pt-20 sm:pt-28 pb-10 sm:pb-14 bg-[#0E1035] text-white relative overflow-hidden">
      {/* Background soft ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-96 bg-[#14ABFA]/10 blur-[130px] pointer-events-none" />

      <div className="w-full max-w-[1640px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 relative z-10">
        <div className="bg-[#121544] p-8 sm:p-14 lg:p-18 shadow-2xl text-center relative overflow-hidden">
          
          <span className="font-signature text-3xl sm:text-5xl text-[#14ABFA] select-none block mb-2">
            Your Dream Getaway
          </span>
          <h2 className="editorial-title text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight max-w-3xl mx-auto mb-6">
            YOUR BESPOKE VOYAGE.<br />
            <span className="text-[#14ABFA]">MAXIMUM COMPLIMENTARY PERKS.</span>
          </h2>

          <p className="text-sm sm:text-base text-[#F1F6FD]/75 max-w-2xl mx-auto font-normal mb-10 leading-relaxed">
            Tell us where you wish to travel. We’ll help build a personalized vacation plan and confirm current supplier pricing, availability, and applicable offers.
          </p>

          {/* Primary CTA Button */}
          <div className="flex justify-center mb-12">
            <button
              onClick={onOpenBookingModal}
              className="px-8 py-3.5 text-[#14ABFA] hover:text-white font-black text-xs sm:text-sm uppercase tracking-[0.2em] transition-all duration-300 cursor-pointer focus:outline-none border-b-2 border-[#14ABFA] hover:border-white"
            >
              Claim Free Stateroom Quote & Bonus Credit
            </button>
          </div>

          {/* Clean Trust Pillars */}
          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-12 text-xs sm:text-sm text-[#F1F6FD]/70 font-semibold tracking-wider mb-12">
            <span className="text-white font-bold">100% Free Service & Advice</span>
            <span className="hidden sm:inline text-white/30">•</span>
            <span className="text-white font-bold">Automatic Price-Drop Protection</span>
            <span className="hidden sm:inline text-white/30">•</span>
            <span className="text-white font-bold">Dedicated 1-on-1 Advisor</span>
          </div>

          {/* Minimalist Price-Drop Alert Input */}
          <div className="pt-10 border-t border-white/10 max-w-lg mx-auto">
            <p className="text-xs font-bold text-white/90 uppercase tracking-wider mb-4">
              Join the VIP Secret Deal & Price-Drop List
            </p>

            {subscribed ? (
              <div className="p-3.5 text-emerald-400 text-xs font-bold flex items-center justify-center gap-2">
                ✓ You're on the VIP Secret Deal List! We'll notify you first.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2.5">
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-white/10 px-5 py-3.5 text-xs text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#14ABFA]"
                />
                <button
                  type="submit"
                  className="px-6 py-3.5 text-[#14ABFA] hover:text-white text-xs font-black uppercase tracking-wider transition-colors shrink-0 cursor-pointer border-b-2 border-[#14ABFA] hover:border-white"
                >
                  Join List
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

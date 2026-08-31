import React, { useState } from 'react';
import { Check, ArrowRight } from 'lucide-react';

// Keep this section dormant until Cloud 9's exact complimentary amenity values
// are confirmed by an official supplier or Dream Vacations offer source.
const SHOW_PERKS_CALCULATOR = false;

interface PerkOption {
  id: string;
  name: string;
  value: number;
  description: string;
  defaultSelected: boolean;
}

interface PerksCalculatorProps {
  onOpenBookingModal: () => void;
}

export const PerksCalculator: React.FC<PerksCalculatorProps> = ({ onOpenBookingModal }) => {
  const [selectedPerks, setSelectedPerks] = useState<string[]>([
    'onboard_cash',
    'gratuities',
    'wifi',
    'drinks'
  ]);

  const perksList: PerkOption[] = [
    {
      id: 'onboard_cash',
      name: 'Free Stateroom Spending Credit',
      value: 350,
      description: 'Spend like cash onboard on spa treatments, specialty dining, shopping or shore excursions.',
      defaultSelected: true
    },
    {
      id: 'gratuities',
      name: 'Pre-Paid Crew Gratuities & Tips',
      value: 238,
      description: 'Stateroom steward and dining staff gratuities 100% pre-covered.',
      defaultSelected: true
    },
    {
      id: 'wifi',
      name: 'High-Speed Multi-Device Wi-Fi',
      value: 175,
      description: 'VOOM / Starlink streaming internet for family devices.',
      defaultSelected: true
    },
    {
      id: 'drinks',
      name: 'Unlimited Open Bar / Beverage Package',
      value: 560,
      description: 'Premium cocktails, fine wines by the glass, draft beers, and specialty coffees.',
      defaultSelected: true
    },
    {
      id: 'dining',
      name: 'Specialty Dining Experience for Two',
      value: 130,
      description: 'Prime steakhouse, authentic teppanyaki, or French bistro multi-course dinner.',
      defaultSelected: false
    },
    {
      id: 'excursion',
      name: 'Shore Excursion & Port Credit',
      value: 100,
      description: 'Guided snorkel, private catamaran, or ancient ruins excursion voucher.',
      defaultSelected: false
    }
  ];

  const togglePerk = (id: string) => {
    if (selectedPerks.includes(id)) {
      setSelectedPerks(selectedPerks.filter(p => p !== id));
    } else {
      setSelectedPerks([...selectedPerks, id]);
    }
  };

  const totalValue = perksList
    .filter(p => selectedPerks.includes(p.id))
    .reduce((sum, p) => sum + p.value, 0);

  return (
    <section
      id="perks-section"
      className={`${SHOW_PERKS_CALCULATOR ? '' : 'hidden'} py-20 sm:py-28 bg-white`}
      aria-hidden={!SHOW_PERKS_CALCULATOR}
    >
      <div className="w-full max-w-[1640px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="font-signature text-3xl sm:text-4xl text-[#14ABFA] select-none block mb-1">
            Complimentary Bundled Value
          </span>
          <h2 className="editorial-title text-3xl sm:text-5xl lg:text-6xl text-[#0E1035] leading-tight">
            CALCULATE BUNDLED AMENITIES
          </h2>
          <p className="text-sm sm:text-base text-[#0E1035]/75 font-normal mt-3 leading-relaxed">
            Select the amenities for your voyage and see the total complimentary value bundled directly into your Cloud 9 booking.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-start">
          {/* Perk Toggles */}
          <div className="lg:col-span-7 space-y-3.5">
            {perksList.map((perk) => {
              const isChecked = selectedPerks.includes(perk.id);
              return (
                <div
                  key={perk.id}
                  onClick={() => togglePerk(perk.id)}
                  className={`p-5 transition-all duration-200 cursor-pointer flex items-center justify-between gap-4 ${
                    isChecked
                      ? 'bg-[#E8F1FC] shadow-xs'
                      : 'bg-[#F1F6FD]/60 hover:bg-[#F1F6FD]'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-5 h-5 flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                      isChecked ? 'bg-[#14ABFA] text-[#0E1035]' : 'bg-[#0E1035]/15'
                    }`}>
                      {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                    </div>
                    <div>
                      <div className="text-sm sm:text-base font-bold uppercase tracking-tight text-[#0E1035]">
                        {perk.name}
                      </div>
                      <p className="text-xs text-[#0E1035]/65 mt-1 leading-relaxed">
                        {perk.description}
                      </p>
                    </div>
                  </div>

                  <div className="text-right shrink-0">
                    <span className="text-sm sm:text-base font-black text-[#14ABFA]">
                      +${perk.value}
                    </span>
                    <span className="text-[9px] text-[#0E1035]/50 block font-bold uppercase tracking-wider mt-0.5">
                      VALUE
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Value Summary Card */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="bg-[#0E1035] p-8 sm:p-10 text-white shadow-xl relative overflow-hidden">
              <span className="text-[10px] font-black uppercase tracking-[0.25em] text-[#14ABFA] block mb-2">
                Complimentary Inclusions
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-6">
                Total Perks Value
              </h3>

              <div className="bg-white/5 p-6 mb-8 text-center">
                <div className="text-4xl sm:text-6xl font-black text-[#14ABFA] tracking-tight">
                  ${totalValue.toLocaleString()}
                </div>
                <p className="text-xs text-[#F1F6FD]/70 uppercase tracking-widest font-semibold mt-2">
                  Complimentary Value Per Cabin
                </p>
              </div>

              <ul className="space-y-3 mb-8 text-xs text-[#F1F6FD]/80">
                <li className="flex items-center justify-between border-b border-white/10 pb-2">
                  <span>Selected Perks</span>
                  <span className="font-bold text-white">{selectedPerks.length} of {perksList.length}</span>
                </li>
                <li className="flex items-center justify-between border-b border-white/10 pb-2">
                  <span>Agency Booking Fee</span>
                  <span className="font-black text-emerald-400">$0 (100% Free)</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Lowest Fare Guarantee</span>
                  <span className="font-bold text-[#14ABFA]">Locked In</span>
                </li>
              </ul>

              <button
                onClick={onOpenBookingModal}
                className="w-full py-4 bg-[#14ABFA] hover:bg-white text-[#0E1035] font-black text-xs uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <span>Claim This Perks Package</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

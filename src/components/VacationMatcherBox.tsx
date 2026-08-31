import React, { useMemo, useState } from 'react';
import { CRUISE_DEALS } from '../data/cruiseData';
import { LUXURY_PACKAGES, RESORTS_PACKAGES, TOURS_PACKAGES } from '../data/dreamVacationsData';

interface VacationMatcherBoxProps {
  onNavigateToMatch: (sectionId: string, subpageKey?: string) => void;
}

const QUESTIONS = [
  {
    id: 'vacationType',
    label: 'What kind of vacation are you dreaming about?',
    options: ['Cruise', 'Resort', 'Guided Tour', 'Luxury Vacation'],
  },
  {
    id: 'setting',
    label: 'Which setting sounds best?',
    options: ['Caribbean', 'Mexico', 'Multiple Destinations', 'Anywhere Inspiring'],
  },
  {
    id: 'pace',
    label: 'How would you like to travel?',
    options: ['Relaxed', 'Family Friendly', 'Guided & Organized', 'Private & Personalized'],
  },
  {
    id: 'priority',
    label: 'What matters most?',
    options: ['Ocean Views', 'Resort Comfort', 'Cultural Discovery', 'Premium Service'],
  },
] as const;

export const VacationMatcherBox: React.FC<VacationMatcherBoxProps> = ({ onNavigateToMatch }) => {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const complete = QUESTIONS.every(question => answers[question.id]);

  const match = useMemo(() => {
    if (!complete) return null;
    const type = answers.vacationType;
    const setting = answers.setting;
    const pace = answers.pace;
    const priority = answers.priority;

    const settingScore = (content: string) => {
      const value = content.toLowerCase();
      if (setting === 'Caribbean') return value.includes('caribbean') || value.includes('bahamas') || value.includes('curaçao') ? 8 : 0;
      if (setting === 'Mexico') return value.includes('mexico') || value.includes('cancun') || value.includes('riviera maya') ? 8 : 0;
      if (setting === 'Multiple Destinations') return value.includes('europe') || value.includes('world') || value.includes('mediterranean') ? 6 : 2;
      return 2;
    };

    if (type === 'Resort') {
      const item = [...RESORTS_PACKAGES].sort((a, b) => {
        const score = (resort: typeof a) => settingScore(`${resort.location} ${resort.region}`)
          + (pace === 'Family Friendly' && resort.category === 'family_resorts' ? 6 : 0)
          + (pace === 'Relaxed' && resort.category === 'adults_only' ? 5 : 0)
          + (priority === 'Resort Comfort' ? resort.rating : 0);
        return score(b) - score(a);
      })[0];
      return {
        title: item.resortName,
        description: `${item.location} • ${item.durationNights} nights • ${item.categoryLabel}`,
        imageUrl: item.imageUrl,
        partner: item.brand,
        sectionId: 'resorts-section',
        subpageKey: setting === 'Mexico' ? 'mexico' : setting === 'Caribbean' ? 'caribbean' : 'all',
      };
    }
    if (type === 'Guided Tour') {
      const item = [...TOURS_PACKAGES].sort((a, b) => {
        const score = (tour: typeof a) => settingScore(`${tour.destination} ${tour.region}`)
          + (pace === 'Private & Personalized' && tour.category === 'custom' ? 10 : 0)
          + (pace === 'Guided & Organized' && tour.category === 'guided' ? 8 : 0)
          + (pace === 'Relaxed' && tour.activityLevel === 'Relaxed' ? 5 : 0)
          + (priority === 'Cultural Discovery' ? tour.rating : 0);
        return score(b) - score(a);
      })[0];
      return {
        title: item.tourName,
        description: `${item.destination} • ${item.durationDays} days • ${item.categoryLabel}`,
        imageUrl: item.imageUrl,
        partner: item.operator,
        sectionId: 'tours-section',
        subpageKey: pace === 'Private & Personalized' ? 'custom' : 'guided',
      };
    }
    if (type === 'Luxury Vacation') {
      const item = [...LUXURY_PACKAGES].sort((a, b) => {
        const score = (luxury: typeof a) => settingScore(luxury.destination)
          + (priority === 'Resort Comfort' && luxury.category === 'luxury_villas' ? 10 : 0)
          + (priority === 'Ocean Views' && luxury.category === 'luxury_ocean' ? 10 : 0)
          + (pace === 'Private & Personalized' && (luxury.category === 'bespoke' || luxury.category === 'yacht_charters') ? 7 : 0)
          + luxury.rating;
        return score(b) - score(a);
      })[0];
      return {
        title: item.propertyName,
        description: `${item.destination} • ${item.duration} • ${item.suiteType}`,
        imageUrl: item.imageUrl,
        partner: item.supplier,
        sectionId: 'luxury-section',
        subpageKey: item.category === 'luxury_villas' ? 'luxury_villas' : 'luxury_ocean',
      };
    }
    const item = [...CRUISE_DEALS].sort((a, b) => {
      const score = (cruise: typeof a) => settingScore(`${cruise.destination} ${cruise.region}`)
        + (pace === 'Family Friendly' ? cruise.familyFriendlyScore / 10 : 0)
        + (priority === 'Premium Service' ? cruise.luxuryScore / 10 : 0)
        + (priority === 'Ocean Views' && cruise.category === 'ocean_cruise' ? 5 : 0);
      return score(b) - score(a);
    })[0];
    return {
      title: item.title,
      description: `${item.cruiseLine} • ${item.shipName} • ${item.durationNights} nights`,
      imageUrl: item.imageUrl,
      partner: item.cruiseLine,
      sectionId: 'cruises-section',
      subpageKey: 'featured',
    };
  }, [answers, complete]);

  return (
    <div className="bg-white shadow-xs p-6 sm:p-9 mb-14">
      <div className="mb-7">
        <h2 className="text-xl sm:text-2xl font-bold text-[#0E1035] tracking-tight leading-tight">
          Find Your Perfect Ship & Vibe
        </h2>
        <p className="text-xs text-[#0E1035]/65 font-normal mt-1">Questions</p>
      </div>

      <div className="space-y-7">
        {QUESTIONS.map((question, questionIndex) => (
          <fieldset key={question.id}>
            <legend className="text-sm font-bold text-[#0E1035] mb-3">
              {questionIndex + 1}. {question.label}
            </legend>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
              {question.options.map(option => {
                const selected = answers[question.id] === option;
                return (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setAnswers(current => ({ ...current, [question.id]: option }))}
                    className={`flex items-center gap-3 px-4 py-3 text-left text-xs font-semibold transition-colors cursor-pointer ${
                      selected ? 'bg-[#0E1035] text-white' : 'bg-[#F1F6FD] text-[#0E1035] hover:bg-[#14ABFA]/15'
                    }`}
                    aria-pressed={selected}
                  >
                    <span className={`w-4 h-4 rounded-full shrink-0 flex items-center justify-center ${selected ? 'bg-[#14ABFA]' : 'bg-white shadow-inner'}`}>
                      {selected && <span className="text-[10px] leading-none font-black text-[#0E1035]">✓</span>}
                    </span>
                    <span>{option}</span>
                  </button>
                );
              })}
            </div>
          </fieldset>
        ))}
      </div>

      <div className={`mt-8 p-5 sm:p-6 ${match ? 'bg-[#0E1035] text-white' : 'bg-[#F1F6FD] text-[#0E1035]/60'}`}>
        {match ? (
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5">
            <div className="flex items-center gap-4 min-w-0">
              <img src={match.imageUrl} alt={match.title} className="site-content-image w-24 h-20 object-cover shrink-0" referrerPolicy="no-referrer" />
              <div className="min-w-0">
              <span className="text-[10px] uppercase tracking-widest font-black text-[#14ABFA]">Your Vacation Match</span>
              <h3 className="text-lg sm:text-xl font-extrabold text-white mt-1">{match.title}</h3>
              <p className="text-xs text-white/75 mt-1">{match.description}</p>
              <p className="text-[10px] text-[#2FE0C0] font-bold uppercase tracking-wider mt-1">{match.partner}</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => onNavigateToMatch(match.sectionId, match.subpageKey)}
              className="shrink-0 px-6 py-3 bg-[#14ABFA] text-[#0E1035] text-xs font-black uppercase tracking-wider cursor-pointer"
            >
              View Matched Vacations
            </button>
          </div>
        ) : (
          <p className="text-xs font-semibold">Select one answer in each row to reveal your related vacation.</p>
        )}
      </div>
    </div>
  );
};

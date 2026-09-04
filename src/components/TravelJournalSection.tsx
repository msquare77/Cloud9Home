import React, { useMemo, useState } from 'react';
import { Search } from 'lucide-react';
import { TRAVEL_JOURNAL_ARTICLES, TRAVEL_JOURNAL_CATEGORIES, getFeaturedArticle } from '../data/travelJournalData';
import { TravelJournalArticleCard } from './TravelJournalArticleCard';

interface TravelJournalSectionProps {
  onOpenArticle: (slug: string) => void;
}

export const TravelJournalSection: React.FC<TravelJournalSectionProps> = ({ onOpenArticle }) => {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');

  const featured = useMemo(() => getFeaturedArticle(), []);

  const filtered = useMemo(() => {
    return TRAVEL_JOURNAL_ARTICLES.filter((a) => {
      const matchesCategory = category === 'All' || a.categories.includes(category);
      if (!matchesCategory) return false;
      if (!query.trim()) return true;
      const haystack = [a.title, a.excerpt, a.category, ...a.categories, a.destination || '', ...a.tags]
        .join(' ')
        .toLowerCase();
      return haystack.includes(query.trim().toLowerCase());
    });
  }, [query, category]);

  return (
    <>
      {/* Hero */}
      <section id="travel-journal-section" className="relative pt-12 pb-16 lg:pb-20 overflow-hidden bg-[#F1F6FD]">
        <div className="w-full max-w-[1640px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-7">
              <span className="font-signature text-3xl sm:text-4xl lg:text-5xl text-[#14ABFA] select-none block mb-2">
                The Travel Journal
              </span>
              <h1 className="editorial-title text-4xl sm:text-6xl md:text-7xl text-[#0E1035] mb-5 leading-[0.95] tracking-tight">
                STORIES FROM THE <br /> PLACES WE LOVE.
              </h1>
              <p className="text-base sm:text-lg leading-relaxed text-[#0E1035]/75 max-w-xl font-normal">
                Travel stories, little lessons, favorite moments and the things we've learned along the way.
              </p>
            </div>
            <div className="lg:col-span-5">
              {/* IMAGE PLACEHOLDER — journal hero photography */}
              <div className="relative aspect-[4/5] w-full bg-gradient-to-br from-[#0E1035]/10 to-[#14ABFA]/10 shadow-xl flex items-center justify-center p-6">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#0E1035]/40 text-center">
                  Image placeholder — journal hero
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Story */}
      <section className="py-10 sm:py-14 bg-[#F1F6FD]">
        <div className="w-full max-w-[1640px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center bg-white shadow-[0_18px_55px_rgba(14,16,53,0.08)] p-6 sm:p-8">
            {/* IMAGE PLACEHOLDER — featured story photography */}
            <div className="relative aspect-[16/11] w-full bg-gradient-to-br from-[#0E1035]/10 to-[#14ABFA]/10 flex items-center justify-center p-4">
              <span className="text-[10px] font-semibold uppercase tracking-widest text-[#0E1035]/40 text-center">
                Image placeholder — {featured.title}
              </span>
            </div>
            <div>
              <span className="inline-block text-[10px] font-semibold uppercase tracking-widest text-[#14ABFA] bg-[#14ABFA]/10 px-2.5 py-1 mb-4">
                {featured.category}
              </span>
              <h2 className="editorial-title text-2xl sm:text-3xl lg:text-4xl text-[#0E1035] mb-4 leading-tight">
                {featured.title}
              </h2>
              <p className="text-sm sm:text-base text-[#0E1035]/70 leading-relaxed mb-5 max-w-lg font-normal">
                {featured.excerpt}
              </p>
              <p className="text-xs font-semibold text-[#0E1035]/50 mb-6">{featured.readTime} min read</p>
              <button
                type="button"
                onClick={() => onOpenArticle(featured.slug)}
                className="px-6 py-3 bg-[#0E1035] hover:bg-[#14ABFA] text-white hover:text-[#0E1035] text-xs font-black uppercase tracking-wider transition-colors cursor-pointer"
              >
                Read Story
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Journal Library */}
      <section className="py-14 sm:py-20 bg-[#F1F6FD]">
        <div className="w-full max-w-[1640px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
          <div className="max-w-2xl mb-10">
            <span className="font-signature text-2xl sm:text-3xl text-[#14ABFA] select-none block mb-1">
              The Journal
            </span>
            <h2 className="editorial-title text-2xl sm:text-4xl text-[#0E1035] leading-tight mb-3">
              STORIES WORTH TAKING WITH YOU.
            </h2>
            <p className="text-sm sm:text-base text-[#0E1035]/70 leading-relaxed font-normal">
              From glacier mornings to Caribbean afternoons, safari drives and days at sea — these are
              the moments, lessons and places that stay with us.
            </p>
          </div>

          {/* Search + Category Pills */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-3">
            <div className="relative w-full sm:max-w-xs">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#0E1035]/40" />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search the journal…"
                aria-label="Search the journal"
                className="w-full bg-white pl-10 pr-4 py-3 text-sm font-medium text-[#0E1035] focus:outline-none focus:ring-2 focus:ring-[#14ABFA] transition-all"
              />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-1 sm:flex-wrap sm:overflow-visible" role="group" aria-label="Filter by category">
              {TRAVEL_JOURNAL_CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setCategory(cat)}
                  aria-pressed={category === cat}
                  className={`shrink-0 px-4 py-2 text-xs font-bold uppercase tracking-wide transition-colors cursor-pointer focus:outline-none ${
                    category === cat
                      ? 'bg-[#14ABFA] text-white'
                      : 'bg-white text-[#0E1035] hover:bg-[#14ABFA]/10'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <p className="text-xs font-semibold text-[#0E1035]/50 mb-8" aria-live="polite">
            {filtered.length === TRAVEL_JOURNAL_ARTICLES.length
              ? `Showing all ${filtered.length} stories`
              : `Showing ${filtered.length} ${filtered.length === 1 ? 'story' : 'stories'}`}
          </p>

          {filtered.length === 0 ? (
            <p className="text-center py-16 text-[#0E1035]/50 text-sm">
              No stories match that search just yet — try a different word or category.
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {filtered.map((article) => (
                <TravelJournalArticleCard key={article.slug} article={article} onOpen={onOpenArticle} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

import React from 'react';
import { ArrowLeft } from 'lucide-react';
import {
  TRAVEL_JOURNAL_ARTICLES,
  TravelJournalArticle,
  TravelJournalBodyBlock,
  getArticleBySlug
} from '../data/travelJournalData';
import { TravelJournalArticleCard } from './TravelJournalArticleCard';

interface TravelJournalArticlePageProps {
  slug: string;
  onBack: () => void;
  onOpenArticle: (slug: string) => void;
  onOpenBookingModal: (dealTitle?: string) => void;
}

export const TravelJournalArticlePage: React.FC<TravelJournalArticlePageProps> = ({
  slug,
  onBack,
  onOpenArticle,
  onOpenBookingModal
}) => {
  const article = getArticleBySlug(slug);

  if (!article) {
    return (
      <section className="py-24 bg-[#F1F6FD]">
        <div className="w-full max-w-[1640px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 text-center">
          <h1 className="editorial-title text-3xl text-[#0E1035] mb-4">STORY NOT FOUND</h1>
          <p className="text-[#0E1035]/70 mb-6">That story may have moved.</p>
          <button
            type="button"
            onClick={onBack}
            className="px-6 py-3 bg-[#0E1035] hover:bg-[#14ABFA] text-white hover:text-[#0E1035] text-xs font-black uppercase tracking-wider transition-colors cursor-pointer"
          >
            Browse the Travel Journal
          </button>
        </div>
      </section>
    );
  }

  const bodyBlocks: TravelJournalBodyBlock[] = [...article.body];
  if (article.pullQuote && bodyBlocks.length > 2) {
    const mid = Math.floor(bodyBlocks.length / 2);
    bodyBlocks.splice(mid, 0, { type: 'highlight', text: article.pullQuote });
  }

  const idx = TRAVEL_JOURNAL_ARTICLES.findIndex((a) => a.slug === article.slug);
  const prev = idx > 0 ? TRAVEL_JOURNAL_ARTICLES[idx - 1] : null;
  const next = idx < TRAVEL_JOURNAL_ARTICLES.length - 1 ? TRAVEL_JOURNAL_ARTICLES[idx + 1] : null;

  let related = article.relatedSlugs
    .map(getArticleBySlug)
    .filter((a): a is TravelJournalArticle => !!a && a.slug !== article.slug);
  if (related.length === 0) {
    related = TRAVEL_JOURNAL_ARTICLES.filter(
      (a) => a.slug !== article.slug && a.categories.some((c) => article.categories.includes(c))
    );
  }
  related = related.slice(0, 3);

  return (
    <>
      <section className="pt-8 pb-4 bg-[#F1F6FD]">
        <div className="w-full max-w-[1640px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0E1035] hover:text-[#14ABFA] transition-colors cursor-pointer focus:outline-none"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to Travel Journal
          </button>
        </div>
      </section>

      <section className="pt-4 pb-8 sm:pb-12 bg-[#F1F6FD]">
        <div className="w-full max-w-[1640px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
          <span className="inline-block text-[10px] font-semibold uppercase tracking-widest text-[#14ABFA] bg-[#14ABFA]/10 px-2.5 py-1 mb-4">
            {article.category}
            {article.destination ? ` · ${article.destination}` : ''}
          </span>
          <h1 className="editorial-title text-3xl sm:text-5xl lg:text-6xl text-[#0E1035] mb-5 leading-[1.02] max-w-4xl">
            {article.title}
          </h1>
          <p className="text-base sm:text-lg text-[#0E1035]/70 leading-relaxed max-w-2xl mb-4 font-normal">
            {article.deck}
          </p>
          <p className="text-xs font-semibold text-[#0E1035]/50 mb-8">
            {article.readTime} min read
            {article.publishDate ? ` · ${article.publishDate}` : ''}
          </p>
          {/* IMAGE PLACEHOLDER — article hero photography */}
          <div className="relative aspect-[21/9] w-full bg-gradient-to-br from-[#0E1035]/10 to-[#14ABFA]/10 shadow-xl flex items-center justify-center p-6">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#0E1035]/40 text-center">
              Image placeholder — {article.title}
            </span>
          </div>
        </div>
      </section>

      <section className="pb-16 sm:pb-24 bg-[#F1F6FD]">
        <div className="w-full max-w-[1640px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
          {Object.keys(article.travelNotes).length > 0 && (
            <aside className="max-w-2xl mx-auto bg-white border-l-4 border-[#14ABFA] shadow-[0_10px_30px_rgba(14,16,53,0.06)] p-6 sm:p-7 mb-10">
              <p className="text-[10px] font-black uppercase tracking-widest text-[#14ABFA] mb-4">
                Travel Notes
              </p>
              <dl className="space-y-3">
                {Object.entries(article.travelNotes).map(([label, value]) => (
                  <div key={label}>
                    <dt className="text-sm font-bold text-[#0E1035]">{label}</dt>
                    <dd className="text-sm text-[#0E1035]/70 mt-0.5 font-normal">{value}</dd>
                  </div>
                ))}
              </dl>
            </aside>
          )}

          <div className="max-w-2xl mx-auto text-[#0E1035]/85 text-base leading-relaxed">
            {bodyBlocks.map((block, i) => {
              switch (block.type) {
                case 'p':
                  return (
                    <p key={i} className="mb-5 font-normal">
                      {block.text}
                    </p>
                  );
                case 'h2':
                  return (
                    <h2 key={i} className="editorial-title text-xl sm:text-2xl text-[#0E1035] mt-10 mb-4">
                      {block.text}
                    </h2>
                  );
                case 'h3':
                  return (
                    <h3 key={i} className="text-lg font-extrabold text-[#0E1035] mt-8 mb-3">
                      {block.text}
                    </h3>
                  );
                case 'ul':
                  return (
                    <ul key={i} className="list-disc pl-5 mb-5 space-y-2 font-normal">
                      {block.items?.map((item, j) => (
                        <li key={j}>{item}</li>
                      ))}
                    </ul>
                  );
                case 'ol':
                  return (
                    <ol key={i} className="list-decimal pl-5 mb-5 space-y-2 font-normal">
                      {block.items?.map((item, j) => (
                        <li key={j}>{item}</li>
                      ))}
                    </ol>
                  );
                case 'highlight':
                  return (
                    <blockquote
                      key={i}
                      className="font-signature text-2xl sm:text-3xl text-[#14ABFA] border-l-4 border-[#14ABFA] pl-6 my-10 leading-snug"
                    >
                      {block.text}
                    </blockquote>
                  );
                default:
                  return null;
              }
            })}
          </div>

          {(prev || next) && (
            <div className="max-w-2xl mx-auto flex items-center justify-between gap-6 pt-8 mt-10 border-t border-[#0E1035]/10">
              {prev ? (
                <button
                  type="button"
                  onClick={() => onOpenArticle(prev.slug)}
                  className="text-left max-w-[45%] cursor-pointer group focus:outline-none"
                >
                  <span className="text-xs font-semibold text-[#0E1035]/50 group-hover:text-[#14ABFA]">
                    ← Previous
                  </span>
                  <span className="block text-sm font-bold text-[#0E1035] group-hover:text-[#14ABFA] mt-1">
                    {prev.title}
                  </span>
                </button>
              ) : (
                <span />
              )}
              {next && (
                <button
                  type="button"
                  onClick={() => onOpenArticle(next.slug)}
                  className="text-right max-w-[45%] ml-auto cursor-pointer group focus:outline-none"
                >
                  <span className="text-xs font-semibold text-[#0E1035]/50 group-hover:text-[#14ABFA]">
                    Next →
                  </span>
                  <span className="block text-sm font-bold text-[#0E1035] group-hover:text-[#14ABFA] mt-1">
                    {next.title}
                  </span>
                </button>
              )}
            </div>
          )}
        </div>
      </section>

      {related.length > 0 && (
        <section className="pb-16 sm:pb-24 bg-[#F1F6FD]">
          <div className="w-full max-w-[1640px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
            <span className="font-signature text-2xl sm:text-3xl text-[#14ABFA] select-none block mb-1">
              Keep Exploring
            </span>
            <h2 className="editorial-title text-2xl sm:text-3xl text-[#0E1035] leading-tight mb-8">
              MORE STORIES FROM THE JOURNEY.
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {related.map((a) => (
                <TravelJournalArticleCard key={a.slug} article={a} onOpen={onOpenArticle} />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-16 sm:py-20 bg-[#0E1035] text-center">
        <div className="w-full max-w-[1640px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
          <span className="text-[10px] font-semibold uppercase tracking-widest text-[#14ABFA] block mb-3">
            Ready for Your Own Story?
          </span>
          <h2 className="editorial-title text-2xl sm:text-4xl text-white leading-tight mb-4">
            WHERE SHOULD WE GO NEXT?
          </h2>
          <p className="text-sm sm:text-base text-white/70 max-w-lg mx-auto mb-7 leading-relaxed font-normal">
            Tell us what kind of trip you're dreaming about. We'll help you turn it into one worth
            talking about.
          </p>
          <button
            type="button"
            onClick={() => onOpenBookingModal()}
            className="px-7 py-3.5 bg-[#14ABFA] hover:bg-white text-[#0E1035] text-xs font-black uppercase tracking-wider transition-colors cursor-pointer"
          >
            Start Planning
          </button>
        </div>
      </section>
    </>
  );
};

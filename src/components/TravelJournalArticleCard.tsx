import React from 'react';
import { ArrowRight } from 'lucide-react';
import { TravelJournalArticle } from '../data/travelJournalData';

interface TravelJournalArticleCardProps {
  article: TravelJournalArticle;
  onOpen: (slug: string) => void;
}

export const TravelJournalArticleCard: React.FC<TravelJournalArticleCardProps> = ({ article, onOpen }) => {
  return (
    <article className="group bg-white shadow-[0_10px_30px_rgba(14,16,53,0.06)] hover:shadow-[0_18px_45px_rgba(14,16,53,0.12)] transition-shadow duration-300 flex flex-col overflow-hidden">
      <button
        type="button"
        onClick={() => onOpen(article.slug)}
        className="relative aspect-[4/3] w-full overflow-hidden text-left cursor-pointer focus:outline-none"
      >
        {/* IMAGE PLACEHOLDER — replace with real photography at this article's slug */}
        <div className="w-full h-full bg-gradient-to-br from-[#0E1035]/10 to-[#14ABFA]/10 flex items-center justify-center p-4 transition-transform duration-500 group-hover:scale-105">
          <span className="text-[10px] font-semibold uppercase tracking-widest text-[#0E1035]/40 text-center">
            Image placeholder — {article.title}
          </span>
        </div>
      </button>
      <div className="p-5 sm:p-6 flex flex-col flex-1">
        <span className="self-start text-[10px] font-semibold uppercase tracking-widest text-[#14ABFA] bg-[#14ABFA]/10 px-2.5 py-1 mb-3">
          {article.category}
        </span>
        <h3 className="text-lg font-extrabold text-[#0E1035] leading-snug mb-2">
          <button
            type="button"
            onClick={() => onOpen(article.slug)}
            className="text-left hover:text-[#14ABFA] transition-colors cursor-pointer focus:outline-none"
          >
            {article.title}
          </button>
        </h3>
        <p className="text-sm text-[#0E1035]/65 leading-relaxed mb-4 flex-1">
          {article.excerpt}
        </p>
        <p className="text-xs text-[#0E1035]/50 font-semibold mb-3">
          {article.readTime} min read{article.destination ? ` · ${article.destination}` : ''}
        </p>
        <button
          type="button"
          onClick={() => onOpen(article.slug)}
          className="self-start inline-flex items-center gap-1.5 text-xs font-bold text-[#0E1035] hover:text-[#14ABFA] transition-colors cursor-pointer group/link focus:outline-none"
        >
          Read Story
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
        </button>
      </div>
    </article>
  );
};

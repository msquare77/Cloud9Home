import React, { useState } from 'react';
import { X, Check } from 'lucide-react';
import { TravelTip } from '../types';

interface ArticleReaderModalProps {
  article: TravelTip | null;
  onClose: () => void;
  onOpenBookingModal: (context?: string) => void;
}

export const ArticleReaderModal: React.FC<ArticleReaderModalProps> = ({
  article,
  onClose,
  onOpenBookingModal
}) => {
  const [checkedItems, setCheckedItems] = useState<Record<number, boolean>>({});
  const [copied, setCopied] = useState(false);

  if (!article) return null;

  const toggleCheck = (index: number) => {
    setCheckedItems(prev => ({ ...prev, [index]: !prev[index] }));
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handlePrint = () => {
    // Generate a dedicated, clean printable iframe/window to guarantee flawless printing in all environments
    const printWindow = window.open('', '_blank', 'width=850,height=1100');
    
    const checklistHtml = article.fullArticle?.checklist && article.fullArticle.checklist.length > 0
      ? `
        <div class="print-box">
          <h3 style="margin-top:0;font-size:16px;text-transform:uppercase;letter-spacing:1px;color:#0E1035;">Interactive Pre-Sailing Checklist</h3>
          <ul style="list-style:none;padding:0;margin:0;">
            ${article.fullArticle.checklist.map((item, idx) => `
              <li style="padding:6px 0;border-bottom:1px dashed #e2e8f0;display:flex;align-items:center;font-size:13px;">
                <span style="display:inline-block;width:14px;height:14px;border:1.5px solid #0E1035;margin-right:10px;"></span>
                ${item}
              </li>
            `).join('')}
          </ul>
        </div>
      `
      : '';

    const sectionsHtml = article.fullArticle?.sections
      ? article.fullArticle.sections.map(s => `
        <div style="margin-bottom:20px;">
          <h2 style="font-size:17px;color:#0E1035;border-bottom:1.5px solid #0E1035;padding-bottom:4px;margin-bottom:8px;">${s.heading}</h2>
          <p style="font-size:13.5px;line-height:1.6;color:#334155;">${s.content}</p>
          ${s.takeaways && s.takeaways.length > 0 ? `
            <div style="background:#F1F6FD;padding:10px 14px;margin-top:8px;font-size:12.5px;">
              <strong>Key Strategy Takeaways:</strong>
              <ul style="margin:4px 0 0 16px;padding:0;">
                ${s.takeaways.map(t => `<li style="margin-bottom:3px;">${t}</li>`).join('')}
              </ul>
            </div>
          ` : ''}
        </div>
      `).join('')
      : `<p style="font-size:14px;line-height:1.6;">${article.snippet}</p>`;

    const proTipHtml = article.fullArticle?.proTip
      ? `
        <div style="background:#0E1035;color:#ffffff;padding:14px 18px;margin:20px 0;">
          <div style="font-size:11px;font-weight:900;text-transform:uppercase;letter-spacing:1px;color:#14ABFA;margin-bottom:4px;">Master Concierge Secret</div>
          <p style="margin:0;font-size:13px;line-height:1.5;">${article.fullArticle.proTip}</p>
        </div>
      `
      : '';

    const printDocContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>${article.title} - Cloud 9 Cruise Guide</title>
          <style>
            @page { margin: 15mm; size: auto; }
            body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; color: #0E1035; line-height: 1.5; padding: 20px; max-width: 800px; margin: 0 auto; }
            .header { border-bottom: 2px solid #0E1035; padding-bottom: 12px; margin-bottom: 20px; display: flex; justify-content: space-between; align-items: flex-end; }
            .logo { font-size: 20px; font-weight: 900; letter-spacing: -0.5px; }
            .logo span { color: #14ABFA; }
            .meta { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; color: #64748b; }
            h1 { font-size: 24px; margin: 10px 0; color: #0E1035; line-height: 1.25; }
            .intro { font-style: italic; background: #F1F6FD; padding: 12px 16px; font-size: 14px; margin-bottom: 20px; border-left: 3px solid #14ABFA; }
            .print-box { border: 1px solid #cbd5e1; padding: 14px 18px; margin: 20px 0; background: #fafafa; }
            .footer { margin-top: 30px; border-top: 1px solid #e2e8f0; padding-top: 10px; font-size: 11px; color: #64748b; display: flex; justify-content: space-between; }
          </style>
        </head>
        <body>
          <div class="header">
            <div>
              <div class="logo">CLOUD <span>9</span> CRUISES</div>
              <div class="meta">Verified Advisory Blueprint • ${article.category} • ${article.readTime}</div>
            </div>
            <div class="meta">1-800-869-2437 | cloud9cruises.com</div>
          </div>
          <h1>${article.title}</h1>
          <div class="intro">"${article.fullArticle?.introduction || article.snippet}"</div>
          ${sectionsHtml}
          ${proTipHtml}
          ${checklistHtml}
          <div class="footer">
            <span>© Cloud 9 Cruises Concierge Services. Complimentary Stateroom Price Drop Protection.</span>
            <span>Printed from cloud9cruises.com</span>
          </div>
          <script>
            window.onload = function() {
              window.focus();
              window.print();
            };
          </script>
        </body>
      </html>
    `;

    if (printWindow) {
      printWindow.document.open();
      printWindow.document.write(printDocContent);
      printWindow.document.close();
    } else {
      // Fallback if popup blocked: trigger direct window.print()
      window.print();
    }
  };

  return (
    <div
      id="article-reader-modal-overlay"
      className="fixed inset-0 z-50 bg-[#0E1035]/80 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto animate-fadeIn"
      onClick={onClose}
    >
      <div
        id="article-reader-dialog"
        className="bg-white max-w-4xl w-full my-auto shadow-2xl max-h-[92vh] flex flex-col overflow-hidden text-[#0E1035] relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header Bar */}
        <div className="bg-[#0E1035] text-white p-4 sm:p-6 flex items-center justify-between border-b border-white/10 shrink-0">
          <div>
            <span className="text-[10px] font-black uppercase tracking-widest text-[#14ABFA] block">
              {article.category} • {article.readTime}
            </span>
            <h2 className="text-base sm:text-lg font-bold text-white leading-tight line-clamp-1">
              {article.title}
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleShare}
              className="text-white/70 hover:text-white transition-colors hidden sm:inline-block text-xs font-bold uppercase tracking-wider cursor-pointer"
              title="Share Guide"
            >
              {copied ? 'Link Copied!' : 'Share'}
            </button>
            <button
              onClick={handlePrint}
              className="text-white/70 hover:text-white transition-colors hidden sm:inline-block text-xs font-bold uppercase tracking-wider cursor-pointer"
              title="Print Checklist"
            >
              Print
            </button>
            <button
              onClick={onClose}
              className="p-1 text-white/80 hover:text-white transition-colors cursor-pointer"
              aria-label="Close reader"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 sm:p-8 md:p-10 overflow-y-auto space-y-8 flex-1">
          {/* Hero Banner Image for article */}
          {article.imageUrl && (
            <div className="site-content-image-frame relative h-56 sm:h-72 lg:h-80 w-full shadow-xs">
              <img
                src={article.imageUrl}
                alt={article.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E1035]/80 via-transparent to-transparent flex items-end p-6">
                <div className="text-white">
                  <span className="text-[10px] font-black uppercase tracking-widest bg-[#14ABFA] text-[#0E1035] px-2.5 py-1 inline-block mb-2">
                    Verified Advisory Blueprint
                  </span>
                  <h1 className="editorial-title text-xl sm:text-3xl text-white font-bold leading-snug">
                    {article.title}
                  </h1>
                </div>
              </div>
            </div>
          )}

          {/* Introduction Box */}
          <div className="bg-[#F1F6FD] p-5 sm:p-6">
            <p className="text-sm sm:text-base text-[#0E1035] font-medium leading-relaxed italic">
              "{article.fullArticle?.introduction || article.snippet}"
            </p>
          </div>

          {/* Key Bullet Quick Summary */}
          <div className="bg-[#F1F6FD] p-5 space-y-2.5 shadow-xs">
            <h4 className="text-xs font-black uppercase tracking-widest text-[#0E1035]">
              Executive Summary & Fast Rules
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#0E1035]/85">
              {article.bullets.map((bullet, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-[#14ABFA] font-bold">✓</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Detailed Sections */}
          {article.fullArticle?.sections.map((section, idx) => (
            <div key={idx} className="space-y-3 pt-2">
              <h3 className="text-lg sm:text-xl font-black text-[#0E1035] tracking-tight border-b border-[#0E1035]/10 pb-2">
                {section.heading}
              </h3>
              <p className="text-sm sm:text-base text-[#0E1035]/80 font-normal leading-relaxed">
                {section.content}
              </p>

              {section.takeaways && section.takeaways.length > 0 && (
                <div className="bg-[#F1F6FD] p-4 space-y-1.5 mt-2">
                  <span className="text-[10px] font-black uppercase tracking-wider text-[#14ABFA] block">
                    Key Strategy Takeaways:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-semibold text-[#0E1035]">
                    {section.takeaways.map((t, tIdx) => (
                      <div key={tIdx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-[#14ABFA]" />
                        <span>{t}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}

          {/* Pro Tip Callout Box */}
          {article.fullArticle?.proTip && (
            <div className="p-6 bg-[#0E1035] text-white relative overflow-hidden">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#14ABFA] text-[#0E1035] text-[10px] font-black uppercase tracking-wider mb-2">
                Master Concierge Secret
              </div>
              <p className="text-sm sm:text-base font-bold text-white leading-relaxed">
                {article.fullArticle.proTip}
              </p>
            </div>
          )}

          {/* Interactive Printable Checklist */}
          {article.fullArticle?.checklist && article.fullArticle.checklist.length > 0 && (
            <div className="bg-[#F1F6FD] p-6 space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-black uppercase tracking-wider text-[#0E1035]">
                  Interactive Pre-Sailing Checklist
                </h4>
                <span className="text-xs text-[#0E1035]/60 font-semibold">
                  {Object.values(checkedItems).filter(Boolean).length} of {article.fullArticle.checklist.length} Complete
                </span>
              </div>

              <div className="space-y-2">
                {article.fullArticle.checklist.map((item, cIdx) => {
                  const isChecked = !checkedItems[cIdx];
                  return (
                    <div
                      key={cIdx}
                      onClick={() => toggleCheck(cIdx)}
                      className={`p-3 transition-colors cursor-pointer flex items-center gap-3 ${
                        isChecked ? 'bg-white shadow-xs' : 'bg-white/60 hover:bg-white'
                      }`}
                    >
                      <div className={`w-5 h-5 flex items-center justify-center shrink-0 ${
                        isChecked ? 'bg-[#14ABFA] text-[#0E1035]' : 'bg-[#0E1035]/10'
                      }`}>
                        {isChecked && <Check className="w-3.5 h-3.5" />}
                      </div>
                      <span className={`text-xs sm:text-sm font-medium ${isChecked ? 'line-through text-[#0E1035]/50' : 'text-[#0E1035]'}`}>
                        {item}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Recommended Ships for this Blueprint */}
          {article.fullArticle?.recommendedShips && (
            <div className="pt-2">
              <span className="text-[11px] font-black uppercase tracking-widest text-[#0E1035]/60 block mb-2">
                Best Ships for this Experience:
              </span>
              <div className="flex flex-wrap gap-2">
                {article.fullArticle.recommendedShips.map((ship, sIdx) => (
                  <span key={sIdx} className="px-3 py-1.5 bg-[#F1F6FD] text-xs font-bold text-[#0E1035]">
                    {ship}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer Conversion Bar */}
        <div className="p-4 sm:p-6 bg-[#F1F6FD] border-t border-[#0E1035]/10 flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0">
          <div>
            <div className="text-xs font-bold text-[#0E1035]">
              Want our certified concierge to audit your stateroom for free?
            </div>
            <div className="text-[11px] text-[#0E1035]/60 font-medium">
              We apply 100% price match guarantee + bonus onboard spending cash.
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={() => {
                onClose();
                onOpenBookingModal(`Guide Follow-up: ${article.title}`);
              }}
              className="w-full sm:w-auto px-6 py-3 text-xs font-black uppercase tracking-wider text-[#0E1035] hover:text-[#14ABFA] border-b-2 border-[#14ABFA] transition-colors cursor-pointer text-center"
            >
              Get 1-on-1 Free Advice
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

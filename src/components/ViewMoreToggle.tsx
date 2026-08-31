import React from 'react';

interface ViewMoreToggleProps {
  expanded: boolean;
  total: number;
  visibleCount?: number;
  label?: string;
  onToggle: () => void;
}

export const ViewMoreToggle: React.FC<ViewMoreToggleProps> = ({
  expanded,
  total,
  visibleCount = 3,
  label = 'Items',
  onToggle,
}) => {
  if (total <= visibleCount) return null;

  return (
    <div className="mt-10 flex justify-center">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={expanded}
        aria-label={expanded ? `Show fewer ${label}` : `Show all ${label}`}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0E1035] text-2xl text-white transition-colors hover:bg-[#14ABFA] hover:text-[#0E1035] cursor-pointer"
      >
        <span className={`transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`} aria-hidden="true">↓</span>
      </button>
    </div>
  );
};

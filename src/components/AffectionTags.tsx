import { AFFECTION_LABELS } from '../data/recipes';
import type { Affection } from '../types';

export function AffectionMini({ affection }: { affection: Affection }) {
  return (
    <>
      {Object.entries(affection).map(([key, val]) => {
        if (val <= 0) return null;
        const { icon } = AFFECTION_LABELS[key];
        return (
          <span key={key} className="inline-flex items-center gap-0.5 px-2 py-0.5 rounded-full text-[11px] bg-primary-light text-primary">
            {icon}×{val}
          </span>
        );
      })}
    </>
  );
}

export function AffectionFull({ affection }: { affection: Affection }) {
  const parts = Object.entries(affection).filter(([, val]) => val > 0);
  if (parts.length === 0) {
    return <span className="text-text-hint text-sm">免费！</span>;
  }
  return (
    <div className="flex flex-wrap gap-2">
      {parts.map(([key, val]) => {
        const { icon, name } = AFFECTION_LABELS[key];
        const items = Array(val).fill(icon).join(' ');
        return (
          <div key={key} className="flex items-center gap-2 bg-primary-light rounded-xl px-3 py-2">
            <span className="text-lg">{items}</span>
            <span className="text-xs text-primary font-medium">{name}</span>
          </div>
        );
      })}
    </div>
  );
}

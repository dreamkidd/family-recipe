import { DIFFICULTY_LABELS, getDishEmoji } from '../data/recipes';
import { AffectionFull } from './AffectionTags';
import type { Recipe } from '../types';

interface DishModalProps {
  dish: Recipe | null;
  isInMenu: boolean;
  onClose: () => void;
  onToggleMenu: () => void;
}

export function DishModal({ dish, isInMenu, onClose, onToggleMenu }: DishModalProps) {
  if (!dish) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <div className="modal-sheet absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl max-h-[85vh] overflow-y-auto"
           style={{ maxWidth: 430, margin: '0 auto' }}>
        <div className="sticky top-0 bg-white z-10 px-4 pt-4 pb-2 flex justify-between items-center border-b border-border">
          <h2 className="text-lg font-bold">{dish.name}</h2>
          <button onClick={onClose} className="p-2 -mr-2">
            <svg className="w-5 h-5 text-text-sub" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-4 pb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-light to-orange-50 flex items-center justify-center text-3xl">
              {getDishEmoji(dish.category)}
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className={`${DIFFICULTY_LABELS[dish.difficulty].color} text-xs px-2 py-0.5 rounded-full`}>
                  {DIFFICULTY_LABELS[dish.difficulty].text}
                </span>
                <span className="text-text-hint text-xs flex items-center gap-1">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {dish.time}分钟
                </span>
              </div>
              <div className="flex flex-wrap gap-1">
                {dish.tags.map(t => (
                  <span key={t} className="text-[11px] bg-gray-100 text-text-sub px-2 py-0.5 rounded-full">{t}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="mb-5">
            <h3 className="font-bold text-sm mb-2 flex items-center gap-1">
              <span className="text-primary">💖</span> 亲密价格
            </h3>
            <AffectionFull affection={dish.affection} />
            <p className="text-text-hint text-xs mt-2">做这道菜需要收取的甜蜜报酬~</p>
          </div>

          <div className="mb-5">
            <h3 className="font-bold text-sm mb-2">食材清单 <span className="text-text-hint font-normal">（按基础3人份）</span></h3>
            <div className="bg-surface rounded-xl px-3">
              {dish.ingredients.map(ing => (
                <div key={ing.name} className="ingredient-row">
                  <span className="text-sm">{ing.name}</span>
                  <span className="text-sm text-text-sub">{ing.amount}{ing.unit}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-bold text-sm mb-3">做法步骤</h3>
            <div className="space-y-3">
              {dish.steps.map((step, i) => (
                <div key={i} className="step-item text-sm text-text-sub leading-relaxed" data-step={i + 1}>
                  {step}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="sticky bottom-0 bg-white border-t border-border p-4">
          <button
            onClick={onToggleMenu}
            className={`btn-press w-full py-3 rounded-xl font-medium text-sm transition-transform text-white ${
              isInMenu ? 'bg-red-500' : 'bg-primary'
            }`}
          >
            {isInMenu ? '从菜单移除' : '加入今日菜单'}
          </button>
        </div>
      </div>
    </div>
  );
}

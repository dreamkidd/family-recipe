import { useMemo } from 'react';
import { RECIPES, getDishEmoji } from '../data/recipes';
import { AffectionMini, AffectionFull } from '../components/AffectionTags';
import { generateShareUrl } from '../utils/share';
import type { Affection, MenuItem } from '../types';

interface MenuPageProps {
  menu: MenuItem[];
  servings: number;
  onRemove: (dishId: number) => void;
  onUpdateServings: (delta: number) => void;
  onClear: () => void;
  onShowToast: (msg: string) => void;
}

export function MenuPage({ menu, servings, onRemove, onUpdateServings, onClear, onShowToast }: MenuPageProps) {
  const totalAffection = useMemo<Affection>(() => {
    const total: Affection = { hug: 0, kiss: 0, handhold: 0, shoulder: 0, leg: 0 };
    for (const item of menu) {
      const dish = RECIPES.find(r => r.id === item.dishId);
      if (dish) {
        for (const key of Object.keys(total) as (keyof Affection)[]) {
          total[key] += dish.affection[key];
        }
      }
    }
    return total;
  }, [menu]);

  const handleShare = async () => {
    const url = generateShareUrl(menu);
    try {
      await navigator.clipboard.writeText(url);
      onShowToast('链接已复制，快去分享吧！');
    } catch {
      onShowToast('分享链接生成成功');
    }
  };

  if (menu.length === 0) {
    return (
      <div className="empty-state">
        <div className="text-5xl mb-4">🍽️</div>
        <p className="text-sm mb-1">还没有点菜哦</p>
        <p className="text-xs text-text-hint">去菜谱页挑选几道爱吃的吧~</p>
      </div>
    );
  }

  return (
    <div className="px-4 pb-4">
      {/* Share Button */}
      <button
        onClick={handleShare}
        className="w-full mb-3 py-2.5 bg-primary-light text-primary text-sm font-medium rounded-xl flex items-center justify-center gap-2 btn-press"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
        </svg>
        分享菜单给家人
      </button>

      {/* Servings & Affection Summary */}
      <div className="bg-primary-light rounded-2xl p-4 mb-4">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-medium text-primary">用餐人数</span>
          <div className="flex items-center gap-3">
            <button onClick={() => onUpdateServings(-1)} className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-primary font-bold text-lg shadow-sm btn-press">-</button>
            <span className="text-lg font-bold w-6 text-center">{servings}</span>
            <button onClick={() => onUpdateServings(1)} className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-primary font-bold text-lg shadow-sm btn-press">+</button>
          </div>
        </div>
        <div className="border-t border-primary/10 pt-3">
          <p className="text-xs text-primary/70 mb-2">今日甜蜜报酬合计：</p>
          <AffectionFull affection={totalAffection} />
        </div>
      </div>

      {/* Menu List */}
      <div className="space-y-3">
        {menu.map((item, idx) => {
          const dish = RECIPES.find(r => r.id === item.dishId);
          if (!dish) return null;
          return (
            <div key={dish.id} className="bg-white border border-border rounded-2xl p-3 flex gap-3 dish-card" style={{ animationDelay: `${idx * 0.05}s` }}>
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary-light to-orange-50 flex items-center justify-center text-2xl shrink-0">
                {getDishEmoji(dish.category)}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between mb-1">
                  <h3 className="font-bold text-sm truncate">{dish.name}</h3>
                  <button onClick={() => onRemove(dish.id)} className="text-text-hint p-1 -mr-1 -mt-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <div className="flex flex-wrap gap-1 mb-1.5">
                  <AffectionMini affection={dish.affection} />
                </div>
                <div className="text-text-hint text-xs">
                  {item.servings}人份 · {dish.ingredients.map(i => `${Math.round(i.amount * item.servings / 3)}${i.unit}${i.name}`).slice(0, 2).join('、')}
                  {dish.ingredients.length > 2 ? '...' : ''}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <button
        onClick={onClear}
        className="w-full mt-4 py-3 text-text-hint text-sm border border-border rounded-2xl btn-press"
      >
        清空菜单
      </button>
    </div>
  );
}

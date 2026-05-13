import { useMemo } from 'react';
import { RECIPES } from '../data/recipes';
import type { MenuItem } from '../types';

interface ShoppingListPageProps {
  menu: MenuItem[];
  checked: string[];
  onToggle: (name: string) => void;
  onReset: () => void;
}

export function ShoppingListPage({ menu, checked, onToggle, onReset }: ShoppingListPageProps) {
  const ingredients = useMemo(() => {
    const map = new Map<string, { name: string; amount: number; unit: string }>();
    for (const item of menu) {
      const dish = RECIPES.find(r => r.id === item.dishId);
      if (!dish) continue;
      const ratio = item.servings / 3;
      for (const ing of dish.ingredients) {
        const key = ing.name;
        const amount = Math.round(ing.amount * ratio * 10) / 10;
        if (map.has(key)) {
          const existing = map.get(key)!;
          if (existing.unit === ing.unit) {
            existing.amount = Math.round((existing.amount + amount) * 10) / 10;
          } else {
            existing.amount = `${existing.amount}${existing.unit} + ${amount}${ing.unit}` as unknown as number;
            existing.unit = '';
          }
        } else {
          map.set(key, { name: ing.name, amount, unit: ing.unit });
        }
      }
    }
    return Array.from(map.values()).sort((a, b) => a.name.localeCompare(b.name, 'zh'));
  }, [menu]);

  const checkedSet = new Set(checked);
  const checkedCount = ingredients.filter(i => checkedSet.has(i.name)).length;

  if (menu.length === 0) {
    return (
      <div className="empty-state">
        <div className="text-5xl mb-4">🛒</div>
        <p className="text-sm mb-1">购物清单是空的</p>
        <p className="text-xs text-text-hint">先添加几道菜单才能生成清单哦~</p>
      </div>
    );
  }

  return (
    <div className="px-4 pb-4">
      <div className="flex items-center justify-between mb-3">
        <span className="text-sm text-text-sub">已买 {checkedCount}/{ingredients.length}</span>
        <div className="w-24 h-1.5 bg-gray-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-secondary rounded-full transition-all"
            style={{ width: ingredients.length ? (checkedCount / ingredients.length * 100) : 0 }}
          />
        </div>
      </div>

      <div className="bg-white border border-border rounded-2xl divide-y divide-border">
        {ingredients.map(ing => {
          const isChecked = checkedSet.has(ing.name);
          const displayAmount = ing.unit ? `${ing.amount}${ing.unit}` : String(ing.amount);
          return (
            <label
              key={ing.name}
              className="flex items-center gap-3 px-4 py-3.5 cursor-pointer active:bg-gray-50 transition-colors"
            >
              <input
                type="checkbox"
                className="w-5 h-5 rounded-lg border-2 border-gray-300 text-primary accent-primary"
                checked={isChecked}
                onChange={() => onToggle(ing.name)}
              />
              <span className={`flex-1 text-sm ${isChecked ? 'text-text-hint line-through' : 'text-text-main'}`}>
                {ing.name}
              </span>
              <span className="text-sm text-text-sub font-medium">{displayAmount}</span>
            </label>
          );
        })}
      </div>

      <button
        onClick={onReset}
        className="w-full mt-4 py-3 text-text-hint text-sm border border-border rounded-2xl btn-press"
      >
        重置勾选
      </button>
    </div>
  );
}

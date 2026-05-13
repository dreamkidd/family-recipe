import { useState, useMemo } from 'react';
import { RECIPES, CATEGORIES, DIFFICULTY_LABELS, getDishEmoji } from '../data/recipes';
import { AffectionMini } from '../components/AffectionTags';
import type { Recipe } from '../types';

interface RecipesPageProps {
  menuIds: number[];
  onOpenDish: (dish: Recipe) => void;
}

export function RecipesPage({ menuIds, onOpenDish }: RecipesPageProps) {
  const [category, setCategory] = useState('all');
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    let list = RECIPES;
    if (category !== 'all') {
      list = list.filter(r => r.category === category);
    }
    if (query) {
      const q = query.toLowerCase();
      list = list.filter(r =>
        r.name.toLowerCase().includes(q) ||
        r.ingredients.some(i => i.name.toLowerCase().includes(q)) ||
        r.tags.some(t => t.toLowerCase().includes(q))
      );
    }
    return list;
  }, [category, query]);

  return (
    <div className="pb-4">
      {/* Search */}
      <div className="px-4 pb-3">
        <div className="relative">
          <svg className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-text-hint" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            placeholder="搜索菜名、食材..."
            value={query}
            onChange={e => setQuery(e.target.value)}
            className="w-full bg-gray-50 rounded-xl py-2.5 pl-9 pr-4 text-sm outline-none focus:ring-2 focus:ring-primary/20 transition-all"
          />
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex px-4 pb-3 gap-2 overflow-x-auto no-scrollbar">
        {Object.entries(CATEGORIES).map(([key, label]) => (
          <button
            key={key}
            onClick={() => setCategory(key)}
            className={`whitespace-nowrap px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
              category === key
                ? 'bg-primary text-white'
                : 'bg-gray-100 text-text-sub'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Recipe Grid */}
      {filtered.length === 0 ? (
        <div className="empty-state">
          <div className="text-4xl mb-3">🍽️</div>
          <p className="text-sm">没有找到相关菜谱</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-3 px-4">
          {filtered.map((dish, idx) => (
            <div
              key={dish.id}
              className="dish-card bg-white rounded-2xl border border-border overflow-hidden btn-press cursor-pointer"
              style={{ animationDelay: `${idx * 0.05}s` }}
              onClick={() => onOpenDish(dish)}
            >
              <div className="h-28 bg-gradient-to-br from-primary-light to-orange-50 flex items-center justify-center text-4xl relative">
                {getDishEmoji(dish.category)}
                {menuIds.includes(dish.id) && (
                  <span className="absolute top-2 left-2 bg-primary text-white text-[10px] px-2 py-0.5 rounded-full">已点</span>
                )}
                <span className={`absolute top-2 right-2 ${DIFFICULTY_LABELS[dish.difficulty].color} text-[10px] px-2 py-0.5 rounded-full`}>
                  {DIFFICULTY_LABELS[dish.difficulty].text}
                </span>
              </div>
              <div className="p-3">
                <h3 className="font-bold text-sm mb-1 truncate">{dish.name}</h3>
                <div className="flex items-center gap-1 text-text-hint text-xs mb-2">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{dish.time}分钟</span>
                </div>
                <div className="flex flex-wrap gap-1">
                  <AffectionMini affection={dish.affection} />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

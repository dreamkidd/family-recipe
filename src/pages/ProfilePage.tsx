import { RECIPES, AFFECTION_LABELS } from '../data/recipes';

interface ProfilePageProps {
  menuCount: number;
  onResetAll: () => void;
}

export function ProfilePage({ menuCount, onResetAll }: ProfilePageProps) {
  return (
    <div className="px-4 pb-4 space-y-4">
      <div className="bg-gradient-to-br from-primary to-orange-400 rounded-2xl p-6 text-white">
        <div className="text-3xl mb-1">👨‍👩‍👧‍👦</div>
        <h2 className="text-xl font-bold mb-1">家味</h2>
        <p className="text-white/80 text-sm">记录家的味道，传递爱的温度</p>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="bg-surface rounded-2xl p-4 text-center">
          <div className="text-2xl font-bold text-primary mb-1">{RECIPES.length}</div>
          <div className="text-xs text-text-sub">收录菜谱</div>
        </div>
        <div className="bg-surface rounded-2xl p-4 text-center">
          <div className="text-2xl font-bold text-primary mb-1">{menuCount}</div>
          <div className="text-xs text-text-sub">今日已点</div>
        </div>
      </div>

      <div className="bg-white border border-border rounded-2xl overflow-hidden">
        <div className="px-4 py-3 border-b border-border">
          <h3 className="font-bold text-sm">亲密行为说明</h3>
        </div>
        <div className="p-4 space-y-3">
          <p className="text-xs text-text-sub leading-relaxed">
            在「家味」里，每道菜都有一个特别的"价格"——不是金钱，而是甜蜜的小互动。点菜的人要想吃到这道菜，就要"支付"对应的亲密行为哦~
          </p>
          <div className="grid grid-cols-2 gap-2">
            {Object.entries(AFFECTION_LABELS).map(([key, { icon, name }]) => (
              <div key={key} className="flex items-center gap-2 bg-surface rounded-xl px-3 py-2">
                <span className="text-lg">{icon}</span>
                <span className="text-sm">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <button
        onClick={() => {
          if (confirm('确定要清空所有数据吗？包括菜单和购物清单。')) {
            onResetAll();
          }
        }}
        className="w-full py-3 text-text-hint text-sm border border-border rounded-2xl btn-press"
      >
        重置所有数据
      </button>
    </div>
  );
}

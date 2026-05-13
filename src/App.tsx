import { useState, useCallback, useEffect } from 'react';
import { useAppStore } from './hooks/useAppStore';
import { DishModal } from './components/DishModal';
import { Toast } from './components/Toast';
import { RecipesPage } from './pages/RecipesPage';
import { MenuPage } from './pages/MenuPage';
import { ShoppingListPage } from './pages/ShoppingListPage';
import { ProfilePage } from './pages/ProfilePage';
import { RECIPES } from './data/recipes';
import { parseShareFromUrl, clearShareFromUrl } from './utils/share';
import type { Recipe, MenuItem } from './types';

type Page = 'recipes' | 'menu' | 'list' | 'profile';

const PAGES: { key: Page; label: string; icon: (active: boolean) => React.ReactNode }[] = [
  {
    key: 'recipes',
    label: '菜谱',
    icon: (active) => (
      <svg className={`w-6 h-6 ${active ? 'text-primary' : 'text-text-hint'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    key: 'menu',
    label: '今日菜单',
    icon: (active) => (
      <svg className={`w-6 h-6 ${active ? 'text-primary' : 'text-text-hint'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
  },
  {
    key: 'list',
    label: '购物清单',
    icon: (active) => (
      <svg className={`w-6 h-6 ${active ? 'text-primary' : 'text-text-hint'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
        <path fillRule="evenodd" d="M4 5a2 2 0 012-2 1 1 0 000 2H6a2 2 0 00-2 2v6a2 2 0 002 2h2a1 1 0 100-2H6V7h5a1 1 0 011 1v5h2V8a3 3 0 00-3-3H6z" clipRule="evenodd" />
        <path d="M12 7a1 1 0 011-1h1a2 2 0 012 2v6a2 2 0 01-2 2h-1a1 1 0 01-1-1V7z" />
      </svg>
    ),
  },
  {
    key: 'profile',
    label: '我的',
    icon: (active) => (
      <svg className={`w-6 h-6 ${active ? 'text-primary' : 'text-text-hint'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
];

const PAGE_TITLES: Record<Page, string> = {
  recipes: '今日菜谱',
  menu: '今日菜单',
  list: '购物清单',
  profile: '我的',
};

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('recipes');
  const [modalDish, setModalDish] = useState<Recipe | null>(null);
  const [toast, setToast] = useState({ message: '', visible: false });
  const [sharePrompt, setSharePrompt] = useState<{ dishes: number[]; servings: number } | null>(null);

  const {
    state,
    addToMenu,
    removeFromMenu,
    clearMenu,
    updateServings,
    toggleShoppingChecked,
    resetShoppingChecked,
    resetAll,
    importMenu,
  } = useAppStore();

  const menuIds = state.todayMenu.map(m => m.dishId);

  // 页面加载时检查 URL 分享参数
  useEffect(() => {
    const shareData = parseShareFromUrl();
    if (shareData && shareData.dishes.length > 0) {
      // 验证 dishIds 是否有效
      const validDishes = shareData.dishes.filter(id => RECIPES.some(r => r.id === id));
      if (validDishes.length > 0) {
        setSharePrompt({ dishes: validDishes, servings: shareData.servings });
      }
      clearShareFromUrl();
    }
  }, []);

  const showToast = useCallback((message: string) => {
    setToast({ message, visible: true });
    setTimeout(() => setToast({ message: '', visible: false }), 2000);
  }, []);

  const handleToggleMenu = useCallback(() => {
    if (!modalDish) return;
    if (menuIds.includes(modalDish.id)) {
      removeFromMenu(modalDish.id);
      showToast('已从菜单移除');
    } else {
      addToMenu(modalDish.id);
      showToast('已加入今日菜单');
    }
    setModalDish(null);
  }, [modalDish, menuIds, addToMenu, removeFromMenu, showToast]);

  const handleClearMenu = useCallback(() => {
    clearMenu();
    showToast('菜单已清空');
  }, [clearMenu, showToast]);

  const handleResetChecked = useCallback(() => {
    resetShoppingChecked();
    showToast('已重置');
  }, [resetShoppingChecked, showToast]);

  const handleResetAll = useCallback(() => {
    resetAll();
    showToast('已重置所有数据');
  }, [resetAll, showToast]);

  const handleImportShare = useCallback((accept: boolean) => {
    if (accept && sharePrompt) {
      const newMenu: MenuItem[] = sharePrompt.dishes.map(dishId => ({
        dishId,
        servings: sharePrompt.servings,
      }));
      // 直接修改状态
      importMenu?.(newMenu) ?? (() => {
        // fallback: 逐个添加
        newMenu.forEach(m => addToMenu(m.dishId));
        // 调整人数
        const delta = sharePrompt.servings - state.servings;
        if (delta !== 0) {
          for (let i = 0; i < Math.abs(delta); i++) {
            updateServings(delta > 0 ? 1 : -1);
          }
        }
      })();
      showToast('菜单已导入');
      setCurrentPage('menu');
    }
    setSharePrompt(null);
  }, [sharePrompt, showToast]);

  // 计算分享提示中的菜名
  const shareDishNames = sharePrompt
    ? sharePrompt.dishes.map(id => RECIPES.find(r => r.id === id)?.name).filter(Boolean)
    : [];

  return (
    <div className="mx-auto max-w-[430px] min-h-screen bg-white shadow-xl relative pb-20">
      {/* Header */}
      <header className="sticky top-0 z-30 bg-white/95 backdrop-blur border-b border-border">
        <div className="px-4 py-3 flex items-center justify-between">
          <h1 className="text-xl font-bold text-primary">{PAGE_TITLES[currentPage]}</h1>
          {currentPage === 'menu' && state.todayMenu.length > 0 && (
            <button onClick={handleClearMenu} className="text-sm text-primary font-medium">清空</button>
          )}
          {currentPage === 'list' && state.todayMenu.length > 0 && (
            <button onClick={handleResetChecked} className="text-sm text-primary font-medium">重置</button>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-4">
        {currentPage === 'recipes' && (
          <RecipesPage menuIds={menuIds} onOpenDish={setModalDish} />
        )}
        {currentPage === 'menu' && (
          <MenuPage
            menu={state.todayMenu}
            servings={state.servings}
            onRemove={removeFromMenu}
            onUpdateServings={updateServings}
            onClear={handleClearMenu}
            onShowToast={showToast}
          />
        )}
        {currentPage === 'list' && (
          <ShoppingListPage
            menu={state.todayMenu}
            checked={state.shoppingChecked}
            onToggle={toggleShoppingChecked}
            onReset={handleResetChecked}
          />
        )}
        {currentPage === 'profile' && (
          <ProfilePage menuCount={state.todayMenu.length} onResetAll={handleResetAll} />
        )}
      </main>

      {/* Bottom Nav */}
      <nav className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-border">
        <div className="mx-auto max-w-[430px] flex justify-around items-center py-2">
          {PAGES.map(page => {
            const active = currentPage === page.key;
            return (
              <button
                key={page.key}
                onClick={() => setCurrentPage(page.key)}
                className="flex flex-col items-center gap-0.5 px-6 py-1 relative"
              >
                <div className="relative">
                  {page.icon(active)}
                  {page.key === 'menu' && state.todayMenu.length > 0 && (
                    <span className="absolute -top-1.5 -right-1.5 bg-primary text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center">
                      {state.todayMenu.length}
                    </span>
                  )}
                </div>
                <span className={`text-[10px] font-medium ${active ? 'text-primary' : 'text-text-hint'}`}>
                  {page.label}
                </span>
              </button>
            );
          })}
        </div>
      </nav>

      {/* Dish Modal */}
      {modalDish && (
        <DishModal
          dish={modalDish}
          isInMenu={menuIds.includes(modalDish.id)}
          onClose={() => setModalDish(null)}
          onToggleMenu={handleToggleMenu}
        />
      )}

      {/* Share Import Prompt */}
      {sharePrompt && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-6">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => handleImportShare(false)} />
          <div className="relative bg-white rounded-2xl p-6 w-full max-w-sm">
            <div className="text-center mb-4">
              <div className="text-4xl mb-2">💌</div>
              <h3 className="font-bold text-lg mb-1">收到分享菜单</h3>
              <p className="text-sm text-text-sub">
                {shareDishNames.slice(0, 3).join('、')}
                {shareDishNames.length > 3 ? ` 等${shareDishNames.length}道菜` : ''}
                <br />
                <span className="text-text-hint">共 {sharePrompt.servings} 人份</span>
              </p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => handleImportShare(false)}
                className="flex-1 py-2.5 text-sm text-text-sub border border-border rounded-xl btn-press"
              >
                忽略
              </button>
              <button
                onClick={() => handleImportShare(true)}
                className="flex-1 py-2.5 text-sm text-white bg-primary rounded-xl btn-press"
              >
                导入菜单
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toast */}
      <Toast message={toast.message} visible={toast.visible} />
    </div>
  );
}

import { useState, useCallback, useEffect } from 'react';
import type { AppState, MenuItem } from '../types';

const STORAGE_KEY = 'jiawei_state';

function loadState(): AppState {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      return {
        todayMenu: parsed.todayMenu || [],
        servings: parsed.servings || 2,
        shoppingChecked: parsed.shoppingChecked || [],
      };
    }
  } catch {
    // ignore
  }
  return { todayMenu: [], servings: 3, shoppingChecked: [] };
}

function saveState(state: AppState) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // ignore
  }
}

export function useAppStore() {
  const [state, setState] = useState<AppState>(loadState);

  useEffect(() => {
    saveState(state);
  }, [state]);

  const addToMenu = useCallback((dishId: number) => {
    setState(prev => {
      if (prev.todayMenu.some(m => m.dishId === dishId)) return prev;
      return {
        ...prev,
        todayMenu: [...prev.todayMenu, { dishId, servings: prev.servings }],
      };
    });
  }, []);

  const removeFromMenu = useCallback((dishId: number) => {
    setState(prev => ({
      ...prev,
      todayMenu: prev.todayMenu.filter(m => m.dishId !== dishId),
    }));
  }, []);

  const clearMenu = useCallback(() => {
    setState(prev => ({ ...prev, todayMenu: [] }));
  }, []);

  const updateServings = useCallback((delta: number) => {
    setState(prev => {
      const newVal = prev.servings + delta;
      if (newVal < 1 || newVal > 20) return prev;
      return {
        ...prev,
        servings: newVal,
        todayMenu: prev.todayMenu.map(m => ({ ...m, servings: newVal })),
      };
    });
  }, []);

  const toggleShoppingChecked = useCallback((name: string) => {
    setState(prev => {
      const checked = new Set(prev.shoppingChecked);
      if (checked.has(name)) {
        checked.delete(name);
      } else {
        checked.add(name);
      }
      return { ...prev, shoppingChecked: Array.from(checked) };
    });
  }, []);

  const resetShoppingChecked = useCallback(() => {
    setState(prev => ({ ...prev, shoppingChecked: [] }));
  }, []);

  const resetAll = useCallback(() => {
    localStorage.removeItem(STORAGE_KEY);
    setState({ todayMenu: [], servings: 2, shoppingChecked: [] });
  }, []);

  const importMenu = useCallback((menu: MenuItem[]) => {
    if (menu.length === 0) return;
    const servings = menu[0]?.servings ?? 2;
    setState(prev => ({
      ...prev,
      servings,
      todayMenu: menu.map(m => ({ ...m, servings })),
    }));
  }, []);

  return {
    state,
    addToMenu,
    removeFromMenu,
    clearMenu,
    updateServings,
    toggleShoppingChecked,
    resetShoppingChecked,
    resetAll,
    importMenu,
  };
}

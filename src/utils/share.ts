import type { MenuItem } from '../types';

export interface ShareData {
  dishes: number[];
  servings: number;
}

/**
 * 将菜单数据编码为 Base64 字符串
 * 格式: JSON -> Base64
 */
export function encodeMenu(menu: MenuItem[]): string {
  const data: ShareData = {
    dishes: menu.map(m => m.dishId),
    servings: menu[0]?.servings ?? 2,
  };
  try {
    return btoa(encodeURIComponent(JSON.stringify(data)));
  } catch {
    return '';
  }
}

/**
 * 从 Base64 字符串解码菜单数据
 */
export function decodeMenu(code: string): ShareData | null {
  try {
    const json = decodeURIComponent(atob(code));
    const data = JSON.parse(json) as ShareData;
    if (!Array.isArray(data.dishes) || typeof data.servings !== 'number') {
      return null;
    }
    return data;
  } catch {
    return null;
  }
}

/**
 * 生成分享 URL
 */
export function generateShareUrl(menu: MenuItem[]): string {
  const code = encodeMenu(menu);
  if (!code) return window.location.origin + window.location.pathname;
  const url = new URL(window.location.href);
  url.searchParams.set('share', code);
  return url.toString();
}

/**
 * 从当前 URL 解析分享数据
 */
export function parseShareFromUrl(): ShareData | null {
  const url = new URL(window.location.href);
  const code = url.searchParams.get('share');
  if (!code) return null;
  return decodeMenu(code);
}

/**
 * 清理 URL 中的分享参数（导入后调用）
 */
export function clearShareFromUrl() {
  const url = new URL(window.location.href);
  url.searchParams.delete('share');
  window.history.replaceState({}, '', url.toString());
}

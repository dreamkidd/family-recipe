export interface Ingredient {
  name: string;
  amount: number;
  unit: string;
}

export interface Affection {
  hug: number;
  kiss: number;
  handhold: number;
  shoulder: number;
  leg: number;
}

export interface Recipe {
  id: number;
  name: string;
  category: 'meat' | 'veg' | 'soup' | 'staple';
  difficulty: 'easy' | 'medium' | 'hard';
  time: number;
  tags: string[];
  affection: Affection;
  ingredients: Ingredient[];
  steps: string[];
}

export interface MenuItem {
  dishId: number;
  servings: number;
}

export interface AppState {
  todayMenu: MenuItem[];
  servings: number;
  shoppingChecked: string[];
}

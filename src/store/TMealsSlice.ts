import type { TMeals } from '../components/Menu/TMeals';

type TMealsInitial = {
  items: TMeals[];
  loading: boolean;
  error: string | null;
};

export type { TMealsInitial };

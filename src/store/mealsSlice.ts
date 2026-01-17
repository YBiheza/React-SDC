import { createSlice, createAsyncThunk, type PayloadAction } from '@reduxjs/toolkit'
import type { TMealsInitial } from './TMealsSlice';
import type { TMeals } from '../components/Menu/TMeals';

export const fetchMeals = createAsyncThunk<TMeals[], void, { rejectValue: string }>(
    'meals/fetchMeals',
    async(__, {rejectWithValue }) => {
        try {
            const response = await fetch(
                'https://65de35f3dccfcd562f5691bb.mockapi.io/api/v1/meals'
            );

            if(!response.ok) {
                throw new Error('Failed to fetch meals');
            }

            return await response.json();
        } catch (error) {
            return rejectWithValue('Ooops')
        }
    }
);

const initialState: TMealsInitial = {
    items: [],
    loading: false,
    error: null,
}

const mealsSlice = createSlice({
    name: 'meals',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
    builder
      .addCase(fetchMeals.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMeals.fulfilled, (state, action: PayloadAction<TMeals[]>) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchMeals.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? "Unknown error";
      });
    },
})

export default mealsSlice.reducer;
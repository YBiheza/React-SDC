import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchMeals = createAsyncThunk(
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
            return rejectWithValue(error.message)
        }
    }
);

const mealsSlice = createSlice({
    name: 'meals',
    initialState: {
        items: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
    builder
      .addCase(fetchMeals.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMeals.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchMeals.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
    },
})

export default mealsSlice.reducer;
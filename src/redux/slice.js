import { createSlice } from '@reduxjs/toolkit';
import { fetchCars } from './operations.js';

const initialState = {
  cars: [],
  pagination: {
    page: 1,
    totalPages: 0,
    totalCars: 0,
  },
  searchParams: {
    brand: '',
    price: '',
    mileage: {
      from: '',
      to: '',
    },
  },
  isFavorite: [],
  isLoading: false,
  error: null,
};

const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setPage(state, action) {
      state.pagination.page = action.payload;
    },
    setBrand(state, action) {
      state.searchParams.brand = action.payload;
    },
    setPrice(state, action) {
      state.searchParams.price = action.payload;
    },
    setMileageFrom(state, action) {
      state.searchParams.mileage.from = action.payload;
    },
    setMileageTo(state, action) {
      state.searchParams.mileage.to = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCars.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.isLoading = false;
        if (state.pagination.page === 1) {
          state.cars = action.payload.cars;
        } else {
          state.cars = [...state.cars, ...action.payload.cars];
        }
        state.pagination.totalPages = action.payload.totalPages;
        state.pagination.totalCars = action.payload.totalCars;
      })
      .addCase(fetchCars.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { setPage, setBrand, setPrice, setMileageFrom, setMileageTo } =
  globalSlice.actions;
export const globalReducer = globalSlice.reducer;

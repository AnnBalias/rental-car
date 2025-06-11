import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../constants';

export const fetchCars = createAsyncThunk(
  'cars/fetch',
  async ({ page, brand, price, mileage, limit = 12 }, thunkAPI) => {
    const { from, to } = mileage;
    const params = new URLSearchParams({
      limit,
      page,
      ...(brand && { brand }),
      ...(price && { rentalPrice: price }),
      ...(from && { minMileage: from }),
      ...(to && { maxMileage: to }),
    });

    try {
      const response = await api.get(`/cars?${params.toString()}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

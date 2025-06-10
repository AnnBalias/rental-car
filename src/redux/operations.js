import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../constants';

export const fetchCars = createAsyncThunk(
  'cars/fetch',
  async ({ brand, price, mileage }, thunkAPI) => {
    const { from, to } = mileage;
    try {
      const response = await api.get(
        `/cars?brand=${brand}&rentalPrice=${price}&minMileage=${from}&maxMileage=${to}`
      );

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

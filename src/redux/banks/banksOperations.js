import { createAsyncThunk } from '@reduxjs/toolkit';
import * as banksAPI from 'services/banks-api';

export const fetchBanks = createAsyncThunk(
  'bankSettings/fetchBanksAPI',
  async (_, { rejectWithValue }) => {
    try {
      return await banksAPI.fetchBanks();
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

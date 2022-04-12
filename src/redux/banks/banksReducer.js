import { createReducer, combineReducers } from '@reduxjs/toolkit';
import { fetchBanks } from './banksOperations';
import { changeBank, deleteBank, addBank, clearBankList } from './banksActions';

const entities = createReducer([], {
  [fetchBanks.fulfilled]: (_, { payload }) => payload,
  [changeBank]: (state, { payload }) =>
    state.map(item => (item.id === payload.id ? payload : item)),
  [deleteBank]: (state, { payload }) =>
    state.filter(item => item.id !== payload.id),
  [addBank]: (state, { payload }) => {
    return [...state, payload];
  },
  [clearBankList]: () => [],
});

const loading = createReducer(false, {
  [fetchBanks.pending]: () => true,
  [fetchBanks.fulfilled]: () => false,
  [fetchBanks.rejected]: () => false,
});

const error = createReducer(null, {
  [fetchBanks.rejected]: (_, { payload }) => payload,
  [fetchBanks.pending]: () => null,
});

export default combineReducers({
  entities,
  loading,
  error,
});

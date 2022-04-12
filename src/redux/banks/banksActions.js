import { createAction } from '@reduxjs/toolkit';

export const changeBank = createAction('bankSettings/changeBank');

export const deleteBank = createAction('bankSettings/deleteBank', id => ({
  payload: { id },
}));

export const addBank = createAction('bankSettings/addBank');

export const clearBankList = createAction('bankSettings/clearBankList');

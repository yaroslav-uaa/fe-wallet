import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  getTransactionsRequest,
  getTransactionsSuccess,
  getTransactionsError,
  getTransactionsByDateRequest,
  getTransactionsByDateSuccess,
  getTransactionsByDateError,
  addTransactionRequest,
  addTransactionSuccess,
  addTransactionError,
  deleteTransactionRequest,
  deleteTransactionSuccess,
  deleteTransactionError,
  changeFilter,
} from './actions-transactions';

const result = createReducer([], {
  [getTransactionsSuccess]: (_, { payload }) => payload.transactions,
  [addTransactionSuccess]: (state, { payload }) => [
    payload.transaction,
    ...state,
  ],
  [deleteTransactionSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const categories = createReducer('', {
  [getTransactionsByDateSuccess]: (_, { payload }) => payload.data,
});

const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
  [getTransactionsRequest]: () => true,
  [getTransactionsSuccess]: () => false,
  [getTransactionsError]: () => false,
  [addTransactionRequest]: () => true,
  [addTransactionSuccess]: () => false,
  [addTransactionError]: () => false,
  [deleteTransactionRequest]: () => true,
  [deleteTransactionSuccess]: () => false,
  [deleteTransactionError]: () => false,
  [getTransactionsByDateRequest]: () => true,
  [getTransactionsByDateSuccess]: () => false,
  [getTransactionsByDateError]: () => false,
});

export default combineReducers({
  result,
  filter,
  loading,
  categories,
});

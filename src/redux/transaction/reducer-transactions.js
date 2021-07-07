import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import {
  getTransactionsRequest,
  getTransactionsSuccess,
  getTransactionsError,
  addTransactionsRequest,
  addTransactionsSuccess,
  addTransactionsError,
  filterTransactions
} from './actions-transactions';

const listTransactions = createReducer([], {
  [getTransactionsSuccess]: (_, { payload }) => payload,
  [addTransactionsSuccess]: (state, { payload }) => [payload, ...state],
});
const filter = createReducer('', {
  [filterTransactions]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
  [getTransactionsRequest]: () => true,
  [getTransactionsSuccess]: () => false,
  [getTransactionsError]: () => false,
  [addTransactionsRequest]: () => true,
  [addTransactionsSuccess]: () => false,
  [addTransactionsError]: () => false,
});

const transactionsReducer = combineReducers({
  listTransactions, filter, loading
});
export default transactionsReducer;

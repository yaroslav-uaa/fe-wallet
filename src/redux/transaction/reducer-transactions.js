import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import action from './actions-transactions';

const listTransactions = createReducer([], {
  [action.getTransactionsSuccess]: (_, { payload }) => payload,
  [action.addTransactionsSuccess]: (state, { payload }) => [payload, ...state],
});
const filter = createReducer('', {
  [action.changeFilter]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
  [action.getTransactionsRequest]: () => true,
  [action.getTransactionsSuccess]: () => false,
  [action.getTransactionsError]: () => false,
  [action.addTransactionsRequest]: () => true,
  [action.addTransactionsSuccess]: () => false,
  [action.addTransactionsError]: () => false,
});

const transactionsReducer = combineReducers({
  listTransactions, filter, loading
});
export default transactionsReducer;

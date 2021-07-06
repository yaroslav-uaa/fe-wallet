import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import action from './actions-transactions';

const listTransactions = createReducer([], {
  [action.getTransactionsSuccess]: (_, { payload }) => payload,
  [action.addTransactionsSuccess]: (state, { payload }) => [payload, ...state],
});

const transactionsReducer = combineReducers({
  listTransactions,
});

export default transactionsReducer;

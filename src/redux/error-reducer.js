import { createReducer } from "@reduxjs/toolkit";
import {
  getTransactionsError,
  addTransactionError,
  deleteTransactionSuccess
} from './transaction/actions-transactions';

const setError = (_, { payload }) => payload;

const error = createReducer(null, {
  [getTransactionsError]: setError,
  [addTransactionError]: setError,
  [deleteTransactionSuccess]: setError,
});

export default error;
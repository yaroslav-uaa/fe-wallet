import { createReducer } from "@reduxjs/toolkit";
import {
  getTransactionsError,
  addTransactionError,
  deleteTransactionSuccess,
  updateTransactionError
} from './transaction/actions-transactions';

const setError = (_, { payload }) => payload;

const error = createReducer(null, {
  [getTransactionsError]: setError,
  [addTransactionError]: setError,
  [deleteTransactionSuccess]: setError,
  [updateTransactionError]: setError,
});

export default error;
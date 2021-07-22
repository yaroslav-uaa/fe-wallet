import { createReducer } from '@reduxjs/toolkit';
import {
  regError,
  signInError,
  signOutError,
  getCurrentUserError,
  uploadAvatarError,
} from './auth/auth-actions';
import { verifyResetTokenError } from './ResetPass/reset-actions';
import {
  getTransactionsError,
  addTransactionError,
  deleteTransactionSuccess,
  updateTransactionError,
} from './transaction/actions-transactions';

const setError = (_, { payload }) => payload;

const error = createReducer(null, {
  [regError]: setError,
  [signInError]: setError,
  [signOutError]: setError,
  [getCurrentUserError]: setError,
  [uploadAvatarError]: setError,
  [getTransactionsError]: setError,
  [addTransactionError]: setError,
  [deleteTransactionSuccess]: setError,
  [updateTransactionError]: setError,
  [verifyResetTokenError]: setError,
});

export default error;

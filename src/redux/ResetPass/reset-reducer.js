import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import resetActions from './reset-actions';

const resetToken = createReducer(null, {
  [resetActions.forgotPasswordSuccess]: (_, { payload }) => payload,
  [resetActions.verifyResetTokenSuccess]: (_, { payload }) =>
    payload.resetToken,
  [resetActions.resetPasswordSuccess]: () => null,
});

export default combineReducers({
  resetToken,
});

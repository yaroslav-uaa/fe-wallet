import { createAction } from '@reduxjs/toolkit';

// forgot password
const forgotPasswordRequest = createAction('auth/forgotPasswordRequest');
const forgotPasswordSuccess = createAction('auth/forgotPasswordSuccess');
const forgotPasswordError = createAction('auth/forgotPasswordError');

// verify resetToken
const verifyResetTokenRequest = createAction('auth/verifyResetTokenRequest');
const verifyResetTokenSuccess = createAction('auth/verifyResetTokenSuccess');
const verifyResetTokenError = createAction('auth/verifyResetTokenError');

// reset password
const resetPasswordRequest = createAction('auth/resetPasswordRequest');
const resetPasswordSuccess = createAction('auth/resetPasswordSuccess');
const resetPasswordError = createAction('auth/resetPasswordError');

const resetActions = {
  forgotPasswordRequest,
  forgotPasswordSuccess,
  forgotPasswordError,
  verifyResetTokenRequest,
  verifyResetTokenSuccess,
  verifyResetTokenError,
  resetPasswordRequest,
  resetPasswordSuccess,
  resetPasswordError,
};

export default resetActions;

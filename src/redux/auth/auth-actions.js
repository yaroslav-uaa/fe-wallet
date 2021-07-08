import { createAction } from '@reduxjs/toolkit';

// register new user
const regRequest = createAction('auth/regRequest');
const regSuccess = createAction('auth/regSuccess');
const regError = createAction('auth/regError');

// login
const signInRequest = createAction('auth/signInRequest');
const signInSuccess = createAction('auth/signInSuccess');
const signInError = createAction('auth/signInError');

// logout
const signOutRequest = createAction('auth/signOutRequest');
const signOutSuccess = createAction('auth/signOutSuccess');
const signOutError = createAction('auth/signOutError');

// get current user
const getCurrentUserRequest = createAction('auth/getCurrentUserRequest');
const getCurrentUserSuccess = createAction('auth/getCurrentUserSuccess');
const getCurrentUserError = createAction('auth/getCurrentUserError');

const authActions = {
  regRequest,
  regSuccess,
  regError,
  signInRequest,
  signInSuccess,
  signInError,
  signOutRequest,
  signOutSuccess,
  signOutError,
  getCurrentUserRequest,
  getCurrentUserSuccess,
  getCurrentUserError,
};

export default authActions;

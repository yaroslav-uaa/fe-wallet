import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import authActions from './auth-actions';

const initUserState = { name: null, email: null };

const user = createReducer(initUserState, {
  [authActions.regSuccess]: (_, { payload }) => payload,
  [authActions.signInSuccess]: (_, { payload }) => payload.user,
  [authActions.signOutSuccess]: () => initUserState,
  [authActions.getCurrentUserSuccess]: (_, { payload }) => payload.user,
});

const token = createReducer(null, {
  [authActions.regSuccess]: (_, { payload }) => payload.token,
  [authActions.signInSuccess]: (_, { payload }) => payload.token,
  [authActions.signOutSuccess]: () => null,
});

const isLoggedIn = createReducer(false, {
  [authActions.regSuccess]: () => true,
  [authActions.signInSuccess]: () => true,
  [authActions.getCurrentUserSuccess]: () => true,
  [authActions.signOutSuccess]: () => false,
  [authActions.regError]: false,
  [authActions.signInError]: false,
  [authActions.getCurrentUserError]: false,
});

const setError = (_, { payload }) => payload;

const error = createReducer(null, {
  [authActions.regError]: setError,
  [authActions.signInError]: setError,
  [authActions.signOutError]: setError,
  [authActions.getCurrentUserError]: setError,
});

export default combineReducers({
  user,
  token,
  isLoggedIn,
  error,
});

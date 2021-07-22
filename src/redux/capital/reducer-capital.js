import { createReducer } from '@reduxjs/toolkit';
import * as actions from './action-capital';
import { combineReducers } from 'redux';

const capital = createReducer(null, {
  [actions.addCapitalSuccess]: (_, { payload }) => payload,
  [actions.getCapitalSuccess]: (_, { payload }) => payload,
});

export default combineReducers({
  sum: capital,
});

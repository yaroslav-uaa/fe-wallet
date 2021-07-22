import { createAction } from '@reduxjs/toolkit';

export const getCapitalRequest = createAction('capital/getCapitalRequest');
export const getCapitalSuccess = createAction('capital/getCapitalSuccess');
export const getCapitalError = createAction('capital/getCapitalError');

export const addCapitalRequest = createAction('capital/addCapitalRequest');
export const addCapitalSuccess = createAction('capital/addCapitalSuccess');
export const addCapitalError = createAction('capital/addCapitalError');

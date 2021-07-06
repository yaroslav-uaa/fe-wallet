import { createAction } from '@reduxjs/toolkit';

const getTransactionsRequest = createAction(
  'transactions/getTransactionsRequest',
);
const getTransactionsSuccess = createAction(
  'transactions/getTransactionsSuccess',
);
const getTransactionsError = createAction('transactions/getTransactionsError');

const addTransactionsRequest = createAction(
  'transactions/addTransactionsRequest',
);
const addTransactionsSuccess = createAction(
  'transactions/addTransactionsSuccess',
);
const addTransactionsError = createAction('transactions/addTransactionsError');

export default {
  getTransactionsRequest,
  getTransactionsSuccess,
  getTransactionsError,
  addTransactionsRequest,
  addTransactionsSuccess,
  addTransactionsError,
};

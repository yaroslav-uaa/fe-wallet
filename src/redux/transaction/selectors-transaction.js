import { createSelector } from '@reduxjs/toolkit';

const getTransactions = state => state.transactions.listTransactions;
const getFilter = state => state.transaction.filter;

const getVisibleTransaction = createSelector(
  [getTransactions, getFilter],
  (transactions, filter) => {
    return transactions.filter(transaction =>
      transaction.name.toLowerCase().includes(filter.toLowerCase()),
    );
  },
);

export default {
  getTransactions,
  getFilter,
  getVisibleTransaction
};

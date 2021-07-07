import { createSelector } from '@reduxjs/toolkit';

const getTransactions = state => state.transactions.listTransactions;
const getFilter = state => state.transactions.filter;
const getIsLoading = (state) => state.contacts.loading;

const filterTransactions  = createSelector(
  [getTransactions, getFilter],
  (transactions, filter) => {
    return transactions.filter(transaction =>
      transaction.name.toLowerCase().includes(filter.toLowerCase()),
    );
  },
);
const transactionsSelectors = {
  getTransactions,
  getFilter,
  getIsLoading,
  filterTransactions 
};
export default transactionsSelectors;

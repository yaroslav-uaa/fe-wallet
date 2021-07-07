import { createSelector } from '@reduxjs/toolkit';

const getTransactions = state => state.transactions.listTransactions;
const getFilter = state => state.transaction.filter;
const getIsLoading = (state) => state.contacts.loading;

const filterContacts  = createSelector(
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
  filterContacts 
};
export default transactionsSelectors;

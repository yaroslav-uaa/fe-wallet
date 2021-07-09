import { createSelector } from 'reselect';

const getIsLoading = state => state.data.loading;

const getAllTransactions = state => state.data.result;

const getFilter = state => state.data.filter;

const filterTransactions = createSelector(
  [getAllTransactions, getFilter],
  (transactions, filter) => {
    return transactions.filter(transaction =>
      transaction.date.toLowerCase().includes(filter.toLowerCase()),
    );
  },
);

// eslint-disable-next-line
export default {
  getIsLoading,
  getAllTransactions,
  getFilter,
  filterTransactions,
};

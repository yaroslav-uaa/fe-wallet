import { createSelector } from 'reselect';

const getIsLoading = (state) => state.transactions.loading;

const getAllTransactions = (state) => state.transactions.items;

const getFilter = (state) => state.transactions.filter;

const filterTransactions = createSelector(
  [getAllTransactions, getFilter],
  (transactions, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return transactions.filter((transaction) =>
      transaction.name.toLowerCase().includes(normalizedFilter)
    );
  }
);


// eslint-disable-next-line
export default { getIsLoading, getAllTransactions, getFilter, filterTransactions };
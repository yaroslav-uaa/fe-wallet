import { createSelector } from 'reselect';

const getIsLoading = state => state.transactions.loading;

const getAllTransactions = state => state.transactions.result;
const totalTransactions = state => getAllTransactions(state).length;

const getAllCategoriesFromTransactions = state => state.transactions.categories;

const getFilter = state => state.transactions.filter;

const filterTransactions = createSelector(
  [getAllTransactions, getFilter],
  (transactions, filter) => {
    console.log(transactions);
    return transactions.filter(({ date }) =>
      date.toLowerCase().includes(filter.toLowerCase()),
    );
  },
);

// eslint-disable-next-line
export default {
  getIsLoading,
  getAllTransactions,
  getAllCategoriesFromTransactions,
  getFilter,
  filterTransactions,
  totalTransactions,
};

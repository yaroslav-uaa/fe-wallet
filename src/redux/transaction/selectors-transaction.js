import { createSelector } from 'reselect';

const getIsLoading = state => state.transactions.loading;

const getAllTransactions = state => state.transactions.result;
const totalTransactions = state => getAllTransactions(state).length;

const getAllCategoriesFromTransactions = state => state.transactions.categories;

const getFilter = state => state.transactions.filter;

const getLastTransaction = state => getAllTransactions(state)[0];

const filterTransactions = createSelector(
  [getAllTransactions, getFilter],
  (transactions, filter) => {
    return transactions.filter(({ date }) =>
      date.toLowerCase().includes(filter.toLowerCase()),
    );
  },
);

const transactionSelectors = {
  getIsLoading,
  getAllTransactions,
  getAllCategoriesFromTransactions,
  getFilter,
  filterTransactions,
  totalTransactions,
  getLastTransaction,
};
export default transactionSelectors;

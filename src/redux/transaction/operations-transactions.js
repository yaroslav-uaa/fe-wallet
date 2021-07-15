import axios from 'axios';
import Notify from '../../components/Notify/Notify';
import {
  getTransactionsRequest,
  getTransactionsSuccess,
  getTransactionsError,
  getTransactionsByDateRequest,
  getTransactionsByDateSuccess,
  getTransactionsByDateError,
  addTransactionRequest,
  addTransactionSuccess,
  addTransactionError,
  deleteTransactionRequest,
  deleteTransactionSuccess,
  deleteTransactionError,
  updateTransactionSuccess,
  updateTransactionRequest,
  updateTransactionError,
} from './actions-transactions';

axios.defaults.baseURL = 'http://localhost:4040/api';

const fetchTransactions = () => async dispatch => {
  dispatch(getTransactionsRequest());

  try {
    const { data } = await axios.get('/transactions');
    dispatch(getTransactionsSuccess(data));
  } catch (error) {
    dispatch(getTransactionsError(Notify.Error(error.message)));
  }
};

const getTransactionsByDate = (month, age) => async dispatch => {
  dispatch(getTransactionsByDateRequest());

  try {
    const { data } = await axios.get(`/categories?month=${month}&year=${age}`);
    dispatch(getTransactionsByDateSuccess(data));
  } catch (error) {
    dispatch(getTransactionsByDateError(Notify.Error(error.message)));
  }
};

const addTransaction = transaction => async dispatch => {
  dispatch(addTransactionRequest());
  try {
    const { data } = await axios.post('/transactions', transaction);
    Notify.Success('Transaction Add');
    dispatch(addTransactionSuccess(data));
  } catch (error) {
    dispatch(addTransactionError(Notify.Error(error.message)));
  }
};

const deleteTransaction = transactionId => async dispatch => {
  dispatch(deleteTransactionRequest());

  try {
    await axios.delete(`/transactions/${transactionId}`);
    dispatch(deleteTransactionSuccess(transactionId));
  } catch (error) {
    dispatch(deleteTransactionError(Notify.Error(error.message)));
  }
};

const updateTransaction =
  ({ date, category, income, comment, sum, transactionId }) =>
  async dispatch => {
    dispatch(updateTransactionRequest());
    const update = { date, income, category, comment, sum };
    try {
      const { data } = await axios.patch(
        `/transactions/${transactionId}`,
        update,
      );
      Notify.Success('Transaction Edited');
      dispatch(updateTransactionSuccess(data));
    } catch (error) {
      dispatch(updateTransactionError(error.message));
    }
  };

const operations = {
  fetchTransactions,
  addTransaction,
  deleteTransaction,
  updateTransaction,
  getTransactionsByDate,
};

export default operations;
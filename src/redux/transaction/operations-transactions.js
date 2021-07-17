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

import { alert } from '@pnotify/core';
import '@pnotify/core/dist/BrightTheme.css';

axios.defaults.baseURL = 'http://localhost:4040/api';
// axios.defaults.baseURL = 'http://be-wallet.herokuapp/api';

const fetchTransactions = () => async dispatch => {
  dispatch(getTransactionsRequest());

  try {
    const { data } = await axios.get('/transactions');
    dispatch(getTransactionsSuccess(data));
  } catch (error) {
    dispatch(getTransactionsError());
    alert({
      text: "You don't have transactions",
      type: 'error',
    });
  }
};

const getTransactionsByDate = (month, age) => async dispatch => {
  dispatch(getTransactionsByDateRequest());

  try {
    const { data } = await axios.get(`/categories?month=${month}&year=${age}`);
    dispatch(getTransactionsByDateSuccess(data));
  } catch (error) {
    dispatch(getTransactionsByDateError());
    alert({
      text: "You don't have transactions on this date",
      type: 'error',
    });
  }
};

const addTransaction = transaction => async dispatch => {
  dispatch(addTransactionRequest());
  try {
    const { data } = await axios.post('/transactions', transaction);
    Notify.Success('Transaction Add');
    dispatch(addTransactionSuccess(data));
    alert({
      text: 'Transaction added',
      type: 'success',
    });
  } catch (error) {
    alert({
      text: 'Invalid data',
      type: 'error',
    });
    dispatch(addTransactionError());
  }
};

const deleteTransaction = transactionId => async dispatch => {
  dispatch(deleteTransactionRequest());

  try {
    await axios.delete(`/transactions/${transactionId}`);
    dispatch(deleteTransactionSuccess(transactionId));
    alert({
      text: 'Transaction deleted',
      type: 'success',
    });
  } catch (error) {
    dispatch(deleteTransactionError());
  }
};

const updateTransaction =
  ({ date, category, income, comment, sum, transactionId }) =>
  async dispatch => {
    dispatch(updateTransactionRequest());
    const update = { date, income, category, comment, sum };
    try {
      const { data } = await axios.put(
        `/transactions/${transactionId}`,
        update,
      );
      dispatch(updateTransactionSuccess(data));
      alert({
        text: 'Transaction edited',
        type: 'success',
      });
    } catch (error) {
      dispatch(updateTransactionError(error.message));
    }
  };

// eslint-disable-next-line

export default {
  fetchTransactions,
  addTransaction,
  deleteTransaction,
  updateTransaction,
  getTransactionsByDate,
};

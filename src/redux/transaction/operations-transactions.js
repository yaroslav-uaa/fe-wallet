import axios from 'axios';
import {
  getTransactionsRequest,
  getTransactionsSuccess,
  getTransactionsError,
  addTransactionRequest,
  addTransactionSuccess,
  addTransactionError,
  deleteTransactionRequest,
  deleteTransactionSuccess,
  deleteTransactionError,
} from './actions-transactions';

axios.defaults.baseURL = 'http://localhost:4040';

const fetchTransactions = () => async (dispatch) => {
  dispatch(getTransactionsRequest());

  try {
    const { data } = await axios.get('/transactions');
    dispatch(getTransactionsSuccess(data));
  } catch (error) {
    dispatch(getTransactionsError(error));
  }
};

const addTransaction = ({ date, type, comment, sum, balance }) => async (dispatch) => {
  const transaction = {
    date, type, comment, sum, balance
  };

  dispatch(addTransactionRequest());

  try {
    const { data } = await axios.post('/transactions', transaction);
    dispatch(addTransactionSuccess(data));
  } catch (error) {
    dispatch(addTransactionError(error));
  }

};

const deleteTransaction = (transactionId) => async (dispatch) => {
  dispatch(deleteTransactionRequest());

  try {
    await axios.delete(`/transactions/${transactionId}`);
    dispatch(deleteTransactionSuccess(transactionId));
  } catch (error) {
    dispatch(deleteTransactionError(error));
  }
};

// eslint-disable-next-line
export default { fetchTransactions, addTransaction, deleteTransaction };
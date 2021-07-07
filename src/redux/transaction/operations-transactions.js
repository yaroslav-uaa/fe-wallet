import axios from 'axios';
import {
  getTransactionsRequest,
  getTransactionsSuccess,
  getTransactionsError,
  addTransactionsRequest,
  addTransactionsSuccess,
  addTransactionsError
} from './actions-transactions';

axios.defaults.baseURL = 'http://localhost:4040';

const getTransactions = () =>  async (dispatch) => {
  dispatch(getTransactionsRequest());
   try {
    const { data } = await axios.get('/contacts');
    dispatch(getTransactionsSuccess(data));
  } catch (error) {
    dispatch(getTransactionsError(error.message));
  }
};

const addTransactions = ({ date, category, type, comment, sum, balance }) => async (dispatch) => {
  const item = {
    date, category, type, comment, sum, balance
  };

  dispatch(addTransactionsRequest());

  try {
    const { data } = await axios.post('/transactions', item);
    dispatch(addTransactionsSuccess(data));
  } catch (error) {
    dispatch(addTransactionsError(error.message));
  }

};
const transactionsOperations = {
  getTransactions,
  addTransactions,
};

export default transactionsOperations;
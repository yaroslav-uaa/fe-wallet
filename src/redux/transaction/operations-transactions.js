import axios from 'axios';
import action from './actions-transactions';

axios.defaults.baseURL = 'http://localhost:4040';

const getTransactions = () =>  async (dispatch) => {
  dispatch(action.getTransactionsRequest());
   try {
    const { data } = await axios.get('/contacts');
    dispatch(action.getTransactionsSuccess(data));
  } catch (error) {
    dispatch(action.getTransactionsError(error.message));
  }
};

const addTransactions = ({ date, category, type, comment, sum, balance }) => async (dispatch) => {
  const item = {
    date, category, type, comment, sum, balance
  };

  dispatch(action.addTransactionsRequest());

  try {
    const { data } = await axios.post('/transactions', item);
    dispatch(action.addTransactionsSuccess(data));
  } catch (error) {
    dispatch(action.addTransactionsError(error.message));
  }

};
const transactionsOperations = {
  getTransactions,
  addTransactions,
};

export default transactionsOperations;
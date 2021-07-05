import axios from 'axios';
import action from './actions-transactions';

axios.defaults.baseURL = 'http://localhost:4040';

const getTransactions = () => dispatch => {
  dispatch(action.getTransactionsRequest());
  axios
    .get('/transactions')
    .then(({ data }) => {
      return dispatch(action.getTransactionsSuccess(data));
    })
    .catch(error => dispatch(action.getTransactionsError(error.message)));
};

const addTransactions = item => dispatch => {
  dispatch(action.addTransactionsRequest());
  console.log(item);
  axios
    .post('/transactions', item)
    .then(({ data }) => {
      console.log(data);
      return dispatch(action.addTransactionsSuccess(data));
    })
    .catch(error => dispatch(action.addTransactionsError(error.message)));
};

export default {
  getTransactions,
  addTransactions,
};

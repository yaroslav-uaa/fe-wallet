import * as actions from './action-capital';
import axios from 'axios';

axios.defaults.baseURL = 'https://be-wallet.herokuapp.com/api';

const getCapital = () => async dispatch => {
  dispatch(actions.getCapitalRequest());

  try {
    const { data } = await axios.get('/capital/sum');
    dispatch(actions.getCapitalSuccess(data.capital.sum));
  } catch (error) {
    dispatch(actions.getCapitalError());
  }
};

const addCapital = capital => async dispatch => {
  dispatch(actions.addCapitalRequest());
  try {
    const { data } = await axios.post('/capital', capital);
    dispatch(actions.addCapitalSuccess(data.capital.sum));
  } catch (error) {
    dispatch(actions.addCapitalError());
  }
};

export default {
  getCapital,
  addCapital,
};

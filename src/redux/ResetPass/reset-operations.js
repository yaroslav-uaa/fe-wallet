import axios from 'axios';
import resetActions from './reset-actions';
import { alert } from '@pnotify/core';
import '@pnotify/core/dist/BrightTheme.css';

axios.defaults.baseURL = 'https://be-wallet.herokuapp.com/api';

const forgotPassword = email => async dispatch => {
  dispatch(resetActions.forgotPasswordRequest());

  try {
    const { data } = await axios.post('/users/forgot-password', email);
    dispatch(resetActions.forgotPasswordSuccess(data));
    alert({
      text: data.message,
      type: 'success',
    });
  } catch (err) {
    dispatch(resetActions.forgotPasswordError(err.message));
  }
};

const verifyResetToken = resetToken => async dispatch => {
  dispatch(resetActions.forgotPasswordRequest());

  try {
    const { data } = await axios.get('/users/verified-reset-token', resetToken);

    dispatch(resetActions.forgotPasswordSuccess(data));
  } catch (err) {
    dispatch(resetActions.forgotPasswordError(err.message));
  }
};

const resetPassword =
  ({ token, password, confirmPassword }) =>
  async dispatch => {
    dispatch(resetActions.resetPasswordRequest());
    try {
      const credentials = { token, password, confirmPassword };
      const { data } = await axios.post('/users/reset-password', credentials);

      dispatch(resetActions.resetPasswordSuccess(data));
    } catch (err) {
      dispatch(resetActions.resetPasswordError(err.message));
    }
  };

const resetOperations = {
  forgotPassword,
  verifyResetToken,
  resetPassword,
};

export default resetOperations;

import axios from 'axios';
import authActions from './auth-actions';

axios.defaults.baseURL = 'http://localhost:4040/api';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const signUp = user => async dispatch => {
  dispatch(authActions.regRequest());

  try {
    const r = await axios.post('/users/signup', user);
    token.set(r.data.token);
    dispatch(authActions.regSuccess(r.data));
  } catch (err) {
    dispatch(authActions.regError(err.message));
  }
};

const signIn = user => async dispatch => {
  dispatch(authActions.signInRequest());

  try {
    const r = await axios.post('/users/signin', user);
    token.set(r.data.token);
    dispatch(authActions.signInSuccess(r.data));
  } catch (err) {
    dispatch(authActions.signInError(err.message));
  }
};

const signOut = () => async dispatch => {
  dispatch(authActions.signOutRequest());
  try {
    await axios.post('/users/signout');
    token.unset();
    dispatch(authActions.signOutSuccess());
  } catch (err) {
    dispatch(authActions.signOutError(err.message));
  }
};

const getCurrentUser = () => async (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();

  if (!persistedToken) return;
  token.set(persistedToken);
  dispatch(authActions.getCurrentUserRequest());

  try {
    const r = await axios.get('/users/current');
    dispatch(authActions.getCurrentUserSuccess(r.data));
  } catch (err) {
    dispatch(authActions.getCurrentUserError(err.message));
  }
};

const operations = { token, signUp, signIn, signOut, getCurrentUser };
export default operations;

import axios from 'axios';
import authActions from './auth-actions';
import { alert } from '@pnotify/core';
import '@pnotify/core/dist/BrightTheme.css';

axios.defaults.baseURL = 'https://be-wallet.herokuapp.com/api';

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
    alert({
      text: 'Invalid data',
      type: 'error',
    });
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
    alert({
      text: 'Invalid credentials',
      type: 'error',
    });
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

const updateUser = data => async dispatch => {
  dispatch(authActions.updateUserRequest());
  try {
    const res = await axios.put('/users/update', data);
    dispatch(authActions.updateUserSuccess(res.data));
  } catch (err) {
    dispatch(authActions.updateUserError(err.message));
  }
};

const uploadAvatar = file => async dispatch => {
  dispatch(authActions.uploadAvatarRequest());
  try {
    const fd = new FormData();
    fd.append('name', file.name);
    fd.append('avatar', file);
    const res = await axios.patch('/users/avatars', fd);
    dispatch(authActions.uploadAvatarSuccess(res.data));
  } catch (err) {
    dispatch(authActions.uploadAvatarError(err.message));
  }
};

const authOperations = {
  token,
  signUp,
  signIn,
  signOut,
  getCurrentUser,
  updateUser,
  uploadAvatar,
};

export default authOperations;

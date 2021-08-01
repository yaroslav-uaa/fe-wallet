import axios from 'axios';
import authActions from './auth-actions';
import { alert } from '@pnotify/core';
import '@pnotify/core/dist/BrightTheme.css';

axios.defaults.baseURL = 'http://localhost:4040/api';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const resetToken = {
  set(resetToken) {
    axios.defaults.headers.common.Authorization = `Bearer ${resetToken}`;
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
    alert({
      text: `${r.data.message}. Pls go to your http://${r.data.user.email} to verify it`,
      type: 'success',
      delay: 5000,
    });
  } catch (err) {
    dispatch(authActions.regError(err.response.data.message));
    alert({
      text: `${err.response.data.message}. Please clear localstorage & refresh this page. We will solve this problem very soon`,
      type: 'error',
      delay: 2000,
    });
  }
};

const signIn = user => async dispatch => {
  dispatch(authActions.signInRequest());

  try {
    const { data } = await axios.post('/users/signin', user);
    token.set(data.token);

    dispatch(authActions.signInSuccess(data));
  } catch (err) {
    dispatch(authActions.signInError(err.response.data.message));
    alert({
      text: `${err.response.data.message}`,
      type: 'error',
      delay: 2000,
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
    alert({
      text: `${err.message}`,
      type: 'error',
      delay: 2000,
    });
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
    token.unset();
    dispatch(authActions.getCurrentUserError(err.message));
    alert({
      text: `${err.response.data.message}`,
      type: 'error',
      delay: 2000,
    });
  }
};

const updateUser = user => async dispatch => {
  dispatch(authActions.updateUserRequest());
  try {
    const res = await axios.put('/users/update', user);
    dispatch(authActions.updateUserSuccess(res.data.result));
  } catch (err) {
    dispatch(authActions.updateUserError(err.message));
    alert({
      text: `${err.response.data.message}`,
      type: 'error',
      delay: 2000,
    });
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
    alert({
      text: `Success upload avatar`,
      type: 'success',
      delay: 2000,
    });
  } catch (err) {
    dispatch(authActions.uploadAvatarError(err.message));
  }
};

const authOperations = {
  token,
  resetToken,
  signUp,
  signIn,
  signOut,
  getCurrentUser,
  updateUser,
  uploadAvatar,
};

export default authOperations;

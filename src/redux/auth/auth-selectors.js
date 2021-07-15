const getIsAuthenticated = state => state.auth.isLoggedIn;
const getUserName = state => state.auth.user.name;
const getAvatar = state => state.auth.user.avatar;
const getToken = state => state.auth.token;

const authSelectors = {
  getIsAuthenticated,
  getUserName,
  getAvatar,
  getToken,
};

export default authSelectors;

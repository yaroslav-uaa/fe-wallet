const getIsAuthenticated = state => state.auth.isLoggedIn;
const getUserName = state => state.auth.user.name;
const getAvatar = state => state.auth.user.avatar;

const authSelectors = {
  getIsAuthenticated,
  getUserName,
  getAvatar,
};

export default authSelectors;

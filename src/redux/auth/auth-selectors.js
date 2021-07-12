const getIsAuthenticated = state => state.auth.isLoggedIn;
const getUserName = state => state.auth.user.name;

const authSelectors = {
  getIsAuthenticated,
  getUserName,
};

export default authSelectors;

import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router';
import selectors from '../redux/auth/auth-selectors';

function PrivateRoute({ component: Component, redirectTo, ...routeProps }) {
  const isLoggedIn = useSelector(selectors.getIsAuthenticated);
  return (
    <Route
      {...routeProps}
      render={props =>
        isLoggedIn ? <Component {...props} /> : <Redirect to={redirectTo} />
      }
    />
  );
}

export default PrivateRoute;

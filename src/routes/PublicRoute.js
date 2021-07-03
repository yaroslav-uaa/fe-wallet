import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router';
import selectors from '../redux/auth/auth-selectors';

function PublicRoute({ component: Component, redirectTo, ...routeProps }) {
  const isLoggedIn = useSelector(selectors.getIsAuthenticated);

  return (
    <Route
      {...routeProps}
      render={props =>
        isLoggedIn && routeProps.restricted ? (
          <Redirect to={redirectTo} />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
}

export default PublicRoute;

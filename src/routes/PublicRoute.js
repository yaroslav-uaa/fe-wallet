import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router';
import authSelectors from '../redux/auth/auth-selectors';

function PublicRoute({ component: Component, redirectTo, ...routeProps }) {
  const isAuth = useSelector(authSelectors.getToken);

  return (
    <Route
      {...routeProps}
      render={props =>
        isAuth && routeProps.restricted ? (
          <Redirect to="/" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
}

export default PublicRoute;

import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router';

import authSelectors from '../redux/auth/auth-selectors';

function PrivateRoute({ component: Component, redirectTo, ...routeProps }) {
  const isAuth = useSelector(authSelectors.getToken);
  return (
    <Route
      {...routeProps}
      render={props =>
        isAuth ? <Component {...props} /> : <Redirect to="/signin" />
      }
    />
  );
}

export default PrivateRoute;

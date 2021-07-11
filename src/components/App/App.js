import React, { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, Switch } from 'react-router';
import authOperations from '../../redux/auth/auth-operations';
import { Container } from '@material-ui/core';
import PrivateRoute from '../../routes/PrivateRoute';
import PublicRoute from '../../routes/PublicRoute';
// import LoadinfForm from '../LoginForm/SignInSide';
import Header from '../Header';
import DashboardPage from '../../views/DashboardPage/DashboardPage';
import Stats from '../../views/Stats/Stats';
// import Loader from '../Loader/Loader';
// import ButtonAddTransactions from '../ButtonAddTransactions/ButtonAddTransactions';
import Modal from '../Modal';
// import SignInSide from '../LoginForm/SignInSide';
import SignIn from '../SignInForm';
import authSelectors from '../../redux/auth/auth-selectors';
import SignUpPage from '../../views/SignUpPage/SignUpPage';
import { useMediaQuery } from 'react-responsive';
import CurrencyPage from '../../views/CurrencyPage/CurrencyPage';

//TODO: подключить routes, private, public, добавить компоненты lazy load

function App() {
  const dispatch = useDispatch();

  useEffect(() => dispatch(authOperations.getCurrentUser()), [dispatch]);
  const isAuth = useSelector(authSelectors.getIsAuthenticated);

  const isTabletOrMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <Container
      maxWidth="xl"
      disableGutters={false}
      style={{
        background: 'linear-gradient(90deg, #8609F9 0%, #311FA0 45%)',
        minHeight: '100vh',
      }}
    >
      {isAuth && <Header />}

      <Suspense fallback={<p>"wait..."</p>}>
        <Switch>
          <PublicRoute
            path="/signin"
            exact
            component={SignIn}
            redirectTo="/"
            restricted
          />

          <PublicRoute
            path="/signup"
            exact
            component={SignUpPage}
            redirectTo="/"
            restricted
          />

          <PrivateRoute
            path="/"
            exact
            component={DashboardPage}
            redirectTo="/signin"
          />

          <PrivateRoute
            path="/stats"
            exact
            component={Stats}
            redirectTo="/signin"
          />

          {isTabletOrMobile ? (
            <PrivateRoute
              path="/currency"
              exact
              component={CurrencyPage}
              redirectTo="/signin"
            />
          ) : (
            <Redirect from="/currency" to="/" />
          )}
        </Switch>
      </Suspense>
      {isAuth && <Modal />}
    </Container>
  );
}

export default App;

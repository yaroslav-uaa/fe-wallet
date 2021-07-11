import React, { Suspense, useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router';
import authOperations from '../../redux/auth/auth-operations';
import RegisterView from '../../views/qwertyA/qwertyA';
import { Container } from '@material-ui/core';
import PrivateRoute from '../../routes/PrivateRoute';
import PublicRoute from '../../routes/PublicRoute';
import LoadinfForm from '../LoginForm/SignInSide';
import Header from '../Header';
import { useMediaQuery } from 'react-responsive';
import DashboardPage from '../../views/DashboardPage/DashboardPage';
import Stats from '../../views/Stats/Stats';
import CurrencyPage from '../../views/CurrencyPage/CurrencyPage';
import Loader from '../Loader/Loader';
import ButtonAddTransactions from '../ButtonAddTransactions/ButtonAddTransactions';
import Modal from '../Modal';
import SignInSide from '../LoginForm/SignInSide';
import SignInPage from '../../views/qwertyB/qwertyB';

//TODO: подключить routes, private, public, добавить компоненты lazy load

function App() {
  const dispatch = useDispatch();

  useEffect(() => dispatch(authOperations.getCurrentUser()), [dispatch]);

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
      <Suspense fallback={<p>"wait..."</p>}>
        <Switch>
          <PublicRoute
            path="/signin"
            exact
            component={SignInPage}
            redirectTo="/"
            restricted
          />

          <PublicRoute
            path="/signup"
            exact
            component={RegisterView}
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
        </Switch>
      </Suspense>
      ;
      <Modal />
    </Container>
  );
}

export default App;

// <Suspense fallback={<p>"wait..."</p>}>
//   <Switch>
//     {/* для логіна */}
//     <PublicRoute />
//     {/* для реєстрації */}
//     <PublicRoute />
//     {/* для головної */}
//     <PrivateRoute />
//     {/* для статистики */}
//     <PrivateRoute />
//   </Switch>
// </Suspense>;

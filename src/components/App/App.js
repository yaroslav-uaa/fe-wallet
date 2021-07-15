import React, { lazy, Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch } from 'react-router';
import authOperations from '../../redux/auth/auth-operations';
import { Container } from '@material-ui/core';
import PrivateRoute from '../../routes/PrivateRoute';
import PublicRoute from '../../routes/PublicRoute';
import Header from '../Header';
// import authSelectors from '../../redux/auth/auth-selectors';
import GetCurrency from '../GetCurrency/GetCurrency';
import { useMediaQuery } from 'react-responsive';

const SignInPage = lazy(() => import('../../views/SignInPage/SignInPage'));
const SignUpPage = lazy(() => import('../../views/SignUpPage/SignUpPage'));
const MainPage = lazy(() => import('../../views/MainPage/MainPage'));
const MainPageMobile = lazy(() =>
  import('../../views/MainPageMobile/MainPageMobile'),
);

//TODO: подключить routes, private, public, добавить компоненты lazy load

function App() {
  const isTabletOrMobile = useMediaQuery({ maxWidth: 767 });
  const dispatch = useDispatch();

  useEffect(() => dispatch(authOperations.getCurrentUser()), [dispatch]);
  // const isAuth = useSelector(authSelectors.getIsAuthenticated);

  if (!localStorage.color) localStorage.setItem('color', '#0097a7');
  document.body.style.backgroundColor = localStorage.color;
  return (
    <Container
      maxWidth="1440px"
      disableGutters={false}
      style={{
        minHeight: '100vh',
      }}
    >
      <GetCurrency />

      <Suspense fallback={<p>"wait..."</p>}>
        <Switch>
          <PublicRoute path="/signin" exact component={SignInPage} restricted />

          <PublicRoute path="/signup" exact component={SignUpPage} restricted />

          <PrivateRoute
            path="/"
            component={isTabletOrMobile ? MainPageMobile : MainPage}
          />
        </Switch>
      </Suspense>
    </Container>
  );
}

export default App;

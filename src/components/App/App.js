import React, { lazy, Suspense, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Switch } from 'react-router';
import authOperations from '../../redux/auth/auth-operations';
import { Container } from '@material-ui/core';
import PrivateRoute from '../../routes/PrivateRoute';
import PublicRoute from '../../routes/PublicRoute';
import GetCurrency from '../GetCurrency/GetCurrency';
import { useMediaQuery } from 'react-responsive';
// import Loader from '../Loader/Loader';
import { Default } from 'react-spinners-css';

// views
const SignInPage = lazy(() => import('../../views/SignInPage/SignInPage'));
const SignUpPage = lazy(() => import('../../views/SignUpPage/SignUpPage'));
const MainPage = lazy(() => import('../../views/MainPage/MainPage'));
const MainPageMobile = lazy(() =>
  import('../../views/MainPageMobile/MainPageMobile'),
);

function App() {
  const isTabletOrMobile = useMediaQuery({ maxWidth: 767 });
  const dispatch = useDispatch();
  useEffect(() => dispatch(authOperations.getCurrentUser()), [dispatch]);

  // setTimeout(() => sessionStorage.setItem('loaderOff', true), 2000);
  // add background
  if (!localStorage.color) localStorage.setItem('color', '	#0162b1');
  document.body.style.backgroundColor = localStorage.color;

  return (
    <Container
      maxWidth="xl"
      disableGutters={false}
      style={{
        minHeight: '100vh',
      }}
    >
      <GetCurrency />

      <Suspense
        fallback={
          <Default
            color="#fffefe"
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          />
        }
      >
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

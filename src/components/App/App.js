import React, { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, Switch } from 'react-router';
import authOperations from '../../redux/auth/auth-operations';
import { Container } from '@material-ui/core';
import PrivateRoute from '../../routes/PrivateRoute';
import PublicRoute from '../../routes/PublicRoute';
import Header from '../Header';
// import Loader from '../Loader/Loader';
import SignIn from '../SignInForm';
import authSelectors from '../../redux/auth/auth-selectors';
import SignUpPage from '../../views/SignUpPage/SignUpPage';
import CurrencyPage from '../../views/CurrencyPage/CurrencyPage';
import GetCurrency from '../GetCurrency/GetCurrency';
// import UserPage from '../../views/UserPage/UserPage';
import MainPage from '../../views/MainPage/MainPage';
import { useMediaQuery } from 'react-responsive';
import '@pnotify/core/dist/PNotify.css';

//TODO: подключить routes, private, public, добавить компоненты lazy load

function App() {
  const isTabletOrMobile = useMediaQuery({ maxWidth: 767 });

  const dispatch = useDispatch();

  useEffect(() => dispatch(authOperations.getCurrentUser()), [dispatch]);
  const isAuth = useSelector(authSelectors.getIsAuthenticated);

  if (!localStorage.color) localStorage.setItem('color', '#212121');
  document.body.style.backgroundColor = localStorage.color;
  return (
    <Container
      maxWidth="xl"
      disableGutters={true}
      style={{
        minHeight: '100vh',
      }}
    >
      <GetCurrency />
      {isAuth && <Header />}

      <Suspense fallback={<p>"wait..."</p>}>
        <Switch>
          <PublicRoute
            path="/signin"
            exact
            component={SignIn}
            redirectTo="/main"
            restricted
          />

          <PublicRoute
            path="/signup"
            exact
            component={SignUpPage}
            redirectTo="/main"
            restricted
          />

          <PrivateRoute path="/" component={MainPage} redirectTo="/signin" />
          {/* <PrivateRoute path="/user" component={UserPage} /> */}
          {isTabletOrMobile ? (
            <PrivateRoute
              path="/currency"
              exact
              component={CurrencyPage}
              redirectTo="/signin"
            />
          ) : (
            <Redirect from="/currency" to="/main" />
          )}
        </Switch>
      </Suspense>
    </Container>
  );
}

export default App;

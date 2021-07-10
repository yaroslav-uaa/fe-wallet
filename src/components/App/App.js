import React, { Suspense } from 'react';
import { Container } from '@material-ui/core';
import { Redirect, Route, Switch } from 'react-router';
// import PrivateRoute from '../../routes/PrivateRoute';
// import PublicRoute from '../../routes/PublicRoute';
import { useMediaQuery } from 'react-responsive';
import DashboardPage from '../../views/DashboardPage/DashboardPage';
import Stats from '../../views/Stats/Stats';
import CurrencyPage from '../../views/CurrencyPage/CurrencyPage';
import Loader from '../Loader/Loader';
// import ButtonAddTransactions from '../ButtonAddTransactions/ButtonAddTransactions';
// import Modal from '../Modal';
import SignInPage from '../../views/qwertyB/qwertyB';
import RegisterView from '../../views/qwertyA/qwertyA';

//TODO: подключить routes, private, public, добавить компоненты lazy load

function App() {
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
      {/* <Modal /> */}

      <Suspense fallback={<Loader />}>
        <Switch>
          <Route path="/signin" exact component={SignInPage} />
          <Route path="/signup" exact component={RegisterView} />
          <Route path="/" exact component={DashboardPage} />
          <Route path="/stats" exact component={Stats} />
          {isTabletOrMobile ? (
            <Route path="/currency" component={CurrencyPage} />
          ) : (
            <Redirect from="/currency" to="/" />
          )}
        </Switch>
      </Suspense>
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

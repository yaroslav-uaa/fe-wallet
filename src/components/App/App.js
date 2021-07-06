import React from 'react';
import { Container } from '@material-ui/core';
import { Redirect, Route, Switch } from 'react-router';
// import PrivateRoute from '../../routes/PrivateRoute';
// import PublicRoute from '../../routes/PublicRoute';
import Header from '../Header';
import Currency from '../Currency/Currency';
import { useMediaQuery } from 'react-responsive';
import DashboardPage from '../../views/DashboardPage/DashboardPage';
import Stats from '../../views/Stats/Stats';

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
      <Header />
      <Switch>
        <Route path="/" exact component={DashboardPage} />
        <Route path="/stats" exact component={Stats} />
        {isTabletOrMobile ? (
          <Route path="/currency" component={Currency} />
        ) : (
          <Redirect from="/currency" to="/" />
        )}
      </Switch>
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

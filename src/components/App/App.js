import React, { Suspense } from 'react';
import { Container } from '@material-ui/core';
import { Route, Switch } from 'react-router';
import PrivateRoute from '../../routes/PrivateRoute';
import PublicRoute from '../../routes/PublicRoute';
import Header from '../Header';
import SideBar from '../SideBar';

//TODO: подключить routes, private, public, добавить компоненты lazy load

function App() {
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
      <SideBar />
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

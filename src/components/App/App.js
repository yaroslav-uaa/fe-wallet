import React, { Suspense } from 'react';
import { Container } from '@material-ui/core';
import { Switch } from 'react-router';
import ButtonAddTransactions from '../ButtonAddTransactions';
// import PrivateRoute from '../../routes/PrivateRoute';
// import PublicRoute from '../../routes/PublicRoute';

//TODO: подключить routes, private, public, добавить компоненты lazy load

function App() {
  return (
    <ButtonAddTransactions />
    // <Container
    //   maxWidth="xl"
    //   disableGutters={false}
    //   style={{
    //     background: 'linear-gradient(90deg, #8609F9 0%, #311FA0 45%)',
    //   }}
    // >
    //   <Suspense fallback="wait...">
    //     <Switch>
    //       {/* для логіна */}
    //       {/* <PublicRoute /> */}
    //       {/* для реєстрації */}
    //       {/* <PublicRoute /> */}
    //       {/* для головної */}
    //       {/* <PrivateRoute /> */}
    //       {/* для статистики */}
    //       {/* <PrivateRoute /> */}
    //     </Switch>
    //   </Suspense>
    // </Container>
  );
}

export default App;

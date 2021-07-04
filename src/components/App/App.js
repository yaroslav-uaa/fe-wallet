import React from 'react';
import { Container } from '@material-ui/core';
import HomeTab from '../HomeTab'
import transactions from '../../transaction.json'
// import { Switch } from 'react-router';
// import PrivateRoute from '../../routes/PrivateRoute';
// import PublicRoute from '../../routes/PublicRoute';

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
      <HomeTab transactions={transactions} />
    </Container>
  );
}

export default App;

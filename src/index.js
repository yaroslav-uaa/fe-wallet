import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { ThemeProvider } from '@material-ui/core/styles';
import variables from './variables';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';
import store from '../src/redux/store';

ReactDOM.render(
  <React.StrictMode>
   <Provider store={store}>
      {/* <PersistGate loading="wait..." persistor={store.persistor}> */} */}
        <BrowserRouter>
          <ThemeProvider theme={variables}>
            <App />
          </ThemeProvider>
        </BrowserRouter>
       {/* </PersistGate> */}
    </Provider> 
  </React.StrictMode>,
  document.getElementById('root'),
);

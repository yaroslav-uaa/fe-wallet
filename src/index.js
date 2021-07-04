import React from 'react'
import ReactDOM from 'react-dom'
// import './index.css'
import App from './components/App'


import { ThemeProvider } from '@material-ui/core/styles';
import variables from './variables'

ReactDOM.render(
  <React.StrictMode>
   <ThemeProvider theme={variables }>
      <App/>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

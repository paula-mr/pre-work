import MomentUtils from '@date-io/moment';
import 'moment/locale/pt-br';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Router from './router';
import 'react-toastify/dist/ReactToastify.css';
import AplicationContextProvider from './context';
import { theme } from './config/material.theme';

function App() {
  return (
    <div aria-label="PreWork" className="App">
      <MuiPickersUtilsProvider utils={MomentUtils} locale="pt-br">
        <AplicationContextProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <ToastContainer
              position="bottom-center"
              autoClose={5000}
              hideProgressBar
              newestOnTop
              closeOnClick
              theme="colored"
              rtl={false}
              pauseOnFocusLoss={false}
              draggable
              pauseOnHover
              style={{ width: 'fit-content', maxWidth: '80%' }}
            />
            <Router />
          </ThemeProvider>
        </AplicationContextProvider>
      </MuiPickersUtilsProvider>
    </div>
  );
}

export default App;

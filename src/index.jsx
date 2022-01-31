import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import AppRoutes from './routes/AppRoutes';
import theme from './styles/theme';
import Globalstyle from './styles/global.styles';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Globalstyle />
      <AppRoutes />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

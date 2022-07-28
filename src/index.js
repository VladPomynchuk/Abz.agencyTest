import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'App';
import { store } from 'redux/store';
import { Provider } from 'react-redux';
import GlobalStyle from 'components/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from 'components/theme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);

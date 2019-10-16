import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import {
    createMuiTheme,
    ThemeProvider,
  } from '@material-ui/core/styles';

import Application from './components/Application';
import store from './store';
import Main from './screens/Main';
import './app.scss';
import { CssBaseline } from '@material-ui/core';
// Create main element
const mainElement = document.createElement('div');
document.body.appendChild(mainElement);

const font = document.createElement('link');
font.setAttribute('re','stylesheet');
font.setAttribute('href',"https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap");
document.body.appendChild(font);

const icons = document.createElement('link');
icons.setAttribute('re','stylesheet');
icons.setAttribute('href',"https://fonts.googleapis.com/icon?family=Material+Icons");
document.body.appendChild(icons);

const theme = createMuiTheme({
    palette: {
      type: 'dark',
    }
  });

// Render components
const render = (Component: () => JSX.Element) => {
    ReactDOM.render(
        <AppContainer>
            <Provider store={store}>
            <ThemeProvider theme={theme}>
            <CssBaseline />
                <Main/>
            </ThemeProvider>
            </Provider>
        </AppContainer>,
        mainElement
    );
};

render(Application);

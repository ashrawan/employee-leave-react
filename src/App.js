import React, { Component } from 'react';

import configureStore from './redux/store/configureStore';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import AppRouter from './routers/AppRouter';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Provider store={store}>
          <AppRouter/>
        </Provider>
      </BrowserRouter>
    );
  }
}

export default App;

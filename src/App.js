import React, { Component } from 'react';

import configureStore from './redux/store/configureStore';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import axios from 'axios';
import AppRouter from './routers/AppRouter';

// axios.defaults.baseURL = 'http://127.0.0.1:8080/api/';
axios.defaults.baseURL = 'https://employeeleave.herokuapp.com/api/';
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

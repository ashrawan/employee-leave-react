import React, { Component } from 'react';
import './App.css';
import AppRouter from './routers/AppRouter';

import configureStore from './redux/store/configureStore';
import { Provider } from 'react-redux';
import axios from 'axios';
const store = configureStore();

// axios.defaults.baseURL = 'http://127.0.0.1:8080/api/';
axios.defaults.baseURL = 'https://employeeleave.herokuapp.com/api/';

class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
            <AppRouter />
        </Provider>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import AppRouter from './routers/AppRouter';

import configureStore from './redux/store/configureStore';
import { Provider } from 'react-redux';
const store = configureStore();

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

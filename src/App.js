import React, { Component } from 'react';

import configureStore from './redux/store/configureStore';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import AppRouter from './routers/AppRouter';
import {startFetchuser} from './redux/actions/user';

const store = configureStore();

class App extends React.Component {
  render() {

    if(!!localStorage.getItem("token")){
  
       store.dispatch(startFetchuser()).then(
           (response)=>{
            
           if(store.getState().user.id <= 0){
              localStorage.removeItem("token");
              // location.reload();
           }
          });
        }

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

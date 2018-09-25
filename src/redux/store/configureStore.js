import {createStore, combineReducers , applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

import employeeReducer from '../reducers/employeeReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default() => {
  const store = createStore(combineReducers({
    //   token:tokenReducer,
      employee:employeeReducer,
    }),
    composeEnhancers(applyMiddleware(thunk))
);
  return store;
};
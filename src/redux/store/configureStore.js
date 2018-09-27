import {createStore, combineReducers , applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

import employeeReducer from '../reducers/employeeReducer';
import employeeLeaveReducer from '../reducers/employeeLeaveReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default() => {
  const store = createStore(combineReducers({
    //   token:tokenReducer,
      employees: employeeReducer,
      employeeLeave: employeeLeaveReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
);
  return store;
};
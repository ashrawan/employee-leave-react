import {createStore, combineReducers , applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

import employeeReducer from '../reducers/employeeReducer';
import employeeLeaveReducer from '../reducers/employeeLeaveReducer';
import leaveTypeReducer from '../reducers/leaveTypeReducer';
import tokenReducer from '../reducers/tokenReducer';
import userReducer from '../reducers/userReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default() => {
  const store = createStore(
    combineReducers({
      token:tokenReducer,
      employees: employeeReducer,
      employeeLeaves: employeeLeaveReducer,
      leaveTypes: leaveTypeReducer,
      user: userReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
);
  return store;
};
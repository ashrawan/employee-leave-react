import {API} from '../../utils/api';

export const fetchEmployee = (employees) => ({
  type: 'FETCH_EMPLOYEE',
  employees
});

// ADD_EMPLOYEE
export const addEmployee = (employee) => ({
  type: 'ADD_EMPLOYEE',
  employee
});

// EDIT_EMPLOYEE
export const editEmployee = (id, updates) => ({
  type: 'EDIT_EMPLOYEE',
  id,
  updates
});

// REMOVE_EMPLOYEE
export const removeEmployee = ({ id } = {}) => ({
  type: 'REMOVE_EMPLOYEE',
  id
});


export const startFetchEmployee = () => {
  return (dispatch) => {
    return API.get('/employees')
      .then(function (response) {
        dispatch(fetchEmployee(response.data.content));
        return response.data.content;
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

export const startAddEmployee = (employee) => {
  return (dispatch) => {
  
    return API.post('/employees', employee)
      .then((response) => {
  
      dispatch(addEmployee(response.data));
      }).catch((error) => {
        console.log("Error === ", error);
      });

  };
};

export const startRemoveEmployee = (id) => {
  return (dispatch) => {
     return API.delete('/employees/'+id)
      .then(function (response) {
         dispatch(removeEmployee(id));
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};


export const startEditEmployee = (employee) => {
  return (dispatch) => {
    return API.put('/employees', employee)
      .then((response) => {
        console.log("employees ", response.data);
        dispatch(editEmployee(response.data.id, response.data))
      }).catch((error) => {
        console.log("Error === ", error.respone.data);
      });
  };

};


import axios from 'axios';

// ADD_EMPLOYEE
export const addEmployee = (employee) => ({
  type: 'ADD_EMPLOYEE',
  employee
});

export const startAddEmployee = (employee) => {
  return (dispatch) => {
  
    axios.post('/api/employees', employee)
      .then((response) => {
  
      dispatch(addEmployee(response.data));
      }).catch((error) => {
        console.log("Error === ", error);
      });

  };
};


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

export const fetchEmployee = (features) => ({
  type: 'FETCH_EMPLOYEE',
  features
});


export const startRemoveEmployee = (id) => {
  return (dispatch) => {
     return axios.delete('/api/employees/'+id)
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
    axios.put('/api/employees', employee)
      .then((response) => {
        console.log("employees ", response.data);
        dispatch(editEmployee(response.data.id, response.data))
      }).catch((error) => {
        console.log("Error === ", error);
      });
  };

};

export const startFetchEmployee = () => {
  return (dispatch) => {
    return axios.get('/api/employees')
      .then(function (response) {
        dispatch(fetchEmployee(response.data));
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};


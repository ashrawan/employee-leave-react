import axios from 'axios';

export const fetchEmployeeLeave = (employeeLeaves) => ({
  type: 'FETCH_EMPLOYEELEAVE',
  employeeLeaves
});

// ADD_EMPLOYEELEAVE
export const addEmployeeLeave = (employeeLeave) => ({
  type: 'ADD_EMPLOYEELEAVE',
  employeeLeave
});

// EDIT_EMPLOYEELEAVE
export const editEmployeeLeave = (id, updates) => ({
  type: 'EDIT_EMPLOYEELEAVE',
  id,
  updates
});

// REMOVE_EMPLOYEELEAVE
export const removeEmployeeLeave = ({ id } = {}) => ({
  type: 'REMOVE_EMPLOYEELEAVE',
  id
});


export const startFetchEmployeeLeave = () => {
  return (dispatch) => {
    return axios.get('/employee-leaves')
      .then(function (response) {
        dispatch(fetchEmployeeLeave(response.data.content));
        return response.data.content;
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

export const startAddEmployeeLeave = (employeeLeave) => {
  return (dispatch) => {
  
    return axios.post('/employee-leaves', employeeLeave)
      .then((response) => {
  
      dispatch(addEmployeeLeave(response.data));
      }).catch((error) => {
        console.log("Error === ", error);
      });

  };
};

export const startRemoveEmployeeLeave = (id) => {
  return (dispatch) => {
     return axios.delete('/employee-leaves'+id)
      .then(function (response) {
         dispatch(removeEmployeeLeave(id));
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};


export const startEditEmployeeLeave = (employeeLeave) => {
  return (dispatch) => {
    return axios.put('/employee-leaves', employeeLeave)
      .then((response) => {
        console.log("employeeLeaves ", response.data);
        dispatch(editEmployeeLeave(response.data.id, response.data))
      }).catch((error) => {
        console.log("Error === ", error);
      });
  };

};


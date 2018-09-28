import axios from 'axios';

export const fetchLeaveType = (leaveTypes) => ({
  type: 'FETCH_LEAVETYPE',
  leaveTypes
});

// ADD_LEAVETYPE
export const addLeaveType = (leaveType) => ({
  type: 'ADD_LEAVETYPE',
  leaveType
});

// EDIT_LEAVETYPE
export const editLeaveType = (id, updates) => ({
  type: 'EDIT_LEAVETYPE',
  id,
  updates
});

// REMOVE_LEAVETYPE
export const removeLeaveType = ({ id } = {}) => ({
  type: 'REMOVE_LEAVETYPE',
  id
});


export const startFetchLeaveType = () => {
  return (dispatch) => {
    return axios.get('/leave-types')
      .then(function (response) {
        dispatch(fetchLeaveType(response.data));
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

export const startAddLeaveType = (leaveType) => {
  return (dispatch) => {
  
    return axios.post('/leave-types', leaveType)
      .then((response) => {
  
      dispatch(addLeaveType(response.data));
      }).catch((error) => {
        console.log("Error === ", error);
      });

  };
};

export const startRemoveLeaveType = (id) => {
  return (dispatch) => {
     return axios.delete('/leave-types/'+id)
      .then(function (response) {
         dispatch(removeLeaveType(id));
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};


export const startEditLeaveType = (leaveType) => {
  return (dispatch) => {
    return axios.put('/leave-types', leaveType)
      .then((response) => {
        console.log("leaveTypes ", response.data);
        dispatch(editLeaveType(response.data.id, response.data))
      }).catch((error) => {
        console.log("Error === ", error);
      });
  };

};


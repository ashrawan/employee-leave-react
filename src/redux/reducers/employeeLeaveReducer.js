const employeeLeaveReducerDefaultState = [];

export default (state = employeeLeaveReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EMPLOYEELEAVE':
      return [
        ...state,
        action.employeeLeave
      ];
    case 'FETCH_EMPLOYEELEAVE':
      return[
        ...action.employeeLeaves
      ]
      
    case 'EDIT_EMPLOYEELEAVE':
      return state.map((employeeLeave) => {
        if (employeeLeave.id === action.id) {
          return {
            ...employeeLeave,
            ...action.updates
          };
        } else {
          return employeeLeave;
        };
      });
    
      case 'REMOVE_EMPLOYEELEAVE':
      return state.filter(({ id }) => id !== action.id);

    default:
      return state;
  }
};

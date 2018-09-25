const employeeReducerDefaultState = [];

export default (state = employeeReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EMPLOYEE':
      return [
        ...state,
        action.employee
      ];
    case 'FETCH_EMPLOYEE':
      return[
        ...action.employees
      ]
      
    case 'EDIT_EMPLOYEE':
      return state.map((employee) => {
        if (employee.id === action.id) {
          return {
            ...employee,
            ...action.updates
          };
        } else {
          return employee;
        };
      });
    
      case 'REMOVE_EMPLOYEE':
      return state.filter(({ id }) => id !== action.id);

    default:
      return state;
  }
};

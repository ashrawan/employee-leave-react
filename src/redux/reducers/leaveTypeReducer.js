const leaveTypeReducerDefaultState = [];

export default (state = leaveTypeReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_LEAVETYPE':
      return [
        ...state,
        action.leaveType
      ];
    case 'FETCH_LEAVETYPE':
      return[
        ...action.leaveTypes
      ]
      
    case 'EDIT_LEAVETYPE':
      return state.map((leaveType) => {
        if (leaveType.id === action.id) {
          return {
            ...leaveType,
            ...action.updates
          };
        } else {
          return leaveType;
        };
      });
    
      case 'REMOVE_LEAVETYPE':
      return state.filter(({ id }) => id !== action.id);

    default:
      return state;
  }
};

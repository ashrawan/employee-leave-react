const userReducerDefaultState = {};

export default (state = userReducerDefaultState, action) =>{
    switch(action.type){
        
        case 'FETCH_USER':
            return  action.user

         case 'CLEAR_USER':
            return {}   
            
        default:
            return state;    
    };
};
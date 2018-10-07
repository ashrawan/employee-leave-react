//User Reducer

const tokenReducerDefaultState = {
    token:'',
    error: '',
    isLoading: false,
    redirect:''
};

export default (state = tokenReducerDefaultState , action) => {
    switch(action.type){

        case 'LOGIN':
            return{
                ...state,
                token:action.token
            }

         case 'ERROR': 
            return{
                ...state,
                error:action.error
            }
        
         case 'IS_LOADING':
            return{
                  ...state,
                  isLoading:action.isloading  
            }   

            case 'REDIRECT_TO':
            return{
                  ...state,
                  redirect:action.redirect  
            }   

            case 'EMPTY':
            return  {
                ...tokenReducerDefaultState
            }

         default:
            return state;   
    }
};

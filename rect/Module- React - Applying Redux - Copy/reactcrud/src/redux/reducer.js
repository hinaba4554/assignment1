import * as types from "./actiontype";
const initialstate = {
    users:[],
    user:{},
    loading:true,
}
// to create reducer using state management library
const userReducer = (state = initialstate,action)=>{
     switch(action.type){
        case types.GET_USERS:
            return{
                ...state,
                users:action.payload,
                loading:false,
            }
            case types.DELETE_USER:
            case types.ADD_USER:
            case types.UPDATE_USER:
                return{
                    ...state,
                    loading:false,
                };
            case types.GET_SINGLE_USER:
              return {
                ...state,
                user:action.payload,
                loading:false,
              }    
        default:
            return state;
     }
};

export default userReducer;

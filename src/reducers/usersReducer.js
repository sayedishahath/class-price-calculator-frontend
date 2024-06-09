const initialState = {
    data: []
}
export default function UsersReducer (state= initialState,action){
    switch(action.type){
        case 'GET_USERS':{
            return{
                ...state,data:action.payload
            }
        }
        default :{
            return state
        }
    }
}
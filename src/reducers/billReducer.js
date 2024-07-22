const initialState = {
    data: [],
}

export default function BillReducer(state=initialState,action){
    switch(action.type){
        case "CREATE_BILL":{
            return {
                ...state,data:[...state.data,action.payload]
            }
        }
        case "GET_BILLS":{
            return{...state,data:action.payload}
        }
        case "DELETE_SINGLE_BILL":{
            return{...state,data:state.data.filter((bill)=>bill._id!==action.payload._id)}
        }
        default :{
            return state
        }
    }
}
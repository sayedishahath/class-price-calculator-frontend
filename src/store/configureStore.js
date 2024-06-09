import { createStore, combineReducers, applyMiddleware } from "redux"
import { thunk } from "redux-thunk"
import calculationReducer from '../reducers/calculationReducers'
import BillReducer from "../reducers/billReducer"
import UsersReducer from "../reducers/usersReducer"
const configureStore = () => {
    const store = createStore(combineReducers({
        calculations:calculationReducer,
        bills:BillReducer,
        users:UsersReducer
    }), applyMiddleware(thunk))

    return store
}

export default configureStore
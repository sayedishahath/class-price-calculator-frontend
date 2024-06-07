import { createStore, combineReducers, applyMiddleware } from "redux"
import { thunk } from "redux-thunk"
import calculationReducer from '../reducers/calculationReducers'
const configureStore = () => {
    const store = createStore(combineReducers({
        calculations:calculationReducer,
    }), applyMiddleware(thunk))

    return store
}

export default configureStore
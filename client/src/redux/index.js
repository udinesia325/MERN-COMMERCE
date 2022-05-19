import {createStore,applyMiddleware,combineReducers} from "redux"
import thunk from "redux-thunk"
import loginReducers from "./reducers/loginReducers"

const rootReducers = {
  login:loginReducers
}

export default createStore(combineReducers(rootReducers),applyMiddleware(thunk))
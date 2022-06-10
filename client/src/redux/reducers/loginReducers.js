import {LOGIN_SUCCESS,LOGIN_FAIL,LOGIN_REQ,LOGOUT} from "../types/loginTypes"
const initialState = JSON.parse(localStorage.getItem("loginState")) || {
  isLogin:false,
  username:"",
  token:"",
  error:"",
  isLoading:false
}

const reducer = (state=initialState ,action) => {
  switch (action.type){
    case LOGIN_SUCCESS:
      
      const newState = {
        ...state,
        isLogin:true,
        isLoading: false,
        token:action.payload.token,
        username:action.payload.username,
      }
      localStorage.setItem("loginState",JSON.stringify(newState))
      return newState
    case LOGIN_FAIL:
      return {
        ...state,
        isLoading:false,
        isLogin:false,
        token:"",
        error:action.payload
      }
     case LOGIN_REQ:
       return {
         ...state,
         isLoading:true
       }
     case LOGOUT:
       localStorage.removeItem("loginState")
       return {
         ...initialState,
         isLogin:false,
         token:""
       }
     case "CLEAR":
       return {
         ...initialState,
         error:""
       }
    default : return state
  }
}
export default reducer
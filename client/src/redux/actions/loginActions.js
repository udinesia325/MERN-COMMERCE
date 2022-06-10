import {axiosInstance} from "../../config"
import {LOGIN_SUCCESS,LOGIN_REQ,LOGIN_FAIL,LOGOUT} from "../types/loginTypes"
export const loginSuccess = (payload) => {
  return {
    type:LOGIN_SUCCESS,
    payload
  }
}
export const loginRequest = () => {
  return {
    type:LOGIN_REQ
  }
}
export const loginFail = (error) => {
  return {
    type:LOGIN_FAIL,
    payload:error
  }
}
export const logout= () => {
  return {
    type:LOGOUT
  }
}
export const loginProcess = (username,password) => async (dispatch) => {
  dispatch(loginRequest())
  try{
    const response = await axiosInstance.post("auth/login",{username, password})
    
    dispatch(loginSuccess(response.data))
  }catch(e){
   // console.log(e.response.data);
    dispatch(loginFail(e.response.data.message))
  }
}
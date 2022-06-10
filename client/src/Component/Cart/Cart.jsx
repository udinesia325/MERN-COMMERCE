import {useEffect} from "react"
import {useNavigate} from "react-router-dom"
import {useSelector,useDispatch} from "react-redux"


export default function () {
  const navigate = useNavigate()
  const loginState = useSelector(state => state.login)
  useEffect(()=>{
  //jika belum login kembaliin ke home
    if(!loginState.isLogin){
     // navigate("/")
    }
  },[loginState])
  return (
  <div>
    <h1>Halaman Shop</h1>
  </div>)
}
import {useEffect} from "react"
import {useNavigate} from "react-router-dom"
import {useSelector,useDispatch} from "react-redux"
import CartItem from "./CartItem"

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
  <div className="h-screen w-screen">
    <div className="container p-5 flex gap-8">
 <CartItem />
    </div>
    <div className="h-16 w-screen border fixed bottom-0 p-5 flex justify-between">
    <span className="font-bold">Total : 800000</span>
    <button className=" h-8 w-24 bg-red-600 text-white font-bold rounded"> Checkout</button>
    
    </div>
  </div>)
}
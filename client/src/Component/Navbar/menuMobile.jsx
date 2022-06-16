import dummyUser from "../img/dummyUser.png";
import {useSelector, useDispatch} from "react-redux"
import {Link} from "react-router-dom"
import {logout} from "../../redux/actions/loginActions"

function MenuMobile() {
  const loginState = useSelector(state => state.login)
 const dispatch = useDispatch()
  return (
    <div className="h-screen w-72 float-right bg-blue-50 z-50 p-5 md:m-3 md:rounded-2xl shadow-xl ">
      <div className="flex bg-blue-100 p-5 rounded-lg items-center shadow-md">
        <img src={dummyUser} className="h-10 mr-5" />
        <div className="">
          <h1 className="text-sm text-center font-bold text-gray-700">
            {loginState.username}
          </h1>
        </div>
      </div>
      {/* ///////// */}
      <h1 className="font-bold text-lg  mt-5 text-gray-700">
        Riwayat Aktivitas
      </h1>
      
      {
        loginState.isLogin ? 
      <button onClick={()=>dispatch(logout())} className="h-8 w-1/2 bg-red-400 text-white font-semibold block mx-auto">Logout</button> :
      <Link to="/login" className="h-8 w-1/2 bg-steal-600 text-white font-semibold text-center">Login</Link>
      }
    </div>
  );
}

export default MenuMobile;

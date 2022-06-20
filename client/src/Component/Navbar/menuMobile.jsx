import dummyUser from "../img/dummyUser.png";
import {useSelector, useDispatch} from "react-redux"
import {Link} from "react-router-dom"
import {logout} from "../../redux/actions/loginActions"

function MenuMobile() {
  const loginState = useSelector(state => state.login)
 const dispatch = useDispatch()
  return (
    <div className="h-screen w-72 
                   absolute right-0 
                   bg-red-600 
                   z-50 
                   p-5
                   shadow-xl ">

        <div className="flex flex-col items-center gap-y-4">

          <img src={dummyUser} className="p-1 
                                          w-24 aspect-w-1 
                                          border-white-300 border-2 rounded-full" />

          <div className="text-center mb-4">
              {loginState.isLogin && 
                <p className="text-white text-sm font-thin">{loginState.username}</p>
              }
              {!loginState.isLogin &&
                <p className="text-white text-sm font-thin font-poppins">Anda belum login, silahkan&nbsp;
                <Link to="/login" className="md:hidden
                                            text-white
                                            underline">login
                </Link>.</p>
              }
          </div>

        </div>
      
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

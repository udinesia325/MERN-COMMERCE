import dummyUser from "../img/dummyUser.png";
import {useSelector} from "react-redux"
import { AiOutlineHistory } from 'react-icons/ai'
import {Link} from "react-router-dom"


function MenuMobile() {
  const loginState = useSelector(state => state.login)

  return (
    <div className="h-screen w-72 
                   float-right 
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
        
        <div className="flex gap-2 items-center">
          <AiOutlineHistory className="text-white" />
          <p className="font-medium font-poppins text-base text-white tracking-wide">Riwayat aktivitas</p>
        </div>

    </div>
  );
}

export default MenuMobile;

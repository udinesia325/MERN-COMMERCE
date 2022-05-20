import React, { useState } from "react";
import dummyLogo from "../img/dummyLogo.png";
import iconCari from "../img/iconCari.png";
import menuIcon from "../img/menu.svg";
import closeIcon from "../img/close.svg";
import cart from "../img/cart.png";
import MenuMobile from "./menuMobile";
import {Link} from "react-router-dom"
import {useSelector,useDispatch} from "react-redux"
import {logout} from "../../redux/actions/loginActions"
import { setup } from "../../config";
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const toggleHandler = () => {
    setToggleMenu(!toggleMenu);
    //console.log(toggleMenu);
  };
  const loginState = useSelector(state => state.login)
  const dispatch = useDispatch()
  return (
    <nav className="sticky top-0 z-50">
      <div className="flex p-7 bg-blue-50 items-center w-screen justify-between">
        <div className="hidden md:flex items-center">
          <img src={dummyLogo} className="h-10 hidden md:block" />
          <h1 className="pl-3 hidden md:block ">{setup.namaApp}</h1>
        </div>
        <form action="" className="flex items-center">
          <input
            type="text"
            name="cariBarang"
            id=""
            placeholder="Cari di Tokopakedi"
            className="p-2 w-40 pl-5 pr-5 rounded-xl text-sm md:p-2 md:pl:3 md:r:3 md:w-[30vw]"
          />
          <button>
            <img src={iconCari} alt="" className="h-5 ml-2" />
          </button>
        </form>

        <div className="flex items-center">
          <Link to="/cart">
            <img src={cart} alt="" className="h-6 mr-3 ml-3" />
          </Link>
          {!loginState.isLogin &&<Link to="/login" className="block bg-green-400 text-white font-semibold rounded-md py-1 px-2 mr-2 shadow-md">Log In</Link>}
         {loginState.isLogin && <button className="block bg-red-400 text-white font-semibold rounded-md py-1 px-2 shadow-md" onClick={()=>dispatch(logout())}  >Log Out</button>}
          <button onClick={toggleHandler} className="">
          <img src={toggleMenu? closeIcon : menuIcon} className="mr-3 ml-3" />
          </button>
        </div>
      </div>
      {toggleMenu && <MenuMobile />}
    </nav>
  );
};

export default Navbar;

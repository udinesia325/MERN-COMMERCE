import React, { useState } from "react";
import dummyLogo from "../img/dummyLogo.png";
import { AiOutlineSearch, AiOutlineClose, AiOutlineShoppingCart } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';
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
    <nav className="sticky top-0 z-50
                    w-screen
                    bg-red-600">

      <div className="w-10/12
                      m-auto
                      grid grid-cols-2 gap-y-5
                      md:grid-cols-3
                      py-3.5">

        <div className="flex items-center gap-3">
          <img src={dummyLogo} className="h-7 md:h-10" />
            <h1 className="font-poppins tracking-wider text-white 
                          md:font-semibold">
              {setup.namaApp}
            </h1>
        </div>

        <div className="justify-self-end
                        flex items-center gap-8 md:gap-5 lg:gap-8
                        md:order-3">
          <Link to="/cart">
            <AiOutlineShoppingCart className="text-xl md:text-2xl text-white" />
          </Link>
          {!loginState.isLogin &&
            <Link to="/login" className="hidden md:block 
                                         bg-green-400 
                                         text-white font-semibold 
                                         rounded 
                                         py-1 px-5">
              Log In
            </Link>
          }
          {loginState.isLogin && 
            <button className="hidden md:block 
                               bg-red-400 
                               text-white font-semibold 
                               rounded 
                               py-1 px-5" 
                    onClick={()=>dispatch(logout())}  >
              Log Out
            </button>
          }
          <button onClick={toggleHandler} className="md:hidden">
            {toggleMenu? 
              <AiOutlineClose className="text-xl text-white" /> : 
              <GiHamburgerMenu className="text-xl text-white" />
            }
          </button>
        </div>

        <form action="" className="justify-self-center 
                                   w-full
                                   md:w-fit
                                   justify-center
                                   col-span-2
                                   flex items-center gap-3
                                   md:order-2 md:col-span-1">
          <input
            type="text"
            name="cariBarang"
            id=""
            placeholder="Cari di Tokopakedi"
            className="w-10/12
                       md:w-72
                       lg:w-96
                       p-2
                       rounded text-sm"
          />
          <button>
            <AiOutlineSearch className="text-xl md:text-2xl text-white" />
          </button>
        </form>
      </div>
      {toggleMenu && <MenuMobile />}
    </nav>
  );
};

export default Navbar;

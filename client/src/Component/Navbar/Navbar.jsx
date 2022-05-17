import React, { useState } from "react";
import { Link } from "react-router-dom";
import dummyLogo from "../img/dummyLogo.png";
import MenuMobile from "./menuMobile";
import { AiOutlineShoppingCart, AiOutlineSearch } from 'react-icons/ai'
import { GiHamburgerMenu } from 'react-icons/gi'
import { GrClose } from 'react-icons/gr'

import { setup } from "../../config";
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const toggleHandler = () => {
    setToggleMenu(!toggleMenu);
    console.log(toggleMenu);
  };
  return (
    <nav className="sticky top-0 z-50">
      <div className="flex p-5 bg-blue-50 items-center w-screen justify-between">
        <div className="hidden md:flex items-center">
          <img src={dummyLogo} className="h-9 hidden md:block" />
          <h1 className="pl-3 hidden md:block ">{setup.namaApp}</h1>
        </div>
        <form action="" className="flex items-center">
          <input
            type="text"
            name="cariBarang"
            id=""
            placeholder="Cari di Tokopakedi"
            className="w-40 
                      p-2 pl-5 pr-5 text-sm 
                      md:p-2 md:pl:3 md:r:3 md:w-[30vw] 
                      border border-solid border-slate-300 rounded
                      outline-slate-400"
          />
          <button class="leading-tight btn inline-block px-2 py-2">
            <AiOutlineSearch alt="" className="w-6 h-6" />
          </button>
        </form>

        <div className="flex items-center">
          <button>
            <Link to="/keranjang"><AiOutlineShoppingCart alt="" className="w-6 h-6 mr-2 ml-2" /></Link>
          </button>
          <button onClick={toggleHandler} className="">
          {toggleMenu? <GrClose className="w-6 h-6 mr-2 ml-4" /> : <GiHamburgerMenu className="w-6 h-6 mr-2 ml-4" />}
          </button>
        </div>
      </div>
      {toggleMenu && <MenuMobile />}
    </nav>
  );
};

export default Navbar;

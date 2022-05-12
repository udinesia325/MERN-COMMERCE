import React, { useState } from "react";
import dummyLogo from "../img/dummyLogo.png";
import iconCari from "../img/iconCari.png";
import menuIcon from "../img/menu.svg";
import cart from "../img/cart.png";
import MenuMobile from "./menuMobile";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const toggleHandler = () => {
    setToggleMenu(!toggleMenu);
    console.log(toggleMenu);
  };
  return (
    <nav className="fixed">
      <div className="flex p-7 bg-blue-50 items-center w-screen justify-between">
        <div className="hidden md:flex items-center">
          <img src={dummyLogo} className="h-10 hidden md:block" />
          <h1 className="pl-3 hidden md:block">TOKOPAKEDI</h1>
        </div>
        <form action="" className="flex items-center">
          <input
            type="text"
            name="cariBarang"
            id=""
            placeholder="Cari di Tokopakedi"
            className="p-2 pl-5 pr-5 rounded-xl text-sm md:p-2 md:pl:3 md:r:3 md:w-[30vw]"
          />
          <button>
            <img src={iconCari} alt="" className="h-5 ml-2" />
          </button>
        </form>

        <div className="flex items-center">
          <button>
            <img src={cart} alt="" className="h-6 mr-3 ml-3" />
          </button>
          <button onClick={toggleHandler} className="">
            <img src={menuIcon} className="mr-3 ml-3" />
          </button>
        </div>
      </div>
      {toggleMenu && <MenuMobile />}
    </nav>
  );
};

export default Navbar;

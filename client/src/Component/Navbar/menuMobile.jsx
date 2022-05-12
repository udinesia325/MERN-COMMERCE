import React, { useState } from "react";
import dummyUser from "../img/dummyUser.png";

function MenuMobile() {
  return (
    <div className="h-screen w-72 float-right bg-blue-50 z-50 p-5 md:m-3 md:rounded-2xl shadow-xl ">
      <div className="flex bg-blue-100 p-3 rounded-lg items-center shadow-md">
        <img src={dummyUser} className="h-20" />
        <div className="">
          <h1 className="text-sm text-center font-bold text-gray-700">
            USERNAME
          </h1>
          <h1></h1>
        </div>
      </div>
      {/* ///////// */}
      <h1 className="font-bold text-lg  mt-5 text-gray-700">
        Riwayat Aktivitas
      </h1>
      <div></div>
    </div>
  );
}

export default MenuMobile;

import {
  Swiper,
  SwiperSlide
} from "swiper/react";
import Navbar from "../Navbar/Navbar.jsx";
import "swiper/css";
import Card from "../Card/Card"

function Utama() {
  return (
    <>
      <Navbar />
      <div className="w-[90%] px-4 py-2 mx-auto">
      	<h1 className="font-semibold text-2xl">Produk Populer</h1>
      	<div className="card-barang mx-auto h-auto w-full sm:flex sm:flex-wrap sm:gap-6 sm:justify-evenly">
  	    	<Card />
  	    	<Card />
  	    	<Card />
  	    	<Card />
  	    	<Card />
  	    	<Card />
      	</div>
      </div>
    </>
  );
}

export default Utama;
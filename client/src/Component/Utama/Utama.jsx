import {
  Swiper,
  SwiperSlide
} from "swiper/react";
import Navbar from "../Navbar/Navbar.jsx";
import "swiper/css";
import Card from "../Card/Card"
import CarouselHotSale from "../carouselHotSale/carouselHotSale.jsx";

function Utama() {
  return (
    <div class="container mx-auto overflow-hidden">
      <Navbar />
<<<<<<< HEAD
      <div className="w-[90%] px-4 py-2 mx-auto">
      	<h1 className="font-semibold text-2xl">Produk Populer</h1>
      	<div className="card-barang mx-auto flex justify-center flex-wrap h-auto w-full sm:flex sm:flex-wrap sm:gap-6 sm:justify-evenly">
  	    	<Card />
  	    	<Card />
  	    	<Card />
  	    	<Card />
  	    	<Card />
  	    	<Card />
      	</div>
=======
      <CarouselHotSale />
      <div className="w-[90%] px-6 py-2 mx-auto">
      	<h1 className="font-semibold text-2xl text-center md:text-left">Produk Populer</h1>
>>>>>>> Andynotfound
      </div>
      <Card />
    </div>
  );
}

export default Utama;
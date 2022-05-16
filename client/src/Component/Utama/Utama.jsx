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
      <CarouselHotSale />
      <div className="w-[90%] px-6 py-2 mx-auto">
      	<h1 className="font-semibold text-2xl text-center md:text-left">Produk Populer</h1>
      </div>
      <Card />
    </div>
  );
}

export default Utama;
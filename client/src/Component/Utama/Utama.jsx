import {
  Swiper,
  SwiperSlide
} from "swiper/react";
import "swiper/css";
import Card from "../Card/Card"

function Utama() {
  return (
    <div className="w-[90%] px-4 py-2 mx-auto">
    	<h1 className="font-semibold text-2xl">Produk Populer</h1>
    	<Card />
    </div>
  );
}

export default Utama;
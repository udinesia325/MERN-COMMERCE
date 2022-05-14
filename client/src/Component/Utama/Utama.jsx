import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import redmi7A from "../img/redmi7A.png";
import cart from "../img/cart.png";

function Utama() {
  return (
  	<div className="w-[90%] px-4 py-2 mx-auto">
    	<h1 className="font-semibold text-2xl">Produk Populer</h1>
    	<div className="card w-72 mt-8 shadow-lg py-1">
    		<img className="h-32 m-auto" src={redmi7A} alt="" />
    		<h2 className="ml-2 font-semibold text-lg mt-2 text-blue-400">Redmi 7A</h2>
    		<p className="ml-2 text-base font-semibold">Baterai Besar, Peforma Cepat</p>
    		<p className="ml-2 text-xs">Prosesor Qualcomm® Snapdragon™ 439 | Baterai besar 4000mAh (typ)</p>
    		<p className="ml-2 mt-4">RP 1,199,000</p>
    		<div className="w-full flex mt-2">
    			<button className="bg-green-400 text-base font-semibold text-white py-1 px-4 rounded-lg block ml-auto mr-2">Beli</button>
    			<button className="bg-blue-400 text-base font-semibold text-white py-1 px-4 rounded-lg flex items-center">
    				<img className="w-5 mr-1" src={cart} alt="" />
    				Keranjang
    			</button>
    		</div>
    	</div>
    </div>
  );
}

export default Utama;

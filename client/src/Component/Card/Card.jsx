import redmi7A from "../img/redmi7A.png";
import cart from "../img/cart.png";
import { Link } from "react-router-dom";

const Card = () => {
  return (
    <div className="card h-[350px] rounded-lg w-full sm:w-64 md:w-80 lg:w-72 duration-500 mt-8 shadow-lg py-2 hover:cursor-pointer hover:shadow-2xl">
    	<img className="h-32 m-auto" src={redmi7A} alt="" />
    	<h2 className="ml-2 font-semibold text-lg mt-2 text-blue-400">Redmi 7A</h2>
    	<p className="ml-2 text-base font-semibold">
        Baterai Besar, Peforma Cepat
      </p>
    	<p className="ml-2 text-xs">
        Prosesor Qualcomm® Snapdragon™ 439 | Baterai besar 4000mAh (typ)
      </p>
    	<div className="rating ml-2 w-full flex items-center">
    		<p className="text-yellow-400 text-3xl">
          &#9733;
        </p>
    		<p className="text-yellow-400 text-3xl">
          &#9733;
        </p>
    		<p className="text-yellow-400 text-3xl">
          &#9733;
        </p>
    		<p className="text-yellow-400 text-3xl">
          &#9733;
        </p>
    		<p className="text-yellow-400 text-3xl">
          &#9733;
        </p>
      </div>
    	<p className="ml-2 mt-2">
        RP 1,199,000
      </p>
    	<div className="w-full flex mt-5 gap-1">
        <Link to="/beli" className="w-full border-2 rounded-bl-lg border-green-500 hover:shadow-lg bg-green-400 text-base font-semibold text-white py-1 px-4 block ml-auto flex items-center">
      		<button className="w-full flex items-center justify-center">
            Beli
          </button>
        </Link>
        <Link to="/keranjang" className="w-full border-2 rounded-br-lg border-blue-500 hover:shadow-lg bg-blue-400 text-base font-semibold text-white py-1 px-4 flex items-center">
      		<button className="w-full flex items-center justify-center">
      			<img className="w-5 mr-1" src={cart} alt="" />
      			Keranjang
      		</button>
        </Link>
      </div>
    </div>
  )
}
export default Card;
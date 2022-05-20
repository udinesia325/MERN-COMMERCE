import redmi7A from "../img/redmi7A.png";
import cart from "../img/cart.png";

const Card = () => {
  return (
    <div className="card w-72 duration-500 mt-8 shadow-lg py-2 hover:cursor-pointer hover:shadow-2xl">
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
    	<p className="ml-2">
        RP 1,199,000
      </p>
    	<div className="w-full flex mt-2">
    		<button className="hover:shadow-lg bg-green-400 text-base font-semibold text-white py-1 px-4 rounded-lg block ml-auto mr-2">
          Beli
        </button>
    		<button className="hover:shadow-lg bg-blue-400 text-base font-semibold text-white py-1 px-4 rounded-lg flex items-center mr-2">
    			<img className="w-5 mr-1" src={cart} alt="" />
    			Keranjang
    		</button>
      </div>
    </div>
  )
}
export default Card;
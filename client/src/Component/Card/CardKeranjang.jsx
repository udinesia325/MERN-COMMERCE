import redmi7A from "../img/redmi7A.png";
import cart from "../img/cart.png";

const CardKeranjang = () => {
  return (
    <div className="card h-[370px] sm:h-[350px] rounded-lg w-full sm:w-64 md:w-80 lg:w-72 duration-500 mt-8 shadow-lg py-2 hover:cursor-pointer hover:shadow-2xl">
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
    		<button className="bg-green-600 px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg duration-150 ease-in-out">
          Beli
        </button>
      </div>
    </div>
  )
}
export default CardKeranjang;
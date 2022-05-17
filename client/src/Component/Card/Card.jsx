<<<<<<< HEAD
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
=======
import React from "react";
import { BsCartPlus } from 'react-icons/bs'
import StarRatings from 'react-star-ratings'

const Card = () => {
  const productPost = [
    {
      img: 'https://www.gizmochina.com/wp-content/uploads/2019/07/Redmi-7A-Foggy-Gold-d.jpg',
      itemName: 'Redmi 7A',
      desc: 'Lorem Ipsum Lorem ipsum is placeholder text commonly used in the graphic, print.',
      price: 'Rp. 200.000',
      rate: 1
    },
    {
      img: 'https://static.techspot.com/images/products/2018/smartphones/org/2018-07-25-product-5.jpg',
      itemName: 'Redmi 7A',
      desc: 'Lorem Ipsum Lorem ipsum is placeholder text commonly used in the graphic, print.',
      price: 'Rp. 200.000',
      rate: 3
    },
    {
      img: 'http://techuneed.com/wp-content/uploads/V11-01-RGB.jpg',
      itemName: 'Redmi 7A',
      desc: 'Lorem Ipsum Lorem ipsum is placeholder text commonly used in the graphic, print.',
      price: 'Rp. 200.000',
      rate: 1
    },
    {
      img: 'https://i0.wp.com/mobilecryptotech.com/wp-content/uploads/2018/09/IMG_20180919_122120.jpg?fit=1920%2C1897&ssl=1',
      itemName: 'Redmi 7A',
      desc: 'Lorem Ipsum Lorem ipsum is placeholder text commonly used in the graphic, print.',
      price: 'Rp. 200.000',
      rate: 4
    },
    {
      img: 'https://www.gizchina.com/wp-content/uploads/images/2020/09/REDMI-9A-1000x1000-1.jpg',
      itemName: 'Redmi 7A',
      desc: 'Lorem Ipsum Lorem ipsum is placeholder text commonly used in the graphic, print.',
      price: 'Rp. 200.000',
      rate: 2
    },
    {
      img: 'https://mobilesarena.net/wp-content/uploads/2021/02/xiaomi-redmi-k40.png',
      itemName: 'Redmi 7A',
      desc: 'Lorem Ipsum Lorem ipsum is placeholder text commonly used in the graphic, print.',
      price: 'Rp. 200.000',
      rate: 1
    },
    {
      img: 'https://www.gizchina.com/wp-content/uploads/images/2020/09/REDMI-9A-1000x1000-1.jpg',
      itemName: 'Redmi 7A',
      desc: 'Lorem Ipsum Lorem ipsum is placeholder text commonly used in the graphic, print.',
      price: 'Rp. 200.000',
      rate: 2
    },
    {
      img: 'https://mobilesarena.net/wp-content/uploads/2021/02/xiaomi-redmi-k40.png',
      itemName: 'Redmi 7A',
      desc: 'Lorem Ipsum Lorem ipsum is placeholder text commonly used in the graphic, print.',
      price: 'Rp. 200.000',
      rate: 1
    }
  ];

  return(
    <div class="container
                mx-auto 
                h-auto 
                w-fit
                justify-center
                flex-col flex flex-wrap gap-3
                sm:flex-row">
      {productPost.map((product, key) => {
        return(  
        <div key={key} class="border border-slate-200 
                              bg-white 
                              w-80">
          <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
            <img class="rounded-t-lg
                        m-auto 
                        h-60 w-auto"
                 src={product.img} 
                 alt="" 
              />
          </a>
          <div class="p-6">
            <h5 class="text-gray-900 text-xl font-medium 
                      mb-2">
            {product.itemName}
            </h5>
            <StarRatings name="rating" 
                         starDimension="25px" 
                         starEmptyColor="gray" 
                         starRatedColor="gold" 
                         starSpacing="2px" 
                         totalStars={5} 
                         rating={product.rate} 
                         disabled={true}
                         />
            <p class="text-gray-700 text-base mt-3 mb-2">
              {product.desc}
            </p>
            <p class="mb-2">{product.price}</p>
            <button type="button" class=" flex gap-2 
                                          px-6 py-2.5 
                                          bg-blue-600 
                                          text-white font-medium text-xs leading-tight uppercase 
                                          rounded 
                                          shadow-md 
                                          hover:bg-blue-700 hover:shadow-lg 
                                          focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 
                                          active:bg-blue-800 active:shadow-lg 
                                          transition duration-150 ease-in-out">
              <BsCartPlus class="text-sm" />Add to chart
            </button>
          </div>
        </div>
      )})}
>>>>>>> Andynotfound
    </div>
  )
}
export default Card;
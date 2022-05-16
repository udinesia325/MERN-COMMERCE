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
    </div>
  )
}
export default Card;
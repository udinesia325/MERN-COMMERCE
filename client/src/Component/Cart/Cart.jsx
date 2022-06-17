import {useEffect} from "react"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import {useNavigate} from "react-router-dom"
import {useSelector,useDispatch} from "react-redux"


export default function Cart() {
  const navigate = useNavigate()
  const loginState = useSelector(state => state.login)
  useEffect(()=>{
  //jika belum login kembaliin ke home
    if(!loginState.isLogin){
     // navigate("/")
    }
  },[loginState])
  const productOverview = [
    {
      img: 'https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
      alt: ' '
    },
    {
      img: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
      alt: ' '
    }
  ]
  return (
    <div className="container flex">
      <Swiper
        modules={[Navigation, A11y]}
        // navigation
        spaceBetween={0}
        slidesPerView={1}
        className="w-2/4 rounded-xl"
      >
        <div className="">
            {productOverview.map((item, index) => {
              return (
                <SwiperSlide>
                  <img key={index} src={item.img} alt={item.alt} />
                </SwiperSlide>
            )})}
        </div>
      </Swiper>
      <div className="w-2/4 flex flex-col gap-3 justify-center align-center p-2">
        <p className="font-medium text-xl font-poppins uppercase">Company Name</p>
        <h1 className="text-4xl font-poppins font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, necessitatibus!</h1>
        <p className="font-thin font-poppins">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus facilis expedita doloribus qui repellat iusto animi fugit sunt saepe laudantium, accusantium maxime dolores id velit quibusdam itaque aliquid provident iste?</p>
        <p className="text-2xl font-semibold">Rp. 20000</p>
      </div>
    </div>
  )
}
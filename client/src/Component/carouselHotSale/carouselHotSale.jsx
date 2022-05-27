import React, { useState } from 'react';
// import Swiper core and required modules
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const CarouselHotSale = () => {
    const hotSaleProduct = [
        {
            img: 'https://cf.shopee.co.id/file/4af9f814a2c63cd7d9fbe9bb76415a0b',
            alt: ''
        },
        {
            img: 'https://cf.shopee.co.id/file/82ad482b72e88b206fa1bbdd2cce8dfb',
            alt: ''
        },
    ]
    return (
        <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        >
        {hotSaleProduct.map((poster, index) => {
            return(  
                <SwiperSlide>
                    <div class="carousel slide relative w-screen" data-bs-ride="carousel">
                        <div class="carousel-inner relative w-full overflow-hidden">
                            <div class="carousel-item active relative float-left w-full">
                            <img
                                key={index}
                                src={poster.img}
                                class="block w-full aspect-auto object-fill"
                                alt={poster.alt}
                            />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            )})}
        </Swiper>
    )
}
export default CarouselHotSale
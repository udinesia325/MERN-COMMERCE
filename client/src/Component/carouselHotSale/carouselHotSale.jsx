import React, { useState } from 'react';
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

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
        {
            img: 'https://cf.shopee.co.id/file/e1ca037f90739bd6de09526b20ff4458',
            alt: ''
        },
    ]
    return (
        <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{delay: 1000}}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        >
        {hotSaleProduct.map((poster, index) => {
            return(  
                <SwiperSlide key={index}>
                    <div className="carousel slide relative w-screen" data-bs-ride="carousel">
                        <div className="carousel-inner relative w-full overflow-hidden">
                            <div className="carousel-item active relative float-left w-full">
                            <img
                                key={index}
                                src={poster.img}
                                className="block w-full h-80 object-fill"
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
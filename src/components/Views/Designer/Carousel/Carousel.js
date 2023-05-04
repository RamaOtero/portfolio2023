import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./carousel.css";

// import required modules
import { FreeMode, Pagination } from "swiper";

import { EffectCoverflow, Navigation } from 'swiper';

import slider_image_1 from '../Assets/logos/logo-1.png';
import slider_image_2 from '../Assets/logos/logo-2.png';
import slider_image_3 from '../Assets/logos/logo-3.png';
import slider_image_4 from '../Assets/logos/logo-4.png';
import slider_image_5 from '../Assets/logos/logo-5.png';
import slider_image_6 from '../Assets/logos/logo-6.png';
import slider_image_7 from '../Assets/logos/logo-7.png';
import slider_image_8 from '../Assets/logos/logo-8.png';
import slider_image_9 from '../Assets/logos/logo-9.png';

export default function Carousel() {
    return (
      <>
        <Swiper
          slidesPerView={5}
          spaceBetween={1}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide><img src={slider_image_1} /></SwiperSlide>
          <SwiperSlide><img src={slider_image_2} /></SwiperSlide>
          <SwiperSlide><img src={slider_image_3} /></SwiperSlide>
          <SwiperSlide><img src={slider_image_4} /></SwiperSlide>
          <SwiperSlide><img src={slider_image_5} /></SwiperSlide>
          <SwiperSlide><img src={slider_image_6} /></SwiperSlide>
          <SwiperSlide><img src={slider_image_7} /></SwiperSlide>
          <SwiperSlide><img src={slider_image_8} /></SwiperSlide>
          <SwiperSlide><img src={slider_image_9} /></SwiperSlide>
        </Swiper>
      </>
    );
  }
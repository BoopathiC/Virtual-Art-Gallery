import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './Swiper.css';

import { EffectCoverflow, Pagination } from 'swiper/modules';

export default function App() {
  return (
    <div className='kim'>
      <Swiper 
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className='slidewipok'>
          <img src="https://fabusframes.com/cdn/shop/files/EDITED_9.png?v=1686898270" alt='img1' className='kima'/>
        </SwiperSlide>
      
        <SwiperSlide className='slidewipok'>
          <img src="https://i.pinimg.com/originals/87/d2/07/87d207d626abe590bdeb8cb10deb6f02.jpg" alt='img1' className='kima'/>
        </SwiperSlide>
        <SwiperSlide className='slidewipok'>
          <img src="https://i.pinimg.com/originals/92/da/bb/92dabbc44ba10a5cf8e5146e7981d143.jpg" alt='img1' className='kima'/>
        </SwiperSlide>
        <SwiperSlide className='slidewipok'>
          <img src="https://tse1.mm.bing.net/th?id=OIP.VW3YSQNvG4M94mvB6GFhAgHaH5&pid=Api&P=0&h=180" alt='img1' className='kima'/>
        </SwiperSlide>
        <SwiperSlide className='slidewipok'>
          <img src="https://static.javatpoint.com/definition/images/art-definition.png" alt='img1' className='kima'/>
        </SwiperSlide>
        <SwiperSlide className='slidewipok'>
          <img src="https://www.literaryhealingarts.com/wp-content/uploads/oil-paintings-of-flowers-in-a-vase-of-oil-painting-flowers-roses-painting-the-roses-enjoy-the-picture-with-flower-paintings-handmade-livemaster-handmade-buy-oil-painting-flowers-roses-painti.jpg" alt='img1' className='kima'/>
        </SwiperSlide>
        <SwiperSlide className='slidewipok'>
          <img src="http://homesthetics.net/wp-content/uploads/2016/07/20-Delicate-Beautiful-Acrylic-Painting-Ideas-homesthetics-1.jpeg" alt='img1' className='kima'/>
        </SwiperSlide>
        <SwiperSlide className='slidewipok'>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL00jFI5SenGWF8AWINRCOtvuMyOD-WOO3zveUQ1UfYQ&s" alt='img1' className='kima'/>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import Image from "next/image";
import slider from '../public/assets/logo.png';
import slider2 from '../public/assets/cover.jpg';
import slider3 from '../public/assets/banner.png';

const Banner = () => {
  return (
    <div className=" text-4xl text-center bg-gray-400">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide><Image src={slider2} alt=".." className="w-full h-[20vh] md:h-[55vh]" /></SwiperSlide>
        <SwiperSlide><Image src={slider} alt=".." className="w-full h-[20vh] md:h-[55vh]" /></SwiperSlide>
        <SwiperSlide><Image src={slider3} alt=".." className="w-full h-[20vh] md:h-[55vh]" /></SwiperSlide>
        <SwiperSlide><Image src={slider2} alt=".." className="w-full h-[20vh] md:h-[55vh]" /></SwiperSlide>
        {/* <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
    </div>
  );
};

export default Banner;

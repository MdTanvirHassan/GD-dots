import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import Image from "next/image";
import slider from "../public/assets/slide.jpg";
import slider2 from "../public/assets/slide2.jpg";
import slider3 from "../public/assets/slide3.jpg";
import slider4 from "../public/assets/slide4.jpg";

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
        navigation={false}
        modules={[Autoplay]}
        className="mySwiper">
        <SwiperSlide>
          <Image
            src={slider2}
            alt=".."
            className="w-full h-[30vh] md:h-[94vh]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={slider}
            alt=".."
            className="w-full h-[30vh] md:h-[94vh]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={slider3}
            alt=".."
            className="w-full h-[30vh] md:h-[94vh]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={slider4}
            alt=".."
            className="w-full h-[30vh] md:h-[94vh]"
          />
        </SwiperSlide>
       
      </Swiper>
    </div>
  );
};

export default Banner;

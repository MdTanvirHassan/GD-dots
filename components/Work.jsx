import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import Image from "next/image";
import slider from "../public/assets/logo.png";
import slider2 from "../public/assets/banner.png";
import slider3 from "../public/assets/the.png";
import slider4 from "../public/assets/cover.jpg";
const Work = () => {
  return (
    <div id="work" className="">
      <div className="md:px-8 py-16 pt-5  mx-auto">
        <div className="flex flex-wrap w-full mb-5 flex-col items-center text-center">
          <h3 className="text-3xl text-center uppercase tracking-widest">
            <span className="text-orange-600">Our </span> Work
          </h3>
        </div>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          centeredSlides={true}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Image
              src={slider}
              alt=".."
              className="w-full h-[20vh] md:h-[55vh]"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={slider2}
              alt=".."
              className="w-full h-[20vh] md:h-[55vh]"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={slider4}
              alt=".."
              className="w-full h-[20vh] md:h-[55vh]"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={slider3}
              alt=".."
              className="w-full h-[20vh] md:h-[55vh]"
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image
              src={slider2}
              alt=".."
              className="w-full h-[20vh] md:h-[55vh]"
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image
              src={slider2}
              alt=".."
              className="w-full h-[20vh] md:h-[55vh]"
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image
              src={slider2}
              alt=".."
              className="w-full h-[20vh] md:h-[55vh]"
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image
              src={slider2}
              alt=".."
              className="w-full h-[20vh] md:h-[55vh]"
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image
              src={slider2}
              alt=".."
              className="w-full h-[20vh] md:h-[55vh]"
            />
          </SwiperSlide>
        </Swiper>
        <div className="flex justify-center py-5">
          <button
            type="button"
            className="text-white bg-gradient-to-l from-orange-600 to-orange-400 hover:bg-gradient-to-br font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2"
          >
            View All Design
          </button>
        </div>
      </div>
    </div>
  );
};

export default Work;
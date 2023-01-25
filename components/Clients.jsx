import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import Image from "next/image";
import slider from "../public/assets/11.png";
import slider2 from "../public/assets/1212.png";
import slider3 from "../public/assets/sera.png";
import slider4 from "../public/assets/the.png";
const Clients = () => {
  return (
    <div id="work" className="">
      <div className="md:px-8 md:py-16 pt-5  mx-auto">
        <div className="flex flex-wrap w-full mb-8 flex-col items-center text-center ">
          <h3 className="text-3xl text-center uppercase tracking-tight border-b-4 px-2 border-orange-600">
            Our<span className="text-orange-600"> Clients </span>
          </h3>
        </div>

        
        <Swiper
          slidesPerView={6}
          spaceBetween={15}
          centeredSlides={true}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          <div className="grid md:grid-cols-4">
          <SwiperSlide>
            <Image
              src={slider}
              alt=".."
              className="w-full h-[10vh] md:h-[15vh]"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={slider2}
              alt=".."
              className="w-full h-[10vh] md:h-[15vh]"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={slider4}
              alt=".."
              className="w-full h-[10vh] md:h-[15vh]"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={slider3}
              alt=".."
              className="w-full h-[10vh] md:h-[15vh]"
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image
              src={slider2}
              alt=".."
              className="w-full h-[10vh] md:h-[15vh]"
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image
              src={slider2}
              alt=".."
              className="w-full h-[10vh] md:h-[15vh]"
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image
              src={slider2}
              alt=".."
              className="w-full h-[10vh] md:h-[15vh]"
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image
              src={slider2}
              alt=".."
              className="w-full h-[10vh] md:h-[15vh]"
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image
              src={slider2}
              alt=".."
              className="w-full h-[10vh] md:h-[15vh]"
            />
          </SwiperSlide>
          </div>
        </Swiper>
       
        
        
      </div>
    </div>
  );
};

export default Clients;
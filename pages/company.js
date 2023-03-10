import Image from "next/image";
import React from "react";
import Static from "../public/assets/1.jpg";

const Company = () => {
  return (
    <div id="company" className="md:pt-16">
      <section className="text-gray-600 ">
        <div className=" px-4 md:px-12 py-16 mx-auto grid md:grid-cols-2 md:gap-x-20">
          
          <div className="grid md:grid-cols-2 md:gap-4  mt-auto mb-auto  content-start sm:pr-10">
            <div className="p-4 px-12  w-full mb-8">
              <div className="flex flex-wrap -m-4 text-center w-[266px] h-[164px]">
                <div className="border-2 border-gray-200 px-16 py-8 rounded-lg shadow-xl">
                  <h2 className="font-bold text-4xl text-orange-500">
                    10,000+
                  </h2>
                  <p className="text-lg text-orange-500 uppercase">
                    Design <br /> completed
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 px-12  w-full mb-8">
              <div className="flex flex-wrap -m-4 text-center w-[266px] h-[164px]">
                <div className="border-2 border-gray-200 px-16 py-8 rounded-lg shadow-xl">
                  <h2 className="font-bold text-4xl text-orange-500">50+</h2>
                  <p className="text-lg text-orange-500 uppercase">
                    Brand Services
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 px-12  w-full mb-8">
              <div className="flex flex-wrap -m-4 text-center w-[266px] h-[164px]">
                <div className="border-2 border-gray-200 px-20 py-8 rounded-lg shadow-xl">
                  <h2 className="font-bold text-4xl text-orange-500">100+</h2>
                  <p className="text-lg text-orange-500 uppercase">
                    Happy Clint
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 px-12  w-full mb-8">
              <div className="flex flex-wrap -m-4 text-center w-[266px] h-[164px]">
                <div className="border-2 border-gray-200 px-[67px] py-8 rounded-lg shadow-xl">
                  <h2 className="font-bold text-4xl text-orange-500">100%</h2>
                  <p className="text-lg text-orange-500 uppercase">
                    Satisfaction
                  </p>
                </div>
              </div>
            </div>
            
          </div>

          <div className=" max-w-full rounded-lg overflow-hidden md:pl-12 mt-6 sm:mt-0">
            <Image
              className="object-fill object-center w-full md:h-[60vh] 2xl:h-full"
              src={Static}
              alt="stats"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Company;

import Image from 'next/image'
import React from 'react'
import Img from '../public/assets/33.png'
import Img2 from '../public/assets/2.png'
import Img3 from '../public/assets/3.png'
import Img4 from '../public/assets/4.png'
import Img5 from '../public/assets/5.png'
import Img6 from '../public/assets/6.png'

const Services = () => {
  return (
    <div id='services' className='bg-pink-50'>
      <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap w-full mb-10 flex-col items-center text-center">
      <h1 className="sm:text-3xl text-2xl font-bolder title-font mb-2 text-gray-900 uppercase tracking-wider">
        Our <span className='text-orange-600'>Services</span>
        </h1>
    </div>

    <div className="flex flex-wrap -m-4 justify-center text-center items-center p-0 mx-auto px-0 md:px-44">
      
      <div className="xl:w-1/3 md:w-1/2 w-full px-0 py-2  md:px-8">
        <div className="bg-white border border-gray-200 py-2 rounded-lg shadow-xl shadow-gray-400">
          <div className="w-40  inline-flex items-center justify-center rounded-md  mb-4">
            <Image src={Img} className="w-full h-full rounded-lg" alt='..'/>
          </div>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Graphics <br /> Design</h2> 
        </div>
      </div>

      <div className="xl:w-1/3 md:w-1/2 w-full px-0 py-2  md:px-8">
        <div className="bg-white border border-gray-200 py-2 rounded-lg shadow-xl shadow-gray-400">
          <div className="w-40  inline-flex items-center justify-center rounded-md  mb-4">
            <Image src={Img2} className="w-full h-full rounded-lg" alt='..'/>
          </div>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-2"> Motion<br /> Graphics</h2> 
        </div>
      </div>

      <div className="xl:w-1/3 md:w-1/2 w-full px-0 py-2  md:px-8">
        <div className="bg-white border border-gray-200 py-2 rounded-lg shadow-xl shadow-gray-400">
          <div className="w-40  inline-flex items-center justify-center rounded-md  mb-4">
            <Image src={Img3} className="w-full h-full rounded-lg" alt='..'/>
          </div>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-2">3D <br /> Animation</h2> 
        </div>
      </div>

      <div className="xl:w-1/3 md:w-1/2 w-full px-0 py-2  md:px-8">
        <div className="bg-white border border-gray-200 py-2 rounded-lg shadow-xl shadow-gray-400">
          <div className="w-40  inline-flex items-center justify-center rounded-md  mb-4">
            <Image src={Img4} className="w-full h-full rounded-lg" alt='..'/>
          </div>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-2">UI/UX <br /> Design</h2> 
        </div>
      </div>


      <div className="xl:w-1/3 md:w-1/2 w-full px-0 py-2  md:px-8">
        <div className="bg-white border border-gray-200 py-2 rounded-lg shadow-xl shadow-gray-400">
          <div className="w-40  inline-flex items-center justify-center rounded-md  mb-4">
            <Image src={Img5} className="w-full h-full rounded-lg" alt='..'/>
          </div>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Clipping<br /> Path</h2> 
        </div>
      </div>

      <div className="xl:w-1/3 md:w-1/2 w-full px-0 py-2  md:px-8">
        <div className="bg-white border border-gray-200 py-2 rounded-lg shadow-xl shadow-gray-400">
          <div className="w-40  inline-flex items-center justify-center rounded-md  mb-4">
            <Image src={Img6} className="w-full h-full rounded-lg" alt='..'/>
          </div>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Video <br /> Editing</h2> 
        </div>
      </div>
    </div>
    
  </div>
</section>
    </div>
  )
}

export default Services
//import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <div>
      <footer className="bg-black text-white body-font shadow-lg border-t-2">
  <div className="container px-5 py-12 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div className="md:w-1/3 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
    <Link href={'/'}><div className="flex title-font font-medium items-center md:justify-start justify-center text-white cursor-pointer">
        {/* <Image src={NavLogo} alt=".." width={200} height={20}/> */}
        <span className="ml-3 text-xl text-white"> GD dots</span>
      </div>
      </Link>
      <p className="mt-2 px-3 text-sm text-gray-300 ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate alias, placeat ut consectetur ducimus architecto tenetur suscipit exercitationem corporis excepturi.
      </p>
    </div>
    <div className="flex-grow flex flex-wrap md:px-10 -mb-10 md:mt-0 mt-10 md:text-left text-center">
      
      <div className="lg:w-1/2 md:w-1/2 w-full justify-center items-center px-4 md:pl-28">
        <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">Privacy & Terms</h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-gray-300 text-sm hover:text-gray-800">Privacy Policy</a>
          </li>
          <li>
            <a className="text-gray-300 text-sm hover:text-gray-800">Terms of Use</a>
          </li>
          <li>
            <a className="text-gray-300 text-sm hover:text-gray-800">Payment Systems</a>
          </li>
          
        </nav>
      </div>
      <div className="lg:w-1/2 md:w-1/2 w-full justify-center items-center px-4 md:px-28 md:pr-36">
        <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">Quick Links</h2>
        <nav className="list-none mb-10">
         <Link href={'/contact'}> 
         <li>
            <div className="text-gray-300 text-sm hover:text-gray-800 cursor-pointer">Contact Us</div>
          </li>
        </Link>
          <li>
            <a className="text-gray-300 text-sm hover:text-gray-800">About Us</a>
          </li>
          <li>
            <a className="text-gray-300 text-sm hover:text-gray-800">Return Policy</a>
          </li>
          {/* <li>
            <a className="text-gray-300 text-sm hover:text-gray-800">Fourth Link</a>
          </li> */}
        </nav>
      </div>
      
    </div>
    
  </div>
  <hr className='text-white mx-20'/>
  <div className="bg-black text-center justify-center items-center">
    <div className="container m-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row text-center justify-center items-center">
      <p className="text-white text-sm text-center tracking-widest space-x-36 sm:text-left">
        © Copyright 2023    ||    GD Dots    ||    All Rights Reserved
      </p>
      
    </div>
  </div>
</footer>


    </div>
  )
}

export default Footer
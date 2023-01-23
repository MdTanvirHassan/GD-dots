import React from 'react'
import { FiPhoneCall } from 'react-icons/fi';
import { AiOutlineMail} from 'react-icons/ai';
import { FaFacebook, FaGithub, FaLinkedinIn } from 'react-icons/fa';

const NavBanner = () => {
  return (
    <div className=' flex flex-col justify-between   text-white bg-gradient-to-l from-orange-600 to-orange-400 py-2'>
        <div className="flex justify-between">
        <div className="flex mx-10">
            <ul className='flex text-white'>
                <li className="flex text-white space-x-2">
                    <FiPhoneCall className='text-xl'/> <span>+880 13456189</span>
                </li>
                <li className="flex text-white mx-4 space-x-2">
                <a
                    href='mailto:tarekrahim100@gmail.com'
                    target='_blank'
                    rel='noreferrer'
                    className='flex space-x-2'
                  >
                    <AiOutlineMail className='text-xl'/> <span>tarekrahim100@gmail.com</span>
                    </a>
                </li>
            </ul>
        </div>
        <div className="flex  mx-5 justify-end">
            <ul className="hidden md:flex">
            <li className="ml-5 text-sm uppercase text-white hover:text-white">
              <a
                href="https://www.linkedin.com/in/md-tanvir-hassan-490253240"
                target="_blank"
                rel="noreferrer">
                <div className="text-xl  cursor-pointer hover:scale-105 ease-in duration-300 ">
                  <FaLinkedinIn />
                </div>
              </a>
            </li>
            <li className="ml-5 text-sm uppercase text-white hover:text-white">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer">
                <div className="text-xl  cursor-pointer hover:scale-105 ease-in duration-300 ">
                  <FaFacebook />
                </div>
              </a>
            </li>
            <li className="ml-5 text-sm uppercase text-white hover:text-white">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer">
                <div className="text-xl  cursor-pointer hover:scale-105 ease-in duration-300 ">
                  <FaGithub />
                </div>
              </a>
            </li>
            <li className="ml-5 text-sm uppercase text-white hover:text-white">
              <a
                href="mailto:tarekrahim100@gmail.com"
                target="_blank"
                rel="noreferrer">
                <div className="text-xl  cursor-pointer hover:scale-105 ease-in duration-300 ">
                  <AiOutlineMail />
                </div>
              </a>
            </li>
            </ul>
        </div>

        </div>
    </div>
  )
}

export default NavBanner
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { TfiAlignJustify } from "react-icons/tfi";

function Header() {
  const [show, setShow] = useState(false);

  return (

  <div className=' sticky top-0 border-b flex items-center justify-between mb-16'>
    

      <div className='flex m-4 space-x-9'>


      <Link to="/" className=" transition-transform duration-300 hover:scale-105">
          <p className='font-satoshi-Black font-extrabold text-2xl sm:text-xl md:text-xl lg:text-3xl racking-tighter sm:tracking-tighter'>Zahid Hussain</p>
      </Link>


       <Link
            to="/"
            className="uppercase m-2 transition duration-300 racking-tighter sm:tracking-tighter ease-in-out hover:text-[#95abb2] font-satoshi-black font-medium text-sm    sm:text-sm md:text-xl lg:text-lg"
          >
            About
          </Link>
      
           <Link
            to="/Projects"
            className="uppercase m-2 transition duration-300 ease-in-out hover:text-[#95abb2] font-satoshi-black font-medium text-sm tracking-tighter sm:tracking-tighter  sm:text-sm md:text-xl lg:text-lg"
            onClick={() => setShow(false)}
          >
            Projects
          </Link>
      
      </div>
    <header className="flex justify-between items-center px-4 sm:px-12 py-6 gap-3   ">
          <Link
            to="/Certificate"
            className="uppercase racking-tighter sm:tracking-tighter hidden sm:hidden lg:block m-2 transition duration-300 ease-in-out   hover:text-[#95abb2] text-md font-satoshi-black font-medium"
            onClick={() => setShow(false)}
          >
            Certificate
          </Link>
      <p className='border hidden  sm:hidden lg:block rounded-full py-2 px-6 bg-black text-white font-satoshi font-medium'>zahidzahidhusssain@gmail.com</p>
      
    
    </header>
  </div>
  );
}

export default Header;

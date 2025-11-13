import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { TfiAlignJustify } from "react-icons/tfi";

function Header() {
  const [show, setShow] = useState(false);

  return (

  <div className='flex items-center justify-between mb-20'>
    

      <div className='flex m-4 space-x-9'>

      <Link to="/" className=" transition-transform duration-300 hover:scale-105">
          <p className='font-satoshi-Black font-extrabold text-2xl'>Zahid Hussain</p>
      </Link>
       <Link
            to="/"
            className="uppercase m-2 transition duration-300 ease-in-out hover:text-[#95abb2] text-md font-satoshi-black font-medium"
          >
            About
          </Link>
           <Link
            to="/Projects"
            className="uppercase m-2 transition duration-300 ease-in-out hover:text-[#95abb2] text-md font-satoshi-black font-medium"
            onClick={() => setShow(false)}
          >
            Projects
          </Link>
      </div>
    <header className="flex justify-between items-center px-4 sm:px-12 py-6 gap-3   ">
          <Link
            to="/Certificate"
            className="uppercase m-2 transition duration-300 ease-in-out hover:text-[#95abb2] text-md font-satoshi-black font-medium"
            onClick={() => setShow(false)}
          >
            Certificate
          </Link>
      <p className='border rounded-full py-2 px-6 bg-black text-white font-satoshi font-medium'>zahidzahidhusssain@gmail.com</p>
      
    
    </header>
  </div>
  );
}

export default Header;

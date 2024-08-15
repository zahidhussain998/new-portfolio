import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="flex flex-row items-center px-2 sm:px-12 py-6">
      <nav className='flex flex-col md:flex-row md:items-center gap-3'>
        <div className='mr-5'>
          <Link to="/">
            <h1 className='uppercase transition duration-200 ease-in-out hover:text-red-600 text-sm font-bold mr-5'>
              ZAHID HUSSAIN
            </h1>
          </Link>
        </div>
        <div className='flex flex-row gap-3 '>
          <Link to="/" className='uppercase transition duration-200 ease-in-out hover:text-red-600 text-xs'>
            About
          </Link>
          <Link to="/Projects" className=' uppercase transition duration-200 ease-in-out hover:text-red-600 text-xs'>
            Projects
          </Link>
          <Link to="/Certificate" className=' uppercase transition duration-200 ease-in-out hover:text-red-600 text-xs'>
            Certificate
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;

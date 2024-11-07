import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom'; 

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const navigate = useNavigate();

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <nav className='flex justify-between items-center h-14 max-w-full mx-auto px-4 text-white border-b border-gray-800 sticky top-0 z-50 bg-gradient-to-r from-gray-800 to-gray-900'>
      <h1 
        className='text-3xl font-bold text-[#00FFFF] italic cursor-pointer' 
        onClick={() => navigate('/')}
      >
        SiftIn
      </h1>
      <ul className='hidden sm:flex flex-grow justify-center space-x-8 ml-20'> 
        <li 
          className='p-3 border-b border-transparent hover:border-cyan-500 cursor-pointer text-lg'
          onClick={() => navigate('/')}
        >
          Home
        </li>
        <li 
          className='p-3 border-b border-transparent hover:border-cyan-500 cursor-pointer text-lg'
          onClick={() => navigate('/about')}
        >
          About
        </li>
        <li 
          className='p-3 border-b border-transparent hover:border-cyan-500 cursor-pointer text-lg'
          onClick={() => navigate('/testimonials')}
        >
          Testimonials
        </li>
        <li 
          className='p-3 border-b border-transparent hover:border-cyan-500 cursor-pointer text-lg whitespace-nowrap' 
          onClick={() => navigate('/contact-us')}
        >
          Contact Us
        </li>
      </ul>
      <div onClick={handleNav} className='block sm:hidden cursor-pointer'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div className={nav ? 'fixed left-0 top-0 w-[60%] border-r h-full border-r-gray-900 bg-[#000300] ease-in-out duration-500 z-40' : 'fixed left-[-100%] top-0 ease-in-out duration-500'}>
        <h1 className='w-full text-3xl font-bold text-[#00FFFF] p-4 border-b border-gray-800'>SiftIn</h1>
        <ul className='uppercase'>
          <li className='p-4 border-b border-gray-800 hover:text-cyan-500 cursor-pointer' onClick={() => navigate('/')}>Home</li>
          <li className='p-4 border-b border-gray-800 hover:text-cyan-500 cursor-pointer' onClick={() => navigate('/about')}>About</li>
          <li className='p-4 border-b border-gray-800 hover:text-cyan-500 cursor-pointer' onClick={() => navigate('/testimonials')}>Testimonials</li>
          <li className='p-4 hover:text-cyan-500 cursor-pointer' onClick={() => navigate('/contact-us')}>Contact Us</li>
        </ul>
        <div className='flex flex-col items-center space-y-4 mt-4'>
          <a href="#" className='py-2 px-6 whitespace-nowrap text-sm italic font-semibold border-2 border-cyan-500 rounded-md hover:bg-cyan-500 transition-all'>Sign In</a>
          <a href="#" className='py-2 px-6 whitespace-nowrap text-sm italic font-semibold bg-gradient-to-r from-cyan-500 to-cyan-800 rounded-md hover:from-cyan-600 hover:to-cyan-900 transition-all'>Create an account</a>
        </div>
      </div>
      <div className='hidden sm:flex justify-around items-center space-x-6'>
        <a href="http://localhost:5000/auth" className='py-1 px-5 whitespace-nowrap text-sm italic font-semibold border-2 border-cyan-500 rounded-md hover:bg-cyan-500 transition-all'>Sign In</a>
        <a href="http://localhost:5000/auth" className='py-2 px-6 whitespace-nowrap text-sm italic font-semibold bg-gradient-to-r from-cyan-500 to-cyan-800 rounded-md hover:from-cyan-600 hover:to-cyan-900 transition-all'>Create an account</a>
      </div>
    </nav>
  );
};

export default Navbar;

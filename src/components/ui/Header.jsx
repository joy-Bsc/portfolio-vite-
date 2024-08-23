// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/Button';
import Nav from './Nav';
import MobileNav from './MobileNav';
import image from '../../assets/cropped_image.png';

const Header = () => {
  return (
    <header className='py-8 xl:py-12 text-white '>
      <div className="container mx-auto flex justify-between items-center">
        {/* logo */}
        <Link to='/'>
          <div className="flex items-center cursor-pointer">
            <img src={image} alt="Logo" width={50} height={50} />
            <h1 className="text-4xl font-semibold hover:text-green-400">
              Joy Dhar<span className="text-green-300">.</span>
            </h1>
          </div>
        </Link>
        
        {/* desktop navigation */}
        
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link to='mailto:dharjoy75@gmail.com?subject=Hiring Inquiry'>
            <Button className="bg-blue-500 text-white hover:bg-green-500 hover:text-black">Hire me</Button>
          </Link>
        </div>
        
        {/* mobile navigation */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
        </div>
      
    </header>
  );
};

export default Header;
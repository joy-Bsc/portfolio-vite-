// src/components/MobileNav.jsx
import React from 'react';
import { Sheet, SheetContent, SheetTrigger } from '../ui/Sheet';
import { Link, useLocation } from 'react-router-dom';
import { CgMenu } from 'react-icons/cg';

const MobileNav = () => {
  const links = [
    { name: 'home', path: '/' },
    { name: 'services', path: '/services' },
    { name: 'resume', path: '/resume' },
    { name: 'work', path: '/work' },
    { name: 'contact', path: '/contact' },
  ];

  const location = useLocation();
  const pathName = location.pathname;

  return (
    <Sheet>
      <SheetTrigger className='flex justify-center items-center'>
        <CgMenu className='text-[32px] text-accent' />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <div className='mt-32 mb-40 text-center text-2xl'>
          <Link to='/'>
            <h1 className="text-4xl font-semibold">
              Joy Dhar<span className="text-accent">.</span>
            </h1>
          </Link>
        </div>
        <nav className='flex flex-col gap-4 items-left'>
          {links.map((link, i) => (
            <Link key={i} to={link.path} className={`${link.path === pathName ? "text-accent" : ""} capitalize font-medium hover:text-accent transition-all`}>
              {link.name}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
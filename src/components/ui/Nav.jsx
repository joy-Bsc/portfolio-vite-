// src/components/Nav.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const links = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/resume', label: 'Resume' },
    { href: '/contact', label: 'Contact' },
    { href: '/work', label: 'Work' },
];

const Nav = () => {
    const location = useLocation();
    const pathname = location.pathname;

    return (
        <div className='flex gap-8'>
            {links.map((link, i) => (
                <Link
                    key={i}
                    to={link.href}
                    className={`${link.href === pathname ? "text-accent border-b-2 border-blue-600" : ""} capitalize font-medium hover:text-green-300 transition-all`}
                >
                    {link.label}
                </Link>
            ))}
        </div>
    );
};

export default Nav;
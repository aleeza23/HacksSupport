import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import MobileMenu from './MobileMenu';

export const Header = () => {
    const location = useLocation();

    const getLinkClass = (path) => (
        location.pathname === path
            ? 'bg-white text-purple-800 px-3 py-2 rounded-md'
            : 'hover:underline px-3 py-2'
    );

    return (
        <header className="bg-[#27182F] text-white py-4 px-5">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-lg font-bold">
                    <Link to="/">HackSupport</Link>
                </div>
                <nav className="hidden md:flex space-x-6">
                    <Link to="/" className={getLinkClass('/')}>Home</Link>
                    <Link to="/hackathon-tools" className={getLinkClass('/hackathon-tools')}>Hackathon Tools</Link>
                    <Link to="/business" className={getLinkClass('/business')}>Business</Link>
                </nav>
                <div className="md:hidden">
                    <MobileMenu />
                </div>
            </div>
        </header>
    );
};






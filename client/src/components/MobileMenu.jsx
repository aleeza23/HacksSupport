import { useState } from 'react';
import { motion } from 'framer-motion';

const MobileMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const menuVariants = {
        open: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.5,
            },
        },
        closed: {
            opacity: 0,
            x: '-100%',
            transition: {
                duration: 0.5,
            },
        },
    };

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 bg-gray-800 text-white rounded-md focus:outline-none"
            >
                {isOpen ? 'Close' : 'Menu'}
            </button>
            <motion.nav
                initial="closed"
                animate={isOpen ? 'open' : 'closed'}
                variants={menuVariants}
                className="fixed top-0 left-0 w-[80%] h-full bg-gray-800 text-white flex flex-col items-center justify-center"
            >
                <a href="/" className="py-2 text-2xl">Home</a>
                <a href="/hackathon-tools" className="py-2 text-2xl">Hackathon Tools</a>
                <a href="/business" className="py-2 text-2xl">Business</a>
            </motion.nav>
        </div>
    );
};

export default MobileMenu;

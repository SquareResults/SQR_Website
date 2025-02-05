import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => pathname === path;

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 w-full p-4 flex items-center justify-between z-10 transition-all duration-300 ${scrolled ? 'bg-[#081321]/50 backdrop-blur-md' : 'bg-[#081321]/50'}`}>
      <Link to="/" className="flex items-center">
        <img src="/images/SQRlogo.jpg" alt="Logo" className="w-15 h-14" />
      </Link>
      <div className="hidden md:flex items-center space-x-20 ml-auto">
        {['home', 'about', 'services', 'resources', 'contact'].map((item) => (
          <motion.div
            key={item}
            className={`text-white transition-colors duration-200 ${isActive(item === 'home' ? '/' : `/${item}`) ? 'text-[#4DCCE6]' : 'hover:text-[#4DCCE6]'}`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Link to={item === 'home' ? '/' : `/${item}`}>{item.charAt(0).toUpperCase() + item.slice(1)}</Link>
          </motion.div>
        ))}
      </div>
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-[#081321] text-white flex flex-col items-center space-y-4 py-4 md:hidden">
          {['home', 'about', 'services', 'resources', 'contact'].map((item) => (
            <motion.div
              key={item}
              className={`text-white transition-colors duration-200 ${isActive(item === 'home' ? '/' : `/${item}`) ? 'text-[#4DCCE6]' : 'hover:text-[#4DCCE6]'}`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Link to={item === 'home' ? '/' : `/${item}`} onClick={closeMenu}>
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            </motion.div>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
/* eslint-disable no-unused-vars */
import { useState, useEffect, useCallback, useMemo } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import Button from './Button';

const NAV_LINKS = [
  { name: 'Home', id: 'home' },
  { name: 'About', id: 'about' },
  { name: 'Projects', id: 'projects' },
  { name: 'Skills', id: 'skills' },
  { name: 'Contact', id: 'contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  const handleLinkClick = useCallback((id) => {
    setActiveLink(id);
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      const navbarContainer = document.querySelector('.navbar-container');
      if (isOpen && navbarContainer && !navbarContainer.contains(event.target)) {
        setIsOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      for (const link of NAV_LINKS) {
        const section = document.getElementById(link.id);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveLink(link.id);
            break;
          }
        }
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="navbar-container relative">
      {/* Mobile menu button */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 focus:outline-none"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Desktop menu */}
      <div className="hidden md:flex space-x-1">
        {NAV_LINKS.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick(link.id);
            }}
            className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
              activeLink === link.id
                ? 'bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300'
                : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white'
            }`}
            aria-current={activeLink === link.id ? 'page' : undefined}
          >
            {link.name}
          </a>
        ))}
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 right-6 w-56 bg-white dark:bg-gray-800 rounded-lg shadow-xl z-50 py-2 border dark:border-gray-700">
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick(link.id);
              }}
              className={`block px-4 py-2 text-sm font-medium ${
                activeLink === link.id
                  ? 'bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
              aria-current={activeLink === link.id ? 'page' : undefined}
            >
              {link.name}
            </a>
          ))}
          <div className="px-4 py-2">
            <Button 
              variant="primary" 
              size="sm" 
              fullWidth 
              onClick={() => {
                setIsOpen(false);
                handleLinkClick('contact');
              }}
            >
              Contact Me
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
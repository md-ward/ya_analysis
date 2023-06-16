import { faBars, faSun, faMoon, faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import themeStore from '../controller/useThemeChange';

const Navbar = () => {
  const [showNav, setShowNav] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const [showDropdown, setShowDropdown] = useState(false);
  const links = [
    { title: 'Home', href: '#home' },
    { title: 'Services', href: '#services' },
    { title: 'About', href: '#about' },
    { title: 'Projects', href: '#projects' },
    { title: 'Contact', href: '#contact' },
  ];
  const { theme, toggleTheme } = themeStore();

  useEffect(() => {
    function handleScroll() {
      const currentScrollPos = window.scrollY;
      const isScrollingUp = currentScrollPos < prevScrollPos;

      setShowNav(isScrollingUp || currentScrollPos === 0);
      setPrevScrollPos(currentScrollPos);
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  function handleNavClick(event, targetId) {
    event.preventDefault();
    const target = document.getElementById(targetId);
    target.scrollIntoView({ behavior: 'smooth' });
    setShowDropdown(false);
  }

  function handleDropdownClick() {
    
    setShowDropdown(!showDropdown);
  }

  return (
    <div className={` max-sm:w-screen fixed z-50 w-full h-16 px-4 md:px-8 lg:px-16 flex items-center  transition duration-500 ${showNav ? '' : '-translate-y-full'} ${theme === 'dark' ? 'bg-slate-700 shadow-lg  ' : 'bg-custom-blue'}`}>
      <img src="./assets/images/logo.png" alt="site logo" className="h-16" />

      {showDropdown ? (
        <nav className={`dropdown absolute top-16 left-0 w-full flex flex-col items-center ${theme === 'dark' ? 'bg-gray-800' : 'bg-custom-blue'}`}>
          {links.map((link) => (
            <a
              key={link.title}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href.slice(1))}
              className={`text-white font-serif font-semibold border-b-4 hover:border-white border-transparent py-1 px-2 ${theme === 'dark' ? 'hover:bg-gray-600' : 'hover:bg-gray-400'}`}
            >
              {link.title}
            </a>
          ))}
        </nav>
      ) : (
        <nav className="ml-auto hidden sm:flex space-x-4">
          {links.map((link) => (
            <a
              key={link.title}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href.slice(1))}
              className={`text-white font-serif font-semibold border-b-4 hover:border-white border-transparent py-1 px-2 ${theme === 'dark' ? 'hover:bg-gray-600' : 'hover:bg-gray-400'}`}
            >
              {link.title}
            </a>
          ))}
        </nav>
      )}

      <button className={`ml-auto sm:hidden text-white font-serif font-semibold  py-1 px-2 `} onClick={handleDropdownClick}>
        {showDropdown ? <FontAwesomeIcon icon={faClose} /> : <FontAwesomeIcon icon={faBars} />}
      </button>
      <button className={`ml-4 text-white font-serif font-semibold border-b-4 text-xl border-transparent py-1 px-2 ${theme === 'dark' ? 'rounded-full h-11 w-11 bg-gray-600' : 'rounded-full h-11 w-11 bg-dark-blue opacity-90 shadow-md '} transition duration-300 ease-in-out`} onClick={toggleTheme}>
        <FontAwesomeIcon icon={theme === 'dark' ? faSun : faMoon} className="text-yellow-400 duration-500 ease-in-out" style={{ transform: `${theme === 'light' ? 'rotate(0)' : 'rotate(180deg)'}` }} />
      </button>
    </div>
  );
};

export default Navbar;
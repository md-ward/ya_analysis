import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

import React, { useRef, useState } from 'react';
import { Slide } from "react-awesome-reveal";
import themeStore from '../controller/useThemeChange';

import logo from "/assets/images/logo.png"


const Footer = () => {
  const { theme } = themeStore();
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [reverse, setReverse] = useState(false);
  const emailField = useRef(null);

  function handleNavClick(event, targetId) {
    event.preventDefault();
    const target = document.getElementById(targetId);
    target.scrollIntoView({ behavior: 'smooth' });
  }

  function handleSubmit(event) {
    event.preventDefault();
    emailField.current.value = '';
    setShowSnackbar(true);
    setReverse(false);
    setTimeout(() => {
      setReverse(true);
    }, 1500);
    setTimeout(() => {
      setShowSnackbar(false);
    }, 3000);
  }

  const links = [
    { title: 'Home', href: '#home' },
    { title: 'Services', href: '#services' },
    { title: 'About', href: '#about' },
    { title: 'Projects', href: '#projects' },
    { title: 'Contact', href: '#contact' },
  ];

  return (
    <footer className={`h-auto  ${theme === 'light' ? 'bg-custom-blue' : 'bg-gray-700'} grid grid-cols-2`}>
      <div className=" max-sm:col-span-2 flex sm:flex-col   justify-evenly sm:justify-center items-center py-8">
        <img src={logo} alt="YA site icon" className="h-12" />
        <ol className="mt-4 max-sm:grid grid-cols-2 grid-rows-2">
          {links.map((item) => (
            <li key={item.title} className="mb-2">
              <a
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href.slice(1))}
                className="text-white hover:text-gray-300"
              >
                {item.title}
              </a>
            </li>
          ))}
        </ol>
      </div>

      <div className="max-sm:col-span-2 relative flex flex-col justify-center items-center py-8">
        <h3 className="text-white font-bold text-lg mb-4">Subscribe to Our Newsletter</h3>
        <form className="flex items-center max-sm:col-span-2 gap-2" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            className="border-2 border-white rounded-md px-3 py-2 mb-4"
            ref={emailField}
          />
          <button
            type="submit"
            className="bg-white text-custom-blue font-bold px-3 py-2 mb-4 rounded-md hover:bg-gray-200"
          >
            Subscribe
          </button>
        </form>
        {showSnackbar &&
          <Slide direction={"right"} triggerOnce duration={500} reverse={reverse}>
            <div className="bg-green-500 text-white py-2 px-4 rounded-lg">
              <h1>Thank you for subscribing!</h1>
            </div>
          </Slide>
        }
      </div>

      <div className="col-span-2 bg-dark-blue flex max-sm:flex-col  max-sm:gap-4 sm:justify-around items-center py-8">
        <p className="text-white font-medium mr-4">
          &copy; 2023 Mohammad Ward - All Rights Reserved
        </p>
        <div className="flex space-x-4">
          <p className="text-white font-bold mr-4">Follow Us:</p>
          <a href="#" className="text-white hover:text-gray-300  ">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
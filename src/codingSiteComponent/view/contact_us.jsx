import React, { useRef, useState } from 'react';
import themeStore from '../controller/useThemeChange';

import backgroundImage from "/assets/images/building_2.jpg"
import { Slide } from "react-awesome-reveal";
const ContactUsPage = () => {

  const { theme } = themeStore();



  const formRef = useRef(null);
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [reverse, setReverse] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target)

    const firstName = formData.get("firstName");
    const lastName = formData.get("lastName");
    const email = formData.get("email");
    const message = formData.get("message");
    console.log({ firstName, lastName, email, message });
    if (firstName || lastName || email || message) {
      setShowSnackbar(true);
      setReverse(false);
      setTimeout(() => {
        setReverse(true);
      }, 1500);
      setTimeout(() => {
        setShowSnackbar(false);
      }, 3000);
      formRef.current.reset();

    }
  }


  return (
    <section className="relative   lg:h-screen" id="contact">
      <div className="absolute inset-0 max-sm:hidden">
        <img
          className="w-full  absolute z-10 h-full object-cover max-sm:hidden"
          src={backgroundImage}
          alt="backgroundImage"
          loading="lazy"
        />
        <div className="absolute inset-0 z-20 sm:bg-black opacity-40 "></div>
      </div>
      <div className="relative z-30 h-full flex flex-col  justify-center items-center ">
        <div className={`max-w-7xl max-sm:gap-5  flex flex-col md:flex-row justify-center items-center p-6 md:p-8 lg:p-12   lg:rounded-3xl ${theme === "dark" ? "bg-gray-900 " : "bg-white "}  shadow-lg`}>
          <div className={` w-full md:w-1/2 px-4 md:px-8 lg:px-12 h-full  rounded-lg drop-shadow-lg text-center md:text-left ${theme === "dark" ? "bg-gray-800 " : "bg-gray-50 "}`}>
            <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold ${theme === 'light' ? 'text-custom-blue' : 'text-white'} mb-8`}>
              Contact Us
            </h2>
            <p className={`text-lg md:text-xl  ${theme === "dark" ? "text-white " : "text-gray-600 "} leading-relaxed mb-8`}>
              To reserve our data analysis services, please fill out the form below and we'll get back to you as soon as possible.
            </p>
            <form className="w-full" ref={formRef} onSubmit={handleSubmit}>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label className={`block uppercase tracking-wide ${theme === "dark" ? "text-white " : "text-gray-700 "}  text-xs font-bold mb-2`} htmlFor="grid-first-name">
                    First Name
                  </label>
                  <input name="firstName"
                    className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-first-name" type="text" placeholder="John" />
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label className={`block uppercase tracking-wide ${theme === "dark" ? "text-white " : "text-gray-700 "}  text-xs font-bold mb-2`} htmlFor="grid-last-name">
                    Last Name
                  </label>
                  <input name="lastName"
                    className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label className={`block uppercase tracking-wide ${theme === "dark" ? "text-white " : "text-gray-700 "}  text-xs font-bold mb-2`} htmlFor="grid-email">
                    Email
                  </label>
                  <input name="email"
                    className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-email" type="email" placeholder="john.doe@example.com" />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label className={`block uppercase tracking-wide ${theme === "dark" ? "text-white " : "text-gray-700 "}  text-xs font-bold mb-2`} htmlFor="grid-message">
                    Message
                  </label>
                  <textarea name="message"
                    className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-message" placeholder="Please describe your data analysis needs"></textarea>
                </div>
              </div>
              <div className="md:flex md:items-center">
                <div className="md:w-1/3 mt-1 mb-2">
                  <button type="submit"
                    className={`py-3 px-6 rounded-full shadow-lg transition duration-500 ${theme === 'dark' ? 'bg-gray-700 hover:bg-gray-600 ring-gray-300 text-white' : 'bg-custom-blue text-white hover:bg-secondary hover:ring-2 ring-dark-blue'}`}>
                    Submit
                  </button>
                </div>
              </div>
            </form>
            {showSnackbar &&
              <Slide direction={"right"} triggerOnce duration={1000} reverse={reverse}>
                <div className="bg-green-500 text-white py-2 px-4 rounded-lg">
                  <h1>Thanks for contacting us we will reach you as soon as possible</h1>
                </div>
              </Slide>
            }
          </div>
          <div className={`w-full md:w-1/2 px-4 md:px-8 lg:px-12 ${theme === "dark" ? " text-white" : "bg-white text-gray-700"}`}>
            <h3 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-center md:text-left ${theme === "dark" ? '' : 'text-custom-blue'}`}>
              Our Location
            </h3>
            <div className="text-lg md:text-xl leading-relaxed mb-8">
              <p>
                You can find us at the following address:
              </p>
              <p className="mt-4">
                123 Main Street<br />
                Suite 456<br />
                City, State ZIP<br />
                Country
              </p>
            </div>
            <div className="text-lg md:text-xl leading-relaxed mb-8">
              <p>
                For any questions or concerns, you can reach us at:
              </p>
              <p className="mt-4">
                Phone: +1 (123) 456-7890<br />
                Email: info@YA.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsPage;
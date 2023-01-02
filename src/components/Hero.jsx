import React from 'react';
import Typed from 'react-typed';
import { HashLink as Link } from 'react-router-hash-link';

export const Hero = () => {
  return (
    <div id="home" className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center md:text-3xl sm:text-2xl text-xl">
        <Typed
          className="md:text-3xl sm:text-2xl text-xl text-gray-300"
          strings={['Hi, I am Prashanth Balakrishnan.']}
          typeSpeed={40}
          backSpeed={50}
          showCursor={false}
        />
        <Typed
          className="md:text-3xl sm:text-2xl text-xl text-gray-300"
          strings={['Welcome to my portfolio']}
          typeSpeed={40}
          backSpeed={50}
          showCursor={false}
          startDelay={3000}
        />
        <div className="flex justify-center mt-10">
          <Link
            type="button"
            to="#projects"
            className="text-white bg-blue-600 hover:bg-blue-800 font-medium rounded-lg text-[1.2rem] px-4 py-2 text-center mr-2 mb-2 flex justify-center items-center"
          >
            My Work
          </Link>
          <Link
            type="button"
            to="#contact"
            className="text-white bg-blue-600 hover:bg-blue-800 font-medium rounded-lg text-[1.2rem] px-4 py-2 text-center mr-2 mb-2 flex justify-center items-center"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </div>
  );
};

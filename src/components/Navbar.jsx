import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { SlUser } from 'react-icons/sl';

export const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="flex text-gray-300 items-center h-24 max-w-[1240px] mx-auto px-4 justify-between">
      <h1 className="w-full text-3xl font-bold text-[#1D85E5]">
        <a href="#">
          <SlUser size={40} />
        </a>
      </h1>
      <ul className="hidden md:flex font-semibold">
        <li className="p-4">
          <a
            className="hover:text-[#1D85E5] hover:border-[#1D85E5] border-transparent border-b-2 py-2"
            href="about"
          >
            About
          </a>
        </li>
        <li className="p-4">
          <a
            className="hover:text-[#1D85E5] hover:border-[#1D85E5] border-transparent border-b-2 py-2"
            href="#"
          >
            Projects
          </a>
        </li>
        <li className="p-4">
          <a
            className="hover:text-[#1D85E5] hover:border-[#1D85E5] border-transparent border-b-2 py-2"
            href="#"
          >
            Qualification
          </a>
        </li>
        <li className="p-4">
          <a
            className="hover:text-[#1D85E5] hover:border-[#1D85E5] border-transparent border-b-2 py-2"
            href="#"
          >
            Contact
          </a>
        </li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? (
          <AiOutlineClose size={20} className="text-gray-300" />
        ) : (
          <AiOutlineMenu size={20} className="text-gray-300" />
        )}
      </div>
      <div
        className={
          nav
            ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500'
            : 'fixed left-[-100%]'
        }
      >
        <h1 className="w-full text-3xl font-bold  m-8">
          {' '}
          <SlUser />
        </h1>

        <ul className="uppercase p-4">
          <li className="p-4 border-b border-gray-600 ">
            <a href="#">Home</a>
          </li>
          <li className="p-4 border-b border-gray-600 ">
            <a href="#">About</a>
          </li>
          <li className="p-4 border-b border-gray-600 ">
            <a href="#">Projects</a>
          </li>
          <li className="p-4 border-b border-gray-600 ">
            <a href="#">Qualification</a>
          </li>
          <li className="p-4">
            <a href="#">Contact Me</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

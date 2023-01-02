import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { SlUser } from 'react-icons/sl';
import { HashLink as Link } from 'react-router-hash-link';
export const Navbar = () => {
  const [nav, setNav] = useState(false);
  const contact = 'Contact Me';
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="flex text-gray-300 items-center h-24 max-w-[1240px] mx-auto px-4 justify-between">
      <h1 className="w-full text-3xl font-bold text-[#1D85E5]">
        <Link to="#home">
          <SlUser size={40} />
        </Link>
      </h1>
      <ul className="hidden md:flex font-semibold">
        <li className="p-4">
          <Link
            to="#about"
            className="hover:text-[#1D85E5] hover:border-[#1D85E5] border-transparent border-b-2 py-2 "
          >
            About
          </Link>
        </li>
        <li className="p-4">
          <Link
            to="#projects"
            className="hover:text-[#1D85E5] hover:border-[#1D85E5] border-transparent border-b-2 py-2 "
          >
            Projects
          </Link>
        </li>
        <li className="p-4">
          <Link
            to="#qual"
            className="hover:text-[#1D85E5] hover:border-[#1D85E5] border-transparent border-b-2 py-2 "
          >
            Qualification
          </Link>
        </li>
        <li className="p-4">
          <Link
            to="#contact"
            className="hover:text-[#1D85E5] hover:border-[#1D85E5] border-transparent border-b-2  py-2   "
          >
            Contact&nbsp;Me
          </Link>
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
          <SlUser />
        </h1>

        <ul className="uppercase p-4">
          <li
            onClick={() => setNav(!nav)}
            className="p-4 border-b border-gray-600"
          >
            <Link to="#about">About</Link>
          </li>
          <li
            onClick={() => setNav(!nav)}
            className="p-4 border-b border-gray-600 "
          >
            <Link to="#projects">Projects</Link>
          </li>
          <li
            onClick={() => setNav(!nav)}
            className="p-4 border-b border-gray-600 "
          >
            <Link to="#qual">Qualification</Link>
          </li>
          <li onClick={() => setNav(!nav)} className="p-4">
            <Link to="#contact">Contact Me</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

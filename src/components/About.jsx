import React from 'react';
import profilePic from '../assets/ProfilePic.jpg';

export const About = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <h1 className="text-center font-bold md:text-3xl sm:text-2xl text-xl mb-10">
        About Me
      </h1>
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img
          className="w-[300px] mx-auto my-4 rounded-md"
          src={profilePic}
          alt="Prashanth"
        />
        <div>
          <p className="text-xl  text-black py-4 ">
            Thank you for visiting my portfolio site. I am a passionate
            Front-End Developer experienced in web development and React
            development. I have 3 years of experience as a web developer.
          </p>
        </div>
      </div>
    </div>
  );
};

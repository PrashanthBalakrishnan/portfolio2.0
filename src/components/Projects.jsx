import React from 'react';
import Project1 from '../assets/Project1.png';
import Project2 from '../assets/Project2.png';
import Project3 from '../assets/Project3.png';
import Project4 from '../assets/Project4.png';
export const Projects = () => {
  return (
    <div className="w-full py-[10rem] px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 gap-8">
        <div className="cursor cursor-pointer flex flex-col">
          <img className="w-[20em] mx-auto" src={Project1} alt="project1" />
          <h2 className="text-white text-center font-bold">Easy Bank Site</h2>

          <p className="text-white text-center">
            Technology Used: HTML SCSS JavaScript
          </p>
        </div>
        <div className="cursor cursor-pointer flex flex-col">
          <img className="w-[20em] mx-auto" src={Project2} alt="project1" />
          <h2 className="text-white text-center font-bold">
            Typing Speed Game
          </h2>

          <p className="text-white text-center">
            Technology Used: HTML CSS React ReactHooks
          </p>
        </div>
        <div className="cursor cursor-pointer flex flex-col">
          <img className="w-[20em] mx-auto" src={Project3} alt="project1" />
          <h2 className="text-white text-center font-bold">Card Component</h2>

          <p className="text-white text-center">Technology Used: HTML SCSS</p>
        </div>
        <div className="cursor cursor-pointer flex flex-col">
          <img className="w-[20em] mx-auto" src={Project4} alt="project1" />
          <h2 className="text-white text-center font-bold">BBQ Form</h2>

          <p className="text-white text-center">Technology Used: HTML CSS</p>
        </div>
      </div>
    </div>
  );
};

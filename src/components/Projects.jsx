import React from 'react';
import Project1 from '../assets/Project1.png';
import Project2 from '../assets/Project2.png';
import Project3 from '../assets/Project3.png';
import Project4 from '../assets/Project4.png';
export const Projects = () => {
  return (
    <div id="projects">
      <h1 className="text-white text-center text-4xl py-8 font-bold">
        Projects
      </h1>
      <div className="w-full py-[5rem] px-4">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 gap-8">
          <a
            href="https://bright-tartufo-ce9b98.netlify.app/"
            className="cursor cursor-pointer flex flex-col"
          >
            <img className="w-[20em] mx-auto" src={Project1} alt="project1" />
            <h2 className="text-white text-center font-bold">Easy Bank Site</h2>
            <p className="text-white text-center">
              Technology Used: HTML SCSS JavaScript
            </p>
          </a>

          <a href="" className="cursor cursor-pointer flex flex-col">
            <img className="w-[20em] mx-auto" src={Project2} alt="project1" />
            <h2 className="text-white text-center font-bold">
              Typing Speed Game
            </h2>
            <p className="text-white text-center">
              Technology Used: HTML CSS React ReactHooks
            </p>
          </a>

          <a
            href="https://musical-rabanadas-cbdab7.netlify.app/"
            className="cursor cursor-pointer flex flex-col"
          >
            <img className="w-[20em] mx-auto" src={Project3} alt="project1" />
            <h2 className="text-white text-center font-bold">
              Card Component(Responsive)
            </h2>
            <p className="text-white text-center">Technology Used: HTML SCSS</p>
          </a>

          <a
            href="https://shiny-puffpuff-b0b6ac.netlify.app/"
            className="cursor cursor-pointer flex flex-col"
          >
            <img className="w-[20em] mx-auto" src={Project4} alt="project1" />
            <h2 className="text-white text-center font-bold">
              BBQ Form (Mobile/Tablet)
            </h2>

            <p className="text-white text-center">Technology Used: HTML CSS</p>
          </a>
        </div>
      </div>
    </div>
  );
};

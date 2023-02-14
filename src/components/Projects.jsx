import React from 'react';
import Project1 from '../assets/Project1.png';
import Project2 from '../assets/Project2.png';
import Project3 from '../assets/Project3.png';
import Project4 from '../assets/Project4.png';
import Project5 from '../assets/Project5.png';
import { HashLink as Link } from 'react-router-hash-link';

export const Projects = () => {
  return (
    <div id="projects">
      <div className="w-full py-[5rem] px-4">
        <h1 className="text-white text-center text-4xl py-8 font-bold">
          Projects
        </h1>
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

          <a
            href="https://courageous-cannoli-05844a.netlify.app/"
            className="cursor cursor-pointer flex flex-col"
          >
            <img className="w-[20em] mx-auto" src={Project2} alt="project2" />
            <h2 className="text-white text-center font-bold">
              Picture Shopping Site
            </h2>
            <p className="text-white text-center">
              Technology Used: HTML CSS React(ReactHooks, ReactRouter)
            </p>
          </a>

          <a
            href="https://chipper-dieffenbachia-948657.netlify.app"
            className="cursor cursor-pointer flex flex-col"
          >
            <img className="w-[20em] mx-auto" src={Project3} alt="project3" />
            <h2 className="text-white text-center font-bold">
              Calculator using React Reducer
            </h2>
            <p className="text-white text-center">
              Technology Used: HTML CSS React(ReactHooks)
            </p>
          </a>

          <a
            href="https://friendly-semolina-28b290.netlify.app/"
            className="cursor cursor-pointer flex flex-col"
          >
            <img className="w-[20em] mx-auto" src={Project4} alt="project4" />
            <h2 className="text-white text-center font-bold">
            Adopt a Pet Site
            </h2>

            <p className="text-white text-center">Technology Used: HTML CSS React ReactRouter ReactQuery</p>
          </a>

          <a
            href="https://fancy-mochi-945aa1.netlify.app/"
            className="cursor cursor-pointer flex flex-col"
          >
            <img className="w-[20em] mx-auto" src={Project5} alt="project4" />
            <h2 className="text-white text-center font-bold">Weather App</h2>

            <p className="text-white text-center">
              Technology Used: HTML CSS React Axios WeatherAPI
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

import React from 'react';

export const Qualification = () => {
  return (
    <div id="qual" className="bg-[#FFFDFA]">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 gap-8">
        <div className=" shadow-xl flex flex-col my-4 rounded-lg">
          <h2 className="text-2xl font-bold text-center py-1">Languages</h2>
          <p className="py-2 border-b mx-8 ">HTML</p>
          <p className="py-2 border-b mx-8 ">CSS</p>
          <p className="py-2 border-b mx-8 ">JavaScript</p>
          <p className="py-2  mx-8 mb-4 ">TypeScript</p>
        </div>
        <div className=" shadow-xl flex flex-col my-4 rounded-lg">
          <h2 className="text-2xl font-bold text-center py-1">Libraries</h2>
          <p className="py-2 border-b mx-8 ">React</p>
          <p className="py-2  mx-8  mb-4 ">jQuery</p>
        </div>

        <div className=" shadow-xl flex flex-col my-4 rounded-lg">
          <h2 className="text-2xl font-bold text-center py-1">CSS Libraries</h2>
          <p className="py-2 border-b mx-8 ">SCSS</p>
          <p className="py-2 border-b mx-8 ">Tailwind</p>
          <p className="py-2 border-b mx-8 ">Material UI</p>
          <p className="py-2  mx-8  mb-4 ">Bootstrap</p>
        </div>
        <div className=" shadow-xl flex flex-col my-4 rounded-lg">
          <h2 className="text-2xl font-bold text-center py-1">Other</h2>
          <p className="py-2 border-b mx-8 ">Figma</p>
          <p className="py-2 border-b mx-8 ">GraphQL</p>
          <p className="py-2 border-b mx-8 ">Git</p>
          <p className="py-2  mx-8  mb-4 ">RestAPI</p>
        </div>
      </div>
    </div>
  );
};

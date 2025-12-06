import React from "react";
import Base_Component from "./Base_Component";

const ProgramsSection = () => {
  return (
    <section className="bg-gray-200 py-16">
      <h1 className="flex flex-col items-center md:flex-row md:text-4xl text-3xl text-blue-900 md:ml-20 font-bold font-sans">Programs</h1>
      <div className="flex flex-col items-center md:flex-row md:justify-evenly mx-10">
        <Base_Component
          title="Programming"
          title_color="text-blue-500"
          teacher="by Fakhri"
          color="bg-blue-200"
          botten_color="bg-blue-500"
        />
        <Base_Component
          title="Arts"
          teacher="by Ranim"
          title_color="text-pink-500"
          color="bg-red-100"
          botten_color="bg-pink-400"
        />
        <Base_Component
          title="Ping-Pong"
          title_color="text-green-500"
          teacher="by Ahmed"
          color="bg-green-100"
          botten_color="bg-green-300"
        />
        <Base_Component
          title="Sports"
          title_color="text-yellow-500"
          teacher="by Omar"
          color="bg-yellow-100"
          botten_color="bg-yellow-300"
        />
      </div>
    </section>
  );
};

export default ProgramsSection;

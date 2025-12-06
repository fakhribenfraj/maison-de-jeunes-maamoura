import React from "react";
import Base_Component from "./Base_Component";

const ProgramsSection = () => {
  return (
    <section className="bg-[#FFF8E9] py-16">
      <h1 className="flex flex-col items-center md:flex-row md:text-4xl text-3xl text-blue-900 md:ml-20">Programs</h1>
      <div className="flex flex-col items-center md:flex-row md:justify-center justify-between gap-8 mt-10 md:gap-6">
        <Base_Component
          title="Programming"
          title_color="text-blue-700"
          teacher="by Fakhri"
          color="bg-blue-100"
          botten_color="bg-blue-700"
        />
        <Base_Component
          title="Arts"
          teacher="by Ranim"
          title_color="text-pink-700"
          color="bg-red-100"
          botten_color="bg-pink-600"
        />
        <Base_Component
          title="Ping-Pong"
          title_color="text-green-700"
          teacher="by Ahmed"
          color="bg-green-100"
          botten_color="bg-green-500"
        />
        <Base_Component
          title="Sports"
          title_color="text-yellow-700"
          teacher="by Omar"
          color="bg-yellow-100"
          botten_color="bg-yellow-400"
        />
      </div>
    </section>
  );
};

export default ProgramsSection;

import React from "react";
import Programming from "./Programming";

const ProgramsSection = () => {
  return (
    <section>
      <div className="flex justify-center">
        <Programming
          title="Programming"
          title_color="text-blue-700"
          teacher="by Fakhri"
          color="bg-blue-100"
          botten_color="bg-blue-700"
        />
        <Programming
          title="Arts"
          teacher="by Ranim"
          title_color="text-pink-700"
          color="bg-red-100"
          botten_color="bg-pink-600"
        />
        <Programming
          title="Ping-Pong"
          title_color="text-green-700"
          teacher="by Ahmed"
          color="bg-green-100"
          botten_color="bg-green-500"
        />
        <Programming
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

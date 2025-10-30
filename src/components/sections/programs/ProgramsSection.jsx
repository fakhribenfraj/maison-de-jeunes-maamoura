import React from "react";
import Robotique from "./Robotique";
import Arts from "./Arts";
import Sports from "./Sports";
import Painting from "./Painting";

const ProgramsSection = () => {
  return (
    <section>
      <div className="flex justify-center">
        <Robotique />
        <Arts />
        <Sports />
        <Painting />
      </div>
    </section>
  );
};

export default ProgramsSection;
   
import React from "react";
import Hero from "./Hero";
import Imagess from "./Imagess";

const HeroSection = () => {
  return (
    <section className="flex justify-center bg-[#FFF8E9] py-16">
      <Hero />
      <Imagess/>
    </section>
  );
};

export default HeroSection;

import React from "react";
import Hero from "./Hero";
import Imagess from "./Imagess";

const HeroSection = () => {
  return (
    <section className="flex flex-col md:flex-row justify-center bg-[#FFF8E9] py-16">
      <Hero />
      <Imagess/>
    </section>
  );
};

export default HeroSection;

import React from "react";
import Hero from "./Hero";
import Imagess from "./Imagess";

const HeroSection = () => {
  return (
    <section className="flex flex-col md:flex-row justify-center bg-gray-200 py-12">
      <Hero />
      <Imagess/>
    </section>
  );
};

export default HeroSection;

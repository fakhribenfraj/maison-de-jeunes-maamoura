import React from "react";
import Maison_de_Jeune from "./Maison_de_Jeunes";

const Header = () => {
  return (
    <div className="hidden md:flex md:justify-center md:gap-4 md:mt-1.5 bg-gray-200 md:py-16">
      <Maison_de_Jeune flex="md:flex md:justify-center md:gap-1" />

      <h1 className="hidden md:block md:text-indigo-900 md:mt-5">Programs</h1>
      <h1 className="hidden md:block md:text-indigo-900 md:mt-5">Events</h1>
      <h1 className="hidden md:block md:text-indigo-900 md:mt-5">Galerei</h1>
      <h1 className="hidden md:block md:text-indigo-900 md:mt-5">About</h1>
      <h1 className="hidden md:block md:bg-blue-900 md:text-white md:mt-2.5 md:p-3 md:rounded-xl md:w-21">
        Contact
      </h1>
    </div>
  );
};

export default Header;

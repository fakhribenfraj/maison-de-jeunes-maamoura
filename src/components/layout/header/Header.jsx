import React from "react";
import Maison_de_Jeune from "./Maison_de_Jeunes";

const Header = () => {
  return (
    <div className="flex justify-center gap-4 mt-1.5 bg-[#FFF8E9] py-16">
      <Maison_de_Jeune flex="flex justify-center gap-1" />

      <h1 className="text-indigo-900 mt-5">Programs</h1>
      <h1 className="text-indigo-900 mt-5">Events</h1>
      <h1 className="text-indigo-900 mt-5">Galerei</h1>
      <h1 className="text-indigo-900 mt-5">About</h1>
      <h1 className="bg-blue-900 text-white mt-2.5 p-3 rounded-xl w-21">
        Contact
      </h1>
    </div>
  );
};

export default Header;

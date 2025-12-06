import React from "react";
import Atelier from "./Atelier";
import Conférence from "./Conférence";
import Tournoi from "./Tournoi";
import Images from "./Images";

const EventsSection = () => {
  return (
    <section className="bg-gray-200 py-16">
      <h1 className="text-4xl text-blue-900 md:ml-20 ml-5 mb-5 bold font-bold">Upcoming Events</h1>
      <section className="flex md:flex-row flex-col justify-center space-x-4">
        <div>
          <Atelier month="Mai" title="4" />
          <Tournoi title="12" month="Mai" />
          <Conférence month="Mai" title="20" />
        </div>
        <Images />
      </section>
    </section>
  );
};

export default EventsSection;

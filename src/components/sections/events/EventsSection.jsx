import React from "react";
import Atelier from "./Atelier";
import Conférence from "./Conférence";
import Tournoi from "./Tournoi";
import Images from "./Images";

const EventsSection = () => {
  return (
    <section>
      <h1>Evenements à venir</h1>
      <section className="flex justify-center space-x-4">
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

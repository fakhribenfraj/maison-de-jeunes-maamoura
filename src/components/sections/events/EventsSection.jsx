import React from "react";
import Atelier from "./Atelier";
import Conférence from "./Conférence";
import Tournoi from "./Tournoi";

const EventsSection = () => {
  return (
    <section>
      <h1>Evenements à venir</h1>
      <Atelier />
      <Tournoi />
      <Conférence />
    </section>
  );
};

export default EventsSection;

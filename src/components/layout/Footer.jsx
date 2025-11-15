import React from "react";
import Maison_de_Jeune from "./header/Maison_de_Jeunes";

const Footer = () => {
  return (
    <div className="flex flex-col">
      <section className="flex gap-20 justify-between">
        <div>
          <Maison_de_Jeune flex="flex gap-1" />
          <h3>123 Rue de Jeunesse</h3>
          <h3>Ville, Code Postal</h3>
          <h3>Téléphone: +23 466 790</h3>
          <h1>Email: info@maisondejeunes.org</h1>
        </div>
        <div>
          <h3>Liens Rapidites</h3>
          <h3>Events</h3>
          <h3>Galerie</h3>
          <h3>About</h3>
        </div>
        <div className="flex justify-center flex-col items-center">
          <h3>Follow us</h3>
          <span className="flex justify-end gap-4">
            <img src="/images/facebook-logo.png" alt=" " className="w-6 h-6" />
            <img src="/images/linkin-logo.png" alt=" " className="w-6 h-6" />
          </span>
        </div>
      </section>
      <h3 className="text-center">
        ©2024 Maison de Jeunes. Tout droit réservés. | Mentions légales |
        Politique de Confidentatité
      </h3>
    </div>
  );
};

export default Footer;

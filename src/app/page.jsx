import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans flex flex-col items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl font-bold text-center text-primary">
          Maison de Jeunes Maamoura
        </h1>
        <h3 className="text-2xl font-bold text-center text-secondary">
          meilleur espace pour ton enfant
        </h3>
      </div>

      <p className="text-center text-lg max-w-xl">
        Bienvenue à la Maison de Jeunes Maamoura! Nous sommes dédiés à offrir un
        espace sûr et enrichissant pour les jeunes de notre communauté.
        Rejoignez-nous pour des activités, des ateliers et des événements
        passionnants!
      </p>
    </div>
  );
}

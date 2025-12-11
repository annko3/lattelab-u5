import React from "react";
import { Link } from "react-router-dom";
import Publicidad from "../../assets/images/publicidad.png";

export default function MarketingCampaign() {
  return (
    <section className="bg-background text-brown-dark ">
      <div className="bg-background-alt px-6 py-5 md:px-12 md:py-10 rounded-2xl shadow-xl shadow-red max-w-5xl mx-auto my-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Creamos experiencias que conectan a las personas a través del arte, el
          conocimiento y el buen café.
        </h2>
        <img
          src={Publicidad}
          alt="Publicidad"
          className="w-full rounded-2xl shadow-md mb-10"
        />

        <p className="text-lg md:text-xl leading-relaxed mb-10">
          ✨ ¡Lattelab abre sus puertas! ✨<br />Un espacio donde el café, los libros y la
          creatividad se unen para inspirarte. Descubre nuestros talleres,
          actividades y productos creados especialmente para ti.
        </p>
       <Link to="/" className="bg-[#a96f4b] hover:bg-[#8a593d] transition text-white p-[12px] font-bold rounded-xl">
          Explora nuestro sitio
        </Link>
      </div>
    </section>
  );
}

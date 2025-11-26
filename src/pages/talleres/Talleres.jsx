import React, { useState } from "react";

const talleres = [
  { id: 1, nombre: "Taller Arte Latte", descripcion: "Aprende a crear diseños artísticos en tu café con leche.", horario: "Lunes 3pm - 5pm", tipo: "Café", imagen: "https://wcy.com.br/wp-content/uploads/2024/06/Latte-Art-360x445.jpeg" },
  { id: 2, nombre: "Cata de Café", descripcion: "Descubre los sabores y aromas de diferentes tipos de café.", horario: "Martes 4pm - 6pm", tipo: "Café", imagen: "https://www.coffeemori.com/cdn/shop/articles/tomar-cafeina-es-perjudicial-para-mi.jpg?v=1646861965" },
  { id: 3, nombre: "Técnicas de Espresso", descripcion: "Domina los métodos para lograr el espresso perfecto.", horario: "Miércoles 4pm - 6pm", tipo: "Café", imagen: "https://cdn.greenplantation.com/2021/08/1U4A1822.jpg" },
  { id: 4, nombre: "Repostería Creativa", descripcion: "Aprende a preparar postres deliciosos y visualmente hermosos.", horario: "Jueves 2pm - 4pm", tipo: "Repostería", imagen: "https://www.gracielacoca.com/img/img-lista3.jpg" },
  { id: 5, nombre: "Club de Lectura", descripcion: "Comparte ideas y reflexiones sobre libros inspiradores.", horario: "Viernes 3pm - 5pm", tipo: "Lectura", imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq5HeyApD506Rod65J9cgrfXNNR1KJdYon_kOW0KT7ws7a2AEBX6jVH5aKPWC4AT7869c&usqp=CAU" }, 
  { id: 6, nombre: "Lectura de Poemas", descripcion: "Explora el arte de la poesía en voz alta.", horario: "Sábado 4pm - 6pm", tipo: "Lectura", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKDbCJIRUiRoF3XI6qY4bPVzx4TN5HRYfEaw&s" },
];

function Talleres() {
  const [search, setSearch] = useState("");
  const [filtroTipo, setFiltroTipo] = useState("Todos");

  const filteredTalleres = talleres
    .filter((t) => t.nombre.toLowerCase().includes(search.toLowerCase()))
    .filter((t) => filtroTipo === "Todos" || t.tipo === filtroTipo);

  return (
    <section className="bg-background text-brown-dark text-center">
      <h1 className="font-bold text-4xl mb-5 text-brown-dark">Nuestros Talleres</h1>

      <input
        type="text"
        placeholder="Buscar taller..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-6 p-2 rounded-lg border border-brown-medium w-full max-w-md mx-auto block"
      />

      <div className="flex justify-center gap-4 mb-6">
        {["Todos", "Café", "Repostería", "Lectura"].map((tipo) => (
          <button
            key={tipo}
            onClick={() => setFiltroTipo(tipo)}
            className={`px-4 py-2 rounded-lg font-semibold border transition ${
              filtroTipo === tipo
                ? "bg-brown-dark text-white shadow-lg"
                : "bg-background-alt text-brown-dark border-brown-medium hover:bg-brown-medium hover:text-white"
            }`}
          >
            {tipo}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTalleres.map((taller) => (
          <div
            key={taller.id}
            className="bg-background-alt rounded-xl shadow-lg p-4 transition-transform duration-300 hover:scale-105 hover:shadow-red"
          >
            <img
              src={taller.imagen}
              alt={taller.nombre}
              className="w-full h-64 object-cover rounded-lg mb-3 transition-transform duration-500 hover:scale-110"
            />
            <h3 className="text-xl font-semibold">{taller.nombre}</h3>
            <p className="text-sm mb-2">{taller.descripcion}</p>
            <p className="text-brown-medium font-medium">{taller.horario}</p>
            <button className="mt-3 bg-brown-medium text-white py-2 px-4 rounded-lg hover:bg-brown-dark transition">
              Más info
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Talleres;
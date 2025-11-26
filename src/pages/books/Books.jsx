import React, { useState, useEffect } from "react";

function Libros() {
  const [libros, setLibros] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [filtro, setFiltro] = useState("todos");
  const [categorias, setCategorias] = useState(["todos"]);

  const traducirCategoria = (cat) => {
    if (!cat) return "Sin categoría";
    const traducciones = {
      Fiction: "Ficción",
      Nonfiction: "No ficción",
      Science: "Ciencia",
      History: "Historia",
      Technology: "Tecnología",
    };
    return traducciones[cat] || cat;
  };

  useEffect(() => {
    fetch("https://www.googleapis.com/books/v1/volumes?q=a&maxResults=25")
      .then((res) => res.json())
      .then((data) => {
        if (data.items) {
          const librosFormateados = data.items.map((libro) => ({
            id: libro.id,
            titulo: libro.volumeInfo.title,
            autores: libro.volumeInfo.authors?.join(", ") || "Autor desconocido",
            descripcion: libro.volumeInfo.description || "Sin descripción disponible.",
            imagen: libro.volumeInfo.imageLinks?.thumbnail || "/no-cover.png",
            categoria: traducirCategoria(libro.volumeInfo.categories?.[0]),
          }));

          const catsUnicas = Array.from(
            new Set(librosFormateados.map((l) => l.categoria).filter(Boolean))
          );

          setCategorias(["todos", ...catsUnicas]);
          setLibros(librosFormateados);
        }
      })
      .catch((error) => console.log("Error al cargar los libros: ", error));
  }, []);

  const librosFiltrados = libros.filter((libro) => {
    const coincideBusqueda =
      libro.titulo.toLowerCase().includes(busqueda.toLowerCase()) ||
      libro.autores.toLowerCase().includes(busqueda.toLowerCase());
    const coincideFiltro = filtro === "todos" || libro.categoria === filtro;
    return coincideBusqueda && coincideFiltro;
  });

  return (
    <section className="bg-background text-brown-dark p-5">
      <h1 className="font-bold text-4xl mb-6 text-center">Libros</h1>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
        <input
          type="text"
          placeholder="Buscar libro por título o autor..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          className="bg-background border-2 border-brown-dark outset-border rounded-lg px-3 py-2 w-80"
        />

        <select
          value={filtro}
          onChange={(e) => setFiltro(e.target.value)}
          className="bg-background border-2 border-brown-dark outset-border rounded-lg px-3 py-2 w-60"
        >
          {categorias.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-wrap justify-center gap-10">
        {librosFiltrados.map((libro) => (
          <div
            key={libro.id}
            className="bg-white border-1 border-brown-dark outset-border w-60 transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red rounded-2xl overflow-hidden"
          >
            <img
              src={libro.imagen}
              alt={libro.titulo}
              className="w-full object-cover rounded-t-lg mb-3"
            />
            <div className="p-4 flex flex-col gap-2">
              <h3 className="font-bold text-2xl text-brown-dark line-clamp-3">
                {libro.titulo}
              </h3>
              <p className="line-clamp-3">{libro.descripcion}</p>
              <p className="font-light line-clamp-1">{libro.autores}</p>
              <p className="italic text-sm line-clamp-1">{libro.categoria}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Libros;



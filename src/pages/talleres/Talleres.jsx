import { useEffect, useState } from "react";
import { db, auth } from "../../firebase/config";
import { onAuthStateChanged } from "firebase/auth";
import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

function Talleres() {
  const [search, setSearch] = useState("");
  const [filtroTipo, setFiltroTipo] = useState("Todos");
  const [talleres, setTalleres] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);

  const [newTaller, setNewTaller] = useState({
    name: "",
    description: "",
    schedule: "",
    type: "Café",
    image: "",
  });

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const userDoc = await getDoc(doc(db, "users", user.uid));
        setIsAdmin(userDoc.data()?.role === "admin");
      } else {
        setIsAdmin(false);
      }
    });

    return () => unsub();
  }, []);

  useEffect(() => {
    const fetchTalleres = async () => {
      const snapshot = await getDocs(collection(db, "talleres"));
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setTalleres(data);
    };

    fetchTalleres();
  }, []);

  /* AGREGAR */
  const handleAdd = async () => {
    if (!newTaller.name || !newTaller.image) {
      alert("Nombre e imagen son obligatorios");
      return;
    }

    await addDoc(collection(db, "talleres"), newTaller);

    setNewTaller({
      name: "",
      description: "",
      schedule: "",
      type: "Café",
      image: "",
    });

    const snapshot = await getDocs(collection(db, "talleres"));
    setTalleres(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
  };

  /* ELIMINAR*/
  const handleDelete = async (id) => {
    if (!window.confirm("¿Eliminar taller?")) return;

    await deleteDoc(doc(db, "talleres", id));
    setTalleres(talleres.filter((t) => t.id !== id));
  };

  /* FILTROS */
  const filteredTalleres = talleres
    .filter((t) =>
      t.name.toLowerCase().includes(search.toLowerCase())
    )
    .filter(
      (t) => filtroTipo === "Todos" || t.type === filtroTipo
    );

  return (
    <section className="bg-background text-brown-dark text-center p-6">
      <h1 className="font-bold text-4xl mb-5 text-brown-dark">Nuestros Talleres</h1>

      {/* FORM DE AGREGAR TALLER */}
      {isAdmin && (
        <div className="max-w-md mx-auto mb-10 bg-background-alt p-4 rounded-xl">

          <input
            placeholder="Nombre"
            value={newTaller.name}
            onChange={(e) =>
              setNewTaller({ ...newTaller, name: e.target.value })
            }
            className="mb-2 p-2 w-full rounded"
          />

          <input
            placeholder="Descripción"
            value={newTaller.description}
            onChange={(e) =>
              setNewTaller({ ...newTaller, description: e.target.value })
            }
            className="mb-2 p-2 w-full rounded"
          />

          <input
            placeholder="Horario"
            value={newTaller.schedule}
            onChange={(e) =>
              setNewTaller({ ...newTaller, schedule: e.target.value })
            }
            className="mb-2 p-2 w-full rounded"
          />

          <select
            value={newTaller.type}
            onChange={(e) =>
              setNewTaller({ ...newTaller, type: e.target.value })
            }
            className="mb-2 p-2 w-full rounded"
          >
            <option value="Café">Café</option>
            <option value="Repostería">Repostería</option>
            <option value="Lectura">Lectura</option>
          </select>

          <input
            placeholder="URL de imagen"
            value={newTaller.image}
            onChange={(e) =>
              setNewTaller({ ...newTaller, image: e.target.value })
            }
            className="mb-2 p-2 w-full rounded"
          />

          <button
            onClick={handleAdd}
            className="bg-brown-dark text-white px-4 py-2 rounded-lg mt-2 cursor-pointer hover:bg-brown-medium transition"
          >
            Agregar Taller
          </button>
        </div>
      )}

      {/* BUSCADOR */}
      <input
        type="text"
        placeholder="Buscar taller..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-6 p-2 rounded-lg border w-full max-w-md mx-auto block"
      />

      {/* FILTROS */}
      <div className="flex justify-center gap-4 mb-6">
        {["Todos", "Café", "Repostería", "Lectura"].map((type) => (
          <button
            key={type}
            onClick={() => setFiltroTipo(type)}
            className={`px-4 py-2 rounded-lg font-semibold border ${
              filtroTipo === type
                ? "bg-brown-dark text-white"
                : "bg-background-alt hover:bg-brown-medium hover:text-white"
            }`}
          >
            {type}
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
              src={taller.image}
              alt={taller.name}
              className="w-full h-64 object-cover rounded-lg mb-3 transition-transform duration-500 hover:scale-110"
            />

            <h3 className="text-xl font-semibold">{taller.name}</h3>
            <p className="text-sm mb-2">{taller.description}</p>
            <p className="text-brown-medium font-medium">
              {taller.schedule}
            </p>

            {isAdmin && (
              <button
                onClick={() => handleDelete(taller.id)}
                className="mt-3 bg-brown-medium text-white py-2 px-4 rounded-lg hover:bg-red transition cursor-pointer"
              >
                Eliminar
              </button>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Talleres;

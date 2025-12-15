import { useState, useContext } from "react";
import { AppContext } from "../../contexts/AppContext.jsx"; // Import corregido

/* ===== DASHBOARD USUARIO FUNCIONAL ===== */
export default function DashboardUser() {
  const { testimonios, agregarTestimonio, eliminarTestimonio } = useContext(AppContext);

  const [seccion, setSeccion] = useState("inicio");
  const [nuevoTestimonio, setNuevoTestimonio] = useState({ mensaje: "", estrellas: 5 });

  // Datos de prueba
  const pedidos = [
    { id: 1023, estado: "En proceso", fecha: "18/12" },
    { id: 1024, estado: "Entregado", fecha: "14/12" },
  ];
  

  const mensajes = [
    { id: 1, mensaje: "Hola, ¿cuándo llega mi pedido?" },
  ];

  const usuario = {
    nombre: "Usuario Demo",
    email: "user@gmail.com",
    role: "User",
  };

  /* ===== FUNCIONES TESTIMONIOS ===== */
  const handleAgregarTestimonio = () => {
    if (!nuevoTestimonio.mensaje.trim()) return;
    agregarTestimonio(nuevoTestimonio);
    setNuevoTestimonio({ mensaje: "", estrellas: 5 });
  };

  return (
    <div className="min-h-screen bg-[var(--color-background)] flex">
      {/* SIDEBAR */}
      <aside className="w-64 bg-[var(--color-brown-dark)] text-white p-6 hidden md:block">
        <h2 className="text-2xl font-bold mb-8">Mi Perfil ☕</h2>

        <nav className="flex flex-col gap-4">
          <button onClick={() => setSeccion("inicio")} className="text-left hover:text-[var(--color-beige)]">🏠 Inicio</button>
          <button onClick={() => setSeccion("pedidos")} className="text-left hover:text-[var(--color-beige)]">📦 Mis pedidos</button>
          <button onClick={() => setSeccion("testimonios")} className="text-left hover:text-[var(--color-beige)]">⭐ Mis testimonios</button>
          <button onClick={() => setSeccion("chat")} className="text-left hover:text-[var(--color-beige)]">💬 Mensajes</button>
          <button onClick={() => setSeccion("perfil")} className="text-left hover:text-[var(--color-beige)]">👤 Mi perfil</button>
        </nav>
      </aside>

      {/* CONTENIDO */}
      <main className="flex-1 p-6">
        {seccion === "inicio" && <Inicio pedidos={pedidos} testimonios={testimonios} mensajes={mensajes} />}
        {seccion === "pedidos" && <Pedidos pedidos={pedidos} />}
        {seccion === "testimonios" && (
          <MisTestimonios 
            testimonios={testimonios} 
            eliminarTestimonio={eliminarTestimonio} 
            nuevoTestimonio={nuevoTestimonio} 
            setNuevoTestimonio={setNuevoTestimonio}
            handleAgregarTestimonio={handleAgregarTestimonio}
          />
        )}
        {seccion === "chat" && <Chat mensajes={mensajes} />}
        {seccion === "perfil" && <Perfil usuario={usuario} />}
      </main>
    </div>
  );
}

/* ===== SECCIONES ===== */

function Inicio({ pedidos, testimonios, mensajes }) {
  return (
    <>
      <h1 className="text-3xl font-bold text-[var(--color-brown-dark)] mb-6">Bienvenido 💖</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card titulo="Pedidos activos" valor={pedidos.length} icono="📦" />
        <Card titulo="Testimonios" valor={testimonios.length} icono="⭐" />
        <Card titulo="Mensajes" valor={mensajes.length} icono="💬" />
        <Card titulo="Próxima entrega" valor="15/12" icono="📅" />
      </div>
    </>
  );
}

function Pedidos({ pedidos }) {
  return (
    <>
      <h2 className="text-2xl font-bold mb-4 text-[var(--color-brown-dark)]">Mis pedidos 📦</h2>
      {pedidos.map(p => (
        <div key={p.id} className="bg-[var(--color-background-alt)] p-6 rounded-2xl mb-3">
          <p>☕ Pedido #{p.id} — <strong>{p.estado}</strong></p>
          <p className="text-sm text-gray-600">Fecha estimada de entrega: {p.fecha}</p>
        </div>
      ))}
    </>
  );
}

function MisTestimonios({ testimonios, eliminarTestimonio, nuevoTestimonio, setNuevoTestimonio, handleAgregarTestimonio }) {
  return (
    <>
      <h2 className="text-2xl font-bold mb-4 text-[var(--color-brown-dark)]">Mis testimonios ⭐</h2>
      
      {testimonios.map(t => (
        <div key={t.id} className="bg-[var(--color-background-alt)] p-6 rounded-2xl mb-4">
          <p className="italic">{t.mensaje}</p>
          <div className="text-yellow-400">{'★'.repeat(t.estrellas)}</div>
          <button 
            onClick={() => eliminarTestimonio(t.id)}
            className="mt-3 bg-[var(--color-brown-pink)] text-white px-4 py-2 rounded-xl"
          >
            Eliminar
          </button>
        </div>
      ))}

      <div className="mt-4">
        <textarea
          className="w-full p-3 rounded-xl mb-2 border"
          placeholder="Escribe tu testimonio..."
          value={nuevoTestimonio.mensaje}
          onChange={(e) => setNuevoTestimonio({ ...nuevoTestimonio, mensaje: e.target.value })}
        />
        <select
          value={nuevoTestimonio.estrellas}
          onChange={(e) => setNuevoTestimonio({ ...nuevoTestimonio, estrellas: Number(e.target.value) })}
          className="mb-2 border p-2 rounded-xl"
        >
          {[1,2,3,4,5].map(n => <option key={n} value={n}>{n} ★</option>)}
        </select>
        <button 
          onClick={handleAgregarTestimonio}
          className="bg-[var(--color-brown-pink)] text-white px-4 py-2 rounded-xl"
        >
          Agregar testimonio
        </button>
      </div>
    </>
  );
}

function Chat({ mensajes }) {
  return (
    <>
      <h2 className="text-2xl font-bold mb-4 text-[var(--color-brown-dark)]">Mensajes 💬</h2>
      <form className="bg-[var(--color-background-alt)] p-6 rounded-2xl max-w-lg">
        <textarea placeholder="Escribe tu mensaje..." className="w-full p-3 rounded-xl mb-4" />
        <button className="bg-[var(--color-brown-medium)] text-white px-4 py-2 rounded-xl">Enviar</button>
        <p className="text-sm text-gray-600 mt-3">Te responderemos pronto 💌</p>
        <div className="mt-4">
          {mensajes.map(m => <p key={m.id} className="mb-1"><strong>Usuario:</strong> {m.mensaje}</p>)}
        </div>
      </form>
    </>
  );
}

function Perfil({ usuario }) {
  return (
    <>
      <h2 className="text-2xl font-bold mb-4 text-[var(--color-brown-dark)]">Mi perfil 👤</h2>
      <div className="grid grid-cols-1 gap-4 max-w-md">
        <Widget title="Nombre" value={usuario.nombre} />
        <Widget title="Email" value={usuario.email} />
        <Widget title="Rol" value={usuario.role} />
      </div>
    </>
  );
}

function Widget({ title, value }) {
  return (
    <div className="bg-[var(--color-background-alt)] p-6 rounded-2xl flex justify-between items-center">
      <span className="font-semibold">{title}:</span>
      <input className="border rounded p-2 bg-white text-black" defaultValue={value} />
    </div>
  );
}

function Card({ titulo, valor, icono }) {
  return (
    <div className="bg-[var(--color-background-alt)] p-6 rounded-2xl shadow-md">
      <div className="text-3xl mb-2">{icono}</div>
      <p className="text-sm text-gray-600">{titulo}</p>
      <p className="text-2xl font-bold text-[var(--color-brown-dark)]">{valor}</p>
    </div>
  );
}
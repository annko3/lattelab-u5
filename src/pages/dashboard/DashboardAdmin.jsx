import { useState } from "react";

/* ===== DASHBOARD ADMIN FUNCIONAL ===== */
export default function DashboardAdmin() {
  const [seccion, setSeccion] = useState("resumen");

  // Datos simulados
  const usuariosData = [
    { id: 1, email: "user@gmail.com", role: "User" },
    { id: 2, email: "admin@lattelab.org", role: "Admin" },
  ];

  const productosData = [
    { id: 1, nombre: "Café Premium" },
    { id: 2, nombre: "Café Latte" },
  ];

  const pedidosData = [
    { id: 1023, estado: "En proceso", fecha: "18/12" },
    { id: 1024, estado: "Entregado", fecha: "14/12" },
  ];

  const testimoniosData = [
    { id: 1, mensaje: "Excelente atención", estrellas: 5 },
  ];

  const mensajesData = [
    { id: 1, usuario: "user@gmail.com", mensaje: "¿Cuándo llega mi pedido?" },
  ];

  return (
    <div className="min-h-screen bg-[var(--color-background)] flex">
      {/* SIDEBAR */}
      <aside className="w-64 bg-[var(--color-brown-dark)] text-white p-6 hidden md:block">
        <h2 className="text-2xl font-bold mb-8">Admin Panel ☕</h2>

        <nav className="flex flex-col gap-4">
          <button onClick={() => setSeccion("resumen")} className="text-left hover:text-[var(--color-beige)]">
            📊 Resumen
          </button>
          <button onClick={() => setSeccion("usuarios")} className="text-left hover:text-[var(--color-beige)]">
            👥 Usuarios
          </button>
          <button onClick={() => setSeccion("productos")} className="text-left hover:text-[var(--color-beige)]">
            🛍️ Productos
          </button>
          <button onClick={() => setSeccion("pedidos")} className="text-left hover:text-[var(--color-beige)]">
            📦 Pedidos
          </button>
          <button onClick={() => setSeccion("testimonios")} className="text-left hover:text-[var(--color-beige)]">
            ⭐ Testimonios
          </button>
          <button onClick={() => setSeccion("mensajes")} className="text-left hover:text-[var(--color-beige)]">
            💬 Mensajes
          </button>
        </nav>
      </aside>

      {/* CONTENIDO */}
      <main className="flex-1 p-6">
        {seccion === "resumen" && <Resumen usuarios={usuariosData} pedidos={pedidosData} productos={productosData} mensajes={mensajesData} />}
        {seccion === "usuarios" && <Usuarios usuarios={usuariosData} />}
        {seccion === "productos" && <Productos productos={productosData} />}
        {seccion === "pedidos" && <Pedidos pedidos={pedidosData} />}
        {seccion === "testimonios" && <Testimonios testimonios={testimoniosData} />}
        {seccion === "mensajes" && <Mensajes mensajes={mensajesData} />}
      </main>
    </div>
  );
}

/* ===== SECCIONES ===== */

function Resumen({ usuarios, pedidos, productos, mensajes }) {
  return (
    <>
      <h1 className="text-3xl font-bold text-[var(--color-brown-dark)] mb-6">Panel de control 📊</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <Card titulo="Usuarios" valor={usuarios.length} icono="👥" />
        <Card titulo="Pedidos hoy" valor={pedidos.length} icono="📦" />
        <Card titulo="Productos" valor={productos.length} icono="🛍️" />
        <Card titulo="Mensajes nuevos" valor={mensajes.length} icono="💬" />
      </div>

      {/* Gráfica simbólica */}
      <div className="bg-[var(--color-background-alt)] p-6 rounded-2xl">
        <p className="font-bold mb-2">📈 Pedidos del día</p>
        <p className="text-gray-600 text-sm mb-4"></p>
        <div className="flex items-end gap-3 h-32">
          {[4, 7, 3, 6, 5].map((v, i) => (
            <div key={i} style={{ height: `${v * 15}px` }} className="w-8 bg-[var(--color-brown-pink)] rounded-md" />
          ))}
        </div>
      </div>
    </>
  );
}

function Usuarios({ usuarios }) {
  return (
    <>
      <h2 className="text-2xl font-bold mb-4 text-[var(--color-brown-dark)]">Usuarios 👥</h2>
      <div className="bg-[var(--color-background-alt)] p-6 rounded-2xl">
        {usuarios.map(u => (
          <div key={u.id} className="flex justify-between items-center mb-2">
            <p>{u.email} — <strong>{u.role}</strong></p>
            <button className="bg-[var(--color-red)] text-white px-3 py-1 rounded-lg">Bloquear</button>
          </div>
        ))}
      </div>
    </>
  );
}

function Productos({ productos }) {
  return (
    <>
      <h2 className="text-2xl font-bold mb-4 text-[var(--color-brown-dark)]">Productos 🛍️</h2>
      <div className="bg-[var(--color-background-alt)] p-6 rounded-2xl mb-4">
        {productos.map(p => (
          <p key={p.id}>☕ {p.nombre}</p>
        ))}
      </div>
      <button className="bg-[var(--color-brown-pink)] text-white px-4 py-2 rounded-xl">+ Agregar producto</button>
    </>
  );
}

function Pedidos({ pedidos }) {
  return (
    <>
      <h2 className="text-2xl font-bold mb-4 text-[var(--color-brown-dark)]">Pedidos 📦</h2>
      <div className="bg-[var(--color-background-alt)] p-6 rounded-2xl">
        {pedidos.map(p => (
          <p key={p.id}>Pedido #{p.id} — <strong>{p.estado}</strong> (Entrega: {p.fecha})</p>
        ))}
      </div>
    </>
  );
}

function Testimonios({ testimonios }) {
  return (
    <>
      <h2 className="text-2xl font-bold mb-4 text-[var(--color-brown-dark)]">Testimonios ⭐</h2>
      {testimonios.map(t => (
        <div key={t.id} className="bg-[var(--color-background-alt)] p-6 rounded-2xl mb-4">
          <p className="italic">{t.mensaje}</p>
          <div className="text-yellow-400">{'★'.repeat(t.estrellas)}</div>
          <button className="mt-3 bg-[var(--color-red)] text-white px-3 py-1 rounded-lg">Eliminar</button>
        </div>
      ))}
    </>
  );
}

function Mensajes({ mensajes }) {
  return (
    <>
      <h2 className="text-2xl font-bold mb-4 text-[var(--color-brown-dark)]">Mensajes 💬</h2>
      {mensajes.map(m => (
        <div key={m.id} className="bg-[var(--color-background-alt)] p-6 rounded-2xl mb-3">
          <p><strong>{m.usuario}:</strong> {m.mensaje}</p>
          <button className="mt-2 bg-[var(--color-brown-medium)] text-white px-3 py-1 rounded-lg">Marcar como respondido</button>
        </div>
      ))}
    </>
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
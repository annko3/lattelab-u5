import { useState, useContext } from "react";
import { AppContext } from "../../contexts/AppContext.jsx";

/* ===== DASHBOARD ADMIN FUNCIONAL ===== */
export default function DashboardAdmin() {
  const {
    usuarios,
    toggleBlockUser,
    productos,
    addProducto,
    deleteProducto,
    pedidos,
    updatePedidoStatus,
    testimonios,
    addTestimonio,
    deleteTestimonio,
    mensajes,
    markResponded,
  } = useContext(AppContext);

  const [seccion, setSeccion] = useState("resumen");
  

  return (
    <div className="min-h-screen bg-[var(--color-background)] flex">
      {/* SIDEBAR */}
      <aside className="w-64 bg-[var(--color-brown-dark)] text-white p-6 hidden md:block">
        <h2 className="text-2xl font-bold mb-8">Admin Panel ☕</h2>

        <nav className="flex flex-col gap-4">
          <button onClick={() => setSeccion("resumen")} className="text-left hover:text-[var(--color-beige)]">📊 Resumen</button>
          <button onClick={() => setSeccion("usuarios")} className="text-left hover:text-[var(--color-beige)]">👥 Usuarios</button>
          <button onClick={() => setSeccion("productos")} className="text-left hover:text-[var(--color-beige)]">🛍️ Productos</button>
          <button onClick={() => setSeccion("pedidos")} className="text-left hover:text-[var(--color-beige)]">📦 Pedidos</button>
          <button onClick={() => setSeccion("testimonios")} className="text-left hover:text-[var(--color-beige)]">⭐ Testimonios</button>
          <button onClick={() => setSeccion("mensajes")} className="text-left hover:text-[var(--color-beige)]">💬 Mensajes</button>
        </nav>
      </aside>

      {/* CONTENIDO */}
      <main className="flex-1 p-6">
        {seccion === "resumen" && <Resumen usuarios={usuarios} pedidos={pedidos} productos={productos} mensajes={mensajes} />}
        {seccion === "usuarios" && <Usuarios usuarios={usuarios} toggleBlockUser={toggleBlockUser} />}
        {seccion === "productos" && <Productos productos={productos} addProducto={addProducto} deleteProducto={deleteProducto} />}
        {seccion === "pedidos" && <Pedidos pedidos={pedidos} updatePedidoStatus={updatePedidoStatus} />}
        {seccion === "testimonios" && <Testimonios testimonios={testimonios} addTestimonio={addTestimonio} deleteTestimonio={deleteTestimonio} />}
        {seccion === "mensajes" && <Mensajes mensajes={mensajes} markResponded={markResponded} />}
      </main>
    </div>
  );
}

/* ===== SECCIONES ===== */

function Resumen({ usuarios, pedidos, productos, mensajes }) {
  const dias = ["Lun", "Mar", "Mié", "Jue", "Vie"];
  const valores = [4, 7, 3, 6, 5]; // ejemplo dinámico
  return (
    <>
      <h1 className="text-3xl font-bold text-[var(--color-brown-dark)] mb-6">Panel de control 📊</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">

        <Card titulo="Usuarios" valor={usuarios.length} icono="👥" />
        <Card titulo="Pedidos hoy" valor={pedidos.length} icono="📦" />
        <Card titulo="Productos" valor={productos.length} icono="🛍️" />
        <Card titulo="Mensajes nuevos" valor={mensajes.length} icono="💬" />
      </div>


      <div className="bg-[var(--color-background-alt)] p-6 rounded-2xl">
        <p className="font-bold mb-2">📈 Pedidos del día</p>

        <div className="flex items-end gap-3 h-32">
          {valores.map((v, i) => (
            <div key={i} className="flex flex-col items-center">
              <div style={{ height: `${v * 15}px` }} className="w-8 bg-[var(--color-brown-pink)] rounded-md mb-1" />
              <span className="text-sm">{dias[i]}</span>
              <span className="text-xs text-gray-600">{v}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

function Usuarios({ usuarios, toggleBlockUser }) {
  return (
    <>
      <h2 className="text-2xl font-bold mb-4 text-[var(--color-brown-dark)]">Usuarios 👥</h2>
      <div className="bg-[var(--color-background-alt)] p-6 rounded-2xl">
        {usuarios.map(u => (
          <div key={u.id} className={`flex justify-between items-center mb-2 ${u.blocked ? "line-through text-gray-400" : ""}`}>
            <p>{u.email} — <strong>{u.role}</strong></p>
            <button
              onClick={() => toggleBlockUser(u.id)}
              className="bg-[var(--color-red)] text-white px-3 py-1 rounded-lg"
            >
              {u.blocked ? "Desbloquear" : "Bloquear"}
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

function Productos({ productos, addProducto, deleteProducto }) {
  const [nuevo, setNuevo] = useState({ nombre: "", descripcion: "", foto: "", precio: 0 });

  const handleAgregar = () => {
    if (!nuevo.nombre) return;
    addProducto({ ...nuevo, id: Date.now() });
    setNuevo({ nombre: "", descripcion: "", foto: "", precio: 0 });
  };

  return (
    <>
      <h2 className="text-2xl font-bold mb-4 text-[var(--color-brown-dark)]">Productos 🛍️</h2>
      <div className="mb-4 flex flex-col gap-2">
        <input type="text" placeholder="Nombre" value={nuevo.nombre} onChange={(e) => setNuevo({ ...nuevo, nombre: e.target.value })} className="p-2 rounded-lg border" />
        <input type="text" placeholder="Descripción" value={nuevo.descripcion} onChange={(e) => setNuevo({ ...nuevo, descripcion: e.target.value })} className="p-2 rounded-lg border" />
        <input type="text" placeholder="URL Imagen" value={nuevo.foto} onChange={(e) => setNuevo({ ...nuevo, foto: e.target.value })} className="p-2 rounded-lg border" />
        <input type="number" placeholder="Precio" value={nuevo.precio} onChange={(e) => setNuevo({ ...nuevo, precio: parseFloat(e.target.value) })} className="p-2 rounded-lg border" />
        <button onClick={handleAgregar} className="bg-[var(--color-brown-pink)] text-white px-4 py-2 rounded-xl">Agregar producto</button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {productos.map(p => (
          <div key={p.id} className="bg-[var(--color-background-alt)] p-4 rounded-2xl shadow-md">
            <img src={p.foto || "/no-cover.png"} alt={p.nombre} className="w-full h-40 object-cover rounded-lg mb-2" />
            <h3 className="font-bold">{p.nombre}</h3>
            <p className="text-sm mb-2">{p.descripcion}</p>
            <p className="font-semibold">${p.precio}</p>
            <button onClick={() => deleteProducto(p.id)} className="bg-[var(--color-red)] text-white px-3 py-1 rounded-lg">Borrar</button>
          </div>
        ))}
      </div>

    </>
  );
}

function Pedidos({ pedidos, updatePedidoStatus }) {
  const estados = ["En proceso", "Entregado", "No enviado", "Fallas"];
  return (
    <>
      <h2 className="text-2xl font-bold mb-4 text-[var(--color-brown-dark)]">Pedidos 📦</h2>
      <div className="bg-[var(--color-background-alt)] p-6 rounded-2xl">
        {pedidos.map(p => (
          <div key={p.id} className="flex justify-between mb-3 items-center">
            <p>Pedido #{p.id} — <strong>{p.estado}</strong> (Entrega: {p.fecha})</p>
            <select value={p.estado} onChange={(e) => updatePedidoStatus(p.id, e.target.value)} className="border rounded-lg p-1">
              {estados.map(e => <option key={e} value={e}>{e}</option>)}
            </select>
          </div>
        ))}
      </div>
    </>
  );
}

function Testimonios({ testimonios, addTestimonio, deleteTestimonio }) {
  const [nuevo, setNuevo] = useState({ mensaje: "", estrellas: 5 });

  const handleAgregar = () => {
    if (!nuevo.mensaje) return;
    addTestimonio({ ...nuevo, id: Date.now() });
    setNuevo({ mensaje: "", estrellas: 5 });
  };

  return (
    <>
      <h2 className="text-2xl font-bold mb-4 text-[var(--color-brown-dark)]">Testimonios ⭐</h2>
      <div className="mb-4 flex flex-col gap-2">
        <textarea placeholder="Nuevo testimonio" value={nuevo.mensaje} onChange={(e) => setNuevo({ ...nuevo, mensaje: e.target.value })} className="p-2 rounded-lg border" />
        <input type="number" min="1" max="5" value={nuevo.estrellas} onChange={(e) => setNuevo({ ...nuevo, estrellas: parseInt(e.target.value) })} className="p-2 rounded-lg border" />
        <button onClick={handleAgregar} className="bg-[var(--color-brown-pink)] text-white px-4 py-2 rounded-xl">Agregar testimonio</button>
      </div>
      {testimonios.map(t => (
        <div key={t.id} className="bg-[var(--color-background-alt)] p-6 rounded-2xl mb-4">
          <p className="italic">{t.mensaje}</p>
          <div className="text-yellow-400">{'★'.repeat(t.estrellas)}</div>
          <button onClick={() => deleteTestimonio(t.id)} className="mt-3 bg-[var(--color-red)] text-white px-3 py-1 rounded-lg">Eliminar</button>
        </div>
      ))}
    </>
  );
}

function Mensajes({ mensajes, markResponded }) {
  return (
    <>
      <h2 className="text-2xl font-bold mb-4 text-[var(--color-brown-dark)]">Mensajes 💬</h2>
      {mensajes.map(m => (
        <div key={m.id} className={`bg-[var(--color-background-alt)] p-6 rounded-2xl mb-3 ${m.responded ? "opacity-60 line-through" : ""}`}>
          <p><strong>{m.usuario || "Usuario"}:</strong> {m.mensaje}</p>
          <button onClick={() => markResponded(m.id)} className="mt-2 bg-[var(--color-brown-medium)] text-white px-3 py-1 rounded-lg">
            {m.responded ? "Desmarcar" : "Marcar como respondido"}
          </button>
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
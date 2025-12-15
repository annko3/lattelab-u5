import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  // USUARIOS
  const [usuarios, setUsuarios] = useState([
    { id: 1, nombre: "Usuario Demo", email: "user@gmail.com", role: "User", bloqueado: false },
    { id: 2, nombre: "Admin", email: "admin@lattelab.org", role: "Admin", bloqueado: false },
  ]);

  const [usuarioActual, setUsuarioActual] = useState(usuarios[0]); // Usuario logueado demo

  const toggleBloqueo = (id) => {
    setUsuarios(
      usuarios.map((u) =>
        u.id === id ? { ...u, bloqueado: !u.bloqueado } : u
      )
    );
  };

  const updateUsuario = (usuarioActualizado) => {
    setUsuarios(
      usuarios.map((u) =>
        u.id === usuarioActualizado.id ? { ...u, ...usuarioActualizado } : u
      )
    );
    setUsuarioActual(usuarioActualizado);
  };

  // PRODUCTOS
  const [productos, setProductos] = useState([
    {
      id: 1,
      nombre: "Café Latte",
      descripcion: "Delicioso café con leche",
      precio: 4.25,
      imagen: "/images/cafe-latte.jpg",
    },
    {
      id: 2,
      nombre: "Café Premium",
      descripcion: "Café especial de alta calidad",
      precio: 5.0,
      imagen: "/images/cafe-premium.jpg",
    },
  ]);

  const agregarProducto = (producto) => {
    setProductos([...productos, { id: Date.now(), ...producto }]);
  };

  const editarProducto = (id, updatedProducto) => {
    setProductos(
      productos.map((p) => (p.id === id ? { ...p, ...updatedProducto } : p))
    );
  };

  const eliminarProducto = (id) => {
    setProductos(productos.filter((p) => p.id !== id));
  };

  // PEDIDOS
  const [pedidos, setPedidos] = useState([
    { id: 1023, usuarioId: 1, estado: "En proceso", fecha: "18/12" },
    { id: 1024, usuarioId: 1, estado: "Entregado", fecha: "14/12" },
  ]);

  const cambiarEstadoPedido = (id, estado) => {
    setPedidos(pedidos.map((p) => (p.id === id ? { ...p, estado } : p)));
  };

  // TESTIMONIOS
  const [testimonios, setTestimonios] = useState([
    { id: 1, usuarioId: 1, mensaje: "Excelente atención", estrellas: 5, nombre: "Ana", imagen: "/images/user1.jpg" }
  ]);

  const agregarTestimonio = (t) => {
    setTestimonios([...testimonios, { id: Date.now(), ...t }]);
  };

  const editarTestimonio = (id, updated) => {
    setTestimonios(
      testimonios.map((t) => (t.id === id ? { ...t, ...updated } : t))
    );
  };

  const eliminarTestimonio = (id) => {
    setTestimonios(testimonios.filter((t) => t.id !== id));
  };

  // MENSAJES
  const [mensajes, setMensajes] = useState([
    { id: 1, usuarioId: 1, mensaje: "¿Cuándo llega mi pedido?", respondido: false }
  ]);

  const marcarRespondido = (id) => {
    setMensajes(
      mensajes.map((m) =>
        m.id === id ? { ...m, respondido: !m.respondido } : m
      )
    );
  };

  const responderMensaje = (id, respuesta) => {
    setMensajes(
      mensajes.map((m) =>
        m.id === id ? { ...m, respondido: true, respuesta } : m
      )
    );
  };

  return (
    <AppContext.Provider
      value={{
        usuarios,
        toggleBloqueo,
        usuarioActual,
        updateUsuario,
        productos,
        agregarProducto,
        editarProducto,
        eliminarProducto,
        pedidos,
        cambiarEstadoPedido,
        testimonios,
        agregarTestimonio,
        editarTestimonio,
        eliminarTestimonio,
        mensajes,
        marcarRespondido,
        responderMensaje
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
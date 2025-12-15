import React from "react";

export default function Dashboard() {
  
  return (
    <div className="min-h-screen bg-[#f9f4ef] flex flex-col">
      
      {/* HEADER */}
      <header className="bg-[#8b5e3c] text-white px-6 py-4 shadow-md">
        <h1 className="text-2xl font-bold">
          Perfil / Dashboard 👤
        </h1>
      </header>

      {/* CONTENIDO PRINCIPAL */}
      <main className="flex-1 flex items-center justify-center px-6">
        <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full text-center">
          
          <h2 className="text-xl font-semibold text-[#5e3b2e] mb-3">
            Bienvenida ✨
          </h2>

          <p className="text-gray-500 mb-6">
            Este es tu panel privado.  
            Aquí podrás administrar tu perfil y futuras secciones.
          </p>

          {/* BOTONES FUTUROS */}
          <div className="flex flex-col gap-3">
            <button
              disabled
              className="bg-gray-200 text-gray-500 py-2 rounded-lg cursor-not-allowed"
            >
              📊 Testimonios (próximamente)
            </button>

            <button
              disabled
              className="bg-gray-200 text-gray-500 py-2 rounded-lg cursor-not-allowed"
            >
              ⚙️ Configuración (próximamente)
            </button>
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="text-center text-gray-400 text-sm py-4">
        © 2025 · Área privada
      </footer>
    </div>
  );
}
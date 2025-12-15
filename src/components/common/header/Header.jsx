import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { auth } from "../../../firebase/config";
import { onAuthStateChanged, signOut } from "firebase/auth";

function Header() {
  const [user, setUser] = useState(null);
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsub();
  }, []);

  function handleLogout() {
    signOut(auth);
  }

  //Menu de Escritorio
  const DesktopMenu = () => (
    <ul className="flex py-[10px] px-[20px] justify-between flex-wrap text-white">
      <div className="justify-start flex flex-wrap gap-[20px] text-white">
        <li className="hover:bg-beige hover:text-brown-pink p-2 rounded-2xl font-bold">
          <Link to="/">Inicio</Link>
        </li>
        <li className="hover:bg-beige hover:text-brown-pink hover:font-bold p-2 rounded-2xl font-bold">
          <Link to="/aboutUs">Quienes Somos</Link>
        </li>
        <li className="hover:bg-beige hover:text-brown-pink hover:font-bold p-2 rounded-2xl font-bold">
          <Link to="/books">Libros</Link>
        </li>
        <li className="hover:bg-beige hover:text-brown-pink hover:font-bold p-2 rounded-2xl font-bold">
          <Link to="/talleres">Talleres</Link>
        </li>
        <li className="hover:bg-beige hover:text-brown-pink hover:font-bold p-2 rounded-2xl font-bold">
          <Link to="/menu">Menú</Link>
        </li>
        <li className="hover:bg-beige hover:text-brown-pink hover:font-bold p-2 rounded-2xl font-bold">
          <Link to="/contact">Contacto</Link>
        </li>
        <li className="hover:bg-beige hover:text-brown-pink hover:font-bold p-2 rounded-2xl font-bold"> 
          <Link to="/marketingCampaign">Campaña</Link>
        </li>
      </div>

      <div className="flex gap-4">
        <li className="hover:bg-beige hover:text-brown-pink p-2 rounded-2xl font-bold">
          <Link to={user ? "/dashboard" : "/login"}>
            Perfil
          </Link>
        </li>

        {user && (
          <li
            onClick={handleLogout}
            className="hover:bg-beige hover:text-brown-pink p-2 rounded-2xl font-bold cursor-pointer"
          >
            Cerrar sesión
          </li>
        )}
      </div>
    </ul>
  );

  //Menu de Movil
  const MobileMenu = () => (
    <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
      <div
        className="absolute top-0 right-0 px-8 py-8"
        onClick={() => setIsNavOpen(false)}
      >

        <svg
          className="h-8 w-8 text-gray-600"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </div>

      <ul className="flex flex-col gap-6 p-6 text-white text-center">
        <li className="hover:font-bold text-xl">
          <Link to="/">Inicio</Link>
        </li>
        <li className="hover:font-bold text-xl">
          <Link to="/aboutUs">Quienes Somos</Link>
        </li>
        <li className="hover:font-bold text-xl">
          <Link to="/books">Libros</Link>
        </li>
        <li className="hover:font-bold text-xl">
          <Link to="/talleres">Talleres</Link>
        </li>
        <li className="hover:font-bold text-xl">
          <Link to="/menu">Menú</Link>
        </li>
        <li className="hover:font-bold text-xl">
          <Link to="/contact">Contacto</Link>
        </li>

        <li className="hover:font-bold text-xl">

          <Link to="/marketingCampaign">Campaña</Link>
        </li>

        <li className="hover:font-bold text-xl">
          <Link to={user ? "/dashboard" : "/login"}>
            Perfil
          </Link>
        </li>

        {user && (
          <li
            onClick={handleLogout}
            className="cursor-pointer hover:font-bold text-xl"
          >
            Cerrar sesión
          </li>
        )}
      </ul>
    </div>
  );

  return (
    <header className="bg-beige px-[5%] pt-[40px] pb-[10px]">
      <div>
        <div className="flex items-center justify-between pb-[15px]">
          <div className="flex flex-wrap items-center pb-[15px]">
            <svg
              fill="#5c4033"
              width="34px"
              height="34px"
              viewBox="0 0 49.284 49.284"
            >
              <path d="M36.591,39.606c8.158-0.328,11.784-4.041,11.784-8.585c0-3.947-2.739-7.268-8.806-8.288..." />
            </svg>
            <p className="text-4xl ml-[8px]">
              <b>Lattelab</b>
            </p>
          </div>

          <button className="md:hidden" onClick={() => setIsNavOpen(true)}>
            <svg
              className="w-8 h-8 text-brown-pink"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              viewBox="0 0 24 24"
            >
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>

        <div className="md:bg-[#a9745c] md:text-center">
          <nav>

            <div className="hidden md:block">
              <DesktopMenu />
            </div>
            

            <MobileMenu />

          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;

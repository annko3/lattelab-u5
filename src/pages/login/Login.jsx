import { useState, useContext, useEffect } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../firebase/config";
import { UserContext } from "../../contexts/UserContext";
import { Link, useNavigate } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";

function Login() {
  const { user, setUser } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      // Redirige según rol
      if (user.role === "admin") navigate("/admin");
      else navigate("/dashboard");
    }
  }, [user, navigate]);

  async function handleLogin(e) {
    e.preventDefault();
    
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);


      const docRef = doc(db, "users", res.user.uid);
      const docSnap = await getDoc(docRef);

      if (!docSnap.exists()) throw new Error("Usuario no encontrado en Firestore");

      const data = docSnap.data();

      setUser({
        email: res.user.email,
        username: data.username,
        role: data.role
      });

      if (data.role === "admin") navigate("/admin");
      else navigate("/dashboard");

    } catch (err) {
      console.error(err);
      setError("Correo o contraseña incorrectos.");
    }
  }

  return (
    <section className="flex flex-col items-center justify-center min-h-[80vh] gap-6">
      <div className="bg-[var(--color-brown-pink)] p-6 rounded-2xl text-white w-[350px]">
        <h2 className="text-3xl mb-4 font-bold text-center">Iniciar Sesión</h2>

        <div className="bg-white text-[var(--color-brown-dark)] p-4 rounded-xl shadow-md mb-6">
          <h3 className="text-lg font-semibold mb-3 border-b pb-2">Credenciales de Demostración</h3>
          <p className="font-bold">Administradora</p>
          <p className="text-sm">📧 admin@lattelab.org</p>
          <p className="text-sm">🔑 admin123</p>
          <p className="font-bold mt-2">Usuario</p>
          <p className="text-sm">📧 user@gmail.com</p>
          <p className="text-sm">🔑 user123</p>
        </div>

        <form className="flex flex-col gap-3" onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Correo"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-3 py-2 rounded text-white border border-white"
            required
          />

          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="px-3 py-2 rounded text-white border border-white"
            required
          />
          <button className="bg-[var(--color-brown-dark)] py-2 px-4 rounded cursor-pointer">Entrar</button>
        </form>

        {error && <p className="text-red-500 mt-2">{error}</p>}

        <p className="mt-4 text-center">¿No tienes cuenta?</p>
        <Link to="/register" className="text-blue-500 block text-center mt-1 hover:underline">
          Crear una Cuenta
        </Link>
      </div>
    </section>
  );
}

export default Login;

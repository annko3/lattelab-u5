import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/home/Home";
import Menu from "./pages/menu/Menu";
import ProductDetail from './pages/menu/ProductDetail';
import Contact from './pages/contact/Contact.jsx';
import AboutUs from "./pages/aboutUs/AboutUs.jsx";
import Login from './pages/login/Login.jsx';
import Register from './pages/login/Register.jsx';
import DashboardUser from './pages/dashboard/DashboardUser.jsx';
import DashboardAdmin from './pages/dashboard/DashboardAdmin.jsx';
import Libros from './pages/books/Books.jsx';
import Talleres from './pages/talleres/Talleres.jsx';
import MarketingCampaign from './pages/marketingCampaign/MarketingCampaign.jsx';
import Header from './components/common/header/Header.jsx';
import Footer from './components/common/footer/Footer.jsx';
import PrivateRoute from "./components/PrivateRoute.jsx";

/* ===== IMPORTAR EL CONTEXT ===== */
import { AppProvider } from './contexts/AppContext.jsx';

function App() {
  return (
    /* ===== ENVOLVER TODO CON EL PROVIDER ===== */
    <AppProvider>
      <Router>
        <div className="App">
          <Header />

          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/aboutUs" element={<AboutUs />} />
              
              <Route path="/menu" element={<Menu />} />
              <Route path="/contact" element={<Contact />} />
              <Route path='/product/:id' element={<ProductDetail />} />

              {/* Restaurar rutas que faltaban */}
              <Route path="/books" element={<Libros />} />
              <Route path="/talleres" element={<Talleres />} />
              <Route path="/marketingCampaign" element={<MarketingCampaign />} />

              {/* LOGIN & REGISTER */}
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />

              {/* DASHBOARD */}
              <Route
                path="/dashboard"
                element={
                  <PrivateRoute>
                    <DashboardUser />
                  </PrivateRoute>
                }
              />
              <Route
                path="/admin"
                element={
                  <PrivateRoute>
                    <DashboardAdmin />
                  </PrivateRoute>
                }
              />
            </Routes>
          </main>

          <Footer />
        </div>
      </Router>
    </AppProvider>
  )
}

export default App;
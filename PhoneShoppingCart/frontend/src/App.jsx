import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from "./components/Homepage/Homepage";
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import Navbar from './components/Navbar/Navbar';
import ProductPage from './components/Product/ProductPage';
import AdminPanel from './components/AdminPanel/AdminPanel';
import Cart from './components/Cart/Cart';

function App() {
  const ProtectedAdminRoute = ({ children }) => {
    const [isAdmin, setIsAdmin] = useState(null);

    useEffect(() => {
      const checkAdmin = async () => {
          const token = localStorage.getItem('token');
          if (!token) {
              setIsAdmin(false);
              return;
          }
          try {
              const response = await fetch('/api/auth/me', {
                  headers: { Authorization: `Bearer ${token}` },
              });
              const data = await response.json();
              setIsAdmin(data.isAdmin);
          } catch (err) {
              setIsAdmin(false);
          }
      };
      checkAdmin();
    }, []);

    if (isAdmin === null) return <div>Loading...</div>;
    return isAdmin ? children : <Navigate to="/login" />;
  };

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route
          path="/admin"
          element={
              <ProtectedAdminRoute>
                <AdminPanel />
              </ProtectedAdminRoute>
          }
        />
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
      <Footer />


    </>
  )
}

export default App;



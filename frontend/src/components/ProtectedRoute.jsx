import { Navigate } from 'react-router-dom';
import { useAuth } from '../components/Content/AuthContext';

const ProtectedRoute = ({ children, requiredRole }) => {
  const { isAuthenticated, userRole } = useAuth();

  // Periksa apakah pengguna sudah terautentikasi
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  // Periksa apakah pengguna memiliki peran yang dibutuhkan
  if (requiredRole) {
    // Jika userRole adalah array, gunakan Array.includes()
    if (Array.isArray(userRole)) {
      if (!userRole.includes(requiredRole)) {
        return <Navigate to="/" />; // Jika role tidak cocok, arahkan ke halaman utama
      }
    } else if (userRole !== requiredRole) {
      return <Navigate to="/" />;
    }
  }

  return children;
};

export default ProtectedRoute;

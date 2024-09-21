import { useState } from 'react';
import { useAuth } from '../Content/AuthContext';
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth, db } from '../../firebase'; // Pastikan nama ekspor sesuai dengan yang di firebase.js
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore'; // Impor dari 'firebase/firestore'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();
  const provider = new GoogleAuthProvider();

  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      login(); // Menandai status login di aplikasi

      console.log("User logged in:", user);

      await checkUserRole(user); // Panggil fungsi untuk memeriksa peran pengguna
    } catch (error) {
      console.error("Kesalahan saat login:", error.message);
    }
  };

  // Fungsi untuk memeriksa peran pengguna dari Firestore
  const checkUserRole = async (user) => {
    try {
      const userDocRef = doc(db, 'users', user.uid);
      const userDoc = await getDoc(userDocRef);

      if (userDoc.exists()) {
        const userData = userDoc.data();
        const role = userData.role; // Ambil data peran dari Firestore

        // Periksa jika peran sama dengan '1' untuk admin
        if (role === 1) {
          navigate('/admin-dashboard'); // Arahkan admin ke dashboard admin
        } else {
          navigate('/'); // Arahkan pengguna biasa ke dashboard utama
        }
      } else {
        console.error("Dokumen pengguna tidak ditemukan!");
        navigate('/'); // Arahkan ke dashboard umum jika dokumen tidak ditemukan
      }
    } catch (error) {
      console.error("Kesalahan saat mengambil peran pengguna:", error.message);
      navigate('/'); // Arahkan ke dashboard umum jika terjadi kesalahan
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      const userName = user.displayName || 'User';
      alert(`Selamat datang, ${userName}!`);
      login();
      await checkUserRole(user); // Periksa peran pengguna dan arahkan
    } catch (error) {
      console.error("Kesalahan saat login dengan Google:", error.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200">
      <div className="bg-white p-12 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-3xl font-bold mb-8 text-center text-blue-600">Login</h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="block w-full p-4 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="block w-full p-4 mb-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleLogin}
          className="bg-blue-500 text-white py-3 px-6 rounded-lg w-full mb-4 hover:bg-blue-600 transition-colors"
        >
          Login
        </button>

        <button
          onClick={handleGoogleLogin}
          className="bg-red-500 text-white py-3 px-6 rounded-lg w-full mb-6 flex items-center justify-center gap-3 hover:bg-red-600 transition-colors"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 4.35c0-.3-.03-.6-.08-.89H6.16v1.11H9.7c-.45 2.6-2.54 4.57-5.27 4.57-3.07 0-5.56-2.66-5.56-5.93s2.49-5.93 5.56-5.93c3.08 0 5.57 2.65 5.57 5.92v.29l4.02-.02c2.35-2.18 3.85-5.41 3.85-8.99 0-.87-.09-1.73-.24-2.56H12v4.35z"></path>
          </svg>
          Login with Google
        </button>

        <p className="text-center text-gray-700">
          Belum punya akun?{' '}
          <NavLink to="/register" className="text-blue-500 hover:underline">
            Daftar
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Login;

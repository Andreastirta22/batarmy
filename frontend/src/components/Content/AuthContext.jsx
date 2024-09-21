import { createContext, useContext, useState, useEffect } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth'; // Tambahkan signOut
import { auth, db } from '../../firebase';
import { doc, getDoc } from 'firebase/firestore';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // Tambahkan loading state

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setLoading(true); // Mulai loading ketika status autentikasi berubah

      if (user) {
        setIsAuthenticated(true);
        setUser(user);

        try {
          // Mengambil data pengguna dari Firestore
          const userDocRef = doc(db, 'users', user.uid);
          const userDoc = await getDoc(userDocRef);
          
          if (userDoc.exists()) {
            const userData = userDoc.data();
            const role = userData.role;

            if (Array.isArray(role)) {
              console.log('User role from Firestore:', role); // Log role dari Firestore
              setUserRole(role); // Menyimpan role array dari Firestore
            } else {
              console.log('Role data is not an array');
            }
          } else {
            console.log('No such document!');
          }
        } catch (error) {
          console.error('Error getting user data:', error);
        }
      } else {
        setIsAuthenticated(false);
        setUser(null);
        setUserRole(null);
      }
      setLoading(false); // Selesai loading
    });

    return () => unsubscribe();
  }, []);

  const login = () => setIsAuthenticated(true);

  const logout = async () => {
    try {
      await signOut(auth); // Logout dari Firebase Auth
      setIsAuthenticated(false);
      setUser(null);
      setUserRole(null);
    } catch (error) {
      console.error('Error during sign out:', error);
    }
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, userRole, user, loading, login, logout }}>
      {!loading && children} {/* Render anak-anak hanya jika tidak dalam loading */}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

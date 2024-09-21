import { AuthProvider } from './path/to/AuthContext';
import { CartProvider } from './path/to/CartContext';

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        {/* Komponen lainnya */}
      </CartProvider>
    </AuthProvider>
  );
}

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../../firebase';
import { doc, setDoc } from 'firebase/firestore';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // State for password visibility
  const navigate = useNavigate();
  const defaultRole = '2';

  const handleRegister = async () => {
    if (!name || !email || !password) {
      alert("Please fill in all fields.");
      return;
    }

    try {
      console.log("Attempting to register:", { name, email, password });
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log("User created:", user);

      const userRef = doc(db, 'users', user.uid);
      await setDoc(userRef, {
        name: name,
        email: email,
        role: defaultRole,
      });

      alert("User registered successfully!");
      navigate('/login');
    } catch (error) {
      console.error("Error registering user:", error);
      alert("Failed to register. Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-green-200 via-yellow-200 to-red-200">
      <div className="bg-white p-12 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-3xl font-bold mb-8 text-center text-green-600">Register</h2>

        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="block w-full p-4 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="block w-full p-4 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        />

        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="block w-full p-4 mb-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-0 right-0 flex items-center pr-3"
          >
            {showPassword ? (
              <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12.14c-.57.84-1.42 1.36-2.5 1.36s-1.93-.52-2.5-1.36m-5-3.7C6.1 9.98 9.48 14.04 12 14.04c1.08 0 1.93-.52 2.5-1.36m-5-1.78c-.57-.84-1.42-1.36-2.5-1.36S7.07 8.66 6.5 9.5M3 12.24a9.993 9.993 0 0 1 0-3.48m17.66 3.5a9.982 9.982 0 0 1-2.63-3.51m1.3-4.37c.39.68.67 1.41.87 2.21m1.42 4.67a9.97 9.97 0 0 1-5.48 5.48M3 6.75a9.983 9.983 0 0 1 4.02-2.95M15 4.54c.6.8 1.1 1.68 1.55 2.64m-4.59 2.32a2.85 2.85 0 0 1-1.68.55m0 0a2.85 2.85 0 0 1-1.68-.55M15 4.54c.6.8 1.1 1.68 1.55 2.64"></path>
              </svg>
            ) : (
              <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12a9.978 9.978 0 0 1 4.15-7.85M15 4.54a9.983 9.983 0 0 1 4.02 2.95M21 12a9.978 9.978 0 0 1-4.15 7.85M6.5 9.5c-.39-.68-.67-1.41-.87-2.21M12 12.14c.57-.84 1.42-1.36 2.5-1.36s1.93.52 2.5 1.36m-5-1.78a2.85 2.85 0 0 0 1.68-.55M3 6.75A9.972 9.972 0 0 1 15 4.54c.6.8 1.1 1.68 1.55 2.64m1.42 4.67a9.97 9.97 0 0 1-5.48 5.48"></path>
              </svg>
            )}
          </button>
        </div>

        <button
          onClick={handleRegister}
          className="bg-green-500 text-white py-3 px-6 rounded-lg w-full hover:bg-green-600 transition-colors"
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default Register;

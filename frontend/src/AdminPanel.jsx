import axios from 'axios';

const Login = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const username = e.target.u.value;
    const password = e.target.p.value;

    try {
      const response = await axios.post('http://localhost:5000/login', { username, password });
      alert(response.data.message);
    } catch (error) {
      alert('Login failed');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-900 to-gray-800">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-sm w-full">
        <h1 className="text-white text-3xl mb-6 text-center font-semibold">Restricted Area</h1>
        <form method="post" onSubmit={handleSubmit}>
          <input
            type="text"
            name="u"
            placeholder="Username"
            required
            className="w-full mb-4 px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            name="p"
            placeholder="Password"
            required
            className="w-full mb-6 px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

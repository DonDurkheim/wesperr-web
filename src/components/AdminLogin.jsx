import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (credentials.username === 'batman' && credentials.password === 'iambatman13$') {
      localStorage.setItem('adminAuthenticated', 'true');
      navigate('/admin');
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="min-h-screen bg-primary flex items-center justify-center p-6 h-full">
      <div className="bg-black-gradient rounded-xl p-8 w-full max-w-md">
        <h2 className="text-white font-poppins text-3xl font-bold mb-6 text-center">Admin Login</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="text-dimWhite font-poppins block mb-2">Username</label>
            <input
              type="text"
              value={credentials.username}
              onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
              className="w-full bg-primary border-2 border-secondary rounded-lg py-3 px-4 text-white focus:outline-none focus:border-blue-500"
              placeholder="Enter username"
            />
          </div>
          
          <div>
            <label className="text-dimWhite font-poppins block mb-2">Password</label>
            <input
              type="password"
              value={credentials.password}
              onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
              className="w-full bg-primary border-2 border-secondary rounded-lg py-3 px-4 text-white focus:outline-none focus:border-blue-500"
              placeholder="Enter password"
            />
          </div>

          {error && (
            <p className="text-red-500 font-poppins text-sm text-center">{error}</p>
          )}

          <button
            type="submit"
            className="w-full bg-blue-gradient text-primary font-poppins font-medium py-3 px-6 rounded-lg hover:opacity-90 transition-opacity"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
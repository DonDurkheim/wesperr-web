import React, { useState, useEffect } from 'react';
import { waitlistAPI } from '../services/api';
import { useNavigate } from 'react-router-dom';

const Admin = () => {
  const [waitlist, setWaitlist] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('adminAuthenticated');
    navigate('/admin/login');
  };

  useEffect(() => {
    fetchWaitlist();
  }, []);

  const fetchWaitlist = async () => {
    try {
      const data = await waitlistAPI.getAll();
      setWaitlist(data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch waitlist entries');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await waitlistAPI.delete(id);
      fetchWaitlist(); // Refresh the list after deletion
    } catch (err) {
      setError('Failed to delete waitlist entry');
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-primary">
        <div className="text-white font-poppins">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-primary">
        <div className="text-red-500 font-poppins">{error}</div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen"> {/* Added relative and min-h-screen to ensure parent takes full height */}
      <div className="absolute inset-0 bg-primary"></div> {/* Background layer */}
      <div className="relative z-10 p-6"> {/* Content layer, added z-10 and p-6 */}
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-white font-poppins text-4xl font-bold">Waitlist Admin</h1>
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white font-poppins px-6 py-2 rounded-lg hover:bg-red-600 transition-colors"
            >
              Logout
            </button>
          </div>
          
          <div className="bg-black-gradient rounded-xl p-6">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left">
                    <th className="text-white font-poppins font-semibold p-4">Count</th>
                    <th className="text-white font-poppins font-semibold p-4">Name</th>
                    <th className="text-white font-poppins font-semibold p-4">Email</th>
                    <th className="text-white font-poppins font-semibold p-4">Joined Date</th>
                    <th className="text-white font-poppins font-semibold p-4">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {waitlist.map((entry, index) => (
                    <tr key={entry.id} className={`border-t border-dimWhite/10 ${index % 2 === 0 ? 'bg-black-gradient-2' : ''}`}>
                      <td className="text-white font-poppins p-4">{index + 1}</td>
                      <td className="text-white font-poppins p-4">{entry.name}</td>
                      <td className="text-white font-poppins p-4">{entry.email}</td>
                      <td className="text-dimWhite font-poppins p-4">
                        {new Date(entry.created_at).toLocaleString()}
                      </td>
                      <td className="p-4">
                        <button
                          onClick={() => handleDelete(entry.id)}
                          className="bg-red-500 text-white font-poppins px-4 py-2 rounded-lg hover:bg-red-600 transition-colors text-sm"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            {waitlist.length === 0 && (
              <div className="text-center py-8">
                <p className="text-dimWhite font-poppins">No entries in the waitlist yet.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;

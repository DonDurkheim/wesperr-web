import axios from 'axios';
const { VITE_API_BASE_URL, PROD } = import.meta.env;
const baseURL = VITE_API_BASE_URL;

const api = axios.create({ baseURL });

export const waitlistAPI = {
  join: async (name, email) => {
    try {
      const response = await api.post('/waitlist', { name, email });
      return response.data;
    } catch (error) {
      if (error.response && error.response.status === 400) {
        throw new Error(error.response.data.message);
      }
      throw new Error('Failed to join waitlist');
    }
  },

  getAll: async () => {
    try {
      const response = await api.get('/waitlist');
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch waitlist');
    }
  },

  delete: async (id) => {
    try {
      const response = await api.delete(`/waitlist/${id}`);
      return response.data;
    } catch (error) {
      throw new Error('Failed to delete waitlist entry');
    }
  }
};

export default api;

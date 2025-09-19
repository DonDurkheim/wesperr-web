import axios from 'axios';
import dotenv from "dotenv";
dotenv.config();

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'https://wesperr.com:3000/waitlist',
});

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

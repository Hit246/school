import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

// Get token from localStorage
const getToken = () => localStorage.getItem('adminToken');

// Set up axios defaults
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Add token to requests if available
api.interceptors.request.use((config) => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Admin API
export const adminAPI = {
  login: async (username, password) => {
    const response = await api.post('/admin/login', { username, password });
    if (response.data.token) {
      localStorage.setItem('adminToken', response.data.token);
      localStorage.setItem('adminLoggedIn', 'true');
    }
    return response.data;
  },
  
  logout: () => {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminLoggedIn');
  }
};

// Events API
export const eventsAPI = {
  getAll: async () => {
    const response = await api.get('/events');
    return response.data;
  },
  
  create: async (eventData) => {
    const response = await api.post('/events', eventData);
    return response.data;
  },
  
  update: async (id, eventData) => {
    const response = await api.put(`/events/${id}`, eventData);
    return response.data;
  },
  
  delete: async (id) => {
    const response = await api.delete(`/events/${id}`);
    return response.data;
  }
};

// News API
export const newsAPI = {
  getAll: async () => {
    const response = await api.get('/news');
    return response.data;
  },
  
  getAllAdmin: async () => {
    const response = await api.get('/news/all');
    return response.data;
  },
  
  create: async (newsData) => {
    const response = await api.post('/news', newsData);
    return response.data;
  },
  
  update: async (id, newsData) => {
    const response = await api.put(`/news/${id}`, newsData);
    return response.data;
  },
  
  delete: async (id) => {
    const response = await api.delete(`/news/${id}`);
    return response.data;
  }
};

// Contact API
export const contactAPI = {
  submit: async (contactData) => {
    const response = await api.post('/contacts', contactData);
    return response.data;
  },
  
  getAll: async () => {
    const response = await api.get('/contacts');
    return response.data;
  },
  
  updateStatus: async (id, status) => {
    const response = await api.put(`/contacts/${id}`, { status });
    return response.data;
  },
  
  delete: async (id) => {
    const response = await api.delete(`/contacts/${id}`);
    return response.data;
  }
};

// Admission API
export const admissionAPI = {
  submit: async (admissionData) => {
    const response = await api.post('/admissions', admissionData);
    return response.data;
  },
  
  getAll: async () => {
    const response = await api.get('/admissions');
    return response.data;
  },
  
  updateStatus: async (id, status) => {
    const response = await api.put(`/admissions/${id}`, { status });
    return response.data;
  },
  
  delete: async (id) => {
    const response = await api.delete(`/admissions/${id}`);
    return response.data;
  }
};

export default api;

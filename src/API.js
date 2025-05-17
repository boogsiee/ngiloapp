import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:3001/api',
});

export const signup = (userData) => API.post('/signup', userData);
export const login = (userData) => API.post('/login', userData);
export const fetchMessages = (userId) => API.get(`/messages/${userId}`);
export const sendMessage = (userId, content) => API.post(`/messages/${userId}`, { content });

export default API;

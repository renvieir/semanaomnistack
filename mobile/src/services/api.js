import axios from 'axios';

const api = axios.create({
  baseURL: 'http://meu.local.ip:3333'
});

export default api;
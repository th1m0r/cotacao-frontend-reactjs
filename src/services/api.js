import axios from 'axios';

const api = axios.create({
    baseURL: "http://170.79.155.113:3333",
});

export default api;
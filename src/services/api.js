import axios from 'axios';

const api = axios.create({
    baseURL: "https://backend-652eb883.localhost.run",
});

export default api;
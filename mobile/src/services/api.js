import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.25.173:3333',
});

export default api; 
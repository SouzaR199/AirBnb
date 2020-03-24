import axios from  'axios';

const api = axios.create({
    baseURL: 'http://gabrielalves.tk',
});

export default api;
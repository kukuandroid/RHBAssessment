
const API_URL = 'https://api.github.com/search/repositories';
const axios = require('axios');

export const getRepositories = (pageNo, perPage, q) => axios.get(`${API_URL}?per_page=${perPage || 10};q=${q || null};page=${pageNo}`);

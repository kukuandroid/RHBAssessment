
const axios = require('axios');

export const getRepositories = (pageNo, perPage, q) => axios.get(`${process.env.API_URL}?per_page=${perPage || 10};q=${q || null};page=${pageNo}`);

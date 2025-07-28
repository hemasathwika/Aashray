// client/src/api.js
import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api',
});

// Food API
export const donateFood = (data) => API.post('/food/donate', data);
export const getDonations = () => API.get('/food/donations');

// Shelter API
export const addShelter = (data) => API.post('/shelters', data);
export const getShelters = () => API.get('/shelters');

// 🧑‍🦯 Beggars API
export const addBeggar = (data) => API.post('/beggars', data);
export const getBeggars = () => API.get('/beggars');

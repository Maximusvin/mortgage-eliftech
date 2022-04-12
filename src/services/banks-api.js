import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8080';

const API_ENDPOINTS = {
  BANKS: '/banks',
};

export async function fetchBanks() {
  try {
    const { data } = await axios.get(`${API_ENDPOINTS.BANKS}`);
    return data;
  } catch (error) {
    return [];
  }
}

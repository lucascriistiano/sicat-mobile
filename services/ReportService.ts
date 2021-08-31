import axios from 'axios';

const API_BASE_URL = 'http://192.168.0.19:8000/api';

export const generateReport: () => Promise<void> = async () => {
  return axios.post(API_BASE_URL + '/reports/clients');
};

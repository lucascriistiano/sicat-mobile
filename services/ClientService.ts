import axios from 'axios';

const API_BASE_URL = 'http://192.168.0.19:8000/api';

export interface IClient {
  name: string;
  location: number;
  active: boolean;
}

export const listClients: () => Promise<IClient[]> = async () => {
  return axios.get(API_BASE_URL + '/clients')
    .then(response => response.data);
};

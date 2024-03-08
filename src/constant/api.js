import axios from 'axios';
import { API_URL } from './URL';

export const callGetAPI = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};
export const deleteUserAPI = async (id) => {
    await axios.delete(API_URL + id);
  };
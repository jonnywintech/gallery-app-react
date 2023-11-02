import { useQuery } from 'react-query';
import axios from 'axios';

// pagination for all galleries on
export function fetchGalleries(page) {
  return axios.get(`http://0.0.0.0/api/?page=${page}`).then((response) => response.data);
}

export function useGalleries() {
  return useQuery();
}
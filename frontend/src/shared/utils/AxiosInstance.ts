import axios from 'axios';
import configureEnvironment from '../../config/env/local';

const axiosInstance = axios.create({
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, GET',
    'Access-Control-Allow-Headers': '*',
  },
  baseURL: configureEnvironment.API_UTL,
});

export default axiosInstance;

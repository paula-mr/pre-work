import axios from 'axios';
import configureEnvironment from '../../config/env/local';

const axiosInstance = axios.create({
  baseURL: configureEnvironment.API_URL,
});

export default axiosInstance;

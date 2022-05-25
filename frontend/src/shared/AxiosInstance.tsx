import axios from 'axios';
import AxiosWrapper from './utils/AxiosWrapper';
import configurarAmbiente from '../config/env';

const header = { Pragma: 'no-cache' };

const axiosInstance = axios.create({
  headers: header,
  baseURL: configurarAmbiente().REACT_APP_API_URL,
});

export default new AxiosWrapper(axiosInstance, {});

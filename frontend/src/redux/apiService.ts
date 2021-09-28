import Axios from 'axios';
import { BASE_URL } from '../assets/static/dotenv';

export const axios = Axios.create({ baseURL: BASE_URL });
axios.interceptors.request.use(function (config) {
  //   const token = Auth0Helper.getAuthToken();
  //   config.headers.Authorization = `${Auth0Helper.TOKEN_TYPE} ${token}`;
  return config;
});

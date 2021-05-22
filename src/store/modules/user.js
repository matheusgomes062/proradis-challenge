import axios from 'axios';

var axiosInstance = axios.create({
  baseURL: process.env.VUE_APP_PROJECT_MANAGER_SERVICE_URL
});

let token = localStorage.getItem('token');

const config = {
  headers: {
    Authorization: `Bearer ${token}`
  }
};

export default {
  state: {},
  getters: {},
  mutations: {},
  actions: {}
};

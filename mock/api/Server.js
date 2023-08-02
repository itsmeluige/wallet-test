import axios from 'axios';

const Server = axios.create({
  baseURL: 'http://localhost:3000/',
  timeout: 5000,
  headers: {
    accept: 'application/json',
    'Content-Type': 'application/x-www-form-urlencoded',
  },
});

export default Server;

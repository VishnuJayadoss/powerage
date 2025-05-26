// lib/axios.js
import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'https://saddlebrown-tapir-823678.hostingersite.com/api/v4/',
  headers: {
    'Content-Type': 'application/json',
     Accept: 'application/json',
    'system-key': 'FD995E9A62F97A05'
  }
})

export default axiosInstance

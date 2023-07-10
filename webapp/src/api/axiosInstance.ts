import axios from "axios";

const API_BASE_URL = `http://localhost:8080/v1`;

export const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
});

import axios from "axios";

const BASE_URL = "http://13.209.48.13:8080";

export const getApi = axios.create({
  baseURL: BASE_URL,
  headers: {},
});

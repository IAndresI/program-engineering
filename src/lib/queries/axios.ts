import { API_URL } from "@/utils/consts";
import axios from "axios";

export const $axios = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

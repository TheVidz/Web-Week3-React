import { API_URL } from "./constants";
import axios from "axios";

const axiosInstance = axios.create({
	baseURL: API_URL,
});

export default axiosInstance;

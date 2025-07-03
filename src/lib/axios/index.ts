import axios from "axios";
import config from "../../utils/config";
// import { getUserFromLocalStorage } from "../../utils/storage";

const { backendBaseUrl } = config;

const api = axios.create({
  baseURL: backendBaseUrl,
});

api.interceptors.request.use(
  (config) => {
    // const user = getUserFromLocalStorage();
    // const token = user?.token;

    // if (token:string) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }

    // if (deployment_access_token) {
    //   config.headers["x-vercel-protection-bypass"] = deployment_access_token;
    // }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default api;

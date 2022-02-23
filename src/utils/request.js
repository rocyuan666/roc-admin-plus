import axios from "axios";
import { baseURL } from "@/config";
import { ElMessage } from "element-plus";

const instance = axios.create({
  baseURL,
  timeout: 60 * 1000,
});

instance.interceptors.request.use(
  (config) => {
    return config;
  },
  (err) => {
    Promise.reject(err);
  }
);

instance.interceptors.response.use(
  (res) => {
    if (res.data.code == 0 || res.data.code == 200) {
      return res.data;
    } else {
      ElMessage({
        message: res.data.msg,
        showClose: true,
        type: "error",
      });
      return Promise.reject(res.data.msg);
    }
  },
  (err) => {
    Promise.reject(err);
  }
);

export default instance;

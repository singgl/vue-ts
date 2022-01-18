import axios, { AxiosRequestConfig } from "axios";
// import { ElMessageBox, ElMessage } from "element-plus";
// import { getToken, getStorageToken } from "./index.js";
// import MD5 from "crypto-js/md5";

const baseURL =
  process.env.VUE_APP_ENV === "mock"
    ? `${process.env.VUE_APP_BASE_API}-${process.env.VUE_APP_ENV}`
    : process.env.VUE_APP_BASE_API;

const service = axios.create({
  baseURL: baseURL, // url = base url + request url
  withCredentials: true, // send cookies when cross-domain requests
  timeout: 30000, // request timeout
  headers: {
    "Content-Type": "application/json; charset=utf-8",
    // spathe: getStorageToken("serveChange") || "",
  },
});

export default service;

import axios from "axios";

const config = {
  baseURL: 'http://localhost:9999/test',
  timeout: 5000
}




const http = axios.create(config)

// 请求拦截
http.interceptors.request.use((request, config) => {
  console.log("request=>", request, " config=>", config);
  return request
}, err => {
  console.log("request-err", err);
  return new Promise.reject(err)

})

// 响应拦截
http.interceptors.response.use(response => {
  console.log("response", response);

  // 处理响应结果并返回
  return response.data
}, err => {
  console.log("response-err", err);
  // 返回错误对象
  return new Promise.reject(err)
})

export default http

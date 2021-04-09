import Qs from "qs";
import http from "./httpConfig";

/**
 * get 请求(参数拼接在url 后面)
 * eg：test/user/userInfo?id=Fred
 * @date 2021-04-09
 * @param {url} url
 * @param {Object} param
 * @returns {Promise}
 */
function get(url, param) {
  return http.get(url, {
    params: param
  })
}


/**
 * POST 请求
 * @date 2021-04-09
 * @param {url} url
 * @param {JSONObject } param
 * @returns {Promise}
 */
function post(url, param) {
  return http.post(url, param)
}

const HttpMethdos = {
  get,
  post
}



export default HttpMethdos

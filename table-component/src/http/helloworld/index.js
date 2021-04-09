import HttpMethdos from "../httpMethods.js";

export function getUserInfo(url, param) {
  return HttpMethdos.get(url, param)
}


export function save(url, param) {
  return HttpMethdos.post(url, param)
}


export function login(url,param){
    return HttpMethdos.post(url,param)
}



// export {getUserInfo,save}
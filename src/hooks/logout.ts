/**
 * @hook useLogout
 * @description Remove token from header and session storage
 * @returns { boolean } ReactHook to logout
 */

import api from "../services/base/api";

export const useLogout = (): boolean => {
  if (sessionStorage.getItem("token")) {
    sessionStorage.removeItem("token");
    return true;
  }
  if (api.api.token) {
    api.api.token = "";
    api.api.apisauce.headers.Authorization = "";
    return true;
  }
  return false;
};

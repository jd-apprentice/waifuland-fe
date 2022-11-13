import api from "../services/base/api";

/**
 * @hook useLogout
 * @description Remove token from header and session storage
 * @returns { boolean } ReactHook to logout
 */

export const useLogout = (): boolean => {
    if (localStorage.getItem("token")) {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        return true;
    }
    if (api.api.token) {
        api.api.token = "";
        api.api.apisauce.headers.Authorization = "";
        return true;
    }
    return false;
};

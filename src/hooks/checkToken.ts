import api from "../services/base/api";

/**
 * @hook useCheckToken
 * @description Check if the token is valid and set headers
 * @returns { boolean } ReactHook to check token
 */

export const useCheckToken = (): boolean => {
    const token = localStorage.getItem("token");

    if ((api.api.token && api.api.token !== "") ?? (token && token !== "")) {
        api.api.apisauce.headers.Authorization = `Bearer ${
            api.api.token ?? token
        }`;
        return true;
    }
    return false;
};

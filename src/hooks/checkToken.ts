import api from "../services/base/api";

/**
 * @hook useCheckToken
 * @description Check if the token is valid and set headers
 * @returns { void } ReactHook to check token
 */

export const useCheckToken = (): void => {
  const token = sessionStorage.getItem("token");

  if ((api.api.token && api.api.token !== "") ?? (token && token !== "")) {
    api.api.apisauce.headers.Authorization = `Bearer ${api.api.token ?? token}`;
  }

  console.info("Token updated");
};

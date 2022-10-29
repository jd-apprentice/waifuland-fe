import { ApisauceInstance, create } from "apisauce";
import { ApiConfig, DEFAULT_API_CONFIG } from "./apiConfig";
import { WaifuApi } from "../waifu";
import { UserApi } from "../user";

/**
 * Manages all requests to the API.
 */
export class Api {
  /**
   * The underlying apisauce instance which performs the requests.
   */
  apisauce!: ApisauceInstance;

  /**
   * @param token The token to use for authentication.
   */

  token!: string;

  /**
   * Configurable options.
   */
  config: ApiConfig;

  /**
   * Creates the api.
   *
   * @param config The configuration to use.
   */
  constructor(config: ApiConfig = DEFAULT_API_CONFIG) {
    this.config = config;
  }

  /**
   * @description Removes token from header
   */

  removeToken() {
    this.apisauce.deleteHeader("Authorization");
    api.api.apisauce.headers.Authorization = "";
  }

  /**
   * @description Sets up the API with a token
   * @param token - token to be set in header
   */

  setToken(token: string) {
    this.apisauce.setHeader("Authorization", "Bearer " + token);
    api.api.apisauce.headers.Authorization = `Bearer ${token}`;
  }

  /**
   * Sets up the API.  This will be called during the bootup
   * sequence and will happen before the first React component
   * is mounted.
   *
   * Be as quick as possible in here.
   */
  setup() {
    // construct the apisauce instance
    this.apisauce = create({
      baseURL: this.config.url,
      timeout: this.config.timeout,
    });
  }
}

const baseApi = new Api();
baseApi.setup();
const api = {
  api: baseApi,
  waifuApi: new WaifuApi(baseApi),
  userApi: new UserApi(baseApi),
};

export default api;

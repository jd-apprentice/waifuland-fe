import { Api } from "../base/api";
import { getGeneralApiProblem } from "../base/apiProblem";

export class UserApi {
  private api: Api;

  constructor(api: Api) {
    this.api = api;
  }

  /**
   * @description Login a user with a username and password
   * @param {string} username - The username of the user
   * @param {string} password - The password of the user
   * @returns {Promise<ApiResponse<any>>} The response from the API
   */

  // Send username and password in the body of the request
  async login(username: string, password: string): Promise<any> {
    try {
      const response = await this.api.apisauce.post("user/login", {
        username,
        password,
      });
      if (!response.ok) {
        const problem = getGeneralApiProblem(response);
        if (problem) return problem;
      }

      const { data } = response;
      return data;
    } catch (e) {
      return { kind: "bad-data" };
    }
  }
}

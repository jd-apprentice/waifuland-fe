import { ApiResponse } from "apisauce";
import { Api } from "./api";
import { getGeneralApiProblem } from "./apiProblem";

export class WaifuApi {
  private api: Api;

  constructor(api: Api) {
    this.api = api;
  }

  /**
   * Get a random of waifu.
   * @returns {Promise<any>}
   */

  async getWaifu(): Promise<any> {
    try {
      const response: ApiResponse<never> = await this.api.apisauce.get(
        `/images`
      );
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

  /**
   * Get a list of waifus.
   * @returns {Promise<any>}
   */

  async getWaifus(size: number = 1): Promise<any> {
    try {
      const response: ApiResponse<never> = await this.api.apisauce.get(
        `/images?size=${size}`
      );
      if (!response.ok) {
        const problem = getGeneralApiProblem(response);
        if (problem) return problem;
      }

      const { data } = response;
      // @ts-ignore
      return data?.urls;
    } catch (e) {
      return { kind: "bad-data" };
    }
  }
}

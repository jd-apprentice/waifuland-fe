import { ApiResponse } from "apisauce";
import { Api } from "./api";
import { getGeneralApiProblem } from "./apiProblem";

export class WaifuApi {
  private api: Api;

  constructor(api: Api) {
    this.api = api;
  }

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
   * @description Get a list of waifus.
   * @param { number } size - The amount of images to retrieve
   * @returns {Promise<any>}
   */

  async getWaifus(size: number = 1, tag_id: number = 1): Promise<any> {
    try {
      const response: ApiResponse<never> = await this.api.apisauce.get(
        `/images?size=${size}&tag_id=${tag_id}`
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

  async getTags(): Promise<any> {
    try {
      const response: ApiResponse<never> = await this.api.apisauce.get(`/tags`);
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

  async getTagById(id: number): Promise<any> {
    try {
      const response: ApiResponse<never> = await this.api.apisauce.get(
        `/tags/${id}`
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

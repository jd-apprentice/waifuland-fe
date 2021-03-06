declare global {
  interface Window {
    config: Record<string, string>;
  }
}
const BASE_URL = "https://waifuland-api.herokuapp.com/api/"
const API_URL = BASE_URL || window.config.apiBaseUrl;

/**
 * The options used to configure the API.
 */
export interface ApiConfig {
  /**
   * The URL of the api.
   */
  url: string;

  /**
   * Milliseconds before we timeout the request.
   */
  timeout: number;
}

/**
 * The default configuration for the app.
 */
export const DEFAULT_API_CONFIG: ApiConfig = {
  url: API_URL,
  timeout: 10000,
};

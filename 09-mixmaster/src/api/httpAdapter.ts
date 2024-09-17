import axios, { AxiosInstance } from "axios";
export interface HttpAdapter {
  get<T>(url: string): Promise<T>;
}
export class CocktailSearchApiAdapter implements HttpAdapter {
  private readonly axiosInstance: AxiosInstance;

  constructor(baseURL: string) {
    this.axiosInstance = axios.create({
      baseURL,
    });
  }

  async get<T>(url: string): Promise<T> {
    try {
      const { data } = await this.axiosInstance.get<T>(url);
      return data;
    } catch (error) {
      console.error("Error en GET:", error);
      throw error;
    }
  }
}

const cocktailSearchUrl =
  "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

export const axioscocktailSearch = new CocktailSearchApiAdapter(
  cocktailSearchUrl
);

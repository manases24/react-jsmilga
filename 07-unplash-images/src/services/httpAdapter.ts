import axios, { AxiosInstance } from "axios";

export interface HttpAdapter {
  get<T>(url: string): Promise<T>;
}

export class UnsplashApiAdapter implements HttpAdapter {
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

export const url = `https://api.unsplash.com/search/photos?client_id=${
  import.meta.env.VITE_API_KEY
}`;

export const axiosUnplashFetch = new UnsplashApiAdapter(url);

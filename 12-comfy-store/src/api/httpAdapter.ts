import axios from "axios";

export interface HttpAdapter {
  get<T>(url: string): Promise<T>;
  post<T, R>(url: string, data: T): Promise<R>;
}

export class ApiAdapter implements HttpAdapter {
  private readonly axiosInstance = axios;

  async get<T>(url: string): Promise<T> {
    try {
      const { data } = await this.axiosInstance.get<T>(url);
      return data;
    } catch (error) {
      console.error("Error en GET:", error);
      throw error;
    }
  }

  async post<T, R>(url: string, data: T): Promise<R> {
    try {
      const response = await this.axiosInstance.post<R>(url, data);
      return response.data;
    } catch (error) {
      console.error("Error en POST:", error);
      throw error;
    }
  }
}

export const customFetch = new ApiAdapter();

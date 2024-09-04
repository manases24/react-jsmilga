import axios, { AxiosInstance } from "axios";

export interface HttpAdapter {
  get<T>(url: string): Promise<T>;
  post<T, D>(url: string, data: D): Promise<T>;
  patch<T, D>(url: string, data: D): Promise<T>;
  delete<T>(url: string): Promise<T>;
}

export class TasksApiAdapter implements HttpAdapter {
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

  async post<T, D>(url: string, data: D): Promise<T> {
    try {
      const response = await this.axiosInstance.post<T>(url, data);
      return response.data;
    } catch (error) {
      console.error("Error en POST:", error);
      throw error;
    }
  }

  async patch<T, D>(url: string, data: D): Promise<T> {
    try {
      const response = await this.axiosInstance.patch<T>(url, data);
      return response.data;
    } catch (error) {
      console.error("Error en PATCH:", error);
      throw error;
    }
  }

  async delete<T>(url: string): Promise<T> {
    try {
      const response = await this.axiosInstance.delete<T>(url);
      return response.data;
    } catch (error) {
      console.error("Error en DELETE:", error);
      throw error;
    }
  }
}

export const customFetch = new TasksApiAdapter(
  "http://localhost:5000/api/tasks"
);

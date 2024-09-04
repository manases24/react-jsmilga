import axios, { AxiosInstance } from "axios";

export const BASE_URL = "http://localhost:5000/api/tasks";

export interface HttpAdapter {
  get<T>(url: string): Promise<T>;
  post<D>(url: string, data: D): Promise<D>;
}

export class TasksApiAdapter implements HttpAdapter {
  private readonly axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: BASE_URL,
    });
  }

  async get<T>(url: string): Promise<T> {
    const { data } = await this.axiosInstance.get<T>(url);
    return data;
  }

  async post<T, D>(url: string, data: D): Promise<T> {
    const response = await this.axiosInstance.post<T>(url, data);
    return response.data;
  }
}

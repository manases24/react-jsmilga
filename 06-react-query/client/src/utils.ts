import axios from "axios";

export interface HttpAdapter {
  get<T>(url: string): Promise<T>;
  // post<T>(url: string): Promise<T>;
}

export class TasksApiAdapter implements HttpAdapter {
  private readonly axios = axios;

  async get<T>(url: string): Promise<T> {
    const { data } = await this.axios.get<T>(url);
    return data;
  }

  // post<T>(url: string): Promise<T> {
  //   throw new Error("Method not implemented.");
  // }
}

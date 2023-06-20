import axios, { AxiosRequestConfig } from 'axios';

interface Options<D = any> extends AxiosRequestConfig {
  headers: any;
  method: string;
  params?: any;
  data?: D;
  isBlob?: boolean;
  isFormData?: boolean;
}

interface BasicConfig {
  apiBase: string;
  isRefreshing: boolean;
  createRequest(endpoint: string, rest: Options);
  createOptions(rest: Options): AxiosRequestConfig;
}

export const API_BASE = 'http://localhost:8080';

export const basicConfig: BasicConfig = {
  apiBase: `${API_BASE}/api`,
  isRefreshing: false,

  async createRequest<T>(endpoint, rest): Promise<T> {
    const options = this.createOptions(rest);

    return axios<T>(this.apiBase + endpoint, options);
  },

  createOptions(rest) {
    const { method, headers, params, data, isBlob = false, isFormData = false } = rest;
    const options: AxiosRequestConfig = {};
    if (headers) options.headers = headers;
    if (data && !isFormData) options.data = JSON.stringify(data);
    if (data && isFormData) options.data = data;
    if (params) options.params = params;
    options.method = method;
    if (isBlob) options.responseType = 'blob';
    return options;
  },
};

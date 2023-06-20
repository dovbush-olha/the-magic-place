import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

interface BasicConfig {
  apiBase: string;
  isRefreshing: boolean;
  createRequest(endpoint: string, ...rest: any[]);
  createOptions(rest: any[]): AxiosRequestConfig;
}

export const basicConfig: BasicConfig = {
  apiBase: 'http://localhost:8080',
  isRefreshing: false,

  async createRequest<T>(endpoint, ...rest): Promise<T> {
    const options = this.createOptions(rest);

    return axios(this.apiBase + endpoint, options);
  },

  createOptions(rest) {
    const [method, headers, params, data, isBlob, isFormData = false] = rest;
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

import axios, {AxiosRequestConfig, AxiosResponse} from 'axios';

const BASE_URL = 'https://api.escuelajs.co/api/v1';

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});

const _get = <T = any>(
  url: string,
  config: AxiosRequestConfig = {},
): Promise<AxiosResponse<T>> => {
  return apiClient.get<T>(url, config);
};

const _delete = <T = any>(
  url: string,
  config: AxiosRequestConfig = {},
): Promise<AxiosResponse<T>> => {
  return apiClient.delete<T>(url, config);
};

const _put = <T = any>(
  url: string,
  data: Record<string, any> = {},
  config: AxiosRequestConfig = {},
): Promise<AxiosResponse<T>> => {
  return apiClient.put<T>(url, data, config);
};

const _post = <T = any>(
  url: string,
  data: Record<string, any> = {},
  config: AxiosRequestConfig = {},
): Promise<AxiosResponse<T>> => {
  return apiClient.post<T>(url, data, config);
};

export {_get, _delete, _put, _post};

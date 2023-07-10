import axios, { AxiosRequestConfig } from "axios";

import { axiosInstance } from "./axiosInstance";

export const pendingRequestUrls = new Map<string, Set<number>>();

export type AxiosRequestOptions<T> = AxiosRequestConfig & {
  errorValues?: Record<number, T>;
  map?: (value: any) => T;
};

export function axiosRequest<T>(config: AxiosRequestOptions<T>) {
  const { map, errorValues = {} } = config;
  const uri = axios.getUri(config);
  const validErrorCodes = new Set(Object.keys(errorValues).map(parseInt));
  pendingRequestUrls.set(uri, validErrorCodes);
  return axiosInstance(config)
    .then(
      ({ data }) => (map ? map(data) : data),
      (e) => {
        const code = e.response?.status;
        if (axios.isAxiosError(e) && code && errorValues[code] !== undefined) {
          return errorValues[code];
        }
        throw e;
      },
    )
    .finally(() => {
      pendingRequestUrls.delete(uri);
    });
}

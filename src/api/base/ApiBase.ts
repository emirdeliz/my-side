import axios, { AxiosRequestConfig, AxiosRequestHeaders, AxiosResponse } from 'axios';
import { GenericObject } from '@types';

interface GetRequestParams {
  url: string;
}

interface PostRequestParams<BodyDataType> extends GetRequestParams {
  body?: BodyDataType;
}

interface DeleteRequestParams<BodyDataType> extends PostRequestParams<BodyDataType> {}

interface PutRequestParams<BodyDataType> extends PostRequestParams<BodyDataType> {}

interface PatchRequestParams<BodyDataType> extends PostRequestParams<BodyDataType> {}

interface ApiResponse<T> {
  products?: T;
  categories?: T;
}

export interface ApiHeadersCustom {
  headers?: AxiosRequestHeaders;
}

const buildUrlQueryParams = (url: string, params: GenericObject = {}) => {
  const result = Object.keys(params).reduce(
    (result: string, key: string) => result.replaceAll(`{${key}}`, params[key]),
    url
  );
  return result;
};

export const buildHeaders = async ({ headers }: ApiHeadersCustom): Promise<GenericObject> => {
  const header = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    ...headers,
  };
  return header;
};

export const getAxiosInstance = async ({ headers }: ApiHeadersCustom = {}) => {
  const baseURL = process.env.URL_API_BASE;
  const axiosInstance = axios.create({
    baseURL,
    headers: await buildHeaders({ headers }),
  });
  return axiosInstance;
};

export const Api = <T>(headersCustom?: ApiHeadersCustom) => {
  const get = async ({ url }: GetRequestParams, queryParams?: GenericObject) => {
    try {
      const instance = await getAxiosInstance(headersCustom);
      const { data } = await instance.get<T, AxiosResponse<T>>(
        buildUrlQueryParams(url, queryParams)
      );

      return (data as ApiResponse<T>);
    } catch (e) {
      console.log('Error', `${e} => ${url}`);
    }
  };

  const all = async ({ url }: GetRequestParams, queryParams?: GenericObject) => {
    try {
      const instance = await getAxiosInstance(headersCustom);
      const { data } = await instance.get<T, AxiosResponse<Array<T>>>(
        buildUrlQueryParams(url, queryParams)
      );
      return (data as ApiResponse<T>);
    } catch (e) {
      console.log('Error', `${e} => ${url}`);
    }
  };

  const post = async (
    { url, body }: PostRequestParams<GenericObject>,
    queryParams?: GenericObject
  ) => {
    try {
      const instance = await getAxiosInstance(headersCustom);
      const { data } = await instance.post<T>(
        buildUrlQueryParams(url, queryParams),
        body
      );
      const result = (data as ApiResponse<T>);
      return result;
    } catch (e) {
      console.log('Error', `${e} => ${url}`);
    }
  };

  const del = async (
    { url, body }: DeleteRequestParams<GenericObject>,
    queryParams?: GenericObject
  ) => {
    try {
      const instance = await getAxiosInstance(headersCustom);
      const { data } = await instance.delete<AxiosResponse<T>>(
        buildUrlQueryParams(url, queryParams),
        body as AxiosRequestConfig
      );
      return (data as ApiResponse<T>);
    } catch (e) {
      console.log('Error', `${e} => ${url}`);
    }
  };

  const put = async (
    { url, body }: PutRequestParams<GenericObject>,
    queryParams?: GenericObject
  ) => {
    try {
      const instance = await getAxiosInstance(headersCustom);
      const { data } = await instance.put<AxiosResponse<T>>(
        buildUrlQueryParams(url, queryParams),
        body
      );
      return (data.data as ApiResponse<T>);
    } catch (e) {
      console.log('Error', `${e} => ${url}`);
    }
  };

  const patch = async (
    { url, body }: PatchRequestParams<GenericObject>,
    queryParams?: GenericObject
  ) => {
    try {
      const instance = await getAxiosInstance(headersCustom);
      const { data } = await instance.patch<AxiosResponse<T>>(
        buildUrlQueryParams(url, queryParams),
        body
      );
      return (data.data as ApiResponse<T>);
    } catch (e) {
      console.log('Error', `${e} => ${url}`);
    }
  };

  return { get, all, post, del, put, patch };
};

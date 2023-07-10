import { AxiosError } from 'axios';

import { axiosRequest, AxiosRequestOptions } from '../axios';

const mockedAxiosInstance = jest.fn();

jest.mock('@plans/api/axiosInstance', () => ({
  ...(jest.requireActual('@plans/api/axiosInstance') as any),
  axiosInstance: () => mockedAxiosInstance(),
}));

type TData = {
  a: number;
};

const errorValue = 5;
const successValue = 3;
const data: TData = {
  a: successValue,
};
const config = {
  errorValues: { 404: errorValue },
  map: (value: TData) => value.a,
  method: 'get',
  url: `/url`,
} satisfies AxiosRequestOptions<number>;

describe('axios', () => {
  it('should return default error value if available in errorValues', async () => {
    const error = new AxiosError('message', '404');
    (error as any).response = { status: 404 };
    mockedAxiosInstance.mockReturnValue(Promise.reject(error));
    const response = await axiosRequest(config);
    expect(response).toBe(errorValue);
  });

  it('should reject request if returned with an error not in errorValues', async () => {
    const error = new AxiosError('message', '405');
    (error as any).response = { status: 405 };
    mockedAxiosInstance.mockReturnValue(Promise.reject(error));
    const errorResponse = await axiosRequest(config).catch(e => e);
    expect(error).toBe(errorResponse);
  });

  it('should return mapped value for successful request', async () => {
    const error = new AxiosError('message', '404');
    (error as any).response = { status: 404 };
    mockedAxiosInstance.mockReturnValue(Promise.resolve({ data }));
    const response = await axiosRequest(config);
    expect(response).toBe(successValue);
  });
});

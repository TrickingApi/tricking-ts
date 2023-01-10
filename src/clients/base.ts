import { BASE_URL } from '../constants';
import Axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from 'axios';
import { AxiosCacheInstance, CacheAxiosResponse, setupCache } from 'axios-cache-interceptor';
import pino from 'pino';
import {
  createLogger,
  handleRequest,
  handleRequestError,
  handleResponse,
  handleResponseError,
} from '../utils/logger';

export interface IBaseClientOptions {
  /**
   * ## Logger Options
   * Options for the client logger.
   * @see https://getpino.io/#/docs/api?id=options
   */
  logOptions?: pino.LoggerOptions;
  /**
   * ## Base URL
   * Location of the TrickingApi. Leave empty to use the official TrickingApi instance.
   */
  baseURL?: string;
}

export class BaseClient {
  public api: AxiosCacheInstance;

  public logger: pino.Logger;

  constructor(clientOptions?: IBaseClientOptions) {
    const axiosInstance: AxiosInstance = Axios.create({
      baseURL: clientOptions?.baseURL ?? BASE_URL,
      headers: {
        'Content-Type': 'application/json',
      }
    });
    this.api = setupCache(axiosInstance);

    this.logger = createLogger({
      enabled: !(
        clientOptions?.logOptions?.enabled === undefined ||
        clientOptions?.logOptions.enabled === false
      ),
      ...clientOptions?.logOptions,
    });

    this.api.interceptors.request.use(
      (config: AxiosRequestConfig) => handleRequest(config, this.logger),
      (error: AxiosError<string>) => handleRequestError(error, this.logger)
    );

    this.api.interceptors.response.use(
      (response: CacheAxiosResponse) => handleResponse(response, this.logger),
      (error: AxiosError<string>) => handleResponseError(error, this.logger)
    );
  }
}
import { BASE_URL } from '../constants';
import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { IAxiosCacheAdapterOptions, setup } from 'axios-cache-adapter';
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
   * ## Axios Cache Options
   * Options for cache.
   * @see https://github.com/RasCarlito/axios-cache-adapter
   */
  cacheOptions?: IAxiosCacheAdapterOptions;
  /**
   * ## Base URL
   * Location of the TrickingApi. Leave empty to use the official TrickingApi instance.
   */
  baseURL?: string;
}

export class BaseClient {
  public api: AxiosInstance;

  public logger: pino.Logger;

  constructor(clientOptions?: IBaseClientOptions) {
    this.api = setup({
      baseURL: clientOptions?.baseURL ?? BASE_URL,
      headers: {
        'Content-Type': 'application/json',
      },
      cache: {
        maxAge: clientOptions?.cacheOptions?.maxAge || 0,
        ...clientOptions?.cacheOptions,
      },
    });

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
      (response: AxiosResponse) => handleResponse(response, this.logger),
      (error: AxiosError<string>) => handleResponseError(error, this.logger)
    );
  }


}
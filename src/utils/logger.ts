import { AxiosError, AxiosRequestConfig } from 'axios';
import { CacheAxiosResponse } from 'axios-cache-interceptor';
import pino from 'pino';

/**
 *  Generic logger utils copied from @see https://github.com/Gabb-c/pokenode-ts/blob/master/src/config/logger.ts
 */ 

export const createLogger = (options?: pino.LoggerOptions | pino.DestinationStream): pino.Logger =>
  pino(options);

export const handleRequest = (
  config: AxiosRequestConfig,
  logger: pino.Logger
): AxiosRequestConfig => {
  logger.info(`[ Request Config ] ${config.method?.toUpperCase() || ''} | ${config.url || ''}`);
  return config;
};

export const handleRequestError = (
  error: AxiosError<unknown>,
  logger: pino.Logger
): Promise<AxiosError<unknown>> => {
  logger.error(`[ Request Error ] CODE ${error.code || 'UNKNOWN'} | ${error.message}`);
  throw error;
};

export const handleResponse = (response: CacheAxiosResponse, logger: pino.Logger): CacheAxiosResponse => {
  logger.info(response.data);
  return response;
};

export const handleResponseError = (
  error: AxiosError<unknown>,
  logger: pino.Logger
): Promise<AxiosError<unknown>> => {
  logger.error(`[ Response Error ] CODE ${error.code || 'UNKNOWN'} | ${error.message}`);
  throw error;
};
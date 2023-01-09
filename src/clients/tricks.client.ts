import { AxiosError, AxiosResponse } from 'axios';
import { BaseClient, IBaseClientOptions } from "./base";
import { Endpoints } from '../constants';
import {
  Trick,
  TrickError
} from '../models';

/**
 * Tricks Client 
 * 
 * Client used to access Tricks endpoints:
 * - /tricks (https://trickingapi.dev/api/tricks)
 * - /tricks/names (https://trickingapi.dev/api/tricks/names)
 * - /tricks/:name (https://trickingapi.dev/api/tricks/:name)
 * 
 * @see https://trickingapi.dev/docs
 */
export class TricksClient extends BaseClient {
  /**
   * @parm clientOptions options for the client
   */
  constructor(clientOptions?: IBaseClientOptions) {
    super(clientOptions);
  }

  /**
   * Get all tricks
   * @returns List of tricks
   */
  public async getAllTricks(): Promise<Trick[]> {
    return new Promise<Trick[]>((resolve, reject) => {
      this.api
        .get<Trick[]>(`${Endpoints.Tricks}`)
        .then((response: AxiosResponse<Trick[]>) => resolve(response.data))
        .catch((error: AxiosError<TrickError>) => reject(error));
    });
  }

  /**
   * Get trick by name
   * @returns A Trick 
   */
  public async getTrickByName(name: string): Promise<Trick> {
    return new Promise<Trick>((resolve, reject) => {
      this.api
        .get<Trick>(`${Endpoints.Tricks}/${name}`)
        .then((response: AxiosResponse<Trick>) => resolve(response.data))
        .catch((error: AxiosError<TrickError>) => reject(error));
    });
  }

  /**
   * Get all trick names
   * @returns A list of trick names
   */
  public async getAllTrickNames(): Promise<string[]> {
    return new Promise<string[]>((resolve, reject) => {
      this.api
        .get<string[]>(`${Endpoints.Tricks}/names`)
        .then((response: AxiosResponse<string[]>) => resolve(response.data))
        .catch((error: AxiosError<string>) => reject(error));
    });
  }
}


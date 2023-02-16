import { AxiosError, AxiosResponse } from 'axios';
import { BaseClient, IBaseClientOptions } from './base';
import { Endpoints } from '../constants';
import {
  Transition,
  TransitionId
} from '../models';

/**
 * Transitions Client
 * 
 * Client used to access Transitions endpoints:
 * - /transitions (https://trickingapi.dev/api/transitions)
 * - /transitions/:id (https://trickingapi.dev/api/transitions/:name)
 * 
 * @see https://trickingapi.dev/docs
 */
export class TransitionsClient extends BaseClient {
  /**
   * @parm clientOptions options for the client
   */
  constructor(clientOptions?: IBaseClientOptions) {
    super(clientOptions);
  }

  /**
   * Get all transitions
   * @returns List of transitions
   */
  public async getAllTransitions(): Promise<Transition[]> {
    return new Promise<Transition[]>((resolve, reject) => {
      this.api
        .get<Transition[]>(`${Endpoints.Transitions}`)
        .then((response: AxiosResponse<Transition[]>) => resolve(response.data))
        .catch((error: AxiosError<Transition>) => reject(error));
    });
  }

  /**
   * Get transition by id
   * @returns A Transition object
   */
  public async getTransitionById(id: TransitionId): Promise<Transition> {
    return new Promise<Transition>((resolve, reject) => {
      this.api
        .get<Transition>(`${Endpoints.Transitions}/${id}`)
        .then((response: AxiosResponse<Transition>) => {
          return resolve(response.data)
        })
        .catch((error: AxiosError<Transition>) => {
          reject(error)
        });
    });
  }
}

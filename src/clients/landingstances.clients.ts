import { AxiosError, AxiosResponse } from 'axios';
import { BaseClient, IBaseClientOptions } from './base';
import { Endpoints } from '../constants';
import {LandingStance, LandingStanceId } from '../models'

/**
 * Landing Stances Client
 * 
 * Client used to access Landing Stances endpoints:
 * - /landingstances (https://trickingapi.dev/api/landingstances)
 * - /landingstances/ids (https://trickingapi.dev/api/landingstances/ids)
 * - /landingstances/:id (https://trickingapi.dev/api/landingstances/:id)
 * 
 * @see https://trickingapi.dev/docs
 */
export class LandingStancesClient extends BaseClient {
  /**
   * @parm clientOptions options for the client
   */
  constructor(clientOptions?: IBaseClientOptions) {
    super(clientOptions);
  }

  /**
   * Get all landing stances
   * @returns List of landing stances
   */
  public async getAllLandingStances(): Promise<LandingStance[]> {
    return new Promise<LandingStance[]>((resolve, reject) => {
      this.api
        .get<LandingStance[]>(`${Endpoints.LandingStances}`)
        .then((response: AxiosResponse<LandingStance[]>) => resolve(response.data))
        .catch((error: AxiosError<LandingStance[]>) => reject(error));
    });
  }

  /**
   * Get all landing stance ids
   * @returns List of landing stance ids
   */
  public async getAllLandingStanceIds(): Promise<LandingStanceId[]> {
    return new Promise<LandingStanceId[]>((resolve, reject) => {
      this.api
        .get<LandingStanceId[]>(`${Endpoints.LandingStances}/ids`)
        .then((response: AxiosResponse<LandingStanceId[]>) => resolve(response.data))
        .catch((error: AxiosError<LandingStanceId[]>) => reject(error));
    });
  }

  /**
   * Get landing stance by id
   */
  public async getLandingStanceById(id: LandingStanceId): Promise<LandingStance> {
    return new Promise<LandingStance>((resolve, reject) => {
      this.api
        .get<LandingStance>(`${Endpoints.LandingStances}/${id}`)
        .then((response: AxiosResponse<LandingStance>) => resolve(response.data))
        .catch((error: AxiosError<LandingStance>) => reject(error));
    });
  }
}
 
import { AxiosError, AxiosResponse } from 'axios';
import { BaseClient, IBaseClientOptions } from "./base";
import { Endpoints } from '../constants';
import {
  Trick,
  TrickCategory,
  TrickError
} from '../models';

/**
 * Trick Categories Client 
 * 
 * Client used to access Categories endpoints:
 * - /categories (https://trickingapi.dev/api/categories)
 * - /categories/tricks (https://trickingapi.dev/api/categories/tricks)
 * - /categories/:name (https://trickingapi.dev/api/categories/:name)
 * 
 * @see https://trickingapi.dev/docs
 */
export class CategoriesClient extends BaseClient {
  /**
   * @parm clientOptions options for the client
   */
  constructor(clientOptions?: IBaseClientOptions) {
    super(clientOptions);
  }

  /**
   * Get all trick category names
   * @returns List of category names
   */
  public async getAllCategories(): Promise<TrickCategory[]> {
    return new Promise<TrickCategory[]>((resolve, reject) => {
      this.api
        .get<TrickCategory[]>(`${Endpoints.Categories}`)
        .then((response: AxiosResponse<TrickCategory[]>) => resolve(response.data))
        .catch((error: AxiosError<string>) => reject(error));
    });
  }

  /**
   * Get all tricks grouped by a category name
   * @returns A Trick 
   */
  public async getCategoryByName(name: string): Promise<Trick[]> {
    return new Promise<Trick[]>((resolve, reject) => {
      this.api
        .get<Trick[]>(`${Endpoints.Categories}/${name}`)
        .then((response: AxiosResponse<Trick[]>) => resolve(response.data))
        .catch((error: AxiosError<TrickError>) => reject(error));
    });
  }

  /**
   * Get all tricks grouped by their categories
   * @returns A map of TrickCategory to list of of tricks
   */
  public async getAllTrickNames(): Promise<Map<TrickCategory, Trick[]>> {
    return new Promise<Map<TrickCategory, Trick[]>>((resolve, reject) => {
      this.api
        .get<Map<TrickCategory, Trick[]>>(`${Endpoints.Tricks}/tricks`)
        .then((response: AxiosResponse<Map<TrickCategory, Trick[]>>) => resolve(response.data))
        .catch((error: AxiosError<string>) => reject(error));
    });
  }
}


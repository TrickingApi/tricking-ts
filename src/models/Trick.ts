import { TrickCategory } from "./TrickCategory";

/**
 * Interface for Trick object
 */
export interface Trick {
  readonly id: string,
  readonly name: string,
  readonly categories: TrickCategory[],
  readonly prereqs: Array<string>,
  readonly nextTricks: Array<string>,
  readonly description: string
}

export default Trick;

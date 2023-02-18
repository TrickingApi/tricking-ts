import { TransitionId } from "./Transition";

export enum LandingStanceId {
  COMPLETE = 'Complete',
  HYPER = 'Hyper',
  MEGA = 'Mega',
  SEMI = 'Semi',
}

export interface LandingStance {
  id: LandingStanceId;
  name: string;
  description: string;
  exampleVariations: string[];
  transitions: TransitionId[];
}
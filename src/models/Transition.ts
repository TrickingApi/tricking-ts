export enum TransitionId {
  BACKSWING = "Backswing",
  BOUND = "Bound",
  CARRYTHROUGH = "Carrythrough",
  FRONTSWING = "Frontswing",
  MISSLEG = "MISSleg",
  POP = "Pop",
  PUNCH = "Punch",
  RAPID = "Rapid",
  REDIRECT = "Redirect",
  REVERSAL = "Reversal",
  REVERSE_POP = "Reverse_Pop",
  SWINGTHROUGH = "Swingthrough",
  SKIP = "Skip",
  VANISH = "Vanish",
  WRAPTHROUGH = "Wrapthrough"
}

export const TRANSITION_IDS = new Set(Object.values(TransitionId));

export interface Transition {
	id: TransitionId;
	name: string;
	description: string;
	aliases: string[];
	examples: string[];
}
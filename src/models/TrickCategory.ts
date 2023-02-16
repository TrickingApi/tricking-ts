export enum TrickCategory {
  BACKWARD = "BACKWARD",
  DUB = "DOUBLE",
  FLIP = "FLIP",
  FORWARD = "FORWARD",
  GROUNDWORK = "GROUNDWORK",
  INSIDE = "INSIDE",
  OUTSIDE = "OUTSIDE",
  PSEUDO_DUB = "PSEUDO_DOUBLE_FLIP",
  QUAD = "QUAD",
  SING = "SINGLE",
  TRIP = "TRIPLE",
  TWIST = "TWIST",
  UNKNOWN = "UNKNOWN",
  VARIATION = "VARIATION",
  VERT_KICK = "VERT_KICK"
}

export const TRICK_CATEGORIES = new Set(Object.values(TrickCategory));

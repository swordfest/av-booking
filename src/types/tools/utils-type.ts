import { PlanningTrip } from "../trips/planning-trip-type";

type PickOnly<T, K extends keyof T> = Pick<T, K> & {
  [P in Exclude<keyof T, K>]?: never;
};

export type PlanningCategories = PickOnly<PlanningTrip, 'imageUrl' | 'destinationName' | 'destinationArea'>
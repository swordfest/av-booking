export type PlanningTrip = {
  category: string;
  imageUrl: string;
  destinationName: string;
  destinationArea: string;
};

export type PlanningTripCategory = {
  categoryType: "romance" | "naturaleza" | "verano" | "festejos";
};

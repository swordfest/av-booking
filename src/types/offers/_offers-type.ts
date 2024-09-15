export type Offer = {
  title: string;
  description?: string;
  imageURL?: string;
  variant: OfferCardVariant;
};

export type OfferCardVariant = "primary" | "secondary";



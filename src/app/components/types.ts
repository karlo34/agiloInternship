export interface Product {
  id: number | string;
  description: string;
  collection: string;
  img: string;
  product: string;
  breefly?: string;
  price?: number;
  discount?: number;
  // Add other fields like description, price, etc.
}
export interface Product {
  id: number | string;
  collection: string;
  img: string;
  product: string;
  breefly?: string;
  // Add other fields like description, price, etc.
}
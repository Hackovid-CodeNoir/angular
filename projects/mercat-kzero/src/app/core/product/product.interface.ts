export interface Product {
  id: string;
  image: string;
  price: number;
  availableStock: number;
  name: string;
  measurementUnit: string;
  productType: ProductType;
}

export enum ProductType {
  VEGETABLES,
  FRUITS,
  TUBERCLES
}

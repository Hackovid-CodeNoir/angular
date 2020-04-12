import { Product, ProductType } from './product.interface';

export const productsMock: Product[] = [
  {
    id: '1',
    name: 'Carrot',
    price: 1.69,
    measurementUnit: 'Kg',
    availableStock: 80,
    image: 'assets/img/zanahorias.png',
    productType: ProductType.VEGETABLES
  },
  {
    id: '2',
    name: 'Banana',
    price: 0.5,
    measurementUnit: 'Kg',
    availableStock: 20,
    image: 'assets/img/platano.png',
    productType: ProductType.FRUITS
  }
];

import { productsMock } from '../product/product-mock';
import { Producer } from './producer.interface';

export const producersMock: Producer[] = [
  {
    id: '1',
    displayName: 'La Boquería',
    position: new google.maps.LatLng(41.3819571, 2.1719914),
    location: 'Barcelona',
    rating: 3,
    products: productsMock
  },
  {
    id: '2',
    displayName: 'Montjuic',
    position: new google.maps.LatLng(41.370973, 2.170923),
    location: 'Barcelona',
    rating: 4,
    products: []
  },
  {
    id: '3',
    displayName: 'L´hort de la Lourdes',
    position: new google.maps.LatLng(41.388991, 2.16059),
    location: 'Barcelona',
    rating: 5,
    products: productsMock
  }
];

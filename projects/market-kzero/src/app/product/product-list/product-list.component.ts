import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  public sellers = [
    {
      name: 'L´hort de Lourdes',
      productName: 'Cistelles ecológiques',
      img: 'assets/img/cesta.png',
      bio:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium sequi fuga delectus quos expedita ut ipsam similique et ea, repellend',
    },
    {
      name: 'Can Manel',
      productName: 'Fruitas i Verdures',
      img: 'assets/img/frutas.png',
      bio:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium sequi fuga delectus quos expedita ut ipsam similique et ea, repellend',
    },
    {
      name: 'Verdures Carmen',
      productName: 'Verdures variades',
      img: 'assets/img/zanahorias.png',
      bio:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium sequi fuga delectus quos expedita ut ipsam similique et ea, repellend',
    },
    {
      name: 'La Masia',
      productName: 'Llegums i bollets',
      img: 'assets/img/champiñones.png',
      bio:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium sequi fuga delectus quos expedita ut ipsam similique et ea, repellend',
    },
    {
      name: 'L`hort d´en Lluis',
      productName: 'Frutas',
      img: 'assets/img/platano.png',
      bio:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium sequi fuga delectus quos expedita ut ipsam similique et ea, repellend',
    },
  ];
}

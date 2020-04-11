import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CartService } from '../../core/cart/cart.service';

@Component({
  selector: 'app-header-cart',
  templateUrl: './header-cart.component.html',
  styleUrls: ['./header-cart.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderCartComponent implements OnInit {
  constructor(public cartService: CartService) {}

  ngOnInit(): void {}
}

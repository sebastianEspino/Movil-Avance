
import { Component, OnInit } from '@angular/core';
import { ApiService } from './carrito.service';

@Component({
  selector: '/carrito',
  templateUrl: './carrito.html',
  styleUrls: ['/carrito.css']
})
export class CarritoComponent implements OnInit {

  cart: any[];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.cart = this.apiService.getCart();
  }

  removeFromCart(product: any): void {
    const cart = this.apiService.getCart();
    const index = cart.indexOf(product);
    if (index !== -1) {
      cart.splice(index, 1);
      this.apiService.setItem('cart', cart);
    }
  }

}
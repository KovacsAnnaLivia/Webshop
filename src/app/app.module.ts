// filepath: c:\Users\kovac\Documents\webshop\src\app\pages\products\products.component.ts
import { CommonModule } from '@angular/common';
import {NgFor} from '@angular/common';
import { Component } from '@angular/core';


@Component({

  selector: 'app-products',
  standalone: true, // Ha standalone komponens
  imports: [CommonModule], // Importáld a CommonModule-t
  template: `
    <div *ngFor="let product of products" class="product">
      <img [src]="product.imageUrl" alt="{{ product.name }}">
      <h2>{{ product.name }}</h2>
      <p>{{ product.description }}</p>
      <p>Price: {{ product.price }}</p>
      <button (click)="addToCart(product)">Add to Cart</button>
    </div>
  `,
  styleUrls: ['./pages/products/products.component.css']
})
export class ProductsComponent {
  products = [
    { name: 'Product 1', description: 'Description 1', price: 100, imageUrl: './public/product/vase2.png' },
    { name: 'Product 2', description: 'Description 2', price: 200, imageUrl: './public/product/vase3.png' }
  ];

  addToCart(product: any) {
    console.log('Added to cart:', product);
  }
}
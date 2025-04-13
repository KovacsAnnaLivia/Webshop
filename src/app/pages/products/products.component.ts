import { MatCardModule } from '@angular/material/card';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileObject } from '../../shared/constant';
import { Router, RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-products',
  imports: [
            MatCardModule,
            CommonModule,
            RouterLink,
            MatButtonModule,
  ],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css' ] // Javítva: styleUrls
})
export class ProductsComponent {
  products = [
    { name: 'Product 1', description: 'Description 1', price: 100, imageUrl: 'image1.jpg' },
    { name: 'Product 2', description: 'Description 2', price: 200, imageUrl: 'image2.jpg' }
  ];

  addToCart(product: any) {
    console.log('Added to cart:', product);
  }
}

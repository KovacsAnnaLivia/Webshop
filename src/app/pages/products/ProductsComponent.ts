export class ProductsComponent {
  products = [
    { name: 'Product 1', description: 'Description 1', price: 100, imageUrl: 'image1.jpg' },
    { name: 'Product 2', description: 'Description 2', price: 200, imageUrl: 'image2.jpg' }
  ];

  addToCart(product: any) {
    console.log('Added to cart:', product);
  }
}
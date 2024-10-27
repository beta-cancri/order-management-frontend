import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../core/services/product.services';
import { Product } from '../../../core/models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts(): void {
    this.productService.getProducts().subscribe(
      (data) => {
        console.log('Fetched products:', data);  // Log fetched data
        this.products = data;
      },
      (error) => {
        console.error('Failed to fetch products:', error);
      }
    );
  }
  
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../core/services/product.services';
import { Product } from '../../../core/models/product.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-detail.component.html', 
  styleUrls: ['./product-detail.component.css']   
})
export class ProductDetailsComponent implements OnInit {
  product: Product | null = null;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.productService.getProductById(id).subscribe(
        (data) => (this.product = data),
        (error) => console.error('Failed to fetch product details:', error)
      );
    }
  }
}

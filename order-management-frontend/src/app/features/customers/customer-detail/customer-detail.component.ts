import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from '../../../core/services/customer.services';
import { Customer } from '../../../core/models/customer.model';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {
  customer: Customer | undefined;

  constructor(
    private route: ActivatedRoute,
    private customerService: CustomerService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.fetchCustomer(id);
    }
  }

  fetchCustomer(id: string): void {
    this.customerService.getCustomerById(id).subscribe(
      (data) => {
        this.customer = data;
      },
      (error) => {
        console.error('Error fetching customer details', error);
      }
    );
  }
}

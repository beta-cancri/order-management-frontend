import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CustomerService } from '../../../core/services/customer.services'; // Correct path to CustomerService
import { Customer } from '../../../core/models/customer.model';

@Component({
  selector: 'app-login-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css']
})
export class LoginModalComponent {
  isVisible = false;
  showLogin = true;
  username = '';
  email = '';
  password = '';

  constructor(private customerService: CustomerService) {}

  open() {
    this.isVisible = true;
    this.showLogin = true;
  }

  close() {
    this.isVisible = false;
  }

  toggleView() {
    this.showLogin = !this.showLogin;
  }

  handleLogin() {
    // Implement login logic here
    this.close();
  }

  handleRegister() {
    const newCustomer: Customer = {
      id: '', // Set to '' or undefined; the backend will assign an ID
      name: this.username,
      email: this.email,
      address: '', // Add address if needed; leave blank if optional
      password: this.password,
      isAdmin: false,
      isActive: true
    };
    
    this.customerService.createCustomer(newCustomer).subscribe(
      () => {
        alert('Account created successfully!');
        this.close();
      },
      (error: any) => { // Explicitly type error as `any`
        console.error('Error creating account:', error);
      }
    );
  }
}

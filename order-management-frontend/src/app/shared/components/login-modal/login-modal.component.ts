import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CustomerService } from '../../../core/services/customer.services'; // Correct path to CustomerService
import { AuthService } from '../../../core/services/auth.services';
import { Customer } from '../../../core/models/customer.model';

@Component({
  selector: 'app-login-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css'],
})
export class LoginModalComponent {
  isVisible = false;
  showLogin = true;
  username = '';
  email = '';
  password = '';

  constructor(private customerService: CustomerService, private authService: AuthService) {}

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
    // Using email for login now
    this.authService.login(this.email, this.password).subscribe(
      () => {
        alert('Login successful!');
        this.close();
      },
      (error) => {
        console.error('Login failed:', error);
      }
    );
  }

  handleRegister() {
    const newCustomer: Customer = {
      id: '',
      name: this.username,
      email: this.email,
      address: '',
      password: this.password,
      isAdmin: false,
      isActive: true,
    };

    this.customerService.createCustomer(newCustomer).subscribe(      
      () => {
        console.log('Creating new customer:', newCustomer);
        alert('Account created successfully!');
        this.close();
      },
      (error) => {
        console.error('Error creating account:', error);
      }
    );
  }
}

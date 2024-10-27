import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css']
})
export class LoginModalComponent {
  isVisible = false;
  showLogin = true; // Toggle for login or signup view

  open() {
    this.isVisible = true;
    this.showLogin = true; // Default to login view when opened
  }

  close() {
    this.isVisible = false;
  }

  toggleView() {
    this.showLogin = !this.showLogin;
  }
}

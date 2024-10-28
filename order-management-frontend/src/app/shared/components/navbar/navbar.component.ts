import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; 
import { LoginModalComponent } from '../login-modal/login-modal.component';
import { AuthService } from '../../../core/services/auth.services';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule, LoginModalComponent], 
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  @ViewChild(LoginModalComponent) loginModal!: LoginModalComponent;

  constructor(private authService: AuthService) {}

  openLoginModal() {
    this.loginModal.open();
  }

  get isLoggedIn(): boolean {
    return !!this.authService.getCurrentUser();
  }

  get userName(): string | null {
    return this.authService.getCurrentUser()?.name || null;
  }

  logout() {
    this.authService.logout();
  }
}

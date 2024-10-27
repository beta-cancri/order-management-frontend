// navbar.component.ts
import { Component, ViewChild } from '@angular/core';
import { LoginModalComponent } from '../login-modal/login-modal.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [LoginModalComponent],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @ViewChild(LoginModalComponent) loginModal!: LoginModalComponent;

  openLoginModal() {
    this.loginModal.open();
  }
}

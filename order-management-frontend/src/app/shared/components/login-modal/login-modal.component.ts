import { Component } from '@angular/core';
import { NgIf } from '@angular/common'; // Import NgIf here

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css'],
  standalone: true,
  imports: [NgIf]  // Add NgIf to the imports array
})
export class LoginModalComponent {
  isVisible = false;

  open() {
    this.isVisible = true;
  }

  close() {
    this.isVisible = false;
  }
}

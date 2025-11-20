import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './register.html',
  styleUrls: ['./register.css']
})
export class RegisterComponent {

  email = '';
  password = '';
  repeatPassword = '';
  error = '';
  success = '';

  constructor(private auth: AuthService, private router: Router) {}

  onRegister() {
    if (this.password !== this.repeatPassword) {
      this.error = 'Паролі не співпадають';
      return;
    }

    this.auth.register({
      email: this.email,
      password: this.password
    }).subscribe({
      next: () => {
        this.success = 'Реєстрація успішна!';
        setTimeout(() => this.router.navigate(['/login']), 1500);
      },
      error: () => this.error = 'Помилка реєстрації'
    });
  }
}

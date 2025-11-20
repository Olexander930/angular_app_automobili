import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {

  email = '';
  password = '';
  errorMessage = '';

  constructor(private auth: AuthService, private router: Router) {}

  onLogin() {
    this.auth.login({ email: this.email, password: this.password }).subscribe({
      next: (users) => {
        if (users.length === 1) {
          this.auth.saveUser(users[0].email);
          this.auth.saveToken('fake-token'); // фейковий токен
          this.router.navigate(['/add-car']);
        } else {
          this.errorMessage = 'Невірний логін або пароль';
        }
      },
      error: () => this.errorMessage = 'Помилка сервера'
    });
  }
}

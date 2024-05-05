import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { AuthRequest } from '../../../interfaces/auth.interface';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export default class LoginComponent {
  singup = '/auth/signup';

  private authService = inject(AuthService);
  private router = inject(Router);

  authRequest: AuthRequest = {
    email: '',
    password: '',
  };

  login(form: NgForm) {
    console.log(form.value);
    if (form.invalid) {
      return;
    }
    this.authService.login(this.authRequest).subscribe((user) => {});
    this.router.navigate(['']);
  }
}

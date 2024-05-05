import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
})
export default class LayoutComponent {
  login = './auth/login';
  courses = './courses';

  private authService = inject(AuthService);

  get user() {
    return this.authService.auth()?.user;
  }

  logout() {
    this.authService.logout();
  }
}

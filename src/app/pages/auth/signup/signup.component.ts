import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AccountService } from '../../../services/account.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export default class SignupComponent {
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private accountService = inject(AccountService);

  form = this.fb.group({
    userName: ['', [Validators.required]],
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(4)]],
    dateOfBirth: ['', [Validators.required]],
    role: ['', [Validators.required]],
  });

  errors: string[] = [];

  signup() {
    console.log(this.form.value);
    if (this.form.invalid) {
      return;
    }
    const formValue = this.form.value;

    this.accountService.signup(formValue).subscribe({
      next: (profile) => {
        this.router.navigate(['/auth/login']);
      },
      error: (error) => {
        if (error.error.status === 400) {
          if (error.error.error) {
            this.errors = error.error.error;
          } else {
            this.errors = [error.error.detail];
          }
        }
      },
    });
  }
}

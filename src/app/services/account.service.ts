import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { SignupRequest } from '../interfaces/account.interface';
import { environment } from '../../environments/environment.development';
import { Profile } from '../interfaces/auth.interface';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  private http = inject(HttpClient);

  constructor() {}

  signup(signupRequest: SignupRequest) {
    return this.http.post<Profile>(
      `${environment.apiBase}/accounts/signup`,
      signupRequest
    );
  }
}

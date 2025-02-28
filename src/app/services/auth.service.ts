import { HttpClient } from '@angular/common/http';
import { Injectable, computed, inject, signal } from '@angular/core';
import { AuthRequest, AuthResponse } from '../interfaces/auth.interface';
import { environment } from '../../environments/environment';
import { map } from 'rxjs';

const authKey = 'bookstoreweb0324_auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private http = inject(HttpClient);
  private _auth = signal<AuthResponse | null>(null);

  auth = computed(() => this._auth());

  constructor() {
    const authString = localStorage.getItem(authKey);

    if (authString) {
      this._auth.set(JSON.parse(authString));
    }
  }

  login(authRequest: AuthRequest) {
    return this.http
      .post<AuthResponse>(`${environment.apiBase}/auth/token`, authRequest)
      .pipe(
        map((response) => {
          localStorage.setItem(authKey, JSON.stringify(response));
          this._auth.set(response);
          return response.user;
        })
      );
  }

  logout() {
    localStorage.removeItem(authKey);
    this._auth.set(null);
  }
}

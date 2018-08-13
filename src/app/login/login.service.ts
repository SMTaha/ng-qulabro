import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private readonly baseURL: string = environment.baseURL;
  constructor(private http: Http) {}

  login({ email, password }: { email: string; password: string }) {
    return this.http.post(`${this.baseURL}/v1/auth/login`, {
      email,
      password
    });
  }
}

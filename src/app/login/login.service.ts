import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { LOGIN } from '../common/constants';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: Http) {}

  login({ email, password }: { email: string; password: string }) {
    return this.http.post(LOGIN, {
      email,
      password
    });
  }
}

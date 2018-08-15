import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(64)
      // Validators.pattern(
      // /"^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{8,})"/
      // )
    ])
  });
  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit() {}

  onSubmit() {
    if (this.form.valid) {
      const body = this.form.value;
      this.loginService
        .login(body)
        .subscribe(res => this.router.navigateByUrl('/welcome'));
    }
  }
}

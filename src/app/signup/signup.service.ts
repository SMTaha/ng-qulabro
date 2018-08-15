import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import 'rxjs/add/operator/catch';

import {
  EMAIL,
  VERIFY,
  CREATE_WORSPACE,
  CREATE_COMPANY,
  SET_PASSWORD,
  SET_NAME
} from '../common/constants';

import { ErrorHandlerService } from '../shared/error-handler/error-handler.service';
import { AuthService } from '../shared/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  constructor(
    private http: Http,
    private httpClient: HttpClient,
    private authService: AuthService,
    private errorHandler: ErrorHandlerService
  ) {}

  getVerificationCode(email: string): Observable<Response> {
    return this.http.post(EMAIL, { email }).pipe(
      map(this.parseBody),
      catchError(this.errorHandler.handleError)
    );
  }

  verifyEmail({
    user_id,
    verification_code
  }: {
    user_id: number;
    verification_code: string;
  }): Observable<Response> {
    return this.http.post(VERIFY, { user_id, verification_code }).pipe(
      map(res => {
        const body = this.parseBody(res);
        this.authService.token = body.data.token;
        return body;
      }),
      catchError(this.errorHandler.handleError)
    );
  }

  setName({
    first_name,
    last_name
  }: {
    first_name: string;
    last_name: string;
  }) {
    return this.httpClient.post(SET_NAME, {
      first_name,
      last_name
    });
  }

  setPassword(password: string) {
    return this.httpClient.post(SET_PASSWORD, {
      password
    });
  }

  setCompnayDetails({
    company_name,
    company_phone
  }: {
    company_name: string;
    company_phone: string;
  }) {
    return this.httpClient.post(CREATE_COMPANY, {
      name: company_name,
      contactNumber: company_phone
    });
  }

  createWorkSpace({
    company_id,
    workspace
  }: {
    company_id: number;
    workspace: string;
  }) {
    return this.httpClient.post(CREATE_WORSPACE, {
      company_id,
      workspace
    });
  }

  private parseBody(res) {
    console.log(res);

    return JSON.parse(res['_body']);
  }
}

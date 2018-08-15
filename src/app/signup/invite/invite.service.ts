import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { INVITE } from '../../common/constants';

@Injectable({
  providedIn: 'root'
})
export class InviteService {
  constructor(private httpClient: HttpClient) {}

  invite(emails: Array<string>) {
    return this.httpClient.post(INVITE, { emails });
  }
}

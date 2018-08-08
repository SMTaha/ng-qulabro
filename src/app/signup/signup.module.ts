import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from '../routes/routes';
import { OnboardingHeaderModule } from '../onboarding-header/onboarding-header.module';

import { SignupComponent } from './signup.component';
import { EmailComponent } from './email/email.component';
import { VerifyComponent } from './verify/verify.component';
import { InviteComponent } from './invite/invite.component';
import { OnboardingBodyComponent } from '../onboarding-body/onboarding-body.component';
import { SetNameComponent } from './details/set-name/set-name.component';
import { SetPasswordComponent } from './details/set-password/set-password.component';

import { SignupService } from './signup.service';
import { DataService } from '../shared/data.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule,
    OnboardingHeaderModule
  ],
  declarations: [
    OnboardingBodyComponent,
    SignupComponent,
    EmailComponent,
    VerifyComponent,
    InviteComponent,
    SetNameComponent,
    SetPasswordComponent
  ],
  exports: [SignupComponent],
  providers: [SignupService, DataService]
})
export class SignupModule {}
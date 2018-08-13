import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignupModule } from '../signup/signup.module';
import { LoginModule } from '../login/login.module';
import { OnboardingHeaderModule } from '../onboarding-header/onboarding-header.module';
import { OnboardingBodyModule } from '../onboarding-body/onboarding-body.module';

@NgModule({
  imports: [
    CommonModule,
    SignupModule,
    LoginModule,
    OnboardingHeaderModule,
    OnboardingBodyModule
  ],
  declarations: [],
  exports: []
})
export class OnboardingModule {}

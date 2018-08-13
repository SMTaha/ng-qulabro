import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login.component';

import { OnboardingHeaderModule } from '../onboarding-header/onboarding-header.module';
import { OnboardingBodyModule } from '../onboarding-body/onboarding-body.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    OnboardingHeaderModule,
    OnboardingBodyModule
  ],
  declarations: [LoginComponent],
  exports: [LoginComponent]
})
export class LoginModule {}

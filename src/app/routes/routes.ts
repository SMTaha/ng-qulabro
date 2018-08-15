import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SignupComponent } from '../signup/signup.component';
import { EmailComponent } from '../signup/email/email.component';
import { VerifyComponent } from '../signup/verify/verify.component';
import { SetNameComponent } from '../signup/details/set-name/set-name.component';
import { SetPasswordComponent } from '../signup/details/set-password/set-password.component';
import { InviteComponent } from '../signup/invite/invite.component';
import { SetCompanyDetailsComponent } from '../signup/details/set-company-details/set-company-details.component';
import { CreateWorkspaceComponent } from '../signup/details/create-workspace/create-workspace.component';
import { TermsComponent } from '../signup/terms/terms.component';

import { LoginComponent } from '../login/login.component';

import { WelcomeComponent } from '../dashboard/welcome/welcome.component';
import { CallComponent } from '../dashboard/call/call.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/signup',
    pathMatch: 'full'
  }, // Replace redirect to the actual component for this route
  {
    path: 'signup',
    component: SignupComponent,
    children: [
      { path: 'verify', component: VerifyComponent },
      { path: 'name', component: SetNameComponent },
      { path: 'password', component: SetPasswordComponent },
      { path: 'company', component: SetCompanyDetailsComponent },
      { path: 'workspace', component: CreateWorkspaceComponent },
      { path: 'terms', component: TermsComponent },
      { path: 'invite', component: InviteComponent },
      { path: '', component: EmailComponent }
    ]
  },
  { path: 'call', component: CallComponent }, // Replace redirect to the actual component for this route
  { path: 'welcome', component: WelcomeComponent }, // Replace redirect to the actual component for this route
  { path: 'login', component: LoginComponent }, // Replace redirect to the actual component for this route
  { path: '**', redirectTo: '/signup' } // Replace redirect to the actual component for this route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

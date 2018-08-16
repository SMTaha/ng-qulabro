import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { HeaderComponent } from './header/header.component';
import { MainNavComponent } from './main-nav/main-nav.component';

@NgModule({
  imports: [CommonModule, FontAwesomeModule],
  declarations: [HeaderComponent, MainNavComponent],
  exports: [HeaderComponent, MainNavComponent]
})
export class SharedModule {}

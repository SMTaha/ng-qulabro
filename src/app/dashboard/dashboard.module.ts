import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { CallComponent } from './call/call.component';
import { SharedModule } from './shared/shared.module';
import { ControlsComponent } from './call/controls/controls.component';
import { FullScreenDirective } from './call/controls/directives/full-screen.directive';
import { ControlComponent } from './call/controls/control/control.component';

@NgModule({
  imports: [CommonModule, FontAwesomeModule, SharedModule],
  declarations: [CallComponent, ControlsComponent, FullScreenDirective, ControlComponent],
  exports: [CallComponent]
})
export class DashboardModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CallComponent } from './call/call.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [CallComponent],
  exports: [CallComponent]
})
export class DashboardModule {}

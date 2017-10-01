import { PresentationalComponentModule } from './../../components/presentational-component.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AdminRoutingModule } from './admin.routing.module'

import { AdminStartComponent } from './admin-start/admin-start.component';
import { MemberHeaderComponent } from './../../components/member-header/member-header.component';


@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
	AdminRoutingModule,
	PresentationalComponentModule
  ],
  declarations: [
    AdminStartComponent,
  ]
})
export class AdminModule { }

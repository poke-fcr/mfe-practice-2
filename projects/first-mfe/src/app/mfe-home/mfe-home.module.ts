import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MfeHomeRoutingModule } from './mfe-home-routing.module';
import { MfeHomePageComponent } from './mfe-home-page/mfe-home-page.component';


@NgModule({
  declarations: [
    MfeHomePageComponent
  ],
  imports: [
    CommonModule,
    MfeHomeRoutingModule
  ]
})
export class MfeHomeModule { }

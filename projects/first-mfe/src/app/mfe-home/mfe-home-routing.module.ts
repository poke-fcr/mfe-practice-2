import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MfeHomePageComponent } from './mfe-home-page/mfe-home-page.component';

const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  component: MfeHomePageComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MfeHomeRoutingModule { }

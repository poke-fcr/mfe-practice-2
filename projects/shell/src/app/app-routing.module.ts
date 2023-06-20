import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShellHomeComponent } from './shell-home/shell-home.component';
import { loadRemoteModule } from '@angular-architects/module-federation';

const routes: Routes = [
{
  path: '',
  component: ShellHomeComponent,
  pathMatch: 'full'
},
{
  path: 'mfe',
  loadChildren: () =>
      loadRemoteModule({
          type: 'manifest',
          remoteName: 'firstMfe',
          exposedModule: './MfeHomeModule'
      })
      .then(m => m.MfeHomeModule)
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

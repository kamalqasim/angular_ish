import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from './main.component';
import { AuthGuard } from 'src/app/core/guards/auth.guard';



const routes: Routes = [
  {
    path: 'dashboard',
    component: MainComponent,
    canActivate: [AuthGuard]
  }
];


@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class MainRoutingModule { }

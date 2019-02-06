import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { ContainersModule }         from '../../../../core/containers';
import { ComponentsModule }         from '../../../../core/components';

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    ContainersModule,
    ComponentsModule
  ]
})
export class MainModule { }

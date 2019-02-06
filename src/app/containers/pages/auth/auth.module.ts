import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRootingModule } from './auth-rooting.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ContainersModule }         from '../../../../core/containers';
import { ComponentsModule }         from '../../../../core/components';

@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    AuthRootingModule,
    ContainersModule,
    ComponentsModule
  ]
})
export class AuthModule { }

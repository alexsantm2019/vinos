import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { TopNavBarComponent } from './top-nav-bar/top-nav-bar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UserRoutingModule } from './user-routing.module';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UserRoutingModule
  ],
  declarations: [
    LoginComponent,
    RegistroComponent,
    TopNavBarComponent,
    FooterComponent
  ],
  //Exporto TopNavBar para poderlo importar en app.modules y que reconozca top-nav bar
  exports: [TopNavBarComponent, FooterComponent],
})
export class UserModule { }
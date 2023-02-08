import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'user/login', pathMatch: 'full' },
  { path: 'vino', loadChildren: () => import('./vinos/vinos.module').then(m => m.VinosModule) },
  { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule)  },
  { path: '**', redirectTo: 'user/register' }

]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

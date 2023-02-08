import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './../guards/auth.guard';
import { VinoListaComponent } from './vino-lista/vino-lista.component';
import { VinoNuevoComponent } from './vino-nuevo/vino-nuevo.component';
import { VinoDetalleComponent }  from './vino-detalle/vino-detalle.component';
import { NuevoVinoDeactivateGuard }  from './../guards/crear-vino-deactivate.guard';
import { VinoLoadResolverService } from '../services/vino-load-resolver.service';

const routes: Routes = [
  { path: 'Lista', component: VinoListaComponent,
    canActivate: [AuthGuard] },
  { path: 'Nuevo', component: VinoNuevoComponent,
    canActivate: [AuthGuard],
    // canDeactivate: [NuevoVinoDeactivateGuard] 
  },
  { path: 'Detalle/:id', component: VinoDetalleComponent,
    canActivate: [AuthGuard], resolve: { stock: VinoLoadResolverService } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VinoRoutingModule { }
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VinoListaComponent } from './vino-lista/vino-lista.component';
import { VinoNuevoComponent } from './vino-nuevo/vino-nuevo.component';
import { VinoDetalleComponent } from './vino-detalle/vino-detalle.component';
import { VinoItemComponent }  from './vino-item/vino-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VinoRoutingModule } from './vino-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule, 
    ReactiveFormsModule,
    VinoRoutingModule
  ],
  declarations: [
    VinoListaComponent,
    VinoNuevoComponent,
    VinoDetalleComponent,
    VinoItemComponent,
  ]
})
export class VinosModule { }

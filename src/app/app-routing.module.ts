import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { NuevacitaComponent } from './nuevacita/nuevacita.component';
import { NuevoclienteComponent } from './nuevocliente/nuevocliente.component';
import { ListaclientesComponent } from './listaclientes/listaclientes.component';
import { ListacitasComponent } from './listacitas/listacitas.component';
import { VentaComponent } from './venta/venta.component';

const appModules:Routes=[
  {path:'',component:BienvenidaComponent},
  {path:'nuevocliente',component:NuevoclienteComponent},
  {path:'listaclientes',component:ListaclientesComponent},
  {path:'nuevacita',component:NuevacitaComponent},
  {path:'listacitas',component:ListacitasComponent},
  {path:'venta',component:VentaComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appModules)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }

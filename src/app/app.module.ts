import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { NuevoclienteComponent } from './nuevocliente/nuevocliente.component';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { FormsModule } from '@angular/forms';
import { ListaclientesComponent } from './listaclientes/listaclientes.component';
import { NuevacitaComponent } from './nuevacita/nuevacita.component';
import { ListacitasComponent } from './listacitas/listacitas.component';
import { AppRoutingModule } from './app-routing.module';
import { VentaComponent } from './venta/venta.component';
import { ModalclientesComponent } from './modalclientes/modalclientes.component';

/*const appModules:Routes=[
  {path:'',component:BienvenidaComponent},
  {path:'nuevocliente',component:NuevoclienteComponent},
  {path:'listaclientes',component:ListaclientesComponent},
  {path:'nuevacita',component:NuevacitaComponent},
  {path:'listacitas',component:ListacitasComponent}
];*/

@NgModule({
  declarations: [
    AppComponent,
    NuevoclienteComponent,
    BienvenidaComponent,
    ListaclientesComponent,
    NuevacitaComponent,
    ListacitasComponent,
    VentaComponent,
    ModalclientesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    //RouterModule.forRoot(appModules),
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

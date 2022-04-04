import { Component, OnInit } from '@angular/core';
import {Cliente} from '../nuevocliente/cliente.model'
import { ClienteService } from '../servicio/cliente.service';

@Component({
  selector: 'app-nuevocliente',
  templateUrl: './nuevocliente.component.html',
  styleUrls: ['./nuevocliente.component.css']
})
export class NuevoclienteComponent implements OnInit {

  constructor(private servicioCliente:ClienteService) { }

  ngOnInit(): void {
  }

  txtNombre: string = ""
  txtApellido: string = ""
  txtGenero: string = ""
  txtEdad: number = 0
  txtCelular: string = ""
  txtEmail: string = ""
  txtDireccion: string = ""

  agregarCliente(){
    let nuevoCliente= new Cliente('0',this.txtNombre, this.txtApellido, this.txtGenero, this.txtEdad, this.txtCelular, this.txtEmail, this.txtDireccion)
    this.servicioCliente.agregaCliente(nuevoCliente).subscribe(
      res=>{
        console.log(res)
      },
      err=>console.log(err)
    )
  }

}

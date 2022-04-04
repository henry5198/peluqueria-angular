import { Component, OnInit } from '@angular/core';
import {ServicioService} from '../servicio/servicio.service'
import {Cliente} from '../nuevocliente/cliente.model';
import {Servicio} from '../servicio.model';
import { Citadb } from './citadb.model';
import {CitaService} from '../servicio/cita.service';

@Component({
  selector: 'app-nuevacita',
  templateUrl: './nuevacita.component.html',
  styleUrls: ['./nuevacita.component.css']
})
export class NuevacitaComponent implements OnInit {

  constructor(private servicio:ServicioService, private citaServicio:CitaService) { }
  tiempo: Array<{ name: string }> = [
    { name: "9 am" },
    { name: "10 am" },
    { name: "11 am" },
    { name: "14 pm" },
    { name: "15 pm" },
    { name: "16 pm" }
  ];
  ngOnInit(): void {
    this.listarServicios()
  }
  servicios:Servicio[]=[]
  listarServicios(){
    this.servicio.getServicios().subscribe(
      res=>{
        this.servicios=<any>res
      },
      err=>console.log(err)
    )
  }
  cliente:Cliente= new Cliente('','','','',0,'','','');
  serv:Servicio=new Servicio(0, '', 0);
  fecha:string=''
  
  hora:string='Seleccione'
  clienteSeleccionado(clie:Cliente){
    this.cliente=clie;
  }

  cita:Citadb= new Citadb(0, '', '', 0, 0, false)
  guardarCita(){
    
    this.cita= new Citadb(0, this.fecha, this.hora, parseInt(this.cliente.id), this.serv.id, false)
    this.citaServicio.addCita(this.cita).subscribe(
      res=>{
        console.log(res)
      },
      err=>console.log(err)
    )
    
  }

}

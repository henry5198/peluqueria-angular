import { Component, OnInit } from '@angular/core';
import {VentaService} from '../servicio/venta.service'
import {Cita} from '../nuevacita/cita.model'

@Component({
  selector: 'app-venta',
  templateUrl: './venta.component.html',
  styleUrls: ['./venta.component.css']
})
export class VentaComponent implements OnInit {

  constructor(private VentaService:VentaService) { }

  ngOnInit(): void {
    this.listarVentas()
  }
  ventas:Cita[]=[]
  listarVentas(){
    this.VentaService.getVentas().subscribe(
      res=>{
        console.log(res)
        this.ventas=<any>res
      },
      err=>console.log(err)
    )
  }

}

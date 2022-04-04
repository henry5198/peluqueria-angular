import { Component, OnInit } from '@angular/core';
import {CitaService} from '../servicio/cita.service';
import {Cita} from '../nuevacita/cita.model';

@Component({
  selector: 'app-listacitas',
  templateUrl: './listacitas.component.html',
  styleUrls: ['./listacitas.component.css']
})
export class ListacitasComponent implements OnInit {

  constructor(private CitaService:CitaService) { }
  citas:Cita[]=[];
  ngOnInit(): void {
    this.listarCitas()
  }

  listarCitas(){
    
    this.CitaService.getCitas().subscribe(
      res=>{
        console.log(res)
        this.citas=<any>res;
      },
      err=>console.log(err)
    );
  }

  atenderCita(id:number){
    this.CitaService.atenderCita(id).subscribe(
      res=>{
        console.log(res)
        this.listarCitas()
      },
      err=>console.log(err)
    )
  }
}

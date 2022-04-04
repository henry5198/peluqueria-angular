import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Cita } from '../nuevacita/cita.model';
import { Citadb } from '../nuevacita/citadb.model';

@Injectable({
  providedIn: 'root'
})
export class CitaService {

  url="/cita"
  constructor(private http:HttpClient) { }

  getCitas(){
    return this.http.get(this.url);
  }

  //atender cita
  atenderCita(id:number){
    return this.http.get(this.url+'/'+id);
  }

  //agregar una cita
  addCita(cita:Citadb){
    return this.http.post(this.url, cita);
  }
}

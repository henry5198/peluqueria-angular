import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  url='/api';
  constructor(private http:HttpClient) { }
  
  //obtener todos equipos
  getEquipos(){
    return this.http.get(this.url);
  }
  //obtener un equipo
  getUnEquipo(id:string){
    return this.http.get(this.url+'/'+id);
  }

  //agregar un equipo
  addEquipo(equipo:Equipo){
    return this.http.post(this.url, equipo);
  }

  //eliminar un equipo
  deleteEquipo(id:string){
    return this.http.delete(this.url+'/'+id);
  }

  //modificar un equipo
  modificarEquipo(id:string, equipo:Equipo){
    return this.http.put(this.url+'/'+id, equipo);
  }
}

export interface Equipo{
  id?:string,
  nombre?:string,
  ciudad?:string
}
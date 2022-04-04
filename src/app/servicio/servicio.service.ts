import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  url="/servicio"
  constructor(private http:HttpClient) { }

  getServicios(){
    return this.http.get(this.url)
  }
}

/*export interface Servicio{
  id:number,
  nombre:string,
  precio:number
}*/
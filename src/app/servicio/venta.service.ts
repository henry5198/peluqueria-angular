import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class VentaService {

  url='/ventas'
  constructor(private http:HttpClient) { }

  getVentas(){
    return this.http.get(this.url);
  }
}

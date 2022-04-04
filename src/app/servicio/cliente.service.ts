import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Cliente} from '../nuevocliente/cliente.model'

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  url = '/cliente';
  constructor(private http:HttpClient) { }

  //obtener todos clientes
  getClientes(){
    return this.http.get(this.url);
  }

  //eliminar un cliente
  deleteCliente(id:string){
    return this.http.delete(this.url+'/'+id);
  }

  agregaCliente(cliente:Cliente){
    return this.http.post(this.url, cliente);
  }
}

/*export interface Cliente{
  id:string,
  nombre?:string,
  apellido?:string,
  genero?:string,
  edad?:number,
  celular?:string,
  email?:string,
  direccion?:string
}*/
import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../servicio/cliente.service';
import {Cliente} from '../nuevocliente/cliente.model'

@Component({
  selector: 'app-listaclientes',
  templateUrl: './listaclientes.component.html',
  styleUrls: ['./listaclientes.component.css']
})
export class ListaclientesComponent implements OnInit {

  constructor(private ClienteService: ClienteService) { }
  clientes: Cliente[] = [];
  ngOnInit(): void {
    this.listarClientes();
  }

  listarClientes() {
    this.ClienteService.getClientes().subscribe(
      res => {
        console.log(res);
        this.clientes = <any>res;
      },
      err => console.log(err)
    );
  }

  eliminarCliente(id: string) {

    this.ClienteService.deleteCliente(id).subscribe(
      res => {
        console.log(res);
        this.listarClientes();
      },
      err => console.log(err)
    );

  }
}

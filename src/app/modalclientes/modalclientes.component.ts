import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cliente } from '../nuevocliente/cliente.model';
import {ClienteService} from '../servicio/cliente.service'

@Component({
  selector: 'app-modalclientes',
  templateUrl: './modalclientes.component.html',
  styleUrls: ['./modalclientes.component.css']
})
export class ModalclientesComponent implements OnInit {

  constructor(private ClienteService:ClienteService) { }

  @Output() val = new EventEmitter<Cliente>();

  ngOnInit(): void {
    this.listarClientes()
  }
  @Input() title ='';
  
  public show=false;

  showModal(){
    this.show=true;
  }

  hideModal(){
    this.show=false;
  }
  clientes:Cliente[]=[]
  listarClientes() {
    this.ClienteService.getClientes().subscribe(
      res => {
        console.log(res);
        this.clientes = <any>res;
      },
      err => console.log(err)
    );
  }

  seleccionaCliente(cli:Cliente){
    this.val.emit(cli);
    this.show=false;
  }

}

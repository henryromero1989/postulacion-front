import { Component } from '@angular/core';
import { Cliente } from 'src/app/interfaces/cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent {
  cliente!: Cliente;

  constructor(private clienteService: ClienteService){}

  ngOnInit(){
    this.getCliente();
  }

  getCliente() {
    this.clienteService.getCliente().subscribe(c => this.cliente = c);
  }

}

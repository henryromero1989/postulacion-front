import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from '../interfaces/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private httpClient: HttpClient) { }

  getCliente():Observable<Cliente> {    
    //http://localhost:8080/postulacion/cliente/001384529
    return this.httpClient.get<Cliente>("/postulacion/cliente/001384529");
  }
}

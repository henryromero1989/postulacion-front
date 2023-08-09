import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Empleado } from '../interfaces/empleado';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  constructor(private httpClient: HttpClient) { }

  getEmpleado():Observable<Empleado> {
    //http://localhost:8080/postulacion/empleado/008283819
    return this.httpClient.get<Empleado>("/postulacion/empleado/008283819");
  }
}

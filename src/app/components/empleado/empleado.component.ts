import { Component } from '@angular/core';
import { Empleado } from 'src/app/interfaces/empleado';
import { EmpleadoService } from 'src/app/services/empleado.service';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent {
  empleado!: Empleado;

  constructor(private empleadoService: EmpleadoService){}

  ngOnInit(){
    this.getEmpleado();
  }

  getEmpleado() {
    this.empleadoService.getEmpleado().subscribe(e => this.empleado = e);
  }
}

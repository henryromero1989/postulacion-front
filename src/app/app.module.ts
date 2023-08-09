import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpleadoComponent } from './components/empleado/empleado.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { HttpClientModule } from '@angular/common/http';
import { MovimientoComponent } from './components/movimiento/movimiento.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpleadoComponent,
    ClienteComponent,
    MovimientoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

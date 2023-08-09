import { Movimiento } from "./movimiento";

export interface Empleado {
     nombre: string;
    apellido: string;
    numeroCuenta: string;
    edad: number;
    saldo: number;
    cargo: string;
    movimientos: Movimiento[];
}

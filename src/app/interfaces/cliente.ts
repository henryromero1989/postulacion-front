import { Movimiento } from "./movimiento";

export interface Cliente {
    nombre: string;
    apellido: string;
    numeroCuenta: string;
    edad: number;
    saldo: number;
    fechaCreacion: Date;
    movimientos: Movimiento[];
}

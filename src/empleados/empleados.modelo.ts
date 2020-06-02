import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

export class EmpleadosModelo {
    @PrimaryGeneratedColumn()
    cod_empleado:number;

    @Column()
    Nombre:Date;

    @Column()
    Apellidos:string;

    @Column()
    Direccion:string;

    @Column()
    Telefono:number;

    @Column()
    correo:string;

    @Column()
    Rol:string;


}

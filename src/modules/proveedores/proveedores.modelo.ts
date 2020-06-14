import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

export class ProveedoresModelo {

    @PrimaryGeneratedColumn()
    cod_proveedor:number;

    @Column()
    nombre:string;

    @Column()
    domicilio:number;

    @Column()
    telefono:number;

    @Column()
    descripcion:string;

    @Column()
    Vendedor:string;

}

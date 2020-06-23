import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

export class VentasModelo {

    @PrimaryGeneratedColumn()
    cod_venta:number;

    @Column()
    fecha_venta:Date;

    @Column()
    cod_producto:number;

    @Column()
    precio_venta:number;

    @Column()
    cantidad:string;

    @Column()
    total:string;

    @Column()
    cod_empleado:string;

}

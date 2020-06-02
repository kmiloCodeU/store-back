import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

export class ProductosModelo {

    @PrimaryGeneratedColumn()
    cod_Producto:number;

    @Column()
    nombre:string;

    @Column()
    precio_Costo:number;

    @Column()
    precio_Venta:number;

    @Column()
    descripcion:string;

    @Column()
    fecha_registro:Date;

    @Column()
    cod_Empleado:string;


}

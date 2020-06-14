import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('productos')
export class ProductsModelo {
  @PrimaryGeneratedColumn()
  cod_Producto: number;

  @Column('varchar')
  nombre: string;

  @Column('int')
  precio_Costo: number;

  @Column('int')
  precio_Venta: number;

  @Column('text')
  descripcion: string;

  @Column()
  fecha_registro: Date;

  @Column()
  cod_Empleado: string;
}

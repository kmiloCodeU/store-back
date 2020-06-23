import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
@Entity('compras')
export class ComprasModelo {
  @PrimaryGeneratedColumn()
  cod_compra: number;

  @Column()
  fecha_compra: Date;

  @Column()
  cod_proveedor: number;

  @Column()
  cod_producto: number;

  @Column()
  precio_costo: number;

  @Column()
  cantidad: number;

  @Column()
  total: number;

  @Column()
  Cod_Empleado: number;
}

import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
@Entity('inventario')
export class InventariosModelo {
  @PrimaryGeneratedColumn()
  cod_Inventario: number;

  @Column()
  descripcion: Date;

  @Column()
  cod_Producto: string;

  @Column()
  cantidad_Ingreso: string;

  @Column()
  fecha_Ingeso: number;

  @Column()
  cantidad_Salida: string;

  @Column()
  fecha_Salida: string;

  @Column()
  cod_Empleado: number;
}

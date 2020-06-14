import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

export class EmpleadosModelo {
  @PrimaryGeneratedColumn()
  cod_empleado: number;

  @Column()
  nombre: Date;

  @Column()
  apellidos: string;

  @Column()
  direccion: string;

  @Column()
  telefono: number;

  @Column()
  correo: string;

  @Column()
  Rol: string;
}

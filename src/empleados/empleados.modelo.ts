import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

export class EmpleadosModelo {
  @PrimaryGeneratedColumn()
  employee_id: number;

  @Column({name:'name'})
  name: Date;

  @Column({lastName:'last_name'})
  lastName: string;

  @Column({address:'address'})
  address: string;

  @Column({phone:'phone'})
  phone: number;

  @Column({email:'email'})
  email: string;

  @Column({rol:'rol'})
  rol: string;
}

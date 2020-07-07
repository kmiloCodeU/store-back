import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('employee')
export class EmployeeEntity {
    @PrimaryGeneratedColumn('increment')
    id: number;
    @Column({ type: 'varchar', name: 'full_name' })
    fullname: string;
  
    @Column({name:'document_number'})
    documentnumber: number
  
    @Column({name:'phone'})
    phone: number
  
    @Column({name: 'email'})
    email: string

    @Column({name: 'birth_date'})
    birthdate: Date

    @Column({name: 'password'})
    password: string
  
  }
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('employee')
export class EmployeeEntity {
    @PrimaryGeneratedColumn('increment')
    id: number;
    @Column({ type: 'varchar', name: 'full_name' })
    fullname: string;
  
    @Column({name:'document_number'})
    documentnumber: number
  
    @Column({phone:'phone'})
    phone: number
  
    @Column({email: 'email'})
    email: string

    @Column({birthdate: 'birth_date'})
    birthdate: Date

    @Column({password: 'password'})
    password: string
  
  }
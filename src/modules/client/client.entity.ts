import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('client')
export class ClientEntity {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({ type: 'varchar', name: 'full_name' })
    fullname: string;

    
    @Column({ type: 'integer', name: 'document_number' })
    document: string;
  
    
  
       
  }
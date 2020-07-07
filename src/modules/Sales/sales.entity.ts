import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('sales')
export class SalesEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({name:'quantity'})
  quantityentry: number
  
  @Column({name:'id_sale'})
  idproduct: number

   @Column({name:'producto'})
  priceCost: number

  @Column({name:'cliente'})
  quantitysale: number
}
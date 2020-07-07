import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('product')
export class ProductEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;
  @Column({ type: 'varchar', name: 'name' })
  name: string;

   @Column({name:'price_cost'})
  priceCost: number

  @Column()
  quantity: number

  @Column({name: 'price_sale'})
  priceSale: number

}
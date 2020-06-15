import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('inventory')
export class InventoryEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;
  
  @Column({ type: 'varchar', name: 'name' })
  name: string;
 
  @Column({name:'id_product'})
  idproduct: number

  @Column({name:'quantity_entry'})
  quantityentry: number

   @Column({name:'price_entry'})
  priceCost: number

  @Column({name:'quantity_sale'})
  quantitysale: number

  @Column({name: 'price_sale'})
  priceSale: number

}
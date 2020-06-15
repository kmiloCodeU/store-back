import { InventoryRepository } from './inventory.repository';
import { InjectRepository } from '@nestjs/typeorm';
// @ts-ignore
import { InventoryEntity } from './inventory.entity';

export class InventoryService {
  // @ts-ignore
  constructor(@InjectRepository(InventoryRepository ) private readonly _inventoryRepository: InventoryRepository) {
  }

  save(inventory: InventoryEntity){
     this._inventoryRepository.save(inventory)
  }


}
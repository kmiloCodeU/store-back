import { Repository, EntityRepository } from 'typeorm';

import { InventoryEntity } from './inventory.entity';

@EntityRepository(InventoryEntity)
export class InventoryRepository extends Repository<InventoryEntity> {}

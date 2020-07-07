import { Repository, EntityRepository } from 'typeorm';

import { SalesEntity } from './sales.entity';

@EntityRepository(SalesEntity)
export class SalesRepository extends Repository<SalesEntity> {}

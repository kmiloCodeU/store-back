import { SalesRepository } from './sales.repository';
import { SalesRepository } from '@nestjs/typeorm';
// @ts-ignore
import { SalesEntity } from './sales.entity';

export class SalesService {
  // @ts-ignore
  constructor(@InjectRepository(SalesRepository ) private readonly _salesRepository: SalesRepository) {
  }

  save(sales: SalesEntity){
     this._inventoryRepository.save(sales)
  }


}
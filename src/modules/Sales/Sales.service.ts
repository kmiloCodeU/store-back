import { SalesRepository } from './sales.repository';
import { InjectRepository } from '@nestjs/typeorm';
// @ts-ignore
import { SalesEntity } from './sales.entity';

export class SalesService {
  // @ts-ignore
  constructor(@InjectRepository(SalesRepository ) private readonly _salesRepository: SalesRepository) {
  }

  save(sales: SalesEntity){
     this._salesRepository.save(sales)
  }


}
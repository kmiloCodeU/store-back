import { ProductRepository } from './product.repository';
import { InjectRepository } from '@nestjs/typeorm';
// @ts-ignore
import { ProductEntity } from './product.entity';

export class ProductService {
  // @ts-ignore
  constructor(@InjectRepository(ProductRepository ) private readonly _productRepository: ProductRepository) {
  }

  save(product: ProductEntity){
     this._productRepository.save(product)
  }


}
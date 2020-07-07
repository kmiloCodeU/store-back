import { Body, Controller, Post } from '@nestjs/common';

import { ProductService } from "./product.service";

@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {
  }
  @Post('')
  save(@Body() product ){
    this.productService.save(product);
  }
}
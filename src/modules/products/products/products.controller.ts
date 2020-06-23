import { Controller, Get, Post, Put, Query, Body, Delete } from '@nestjs/common';
import { ProductsDto } from '../interfaceProductsDto/products.interface';

@Controller('products')
export class ProductsController {
  @Post()
  create(@Body() createProductsDto: ProductsDto) {
return 'Producto creado';
  }

  @Get()
  async getAll() {
    return 'Esta accion retorna todos los valores(limit: ${query.limit} items)';
  }

  @Get('id:')
  finOne() {
    return 'Esta accion retorna un valor(${id} items)';
  }

  @Put('id:')
  update(@Body() updateProducts: ProductsDto) {
    return 'Esta accion retorna todos los valores(limit: ${id} items)';
  }

  @Delete(':id')
  delete() {
    return 'Esta accion retorna todos los valores(limit: ${query.limit} items)';
  }
}

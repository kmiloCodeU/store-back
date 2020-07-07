import { Body, Controller, Post } from '@nestjs/common';

import { SalesService } from "./sales.service";

@Controller('sales')
export class SalesController {
  constructor(private salesService: SalesService) {
  }
  @Post('')
  save(@Body() sales ){
    this.salesService.save(sales);
  }
}
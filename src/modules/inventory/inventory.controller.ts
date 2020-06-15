import { Body, Controller, Post } from '@nestjs/common';

import { InventoryService } from "./inventory.service";

@Controller('inventory')
export class InventoryController {
  constructor(private inventoryService: InventoryService) {
  }
  @Post('')
  save(@Body() inventory ){
    this.inventoryService.save(inventory);
  }
}
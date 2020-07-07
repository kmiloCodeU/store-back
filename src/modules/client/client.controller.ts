import { Body, Controller, Post } from '@nestjs/common';

import { ClientService } from "./client.service";

@Controller('client')
export class ClientController {
  constructor(private ClientService: ClientService) {
  }
  @Post('')
  save(@Body() client ){
    this.ClientService.save(client);
  }
}
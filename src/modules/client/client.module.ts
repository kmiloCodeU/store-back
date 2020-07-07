import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientRepository } from './client.repository';
import { ClientService } from './client.service';
import { ClientController } from './client.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ClientRepository])],
  providers: [ClientService],
  controllers:[ClientController]
})
export class ClientModule {}

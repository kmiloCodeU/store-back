import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SalesRepository } from './sales.repository';
import { SalesController } from './sales.controller';

@Module({
  imports: [TypeOrmModule.forFeature([SalesRepository])],
  controllers:[SalesController]
  
})
export class SalesModule {}

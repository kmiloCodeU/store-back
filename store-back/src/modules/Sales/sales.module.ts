import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SalesRepository } from './sales.repository';
import { SalesService } from './sales.service';
import { SalesController } from './sales.controller';

@Module({
  imports: [TypeOrmModule.forFeature([SalesRepository])],
  providers: [SalesService],
  controllers:[SalesController]
})
export class SalesModule {}

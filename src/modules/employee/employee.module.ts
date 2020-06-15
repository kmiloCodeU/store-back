import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeeRepository } from './employee.repository';
import { EmployeeService } from './employee.service';
import { EmployeeController } from './employee.controller';

@Module({
  imports: [TypeOrmModule.forFeature([EmployeeRepository])],
  providers: [EmployeeService],
  controllers:[EmployeeController]
})
export class EmployeeModule {}

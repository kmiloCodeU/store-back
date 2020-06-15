import { Body, Controller, Post } from '@nestjs/common';

import { EmployeeService } from "./employee.service";

@Controller('employee')
export class EmployeeController {
  constructor(private EmployeeService: EmployeeService) {
  }
  @Post('')
  save(@Body() employee ){
    this.EmployeeService.save(employee);
  }
}
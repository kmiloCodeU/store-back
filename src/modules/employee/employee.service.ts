import { EmployeeRepository } from './employee.repository';
import { InjectRepository } from '@nestjs/typeorm';
// @ts-ignore
import { EmployeeEntity } from './employee.entity';

export class EmployeeService {
  // @ts-ignore
  constructor(@InjectRepository(EmployeeRepository ) private readonly _employeeRepository: EmployeeRepository) {
  }

  save(employee: EmployeeEntity){
     this._employeeRepository.save(employee)
  }


}
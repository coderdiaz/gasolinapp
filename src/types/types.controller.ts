import { Controller } from '@nestjs/common';
import { Get } from '@nestjs/common';
import { TypesRepository } from './types.repository';

@Controller()
export class TypesController {
  constructor(private readonly repository: TypesRepository) {}

  @Get()
  async findAll() {
    return this.repository.findAll();
  }
}

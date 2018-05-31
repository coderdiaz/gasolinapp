import { Type } from './types.entity';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TypesRepository {
  constructor(private readonly repository: Repository<Type>) {}

  async create(types: Array<Type>): Promise<Array<Type>> {
    return await this.repository.create(types);
  }

  async findAll(): Promise<Array<Type>> {
    return await this.repository.find();
  }
}

import { Module } from '@nestjs/common';
import { TypesController } from './types.controller';
import { TypesRepository } from './types.repository';
import { TypesService } from './types.service';

@Module({
  imports: [],
  controllers: [TypesController],
  providers: [TypesRepository, TypesService]
})
export class TypesModule {}

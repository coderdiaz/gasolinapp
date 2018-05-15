import { Module } from '@nestjs/common';
import { StationsRepository } from './stations.repository';
import { StationsController } from './stations.controller';

@Module({
    controllers: [StationsController],
    providers: [StationsRepository],
})
export class StationsModule { }

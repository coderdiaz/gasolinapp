import { Controller } from '@nestjs/common';
import { Get, Param } from '@nestjs/common';

@Controller('stations')
export class StationController {

    @Get()
    async find(@Param('latitude') latitude: string, @Param('latitude') longitude: string) {

    }

}

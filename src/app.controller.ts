import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigService } from '@nestjs/config';

@Controller({
  path: 'services',
})
export class AppController {
  constructor(private readonly appService: AppService, private configService : ConfigService) {}

  @Get("property")
  getHello(): string {
    return this.appService.getHello();
  }


}

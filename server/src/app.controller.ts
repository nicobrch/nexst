import { Controller, Get } from '@nestjs/common';
import { Public } from './auth/constants';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private appService: AppService) {}

  @Public()
  @Get('hello')
  async getHello() {
    return this.appService.getHello();
  }
}

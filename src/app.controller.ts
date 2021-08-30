import { Controller, Get, Logger, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { Cookie } from './decorators/cookie.decorator';

@Controller()
export class AppController {
  private readonly logger = new Logger(AppController.name);
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Cookie() cookie, @Req() req): string {
    return this.appService.getHello();
  }
}

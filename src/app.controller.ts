import { Controller, Get, Header, Logger, Render, Req } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  private readonly logger = new Logger(AppController.name);
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  getHello() {}
}

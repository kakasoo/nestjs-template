import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { swaggerSetting } from './settings/swagger/swagger.setting';
import { CustomLoggerService } from './settings/logger/logger.service';

import * as cookieParser from 'cookie-parser';
import * as helmet from 'helmet';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // app.useLogger(app.get(CustomLoggerService));
  app.enableCors({
    origin: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });

  swaggerSetting(app);

  app.use(cookieParser());
  app.use(helmet());
  app.useStaticAssets(join(__dirname, '..', 'static'));

  await app.listen(3000);
}
bootstrap();

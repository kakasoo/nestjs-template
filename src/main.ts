import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { swaggerSetting } from './settings/swagger/swagger.setting';
import { CustomLoggerService } from './settings/logger/logger.service';

import * as cookieParser from 'cookie-parser';
import * as helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  // app.useLogger(app.get(CustomLoggerService));

  swaggerSetting(app);

  app.use(cookieParser());
  app.use(helmet());

  await app.listen(3000);
}
bootstrap();

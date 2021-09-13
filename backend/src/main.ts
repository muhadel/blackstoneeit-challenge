import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { ValidationPipe, Logger } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as helmet from 'helmet';
import * as compression from 'compression';
import { config } from './config/app.config';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './shared/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger('bootstrap');
  app.enableCors({ origin: config.allowedOrigins });
  app.use(helmet());
  app.use(compression());
  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalPipes(new ValidationPipe({ skipMissingProperties: true }));
  if (config.env === 'development') {
    logger.log(`App running in ${config.env} mode!`);
    const options = new DocumentBuilder()
      .setTitle('BlackStone eIT Challenge')
      .setDescription(
        'This challenge imagines that we have a social media platform that is under attack from spam.\
         We have implemented a reporting system for users that lets them report spam to the platform, \
          and our spam protection team.',
      )
      .setVersion('1.0')
      .addTag('BlackStone')
      .build();
    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('swagger', app, document);
  }
  await app.listen(config.port);
  logger.log(`App listening on port ${config.port}`);
}
bootstrap();

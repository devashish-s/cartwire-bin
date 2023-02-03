import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { join } from 'path';
import { engine } from 'express-handlebars';
import { printName } from './hbs/helpers';
// import * as compression from 'compression';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(
    AppModule,
    {logger: ['error', 'warn', 'log']}
  );

  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));

  // app.engine('hbs', engine({ extname: 'hbs' }));

  
  app.engine(
    'hbs',
    engine({
      extname: 'hbs',
      defaultLayout: 'main',
      layoutsDir: join(__dirname, '..', 'views', 'layouts'),
      partialsDir: join(__dirname, '..', 'views', 'partials'),
      helpers: { printName },
    }),
  );
  
  
  app.setViewEngine('hbs');
//  app.use(compression());
  await app.listen(3000);
}
bootstrap();

/*
Update the WSL kernel by running "wsl --update" or follow instructions at 
https://docs.microsoft.com/windows/wsl/wsl2-kernel
*/
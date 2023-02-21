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
import * as hbs from 'hbs';
// import * as compression from 'compression';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
    { logger: ['error', 'warn', 'log'] },
  );
  app.useStaticAssets({
    root: join(__dirname, '..', 'public'),
    prefix: '/public/',
  });

  /*
  const app = await NestFactory.create<NestExpressApplication>(
    AppModule,
    {logger: ['error', 'warn', 'log']}
  ); 

  //app.useStaticAssets(join(__dirname, '..', 'public'));
  //app.setBaseViewsDir(join(__dirname, '..', 'views'));

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
  */

  const path = require('path');
  hbs.registerPartials(path.join(__dirname, '../', '/views/partials'));
  app.setViewEngine({
    engine: {
      handlebars: require('handlebars'),
    },
    templates: join(__dirname, '..', 'views'),
  });

  // hbs.registerLayouts(join(__dirname, '..', '/views/layouts'));

  //  app.use(compression());
  await app.listen(3000);
}
bootstrap();

/*
Update the WSL kernel by running "wsl --update" or follow instructions at 
https://docs.microsoft.com/windows/wsl/wsl2-kernel
*/

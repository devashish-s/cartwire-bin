import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { join } from 'path';
import { engine } from 'express-handlebars';
import { printName } from './hbs/helpers';
import helmet from 'helmet';

// import * as compression from 'compression';

async function bootstrap() {

  const app = await NestFactory.create<NestExpressApplication>(
    AppModule,
    {
      logger: ['error', 'warn', 'log'],
      cors: true,
    },
  );

  //  app.use(helmet());
  app.use(
    helmet.contentSecurityPolicy({
      useDefaults: false,
      directives: {
        defaultSrc: ["'self'", "https://s3.cartwire.co"],
        scriptSrc: ["'self'", "https://s3.cartwire.co"],
        imgSrc: ["'self'", "https://s3.cartwire.co"],
        objectSrc: ["'none'"],
        upgradeInsecureRequests: [],
      },
    })
  );
  app.use(helmet.hidePoweredBy());

  /* app.enableCors({
    origin: [
      "https://www.google.com"
    ],
    methods: "DELETE",
    credentials: true,
  }); */

  app.enableCors(
    {
      origin: 'https://betterjavacode.com',
      methods: ['POST', 'PUT', 'DELETE', 'GET']
    }
  );



  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));

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
  app.enableCors(
    {
      origin: ['https://betterjavacode.com', 'https://www.google.com'],
      methods: ['POST', 'PUT', 'DELETE', 'GET']
    }
  );

  await app.listen(3000);
}
bootstrap();

/*
Update the WSL kernel by running "wsl --update" or follow instructions at 
https://docs.microsoft.com/windows/wsl/wsl2-kernel



https://widget.kritique.io/widget/ratingSummary?brand=BH0162&locale=en-gb&entityId=8710847962783&entityName=product&view=listing&apikey=C2C4E02F-788B-4619-8EEA-3CC3AA1FAAF3
https://widget.kritique.io/widget/ratingSummary?brand=BH0162&locale=en-gb&entityId=8710847962769&entityName=product&view=detail&apikey=C2C4E02F-788B-4619-8EEA-3CC3AA1FAAF3
https://widget.kritique.io/widget/readQuestion?brand=BH0162&locale=en-gb&entityId=8710847962769&paginationFlag=false&pageNumber=0&apikey=C2C4E02F-788B-4619-8EEA-3CC3AA1FAAF3&pageSize=10&sortBy=createdDate+desc&userAgent=desktop&currentPage=https:%2F%2Fwww.dove.com%2Fuk%2Fp%2Fdermaspa-gradual-self-tan-body-mousse-fair-to-medium.html%2F08710847962769
*/
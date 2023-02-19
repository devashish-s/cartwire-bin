import { RetailerInfoService } from './retailer_info.service';
import { RetailerDataSchema } from './schema/retailer_info.schema';
import { RetailerInfoController } from './retailer_info.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { CacheModule, Module, CacheInterceptor  } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';


@Module({
  imports: [
    CacheModule.register({
      isGlobal: true,
    }),
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.DB_CONNECT_CW_SCRAPING_DB),
    MongooseModule.forFeature([{ name: 'RetailerInfo', schema: RetailerDataSchema }])
  ],
  controllers: [RetailerInfoController],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: CacheInterceptor,
    },
    RetailerInfoService]

})
export class RetailerInfoModule {}

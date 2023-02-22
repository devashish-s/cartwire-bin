import { RetailerInfoService } from './retailer_info.service';
import { RetailerDataSchema } from './schema/retailer_info.schema';
import { RetailerInfoController } from './retailer_info.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { CacheModule, Module, CacheInterceptor  } from '@nestjs/common';


@Module({
  imports: [
    CacheModule.register({
      isGlobal: true,
      ttl: 300000, // mili seconds
    }),
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.DB_CONNECT_CW_SCRAPING_DB),
    MongooseModule.forFeature([
      { name: 'RetailerInfo', schema: RetailerDataSchema },
    ]),
  ],
  controllers: [RetailerInfoController],
  providers: [RetailerInfoService],
  exports: [RetailerInfoService]
})
export class RetailerInfoModule {}

import { Module } from '@nestjs/common';
import { RetailerInfoService } from './retailer_info.service';
import { RetailerInfoController } from './retailer_info.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { RetailerDataSchema } from './schema/retailer_info.schema';
import { ConfigModule } from '@nestjs/config';

console.log("===========>>>>>>>>>>>>>>>>>>>", process.env.DB_VAR);
console.log("===========>>>>>>>>>>>>>>>>>>>", process.env.DB_CONNECT);
console.log("===========>>>>>>>>>>>>>>>>>>>", process.env.DB_CONNECT_CW_SCRAPING_DB);

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.DB_CONNECT_CW_SCRAPING_DB),
    MongooseModule.forFeature([{ name: 'RetailerInfo', schema: RetailerDataSchema }])
  ],
  controllers: [RetailerInfoController],
  providers: [RetailerInfoService]
})
export class RetailerInfoModule {}

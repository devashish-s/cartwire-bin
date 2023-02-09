import { Module } from '@nestjs/common';
import { RetailerInfoService } from './retailer_info.service';
import { RetailerInfoController } from './retailer_info.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { RetailerDataSchema } from './schema/retailer_info.schema';

console.log("===========>>>>>>>>>>>>>>>>>>>", process.env.DB_CONNECT_CW_SCRAPING_DB);

@Module({
  imports: [
    MongooseModule.forRoot(process.env.DB_CONNECT_CW_SCRAPING_DB),
    MongooseModule.forFeature([{ name: 'RetailerInfo', schema: RetailerDataSchema }])
  ],
  controllers: [RetailerInfoController],
  providers: [RetailerInfoService]
})
export class RetailerInfoModule {}

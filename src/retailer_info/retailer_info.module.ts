import { Module } from '@nestjs/common';
import { RetailerInfoService } from './retailer_info.service';
import { RetailerInfoController } from './retailer_info.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { RetailerData } from './schema/retailer_info.schema';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.DB_CONNECT_CW_SCRAPING_DB),
    MongooseModule.forFeature([{ name: 'RetailerData', schema: RetailerData }])
  ],
  controllers: [RetailerInfoController],
  providers: [RetailerInfoService]
})
export class RetailerInfoModule {}

import { Module } from '@nestjs/common';
import { RetailerInfoService } from './retailer_info.service';
import { RetailerInfoController } from './retailer_info.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { RetailerData } from './schema/retailer_info.schema';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://cw_admin_3:AwZ9uYWe8ctBkK5D@cartwirecluster0.bibl1.mongodb.net/cw_scraping_db'),
    MongooseModule.forFeature([{ name: 'RetailerData', schema: RetailerData }])
  ],
  controllers: [RetailerInfoController],
  providers: [RetailerInfoService]
})
export class RetailerInfoModule {}

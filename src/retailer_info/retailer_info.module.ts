import { Module } from '@nestjs/common';
import { RetailerInfoService } from './retailer_info.service';
import { RetailerInfoController } from './retailer_info.controller';

@Module({
  controllers: [RetailerInfoController],
  providers: [RetailerInfoService]
})
export class RetailerInfoModule {}

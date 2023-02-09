import { Module } from '@nestjs/common';
import { ErrorCodeService } from './error_code.service';
import { ErrorCodeController } from './error_code.controller';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/cw_widgets'),
    MongooseModule.forFeature([{ name: 'BinData', schema: BinDataSchema }])
  ],
  controllers: [ErrorCodeController],
  providers: [ErrorCodeService]
})
export class ErrorCodeModule {}

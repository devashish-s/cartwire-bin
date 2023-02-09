import { Module } from '@nestjs/common';
import { ErrorCodeService } from './error_code.service';
import { ErrorCodeController } from './error_code.controller';

@Module({
  controllers: [ErrorCodeController],
  providers: [ErrorCodeService]
})
export class ErrorCodeModule {}

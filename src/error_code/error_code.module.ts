import { CacheModule, Module, CacheInterceptor } from '@nestjs/common';
import { ErrorCodeService } from './error_code.service';
import { ErrorCodeController } from './error_code.controller';
import { WidgetService } from '../widget/widget.service';
import { WidgetModule } from '../widget/widget.module';
import { RetailerInfoModule } from '../retailer_info/retailer_info.module';

@Module({
  imports: [
    CacheModule.register({
      ttl: 2*60*1000, // 2 min ttl
      max: 5000, // maximum number of items in cache
    }),
    WidgetModule,
    RetailerInfoModule
  ],
  controllers: [ErrorCodeController],
  providers: [ErrorCodeService],
})
export class ErrorCodeModule {}

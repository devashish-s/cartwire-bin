import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ErrorCodeModule } from './error_code/error_code.module';
import { WidgetModule } from './widget/widget.module';
import { RetailerInfoModule } from './retailer_info/retailer_info.module';

@Module({
  imports: [ErrorCodeModule, WidgetModule, RetailerInfoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

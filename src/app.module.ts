import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ErrorCodeModule } from './error_code/error_code.module';
import { WidgetModule } from './widget/widget.module';
import { ConfigModule } from '@nestjs/config';
// import { RetailerInfoModule } from './retailer_info/retailer_info.module';


@Module({
  imports: [ConfigModule.forRoot(), ErrorCodeModule, WidgetModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}



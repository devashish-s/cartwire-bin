import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { WidgetService } from './widget.service';
import { MongooseModule } from '@nestjs/mongoose';
import { WidgetController } from './widget.controller';
import { WidgetSchema } from './schemas/widget.schema';
// import { widgetProviders } from './widget.providers';

@Module({
  // imports: [DatabaseModule],
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.DB_CONNECT),
    MongooseModule.forFeature([
      { name: 'WidgetInfo', schema: WidgetSchema },
    ]),
  ],
  controllers: [WidgetController],
//  providers: [WidgetService, ...widgetProviders],
  providers: [WidgetService],
  exports: [WidgetService],
})
export class WidgetModule { }

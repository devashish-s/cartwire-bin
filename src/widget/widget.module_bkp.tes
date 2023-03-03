import { Module } from '@nestjs/common';
import { WidgetService } from './widget.service';
import { WidgetController } from './widget.controller';
import { widgetProviders } from './widget.providers';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [WidgetController],
  providers: [WidgetService, ...widgetProviders],
  exports: [WidgetService],
})
export class WidgetModule {}

import { Mongoose } from 'mongoose';
import { WidgetSchema } from './schemas/widget.schema';
export const widgetProviders = [
  {
    provide: 'WIDGET_MODEL',
    useFactory: (mongoose: Mongoose) => mongoose.model('Widget', WidgetSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type WidgetDocument = HydratedDocument<Widget>;

@Schema({ collection: 'bin_data' })
export class Widget {
  @Prop()
  hash_key: String;

  @Prop()
  product_cw_id: Number;

  @Prop()
  product_sku: String;
}

export const WidgetSchema = SchemaFactory.createForClass(Widget);
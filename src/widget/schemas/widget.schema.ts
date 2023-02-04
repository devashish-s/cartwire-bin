import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ collection: 'bin_data' })
export class Widget {
  @Prop()
  hash_key: String;

  @Prop()
  product_cw_id: String;

  @Prop()
  product_sku: String;
}

export const WidgetSchema = SchemaFactory.createForClass(Widget);
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, ObjectId } from 'mongoose';

export type RetailerDataDocument = HydratedDocument<RetailerData>;

@Schema({ collection: 'retailer_config' })
export class RetailerData {

  @Prop()
  cw_id: Number;
    
  @Prop()
  logo: String;
  
  @Prop()
  name: String;
  
  @Prop()
  crawl_day: String;
  
  @Prop()
  crawl_region: String;
  
  @Prop()
  crawl_save_time: String;
  
}

export const RetailerDataSchema = SchemaFactory.createForClass(RetailerData);

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, ObjectId } from 'mongoose';

export type RetailerDataDocument = HydratedDocument<RetailerData>;

@Schema({ collection: 'retailer_daily_scraping_data' })
export class RetailerData {
  @Prop() 
  retailer_product_buy_now_url: String;

  @Prop() 
  retailer_has_product_in_stock: String;
  
  @Prop() 
  retailer_product_offers: String;
  
  @Prop() 
  retailer_product_category: String;
  
  @Prop() 
  retailer_product_sub_category: String;
  
  @Prop() 
  retailer_product_quantity: String;
  
  @Prop() 
  retailer_product_price: String;
  
  @Prop() 
  retailer_id: String;
  
  @Prop() 
  retailer_name: String;
  
  @Prop() 
  retailer_logo: String;
  
  @Prop() 
  ret_name: String;
  
  @Prop() 
  currency_symbol: String;
  
  @Prop() 
  xpath: String;
  
  @Prop() 
  is_app_enable: String;
  
  @Prop() 
  url: String;
  
  @Prop() 
  country_name: String;
  
  @Prop() 
  country_code: String;
  
  @Prop() 
  show_price: String;
  
  @Prop() 
  show_offer: String;
  
  @Prop() 
  brand_name: String;
  
  @Prop() 
  is_relationship_active: String;
  
  @Prop() 
  pdp_parameter: String;
  
  @Prop() 
  pdp_status: String;
  
  @Prop() 
  enable_tiny_url: String;
  
  @Prop() 
  brand_pdp_parameter: String;
  
  @Prop() 
  brand_pdp_status: String;
  
  @Prop() 
  brand_enable_tiny_url: String;
  
  @Prop() 
  product_id: String;
  
  @Prop() 
  retailer_product_sku: String;
  
  @Prop() 
  execution_prefernce: String;
  
  @Prop() 
  price_symbol_position: String;
  
  @Prop() 
  multipack: String;

}

export const RetailerDataSchema = SchemaFactory.createForClass(RetailerData);

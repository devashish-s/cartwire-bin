import { Document } from 'mongoose';
export interface IRetailerInfo extends Document{

  readonly cw_id: Number;
  readonly logo: String;
  readonly name: String;
  readonly crawl_day: String;
  readonly crawl_region: String;
  readonly crawl_save_time: String;
  
}

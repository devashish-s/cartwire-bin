import { Document } from 'mongoose';

export interface Widget extends Document {
  readonly hash_key: string;
  readonly product_cw_id: number;
  readonly product_sku: string;
}

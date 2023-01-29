import { PartialType } from '@nestjs/mapped-types';
import { CreateRetailerInfoDto } from './create-retailer_info.dto';

export class UpdateRetailerInfoDto extends PartialType(CreateRetailerInfoDto) {
  id: number;
}

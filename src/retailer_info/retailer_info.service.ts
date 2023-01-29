import { Injectable } from '@nestjs/common';
import { CreateRetailerInfoDto } from './dto/create-retailer_info.dto';
import { UpdateRetailerInfoDto } from './dto/update-retailer_info.dto';

@Injectable()
export class RetailerInfoService {
  create(createRetailerInfoDto: CreateRetailerInfoDto) {
    return 'This action adds a new retailerInfo';
  }

  findAll() {
    return `This action returns all retailerInfo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} retailerInfo`;
  }

  update(id: number, updateRetailerInfoDto: UpdateRetailerInfoDto) {
    return `This action updates a #${id} retailerInfo`;
  }

  remove(id: number) {
    return `This action removes a #${id} retailerInfo`;
  }
}

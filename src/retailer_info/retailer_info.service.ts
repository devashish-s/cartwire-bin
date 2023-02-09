import { Injectable, NotFoundException } from '@nestjs/common';
import { IRetailerInfo } from './interface/retailer_info.interface';
import { CreateRetailerInfoDto } from './dto/create-retailer_info.dto';
import { UpdateRetailerInfoDto } from './dto/update-retailer_info.dto';
import { Model } from "mongoose";

@Injectable()
export class RetailerInfoService {
  constructor(@InjectModel('RetailerInfo') private retailerInfoModel: Model<IRetailerInfo>) { }

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

  async getRetailerInfo(retailerId: string): Promise<IRetailerInfo> {
    const existingRetailerInfo = await this.retailerInfoModel.findById(retailerId).exec();
    if (!existingRetailerInfo) {
      throw new NotFoundException(`Retailer info #${retailerId} not found`);
    }
    return existingRetailerInfo;
  }
}

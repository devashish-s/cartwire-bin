import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { RetailerInfoService } from './retailer_info.service';
import { CreateRetailerInfoDto } from './dto/create-retailer_info.dto';
import { UpdateRetailerInfoDto } from './dto/update-retailer_info.dto';

@Controller()
export class RetailerInfoController {
  constructor(private readonly retailerInfoService: RetailerInfoService) {}

  @MessagePattern('createRetailerInfo')
  create(@Payload() createRetailerInfoDto: CreateRetailerInfoDto) {
    return this.retailerInfoService.create(createRetailerInfoDto);
  }

  @MessagePattern('findAllRetailerInfo')
  findAll() {
    return this.retailerInfoService.findAll();
  }

  @MessagePattern('findOneRetailerInfo')
  findOne(@Payload() id: number) {
    return this.retailerInfoService.findOne(id);
  }

  @MessagePattern('updateRetailerInfo')
  update(@Payload() updateRetailerInfoDto: UpdateRetailerInfoDto) {
    return this.retailerInfoService.update(updateRetailerInfoDto.id, updateRetailerInfoDto);
  }

  @MessagePattern('removeRetailerInfo')
  remove(@Payload() id: number) {
    return this.retailerInfoService.remove(id);
  }
}

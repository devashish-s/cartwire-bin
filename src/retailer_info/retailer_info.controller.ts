import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RetailerInfoService } from './retailer_info.service';
import { CreateRetailerInfoDto } from './dto/create-retailer_info.dto';
import { UpdateRetailerInfoDto } from './dto/update-retailer_info.dto';

@Controller('retailer-info')
export class RetailerInfoController {
  constructor(private readonly retailerInfoService: RetailerInfoService) { }

  @Post()
  create(@Body() createRetailerInfoDto: CreateRetailerInfoDto) {
    return this.retailerInfoService.create(createRetailerInfoDto);
  }

  @Get()
  findAll() {
    return this.retailerInfoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    //  return this.retailerInfoService.findOne(+id);
    return this.retailerInfoService.getBinData(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRetailerInfoDto: UpdateRetailerInfoDto) {
    return this.retailerInfoService.update(+id, updateRetailerInfoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.retailerInfoService.remove(+id);
  }
}

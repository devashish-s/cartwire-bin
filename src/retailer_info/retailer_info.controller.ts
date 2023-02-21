import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors } from '@nestjs/common';
import { CACHE_MANAGER, Inject, CacheInterceptor } from '@nestjs/common';
import { Cache } from 'cache-manager';
import { RetailerInfoService } from './retailer_info.service';
import { CreateRetailerInfoDto } from './dto/create-retailer_info.dto';
import { UpdateRetailerInfoDto } from './dto/update-retailer_info.dto';

@Controller('retailer-info')

export class RetailerInfoController {
  constructor(
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
    private readonly retailerInfoService: RetailerInfoService
  ) { }
  //constructor(private readonly retailerInfoService: RetailerInfoService) { }

  @Post()
  create(@Body() createRetailerInfoDto: CreateRetailerInfoDto) {
    return this.retailerInfoService.create(createRetailerInfoDto);
  }

  @Get()
  findAll() {
    return this.retailerInfoService.findAll();
  }

  @UseInterceptors(CacheInterceptor)
  @Get(':id')
  async findOne(@Param('id') id: string) {
    // const retailer_info = '';
    let retailer_info = await this.cacheManager.get(`retailer-info-${id}`);
    //  return this.retailerInfoService.findOne(+id);
    console.log(`retailer-info-${id} =======>>>>>>>>>>>`, `retailer-info-${id}`);
    if (!retailer_info || Object.keys(retailer_info).length === 0) {
      //      if (Object.keys(retailer_info).length === 0) {
      console.log(`retailer-info-${id} --------<<<<<<<<`  );
      await this.cacheManager.set(`retailer-info-${id}`, await this.retailerInfoService.getRetailerInfo(id), 300000 );
      retailer_info = await this.cacheManager.get(`retailer-info-${id}`);
      //      }
    }

    return await this.cacheManager.get(`retailer-info-${id}`);
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

import { Injectable, Inject } from '@nestjs/common';
import { CreateErrorCodeDto } from './dto/create-error_code.dto';
import { UpdateErrorCodeDto } from './dto/update-error_code.dto';
import { WidgetService } from '../widget/widget.service';
import { RetailerInfoService } from '../retailer_info/retailer_info.service';

@Injectable()
export class ErrorCodeService {

  @Inject(WidgetService)
  private readonly widgetService: WidgetService;
  @Inject(RetailerInfoService)
  private readonly retailerInfoService: RetailerInfoService;

  create(createErrorCodeDto: CreateErrorCodeDto) {
    return 'This action adds a new errorCode';
  }

  findAll() {
    return `This action returns all errorCode`;
  }

  async findOne(keyVal: any, langCode: any) {
    let product_sku, brand_name = "";
    let widgetData = await this.widgetService.findOne(keyVal, langCode);
    product_sku= widgetData.product_sku; 
    brand_name = widgetData.brand_name;
    let retailerData = await this.retailerInfoService.getRetailerInfo(product_sku, brand_name);
    return{ ...widgetData, 'retailer': retailerData }
  }

  update(id: number, updateErrorCodeDto: UpdateErrorCodeDto) {
    return `This action updates a #${id} errorCode`;
  }

  remove(id: number) {
    return `This action removes a #${id} errorCode`;
  }
}

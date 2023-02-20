import { Injectable, NotFoundException } from '@nestjs/common';
import { IRetailerInfo } from './interface/retailer_info.interface';
import { CreateRetailerInfoDto } from './dto/create-retailer_info.dto';
import { UpdateRetailerInfoDto } from './dto/update-retailer_info.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class RetailerInfoService {
  constructor(
    @InjectModel('RetailerInfo')
    private retailerInfoModel: Model<IRetailerInfo>,
  ) {}

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

  async getRetailerInfo(product_sku: string, brand_name: string) {
    const existingRetailerInfo = await this.retailerInfoModel
    .aggregate([
      {
        $lookup: {
          from: 'retailer_config',
          localField: 'retailer_id',
          foreignField: '_id',
          as: 'retailerdata',
        },
      },
      {
        $lookup: {
          from: 'country_config',
          localField: 'retailerdata.country_id',
          foreignField: '_id',
          as: 'countrydata',
        },
      },
      {
        $match: {
          $and: [{product_sku: product_sku},
                {"retailerdata.brands.brand_name": brand_name},
                {"retailerdata.brands.is_relationship_active": true},
                {"retailerdata.is_active": true}]
        },
      },
      {
        $project: {
          retailer_product_buy_now_url: 1,
          retailer_has_product_in_stock: 1,
          retailer_product_offers: 1,
          retailer_product_category: 1,
          retailer_product_sub_category: 1,
          retailer_product_quantity: 1,
          retailer_product_price: 1,
          retailer_id: 1,
          retailer_name: 1,
          retailer_logo: 1,
          ret_name: { "$arrayElemAt": ["$retailerdata.name", 0]},
          currency_symbol: { "$arrayElemAt": ["$retailerdata.currency_symbol", 0]},
          xpath:{
            "$cond": {
              "if": {brand_name: brand_name},
              "then": "$listing_page_url",
              "else": {
                "$arrayElemAt": ["$bindata.xpath", 0]
              }
            }
          },
          is_app_enable: { "$arrayElemAt": ["$retailerdata.is_app_enable", 0]},
          url: { "$arrayElemAt": ["$retailerdata.url", 0]},
          country_name: { "$arrayElemAt": ["$countrydata.name", 0]},
          country_code: { "$arrayElemAt": ["$countrydata.country_code", 0]},
          show_price: { "$arrayElemAt": ["$country_code.show_price", 0]},
          show_offer: { "$arrayElemAt": ["$countrydata.show_offer", 0]},
          brand_name: { "$arrayElemAt": ["$retailerdata.brands.brand_name", 0]},
          is_relationship_active: { "$arrayElemAt": ["$retailerdata.brands.is_relationship_active", 0]},
          pdp_parameter: { "$arrayElemAt": ["$retailerdata.pdp_parameter", 0]},
          pdp_status: { "$arrayElemAt": ["$retailerdata.pdp_status", 0]},
          enable_tiny_url: { "$arrayElemAt": ["$retailerdata.enable_tiny_url", 0]},
          brand_pdp_parameter: { "$arrayElemAt": ["$retailerdata.brands.pdp_parameter", 0]},
          brand_pdp_status: { "$arrayElemAt": ["$retailerdata.brand.pdp_status", 0]},
          brand_enable_tiny_url: { "$arrayElemAt": ["$retailerdata.brands.enable_tiny_url", 0]},
          product_id: { "$arrayElemAt": ["$retailerdata.product_id", 0]},
          retailer_product_sku: 1,
          execution_prefernce: { "$arrayElemAt": ["$retailerdata.brands.execution_prefernce", 0]},
          price_symbol_position: { "$arrayElemAt": ["$countrydata.price_symbol_position", 0]},
          multipack: 1,
        },
      },
    ])
    .exec();
    if (!existingRetailerInfo) {
      throw new NotFoundException(`Retailer info #${product_sku} not found`);
    }
    return existingRetailerInfo;
  }
}

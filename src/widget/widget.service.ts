import { Model } from 'mongoose';
import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { CreateWidgetDto } from './dto/create-widget.dto';
import { UpdateWidgetDto } from './dto/update-widget.dto';
import { Widget } from './interfaces/widget.interface';
import * as mongoose from 'mongoose';

@Injectable()
export class WidgetService {

/*  constructor(
    @Inject('WIDGET_MODEL')
    private widgetModel: Model<Widget>,
  ) { } */

  create(createWidgetDto: CreateWidgetDto) {
    return 'This action adds a new widget';
  }

  async findAll() {
    // return await this.widgetModel.find().exec();
    return 'This action return all widget';
  }

  async findOne(hash_key: any, lang_code: any) {
    // const existingWidget = await this.widgetModel.findById(id).exec();
   /* const existingWidget = await this.widgetModel
      .aggregate([
        {
          $match: {
            language_code: {"$regex": lang_code},
            $or: [{ product_ean: hash_key }, { hash_key: hash_key }],
          },
        },
        {
          $lookup: {
            from: 'bin_theme_config',
            localField: 'bin_theme_doc_id',
            foreignField: '_id',
            as: 'bindata',
          },
        },
        {
          $project: {
            product_sku: 1,
            brand_name: 1,
            widget_name: 1,
            bin_theme_doc_id: 1,
            product_ean: 1,
            show_price_status: 1,
            show_offer_status: 1,
            product_image_url: 1,
            show_description_status: 1,
            product_description: 1,
            language_code: 1,
            show_fixed_order: 1,
            ga_id: { $ifNull: [ "$ga_id", "0" ] },
            report_suite_id: 1,
            brand_keyword: 1,
            table_header: { "$arrayElemAt": ["$bindata.table_header", 0] },
            show_store_locator: {
              "$cond": {
                "if": { "$eq": ["$product_ean", ""] },
                "then": "0",
                "else": {
                  "$arrayElemAt": ["$bindata.show_store_locator", 0]
                }
              }
            },
            price_column: { "$arrayElemAt": ["$bindata.price_column", 0] },
            top_online: { "$arrayElemAt": ["$bindata.top_online", 0] },
            variant_text: { "$arrayElemAt": ["$bindata.variant_text", 0] },
            purchase_option_txt: { "$arrayElemAt": ["$bindata.purchase_option_txt", 0] },
            product_txt: { "$arrayElemAt": ["$bindata.product_txt", 0] },
            show_recom_prod_status: { "$arrayElemAt": ["$bindata.show_recom_prod_status", 0] },
            show_available_retailers: { "$arrayElemAt": ["$bindata.show_available_retailers", 0] },
            display_msg: { "$arrayElemAt": ["$bindata.display_msg", 0] },
            msg_text: { "$arrayElemAt": ["$bindata.msg_text", 0] },
            buy_in_store_txt: { "$arrayElemAt": ["$bindata.buy_in_store_txt", 0] },
            nearest_store_txt: { "$arrayElemAt": ["$bindata.nearest_store_txt", 0] },
            postal_address_txt: { "$arrayElemAt": ["$bindata.postal_address_txt", 0] },
            current_location_txt: { "$arrayElemAt": ["$bindata.current_location_txt", 0] },
            nearest_stores_txt: { "$arrayElemAt": ["$bindata.nearest_stores_txt", 0] },
            show_hide_txt: { "$arrayElemAt": ["$bindata.show_hide_txt", 0] },
            open_in_map_txt: { "$arrayElemAt": ["$bindata.open_in_map_txt", 0] },
            search_txt: { "$arrayElemAt": ["$bindata.search_txt", 0] },
            close_txt: { "$arrayElemAt": ["$bindata.close_txt", 0] },
            no_store_txt: { "$arrayElemAt": ["$bindata.no_store_txt", 0] },
            no_store_desc: { "$arrayElemAt": ["$bindata.no_store_desc", 0] },
            contact_txt: { "$arrayElemAt": ["$bindata.contact_txt", 0] },
            contact_url: { "$arrayElemAt": ["$bindata.contact_url", 0] },
            store_count: { "$arrayElemAt": ["$bindata.store_count", 0] },
            search_radius: { "$arrayElemAt": ["$bindata.search_radius", 0] },
            metric_txt: { "$arrayElemAt": ["$bindata.metric_txt", 0] },
            imperial_txt: { "$arrayElemAt": ["$bindata.imperial_txt", 0] },
            result_txt: { "$arrayElemAt": ["$bindata.result_txt", 0] },
            in_stock_txt: { "$arrayElemAt": ["$bindata.in_stock_txt", 0] },
            buy_now_text: { "$arrayElemAt": ["$bindata.buy_now_text", 0] },
            out_stock_txt: { "$arrayElemAt": ["$bindata.out_stock_txt", 0] },
            enable_custom_check: { "$arrayElemAt": ["$bindata.enable_custom_check", 0] },
            unavailable_custom_text: { "$arrayElemAt": ["$bindata.unavailable_custom_text", 0] },
            unavailable_text: { "$arrayElemAt": ["$bindata.unavailable_text", 0] },
            two_decimal_check: { "$arrayElemAt": ["$bindata.two_decimal_check", 0] },
            is_app_enable_txt: { "$arrayElemAt": ["$bindata.is_app_enable_txt", 0] },
            buy_now_custom_text: { "$arrayElemAt": ["$bindata.buy_now_custom_text", 0] },
            open_app_txt: { "$arrayElemAt": ["$bindata.open_app_txt", 0] },
            theme_name: { "$arrayElemAt": ["$bindata.theme_name", 0] },
            img_align: { "$arrayElemAt": ["$bindata.img_align", 0] },
          },
        },
      ])
      .exec();
    if (!existingWidget) {
      throw new NotFoundException(`Widget #${hash_key} not found`);
    } 
    return existingWidget[0]; */
    return [];
  }

  update(id: any, updateWidgetDto: UpdateWidgetDto) {
    return `This action updates a #${id} widget`;
  }

  remove(id: any) {
    return `This action removes a #${id} widget`;
  }
}

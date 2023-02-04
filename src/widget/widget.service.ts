import { Model } from 'mongoose';
import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { CreateWidgetDto } from './dto/create-widget.dto';
import { UpdateWidgetDto } from './dto/update-widget.dto';
import { Widget } from './interfaces/widget.interface';
import * as mongoose from 'mongoose';

@Injectable()
export class WidgetService {
  constructor(
    @Inject('WIDGET_MODEL')
    private widgetModel: Model<Widget>,
  ) { }

  create(createWidgetDto: CreateWidgetDto) {
    return 'This action adds a new widget';
  }

  async findAll() {
    // return await this.widgetModel.find().exec();
    return 'This action return all widget';
  }

  async findOne(id: string) {
    // const existingWidget = await this.widgetModel.findById(id).exec();
    const existingWidget = await this.widgetModel.aggregate([
      {
        $match: {
          _id: new mongoose.Types.ObjectId(id)
        }
      },
      {

        $lookup: {
          from: "bin_theme_config",
          localField: "bin_theme_doc_id",
          foreignField: "_id",
          as: "userdata",
        },

      }
    ]).exec();
    if (!existingWidget) {
      throw new NotFoundException(`Widget #${id} not found`);
    }
    return existingWidget;
  }

  update(id: any, updateWidgetDto: UpdateWidgetDto) {
    return `This action updates a #${id} widget`;
  }

  remove(id: any) {
    return `This action removes a #${id} widget`;
  }
}

import { Model } from 'mongoose';
import { Injectable, Inject, NotFoundException  } from '@nestjs/common';
import { CreateWidgetDto } from './dto/create-widget.dto';
import { UpdateWidgetDto } from './dto/update-widget.dto';
import { Widget } from './interfaces/widget.interface';

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
    const existingStudent = await this.widgetModel.findById(id).exec();
    if (!existingStudent) {
      throw new NotFoundException(`Student #${id} not found`);
    }
    return existingStudent;
  }

  update(id: any, updateWidgetDto: UpdateWidgetDto) {
    return `This action updates a #${id} widget`;
  }

  remove(id: any) {
    return `This action removes a #${id} widget`;
  }
}

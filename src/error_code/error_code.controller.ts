import { Controller, Get, Post, Body, Patch, Param, Delete, Req } from '@nestjs/common';
import { ErrorCodeService } from './error_code.service';
import { CreateErrorCodeDto } from './dto/create-error_code.dto';
import { UpdateErrorCodeDto } from './dto/update-error_code.dto';
import { Request } from 'express';

@Controller('widget_price_theme_new_v1')
export class ErrorCodeController {
  constructor(private readonly errorCodeService: ErrorCodeService) { }

  @Post()
  create(@Body() createErrorCodeDto: CreateErrorCodeDto) {
    return this.errorCodeService.create(createErrorCodeDto);
  }

  /*
    @Get()
    findAll() {
      return this.errorCodeService.findAll();
    }
  */

  @Get(':framework')
  getData(@Req() request: Request): Object {
    return { ...request.params, ...request.query };
  }
/*

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.errorCodeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateErrorCodeDto: UpdateErrorCodeDto) {
    return this.errorCodeService.update(+id, updateErrorCodeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.errorCodeService.remove(+id);
  }
*/
}

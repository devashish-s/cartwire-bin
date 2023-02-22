import {
  Controller, Get, Req, Param, UseInterceptors, CACHE_MANAGER, Inject, CacheInterceptor
} from '@nestjs/common';
import { Cache } from 'cache-manager';
import { ErrorCodeService } from './error_code.service';
import { Request } from 'express';

@Controller('widget_price_theme_new_v1')
@UseInterceptors(CacheInterceptor)
export class ErrorCodeController {

  constructor(
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
    private readonly errorCodeService: ErrorCodeService
  ) { }

  @Get(':framework')
  getData(@Param('framework') framework: string, @Req() request: Request) {
    let widget_data;
    if(framework == ''){
       widget_data = this.errorCodeService.findOne(request.query.keyVal, request.query.langCode);
    }else{
       widget_data = {framework, request};
    }
    
    return widget_data;

  }

}

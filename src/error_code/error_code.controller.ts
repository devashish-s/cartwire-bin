import {
  Controller, Render, Get, Req, Param, UseInterceptors, CACHE_MANAGER, Inject, CacheInterceptor
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
  @Render('layouts/main')
  getData(@Param('framework') framework: string, @Req() request: Request) {

    let widget_data;
    if(framework != 'errorCode'){
       widget_data = this.errorCodeService.findOne(request.query.keyVal, request.query.langCode);
    }else{
       widget_data = this.errorCodeService.findOne("d7aa2402e8138e016cebe5daf96eaa33", "en");
    }
    
    return widget_data;

  }

}

import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('layouts/main')
  getHello(): object {
    return this.appService.getHello();
  }
}
/*
import { Controller, Get } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
@Controller()
export class AppController {
  constructor() { }
  @EventPattern('message_printed')
  async handleMessagePrinted(data: Record<string, unknown>) {
    console.log(data.text);
 }
}
*/
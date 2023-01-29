import { Controller, Get, Render, Logger } from '@nestjs/common';
import { AppService } from './app.service'; 

@Controller()
export class AppController {
  private readonly logger = new Logger(AppController.name);
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('layouts/main')
  getHello(): object {
    this.logger.warn('Getting stuff');
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
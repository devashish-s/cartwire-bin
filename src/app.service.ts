import { Injectable } from '@nestjs/common';
const bin_info = require('../test.json');
// import * as bin_info from 'test.json';

@Injectable()
export class AppService {
  getHello(): object {
    console.log(bin_info.title);
    return bin_info;
  }
}

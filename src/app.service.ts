import { Injectable } from '@nestjs/common';
const { SecretManagerServiceClient } = require('@google-cloud/secret-manager').v1;
const bin_info = require('../test.json');

// import * as bin_info from 'test.json';

@Injectable()
export class AppService {
  //  getHello(): object {
  async getHello() {
    const name = 'projects/exploring-gcp-373314/secrets/CARTWIRE_BIN_PROD_DATABASE'
    const secretmanagerClient = new SecretManagerServiceClient();
    const request = {
      name,
    };
    const response = await secretmanagerClient.getSecret(request);
    console.log(response);
    console.log(bin_info.title);
    return {response, ...bin_info};
  }
}

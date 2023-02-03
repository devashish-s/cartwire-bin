import { Injectable } from '@nestjs/common';
const { SecretManagerServiceClient } = require('@google-cloud/secret-manager').v1;
const bin_info = require('../test.json');

// import * as bin_info from 'test.json';
// gcloud secrets versions access "latest" --secret "CARTWIRE_BIN_PROD_DATABASE"

@Injectable()
export class AppService {
  //  getHello(): object {
  async getHello() {
    const name = 'projects/exploring-gcp-373314/secrets/CARTWIRE_BIN_PROD_DATABASE/versions/1'
    const secretmanagerClient = new SecretManagerServiceClient();
    const request = {
      name,
    };
    const response = await secretmanagerClient.getSecret(request);
    console.log(request);
    console.log(bin_info.title);
    return {request, ...bin_info};
  }
}

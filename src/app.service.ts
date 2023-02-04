import { Injectable } from '@nestjs/common';
const { SecretManagerServiceClient } = require('@google-cloud/secret-manager').v1;
const bin_info = require('../test.json');
require('dotenv').config()

// import * as bin_info from 'test.json';
// gcloud secrets versions access "latest" --secret "CARTWIRE_BIN_PROD_DATABASE"
/*
gcloud secrets versions access latest --project=exploring-gcp-373314 --secret=CARTWIRE_BIN_PROD_DATABASE

gcloud projects add-iam-policy-binding exploring-gcp-373314 --member="user:ankitdevashish@gmail.com" --role=roles/secretmanager.admin
gcloud projects add-iam-policy-binding exploring-gcp-373314 --member="user:ankitdevashish@gmail.com" --role=roles/container.clusterAdmin
gcloud projects add-iam-policy-binding exploring-gcp-373314 --member="user:ankitdevashish@gmail.com" --role=roles/iam.serviceAccountAdmin

gcloud secrets add-iam-policy-binding CARTWIRE_BIN_PROD_DATABASE \
    --member=serviceAccount:readonly-secrets@exploring-gcp-373314.iam.gserviceaccount.com \
    --role='roles/secretmanager.secretAccessor'

    gcloud secrets add-iam-policy-binding CARTWIRE_BIN_PROD_DATABASE \
    --member=serviceAccount:readonly-secrets@exploring-gcp-373314.iam.gserviceaccount.com \
    --role='roles/secretmanager.secretAccessor'

    gcloud iam service-accounts add-iam-policy-binding readonly-secrets@exploring-gcp-373314.iam.gserviceaccount.com \
    --member=serviceAccount:exploring-gcp-373314.svc.id.goog[readonly-ns/readonly-sa] \
    --role='roles/iam.workloadIdentityUser'
gcloud iam service-accounts add-iam-policy-binding readwrite-secrets@exploring-gcp-373314.iam.gserviceaccount.com \
    --member=serviceAccount:exploring-gcp-373314.svc.id.goog[admin-ns/admin-sa] \
    --role='roles/iam.workloadIdentityUser'

    kubectl annotate serviceaccount readonly-sa \
    --namespace=readonly-ns \
    iam.gke.io/gcp-service-account=readonly-secrets@exploring-gcp-373314.iam.gserviceaccount.com


kubectl annotate serviceaccount admin-sa \
    --namespace=admin-ns \
    iam.gke.io/gcp-service-account=readwrite-secrets@exploring-gcp-373314.iam.gserviceaccount.com
*/ 
 
@Injectable()
export class AppService {
  //  getHello(): object {
  async getHello() {
    const name = 'projects/exploring-gcp-373314/secrets/CARTWIRE_BIN_PROD_DATABASE/versions/1'
    const secretmanagerClient = new SecretManagerServiceClient();
    const request = {
      name,
    };
    // const response = await secretmanagerClient.accessSecretVersion(request);
   
    console.log(process.env.DB_CONNECT);
    console.log(process.env.DB_VAR);
   // console.log(response);
    console.log(bin_info.title);
    return {request, ...bin_info};
  }
}

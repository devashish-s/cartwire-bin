import { Injectable } from '@nestjs/common';
const bin_info = require('../test.json');
// import { ConfigService } from '@nestjs/config';

const { SecretManagerServiceClient } = require('@google-cloud/secret-manager');

// import * as bin_info from 'test.json';
// gcloud secrets versions access "latest" --secret "CARTWIRE_BIN_PROD_DATABASE"
/*
gcloud secrets versions access latest --project=cartwire-380103 --secret=CARTWIRE_BIN_PROD_DATABASE

gcloud projects add-iam-policy-binding cartwire-380103 --member="user:ankitdevashish@gmail.com" --role=roles/secretmanager.admin
gcloud projects add-iam-policy-binding cartwire-380103 --member="user:ankitdevashish@gmail.com" --role=roles/container.clusterAdmin
gcloud projects add-iam-policy-binding cartwire-380103 --member="user:ankitdevashish@gmail.com" --role=roles/iam.serviceAccountAdmin

gcloud secrets add-iam-policy-binding CARTWIRE_BIN_PROD_DATABASE \
    --member=serviceAccount:readonly-secrets@cartwire-380103.iam.gserviceaccount.com \
    --role='roles/secretmanager.secretAccessor'

    gcloud secrets add-iam-policy-binding CARTWIRE_BIN_PROD_DATABASE \
    --member=serviceAccount:readonly-secrets@cartwire-380103.iam.gserviceaccount.com \
    --role='roles/secretmanager.secretAccessor'

    gcloud iam service-accounts add-iam-policy-binding readonly-secrets@cartwire-380103.iam.gserviceaccount.com \
    --member=serviceAccount:cartwire-380103.svc.id.goog[readonly-ns/readonly-sa] \
    --role='roles/iam.workloadIdentityUser'
gcloud iam service-accounts add-iam-policy-binding readwrite-secrets@cartwire-380103.iam.gserviceaccount.com \
    --member=serviceAccount:cartwire-380103.svc.id.goog[admin-ns/admin-sa] \
    --role='roles/iam.workloadIdentityUser'

    kubectl annotate serviceaccount readonly-sa \
    --namespace=readonly-ns \
    iam.gke.io/gcp-service-account=readonly-secrets@cartwire-380103.iam.gserviceaccount.com


kubectl annotate serviceaccount admin-sa \
    --namespace=admin-ns \
    iam.gke.io/gcp-service-account=readwrite-secrets@cartwire-380103.iam.gserviceaccount.com
*/

@Injectable()
export class AppService {
  //  getHello(): object {
//  constructor(private configService: ConfigService) { }

  async getHello() {

 //   console.log(this.configService.get<string>('DB_CONNECT'));
 //   console.log(this.configService.get<string>('DB_VAR'));
 //   console.log(this.configService.get<string>('WORKLOAD_SA'));

    // console.log('SECRET_PASSWORD-',this.configService.get<string>('SECRET_PASSWORD'));

    console.log(process.env.MY_SECRET);
    console.log(process.env.MY_SECRET_D);

    console.log(process.env.WORKLOAD_SA);
    // console.log(process.env);
    // console.log(this.configService.get<string>('MY_SECRET'));

    // console.log(await accessSecretVersion("cartwire-380103", "CARTWIRE_BIN_PROD_DATABASE"))

    // let response = await accessSecretVersion("cartwire-380103", "CARTWIRE_BIN_PROD_DATABASE");
    // console.log(response);

    return { ...bin_info };
  }
}

async function accessSecretVersion(projectId: string, secretId: string) {
  // Create the client
  const client = new SecretManagerServiceClient();

  // Build the resource name of the secret
  const name = client.secretVersionPath(projectId, secretId, 'latest');

  // Access the secret value
  const [version] = await client.accessSecretVersion({ name });
  const secretValue = version.payload.data.toString();

  return secretValue;
}

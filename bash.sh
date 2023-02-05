SECRET_NAME="CARTWIRE_BIN_PROD_DATABASE"
PROJECT_ID="exploring-gcp-373314"

# retrieve the secret value
SECRET_VALUE= gcloud secrets versions access latest --secret="$SECRET_NAME" --project="$PROJECT_ID"

# store the secret value in an environment variable
export MY_SECRET="$SECRET_VALUE"

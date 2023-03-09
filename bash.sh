SECRET_NAME="CARTWIRE_BIN_PROD_DATABASE"
PROJECT_ID="cartwire-380103"

# retrieve the secret value
SECRET_VALUE= gcloud secrets versions access latest --secret="$SECRET_NAME" --project="$PROJECT_ID"

# store the secret value in an environment variable
export MY_SECRET="$SECRET_VALUE"
export MY_SECRET_D="testestestest"

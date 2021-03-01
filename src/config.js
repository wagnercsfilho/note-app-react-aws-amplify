const config = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "wcsf-notes-app-upload",
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://tsmz8t3bs4.execute-api.us-east-1.amazonaws.com/dev/",
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_bQHUjJFeG",
    APP_CLIENT_ID: "92c1n0oslelrina1ljoi1r14k",
    IDENTITY_POOL_ID: "us-east-1:16879398-2fc1-48a5-87bf-557a788c2157",
  },
  STRIPE_KEY: "pk_test_51IPyLdH3nZO6r7XZO5WREKq1iNo8nrwN9rxeHXpOz09qfCkvekefMbddXVv6mQNnTqsJ39izDAt7WD0ofddporE7002SvIg6uM",
};

export default config;

const dev = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "dev-notes-infra-s3-uploads4f6eb0fd-1p0pkxsn9sv07",
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://tsmz8t3bs4.execute-api.us-east-1.amazonaws.com/dev/",
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_mQhUFtBlz",
    APP_CLIENT_ID: "45apneninnpe83op8kt3fs5545",
    IDENTITY_POOL_ID: "us-east-1:d67b00bc-5940-47d5-804e-b308bf974cd6",
  },
  STRIPE_KEY: "pk_test_51IPyLdH3nZO6r7XZO5WREKq1iNo8nrwN9rxeHXpOz09qfCkvekefMbddXVv6mQNnTqsJ39izDAt7WD0ofddporE7002SvIg6uM",
};

const prod = {
  STRIPE_KEY: "pk_test_51IPyLdH3nZO6r7XZO5WREKq1iNo8nrwN9rxeHXpOz09qfCkvekefMbddXVv6mQNnTqsJ39izDAt7WD0ofddporE7002SvIg6uM",
  s3: {
    REGION: "us-east-1",
    BUCKET: "prod-notes-infra-s3-uploads4f6eb0fd-qfw5vtl4toxt"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://s46cywfufj.execute-api.us-east-1.amazonaws.com/prod/"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_ePRwJoGvD",
    APP_CLIENT_ID: "4pk0o0rfieohiacuiisc9mphij",
    IDENTITY_POOL_ID: "us-east-1:250c8609-4bfa-4d3b-b40c-f781e2fc2750"
  }
};

const config = {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  // Default to dev if not set
  ...(process.env.REACT_APP_STAGE === "prod" ? prod : dev),
};

export default config;

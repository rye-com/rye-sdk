export enum OPERATION {
  QUERY = 'query',
  MUTATION = 'mutation',
}

export enum ENVIRONMENT {
  PRODUCTION = 'production',
  STAGING = 'staging',
  LOCAL = 'local',
}

export const DEFAULT_ENVIRONMENT = ENVIRONMENT.PRODUCTION;

export const GRAPHQL_ENDPOINTS = {
  [ENVIRONMENT.PRODUCTION]: 'https://graphql.api.rye.com/v1/query',
  [ENVIRONMENT.STAGING]: 'https://staging.beta.graphql.api.rye.com/v1/query',
  [ENVIRONMENT.LOCAL]: 'http://localhost:3000/v1/query',
};

export const RYE_SDK_VERSION = 'development';

export const RYE_SHOPPER_IP = 'rye-shopper-ip';

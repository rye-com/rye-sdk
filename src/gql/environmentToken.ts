import { graphql } from '../graphql';

export const ENVIRONMENT_TOKEN_QUERY = graphql(`
  query EnvironmentToken {
    environmentToken {
      token
    }
  }
`);

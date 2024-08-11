import { graphql } from '../graphql';

export const REQUEST_STORE_BY_URL_MUTATION = graphql(`
  mutation RequestStoreByURL($input: RequestStoreByURLInput!) {
    requestStoreByURL(input: $input) {
      canonicalDomain
      requestID
    }
  }
`);

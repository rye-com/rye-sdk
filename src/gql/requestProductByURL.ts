import { graphql } from "../graphql";

export const REQUEST_PRODUCT_BY_URL_MUTATION = graphql(`
  mutation RequestProductByURL($input: RequestProductByURLInput!) {
    requestProductByURL(input: $input) {
      productID
    }
  }
`);

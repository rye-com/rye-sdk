import { graphql } from '../graphql';

export const PRODUCT_BY_ID_QUERY = graphql(`
  query ProductByID($input: ProductByIDInput!, $includeAdditionalProductDetails: Boolean = false) {
    productByID(input: $input) {
      ...ProductDetails
      ...AdditionalProductDetails @include(if: $includeAdditionalProductDetails)
    }
  }
`);

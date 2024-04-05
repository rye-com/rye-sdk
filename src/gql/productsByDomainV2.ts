import { graphql } from '../graphql';

export const PRODUCTS_BY_DOMAIN_V2_QUERY = graphql(`
  query ProductsByDomainV2(
    $input: productsByDomainInput!
    $pagination: OffsetPaginationInput!
    $includeAdditionalProductDetails: Boolean = false
  ) {
    productsByDomainV2(input: $input, pagination: $pagination) {
      ...ProductDetails
      ...AdditionalProductDetails @include(if: $includeAdditionalProductDetails)
    }
  }
`);

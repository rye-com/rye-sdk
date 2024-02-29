import { graphql } from "../graphql";

export const INTEGRATED_SHOPIFY_STORE_QUERY = graphql(`
  query IntegratedShopifyStore(
    $canonicalDomain: String!
    $productsIDs: [ID!]!
    $collectionsFirst: Int
    $collectionsLast: Int
    $collectionsAfter: ID
    $collectionsBefore: ID
    $productsAfter: ID
    $productsBefore: ID
    $productsFirst: Int
    $productsLast: Int
  ) {
    integratedShopifyStore(canonicalDomain: $canonicalDomain) {
      canonicalDomain
      logoUrl
      email
      commission {
        commissionProposal {
          createdAt
          ratePercent
        }
        currentRatePercent
      }
      productsByIDs(ids: $productsIDs) {
        ...ShopifyProduct
      }
      collectionsConnection(
        last: $collectionsLast
        before: $collectionsBefore
        first: $collectionsFirst
        after: $collectionsAfter
      ) {
        pageInfo {
          endCursor
          hasNextPage
          hasPreviousPage
          startCursor
        }
        edges {
          cursor
          node {
            id
            title
            description
            productsConnection(
              first: $productsFirst
              last: $productsLast
              after: $productsAfter
              before: $productsBefore
            ) {
              edges {
                ...ShopifyProductEdge
              }
              pageInfo {
                endCursor
                hasNextPage
                hasPreviousPage
                startCursor
              }
            }
          }
        }
      }
    }
  }
`);

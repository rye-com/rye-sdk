import { graphql } from "../graphql";

export const SHOPIFY_COLLECTION_QUERY = graphql(`
  query ShopifyCollection(
    $collectionId: String!
    $productsAfter: ID
    $productsBefore: ID
    $productsFirst: Int
    $productsLast: Int
  ) {
    shopifyCollection(id: $collectionId) {
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
`);

import { graphql } from "../graphql";

export const GET_CART_QUERY = graphql(`
  query GetCart(
    $id: ID!
    $fetchBuyerIdentity: Boolean = true
    $fetchShippingMethods: Boolean = true
    $fetchOffer: Boolean = true
    $fetchCartLines: Boolean = true
  ) {
    getCart(id: $id) {
      cart {
        id
        ...BuyerIdentity @include(if: $fetchBuyerIdentity)
        stores {
          ... on AmazonStore {
            isSubmitted
            requestId
            errors {
              code
              message
              details {
                productIds
              }
            }
            store
            ...AmazonCartLines @include(if: $fetchCartLines)
            isShippingRequired
            ...AmazonOffer @include(if: $fetchOffer)
            offer {
              ...AmazonShippingMethods @include(if: $fetchShippingMethods)
            }
          }
          ... on ShopifyStore {
            errors {
              code
              message
              details {
                variantIds
              }
            }
            store
            ...ShopifyCartLines @include(if: $fetchCartLines)
            ...ShopifyOffer @include(if: $fetchOffer)
            offer {
              ...ShopifyShippingMethods @include(if: $fetchShippingMethods)
            }
          }
        }
      }
      errors {
        code
        message
      }
    }
  }
`);

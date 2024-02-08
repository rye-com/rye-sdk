import { graphql } from "../graphql";

export const CHECKOUT_BY_CART_ID_QUERY = graphql(`
  query CheckoutByCartID(
    $cartID: ID!
    $fetchBuyerIdentity: Boolean = true
    $fetchShippingMethods: Boolean = true
    $fetchOffer: Boolean = true
    $fetchCartLines: Boolean = true
  ) {
    checkoutByCartID(cartID: $cartID) {
      status
      orders {
        id
        status
        events {
          __typename
          id
          createdAt
          ... on OrderFailedOrderEvent {
            reason
          }
        }
        requiredActions {
          ... on CompletePaymentChallenge {
            redirectURL
          }
        }
      }
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
    }
  }
`);
